import { useState } from "react";
import { Send, ThumbsUp } from 'lucide-react';
import { ForumReply } from "@/types/content/forums";
import { getTimeAgo } from '@/utils/formater';


interface ReplyComponentProps {
    reply: ForumReply; // TODO: add video reply
    commentId: number; // Add parent comment ID
    onSubmitReply: (commentId: number, description: string) => void;
    onReplyLike: (replyId: number) => void;
    onReplyUnlike: (replyId: number) => void;
}

export default function ReplyComponent({ reply, commentId, onSubmitReply, onReplyLike, onReplyUnlike }: ReplyComponentProps) {
    const [replyUpvoted, setReplyUpvoted] = useState(reply.isLike);
    const [replyUpvotes, setReplyUpvotes] = useState(0);
    const [isReplying, setIsReplying] = useState(false);
    const [replyText, setReplyText] = useState('');

    const handleSubmitReply = () => {
        if (replyText.trim()) {
            const fullReply = `@${reply.username} ${replyText.trim()}`;
            onSubmitReply(commentId, fullReply); // Use parent comment ID instead of reply.id
            setReplyText('');
            setIsReplying(false);
        }
    };

    return (
        <div className="ml-8 mb-3">
            <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-white font-semibold text-xs">
                    {reply.username.charAt(0)}
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900 text-sm">{reply.username}</span>
                        <span className="text-gray-500 text-xs">{getTimeAgo(reply.createdAt)}</span>
                    </div>
                    <div className="text-gray-700 text-sm leading-relaxed mb-2">{reply.description}</div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => {
                                if (replyUpvoted) {
                                    onReplyUnlike(reply.id);
                                } else {
                                    onReplyLike(reply.id);
                                }
                                setReplyUpvoted(!replyUpvoted);
                            }}
                            className={`flex items-center gap-1 text-xs font-medium cursor-pointer transition-all duration-200 py-1 px-2 rounded hover:bg-gray-100 ${replyUpvoted ? 'text-indigo-600' : 'text-gray-500'}`}
                        >
                            <ThumbsUp className={`w-3 h-3 ${replyUpvoted ? 'fill-indigo-600' : ''}`} />
                            <span>{replyUpvotes}</span>
                        </button>
                        <button
                            onClick={() => setIsReplying(!isReplying)}
                            className="text-xs text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                        >
                            ឆ្លើយតប
                        </button>
                    </div>

                    {/* Reply Input */}
                </div>
            </div>
            {isReplying && (
                <div className="mt-3 flex gap-2">
                    <div className="flex-1">
                        <div className="flex gap-2 relative">
                            <input
                                type="text"
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                placeholder="សរសេរការឆ្លើយតប..."
                                className="flex-1 pl-20 pr-3 py-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSubmitReply();
                                    }
                                }}
                            />
                            <div className="absolute left-2 top-2 bg-indigo-50  px-2 py-2 rounded">
                                <p className="text-black text-xs ">@{reply.username}</p>
                            </div>
                            <button
                                onClick={handleSubmitReply}
                                disabled={!replyText.trim()}
                                className="px-3 py-1 text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};