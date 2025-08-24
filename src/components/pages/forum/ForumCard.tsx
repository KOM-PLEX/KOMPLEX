'use client';

import { MessageCircle, Share, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Carousel from '@/components/common/Carousel';
import { ForumPost } from '@/types/content/forums';
import { Media } from '@/types/content/media';


interface ForumCardProps {
    isFromBasePage: boolean;
    post: ForumPost;
    onCommentClick?: () => void;
    onLikeClick?: () => void;
}

export default function ForumCard({ isFromBasePage, post, onCommentClick, onLikeClick }: ForumCardProps) {
    const [upvoted, setUpvoted] = useState(post.isLiked);
    const [upvoteCount, setUpvoteCount] = useState(post.likeCount);
    const router = useRouter();

    // Helper functions to format backend data
    const getTimeAgo = (dateString: string): string => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffHours / 24);

        if (diffDays > 0) {
            return `មុន ${diffDays} ថ្ងៃ`;
        } else if (diffHours > 0) {
            return `មុន ${diffHours} ម៉ោង`;
        } else {
            return 'ថ្មីៗនេះ';
        }
    };

    const getAvatar = (username: string): string => {
        return username.charAt(0);
    };

    const getImageUrls = (media: Media[]): string[] => {
        return media.filter(m => m.type === 'image').map(m => m.url);
    };
    const handleUpvote = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (upvoted) {
            setUpvoteCount(upvoteCount - 1);
        } else {
            setUpvoteCount(upvoteCount + 1);
        }
        setUpvoted(!upvoted);
        if (onLikeClick) {
            onLikeClick();
        }
    };

    const handleCommentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onCommentClick) {
            onCommentClick();
        }
    };

    const handleShareClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        // Add share functionality here
        console.log('Share clicked');
    };

    const handleCardClick = () => {
        if (isFromBasePage) {
            router.push(`/forum/${post.id}`);
        }
    }

    return (
        <div className={`bg-white rounded-2xl p-6 shadow-lg shadow-indigo-500/10 border border-indigo-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/15 hover:-translate-y-0.5 ${isFromBasePage ? 'cursor-pointer' : ''}`} onClick={handleCardClick}>
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-base">
                    {getAvatar(post.username)}
                </div>
                <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-sm mb-0.5">
                        {post.username}
                    </div>
                    <div className="text-gray-500 text-xs">
                        {getTimeAgo(post.createdAt)}
                    </div>
                </div>
            </div>

            <div className="text-lg font-bold text-gray-900 mb-2.5 leading-relaxed">
                {post.title}
            </div>

            <div className="text-gray-700 text-sm leading-relaxed mb-4">
                {post.description}
            </div>

            {post.media && post.media.length > 0 && (
                <Carousel media={getImageUrls(post.media).map(url => ({ url, type: 'image' }))} />
            )}

            <div className="flex items-center gap-5 pt-4 border-t border-indigo-500/10">
                <button
                    onClick={handleUpvote}
                    className={`flex items-center gap-1.5 text-indigo-500 text-sm font-medium cursor-pointer transition-all duration-200 py-1.5 px-3 rounded-lg border-none bg-none hover:text-indigo-600 hover:bg-indigo-50/60 ${upvoted ? 'text-indigo-600 bg-indigo-50/80' : ''}`}
                >
                    <ThumbsUp className={`w-4 h-4 ${upvoted ? 'fill-indigo-600' : ''}`} /> <span className="font-semibold text-gray-500">{upvoteCount}</span>
                </button>
                {
                    isFromBasePage ? (
                        <Link href={`/forum/${post.id}`} className="flex items-center gap-1.5 text-indigo-500 text-sm font-medium cursor-pointer transition-all duration-200 py-1.5 px-3 rounded-lg border-none bg-none hover:text-indigo-600 hover:bg-indigo-50/60">
                            <MessageCircle className="w-4 h-4" /> <span className="text-gray-500">ឆ្លើយតប ({Math.floor(Math.random() * 20)})</span>
                        </Link>
                    ) : (
                        <button onClick={handleCommentClick} className="flex items-center gap-1.5 text-indigo-500 text-sm font-medium cursor-pointer transition-all duration-200 py-1.5 px-3 rounded-lg border-none bg-none hover:text-indigo-600 hover:bg-indigo-50/60">
                            <MessageCircle className="w-4 h-4" /> <span className="text-gray-500">ឆ្លើយតប ({Math.floor(Math.random() * 20)})</span>
                        </button>
                    )
                }

                <button
                    onClick={handleShareClick}
                    className="flex items-center gap-1.5 text-indigo-500 text-sm font-medium cursor-pointer transition-all duration-200 py-1.5 px-3 rounded-lg border-none bg-none hover:text-indigo-600 hover:bg-indigo-50/60"
                >
                    <Share className="w-4 h-4" /> <span className="text-gray-500">ចែករំលែក</span>
                </button>
            </div>
        </div>
    );
}
