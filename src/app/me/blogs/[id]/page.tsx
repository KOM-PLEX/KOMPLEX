'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Trash, Edit } from 'lucide-react';
import Sidebar from '@/components/pages/me/Sidebar';
import Carousel from '@/components/common/Carousel';
import EditBlog from '@/components/pages/me/blogs/EditBlog';
import ContentError from '@/components/common/ContentError';
import { Blog } from '@/types/content/blogs';
import { getBlogById } from '@/services/feed/blogs';
import { deleteBlog } from '@/services/me/blogs';
import { BlogPostSkeleton } from '@/components/pages/blog/BlogPostSkeleton';
import { useAuth } from '@/hooks/useAuth';


export default function BlogPost() {
    const { user, loading: authLoading } = useAuth();
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const [blogPost, setBlogPost] = useState<Blog>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);

    // Redirect to auth if not authenticated
    useEffect(() => {
        if (!authLoading && !user) {
            router.push('/auth');
        }
    }, [user, authLoading, router]);

    const fetchBlog = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const data = await getBlogById(id);
            setBlogPost(data);
        } catch (error) {
            console.error('Error fetching blog:', error);
            setError('មានបញ្ហាក្នុងការទាញយកប្លុក');
        } finally {
            setIsLoading(false);
        }
    };

    // Fetch existing blog data
    useEffect(() => {
        if (id && user) {
            fetchBlog();
        }
    }, [id, user]);

    const handleDelete = async () => {
        try {
            await deleteBlog(id);
            router.push('/me/blogs');
        } catch (error) {
            console.error('Error deleting blog:', error);
            alert('មានបញ្ហាក្នុងការលុបប្លុក');
        }
    };

    const handleSave = (updatedBlog: Blog) => {
        setBlogPost(updatedBlog);
        setIsEditMode(false);
    };

    const handleCancel = () => {
        setIsEditMode(false);
    };

    // Show loading while checking auth or fetching data
    if (authLoading || isLoading) {
        return (
            <div className='flex min-h-screen bg-gray-50'>
                <Sidebar />
                <div className='flex-1 lg:ml-64 pt-32 lg:pt-16'>
                    <BlogPostSkeleton />
                </div>
            </div>
        );
    }

    // Don't render anything if not authenticated (will redirect)
    if (!user) {
        return null;
    }

    if (error || !blogPost) {
        return (
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <div className="flex-1 lg:ml-64 pt-32 lg:pt-16">
                    <div className="max-w-7xl mx-auto p-5">
                        <div className="mb-6">
                            <Link href="/me/blogs" className="inline-flex items-center gap-2 font-medium transition-colors duration-200 text-gray-700">
                                <ArrowLeft className="w-4 h-4" />
                                ត្រឡប់ទៅប្លុករបស់ខ្ញុំ
                            </Link>
                        </div>
                        <ContentError
                            type="error"
                            message={error || 'រកមិនឃើញប្លុក'}
                        />
                    </div>
                </div>
            </div>
        );
    }

    // Display Mode
    if (!isEditMode) {
        return (
            <div className="flex min-h-screen transition-colors duration-200 bg-gray-50">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 lg:ml-64 pt-32 lg:pt-16">
                    <div className="max-w-7xl mx-auto p-5">
                        {/* Header with Back Button and Edit Button */}
                        <div className="mb-6 flex items-center justify-between">
                            <Link href="/me/blogs" className="inline-flex items-center gap-2 font-medium transition-colors duration-200 text-gray-700">
                                <ArrowLeft className="w-4 h-4" />
                                ត្រឡប់ទៅប្លុករបស់ខ្ញុំ
                            </Link>
                            <div className='flex gap-2 items-center'>
                                <button
                                    onClick={() => handleDelete()}
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
                        </div>

                        {/* Blog Post Display */}
                        <article className="bg-white rounded-2xl shadow-lg shadow-indigo-500/10 border border-indigo-500/10 overflow-hidden">
                            {/* Header */}
                            <div className="p-6 md:p-8">
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                                    {blogPost.title}
                                </h1>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                                        {blogPost.username.split(" ")[0].charAt(0)}
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span className="font-semibold text-gray-900">{blogPost.username}</span>
                                        <span>|</span>
                                        <span className="text-gray-500 text-sm">{new Date(blogPost.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    </div>
                                </div>

                                {/* Media Carousel */}
                                {blogPost.media.length > 0 && (
                                    <div className="mb-6">
                                        <Carousel media={blogPost.media} />
                                    </div>
                                )}

                                {/* Article Content */}
                                <div className="prose prose-lg max-w-none">
                                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                        {blogPost.description}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        );
    }

    // Edit Mode
    return (
        <div className="flex min-h-screen transition-colors duration-200 bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 lg:ml-64 pt-32 lg:pt-16">
                <EditBlog
                    blog={blogPost}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            </div>
        </div>
    );
} 