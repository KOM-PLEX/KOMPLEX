import { useState } from 'react';
import { ThumbsUp, MessageCircle, Send } from 'lucide-react';
import { ForumComment, ForumReply } from '@/types/content/forums';
import { getTimeAgo } from '@/utils/formater';
import ReplyComponent from './Reply';
import { VideoComment } from '@/types/content/videos';
import { createForumReply, toggleForumCommentLike } from '@/services/forums';

interface CommentComponentProps {
    comment: ForumComment | VideoComment;
    repliesState: { [commentId: number]: ForumReply[] };
    loadingReplies: { [commentId: number]: boolean };
    showingReplies: { [commentId: number]: boolean };
    fetchReplies: (commentId: number) => void;
    onSubmitReply: (commentId: number, description: string) => void;
    onCommentLike: (commentId: number) => void;
    onCommentUnlike: (commentId: number) => void;
    onReplyLike: (replyId: number) => void;
    onReplyUnlike: (replyId: number) => void;
}

export default function CommentComponent({
    comment,
    repliesState,
    loadingReplies,
    showingReplies,
    fetchReplies,
    onSubmitReply,
    onReplyLike,
    onReplyUnlike,
    onCommentLike,
    onCommentUnlike,
}: CommentComponentProps) {
    const [commentUpvoted, setCommentUpvoted] = useState(comment.isLike);
    const [isReplying, setIsReplying] = useState(false);
    const [replyText, setReplyText] = useState('');
    const commentReplies = repliesState[comment.id] || [];
    const isLoadingReplies = loadingReplies[comment.id] || false;
    const isShowingReplies = showingReplies[comment.id] || false;

    const handleSubmitReply = async (replyToId: number, description: string) => {
        try {
            // Check if this is a forum comment (has forumId property)
            if ('forumId' in comment) {
                await createForumReply(replyToId, description);
            }
            onSubmitReply(replyToId, description);
            setReplyText('');
            setIsReplying(false);
        } catch (error) {
            console.error('Error submitting reply:', error);
        }
    };

    const handleSubmitDirectReply = () => {
        if (replyText.trim()) {
            handleSubmitReply(comment.id, replyText.trim());
        }
    };

    return (
        <div className="mb-4">
            <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
                    {comment.username.charAt(0)}
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900 text-sm">{comment.username}</span>
                        <span className="text-gray-500 text-xs">{getTimeAgo(comment.createdAt)}</span>
                    </div>
                    <div className="text-gray-700 text-sm leading-relaxed mb-2">{comment.description}</div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={async () => {
                                try {
                                    // Check if this is a forum comment (has forumId property)
                                    if ('forumId' in comment) {
                                        if (commentUpvoted) {
                                            await toggleForumCommentLike(comment.id, true);
                                            onCommentUnlike(comment.id);
                                        } else {
                                            await toggleForumCommentLike(comment.id, false);
                                            onCommentLike(comment.id);
                                        }
                                    } else {
                                        // For video comments, use the existing handlers
                                        if (commentUpvoted) {
                                            onCommentUnlike(comment.id);
                                        } else {
                                            onCommentLike(comment.id);
                                        }
                                    }
                                    setCommentUpvoted(!commentUpvoted);
                                } catch (error) {
                                    console.error('Error toggling comment like:', error);
                                }
                            }}
                            className={`flex items-center gap-1 text-xs font-medium cursor-pointer transition-all duration-200 py-1 px-2 rounded hover:bg-gray-100 ${commentUpvoted ? 'text-indigo-600' : 'text-gray-500'}`}
                        >
                            <ThumbsUp className={`w-3 h-3 ${commentUpvoted ? 'fill-indigo-600' : ''}`} />
                            <span>0</span>
                        </button>
                        <button
                            onClick={() => setIsReplying(!isReplying)}
                            className="text-xs text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                        >
                            ឆ្លើយតប
                        </button>
                        <button
                            onClick={() => fetchReplies(comment.id)}
                            disabled={isLoadingReplies}
                            className="flex items-center gap-1 text-xs text-gray-500 hover:text-indigo-600 transition-colors duration-200 disabled:opacity-50"
                        >
                            <MessageCircle className="w-3 h-3" />
                            {isLoadingReplies ? 'កំពុងដំណើរការ...' :
                                isShowingReplies ? 'លាក់ការឆ្លើយតប' : 'បង្ហាញការឆ្លើយតប'}
                        </button>
                    </div>

                    {/* Reply Input */}
                    {isReplying && (
                        <div className="mt-3 flex gap-2">
                            <div className="flex-1">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={replyText}
                                        onChange={(e) => setReplyText(e.target.value)}
                                        placeholder="សរសេរការឆ្លើយតប..."
                                        className="flex-1 px-3 py-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleSubmitDirectReply();
                                            }
                                        }}
                                    />
                                    <button
                                        onClick={handleSubmitDirectReply}
                                        disabled={!replyText.trim()}
                                        className="px-3 py-1 text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Send></Send>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Replies */}
            {isShowingReplies && commentReplies.length > 0 && (
                <div className="mt-3">
                    {commentReplies.map((reply) => (
                        <ReplyComponent
                            key={reply.id}
                            reply={reply}
                            commentId={comment.id}
                            onSubmitReply={onSubmitReply}
                            onReplyLike={onReplyLike}
                            onReplyUnlike={onReplyUnlike}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
