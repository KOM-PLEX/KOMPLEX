'use client';

import { useState, useEffect } from 'react';
import { Save, X, Upload, Trash, Play, Clock, Calendar } from 'lucide-react';
import axios from 'axios';
import type { VideoPost } from '@/types/content/videos';
import { ExerciseQuestion } from '@/types/topic';
import ExerciseCreationBox from '@/components/pages/docs/common/box/ExerciseCreationBox';

interface EditVideoProps {
    video: VideoPost;
    onSave: (updatedVideo: VideoPost) => void;
    onCancel: () => void;
}

interface EditVideoFormData {
    title: string;
    description: string;
    thumbnail: string;
    exercises: ExerciseQuestion[];
}

interface BackendExerciseChoice {
    text: string;
    isCorrect: boolean;
}

interface BackendExerciseQuestion {
    title: string;
    choices: BackendExerciseChoice[];
}

interface BackendExerciseData {
    questions: BackendExerciseQuestion[];
}

export default function EditVideo({ video, onSave, onCancel }: EditVideoProps) {
    const [formData, setFormData] = useState<EditVideoFormData>({
        title: video.title,
        description: video.description,
        thumbnail: video.thumbnailUrl,
        exercises: []
    });

    const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
    const [videoPreview, setVideoPreview] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    // Initialize form with existing video data
    useEffect(() => {
        setFormData({
            title: video.title,
            description: video.description,
            thumbnail: video.thumbnailUrl,
            exercises: []
        });
        setSelectedVideo(null);
        setVideoPreview(null);
        setError(null);
        setUploadProgress(0);
    }, [video]);

    // Fetch existing exercises for this video
    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const response = await axios.get(`http://localhost:6969/exercises/${video.id}`); // ! TO CHANGE  
                const exerciseData: BackendExerciseData = response.data;
                if (exerciseData && exerciseData.questions) {
                    // Convert backend format to ExerciseQuestion format
                    const convertedExercises = exerciseData.questions.map((q: BackendExerciseQuestion, index: number) => ({
                        id: `exercise_${index}`,
                        question: q.title,
                        options: q.choices.map((c: BackendExerciseChoice) => c.text),
                        correctAnswer: q.choices.findIndex((c: BackendExerciseChoice) => c.isCorrect)
                    }));
                    setFormData(prev => ({ ...prev, exercises: convertedExercises }));
                }
            } catch (error) {
                console.error('Error fetching exercises:', error);
                // If no exercises exist, that's fine
            }
        };

        fetchExercises();
    }, [video.id]);

    const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Validate file type
            if (!file.type.startsWith('video/')) {
                setError('សូមជ្រើសរើសឯកសារវីដេអូតែប៉ុណ្ណោះ');
                return;
            }

            // Validate file size (100MB limit)
            if (file.size > 100 * 1024 * 1024) {
                setError('ទំហំឯកសារមិនអាចលើស 100MB បានទេ');
                return;
            }

            setSelectedVideo(file);
            setError(null);

            // Create preview URL
            const previewUrl = URL.createObjectURL(file);
            setVideoPreview(previewUrl);

            // Auto-generate thumbnail from new video
            generateThumbnail(previewUrl);
        }
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

    const removeVideo = () => {
        setSelectedVideo(null);
        setVideoPreview(null);
        if (videoPreview) {
            URL.revokeObjectURL(videoPreview);
        }
        // Reset thumbnail to original
        setFormData(prev => ({ ...prev, thumbnail: video.thumbnailUrl }));
    };

    // Handle form changes
    const handleInputChange = (field: keyof EditVideoFormData, value: string | ExerciseQuestion[]) => {
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

    const handleSave = async () => {
        if (!formData.title.trim() || !formData.description.trim()) {
            alert('សូមបំពេញចំណងជើងនិងការពិពណ៌នា');
            return;
        }

        try {
            setIsSaving(true);
            setUploadProgress(0);

            let videoKey = video.videoUrlForDeletion;
            let thumbnailKey = video.thumbnailUrlForDeletion;

            // If new video is selected, upload it
            if (selectedVideo) {
                setUploadProgress(20);

                // Get presigned URL for new video
                const videoResponse = await axios.post(`http://localhost:6969/upload/upload-url`, {
                    fileName: selectedVideo.name,
                    fileType: selectedVideo.type,
                });

                // Upload new video
                await axios.put(videoResponse.data.signedUrl, selectedVideo, {
                    headers: {
                        "Content-Type": selectedVideo.type
                    }
                });

                videoKey = videoResponse.data.key;
                setUploadProgress(40);
            }

            // If thumbnail changed, upload new thumbnail
            if (formData.thumbnail !== video.thumbnailUrl) {
                setUploadProgress(60);

                const thumbnailFileName = `thumbnail_${Date.now()}.jpg`;
                const thumbnailResponse = await axios.post(`http://localhost:6969/upload/upload-url`, {
                    fileName: thumbnailFileName,
                    fileType: 'image/jpeg',
                });

                const thumbnailBlob = base64ToBlob(formData.thumbnail);
                await axios.put(thumbnailResponse.data.signedUrl, thumbnailBlob, {
                    headers: {
                        "Content-Type": "image/jpeg"
                    }
                });

                thumbnailKey = thumbnailResponse.data.key;
                setUploadProgress(80);
            }

            // Update video data
            await axios.patch(`http://localhost:6969/user-content/videos/${video.id}`, {
                title: formData.title,
                description: formData.description,
                videoKey: videoKey,
                thumbnailKey: thumbnailKey,
            });

            // Update exercises
            if (formData.exercises.length > 0) {
                const exerciseData = {
                    videoId: video.id,
                    questions: convertExercisesToBackendFormat(formData.exercises)
                };

                // Try to update existing exercises, if fails, create new ones
                try {
                    await axios.put(`http://localhost:6969/exercises/${video.id}`, exerciseData);
                } catch (error) {
                    // If update fails, create new exercises
                    await axios.post(`http://localhost:6969/exercises`, exerciseData);
                }
            }

            setUploadProgress(100);

            // Fetch updated video data
            const updatedResponse = await axios.get(`http://localhost:6969/user-content/videos/${video.id}`);
            onSave(updatedResponse.data);

            // Reset edit form states
            setSelectedVideo(null);
            setVideoPreview(null);
            if (videoPreview) {
                URL.revokeObjectURL(videoPreview);
            }

        } catch (error) {
            console.error('Error updating video:', error);
            alert('មានបញ្ហាកើតឡើងពេលរក្សាទុកវីដេអូ សូមព្យាយាមម្តងទៀត');
        } finally {
            setIsSaving(false);
            setUploadProgress(0);
        }
    };

    const resetEditForm = () => {
        setFormData({
            title: video.title,
            description: video.description,
            thumbnail: video.thumbnailUrl,
            exercises: []
        });
        setSelectedVideo(null);
        setVideoPreview(null);
        setError(null);
        setUploadProgress(0);
        if (videoPreview) {
            URL.revokeObjectURL(videoPreview);
        }
    };

    const formatDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const isFormValid = () => {
        return formData.title.trim() &&
            formData.description.trim() &&
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
                })
            );
    };

    return (
        <div className="space-y-6">
            {/* Title Input */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <label className="block text-sm font-medium mb-2 text-gray-700">
                    ចំណងជើង
                </label>
                <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="សរសេរចំណងជើងវីដេអូរបស់អ្នក..."
                    className="w-full px-4 py-3 bg-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 border border-gray-200"
                />
            </div>

            {/* Video Replacement Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <label className="block text-sm font-medium mb-2 text-gray-700">
                    ជំនួសវីដេអូ
                </label>

                {/* Current Video Display */}
                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                        <Play className="w-5 h-5 text-indigo-600" />
                        <span className="font-medium text-gray-900">វីដេអូបច្ចុប្បន្ន</span>
                    </div>
                    <div className="relative">
                        <video
                            src={video.videoUrl}
                            poster={video.thumbnailUrl}
                            className="w-full h-48 object-cover rounded-lg"
                            controls
                        />
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                            {formatDuration(video.duration)}
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                        ទំហំ: {video.title} • រយៈពេល: {formatDuration(video.duration)}
                    </p>
                </div>

                {/* New Video Upload */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-400 transition-colors duration-200">
                    {!selectedVideo ? (
                        <div>
                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600 mb-2">អូសវីដេអូឬជ្រើសរើសឯកសារ</p>
                            <p className="text-sm text-gray-500 mb-4">
                                គាំទ្រទម្រង់ MP4, MOV, AVI • ទំហំអតិបរមា 100MB
                            </p>
                            <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                                <Upload className="w-4 h-4 mr-2" />
                                ជ្រើសរើសវីដេអូ
                                <input
                                    type="file"
                                    accept="video/*"
                                    onChange={handleVideoUpload}
                                    className="hidden"
                                />
                            </label>
                        </div>
                    ) : (
                        <div>
                            <div className="relative mb-4">
                                <video
                                    src={videoPreview || ''}
                                    className="w-full h-48 object-cover rounded-lg"
                                    controls
                                />
                                <button
                                    onClick={removeVideo}
                                    className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                                >
                                    <Trash className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                                ឯកសារថ្មី: {selectedVideo.name}
                            </p>
                            <p className="text-sm text-gray-500">
                                ទំហំ: {(selectedVideo.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                        </div>
                    )}
                </div>

                {error && (
                    <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600 text-sm">{error}</p>
                    </div>
                )}
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <label className="block text-sm font-medium mb-2 text-gray-700">
                    មាតិកា
                </label>
                <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="សរសេរមាតិកាវីដេអូរបស់អ្នក..."
                    className="w-full p-4 rounded-lg bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-colors duration-200"
                    rows={8}
                />
            </div>

            {/* MCQ Exercises */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">លំហាត់</h3>
                <ExerciseCreationBox
                    questions={formData.exercises}
                    onQuestionsChange={handleExercisesChange}
                />
            </div>

            {/* Upload Progress */}
            {isSaving && (
                <div className="bg-white rounded-2xl shadow-sm p-6">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">កំពុងរក្សាទុក...</span>
                        <span className="text-sm text-gray-500 font-medium">{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                            className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                        ></div>
                    </div>
                </div>
            )}

            {/* Action Buttons */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                    <button
                        onClick={() => {
                            resetEditForm();
                            onCancel();
                        }}
                        className="px-6 py-2 bg-gray-500 text-white rounded-lg transition-colors duration-200 hover:bg-gray-600 font-medium"
                    >
                        បោះបង់
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={!isFormValid() || isSaving}
                        className="px-6 py-2 bg-indigo-500 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center gap-2"
                    >
                        {isSaving ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                កំពុងរក្សាទុក...
                            </>
                        ) : (
                            <>
                                <Save className="w-4 h-4" />
                                រក្សាទុក
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
