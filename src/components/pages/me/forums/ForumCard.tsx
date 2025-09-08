'use client';

import { ForumPost } from '@/types/content/forums';
import { Media } from '@/types/content/media';
import Carousel from '@/components/common/Carousel';
import { useRouter } from 'next/navigation';
import { Eye, MessageCircle, Heart, ThumbsUp } from 'lucide-react';

interface ForumCardProps {
    post: ForumPost;
}

export default function ForumCard({ post }: ForumCardProps) {
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

    const handleCardClick = () => {
        router.push(`/me/forums/${post.id}`);
    }

    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-indigo-500/10 border border-indigo-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/15 hover:-translate-y-0.5 cursor-pointer" onClick={handleCardClick}>
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

            <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1 mt-0.5">
                    <Eye className="w-4 h-4" />
                    {post.viewCount}
                </div>
                <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    {post.likeCount}
                </div>
                <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {post.commentCount}
                </div>
            </div>
        </div>
    );
}
