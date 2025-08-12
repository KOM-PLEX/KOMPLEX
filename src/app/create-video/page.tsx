'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Save,
    Search,
    Menu
} from 'lucide-react';
import Sidebar from '@/components/pages/video/Sidebar';
import ExerciseCreationBox from '@/components/pages/docs/common/box/ExerciseCreationBox';
import VideoUpload from '@/components/pages/create-video/VideoUpload';
import Description from '@/components/pages/create-video/Description';
import Tags from '@/components/pages/create-video/Tags';
import Settings from '@/components/pages/create-video/Settings';
import { ExerciseQuestion } from '@/types/topic';

interface VideoFormData {
    title: string;
    description: string;
    subjects: string[];
    thumbnail: string;
    showLikes: boolean;
    showComments: boolean;
    exercises: ExerciseQuestion[];
}



export default function CreateVideoPage() {
    const router = useRouter();
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [videoPreview, setVideoPreview] = useState<string>('');

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [formData, setFormData] = useState<VideoFormData>({
        title: '',
        description: '',
        subjects: ['គណិតវិទ្យា'],
        thumbnail: '',
        showLikes: true,
        showComments: true,
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
    const handleInputChange = (field: keyof VideoFormData, value: string | boolean | string[] | ExerciseQuestion[]) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    // Handle MCQ exercises
    const handleExercisesChange = (newExercises: ExerciseQuestion[]) => {
        console.log("excercise changed", newExercises);
        setFormData(prev => ({
            ...prev,
            exercises: newExercises
        }));
    };

    // Simulate upload process
    const handleUpload = async () => {
        if (!videoFile) return;

        setIsUploading(true);
        setUploadProgress(0);

        // Simulate upload progress
        const interval = setInterval(() => {
            setUploadProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsUploading(false);
                    // Redirect to video page after successful upload
                    setTimeout(() => router.push('/video'), 1000);
                    return 100;
                }
                return prev + 10;
            });
        }, 200);
    };

    const isFormValid = () => {
        return videoFile &&
            formData.title.trim() &&
            formData.description.trim() &&
            formData.subjects.length > 0 &&
            formData.exercises.length > 0 &&
            (
                formData.exercises.every(ex => {
                    const questionText = typeof ex.question === 'string' ? ex.question : '';
                    const optionsText = ex.options.map(opt => typeof opt === 'string' ? opt : '');
                    const correctAnswer = typeof ex.correctAnswer === 'number' ? ex.correctAnswer : 0;

                    return questionText.trim() !== '' &&
                        optionsText.every(opt => opt.trim() !== '') &&
                        correctAnswer >= 0 &&
                        correctAnswer < ex.options.length;
                }) || formData.exercises.length === 0
            );
    };

    return (
        <div className="flex h-screen bg-gray-50 pt-15">
            <Sidebar
                selectedSubject={formData.subjects[0] || 'all'}
                selectedDifficulty="all"
                onSubjectChange={(subject) => handleInputChange('subjects', [subject])}
                onDifficultyChange={() => { }}
                sidebarOpen={sidebarOpen}
                onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
            />

            {/* Main Content */}
            <div className="flex-1 overflow-y-scroll relative">
                {/* Header */}
                <div className="bg-white shadow-sm border-b border-gray-200 lg:p-2 py-2 px-5 sticky top-0 z-10">
                    <div className="flex justify-center items-center gap-2">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <Menu size={20} />
                        </button>

                        <div className="flex-1 relative max-w-[700px]">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="ស្វែងរកវីដេអូ..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
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

                    {/* 2 Column Layout: Subject, Settings, Description */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 mt-8">
                        {/* Description Component */}
                        <Description
                            title={formData.title}
                            description={formData.description}
                            thumbnail={formData.thumbnail}
                            onTitleChange={(title) => handleInputChange('title', title)}
                            onDescriptionChange={(description) => handleInputChange('description', description)}
                        />

                        {/* Right Column: Settings + Description Stacked */}
                        <div className="space-y-6">


                            {/* Tags Component */}
                            <Tags
                                subjects={formData.subjects}
                                onSubjectsChange={(subjects) => handleInputChange('subjects', subjects)}
                            />

                            {/* Settings Component */}
                            <Settings
                                showLikes={formData.showLikes}
                                showComments={formData.showComments}
                                onShowLikesChange={(show) => handleInputChange('showLikes', show)}
                                onShowCommentsChange={(show) => handleInputChange('showComments', show)}
                            />

                        </div>
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