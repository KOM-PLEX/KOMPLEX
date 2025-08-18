'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Eye, Plus, Book } from 'lucide-react';
import axios from 'axios';
import Sidebar from '@/components/pages/my-content/Sidebar';

export interface BlogPost {
    id: number;
    username: string;
    title: string;
    type: string;
    topic: string;
    viewCount: number;
    likeCount: number;
    createdAt: string;
    updatedAt: string;
    media: {
        url: string;
        mediaType: string;
    }[];
}

// Skeleton Loading Component
function MyBlogsSkeleton() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="pt-20 p-5 max-w-7xl mx-auto">
                {/* Header Skeleton */}
                <div className="mb-8">
                    <div className="w-32 h-6 bg-gray-200 rounded animate-pulse mb-4"></div>
                    <div className="w-48 h-8 bg-gray-200 rounded animate-pulse"></div>
                </div>

                {/* Blog Cards Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
                            <div className="p-4 space-y-3">
                                <div className="w-full h-5 bg-gray-200 rounded animate-pulse"></div>
                                <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
                                <div className="flex gap-2">
                                    <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function MyBlogs() {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMyBlogs = async () => {
            try {
                setIsLoading(true);
                // For now, fetch all blogs (later will be user-specific)
                const response = await axios.get('http://localhost:6969/user-content/blogs');
                const data = await response.data;
                setBlogPosts(data);
            } catch (error) {
                console.error('Error fetching my blogs:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchMyBlogs();
    }, []);

    if (isLoading) {
        return <MyBlogsSkeleton />;
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 ml-64 pt-20">
                <div className="p-6">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">ប្លុករបស់ខ្ញុំ</h1>
                        <p className="text-gray-600">គ្រប់គ្រងប្លុកនិងមើលដំណើរការរបស់អ្នក</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">ប្លុកសរុប</p>
                                    <p className="text-2xl font-bold text-gray-900">{blogPosts.length}</p>
                                </div>
                                <div className="p-3 bg-indigo-100 rounded-lg">
                                    <Book className="w-6 h-6 text-indigo-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">ទស្សនាសរុប</p>
                                    <p className="text-2xl font-bold text-blue-600">{blogPosts.reduce((acc, post) => acc + post.viewCount, 0).toLocaleString()}</p>
                                </div>
                                <div className="p-3 bg-blue-100 rounded-lg">
                                    <Eye className="w-6 h-6 text-blue-600" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog Posts List */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-900">ប្លុក</h2>
                                <Link
                                    href="/my-content/createBlog"
                                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                    បង្កើតប្លុកថ្មី
                                </Link>
                            </div>
                        </div>
                        <div className="p-6">
                            {blogPosts.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {blogPosts.map((post) => (
                                        <Link key={post.id} href={`/my-content/blogs/${post.id}`} className="relative h-72 rounded-2xl overflow-hidden shadow-lg shadow-indigo-500/10 border border-indigo-500/10 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-indigo-500/15 hover:-translate-y-1">
                                            {/* Background Image */}
                                            <img
                                                src={post.media && post.media.length > 0 ? post.media[0].url : '/image-error.png'}
                                                alt={post.title}
                                                onError={(e) => {
                                                    e.currentTarget.src = '/image-error.png';
                                                }}
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />

                                            {/* Gradient Overlay for better text readability */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

                                            {/* Content */}
                                            <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
                                                <div className="flex items-center gap-4 mb-3 text-xs opacity-90">
                                                    <span>{new Date(post.createdAt).toLocaleDateString('km-KH', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                                </div>

                                                <div className="text-lg font-bold mb-2 leading-relaxed drop-shadow-sm">
                                                    {post.title}
                                                </div>

                                                <div className="flex items-center gap-4 text-sm text-white mb-3">
                                                    <span className="flex items-center gap-2">
                                                        <Eye className="w-4 h-4" />
                                                        {post.viewCount} ទស្សនា
                                                    </span>
                                                </div>

                                                {/* Type and Topic Tags */}
                                                <div className="flex gap-2">
                                                    <span className="px-2 py-1 bg-indigo-600/80 backdrop-blur-sm text-white text-xs rounded-full">
                                                        {post.type}
                                                    </span>
                                                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                                                        {post.topic}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <Book className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">អ្នកមិនទាន់មានប្លុកណាមួយទេ</h3>
                                    <p className="text-gray-500 mb-6">ចាប់ផ្តើមបង្កើតប្លុកដំបូងរបស់អ្នក</p>
                                    <Link
                                        href="/my-content/createBlog"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                        បង្កើតប្លុក
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 