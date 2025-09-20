'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ForumCard from '@components/pages/forums/ForumCard';
import ForumSkeleton from '@components/pages/forums/ForumSkeleton';
import ContentError from '@components/common/ContentError';
import Comments from '@components/common/comments/Comments';
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { ForumPost } from '@/types/content/forums';
import { getForumById } from '@core-services/feed/forums';
import { toggleForumLike } from '@core-services/me/forums';
import { useAuth } from '@hooks/useAuth';

export default function ForumDiscussion() {
    const params = useParams();
    const id = params.id as string;
    const [isCommentInputActive, setIsCommentInputActive] = useState(false);
    const [post, setPost] = useState<ForumPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { user, openLoginModal } = useAuth();


    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const postData = await getForumById(id);
            setPost(postData);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('មានបញ្ហាក្នុងការទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។');
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchData();
    }, [id, fetchData]);

    const handleLikeClick = async (postId: number, isLiked: boolean) => {
        try {
            if (!user) {
                openLoginModal();
                return;
            }
            await toggleForumLike(postId.toString(), isLiked);
            setPost(prev => prev ? { ...prev, likeCount: isLiked ? prev.likeCount - 1 : prev.likeCount + 1, isLiked: !isLiked } : null);
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

    if (error || !post) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto p-5 pt-20">
                    <ContentError
                        type="error"
                        message={error || 'រកមិនឃើញអត្ថបទ'}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto p-5 pt-20">

                {/* Back Button */}
                <div className="mb-6">
                    <Link href="/forums" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
                        <ArrowLeft className="w-4 h-4" />
                        ត្រឡប់ទៅវេទិកា
                    </Link>
                </div>

                {/* Main Post */}
                <div className="mb-6">
                    <ForumCard post={post} isFromBasePage={false} onCommentClick={handleCommentToggle} onLikeClick={() => handleLikeClick(post.id, post.isLiked)} />
                </div>

                <Comments type='forum' parentId={post.id} focusInput={isCommentInputActive} onClose={handleCommentClose} />
            </div>
        </div>
    );
}