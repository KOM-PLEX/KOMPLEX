'use client';

import React, { useEffect, useState } from 'react';
import {
    Search,
    Menu,
    BookOpen
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import VideoCard from '@/components/pages/video/VideoCard';
import Sidebar from '@/components/pages/video/Sidebar';
import { VideoPost } from '@/types/content/videos';
import { getAllVideos } from '@/services/feed/videos';


export default function VideoPage() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();
    const [videos, setVideos] = useState<VideoPost[]>([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const data = await getAllVideos();
                setVideos(data);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        }
        fetchVideos();
    }, [])

    const handleVideoClick = (videoId: string) => {
        router.push(`/video/${videoId}`);
    };

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
                        {videos.map((video) => (
                            <VideoCard
                                key={video.id}
                                video={video}
                                variant="default"
                                onClick={() => handleVideoClick(video.id.toString())}
                            />
                        ))}
                    </div>

                    {videos.length === 0 && (
                        <div className="text-center py-12">
                            <BookOpen size={48} className="text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">គ្មានវីដេអូ</h3>
                            <p className="text-gray-600">ផ្លាតហ្វមនេះមិនទាន់មានវីដេអូនៅឡើយទេ</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}