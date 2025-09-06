'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Share2, ThumbsUp, Bookmark, User, Eye, Clock, Calendar, MessageSquare, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Comments from '@/components/pages/forum/Comments';
import ExerciseBox from '@/components/pages/docs/common/box/ExerciseBox';
import VideoCard from '@/components/pages/video/VideoCard';
import type { VideoPost, VideoComment } from '@/types/content/videos';
import {
    getAllVideos,
    getVideoById,
    getVideoExercises,
    getVideoComments,
    toggleVideoLike,
    toggleVideoSave
} from '@/services/videos';

// API response types for exercises
interface ExerciseChoice {
    id: number;
    questionId: number;
    text: string;
    isCorrect: boolean;
    createdAt: string;
    updatedAt: string;
}

interface ApiExercise {
    id: number;
    exerciseId: number;
    userId: number | null;
    title: string;
    questionType: string;
    section: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
    choices: ExerciseChoice[];
}

// Convert API exercise format to ExerciseBox format
const convertApiExerciseToExerciseBox = (apiExercise: ApiExercise) => {
    const correctAnswerIndex = apiExercise.choices.findIndex(choice => choice.isCorrect);
    return {
        id: apiExercise.id.toString(),
        question: apiExercise.title,
        options: apiExercise.choices.map(choice => choice.text),
        correctAnswer: correctAnswerIndex
    };
};

// API function to fetch all videos for recommendations
const fetchAllVideos = async (): Promise<VideoPost[]> => {
    try {
        return await getAllVideos();
    } catch (error) {
        console.error('Error fetching videos:', error);
        return [];
    }
};

// API function to fetch video by ID
const fetchVideoById = async (id: number): Promise<VideoPost | null> => {
    try {
        return await getVideoById(id.toString());
    } catch (error) {
        console.error('Error fetching video:', error);
        return null;
    }
};

// API function to fetch exercises for a video
const fetchVideoExercises = async (videoId: number): Promise<ApiExercise[]> => {
    try {
        const exercises = await getVideoExercises(videoId.toString());
        return exercises as ApiExercise[];
    } catch (error) {
        console.error('Error fetching exercises:', error);
        return [];
    }
};



export default function VideoDetailPage() {
    const params = useParams();
    const videoId = parseInt(params.id as string);
    const [activeTab, setActiveTab] = useState<'related' | 'comments' | 'exercise'>('related');
    const [video, setVideo] = useState<VideoPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [comments, setComments] = useState<VideoComment[]>([]);
    const [exercises, setExercises] = useState<Array<{
        id: string;
        question: string;
        options: string[];
        correctAnswer: number;
    }>>([]);
    const [exercisesLoading, setExercisesLoading] = useState(false);
    const [recommendedVideos, setRecommendedVideos] = useState<VideoPost[]>([]);
    const [videosLoading, setVideosLoading] = useState(false);
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
            } catch (error) {
                console.error('Failed to load video:', error);
                setError('Failed to load video');
            } finally {
                setLoading(false);
            }
        };

        loadVideo();

        const fetchComments = async () => {
            try {
                const data = await getVideoComments(videoId.toString());
                setComments(data);
            } catch (error) {
                console.error('Failed to fetch comments:', error);
            }
        };

        const loadExercises = async () => {
            setExercisesLoading(true);
            try {
                const apiExercises = await fetchVideoExercises(videoId);
                const convertedExercises = apiExercises.map(convertApiExerciseToExerciseBox);
                setExercises(convertedExercises);
            } catch (error) {
                console.error('Failed to load exercises:', error);
                setExercises([]);
            } finally {
                setExercisesLoading(false);
            }
        };

        const loadRecommendedVideos = async () => {
            setVideosLoading(true);
            try {
                const allVideos = await fetchAllVideos();
                // Filter out the current video and limit to 5 recommendations
                const filteredVideos = allVideos
                    .filter(v => v.id !== videoId)
                    .slice(0, 5);
                setRecommendedVideos(filteredVideos);
            } catch (error) {
                console.error('Failed to load recommended videos:', error);
                setRecommendedVideos([]);
            } finally {
                setVideosLoading(false);
            }
        };

        loadVideo();
        fetchComments();
        loadExercises();
        loadRecommendedVideos();
    }, [videoId]);

    const handleLike = async (videoId: number, isLiked: boolean, video: VideoPost) => {
        try {
            await toggleVideoLike(videoId.toString(), isLiked);
            setVideo({ ...video!, isLike: !isLiked, likeCount: isLiked ? video.likeCount - 1 : video.likeCount + 1 });
        } catch (error) {
            console.error('Error liking video:', error);
        }
    }

    const handleSave = async (videoId: number, isSaved: boolean, video: VideoPost) => {
        try {
            await toggleVideoSave(videoId.toString(), isSaved);
            setVideo({ ...video!, isSave: !isSaved });
        } catch (error) {
            console.error('Error saving video:', error);
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
                        {videosLoading ? (
                            <div className="text-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                                <p className="text-gray-600">កំពុងផ្ទុកវីដេអូ...</p>
                            </div>
                        ) : recommendedVideos.length > 0 ? (
                            <div className="space-y-4">
                                {recommendedVideos.map((relatedVideo) => (
                                    <VideoCard key={relatedVideo.id} video={relatedVideo} variant="compact" />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center text-gray-500">
                                <Play size={48} className="mx-auto mb-4 text-gray-300" />
                                <p>មិនមានវីដេអូដទៃទៀត</p>
                            </div>
                        )}
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
                <>
                    {exercisesLoading ? (
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <div className="text-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                                <p className="text-gray-600">កំពុងផ្ទុកលំហាត់...</p>
                            </div>
                        </div>
                    ) : exercises.length > 0 ? (
                        <ExerciseBox questions={exercises} />
                    ) : (
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <div className="text-center text-gray-500">
                                <BookOpen size={48} className="mx-auto mb-4 text-gray-300" />
                                <p>មិនមានលំហាត់សម្រាប់វីដេអូនេះទេ</p>
                            </div>
                        </div>
                    )}
                </>
            )}
            {activeTab === 'comments' && (
                <Comments type='video' parentId={videoId} comments={comments} />
            )}
            {activeTab === 'related' && (
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-4 text-lg">វីដេអូដទៃទៀត</h3>
                    {videosLoading ? (
                        <div className="text-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                            <p className="text-gray-600">កំពុងផ្ទុកវីដេអូ...</p>
                        </div>
                    ) : recommendedVideos.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {recommendedVideos.slice(0, 6).map((relatedVideo) => (
                                <VideoCard
                                    key={relatedVideo.id}
                                    video={relatedVideo}
                                    variant="compact"
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-500 py-8">
                            <Play size={48} className="mx-auto mb-4 text-gray-300" />
                            <p>មិនមានវីដេអូដទៃទៀត</p>
                        </div>
                    )}
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
                            {exercisesLoading ? (
                                <div className="bg-white rounded-2xl shadow-sm p-6">
                                    <div className="text-center">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                                        <p className="text-gray-600">កំពុងផ្ទុកលំហាត់...</p>
                                    </div>
                                </div>
                            ) : exercises.length > 0 ? (
                                <ExerciseBox questions={exercises} />
                            ) : (
                                <div className="bg-white rounded-2xl shadow-sm p-6">
                                    <div className="text-center text-gray-500">
                                        <BookOpen size={48} className="mx-auto mb-4 text-gray-300" />
                                        <p>មិនមានលំហាត់សម្រាប់វីដេអូនេះទេ</p>
                                    </div>
                                </div>
                            )}
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