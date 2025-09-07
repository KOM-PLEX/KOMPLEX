'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/pages/my-content/Sidebar';
import {
    MessageSquare,
    Plus,
    Eye,
    Heart,
    MessageCircle,
} from 'lucide-react';
import { ForumPost } from '@/types/content/forums';
import { getUserForums } from '@/services/me/forums';
import ForumCard from '@/components/pages/my-content/forums/ForumCard';

export default function MyForums() {
    const [forumPosts, setForumPosts] = useState<ForumPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchForums = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const forums = await getUserForums();
                setForumPosts(forums);
            } catch (error) {
                console.error('Error fetching forums:', error);
                setError('មានបញ្ហាកើតឡើងពេលទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។');
            } finally {
                setIsLoading(false);
            }
        }
        fetchForums();
    }, []);


    const stats = {
        total: forumPosts.length,
        totalViews: forumPosts.reduce((acc, p) => acc + p.viewCount, 0),
        totalComments: forumPosts.reduce((acc, p) => acc + p.commentCount, 0),
        totalLikes: forumPosts.reduce((acc, p) => acc + p.likeCount, 0),
    };

    if (isLoading) {
        return (
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <div className="flex-1 ml-64 pt-20">
                    <div className="p-6">
                        <div className="animate-pulse space-y-6">
                            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="h-24 bg-gray-200 rounded"></div>
                                ))}
                            </div>
                            <div className="h-64 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
                <div className="p-6">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">វេទិការបស់ខ្ញុំ</h1>
                        <p className="text-gray-600">គ្រប់គ្រងអត្ថបទនិងការសន្ទនារបស់អ្នក</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">អត្ថបទសរុប</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                                </div>
                                <div className="p-3 bg-indigo-100 rounded-lg">
                                    <MessageSquare className="w-6 h-6 text-indigo-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">ទស្សនាសរុប</p>
                                    <p className="text-2xl font-bold text-blue-600">{stats.totalViews.toLocaleString()}</p>
                                </div>
                                <div className="p-3 bg-blue-100 rounded-lg">
                                    <Eye className="w-6 h-6 text-blue-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">ចម្លើយសរុប</p>
                                    <p className="text-2xl font-bold text-green-600">{stats.totalComments}</p>
                                </div>
                                <div className="p-3 bg-green-100 rounded-lg">
                                    <MessageCircle className="w-6 h-6 text-green-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">ចូលចិត្តសរុប</p>
                                    <p className="text-2xl font-bold text-red-600">{stats.totalLikes}</p>
                                </div>
                                <div className="p-3 bg-red-100 rounded-lg">
                                    <Heart className="w-6 h-6 text-red-600" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Filters
                    <div className="mb-6">
                        <div className="flex gap-2">
                            {['all', 'active', 'closed', 'pinned'].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setSelectedFilter(filter)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedFilter === filter
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                        }`}
                                >
                                    {filter === 'all' ? 'ទាំងអស់' :
                                        filter === 'active' ? 'សកម្ម' :
                                            filter === 'closed' ? 'បានបិទ' : 'បានចំណាត់ថ្នាក់'}
                                </button>
                            ))}
                        </div>
                    </div> */}

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6">
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm text-red-800">{error}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Forum Posts List */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-900">អត្ថបទវេទិកា</h2>
                                <Link
                                    href="/my-content/createForum"
                                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                    បង្កើតអត្ថបទថ្មី
                                </Link>
                            </div>
                        </div>
                        <div className="p-6">
                            {forumPosts.length > 0 ? (
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                    {forumPosts.map((post) => (
                                        <ForumCard key={post.id} post={post} />
                                    ))}
                                </div>
                            ) : !error ? (
                                <div className="text-center py-12">
                                    <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">រកមិនឃើញអត្ថបទ</h3>
                                    <p className="text-gray-500 mb-6">សូមព្យាយាមផ្លាស់ប្តូរតម្លៃច្រោះ</p>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 