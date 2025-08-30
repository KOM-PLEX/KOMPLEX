'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Maximize, Settings, Share2, ThumbsUp, ThumbsDown, Bookmark, MoreVertical, User, Eye, Clock, Calendar, MessageSquare, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import Comments from '@/components/pages/forum/Comments';
import ExerciseBox from '@/components/pages/docs/common/box/ExerciseBox';
import VideoCard from '@/components/pages/video/VideoCard';
import type { VideoPost, VideoComment } from '@/types/content/videos';
import type { Media } from '@/types/content/media';
import axios from 'axios';

// Mock exercises data
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

// Mock videos data for recommendations sidebar
const mockVideos: VideoPost[] = [
    {
        id: 1,
        userId: 1,
        title: "អនុគមន៍លោការីត - មូលដ្ឋានគ្រឹះ",
        description: "ស្វែងយល់អំពីអនុគមន៍លោការីត និងការប្រើប្រាស់របស់វាក្នុងគណិតវិទ្យា។",
        duration: 1200,
        videoUrl: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        thumbnailUrl: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        videoUrlForDeletion: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        thumbnailUrlForDeletion: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        viewCount: 1250,
        createdAt: "2025-08-16T09:01:37.337Z",
        updatedAt: "2025-08-16T09:01:37.337Z",
        username: "សុខ ដារា",
        isSave: false,
        isLike: false,
        likeCount: 45,
        saveCount: 12
    },
    {
        id: 2,
        userId: 1,
        title: "ដេរីវេទីវ - ការគណនាអត្រានៃការផ្លាស់ប្តូរ",
        description: "រៀនអំពីដេរីវេទីវ និងរបៀបគណនាអត្រានៃការផ្លាស់ប្តូរ។",
        duration: 900,
        videoUrl: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        thumbnailUrl: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        videoUrlForDeletion: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        thumbnailUrlForDeletion: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        viewCount: 890,
        createdAt: "2025-08-15T14:30:00.000Z",
        updatedAt: "2025-08-15T14:30:00.000Z",
        username: "វណ្ណា សុខ",
        isSave: true,
        isLike: true,
        likeCount: 67,
        saveCount: 23
    },
    {
        id: 3,
        userId: 1,
        title: "អាំងតេក្រាល - ការគណនាផ្ទៃក្រឡា",
        description: "ស្វែងយល់អំពីអាំងតេក្រាល និងការគណនាផ្ទៃក្រឡាក្រោមខ្សែកោង។",
        duration: 1500,
        videoUrl: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        thumbnailUrl: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        videoUrlForDeletion: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        thumbnailUrlForDeletion: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        viewCount: 2100,
        createdAt: "2025-08-14T10:15:00.000Z",
        updatedAt: "2025-08-14T10:15:00.000Z",
        username: "រតនា ម៉េង",
        isSave: false,
        isLike: false,
        likeCount: 89,
        saveCount: 34
    },
    {
        id: 4,
        userId: 1,
        title: "ត្រីកោណមាត្រ - អត្តសញ្ញាណ និងកូស៊ីនុស",
        description: "រៀនអំពីត្រីកោណមាត្រ អត្តសញ្ញាណ និងកូស៊ីនុស។",
        duration: 1100,
        videoUrl: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        thumbnailUrl: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        videoUrlForDeletion: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        thumbnailUrlForDeletion: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        viewCount: 1560,
        createdAt: "2025-08-13T16:45:00.000Z",
        updatedAt: "2025-08-13T16:45:00.000Z",
        username: "សុខ ដារា",
        isSave: true,
        isLike: false,
        likeCount: 78,
        saveCount: 19
    },
    {
        id: 5,
        userId: 1,
        title: "វ៉ិចទ័រ - ការបូក និងដកវ៉ិចទ័រ",
        description: "ស្វែងយល់អំពីវ៉ិចទ័រ និងការប្រតិបត្តិការមូលដ្ឋាន។",
        duration: 800,
        videoUrl: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        thumbnailUrl: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        videoUrlForDeletion: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        thumbnailUrlForDeletion: "https://res.cloudinary.com/dc5uhjhun/video/upload/v1755334691/my_app_uploads/gsywj0uootmugg4rfnur.mp4",
        viewCount: 980,
        createdAt: "2025-08-12T11:20:00.000Z",
        updatedAt: "2025-08-12T11:20:00.000Z",
        username: "វណ្ណា សុខ",
        isSave: false,
        isLike: true,
        likeCount: 56,
        saveCount: 15
    }
];

// API function to fetch video by ID
const fetchVideoById = async (id: number): Promise<VideoPost | null> => {
    try {
        // Replace this with your actual API endpoint
        const response = await axios.get(`http://localhost:6969/videos/${id}`);
        if (response.status !== 200) {
            throw new Error('Failed to fetch video');
        }
        return response.data;
    } catch (error) {
        console.error('Error fetching video:', error);
        return null;
    }
};



