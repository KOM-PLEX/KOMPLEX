'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    ArrowLeft,
    Save
} from 'lucide-react';
import Sidebar from '@/components/pages/my-content/Sidebar';
import ExerciseCreationBox from '@/components/pages/docs/common/box/ExerciseCreationBox';
import VideoUpload from '@/components/pages/create-video/VideoUpload';
import Description from '@/components/pages/create-video/Description';
import { ExerciseQuestion } from '@/types/docs/topic';
import Link from 'next/link';
import axios from 'axios';

interface VideoFormData {
    title: string;
    description: string;
    thumbnail: string;
    exercises: ExerciseQuestion[];
}

export default function CreateVideoPage() {
    const router = useRouter();
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [videoPreview, setVideoPreview] = useState<string>('');

    const [formData, setFormData] = useState<VideoFormData>({
        title: '',
        description: '',
        thumbnail: '',
        exercises: []
    });

    const handleVideoSelect = (file: File) => {
        setVideoFile(file);

        // Create preview URL
        const url = URL.createObjectURL(file);
        setVideoPreview(url);

        // Auto-generate thumbnail from video
        generateThumbnail(url);
    };

    const generateThumbnail = (videoUrl: string) => {
        const video = document.createElement('video');
        video.src = videoUrl;
        video.currentTime = 1; // Seek to 1 second

        video.addEventListener('loadeddata', () => {
            const canvas = document.createElement('canvas');
            canvas.width = 320;
            canvas.height = 180;
            const ctx = canvas.getContext('2d');

            if (ctx) {
                ctx.drawImage(video, 0, 0, 320, 180);
                const thumbnailUrl = canvas.toDataURL('image/jpeg');
                setFormData(prev => ({ ...prev, thumbnail: thumbnailUrl }));
            }
        });
    };

    // Handle form changes
    const handleInputChange = (field: keyof VideoFormData, value: string | ExerciseQuestion[]) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    // Handle MCQ exercises
    const handleExercisesChange = (newExercises: ExerciseQuestion[]) => {
        setFormData(prev => ({
            ...prev,
            exercises: newExercises
        }));
    };

    // Convert base64 thumbnail to blob for upload
    const base64ToBlob = (base64: string): Blob => {
        const byteString = atob(base64.split(',')[1]);
        const mimeString = base64.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);

        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ab], { type: mimeString });
    };

    // Convert ExerciseQuestion to the backend format
    const convertExercisesToBackendFormat = (exercises: ExerciseQuestion[]) => {
        return exercises.map(exercise => ({
            title: exercise.question,
            choices: exercise.options.map((option, index) => ({
                text: option,
                isCorrect: index === exercise.correctAnswer
            }))
        }));
    };

    // Handle upload process
    const handleUpload = async () => {
        if (!videoFile) return;

        setIsUploading(true);
        setUploadProgress(0);

        try {
            // Step 1: Get presigned URLs for video and thumbnail
            const videoResponse = await axios.post(`http://localhost:6969/upload/upload-url`, {
                fileName: videoFile.name,
                fileType: videoFile.type,
            });

            // Generate a unique filename for thumbnail
            const thumbnailFileName = `thumbnail_${Date.now()}.jpg`;
            const thumbnailResponse = await axios.post(`http://localhost:6969/upload/upload-url`, {
                fileName: thumbnailFileName,
                fileType: 'image/jpeg',
            });

            // Step 2: Upload files to S3/R2 using presigned URLs
            setUploadProgress(30);

            // Upload video file
            await axios.put(videoResponse.data.signedUrl, videoFile, {
                headers: {
                    "Content-Type": videoFile.type
                }
            });

            setUploadProgress(60);

            // Upload thumbnail (convert base64 to blob first)
            const thumbnailBlob = base64ToBlob(formData.thumbnail);
            await axios.put(thumbnailResponse.data.signedUrl, thumbnailBlob, {
                headers: {
                    "Content-Type": "image/jpeg"
                }
            });

            setUploadProgress(80);

            // Step 3: Post video data to backend
            await axios.post(`http://localhost:6969/videos`, {
                videoKey: videoResponse.data.key,
                title: formData.title,
                description: formData.description,
                topic: 'biology', // Fake string for now
                type: 'biology',
                thumbnailKey: thumbnailResponse.data.key,
                questions: convertExercisesToBackendFormat(formData.exercises)
            });


            setUploadProgress(100);

            // Success! Redirect to videos page
            setTimeout(() => {
                router.push('/my-content/videos');
            }, 1000);

        } catch (error) {
            console.error('Error during upload:', error);
            alert('មានបញ្ហាក្នុងការផ្ទុកវីដេអូ។ សូមព្យាយាមម្តងទៀត។');
        } finally {
            setIsUploading(false);
            setUploadProgress(0);
        }
    };

    const isFormValid = () => {
        return videoFile &&
            formData.title.trim() &&
            formData.description.trim() &&
            (
                formData.exercises.every(ex => {
                    const questionText = typeof ex.question === 'string' ? ex.question : '';
                    const optionsText = ex.options.map(opt => typeof opt === 'string' ? opt : '');
                    const correctAnswer = typeof ex.correctAnswer === 'number' ? ex.correctAnswer : 0;

                    return questionText.trim() !== '' &&
                        optionsText.every(opt => opt.trim() !== '') &&
                        correctAnswer >= 0 &&
                        correctAnswer < ex.options.length;
                })
            );
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
                {/* Content */}
                <div className="p-6">
                    {/* Header with Back Button */}
                    <div className="mb-6 flex items-center justify-between">
                        <Link href="/my-content/videos" className="inline-flex items-center gap-2 font-medium transition-colors duration-200 text-gray-700">
                            <ArrowLeft className="w-4 h-4" />
                            ត្រឡប់ទៅវីដេអូរបស់ខ្ញុំ
                        </Link>
                    </div>

                    {/* Video Upload Component */}
                    <VideoUpload
                        videoFile={videoFile}
                        videoPreview={videoPreview}
                        onVideoSelect={handleVideoSelect}
                        onVideoRemove={() => {
                            setVideoFile(null);
                            setVideoPreview('');
                            setFormData(prev => ({ ...prev, thumbnail: '' }));
                        }}
                    />

                    {/* Single Column Layout for Description */}
                    <div className="mb-8 mt-8">
                        <Description
                            title={formData.title}
                            description={formData.description}
                            thumbnail={formData.thumbnail}
                            onTitleChange={(title) => handleInputChange('title', title)}
                            onDescriptionChange={(description) => handleInputChange('description', description)}
                        />
                    </div>

                    {/* MCQ Exercises - Using ExerciseCreationBox */}
                    <ExerciseCreationBox
                        questions={formData.exercises}
                        onQuestionsChange={handleExercisesChange}
                    />

                    {/* Upload Button */}
                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={handleUpload}
                            disabled={!isFormValid() || isUploading}
                            className={`flex items-center gap-3 px-10 py-4 rounded-lg font-semibold text-lg transition-colors ${isFormValid() && !isUploading
                                ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            {isUploading ? (
                                <>
                                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                                    កំពុងផ្ទុក... {uploadProgress}%
                                </>
                            ) : (
                                <>
                                    <Save size={24} />
                                    ផ្ទុកវីដេអូ
                                </>
                            )}
                        </button>
                    </div>

                    {/* Upload Progress */}
                    {isUploading && (
                        <div className="mt-8 max-w-md mx-auto">
                            <div className="bg-white rounded-lg p-6 shadow-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm font-medium text-gray-700">កំពុងផ្ទុកវីដេអូ...</span>
                                    <span className="text-sm text-gray-500 font-medium">{uploadProgress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div
                                        className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
                                        style={{ width: `${uploadProgress}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}