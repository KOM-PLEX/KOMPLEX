'use client';

import React, { useState } from 'react';
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Maximize, Settings, Share2, ThumbsUp, ThumbsDown, Bookmark, MoreVertical, User, Eye, Clock, Calendar, MessageSquare, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import Comment from '@/components/pages/forum/Comment';
import ExerciseBox from '@/components/pages/docs/common/box/ExerciseBox';
import VideoCard from '@/components/pages/video/VideoCard';
import RecommendedVideoCard from '@/components/pages/video/RecommendedVideoCard';
import VideoDescription from '@/components/pages/video/VideoDescription';

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
        description: 'រៀនពីរបៀបដោះស្រាយសំណួរអនុគមន៍លោការីតដោយជំហាន។ វីដេអូនេះនឹងបង្ហាញអ្នកពីរបៀបដោះស្រាយសំណួរគណិតវិទ្យាដោយជំហាន ដែលជាការរៀនដ៏មានប្រសិទ្ធភាពសម្រាប់សិស្សថ្នាក់ទី១២។',
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
        description: 'យល់ដឹងពីរូបមន្តគីមីវិទ្យានិងការប្រតិកម្មអុកស៊ីតកម្ម។ រៀនពីរបៀបដោះស្រាយសំណួរគីមីវិទ្យានិងការយល់ដឹងពីរូបមន្តផ្សេងៗ។',
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
        description: 'រៀនពីរបៀបវិភាគអត្ថបទអក្សរសាស្ត្រខ្មែរ។ វីដេអូនេះនឹងបង្ហាញអ្នកពីរបៀបវិភាគអត្ថបទអក្សរសាស្ត្រខ្មែរដោយជំហាន។',
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
        description: 'យល់ដឹងពីច្បាប់ញូតុននិងការអនុវត្តន៍។ រៀនពីរបៀបដោះស្រាយសំណួររូបវិទ្យាដោយប្រើច្បាប់ញូតុន។យល់ដឹងពីច្បាប់ញូតុននិងការអនុវត្តន៍។ រៀនពីរបៀបដោះស្រាយសំណួររូបវិទ្យាដោយប្រើច្បាប់ញូតុន។យល់ដឹងពីច្បាប់ញូតុននិងការអនុវត្តន៍។ រៀនពីរបៀបដោះស្រាយសំណួររូបវិទ្យាដោយប្រើច្បាប់ញូតុន។យល់ដឹងពីច្បាប់ញូតុននិងការអនុវត្តន៍។ រៀនពីរបៀបដោះស្រាយសំណួររូបវិទ្យាដោយប្រើច្បាប់ញូតុន។យល់ដឹងពីច្បាប់ញូតុននិងការអនុវត្តន៍។ រៀនពីរបៀបដោះស្រាយសំណួររូបវិទ្យាដោយប្រើច្បាប់ញូតុន។យល់ដឹងពីច្បាប់ញូតុននិងការអនុវត្តន៍។ រៀនពីរបៀបដោះស្រាយសំណួររូបវិទ្យាដោយប្រើច្បាប់ញូតុន។យល់ដឹងពីច្បាប់ញូតុននិងការអនុវត្តន៍។ រៀនពីរបៀបដោះស្រាយសំណួររូបវិទ្យាដោយប្រើច្បាប់ញូតុន។យល់ដឹងពីច្បាប់ញូតុននិងការអនុវត្តន៍។ រៀនពីរបៀបដោះស្រាយសំណួររូបវិទ្យាដោយប្រើច្បាប់ញូតុន។',
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
        description: 'ស្វែងយល់ពីប្រព័ន្ធរស្មីនិងការដំណើរការរបស់វា។ រៀនពីរបៀបដោះស្រាយសំណួរជីវវិទ្យាដោយជំហាន។',
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
        description: 'ស្វែងយល់ពីប្រវត្តិអាណាចក្រខ្មែរនិងអរិយធម៌។ រៀនពីរបៀបដោះស្រាយសំណួរប្រវត្តិវិទ្យាដោយជំហាន។',
        subject: 'history',
        difficulty: 'intermediate'
    }
];

