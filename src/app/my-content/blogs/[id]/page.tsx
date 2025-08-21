'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Trash, Edit } from 'lucide-react';
import axios from 'axios';
import Sidebar from '@/components/pages/my-content/Sidebar';
import Carousel from '@/components/common/Carousel';
import EditBlog from '@/components/pages/my-content/blogs/EditBlog';
import { Blog } from '@/types/content/blog';

// Skeleton Loading Component for Display Mode
function BlogPostSkeleton() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto p-5 pt-20">
                {/* Back Button Skeleton */}
                <div className="mb-6">
                    <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
                </div>

                {/* Blog Post Skeleton */}
                <article className="bg-white rounded-2xl shadow-lg shadow-indigo-500/10 border border-indigo-500/10 overflow-hidden">
                    <div className="p-6 md:p-8">
                        {/* Title Skeleton */}
                        <div className="mb-2">
                            <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse"></div>
                        </div>

                        {/* User Info Skeleton */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
                            <div className="flex items-center gap-2">
                                <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                                <div className="w-2 h-4 bg-gray-200 rounded animate-pulse"></div>
                                <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                        </div>

                        {/* Image/Carousel Skeleton */}
                        <div className="w-full h-64 bg-gray-200 rounded-lg animate-pulse mb-6"></div>

                        {/* Content Skeleton */}
                        <div className="space-y-3">
                            <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-4/5 h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default function BlogPost() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const [blogPost, setBlogPost] = useState<Blog>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);

    // Fetch existing blog data
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`http://localhost:6969/user-content/blogs/${id}`);
                setBlogPost(response.data);
            } catch (error) {
                console.error('Error fetching blog:', error);
                setError('មានបញ្ហាកើតឡើងពេលផ្ទុកប្លុក សូមព្យាយាមម្តងទៀត');
            } finally {
                setIsLoading(false);
            }
        };

        if (id) {
            fetchBlog();
        }
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:6969/blogs/${id}`);
            router.push('/my-content/blogs');
        } catch (error) {
            console.error('Error deleting blog:', error);
            alert('មានបញ្ហាកើតឡើងពេលលុបប្លុក សូមព្យាយាមម្តងទៀត');
        }
    };

    const handleSave = (updatedBlog: Blog) => {
        setBlogPost(updatedBlog);
        setIsEditMode(false);
    };

    const handleCancel = () => {
        setIsEditMode(false);
    };

    if (isLoading) {
        return <BlogPostSkeleton />;
    }

    if (error || !blogPost) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
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
        );
    }

    // Display Mode
    if (!isEditMode) {
        return (
            <div className="flex min-h-screen transition-colors duration-200 bg-gray-50">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
                    <div className="max-w-7xl mx-auto p-5">
                        {/* Header with Back Button and Edit Button */}
                        <div className="mb-6 flex items-center justify-between">
                            <Link href="/my-content/blogs" className="inline-flex items-center gap-2 font-medium transition-colors duration-200 text-gray-700">
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
            <div className="flex-1 ml-64 pt-20">
                <EditBlog
                    blog={blogPost}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            </div>
        </div>
    );
} 