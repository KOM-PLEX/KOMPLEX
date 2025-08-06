'use client';

import { useState } from 'react';
import { ThumbsUp, Send } from 'lucide-react';

interface Comment {
    id: number;
    author: { name: string; avatar: string; };
    time: string;
    content: string;
    upvotes: number;
    upvoted: boolean;
    replies?: Comment[];
}

interface CommentProps {
    comments: Comment[];
    focusInput: boolean;
}

export default function Comment({ comments, focusInput }: CommentProps) {
    const [newComment, setNewComment] = useState('');
    const [isCommentActive, setIsCommentActive] = useState(focusInput);

    const CommentComponent = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => {
        const [commentUpvoted, setCommentUpvoted] = useState(comment.upvoted);
        const [commentUpvotes, setCommentUpvotes] = useState(comment.upvotes);

        return (
            <div className={`${isReply ? 'ml-8' : ''} mb-4`}>
                <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
                        {comment.author.avatar}
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-gray-900 text-sm">{comment.author.name}</span>
                            <span className="text-gray-500 text-xs">{comment.time}</span>
                        </div>
                        <div className="text-gray-700 text-sm leading-relaxed mb-2">{comment.content}</div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => {
                                    if (commentUpvoted) {
                                        setCommentUpvotes(commentUpvotes - 1);
                                    } else {
                                        setCommentUpvotes(commentUpvotes + 1);
                                    }
                                    setCommentUpvoted(!commentUpvoted);
                                }}
                                className={`flex items-center gap-1 text-xs font-medium cursor-pointer transition-all duration-200 py-1 px-2 rounded hover:bg-gray-100 ${commentUpvoted ? 'text-indigo-600' : 'text-gray-500'}`}
                            >
                                <ThumbsUp className={`w-3 h-3 ${commentUpvoted ? 'fill-indigo-600' : ''}`} />
                                <span>{commentUpvotes}</span>
                            </button>
                            <button className="text-xs text-gray-500 hover:text-indigo-600 transition-colors duration-200">ឆ្លើយតប</button>
                            <button className="text-xs text-gray-500 hover:text-indigo-600 transition-colors duration-200">ចែករំលែក</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const handleSubmitComment = () => {
        if (newComment.trim()) {
            // Here you would typically send the comment to your backend
            console.log('New comment:', newComment);
            setNewComment('');
            setIsCommentActive(false);
        }
    };

    const handleCancel = () => {
        setNewComment('');
        setIsCommentActive(false);
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-indigo-500/10 border border-indigo-500/10">
            {/* <h3 className="text-lg font-bold text-gray-900 mb-4">ការឆ្លើយតប ({comments.length})</h3> */}

            {/* Add Comment */}
            <div className="mb-6">
                <div className='flex items-center gap-2 mb-4'>
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm">អ្នក</div>
                    <p className='text-gray-900 text-sm'>សុខវណ្ណា អ៊ុំ</p>
                </div>

                {/* Comment Input Container */}
                <div className="relative">
                    {!isCommentActive && !focusInput ? (
                        // Inactive state - clickable placeholder
                        <div
                            onClick={() => setIsCommentActive(true)}
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

            {/* Comments List */}
            <div className="space-y-4">
                {comments.map((comment) => (
                    <CommentComponent key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    );
}