const mockExercises = [
    {
        id: "ex1",
        question: "តើអនុគមន៍លោការីតមានលក្ខណៈសម្បត្តិអ្វីខ្លះ?",
        options: [
            "អនុគមន៍លោការីតមានលក្ខណៈសម្បត្តិដែលអនុញ្ញាតឱ្យយើងដោះស្រាយសមីការដោយងាយស្រួល",
            "អនុគមន៍លោការីតមានតែក្នុងគណិតវិទ្យាប៉ុណ្ណោះ",
            "អនុគមន៍លោការីតគ្មានការប្រើប្រាស់ក្នុងជីវិតជាក់ស្តែងទេ",
            "អនុគមន៍លោការីតគ្មានលក្ខណៈសម្បត្តិអ្វីទេ"
        ],
        correctAnswer: 0
    },
    {
        id: "ex2",
        question: "តើអ្វីជាលក្ខណៈសម្បត្តិសំខាន់របស់អនុគមន៍លោការីត?",
        options: [
            "អនុគមន៍លោការីតអាចបំប្លែងផលគុណទៅជាផលបូក",
            "អនុគមន៍លោការីតអាចបំប្លែងផលចែកទៅជាផលដក",
            "អនុគមន៍លោការីតអាចបំប្លែងផលគុណទៅជាផលបូក និងផលចែកទៅជាផលដក",
            "អនុគមន៍លោការីតគ្មានលក្ខណៈសម្បត្តិបំប្លែងទេ"
        ],
        correctAnswer: 2
    },
    {
        id: "ex3",
        question: "តើអនុគមន៍លោការីតអាចជួយដោះស្រាយបញ្ហាអ្វីខ្លះ?",
        options: [
            "តែការគណនាគណិតវិទ្យាប៉ុណ្ណោះ",
            "ការគណនាគណិតវិទ្យា ការវិភាគទិន្នន័យ និងការគណនាប្រាក់កាស",
            "តែការគណនាប្រាក់កាសប៉ុណ្ណោះ",
            "គ្មានការប្រើប្រាស់អ្វីទេ"
        ],
        correctAnswer: 1
    }
];

