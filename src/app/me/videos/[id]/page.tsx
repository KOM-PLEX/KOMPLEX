'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Trash, Edit, Eye, Clock, Heart } from 'lucide-react';
import { getVideoById } from '@/services/feed/videos';
import { deleteVideo, updateVideo } from '@/services/me/videos';
import Sidebar from '@/components/pages/me/Sidebar';
import Comments from '@/components/pages/forum/Comments';
import EditVideo from '@/components/pages/me/videos/EditVideo';
import ContentError from '@/components/common/ContentError';
import type { VideoPost } from '@/types/content/videos';

// Skeleton Loading Component for Display Mode
function VideoPostSkeleton() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto p-5 pt-20">
                {/* Back Button Skeleton */}
                <div className="mb-6">
                    <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
                </div>

                {/* Video Post Skeleton */}
                <article className="bg-white rounded-2xl shadow-lg shadow-indigo-500/10 border border-indigo-500/10 overflow-hidden">
                    <div className="p-6 md:p-8">
                        {/* Video Player Skeleton */}
                        <div className="w-full h-96 bg-gray-200 rounded-lg animate-pulse mb-6"></div>

                        {/* Title Skeleton */}
                        <div className="mb-2">
                            <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse"></div>
                        </div>

                        {/* User Info Skeleton */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
                            <div className="flex items-center gap-2">
                                <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                                <div className="w-2 h-4 bg-gray-200 rounded animate-pulse"></div>
                                <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                        </div>

                        {/* Stats Skeleton */}
                        <div className="flex items-center gap-6 mb-6">
                            <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
                        </div>

                        {/* Description Skeleton */}
                        <div className="space-y-3">
                            <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-4/5 h-4 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default function VideoPost() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const [videoPost, setVideoPost] = useState<VideoPost>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isCommentInputActive, setIsCommentInputActive] = useState(false);

    // Fetch existing video data
    useEffect(() => {
        const fetchVideo = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const video = await getVideoById(id);
                setVideoPost(video);
            } catch (error) {
                console.error('Error fetching video:', error);
                setError('មានបញ្ហាកើតឡើងពេលផ្ទុកវីដេអូ សូមព្យាយាមម្តងទៀត');
            } finally {
                setIsLoading(false);
            }
        };

        if (id) {
            fetchVideo();
        }
    }, [id]);

    const handleDelete = async () => {
        if (!confirm('តើអ្នកប្រាកដជាចង់លុបវីដេអូនេះមែនទេ?')) {
            return;
        }

        try {
            await deleteVideo(id);
            router.push('/me/videos');
        } catch (error) {
            console.error('Error deleting video:', error);
            alert('មានបញ្ហាកើតឡើងពេលលុបវីដេអូ សូមព្យាយាមម្តងទៀត');
        }
    };

    const handleSave = async (updatedVideo: VideoPost) => {
        try {
            const updatedVideoData = await updateVideo(id, {
                title: updatedVideo.title,
                description: updatedVideo.description,
            });
            setVideoPost(updatedVideoData);
            setIsEditMode(false);
        } catch (error) {
            console.error('Error updating video:', error);
            alert('មានបញ្ហាកើតឡើងពេលកែប្រែវីដេអូ សូមព្យាយាមម្តងទៀត');
        }
    };

    const handleCancel = () => {
        setIsEditMode(false);
    };

    const handleCommentClose = () => {
        setIsCommentInputActive(false);
    };


    const formatDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('km-KH', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    if (isLoading) {
        return <VideoPostSkeleton />;
    }

    if (error || !videoPost) {
        return (
            <div className="flex min-h-screen transition-colors duration-200 bg-gray-50">
                <Sidebar />
                <div className="flex-1 ml-64 pt-20">
                    <div className="max-w-7xl mx-auto p-5">
                        <div className="mb-6">
                            <Link href="/me/videos" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
                                <ArrowLeft className="w-4 h-4" />
                                ត្រឡប់ទៅវីដេអូរបស់ខ្ញុំ
                            </Link>
                        </div>
                        <ContentError
                            type="error"
                            message={error || 'មានបញ្ហាក្នុងការទាញយកវីដេអូ'}
                        />
                    </div>
                </div>
            </div>
        );
    }

    // Display Mode
    if (!isEditMode) {
        return (
            <div className="flex min-h-screen transition-colors duration-200 bg-gray-50">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
                    <div className="max-w-7xl mx-auto p-5">
                        {/* Header with Back Button and Edit Button */}
                        <div className="mb-6 flex items-center justify-between">
                            <Link href="/me/videos" className="inline-flex items-center gap-2 font-medium transition-colors duration-200 text-gray-700">
                                <ArrowLeft className="w-4 h-4" />
                                ត្រឡប់ទៅវីដេអូរបស់ខ្ញុំ
                            </Link>
                            <div className='flex gap-2 items-center'>
                                <button
                                    onClick={() => handleDelete()}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                                >
                                    <Trash className="w-4 h-4" />
                                    លុប
                                </button>
                                <button
                                    onClick={() => setIsEditMode(true)}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                                >
                                    <Edit className="w-4 h-4" />
                                    កែប្រែ
                                </button>
                            </div>
                        </div>

                        {/* Video Post Display */}
                        <article className="bg-white rounded-2xl shadow-lg shadow-indigo-500/10 border border-indigo-500/10 overflow-hidden">
                            {/* Video Player */}
                            <div className="relative">
                                <video
                                    src={videoPost.videoUrl}
                                    poster={videoPost.thumbnailUrl}
                                    controls
                                    className="w-full h-auto max-h-96 object-cover"
                                    onError={(e) => {
                                        console.error('Video loading error:', e);
                                    }}
                                >
                                    Your browser does not support the video tag.
                                </video>

                                {/* Duration Badge */}
                                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                    {formatDuration(videoPost.duration)}
                                </div>
                            </div>

                            {/* Video Info */}
                            <div className="p-6 md:p-8">
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                                    {videoPost.title}
                                </h1>

                                {/* User Info */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                                        {videoPost.username.split(" ")[0].charAt(0)}
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span className="font-semibold text-gray-900">{videoPost.username}</span>
                                        <span>|</span>
                                        <span className="text-gray-500 text-sm">{formatDate(videoPost.createdAt)}</span>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="flex items-center gap-6 mb-6 text-gray-600">
                                    <span className="flex items-center gap-2">
                                        <Eye className="w-5 h-5" />
                                        {videoPost.viewCount.toLocaleString()} ទស្សនា
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Heart className="w-5 h-5" />
                                        {videoPost.likeCount} ចូលចិត្ត
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock className="w-5 h-5" />
                                        {formatDuration(videoPost.duration)}
                                    </span>
                                </div>

                                {/* Description */}
                                <div className="prose prose-lg max-w-none">
                                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                        {videoPost.description}
                                    </div>
                                </div>

                                {/* Comments Section */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <Comments
                                        type='video'
                                        parentId={videoPost.id}
                                        focusInput={isCommentInputActive}
                                        isReadOnly={false}
                                        onClose={handleCommentClose}
                                    />
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        );
    }

    // Edit Mode
    return (
        <div className="flex min-h-screen transition-colors duration-200 bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
                <div className="max-w-7xl mx-auto p-5">
                    {/* Header with Back Button */}
                    <div className="mb-6 flex items-center justify-between">
                        <Link
                            href={`/me/videos`}
                            className="inline-flex items-center gap-2 font-medium transition-colors duration-200 text-gray-700 hover:text-indigo-600"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            ត្រឡប់ទៅវីដេអូរបស់ខ្ញុំ
                        </Link>
                        <button className='bg-gray-500 text-white rounded-lg p-2 flex items-center gap-2' onClick={() => setIsEditMode(false)}><Eye className="w-4 h-4" />មើល</button>
                    </div>

                    {/* Edit Video Component */}
                    <EditVideo
                        video={videoPost}
                        onSave={handleSave}
                        onCancel={handleCancel}
                    />
                </div>
            </div>
        </div>
    );
}
