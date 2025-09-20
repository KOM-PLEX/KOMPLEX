'use client';

import Link from 'next/link';
import { ArrowLeft, Edit, Trash, Eye } from 'lucide-react';
import ForumCard from '@components/pages/me/forums/ForumCard';
import Comments from '@components/common/comments/Comments';
import EditForum from '@components/pages/me/forums/EditForum';
import ContentError from '@components/common/ContentError';
import DeleteConfirm from '@components/common/DeleteConfirm';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ForumPost } from '@/types/content/forums';
import { getForumById } from '@core-services/feed/forums';
import { deleteForum } from '@core-services/me/forums';
import Sidebar from '@components/pages/me/Sidebar';
import { useAuth } from '@hooks/useAuth';

export default function MyForumDetail() {
    const { user, loading: authLoading } = useAuth();
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;
    const [isCommentInputActive, setIsCommentInputActive] = useState(false);
    const [post, setPost] = useState<ForumPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    // Redirect to auth if not authenticated
    useEffect(() => {
        if (!authLoading && !user) {
            router.push('/auth');
        }
    }, [user, authLoading, router]);

    useEffect(() => {
        if (id && user) {
            const fetchForumPost = async () => {
                try {
                    setLoading(true);
                    setError(null);
                    const forumPost = await getForumById(id);
                    setPost(forumPost);
                } catch (err) {
                    console.error('Error fetching forum post:', err);
                    setError('មានបញ្ហាកើតឡើងពេលទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។');
                } finally {
                    setLoading(false);
                }
            };

            fetchForumPost();
        }
    }, [id, user]);

    const handleCommentClose = () => {
        setIsCommentInputActive(false);
    };


    const handleDeleteClick = () => {
        setShowDeleteModal(true);
    };

    const handleDeleteConfirm = async () => {
        try {
            await deleteForum(id);
            router.push('/me/forums');
        } catch (error) {
            console.error('Error deleting forum:', error);
            alert('មានបញ្ហាកើតឡើងពេលលុបវេទិកា សូមព្យាយាមម្តងទៀត');
        }
    };

    const handleCancel = () => {
        setIsEditMode(false);
    };

    // Show loading while checking auth or fetching data
    if (authLoading || loading) {
        return (
            <div className="flex min-h-screen transition-colors duration-200 bg-gray-50">
                <Sidebar />
                <div className="flex-1 lg:ml-64 pt-32 lg:pt-16">
                    <div className="max-w-7xl mx-auto p-5">
                        {/* Loading Skeleton */}
                        <div className="mb-6">
                            <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-indigo-500/10 border border-indigo-500/10 animate-pulse">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                                <div className="flex-1">
                                    <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                                </div>
                            </div>
                            <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Don't render anything if not authenticated (will redirect)
    if (!user) {
        return null;
    }

    // Handle all error states at the top level
    if (error || !post) {
        return (
            <div className="flex min-h-screen transition-colors duration-200 bg-gray-50">
                <Sidebar />
                <div className="flex-1 ml-64 pt-20">
                    <div className="max-w-7xl mx-auto p-5">
                        <div className="mb-6">
                            <Link href="/me/forums" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
                                <ArrowLeft className="w-4 h-4" />
                                ត្រឡប់ទៅវេទិការបស់ខ្ញុំ
                            </Link>
                        </div>
                        <ContentError
                            type="error"
                            message={error || 'មានបញ្ហាក្នុងការទាញយកអត្ថបទវេទិកា'}
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen transition-colors duration-200 bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 lg:ml-64 pt-32 lg:pt-16">
                <div className="max-w-7xl mx-auto p-5">
                    {/* Header with Back Button and Actions */}
                    <div className="mb-6 flex items-center justify-between">
                        <Link href="/me/forums" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
                            <ArrowLeft className="w-4 h-4" />
                            ត្រឡប់ទៅវេទិការបស់ខ្ញុំ
                        </Link>
                        {!isEditMode && (
                            <div className='flex gap-2 items-center'>
                                <button
                                    onClick={handleDeleteClick}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                                >
                                    <Trash className="w-4 h-4" />
                                    លុប
                                </button>
                                <button
                                    onClick={() => setIsEditMode(true)}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                                >
                                    <Edit className="w-4 h-4" />
                                    កែប្រែ
                                </button>
                            </div>
                        )}
                        {isEditMode && (
                            <button
                                onClick={handleCancel}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                            >
                                <Eye className="w-4 h-4" />
                                មើល
                            </button>
                        )}
                    </div>

                    {!isEditMode ? (
                        <>
                            {/* Main Post */}
                            <div className="mb-6">
                                <ForumCard post={post} isFromMePage={false} />
                            </div>

                            {/* Comments Section */}
                            <Comments
                                type='forum'
                                parentId={post.id}
                                focusInput={isCommentInputActive}
                                isReadOnly={true}
                                onClose={handleCommentClose}
                            />
                        </>
                    ) : (
                        /* Edit Mode */
                        <EditForum
                            forum={post}
                            onCancel={handleCancel}
                        />
                    )}
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            <DeleteConfirm
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleDeleteConfirm}
                title="លុបវេទិកា"
                message="តើអ្នកពិតជាចង់លុបវេទិកានេះមែនទេ? សកម្មភាពនេះមិនអាចបញ្ច្រាស់បានទេ។"
            />
        </div>
    );
}