const mockComments = [
    {
        id: 1,
        author: { name: 'សុខវណ្ណា អ៊ុំ', avatar: 'ស' },
        time: '2 ម៉ោងមុន',
        content: 'វីដេអូនេះមានប្រយោជន៍ណាស់! អរគុណសម្រាប់ការចែករំលែក។',
        upvotes: 12,
        upvoted: false
    },
    {
        id: 2,
        author: { name: 'វណ្ណា សុខ', avatar: 'វ' },
        time: '1 ម៉ោងមុន',
        content: 'ខ្ញុំយល់ដឹងបានច្រើនពីវីដេអូនេះ។ សូមបង្កើតវីដេអូបន្ថែមទៀត!',
        upvotes: 8,
        upvoted: true
    },
    {
        id: 3,
        author: { name: 'រតនា ម៉េង', avatar: 'រ' },
        time: '30 នាទីមុន',
        content: 'ការពន្យល់ច្បាស់លាស់ណាស់។ ខ្ញុំចង់រៀនបន្ថែមទៀត!',
        upvotes: 5,
        upvoted: false
    },
    {
        id: 3,
        author: { name: 'រតនា ម៉េង', avatar: 'រ' },
        time: '30 នាទីមុន',
        content: 'ការពន្យល់ច្បាស់លាស់ណាស់។ ខ្ញុំចង់រៀនបន្ថែមទៀត!',
        upvotes: 5,
        upvoted: false
    },
    {
        id: 3,
        author: { name: 'រតនា ម៉េង', avatar: 'រ' },
        time: '30 នាទីមុន',
        content: 'ការពន្យល់ច្បាស់លាស់ណាស់។ ខ្ញុំចង់រៀនបន្ថែមទៀត!',
        upvotes: 5,
        upvoted: false
    },
    {
        id: 3,
        author: { name: 'រតនា ម៉េង', avatar: 'រ' },
        time: '30 នាទីមុន',
        content: 'ការពន្យល់ច្បាស់លាស់ណាស់។ ខ្ញុំចង់រៀនបន្ថែមទៀត!',
        upvotes: 5,
        upvoted: false
    },
    {
        id: 3,
        author: { name: 'រតនា ម៉េង', avatar: 'រ' },
        time: '30 នាទីមុន',
        content: 'ការពន្យល់ច្បាស់លាស់ណាស់។ ខ្ញុំចង់រៀនបន្ថែមទៀត!',
        upvotes: 5,
        upvoted: false
    },
    {
        id: 3,
        author: { name: 'រតនា ម៉េង', avatar: 'រ' },
        time: '30 នាទីមុន',
        content: 'ការពន្យល់ច្បាស់លាស់ណាស់។ ខ្ញុំចង់រៀនបន្ថែមទៀត!',
        upvotes: 5,
        upvoted: false
    },
    {
        id: 3,
        author: { name: 'រតនា ម៉េង', avatar: 'រ' },
        time: '30 នាទីមុន',
        content: 'ការពន្យល់ច្បាស់លាស់ណាស់។ ខ្ញុំចង់រៀនបន្ថែមទៀត!',
        upvotes: 5,
        upvoted: false
    },
    {
        id: 3,
        author: { name: 'រតនា ម៉េង', avatar: 'រ' },
        time: '30 នាទីមុន',
        content: 'ការពន្យល់ច្បាស់លាស់ណាស់។ ខ្ញុំចង់រៀនបន្ថែមទៀត!',
        upvotes: 5,
        upvoted: false
    },
    {
        id: 3,
        author: { name: 'រតនា ម៉េង', avatar: 'រ' },
        time: '30 នាទីមុន',
        content: 'ការពន្យល់ច្បាស់លាស់ណាស់។ ខ្ញុំចង់រៀនបន្ថែមទៀត!',
        upvotes: 5,
        upvoted: false
    },
    {
        id: 3,
        author: { name: 'រតនា ម៉េង', avatar: 'រ' },
        time: '30 នាទីមុន',
        content: 'ការពន្យល់ច្បាស់លាស់ណាស់។ ខ្ញុំចង់រៀនបន្ថែមទៀត!',
        upvotes: 5,
        upvoted: false
    },
];

