'use client';

import { useState, useEffect } from 'react';
import { Save, X, Upload, Trash, Play } from 'lucide-react';
import axios from 'axios';
import type { VideoPost } from '@/types/content/videos';

interface EditVideoProps {
    video: VideoPost;
    onSave: (updatedVideo: VideoPost) => void;
    onCancel: () => void;
}

export default function EditVideo({ video, onSave, onCancel }: EditVideoProps) {
    const [title, setTitle] = useState(video.title);
    const [description, setDescription] = useState(video.description);
    const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
    const [videoPreview, setVideoPreview] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Initialize form with existing video data
    useEffect(() => {
        setTitle(video.title);
        setDescription(video.description);
        setSelectedVideo(null);
        setVideoPreview(null);
        setError(null);
    }, [video]);

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
        }
    };

    const removeVideo = () => {
        setSelectedVideo(null);
        setVideoPreview(null);
        if (videoPreview) {
            URL.revokeObjectURL(videoPreview);
        }
    };

    const handleSave = async () => {
        if (!title.trim() || !description.trim()) {
            alert('សូមបំពេញចំណងជើងនិងការពិពណ៌នា');
            return;
        }

        try {
            setIsSaving(true);

            const formData = new FormData();
            formData.append('title', title.trim());
            formData.append('description', description.trim());

            if (selectedVideo) {
                formData.append('video', selectedVideo);
            }

            await axios.patch(`http://localhost:6969/user-content/videos/${video.id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            // Fetch updated video data
            const updatedResponse = await axios.get(`http://localhost:6969/user-content/videos/${video.id}`);
            onSave(updatedResponse.data);

            // Reset edit form states
            setSelectedVideo(null);
            setVideoPreview(null);
        } catch (error) {
            console.error('Error updating video:', error);
            alert('មានបញ្ហាកើតឡើងពេលរក្សាទុកវីដេអូ សូមព្យាយាមម្តងទៀត');
        } finally {
            setIsSaving(false);
        }
    };

    const resetEditForm = () => {
        setTitle(video.title);
        setDescription(video.description);
        setSelectedVideo(null);
        setVideoPreview(null);
        setError(null);
    };

    const formatDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="rounded-2xl shadow-lg p-6 transition-colors duration-200 bg-white border border-gray-200">

            {/* Title Input */}
            <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-700">
                    ចំណងជើង
                </label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="សរសេរចំណងជើងវីដេអូរបស់អ្នក..."
                    className="w-full px-4 py-3 bg-indigo-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 border border-gray-200"
                />
            </div>

            {/* Video Replacement Section */}
            <div className="mb-6">
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
            </div>

            {/* Description */}
            <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-700">
                    មាតិកា
                </label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="សរសេរមាតិកាវីដេអូរបស់អ្នក..."
                    className="w-full p-4 rounded-lg bg-indigo-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-colors duration-200"
                    rows={8}
                />
            </div>

            {/* Action Buttons */}
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
                    disabled={!title.trim() || !description.trim() || isSaving}
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
    );
}
