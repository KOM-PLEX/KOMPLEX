'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ThumbsUp, MessageCircle, Share, Send } from 'lucide-react';

interface Comment {
    id: number;
    author: { name: string; avatar: string; };
    time: string;
    content: string;
    upvotes: number;
    upvoted: boolean;
    replies?: Comment[];
}

export default function ForumDiscussion({ params }: { params: { id: string } }) {
    const [upvoted, setUpvoted] = useState(false);
    const [upvoteCount, setUpvoteCount] = useState(24);
    const [newComment, setNewComment] = useState('');

    const forumPost = {
        id: parseInt(params.id),
        author: { name: 'សុខវណ្ណា អ៊ុំ', avatar: 'ស' },
        time: 'មុន ២ ម៉ោង',
        title: 'ខ្ញុំជាអ្នកឈ្នះអូឡាំពិចគណិតវិទ្យាជាតិ សួរអ្វីក៍បាន!',
        content: 'ស្វាគមន៍! ខ្ញុំឈ្មោះសុខវណ្ណា ជាអ្នកឈ្នះអូឡាំពិចគណិតវិទ្យាជាតិឆ្នាំ២០២៤។ ខ្ញុំចង់ជួយចែករំលែកចំណេះដឹងជាមួយអ្នកទាំងអស់។ សួរអ្វីក៍បានអំពីគណិតវិទ្យា ឬវិធីសាស្ត្ររៀន!',
        upvotes: 24,
        comments: 12,
        upvoted: false
    };

    const comments: Comment[] = [
        {
            id: 1,
            author: { name: 'វណ្ណា សុខ', avatar: 'វ' },
            time: 'មុន ១ ម៉ោង',
            content: 'ស្វាគមន៍! ខ្ញុំចង់សួរអំពីវិធីរៀនគណិតវិទ្យាឱ្យបានល្អ។ តើអ្នកមានគន្លឹះអ្វីខ្លះ?',
            upvotes: 8,
            upvoted: false
        },
        {
            id: 2,
            author: { name: 'ដេរីវេ ម៉ាស្ទើរ', avatar: 'ដ' },
            time: 'មុន ៤៥ នាទី',
            content: 'អ្នកឈ្នះអូឡាំពិច! ខ្ញុំចង់សួរអំពីវិធីដោះស្រាយបញ្ហាលីមីត។ តើអ្នកប្រើវិធីសាស្ត្រអ្វី?',
            upvotes: 12,
            upvoted: false
        }
    ];

    const handleUpvote = () => {
        if (upvoted) {
            setUpvoteCount(upvoteCount - 1);
        } else {
            setUpvoteCount(upvoteCount + 1);
        }
        setUpvoted(!upvoted);
    };

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

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto p-5 pt-20">
                {/* Back Button */}
                <div className="mb-6">
                    <Link href="/forum" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
                        <ArrowLeft className="w-4 h-4" />
                        ត្រឡប់ទៅវេទិកា
                    </Link>
                </div>

                {/* Main Post */}
                <div className="bg-white rounded-2xl p-6 shadow-lg shadow-indigo-500/10 border border-indigo-500/10 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-lg">
                            {forumPost.author.avatar}
                        </div>
                        <div className="flex-1">
                            <div className="font-semibold text-gray-900 text-base mb-0.5">{forumPost.author.name}</div>
                            <div className="text-gray-500 text-sm">{forumPost.time}</div>
                        </div>
                    </div>

                    <div className="text-xl font-bold text-gray-900 mb-3 leading-relaxed">{forumPost.title}</div>
                    <div className="text-gray-700 text-base leading-relaxed mb-4">{forumPost.content}</div>

                    <div className="flex items-center gap-5 pt-4 border-t border-indigo-500/10">
                        <button
                            onClick={handleUpvote}
                            className={`flex items-center gap-1.5 text-indigo-500 text-sm font-medium cursor-pointer transition-all duration-200 py-1.5 px-3 rounded-lg border-none bg-none hover:text-indigo-600 hover:bg-indigo-50/60 ${upvoted ? 'text-indigo-600 bg-indigo-50/80' : ''}`}
                        >
                            <ThumbsUp className={`w-4 h-4 ${upvoted ? 'fill-indigo-600' : ''}`} />
                            <span className="font-semibold text-gray-500">{upvoteCount}</span>
                        </button>
                        <button className="flex items-center gap-1.5 text-indigo-500 text-sm font-medium cursor-pointer transition-all duration-200 py-1.5 px-3 rounded-lg border-none bg-none hover:text-indigo-600 hover:bg-indigo-50/60">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-gray-500">ឆ្លើយតប ({forumPost.comments})</span>
                        </button>
                        <button className="flex items-center gap-1.5 text-indigo-500 text-sm font-medium cursor-pointer transition-all duration-200 py-1.5 px-3 rounded-lg border-none bg-none hover:text-indigo-600 hover:bg-indigo-50/60">
                            <Share className="w-4 h-4" />
                            <span className="text-gray-500">ចែករំលែក</span>
                        </button>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="bg-white rounded-2xl p-6 shadow-lg shadow-indigo-500/10 border border-indigo-500/10">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">ការឆ្លើយតប ({comments.length})</h3>

                    {/* Add Comment */}
                    <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm">អ្នក</div>
                            <div className="flex-1">
                                <textarea
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="សរសេរការឆ្លើយតបរបស់អ្នក..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                                    rows={3}
                                />
                                <div className="flex justify-end mt-2">
                                    <button
                                        onClick={() => setNewComment('')}
                                        disabled={!newComment.trim()}
                                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Send className="w-4 h-4" />
                                        ផ្ញើ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Comments List */}
                    <div className="space-y-4">
                        {comments.map((comment) => (
                            <CommentComponent key={comment.id} comment={comment} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}