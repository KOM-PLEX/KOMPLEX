'use client';

import React from 'react';
import { Play, Eye, Clock } from 'lucide-react';
import Link from 'next/link';

interface RecommendedVideoCardProps {
    video: {
        id: string;
        title: string;
        thumbnail: string;
        channel: string;
        views: string;
        duration: string;
        uploaded: string;
    };
}

export default function RecommendedVideoCard({ video }: RecommendedVideoCardProps) {
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

    return (
        <Link href={`/video/${video.id}`} className="block group">
            <div
                className="flex gap-3 hover:bg-gray-50 p-2 rounded-3xl transition-colors cursor-pointer overflow-hidden"
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
            >
                {/* Video Thumbnail */}
                <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden">
                    <video
                        poster={video.thumbnail}
                        className="w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-300"
                        muted
                        preload="metadata"
                    >
                        <source src="/test.mp4" type="video/mp4" />
                    </video>
                    {/* Duration Badge */}
                    <div className="absolute bottom-1 right-1 bg-black/50 text-white text-xs px-1 py-0.5 rounded-3xl">
                        {video.duration}
                    </div>
                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Play size={20} className="text-white" />
                    </div>
                </div>

                {/* Video Info */}
                <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-gray-900 text-sm line-clamp-2 group-hover:text-indigo-600 transition-colors leading-tight">
                        {video.title}
                    </h4>

                    <p className="text-xs text-gray-600 mt-1 line-clamp-1">
                        {video.channel}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <span className="flex items-center gap-1">
                            <Eye size={12} />
                            {video.views}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {video.uploaded}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
