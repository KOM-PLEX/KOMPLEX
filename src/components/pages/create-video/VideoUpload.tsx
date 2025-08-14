'use client';

import React, { useCallback, useState } from 'react';
import { Upload, X } from 'lucide-react';

interface VideoUploadProps {
    videoFile: File | null;
    videoPreview: string;
    onVideoSelect: (file: File) => void;
    onVideoRemove: () => void;
}

export default function VideoUpload({ videoFile, videoPreview, onVideoSelect, onVideoRemove }: VideoUploadProps) {
    const [isDragging, setIsDragging] = useState(false);

    // Handle drag and drop
    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const files = Array.from(e.dataTransfer.files);
        const videoFile = files.find(file => file.type.startsWith('video/'));

        if (videoFile) {
            onVideoSelect(videoFile);
        }
    }, [onVideoSelect]);

    // Handle file selection
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            onVideoSelect(file);
        }
    };

    return (
        <div className="lg:bg-white bg-gray-50 rounded-2xl lg:shadow-sm lg:p-6">
            <div className="hidden lg:flex items-center justify-between mb-6 pb-4 ">
                <div className="text-indigo-600 font-semibold text-xl flex gap-3 items-center">
                    <Upload className="text-indigo-600" />
                    ផ្ទុកវីដេអូ
                </div>
            </div>

            {!videoFile ? (
                <div
                    className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${isDragging
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-300 hover:border-gray-400'
                        }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <Upload size={80} className="text-gray-400 mx-auto mb-6" />
                    <p className="text-gray-600 mb-3 text-xl">
                        អូសវីដេអូមកទីនេះ ឬ <span className="text-indigo-600 font-medium">ជ្រើសរើសឯកសារ</span>
                    </p>
                    <p className="text-base text-gray-500 mb-6">
                        MP4, WebM, ឬ MOV រហូតដល់ 500MB
                    </p>
                    <input
                        type="file"
                        accept="video/*"
                        onChange={handleFileSelect}
                        className="hidden"
                        id="video-upload"
                    />
                    <label
                        htmlFor="video-upload"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer text-lg font-medium"
                    >
                        <Upload size={24} />
                        ជ្រើសរើសវីដេអូ
                    </label>
                </div>
            ) : (
                <div className="space-y-6">
                    <div className="relative">
                        <video
                            className="w-full aspect-video rounded-lg bg-black"
                            controls
                            src={videoPreview}
                        />
                        <button
                            onClick={onVideoRemove}
                            className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>
                    <div className="text-base text-gray-600 bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium">ឯកសារ: {videoFile.name}</p>
                        <p>ទំហំ: {(videoFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                    </div>
                </div>
            )}
        </div>
    );
}
