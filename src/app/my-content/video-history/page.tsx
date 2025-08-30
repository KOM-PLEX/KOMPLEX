'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Play, Clock, Calendar, Eye, Trash2 } from 'lucide-react';
import axios from 'axios';
import Sidebar from '@/components/pages/my-content/Sidebar';
import type { VideoHistory } from '@/types/content/videos';

export default function VideoHistory() {
    const [videoHistory, setVideoHistory] = useState<VideoHistory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchVideoHistory = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:6969/user-content/video_history');
                if (response.status === 200) {
                    setVideoHistory(response.data);
                } else {
                    throw new Error('Failed to fetch video history');
                }
            } catch (err) {
                console.error('Error fetching video history:', err);
                setError('មានបញ្ហាក្នុងការផ្ទុកប្រវត្តិវីដេអូ។ សូមព្យាយាមម្តងទៀត។');
            } finally {
                setLoading(false);
            }
        };

        fetchVideoHistory();
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('km-KH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const handleDeleteHistory = async (historyId: number) => {
        try {
            await axios.delete(`http://localhost:6969/video_history/${historyId}`);
            setVideoHistory(prev => prev.filter(item => item.id !== historyId));
        } catch (err) {
            console.error('Error deleting history item:', err);
        }
    };

    if (loading) {
        return (
            <div className="flex min-h-screen transition-colors duration-200 bg-gray-50">
                <Sidebar />
                <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
                    <div className="max-w-7xl mx-auto p-5">
                        <div className="flex items-center justify-center h-64">
                            <div className="text-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                                <p className="text-gray-600">កំពុងផ្ទុកប្រវត្តិវីដេអូ...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-screen transition-colors duration-200 bg-gray-50">
                <Sidebar />
                <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
                    <div className="max-w-7xl mx-auto p-5">
                        <div className="text-center py-12">
                            <div className="text-red-500 text-6xl mb-4">⚠️</div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">មានបញ្ហាក្នុងការផ្ទុក</h2>
                            <p className="text-gray-600 mb-6">{error}</p>
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
            <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
                <div className="max-w-7xl mx-auto p-5">

                    {/* Video History List */}
                    <div className="bg-white rounded-2xl shadow-sm">
                        {videoHistory.length === 0 ? (
                            <div className="p-12 text-center">
                                <div className="text-gray-400 text-6xl mb-4">📺</div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">គ្មានប្រវត្តិវីដេអូ</h3>
                                <p className="text-gray-500 mb-6">អ្នកមិនទាន់មានប្រវត្តិវីដេអូណាមួយនៅឡើយទេ។</p>
                                <Link
                                    href="/video"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                >
                                    <Play size={16} />
                                    មើលវីដេអូ
                                </Link>
                            </div>
                        ) : (
                            <div className="p-6">
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        វីដេអូដែលបានមើល ({videoHistory.length})
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {videoHistory.map((item) => (
                                        <Link
                                            href={`/video/${item.videoId}`}
                                            key={item.id}
                                            className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-sm transition-all duration-200"
                                        >
                                            {/* Thumbnail */}
                                            <div className="relative flex-shrink-0">
                                                <img
                                                    src={item.thumbnailUrl}
                                                    alt={item.title}
                                                    className="w-24 h-16 object-cover rounded-lg"
                                                />
                                                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex items-center justify-center">
                                                    <Play size={20} className="text-white" />
                                                </div>
                                            </div>

                                            {/* Video Info */}
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-gray-900 mb-1 truncate">
                                                    {item.title}
                                                </h4>
                                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar size={14} />
                                                        {formatDate(item.createdAt)}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock size={14} />
                                                        {formatDate(item.updatedAt)}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex items-center gap-2">

                                                <button
                                                    onClick={() => handleDeleteHistory(item.id)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                    title="លុបចេញពីប្រវត្តិ"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
