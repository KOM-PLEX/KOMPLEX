'use client';

import React, { useState } from 'react';
import { ThumbsUp, Share2, Bookmark, MoreVertical, Eye, Calendar, User, Heart } from 'lucide-react';

interface VideoDescriptionProps {
    video: {
        id: string;
        title: string;
        channel: string;
        views: string;
        uploaded: string;
        description: string;
        subject?: string;
        difficulty?: 'beginner' | 'intermediate' | 'advanced';
    };
}

export default function VideoDescription({ video }: VideoDescriptionProps) {
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    };
    // Character limit for description (better for Khmer text)
    const charLimit = 400;
    const isTruncated = video.description.length > charLimit;
    const displayText = showFullDescription ? video.description : video.description.slice(0, charLimit);

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm my-6">
            {/* Video Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
                {video.title}
            </h1>

            {/* Video Stats and Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                {/* Stats */}
                <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <Eye size={16} />
                        <span>{video.views} </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{video.uploaded}</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleLike}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isLiked
                            ? 'bg-indigo-100 text-indigo-700'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        <Heart size={18} className={`${isLiked ? 'fill-indigo-700' : ''}`} />
                        <p className='text-xs'>12</p>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        <Share2 size={18} />
                    </button>
                    <button
                        onClick={handleBookmark}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isBookmarked
                            ? 'bg-indigo-100 text-indigo-700'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        <Bookmark size={18} />
                    </button>
                    <button className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        <MoreVertical size={18} />
                    </button>
                </div>
            </div>

            {/* Simplified Channel Info */}
            <div className="flex items-center gap-3  mb-6">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <User size={20} className="text-indigo-600" />
                </div>
                <h3 className="font-medium text-gray-900">{video.channel}</h3>
                <button className="px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors">
                    Follow
                </button>
            </div>

            {/* Description with Word Limit */}
            <div className="bg-gray-50 rounded-xl p-4">
                <p className='text-gray-700 text-md font-bold mb-4'>ពណ៌នា</p>
                <div className="text-gray-700 leading-relaxed text-sm">
                    {displayText}
                    {isTruncated && !showFullDescription && '...'}
                </div>
                
                {isTruncated && (
                    <button
                        onClick={() => setShowFullDescription(!showFullDescription)}
                        className="text-indigo-600 hover:text-indigo-700 font-medium mt-3 text-sm"
                    >
                        {showFullDescription ? 'បង្ហាញតិចជាង' : 'បង្ហាញច្រើនជាង'}
                    </button>
                )}
            </div>
        </div>
    );
}
