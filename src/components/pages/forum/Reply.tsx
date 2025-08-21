import { useState } from "react";
import { ThumbsUp } from 'lucide-react';
import { ForumReply } from "@/types/content/forums";
import { getTimeAgo } from '@/utils/formater';


export default function ReplyComponent({ reply }: { reply: ForumReply }) {
    const [replyUpvoted, setReplyUpvoted] = useState(reply.isLike);
    const [replyUpvotes, setReplyUpvotes] = useState(0);

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
                                    setReplyUpvotes(replyUpvotes - 1);
                                } else {
                                    setReplyUpvotes(replyUpvotes + 1);
                                }
                                setReplyUpvoted(!replyUpvoted);
                            }}
                            className={`flex items-center gap-1 text-xs font-medium cursor-pointer transition-all duration-200 py-1 px-2 rounded hover:bg-gray-100 ${replyUpvoted ? 'text-indigo-600' : 'text-gray-500'}`}
                        >
                            <ThumbsUp className={`w-3 h-3 ${replyUpvoted ? 'fill-indigo-600' : ''}`} />
                            <span>{replyUpvotes}</span>
                        </button>
                        <button className="text-xs text-gray-500 hover:text-indigo-600 transition-colors duration-200">ឆ្លើយតប</button>
                        <button className="text-xs text-gray-500 hover:text-indigo-600 transition-colors duration-200">ចែករំលែក</button>
                    </div>
                </div>
            </div>
        </div>
    );
};