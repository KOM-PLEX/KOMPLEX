'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ForumCard from '@/components/pages/forum/ForumCard';
import ForumSkeleton from '@/components/pages/forum/ForumSkeleton';
import ForumError from '@/components/pages/forum/ForumError';
import Comments from '@/components/pages/forum/Comments';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ForumPost, ForumComment } from '@/types/content/forums';
import { getForumById, getForumComments, createForumComment, toggleForumLike } from '@/services/forums';




export default function ForumDiscussion() {
    const params = useParams();
    const id = params.id as string;
    const [isCommentInputActive, setIsCommentInputActive] = useState(false);
    const [post, setPost] = useState<ForumPost | null>(null);
    const [comments, setComments] = useState<ForumComment[]>([]);
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const [postData, commentsData] = await Promise.all([
                    getForumById(id),
                    getForumComments(id)
                ]);

                setPost(postData);
                setComments(commentsData);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('មានបញ្ហាក្នុងការទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, refresh]);

    const handleCommentPost = async (comment: string) => {
        try {
            const data = await createForumComment(id, comment);
            setComments([...comments, data]);
            setRefresh(!refresh);
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    }

    const handleLikeClick = async (postId: number, isLiked: boolean) => {
        try {
            await toggleForumLike(postId.toString(), isLiked);
            setPost(prev => prev ? { ...prev, likeCount: isLiked ? prev.likeCount - 1 : prev.likeCount + 1, isLiked: !isLiked } : null);
            setRefresh(!refresh);
        } catch (error) {
            console.error('Error liking post:', error);
        }
    }


    const handleCommentToggle = () => {
        setIsCommentInputActive(!isCommentInputActive);
    };

    const handleCommentClose = () => {
        setIsCommentInputActive(false);
    };

    const handleRetry = () => {
        setRefresh(!refresh);
    };

    // Early returns for loading and error states
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto p-5 pt-20">
                    <ForumSkeleton count={1} />
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto p-5 pt-20">
                    <ForumError message={error} onRetry={handleRetry} />
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto p-5 pt-20">
                    <ForumError message="រកមិនឃើញអត្ថបទ" onRetry={handleRetry} />
                </div>
            </div>
        );
    }

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

                <Comments type='forum' parentId={post.id} comments={comments} focusInput={isCommentInputActive} onClose={handleCommentClose} onCommentPost={handleCommentPost} />
            </div>
        </div>
    );
}