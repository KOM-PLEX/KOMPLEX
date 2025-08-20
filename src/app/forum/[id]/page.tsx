'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ForumCard from '@/components/pages/forum/ForumCard';
import Comment from '@/components/pages/forum/Comment';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { ForumPost, TransformedForumPost } from '@/types/forums';

interface Comment {
    id: number;
    author: { name: string; avatar: string; };
    time: string;
    content: string;
    upvotes: number;
    upvoted: boolean;
    replies?: Comment[];
}

export default function ForumDiscussion() {
    const params = useParams();
    const id = params.id as string;
    const [isCommentInputActive, setIsCommentInputActive] = useState(false);
    const [post, setPost] = useState<TransformedForumPost | null>(null);

    // Transform backend data to match component expectations
    const transformForumPost = (post: ForumPost): TransformedForumPost => {
        const getTopicKhmer = (topic: string): string => {
            const topicMap: { [key: string]: string } = {
                'math': 'គណិតវិទ្យា',
                'physics': 'រូបវិទ្យា',
                'chemistry': 'គីមីវិទ្យា',
                'biology': 'ជីវវិទ្យា',
                'general': 'ទូទៅ'
            };
            return topicMap[topic] || topic;
        };

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

        return {
            id: post.id,
            author: {
                name: post.username,
                avatar: getAvatar(post.username)
            },
            time: getTimeAgo(post.createdAt),
            title: post.title,
            content: post.description,
            image: post.media.filter(m => m.type === 'image').map(m => m.url),
            upvotes: Math.floor(Math.random() * 50), // Since backend doesn't provide upvotes, use random for now
            comments: Math.floor(Math.random() * 20), // Since backend doesn't provide comments, use random for now
            upvoted: post.isLike,
            category: getTopicKhmer(post.topic)
        };
    };
    useEffect(() => {
        const fetchForumPost = async () => {
            const response = await axios.get(`http://localhost:6969/forums/${id}`);
            const data = response.data;
            setPost(transformForumPost(data));
        };
        fetchForumPost();
    }, []);

    if (!post) {
        return <div>Loading...</div>;
    }

    const handleCommentToggle = () => {
        setIsCommentInputActive(!isCommentInputActive);
    };

    const handleCommentClose = () => {
        setIsCommentInputActive(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto p-5 pt-20">
                {/* Back Button */}
                <div className="mb-6">
                    <Link href="/forum" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
                        <ArrowLeft className="w-4 h-4" />
                        ត្រឡប់ទៅវេទិកា
                    </Link>
                </div>

                {/* Main Post */}
                <div className="mb-6">
                    <ForumCard post={post} isFromBasePage={false} onCommentClick={handleCommentToggle} />
                </div>

                {/* Comments Section
                <Comment comments={comments} focusInput={isCommentInputActive} onClose={handleCommentClose} /> */}
            </div>
        </div>
    );
}