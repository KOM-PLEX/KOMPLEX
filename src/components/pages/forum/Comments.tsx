'use client';

import { useState, useEffect } from 'react';
import { ForumComment, ForumReply } from '@/types/content/forums';
import axios from 'axios';
import CommentComponent from './Comment';

interface CommentProps {
    comments: ForumComment[];
    focusInput?: boolean;
    isReadOnly?: boolean;
    onClose?: () => void;
}

export default function Comment({ comments, focusInput = false, isReadOnly = false, onClose }: CommentProps) {
    const [newComment, setNewComment] = useState('');
    const [isCommentActive, setIsCommentActive] = useState(focusInput);
    const [repliesState, setRepliesState] = useState<{ [commentId: number]: ForumReply[] }>({});
    const [loadingReplies, setLoadingReplies] = useState<{ [commentId: number]: boolean }>({});
    const [showingReplies, setShowingReplies] = useState<{ [commentId: number]: boolean }>({});

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
            const response = await axios.get<ForumReply[]>(`http://localhost:6969/forum_replies/${commentId}`);
            setRepliesState(prev => ({
                ...prev,
                [commentId]: response.data
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

    const handleSubmitComment = () => {
        if (newComment.trim()) {
            // Here you would typically send the comment to your backend
            console.log('New comment:', newComment);
            setNewComment('');
            setIsCommentActive(false);
            if (onClose) onClose();
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
                {comments.map((comment) => (
                    <CommentComponent
                        key={comment.id}
                        comment={comment}
                        repliesState={repliesState}
                        loadingReplies={loadingReplies}
                        showingReplies={showingReplies}
                        fetchReplies={fetchReplies}
                    />
                ))}
            </div>
        </div>
    );
}