export default function VideoDetailPage() {
    const params = useParams();
    const router = useRouter();
    const videoId = params.id as string;
    const [activeTab, setActiveTab] = useState<'related' | 'comments' | 'exercise'>('related');

    const video = mockVideos.find(v => v.id === videoId);

    if (!video) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">វីដេអូរកមិនឃើញ</h1>
                    <p className="text-gray-600 mb-6">វីដេអូដែលអ្នកកំពុងស្វែងរកមិនមាននៅក្នុងប្រព័ន្ធទេ។</p>
                    <Link
                        href="/video"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        ត្រឡប់ទៅវីដេអូ
                    </Link>
                </div>
            </div>
        );
    }

    const renderVideoPlayer = () => (
        <div className="bg-black rounded-2xl overflow-hidden shadow-lg">
            <video
                className="w-full aspect-video"
                controls
                poster={video.thumbnail}
                preload="metadata"
            >
                <source src="/test.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );

    const renderVideoInfo = () => (
        <VideoDescription video={video as Video} />
    );

    const renderDesktopTabs = () => (
        <div className="hidden lg:block h-full">
            {/* Tab Navigation */}
            <div className="bg-white rounded-2xl shadow-sm mb-4">
                <div className="flex ">
                    <button
                        onClick={() => setActiveTab('related')}
                        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'related'
                            ? 'text-indigo-600 underline underline-offset-8'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <div className="flex items-center gap-2 justify-center ">
                            <Play size={16} />
                            វីដេអូដទៃទៀត
                        </div>
                    </button>
                    <button
                        onClick={() => setActiveTab('comments')}
                        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'comments'
                            ? 'text-indigo-600 underline underline-offset-8'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <div className="flex items-center gap-2 justify-center ">
                            <MessageSquare size={16} />
                            មតិតិការ
                        </div>
                    </button>
                </div>
            </div>

            {/* Tab Content Container - Full Height */}
            <div className="bg-white rounded-2xl shadow-sm h-[calc(100vh-1.6rem)] overflow-hidden ">
                {activeTab === 'related' && (
                    <div className="p-6 h-full overflow-y-auto scrollbar-hide">
                        <div className="space-y-4">
                            {mockVideos
                                .filter(v => v.id !== videoId)
                                .slice(0, 5)
                                .map((relatedVideo) => (
                                    <RecommendedVideoCard key={relatedVideo.id} video={relatedVideo} />
                                ))}
                        </div>
                    </div>
                )}

                {activeTab === 'comments' && (
                    <div className="h-full overflow-y-auto scrollbar-hide">
                        <Comment comments={mockComments} />
                    </div>
                )}
            </div>
        </div>
    );

    const renderMobileTabs = () => (
        <div className="lg:hidden mt-8">
            {/* Mobile Tab Navigation */}
            <div className="bg-white rounded-2xl shadow-sm mb-4">
                <div className="flex ">
                    <button
                        onClick={() => setActiveTab('exercise')}
                        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'exercise'
                            ? 'text-indigo-600 underline underline-offset-8'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <div className="flex items-center gap-2 justify-center">
                            <BookOpen size={16} />
                            លំហាត់
                        </div>
                    </button>
                    <button
                        onClick={() => setActiveTab('related')}
                        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'related'
                            ? 'text-indigo-600 underline underline-offset-8'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <div className="flex items-center gap-2 justify-center">
                            <Play size={16} />
                            វីដេអូដទៃទៀត
                        </div>
                    </button>
                    <button
                        onClick={() => setActiveTab('comments')}
                        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'comments'
                            ? 'text-indigo-600 underline underline-offset-8'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <div className="flex items-center gap-2 justify-center">
                            <MessageSquare size={16} />
                            មតិតិការ
                        </div>
                    </button>

                </div>
            </div>

            {/* Mobile Tab Content */}
            {activeTab === 'exercise' && (
                <ExerciseBox questions={mockExercises} />
            )}
            {activeTab === 'comments' && (
                <Comment comments={mockComments} />
            )}
            {activeTab === 'related' && (
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-4 text-lg">វីដេអូដទៃទៀត</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {mockVideos
                            .filter(v => v.id !== videoId)
                            .slice(0, 6)
                            .map((relatedVideo) => (
                                <VideoCard
                                    key={relatedVideo.id}
                                    video={relatedVideo}
                                    variant="compact"
                                />
                            ))}
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 pt-15">
            <div className="w-full mx-auto px-5 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-6 relative">
                    {/* Video Player and Info */}
                    <div className="lg:col-span-3">
                        {renderVideoPlayer()}
                        {renderVideoInfo()}
                    </div>

                    {/* Right Sidebar with Tabs */}
                    <div className="lg:col-span-1 flex flex-col">
                        {renderDesktopTabs()}
                    </div>
                </div>

                {/* Exercise Section - Below Video Content */}
                <div className="lg:col-span-3 hidden lg:block ">
                    <ExerciseBox questions={mockExercises} />
                </div>

                {/* Mobile Tab System */}
                {renderMobileTabs()}
            </div>
        </div>
    );
} 