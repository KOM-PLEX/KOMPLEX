'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ForumCard from '@/components/pages/forum/ForumCard';
import Comment from '@/components/pages/forum/Comments';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { ForumPost, ForumComment } from '@/types/content/forums';




export default function ForumDiscussion() {
    const params = useParams();
    const id = params.id as string;
    const [isCommentInputActive, setIsCommentInputActive] = useState(false);
    const [post, setPost] = useState<ForumPost | null>(null);
    const [comments, setComments] = useState<ForumComment[]>([]);
    const [refresh, setRefresh] = useState(false);

    const [comment, setComment] = useState<string>('');

    useEffect(() => {
        const fetchForumPost = async () => {
            const response = await axios.get(`http://localhost:6969/forums/${id}`);
            const data = response.data;
            setPost(data);
        };
        fetchForumPost();

        const fetchComments = async () => {
            const response = await axios.get(`http://localhost:6969/forum_comments/${id}`);
            const data = response.data;
            setComments(data);
        };
        fetchComments();
    }, [id, refresh]);

    const handleCommentPost = async (comment: string) => {
        try {
            const response = await axios.post(`http://localhost:6969/forum_comments/${id}`, {
                description: comment
            });
            const data = response.data;
            setComments([...comments, data]);
            setRefresh(!refresh);
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    }

    const handleLikeClick = async (postId: number, isLiked: boolean) => {
        try {
            const response = await axios.patch(`http://localhost:6969/user-content/forums/${postId}/${isLiked ? 'unlike' : 'like'}`);
            console.log(response.data);
            setPost(prev => prev ? { ...prev, likeCount: isLiked ? prev.likeCount - 1 : prev.likeCount + 1, isLiked: !isLiked } : null);
        } catch (error) {
            console.error('Error liking post:', error);
        }
    }

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
                    <ForumCard post={post} isFromBasePage={false} onCommentClick={handleCommentToggle} onLikeClick={() => handleLikeClick(post.id, post.isLiked)} />
                </div>

                <Comment comments={comments} focusInput={isCommentInputActive} onClose={handleCommentClose} onCommentPost={handleCommentPost} setComment={setComment} />
            </div>
        </div>
    );
}