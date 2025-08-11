'use client';

import React from 'react';
import { User, Eye } from 'lucide-react';
import Link from 'next/link';

interface VideoCardProps {
    video: {
        id: string;
        title: string;
        thumbnail: string;
        channel: string;
        views: string;
        duration: string;
        uploaded: string;
        description?: string;
        subject?: string;
        difficulty?: 'beginner' | 'intermediate' | 'advanced';
    };
    variant?: 'default' | 'compact' | 'sidebar';
    onClick?: () => void;
}

export default function VideoCard({ video, variant = 'default', onClick }: VideoCardProps) {

    const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
        const videoElement = e.currentTarget.querySelector('video') as HTMLVideoElement;
        if (videoElement) {
            videoElement.play();
        }
    };

    const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const videoElement = e.currentTarget.querySelector('video') as HTMLVideoElement;
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
    };

    if (variant === 'sidebar') {
        return (
            <Link href={`/video/${video.id}`} className="block group overflow-hidden">
                <div
                    className="flex gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors flex-wrap items-center cursor-pointer overflow-hidden"
                    onMouseEnter={handleCardHover}
                    onMouseLeave={handleCardLeave}
                >
                    <div className="relative w-32 h-20 flex-1 overflow-hidden">
                        <video
                            poster={video.thumbnail}
                            className="w-full h-full object-cover rounded-lg"
                            muted
                            preload="metadata"
                        >
                            <source src="/test.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute bottom-1 right-1 bg-black/50 text-white text-xs px-1 py-0.5 rounded">
                            {video.duration}
                        </div>
                    </div>
                    <div className="min-w-0 flex-2">
                        <h4 className="font-bold text-gray-900 text-md line-clamp-2 group-hover:text-indigo-600 transition-colors">
                            {video.title}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1">{video.channel}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <span className='flex items-center gap-1'>
                                <Eye size={12} />
                                {video.views}
                            </span>
                            <span>•</span>
                            <span>{video.uploaded}</span>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    if (variant === 'compact') {
        return (
            <div className="block group cursor-pointer" onClick={onClick}>
                <div
                    className="bg-indigo-50/80 border border-indigo-600 rounded-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform overflow-hidden cursor-pointer"
                    onMouseEnter={handleCardHover}
                    onMouseLeave={handleCardLeave}
                >
                    <div className="relative overflow-hidden">
                        <video
                            className="w-full h-56 object-cover rounded-t-2xl z-10 group-hover:scale-105 transition-all duration-300"
                            poster={video.thumbnail}
                            muted
                            preload="metadata"
                        >
                            <source src="/test.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-xl">
                            {video.duration}
                        </div>
                    </div>

                    <div className="p-3">
                        <h4 className="font-bold text-gray-900 text-sm line-clamp-2 mb-2">
                            {video.title}
                        </h4>

                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                            <div className='rounded-full p-1 bg-indigo-50 border border-indigo-600'>
                                <User size={12} />
                            </div>
                            <span>{video.channel}</span>
                            <span>•</span>
                            <span>{video.uploaded}</span>
                        </div>

                        <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Eye size={12} />
                            {video.views}
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    // Default variant (main video grid)
    return (
        <div
            className="block cursor-pointer group"
            onClick={onClick}
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
        >
            <div className="bg-indigo-50/80 border border-indigo-600 rounded-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform overflow-hidden">
                <div className="relative overflow-hidden">
                    <video
                        className="w-full h-48 object-cover rounded-t-2xl z-10 group-hover:scale-105 transition-all duration-300"
                        poster={video.thumbnail}
                        muted
                        preload="metadata"
                    >
                        <source src="/test.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-xl">
                        {video.duration}
                    </div>
                </div>

                <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-md line-clamp-2 mb-2">
                        {video.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <div className='rounded-full p-1 bg-indigo-50 border border-indigo-600'>
                            <User size={16} />
                        </div>
                        <span>{video.channel}</span>
                        <span>•</span>
                        <span>{video.uploaded}</span>
                    </div>

                    <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Eye size={16} />
                        {video.views}
                    </span>
                </div>
            </div>
        </div>
    );
}
