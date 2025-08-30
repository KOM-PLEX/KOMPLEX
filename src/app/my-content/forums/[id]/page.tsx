'use client';

import Link from 'next/link';
import { ArrowLeft, Edit, Trash, Eye } from 'lucide-react';
import ForumCard from '@/components/pages/my-content/forums/ForumCard';
import Comments from '@/components/pages/forum/Comments';
import EditForum from '@/components/pages/my-content/forums/EditForum';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { ForumPost, ForumComment } from '@/types/content/forums';
import Sidebar from '@/components/pages/my-content/Sidebar';

export default function MyForumDetail() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;
    const [isCommentInputActive, setIsCommentInputActive] = useState(false);
    const [post, setPost] = useState<ForumPost | null>(null);
    const [comments, setComments] = useState<ForumComment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        const fetchForumPost = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:6969/user-content/forums/${id}`);
                setPost(response.data);
            } catch (err) {
                console.error('Error fetching forum post:', err);
                setError('មានបញ្ហាកើតឡើងពេលទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។');
            } finally {
                setLoading(false);
            }
        };

        const fetchComments = async () => {
            try {
                const response = await axios.get(`http://localhost:6969/forum_comments/${id}`);
                setComments(response.data);
            } catch (err) {
                console.error('Error fetching comments:', err);
            }
        };

        if (id) {
            fetchForumPost();
            fetchComments();
        }
    }, [id]);

    const handleCommentClose = () => {
        setIsCommentInputActive(false);
    };

    const handleDelete = async () => {
        if (window.confirm('តើអ្នកពិតជាចង់លុបវេទិកានេះមែនទេ?')) {
            try {
                await axios.delete(`http://localhost:6969/forums/${id}`);
                router.push('/my-content/forums');
            } catch (error) {
                console.error('Error deleting forum:', error);
                alert('មានបញ្ហាកើតឡើងពេលលុបវេទិកា សូមព្យាយាមម្តងទៀត');
            }
        }
    };

    const handleSave = async (updatedForum: ForumPost) => {
        const response = await axios.put(`http://localhost:6969/user-content/forums/${id}`, {
            title: updatedForum.title,
            description: updatedForum.description,
        });
        setPost(response.data);
        setIsEditMode(false);
        router.push('/my-content/forums');
    };

    const handleCancel = () => {
        setIsEditMode(false);
    };

    if (loading) {
        return (
            <div className="flex min-h-screen transition-colors duration-200 bg-gray-50">
                <Sidebar />
                <div className="flex-1 ml-0 lg:ml-64 pt-32 lg:pt-20">
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

    if (error || !post) {
        return (
            <div className="flex min-h-screen transition-colors duration-200 bg-gray-50">
                <Sidebar />
                <div className="flex-1 ml-64 pt-20">
                    <div className="max-w-7xl mx-auto p-5">
                        <div className="mb-6">
                            <Link href="/my-content/forums" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
                                <ArrowLeft className="w-4 h-4" />
                                ត្រឡប់ទៅវេទិការបស់ខ្ញុំ
                            </Link>
                        </div>
                        <div className="text-center py-12">
                            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                                <span className="text-red-600 text-2xl">!</span>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">មានបញ្ហាកើតឡើង</h2>
                            <p className="text-gray-600 mb-4">{error}</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                            >
                                ព្យាយាមម្តងទៀត
                            </button>
                        </div>
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
            <div className="flex-1 ml-64 pt-20">
                <div className="max-w-7xl mx-auto p-5">
                    {/* Header with Back Button and Actions */}
                    <div className="mb-6 flex items-center justify-between">
                        <Link href="/my-content/forums" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
                            <ArrowLeft className="w-4 h-4" />
                            ត្រឡប់ទៅវេទិការបស់ខ្ញុំ
                        </Link>
                        {!isEditMode && (
                            <div className='flex gap-2 items-center'>
                                <button
                                    onClick={handleDelete}
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
                                <ForumCard post={post} />
                            </div>

                            {/* Comments Section */}
                            <Comments type='forum' parentId={post.id} comments={comments} focusInput={isCommentInputActive} isReadOnly={true} onClose={handleCommentClose} />
                        </>
                    ) : (
                        /* Edit Mode */
                        <EditForum
                            forum={post}
                            onSave={handleSave}
                            onCancel={handleCancel}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}