export default function VideoDetailPage() {
    const params = useParams();
    const router = useRouter();
    const videoId = parseInt(params.id as string);
    const [activeTab, setActiveTab] = useState<'related' | 'comments' | 'exercise'>('related');
    const [video, setVideo] = useState<VideoPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [comments, setComments] = useState<VideoComment[]>([]);
    useEffect(() => {
        const loadVideo = async () => {
            if (!videoId || isNaN(videoId)) {
                setError('Invalid video ID');
                setLoading(false);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const videoData = await fetchVideoById(videoId);
                if (videoData) {
                    setVideo(videoData);
                } else {
                    setError('Video not found');
                }
            } catch (err) {
                setError('Failed to load video');
            } finally {
                setLoading(false);
            }
        };

        loadVideo();

        const fetchComments = async () => {
            try {
                const response = await axios.get(`http://localhost:6969/video_comments/${videoId}`);
                if (response.status !== 200) {
                    throw new Error('Failed to fetch comments');
                }
                setComments(response.data);
            } catch (err) {
                setError('Failed to fetch comments');
            }
        };

        loadVideo();
        fetchComments();
    }, [videoId]);

    const handleLike = async (videoId: number, isLiked: boolean, video: VideoPost) => {
        try {
            const response = await axios.patch(`http://localhost:6969/videos/${videoId}/${isLiked ? 'unlike' : 'like'}`);
            if (response.status !== 200) {
                throw new Error('Failed to like video');
            }
            setVideo({ ...video!, isLike: !isLiked, likeCount: isLiked ? video.likeCount - 1 : video.likeCount + 1 });
            return response.data;
        } catch (error) {
            console.error('Error liking video:', error);
            return null;
        }
    }

    const handleSave = async (videoId: number, isSaved: boolean, video: VideoPost) => {
        try {
            const response = await axios.patch(`http://localhost:6969/videos/${videoId}/${isSaved ? 'unsave' : 'save'}`);
            if (response.status !== 200) {
                throw new Error('Failed to save video');
            }
            setVideo({ ...video!, isSave: !isSaved });
            return response.data;
        } catch (error) {
            console.error('Error saving video:', error);
            return null;
        }
    }

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">កំពុងផ្ទុកវីដេអូ...</p>
                </div>
            </div>
        );
    }

    // Error state
    if (error || !video) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">វីដេអូរកមិនឃើញ</h1>
                    <p className="text-gray-600 mb-6">
                        {error === 'Video not found'
                            ? 'វីដេអូដែលអ្នកកំពុងស្វែងរកមិនមាននៅក្នុងប្រព័ន្ធទេ។'
                            : 'មានបញ្ហាក្នុងការផ្ទុកវីដេអូ។ សូមព្យាយាមម្តងទៀត។'
                        }
                    </p>
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
                poster={video.thumbnailUrl}
                preload="metadata"
            >
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );

    const renderVideoInfo = () => (
        <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className='flex items-center gap-4 justify-between'>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-3">{video.title}</h1>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-2">
                            <User size={16} />
                            {video.username}
                        </span>
                        <span className="flex items-center gap-2">
                            <Eye size={16} />
                            {video.viewCount.toLocaleString()} ទស្សនា
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock size={16} />
                            {Math.floor(video.duration / 60)}:{(video.duration % 60).toString().padStart(2, '0')}
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar size={16} />
                            {new Date(video.createdAt).toLocaleDateString('km-KH')}
                        </span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <button className='flex items-center gap-2 bg-gray-100 p-2 rounded-md' onClick={() => handleLike(video.id, video.isLike, video)}>
                        <ThumbsUp size={16} className={`${video.isLike ? 'fill-indigo-500' : 'text-gray-500'}`} />
                        {video.likeCount}
                    </button>
                    <button className='flex items-center gap-2 bg-gray-100 p-2 rounded-md' onClick={() => handleSave(video.id, video.isSave, video)}>
                        <Bookmark size={16} className={`${video.isSave ? 'fill-indigo-500' : 'text-gray-500'}`} />
                        រក្សាទុក
                    </button>
                    <button className='flex items-center gap-2 bg-gray-100 p-2 rounded-md'>
                        <Share2 size={16} className='text-gray-500' />
                        ចែករំលែក
                    </button>
                </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{video.description}</p>
        </div>
    );

    const renderDesktopTabs = () => (
        <div className="hidden lg:block">
            {/* Tab Navigation */}
            <div className="bg-white rounded-2xl shadow-sm mb-4">
                <div className="flex">
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

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-sm">
                {activeTab === 'related' && (
                    <div className="p-6">
                        <div className="space-y-4">
                            {mockVideos
                                .filter(v => v.id !== videoId)
                                .slice(0, 5)
                                .map((relatedVideo) => (
                                    <VideoCard key={relatedVideo.id} video={relatedVideo} variant="compact" />
                                ))}
                        </div>
                    </div>
                )}

                {activeTab === 'comments' && (
                    <div>
                        <Comments type='video' parentId={videoId} comments={comments} />
                    </div>
                )}
            </div>
        </div>
    );

    const renderMobileTabs = () => (
        <div className="lg:hidden mt-8">
            {/* Mobile Tab Navigation */}
            <div className="bg-white rounded-2xl shadow-sm mb-4">
                <div className="flex">
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
                <Comments type='video' parentId={videoId} comments={comments} />
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
                {/* Main Grid Layout - Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-0 lg:gap-6 items-start">
                    {/* Left Column - Video Player and Info */}
                    <div className="space-y-4">
                        {renderVideoPlayer()}
                        {renderVideoInfo()}

                        {/* Exercise Section - Under Video for Desktop */}
                        <div className="hidden lg:block">
                            <ExerciseBox questions={mockExercises} />
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="self-start h-fit lg:top-6">
                        {renderDesktopTabs()}
                    </div>
                </div>

                {/* Mobile Tab System */}
                {renderMobileTabs()}
            </div>
        </div>
    );
}