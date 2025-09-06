'use client';

import React, { useEffect, useState } from 'react';
import {
    Search,
    Menu,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import VideoCard from '@/components/pages/video/VideoCard';
import VideoCardSkeleton from '@/components/pages/video/VideoCardSkeleton';
import Sidebar from '@/components/pages/video/Sidebar';
import ContentError from '@/components/common/ContentError';
import { VideoPost } from '@/types/content/videos';
import { getAllVideos } from '@/services/feed/videos';


export default function VideoPage() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();
    const [videos, setVideos] = useState<VideoPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchVideos = async () => {
        try {
            setLoading(true);
            setError(null);
            const { data, hasMore } = await getAllVideos();
            if (data.length > 0) {
                setVideos(data);
            } else {
                setError('គ្មានវីដេអូ');
            }
        } catch (error) {
            console.error('Error fetching videos:', error);
            setError('មានបញ្ហាក្នុងការទាញយកវីដេអូ');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVideos();
    }, [])

    const handleVideoClick = (videoId: string) => {
        router.push(`/video/${videoId}`);
    };

    // Filter videos based on search
    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.username.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex h-screen bg-gray-50 pt-15">
                <Sidebar
                    sidebarOpen={sidebarOpen}
                    onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
                />
                <div className="flex-1 overflow-y-scroll relative">
                    <div className="bg-white shadow-sm border-b border-gray-200 lg:p-2 py-2 px-5 sticky top-0 z-10">
                        <div className="flex justify-center items-center gap-2">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <Menu size={20} />
                            </button>
                            <div className="flex-1 relative max-w-[700px]">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="ស្វែងរកវីដេអូ..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <VideoCardSkeleton count={6} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex h-screen bg-gray-50 pt-15">
                <Sidebar
                    sidebarOpen={sidebarOpen}
                    onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
                />
                <div className="flex-1 overflow-y-scroll relative">
                    <div className="bg-white shadow-sm border-b border-gray-200 lg:p-2 py-2 px-5 sticky top-0 z-10">
                        <div className="flex justify-center items-center gap-2">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <Menu size={20} />
                            </button>
                            <div className="flex-1 relative max-w-[700px]">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="ស្វែងរកវីដេអូ..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <ContentError
                            type={error === 'គ្មានវីដេអូ' ? 'no-results' : 'error'}
                            message={error}
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-gray-50 pt-15">
            <Sidebar
                sidebarOpen={sidebarOpen}
                onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
            />

            {/* Main Content */}
            <div className="flex-1 overflow-y-scroll relative">
                {/* Header */}
                <div className="bg-white shadow-sm border-b border-gray-200 lg:p-2 py-2 px-5 sticky top-0 z-10">
                    <div className="flex justify-center items-center gap-2">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <Menu size={20} />
                        </button>

                        <div className="flex-1 relative max-w-[700px]">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="ស្វែងរកវីដេអូ..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>

                {/* Video Grid */}
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
                        {filteredVideos.map((video) => (
                            <VideoCard
                                key={video.id}
                                video={video}
                                variant="default"
                                onClick={() => handleVideoClick(video.id.toString())}
                            />
                        ))}
                    </div>

                    {filteredVideos.length === 0 && searchQuery && (
                        <ContentError type="no-results" message="រកមិនឃើញវីដេអូ" />
                    )}
                </div>
            </div>
        </div>
    );
}