'use client';

import React, { useState } from 'react';
import {
    Search,
    Filter,
    Menu,
    BookOpen
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import VideoCard from '@/components/pages/video/VideoCard';
import Sidebar from '@/components/pages/video/Sidebar';

interface Video {
    id: string;
    title: string;
    thumbnail: string;
    channel: string;
    views: string;
    duration: string;
    uploaded: string;
    description: string;
    subject: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const mockVideos: Video[] = [
    {
        id: '1',
        title: 'ដោះស្រាយសំណួរគណិតវិទ្យា ថ្នាក់ទី១២ - អនុគមន៍លោការីត',
        thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=225&fit=crop',
        channel: 'គណិតវិទ្យាសាលា',
        views: '12.5K',
        duration: '15:32',
        uploaded: '2 ថ្ងៃមុន',
        description: 'រៀនពីរបៀបដោះស្រាយសំណួរអនុគមន៍លោការីតដោយជំហាន',
        subject: 'mathematics',
        difficulty: 'intermediate'
    },
    {
        id: '2',
        title: 'រូបមន្តគីមីវិទ្យា - ការប្រតិកម្មអុកស៊ីតកម្ម',
        thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=225&fit=crop',
        channel: 'គីមីវិទ្យាសាលា',
        views: '8.9K',
        duration: '22:15',
        uploaded: '1 សប្តាហ៍មុន',
        description: 'យល់ដឹងពីរូបមន្តគីមីវិទ្យានិងការប្រតិកម្មអុកស៊ីតកម្ម',
        subject: 'chemistry',
        difficulty: 'advanced'
    },
    {
        id: '3',
        title: 'អក្សរសាស្ត្រខ្មែរ - ការវិភាគអត្ថបទ',
        thumbnail: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=225&fit=crop',
        channel: 'អក្សរសាស្ត្រខ្មែរ',
        views: '15.2K',
        duration: '18:45',
        uploaded: '3 ថ្ងៃមុន',
        description: 'រៀនពីរបៀបវិភាគអត្ថបទអក្សរសាស្ត្រខ្មែរ',
        subject: 'khmer',
        difficulty: 'beginner'
    },
    {
        id: '4',
        title: 'រូបវិទ្យា - ច្បាប់ញូតុន',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop',
        channel: 'រូបវិទ្យាសាលា',
        views: '11.7K',
        duration: '25:10',
        uploaded: '5 ថ្ងៃមុន',
        description: 'យល់ដឹងពីច្បាប់ញូតុននិងការអនុវត្តន៍',
        subject: 'physics',
        difficulty: 'intermediate'
    },
    {
        id: '5',
        title: 'ជីវវិទ្យា - ប្រព័ន្ធរស្មី',
        thumbnail: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f7?w=400&h=225&fit=crop',
        channel: 'ជីវវិទ្យាសាលា',
        views: '9.3K',
        duration: '20:30',
        uploaded: '1 សប្តាហ៍មុន',
        description: 'ស្វែងយល់ពីប្រព័ន្ធរស្មីនិងការដំណើរការរបស់វា',
        subject: 'biology',
        difficulty: 'beginner'
    },
    {
        id: '6',
        title: 'ប្រវត្តិវិទ្យា - អាណាចក្រខ្មែរ',
        thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=225&fit=crop',
        channel: 'ប្រវត្តិវិទ្យាសាលា',
        views: '13.8K',
        duration: '28:20',
        uploaded: '4 ថ្ងៃមុន',
        description: 'ស្វែងយល់ពីប្រវត្តិអាណាចក្រខ្មែរនិងអរិយធម៌',
        subject: 'history',
        difficulty: 'intermediate'
    },
    {
        id: '6',
        title: 'ប្រវត្តិវិទ្យា - អាណាចក្រខ្មែរ',
        thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=225&fit=crop',
        channel: 'ប្រវត្តិវិទ្យាសាលា',
        views: '13.8K',
        duration: '28:20',
        uploaded: '4 ថ្ងៃមុន',
        description: 'ស្វែងយល់ពីប្រវត្តិអាណាចក្រខ្មែរនិងអរិយធម៌',
        subject: 'history',
        difficulty: 'intermediate'
    },
    {
        id: '6',
        title: 'ប្រវត្តិវិទ្យា - អាណាចក្រខ្មែរ',
        thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=225&fit=crop',
        channel: 'ប្រវត្តិវិទ្យាសាលា',
        views: '13.8K',
        duration: '28:20',
        uploaded: '4 ថ្ងៃមុន',
        description: 'ស្វែងយល់ពីប្រវត្តិអាណាចក្រខ្មែរនិងអរិយធម៌',
        subject: 'history',
        difficulty: 'intermediate'
    },
    {
        id: '6',
        title: 'ប្រវត្តិវិទ្យា - អាណាចក្រខ្មែរ',
        thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=225&fit=crop',
        channel: 'ប្រវត្តិវិទ្យាសាលា',
        views: '13.8K',
        duration: '28:20',
        uploaded: '4 ថ្ងៃមុន',
        description: 'ស្វែងយល់ពីប្រវត្តិអាណាចក្រខ្មែរនិងអរិយធម៌',
        subject: 'history',
        difficulty: 'intermediate'
    },
    {
        id: '6',
        title: 'ប្រវត្តិវិទ្យា - អាណាចក្រខ្មែរ',
        thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=225&fit=crop',
        channel: 'ប្រវត្តិវិទ្យាសាលា',
        views: '13.8K',
        duration: '28:20',
        uploaded: '4 ថ្ងៃមុន',
        description: 'ស្វែងយល់ពីប្រវត្តិអាណាចក្រខ្មែរនិងអរិយធម៌',
        subject: 'history',
        difficulty: 'intermediate'
    },
    {
        id: '6',
        title: 'ប្រវត្តិវិទ្យា - អាណាចក្រខ្មែរ',
        thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=225&fit=crop',
        channel: 'ប្រវត្តិវិទ្យាសាលា',
        views: '13.8K',
        duration: '28:20',
        uploaded: '4 ថ្ងៃមុន',
        description: 'ស្វែងយល់ពីប្រវត្តិអាណាចក្រខ្មែរនិងអរិយធម៌',
        subject: 'history',
        difficulty: 'intermediate'
    },
];

export default function VideoPage() {
    const [selectedSubject, setSelectedSubject] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();

    const filteredVideos = mockVideos.filter(video => {
        const matchesSubject = selectedSubject === 'all' || video.subject === selectedSubject;
        const matchesDifficulty = selectedDifficulty === 'all' || video.difficulty === selectedDifficulty;
        const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            video.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesSubject && matchesDifficulty && matchesSearch;
    });

    const handleVideoClick = (videoId: string) => {
        router.push(`/video/${videoId}`);
    };

    return (
        <div className="flex h-screen bg-gray-50 pt-15">
            <Sidebar
                selectedSubject={selectedSubject}
                selectedDifficulty={selectedDifficulty}
                onSubjectChange={setSelectedSubject}
                onDifficultyChange={setSelectedDifficulty}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredVideos.map((video) => (
                            <VideoCard
                                key={video.id}
                                video={video}
                                variant="default"
                                onClick={() => handleVideoClick(video.id)}
                            />
                        ))}
                    </div>

                    {filteredVideos.length === 0 && (
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