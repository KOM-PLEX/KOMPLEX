'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/pages/my-content/Sidebar';
import {
    Video,
    Plus,
    Edit,
    Trash,
    Eye,
    Heart,
    Play,
    TrendingUp,
    Clock,
    CheckCircle,
    XCircle,
    BarChart3,
    Calendar,
    ThumbsUp,
    MessageCircle
} from 'lucide-react';

interface VideoPost {
    id: number;
    title: string;
    description: string;
    category: string;
    status: 'published' | 'draft' | 'processing';
    duration: number; // in seconds
    viewCount: number;
    likeCount: number;
    dislikeCount: number;
    commentCount: number;
    thumbnail: string;
    createdAt: string;
    publishedAt?: string;
}

export default function MyVideos() {
    const [videos, setVideos] = useState<VideoPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [deleteLoading, setDeleteLoading] = useState<number | null>(null);
    const [selectedFilter, setSelectedFilter] = useState('all');

    // Mock data - replace with actual API call
    useEffect(() => {
        const mockVideos: VideoPost[] = [
            {
                id: 1,
                title: 'វិធីសាស្ត្ររៀនគណិតវិទ្យាថ្នាក់ទី១២',
                description: 'វីដេអូនេះនឹងបង្ហាញវិធីសាស្ត្ររៀនគណិតវិទ្យាបានល្អ...',
                category: 'គណិតវិទ្យា',
                status: 'published',
                duration: 1800, // 30 minutes
                viewCount: 1247,
                likeCount: 89,
                dislikeCount: 3,
                commentCount: 23,
                thumbnail: '/api/placeholder/300/200',
                createdAt: '2024-01-15',
                publishedAt: '2024-01-16'
            },
            {
                id: 2,
                title: 'ការពន្យល់អំពីរូបវិទ្យាអេឡិចត្រូម៉ាញេទិច',
                description: 'វីដេអូនេះនឹងពន្យល់អំពីគំនិតមូលដ្ឋាននៃអេឡិចត្រូម៉ាញេទិច...',
                category: 'រូបវិទ្យា',
                status: 'published',
                duration: 1200, // 20 minutes
                viewCount: 892,
                likeCount: 67,
                dislikeCount: 1,
                commentCount: 18,
                thumbnail: '/api/placeholder/300/200',
                createdAt: '2024-01-12',
                publishedAt: '2024-01-13'
            },
            {
                id: 3,
                title: 'វិធីសាស្ត្ររៀនគីមីវិទ្យាតាមរយៈការពិសោធន៍',
                description: 'វីដេអូនេះនឹងបង្ហាញការពិសោធន៍គីមីវិទ្យាដែលអាចធ្វើបាននៅផ្ទះ...',
                category: 'គីមីវិទ្យា',
                status: 'draft',
                duration: 900, // 15 minutes
                viewCount: 0,
                likeCount: 0,
                dislikeCount: 0,
                commentCount: 0,
                thumbnail: '/api/placeholder/300/200',
                createdAt: '2024-01-10'
            },
            {
                id: 4,
                title: 'ការរៀនជីវវិទ្យាតាមរយៈវីដេអូ',
                description: 'វីដេអូនេះនឹងបង្ហាញអំពីជីវិតរបស់សត្វនិងរុក្ខជាតិ...',
                category: 'ជីវវិទ្យា',
                status: 'processing',
                duration: 2400, // 40 minutes
                viewCount: 0,
                likeCount: 0,
                dislikeCount: 0,
                commentCount: 0,
                thumbnail: '/api/placeholder/300/200',
                createdAt: '2024-01-08'
            },
            {
                id: 5,
                title: 'វិធីសាស្ត្ររៀនភាសាអង់គ្លេស',
                description: 'វីដេអូនេះនឹងបង្ហាញវិធីសាស្ត្ររៀនភាសាអង់គ្លេសបានល្អ...',
                category: 'ភាសាអង់គ្លេស',
                status: 'published',
                duration: 1500, // 25 minutes
                viewCount: 567,
                likeCount: 45,
                dislikeCount: 2,
                commentCount: 12,
                thumbnail: '/api/placeholder/300/200',
                createdAt: '2024-01-05',
                publishedAt: '2024-01-06'
            }
        ];

        setTimeout(() => {
            setVideos(mockVideos);
            setIsLoading(false);
        }, 1000);
    }, []);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'published':
                return 'text-green-600 bg-green-100';
            case 'draft':
                return 'text-gray-600 bg-gray-100';
            case 'processing':
                return 'text-yellow-600 bg-yellow-100';
            default:
                return 'text-gray-600 bg-gray-100';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'published':
                return <CheckCircle className="w-4 h-4" />;
            case 'draft':
                return <Clock className="w-4 h-4" />;
            case 'processing':
                return <TrendingUp className="w-4 h-4" />;
            default:
                return <Clock className="w-4 h-4" />;
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

    const formatDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleDeleteVideo = async (videoId: number) => {
        if (!confirm('តើអ្នកប្រាកដជាចង់លុបវីដេអូនេះមែនទេ?')) {
            return;
        }

        try {
            setDeleteLoading(videoId);
            // Replace with actual API call
            // await axios.delete(`http://localhost:6969/videos/${videoId}`);

            // Remove the deleted video from state
            setVideos(prev => prev.filter(video => video.id !== videoId));
        } catch (error) {
            console.error('Error deleting video:', error);
            alert('មានបញ្ហាកើតឡើងពេលលុបវីដេអូ សូមព្យាយាមម្តងទៀត');
        } finally {
            setDeleteLoading(null);
        }
    };

    const filteredVideos = videos.filter(video => {
        if (selectedFilter === 'all') return true;
        return video.status === selectedFilter;
    });

    const stats = {
        total: videos.length,
        published: videos.filter(v => v.status === 'published').length,
        draft: videos.filter(v => v.status === 'draft').length,
        processing: videos.filter(v => v.status === 'processing').length,
        totalViews: videos.reduce((acc, v) => acc + v.viewCount, 0),
        totalLikes: videos.reduce((acc, v) => acc + v.likeCount, 0),
        totalDuration: videos.reduce((acc, v) => acc + v.duration, 0),
        totalComments: videos.reduce((acc, v) => acc + v.commentCount, 0)
    };

    if (isLoading) {
        return (
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
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
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">វីដេអូរបស់ខ្ញុំ</h1>
                        <p className="text-gray-600">គ្រប់គ្រងវីដេអូនិងមើលដំណើរការរបស់អ្នក</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">វីដេអូសរុប</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                                </div>
                                <div className="p-3 bg-indigo-100 rounded-lg">
                                    <Video className="w-6 h-6 text-indigo-600" />
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
                                    <p className="text-sm font-medium text-gray-600">ចូលចិត្តសរុប</p>
                                    <p className="text-2xl font-bold text-green-600">{stats.totalLikes}</p>
                                </div>
                                <div className="p-3 bg-green-100 rounded-lg">
                                    <Heart className="w-6 h-6 text-green-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">ពេលវេលាសរុប</p>
                                    <p className="text-2xl font-bold text-purple-600">{Math.floor(stats.totalDuration / 60)} នាទី</p>
                                </div>
                                <div className="p-3 bg-purple-100 rounded-lg">
                                    <Clock className="w-6 h-6 text-purple-600" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="mb-6">
                        <div className="flex gap-2">
                            {['all', 'published', 'draft', 'processing'].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setSelectedFilter(filter)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedFilter === filter
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                        }`}
                                >
                                    {filter === 'all' ? 'ទាំងអស់' :
                                        filter === 'published' ? 'បានបង្ហោះ' :
                                            filter === 'draft' ? 'ព្រាង' : 'កំពុងដំណើរការ'}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Videos Grid */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-900">វីដេអូ</h2>
                                <Link
                                    href="/create-video"
                                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                    បង្ហោះវីដេអូថ្មី
                                </Link>
                            </div>
                        </div>
                        <div className="p-6">
                            {filteredVideos.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredVideos.map((video) => (
                                        <div key={video.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-200">
                                            {/* Thumbnail */}
                                            <div className="relative">
                                                <div className="w-full h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                                                    <Video className="w-16 h-16 text-indigo-400" />
                                                </div>

                                                {/* Duration Badge */}
                                                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                                    {formatDuration(video.duration)}
                                                </div>

                                                {/* Status Badge */}
                                                <div className="absolute top-2 left-2">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(video.status)}`}>
                                                        {video.status === 'published' ? 'បានបង្ហោះ' :
                                                            video.status === 'draft' ? 'ព្រាង' : 'កំពុងដំណើរការ'}
                                                    </span>
                                                </div>

                                                {/* Action Buttons Overlay */}
                                                <div className="absolute top-2 right-2 flex gap-2">
                                                    <Link
                                                        href={`/videos/${video.id}/edit`}
                                                        className="p-2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-lg shadow-lg transition-colors"
                                                    >
                                                        <Edit className="w-4 h-4 text-indigo-600" />
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDeleteVideo(video.id)}
                                                        disabled={deleteLoading === video.id}
                                                        className="p-2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-lg shadow-lg transition-colors disabled:opacity-50"
                                                    >
                                                        {deleteLoading === video.id ? (
                                                            <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                                                        ) : (
                                                            <Trash className="w-4 h-4 text-red-600" />
                                                        )}
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Video Info */}
                                            <div className="p-4">
                                                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                                    {video.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                                    {video.description}
                                                </p>

                                                {/* Category */}
                                                <div className="mb-3">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(video.category)}`}>
                                                        {video.category}
                                                    </span>
                                                </div>

                                                {/* Stats */}
                                                <div className="flex items-center justify-between text-sm text-gray-500">
                                                    <div className="flex items-center gap-4">
                                                        <span className="flex items-center gap-1">
                                                            <Eye className="w-4 h-4" />
                                                            {video.viewCount.toLocaleString()}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Heart className="w-4 h-4" />
                                                            {video.likeCount}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <MessageCircle className="w-4 h-4" />
                                                            {video.commentCount}
                                                        </span>
                                                    </div>
                                                    <span>
                                                        {new Date(video.createdAt).toLocaleDateString('km-KH', {
                                                            year: 'numeric',
                                                            month: 'short',
                                                            day: 'numeric'
                                                        })}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">រកមិនឃើញវីដេអូ</h3>
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