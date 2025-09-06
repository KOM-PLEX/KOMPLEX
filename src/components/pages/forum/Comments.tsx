'use client';

import { useState, useEffect } from 'react';
import { ForumComment, ForumReply } from '@/types/content/forums';
import { VideoComment } from '@/types/content/videos';
import axios from 'axios';
import CommentComponent from './Comment';
import {
    getForumReplies,
    createForumReply,
    toggleForumCommentLike,
    toggleForumReplyLike
} from '@/services/forums';

interface CommentProps {
    type: 'forum' | 'video';
    parentId: number;
    comments: ForumComment[] | VideoComment[];
    focusInput?: boolean;
    isReadOnly?: boolean;
    onClose?: () => void;
    onCommentPost?: (comment: string) => void;
    setComment?: (comment: string) => void;
}

export default function Comments({ type, parentId, comments, focusInput = false, isReadOnly = false, onClose, onCommentPost, setComment }: CommentProps) {
    const [newComment, setNewComment] = useState('');
    const [isCommentActive, setIsCommentActive] = useState(focusInput);
    const [repliesState, setRepliesState] = useState<{ [commentId: number]: ForumReply[] }>({});
    const [loadingReplies, setLoadingReplies] = useState<{ [commentId: number]: boolean }>({});
    const [showingReplies, setShowingReplies] = useState<{ [commentId: number]: boolean }>({});

    // Determine comment source type once per render based on first item
    // const isVideoComments = Array.isArray(comments) && comments.length > 0 && 'videoId' in comments[0];

    // Sync the internal state with the focusInput prop
    useEffect(() => {
        setIsCommentActive(focusInput);
    }, [focusInput]);

    // Function to fetch replies for a specific comment
    const fetchReplies = async (commentId: number) => {
        if (repliesState[commentId]) {
            // Replies already loaded, just toggle visibility
            setShowingReplies(prev => ({
                ...prev,
                [commentId]: !prev[commentId]
            }));
            return;
        }

        try {
            setLoadingReplies(prev => ({ ...prev, [commentId]: true }));

            let replies: ForumReply[];
            if (type === 'video') {
                // Keep video replies using direct axios for now
                const response = await axios.get(`http://localhost:6969/video_replies/${commentId}`);
                replies = response.data as ForumReply[];
            } else {
                // Use forums service for forum replies
                replies = await getForumReplies(commentId);
            }

            setRepliesState(prev => ({
                ...prev,
                [commentId]: replies
            }));
            setShowingReplies(prev => ({
                ...prev,
                [commentId]: true
            }));
        } catch (error) {
            console.error('Error fetching replies:', error);
        } finally {
            setLoadingReplies(prev => ({ ...prev, [commentId]: false }));
        }
    };

    const handleSubmitComment = async () => {
        try {
            const endpoint = type === 'video'
                ? `http://localhost:6969/video_comments/${parentId}`
                : `http://localhost:6969/forum_comments/${parentId}`;

            const response = await axios.post(endpoint, { description: newComment });
            console.log(response.data);
            setIsCommentActive(false);
            if (onClose) onClose();
            if (onCommentPost) {
                onCommentPost(newComment);
            }
            if (setComment) {
                setComment('');
                setNewComment('');
            }
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    const handleCancel = () => {
        setNewComment('');
        setIsCommentActive(false);
        if (onClose) onClose();
    };

    const handleInputClick = () => {
        setIsCommentActive(true);
    };

    const handleCommentLike = async (commentId: number) => {
        try {
            if (type === 'video') {
                // Keep video comments using direct axios for now
                const response = await axios.patch(`http://localhost:6969/video_comments/${commentId}/like`);
                console.log(response.data);
            } else {
                // Use forums service for forum comments
                await toggleForumCommentLike(commentId, false);
            }
        } catch (error) {
            console.error('Error liking comment:', error);
        }
    }

    const handleCommentUnlike = async (commentId: number) => {
        try {
            if (type === 'video') {
                // Keep video comments using direct axios for now
                const response = await axios.patch(`http://localhost:6969/video_comments/${commentId}/unlike`);
                console.log(response.data);
            } else {
                // Use forums service for forum comments
                await toggleForumCommentLike(commentId, true);
            }
        } catch (error) {
            console.error('Error unliking comment:', error);
        }
    }

    const handleSubmitReply = async (commentId: number, description: string) => {
        try {
            if (type === 'video') {
                // Keep video replies using direct axios for now
                await axios.post(`http://localhost:6969/video_replies/${commentId}`, { description });
            } else {
                // Use forums service for forum replies
                await createForumReply(commentId, description);
            }
            // Refresh replies for this comment
            await fetchReplies(commentId);
        } catch (error) {
            console.error('Error submitting reply:', error);
        }
    };

    const handleReplyLike = async (replyId: number) => {
        try {
            if (type === 'video') {
                // Keep video replies using direct axios for now
                const response = await axios.patch(`http://localhost:6969/video_replies/${replyId}/like`);
                console.log(response.data);
            } else {
                // Use forums service for forum replies
                await toggleForumReplyLike(replyId, false);
            }
        } catch (error) {
            console.error('Error liking reply:', error);
        }
    }

    const handleReplyUnlike = async (replyId: number) => {
        try {
            if (type === 'video') {
                // Keep video replies using direct axios for now
                const response = await axios.patch(`http://localhost:6969/video_replies/${replyId}/unlike`);
                console.log(response.data);
            } else {
                // Use forums service for forum replies
                await toggleForumReplyLike(replyId, true);
            }
        } catch (error) {
            console.error('Error unliking reply:', error);
        }
    }

    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-indigo-500/10 border border-indigo-500/10">
            {/* <h3 className="text-lg font-bold text-gray-900 mb-4">ការឆ្លើយតប ({comments.length})</h3> */}

            <h1 className='text-gray-900 font-bold mb-6'>ការឆ្លើយតប</h1>
            {/* Add Comment */}
            {!isReadOnly && (
                <div className="mb-6">

                    {/* Comment Input Container */}
                    <div className="relative">
                        {!isCommentActive ? (
                            // Inactive state - clickable placeholder
                            <div
                                onClick={handleInputClick}
                                className="w-full p-4 border border-gray-300 rounded-xl cursor-text hover:border-gray-400 transition-colors duration-200"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 text-sm">Join the conversation</span>
                                    <div className="text-gray-400 text-xs">Aa</div>
                                </div>
                            </div>
                        ) : (
                            // Active state - textarea with buttons
                            <div className="w-full border border-gray-300 rounded-xl overflow-hidden">
                                <div className="relative">
                                    <textarea
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                        placeholder="Join the conversation"
                                        className="w-full p-4 pr-20 text-sm focus:outline-none resize-none border-none"
                                        rows={3}
                                        autoFocus
                                    />
                                    <div className="absolute bottom-3 right-3 flex items-center gap-2">
                                        <button
                                            onClick={handleCancel}
                                            className="px-3 py-1.5 text-sm bg-gray-50 rounded-lg text-gray-600 hover:text-gray-800 transition-colors duration-200"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleSubmitComment}
                                            disabled={!newComment.trim()}
                                            className="px-4 py-1.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Comment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Comments List */}
            <div className="space-y-4">
                {comments.map((comment, index) => (
                    <CommentComponent
                        key={index}
                        comment={comment as ForumComment | VideoComment}
                        repliesState={repliesState}
                        loadingReplies={loadingReplies}
                        showingReplies={showingReplies}
                        fetchReplies={fetchReplies}
                        onSubmitReply={handleSubmitReply}
                        onReplyLike={handleReplyLike}
                        onReplyUnlike={handleReplyUnlike}
                        onCommentLike={handleCommentLike}
                        onCommentUnlike={handleCommentUnlike}
                    />
                ))}
            </div>
        </div>
    );
}
