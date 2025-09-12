'use client';

import { MessageCircle, Share, ThumbsUp, Copy, Check, LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, Transition } from '@headlessui/react';
import Carousel from '@/components/common/Carousel';
import { ForumPost } from '@/types/content/forums';
import { Media } from '@/types/content/media';
import { toggleForumLike } from '@/services/me/forums';


interface ForumCardProps {
    isFromBasePage: boolean;
    post: ForumPost;
    onCommentClick?: () => void;
    onLikeClick?: () => void;
}

export default function ForumCard({ isFromBasePage, post, onCommentClick, onLikeClick }: ForumCardProps) {
    const [upvoted, setUpvoted] = useState(post.isLiked);
    const [upvoteCount, setUpvoteCount] = useState(post.likeCount);
    const [copied, setCopied] = useState(false);
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
    const handleUpvote = async (e: React.MouseEvent) => {
        e.stopPropagation();
        try {
            // Update UI optimistically
            if (upvoted) {
                setUpvoteCount(upvoteCount - 1);
            } else {
                setUpvoteCount(upvoteCount + 1);
            }
            setUpvoted(!upvoted);

            // Call the service
            await toggleForumLike(post.id.toString(), upvoted);

            // Call parent callback if provided
            if (onLikeClick) {
                onLikeClick();
            }
        } catch (error) {
            // Revert UI changes on error
            if (upvoted) {
                setUpvoteCount(upvoteCount + 1);
            } else {
                setUpvoteCount(upvoteCount - 1);
            }
            setUpvoted(upvoted);
            console.error('Error toggling like:', error);
        }
    };

    const handleCommentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onCommentClick) {
            onCommentClick();
        }
    };

    const handleCopyLink = async (e: React.MouseEvent) => {
        e.stopPropagation();
        try {
            const url = `${window.location.origin}/forums/${post.id}`;
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('Failed to copy link:', error);
        }
    };

    const handleCardClick = () => {
        if (isFromBasePage) {
            router.push(`/forums/${post.id}`);
        }
    }

    return (
        <div className={`bg-white rounded-2xl p-6  border border-indigo-500/10 transition-all duration-300   ${isFromBasePage ? 'cursor-pointer' : ''}`} onClick={handleCardClick}>
            <div className="flex items-center gap-3 mb-4">
                <Link href={`/users/${post.userId}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    {post.profileImage ? (
                        <img
                            src={post.profileImage}
                            alt={post.username}
                            className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                    ) : null}
                    <div className={`w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-base ${post.profileImage ? 'hidden' : ''}`}>
                        {getAvatar(post.username)}
                    </div>
                    <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-sm mb-0.5 hover:underline">
                            {post.username}
                        </div>
                        <div className="text-gray-500 text-xs">
                            {getTimeAgo(post.createdAt)}
                        </div>
                    </div>
                </Link>
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
                            <MessageCircle className="w-4 h-4" /> <span className="text-gray-500">ឆ្លើយតប </span>
                        </Link>
                    ) : (
                        <button onClick={handleCommentClick} className="flex items-center gap-1.5 text-indigo-500 text-sm font-medium cursor-pointer transition-all duration-200 py-1.5 px-3 rounded-lg border-none bg-none hover:text-indigo-600 hover:bg-indigo-50/60">
                            <MessageCircle className="w-4 h-4" /> <span className="text-gray-500">ឆ្លើយតប </span>
                        </button>
                    )
                }

                <Menu as="div" className="relative">
                    <Menu.Button
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-indigo-500 text-sm font-medium cursor-pointer transition-all duration-200 py-1.5 px-3 rounded-lg border-none bg-none hover:text-indigo-600 hover:bg-indigo-50/60 focus:outline-none"
                    >
                        <Share className="w-4 h-4" />
                        <span className="text-gray-500">ចែករំលែក</span>
                    </Menu.Button>

                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Menu.Items className="absolute left-0  w-48 bg-white rounded-lg border border-gray-200 shadow-lg z-50 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={handleCopyLink}
                                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
                                            }`}
                                    >
                                        {copied ? (
                                            <>
                                                <Check className="w-4 h-4 text-green-500" />
                                                <span>បានចម្លង!</span>
                                            </>
                                        ) : (
                                            <>
                                                <LinkIcon className="w-4 h-4" />
                                                <span>ចម្លងតំណ</span>
                                            </>
                                        )}
                                    </button>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    );
}
