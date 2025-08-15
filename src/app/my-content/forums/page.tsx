'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/pages/my-content/Sidebar';
import {
    MessageSquare,
    Plus,
    Edit,
    Trash,
    Eye,
    Heart,
    MessageCircle,
    TrendingUp,
    Clock,
    CheckCircle,
    XCircle
} from 'lucide-react';

interface ForumPost {
    id: number;
    title: string;
    content: string;
    category: string;
    status: 'active' | 'closed' | 'pinned';
    viewCount: number;
    replyCount: number;
    likeCount: number;
    createdAt: string;
    lastActivity: string;
}

export default function MyForums() {
    const [forumPosts, setForumPosts] = useState<ForumPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [deleteLoading, setDeleteLoading] = useState<number | null>(null);
    const [selectedFilter, setSelectedFilter] = useState('all');

    // Mock data - replace with actual API call
    useEffect(() => {
        const mockForumPosts: ForumPost[] = [
            {
                id: 1,
                title: 'តើធ្វើដូចម្តេចដើម្បីរៀនគណិតវិទ្យាបានល្អ?',
                content: 'ខ្ញុំចង់ដឹងថាតើមានវិធីសាស្ត្រអ្វីខ្លះដើម្បីរៀនគណិតវិទ្យាបានល្អ...',
                category: 'គណិតវិទ្យា',
                status: 'active',
                viewCount: 156,
                replyCount: 8,
                likeCount: 12,
                createdAt: '2024-01-15',
                lastActivity: '2024-01-20'
            },
            {
                id: 2,
                title: 'សំណួរអំពីរូបវិទ្យាថ្នាក់ទី១២',
                content: 'ខ្ញុំមានបញ្ហាជាមួយនឹងគំនិតអំពីអេឡិចត្រូម៉ាញេទិច...',
                category: 'រូបវិទ្យា',
                status: 'active',
                viewCount: 89,
                replyCount: 5,
                likeCount: 7,
                createdAt: '2024-01-12',
                lastActivity: '2024-01-18'
            },
            {
                id: 3,
                title: 'ជំនួយអំពីការរៀនភាសាអង់គ្លេស',
                content: 'តើអ្នកណាមានគន្លឹះល្អៗសម្រាប់ការរៀនភាសាអង់គ្លេស...',
                category: 'ភាសាអង់គ្លេស',
                status: 'closed',
                viewCount: 234,
                replyCount: 15,
                likeCount: 23,
                createdAt: '2024-01-08',
                lastActivity: '2024-01-25'
            },
            {
                id: 4,
                title: 'ការរៀនគីមីវិទ្យាតាមរយៈការពិសោធន៍',
                content: 'ខ្ញុំចង់ចែករំលែកបទពិសោធន៍របស់ខ្ញុំក្នុងការរៀនគីមីវិទ្យា...',
                category: 'គីមីវិទ្យា',
                status: 'pinned',
                viewCount: 312,
                replyCount: 12,
                likeCount: 18,
                createdAt: '2024-01-05',
                lastActivity: '2024-01-22'
            },
            {
                id: 5,
                title: 'វិធីសាស្ត្ររៀនជីវវិទ្យា',
                content: 'តើអ្នកណាមានវិធីសាស្ត្រល្អៗសម្រាប់ការរៀនជីវវិទ្យា...',
                category: 'ជីវវិទ្យា',
                status: 'active',
                viewCount: 178,
                replyCount: 9,
                likeCount: 14,
                createdAt: '2024-01-10',
                lastActivity: '2024-01-19'
            }
        ];

        setTimeout(() => {
            setForumPosts(mockForumPosts);
            setIsLoading(false);
        }, 1000);
    }, []);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active':
                return 'text-green-600 bg-green-100';
            case 'closed':
                return 'text-gray-600 bg-gray-100';
            case 'pinned':
                return 'text-blue-600 bg-blue-100';
            default:
                return 'text-gray-600 bg-gray-100';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'active':
                return <MessageSquare className="w-4 h-4" />;
            case 'closed':
                return <CheckCircle className="w-4 h-4" />;
            case 'pinned':
                return <TrendingUp className="w-4 h-4" />;
            default:
                return <MessageSquare className="w-4 h-4" />;
        }
    };

    const getCategoryColor = (category: string) => {
        const colors = {
            'គណិតវិទ្យា': 'text-indigo-600 bg-indigo-100',
            'រូបវិទ្យា': 'text-blue-600 bg-blue-100',
            'គីមីវិទ្យា': 'text-green-600 bg-green-100',
            'ជីវវិទ្យា': 'text-purple-600 bg-purple-100',
            'ភាសាអង់គ្លេស': 'text-red-600 bg-red-100'
        };
        return colors[category as keyof typeof colors] || 'text-gray-600 bg-gray-100';
    };

    const handleDeletePost = async (postId: number) => {
        if (!confirm('តើអ្នកប្រាកដជាចង់លុបអត្ថបទនេះមែនទេ?')) {
            return;
        }

        try {
            setDeleteLoading(postId);
            // Replace with actual API call
            // await axios.delete(`http://localhost:6969/forums/${postId}`);

            // Remove the deleted post from state
            setForumPosts(prev => prev.filter(post => post.id !== postId));
        } catch (error) {
            console.error('Error deleting forum post:', error);
            alert('មានបញ្ហាកើតឡើងពេលលុបអត្ថបទ សូមព្យាយាមម្តងទៀត');
        } finally {
            setDeleteLoading(null);
        }
    };

    const filteredPosts = forumPosts.filter(post => {
        if (selectedFilter === 'all') return true;
        return post.status === selectedFilter;
    });

    const stats = {
        total: forumPosts.length,
        active: forumPosts.filter(p => p.status === 'active').length,
        closed: forumPosts.filter(p => p.status === 'closed').length,
        pinned: forumPosts.filter(p => p.status === 'pinned').length,
        totalViews: forumPosts.reduce((acc, p) => acc + p.viewCount, 0),
        totalReplies: forumPosts.reduce((acc, p) => acc + p.replyCount, 0),
        totalLikes: forumPosts.reduce((acc, p) => acc + p.likeCount, 0)
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
            <div className="flex-1 ml-64 pt-20">
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
                                    <p className="text-2xl font-bold text-green-600">{stats.totalReplies}</p>
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

                    {/* Filters */}
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
                    </div>

                    {/* Forum Posts List */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-900">អត្ថបទវេទិកា</h2>
                                <Link
                                    href="/forums/create"
                                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                    បង្កើតអត្ថបទថ្មី
                                </Link>
                            </div>
                        </div>
                        <div className="p-6">
                            {filteredPosts.length > 0 ? (
                                <div className="space-y-4">
                                    {filteredPosts.map((post) => (
                                        <div key={post.id} className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors">
                                            <div className={`p-3 rounded-lg ${getStatusColor(post.status)}`}>
                                                {getStatusIcon(post.status)}
                                            </div>

                                            <div className="flex-1">
                                                <h3 className="font-medium text-gray-900 mb-1">{post.title}</h3>
                                                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{post.content}</p>
                                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                                                        {post.category}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Eye className="w-4 h-4" />
                                                        {post.viewCount}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MessageCircle className="w-4 h-4" />
                                                        {post.replyCount}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Heart className="w-4 h-4" />
                                                        {post.likeCount}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="text-right text-xs text-gray-500">
                                                <div>បង្កើត {new Date(post.createdAt).toLocaleDateString('km-KH')}</div>
                                                <div>សកម្មភាពចុងក្រោយ {new Date(post.lastActivity).toLocaleDateString('km-KH')}</div>
                                            </div>

                                            <div className="flex gap-2">
                                                <Link
                                                    href={`/forums/${post.id}/edit`}
                                                    className="p-2 bg-indigo-100 hover:bg-indigo-200 rounded-lg transition-colors"
                                                >
                                                    <Edit className="w-4 h-4 text-indigo-600" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDeletePost(post.id)}
                                                    disabled={deleteLoading === post.id}
                                                    className="p-2 bg-red-100 hover:bg-red-200 rounded-lg transition-colors disabled:opacity-50"
                                                >
                                                    {deleteLoading === post.id ? (
                                                        <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                                                    ) : (
                                                        <Trash className="w-4 h-4 text-red-600" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">រកមិនឃើញអត្ថបទ</h3>
                                    <p className="text-gray-500 mb-6">សូមព្យាយាមផ្លាស់ប្តូរតម្លៃច្រោះ</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 