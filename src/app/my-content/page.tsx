'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/pages/my-content/Sidebar';
import {
    BookOpen,
    MessageSquare,
    Video,
    Pencil,
    TrendingUp
} from 'lucide-react';
import axios from 'axios';
import { formatToKhmerDate } from '@/utils/formater';
import { getContentTypeKhmer } from '@/utils/khmerUtils';


interface RecentActivity {
    title: string,
    createdAt: string,
    contentType: string,
}

// interface ForumOutput {

// interface VideoOutput {

// interface ExerciseOutput {

// }

// }

interface ContentStats {
    dashboardData: {
        numOfBlogs: number;
        numOfForums: number;
        numOfVideos: number;
        numOfExercises: number;
    }
    recentActivities: RecentActivity[];
}

const getContentTypeIcon = (contentType: string) => {
    switch (contentType) {
        case 'blog':
            return <div className="p-2 rounded-lg bg-indigo-100">
                <BookOpen className={`w-4 h-4`} />
            </div>;
        case 'video':
            return <div className="p-2 rounded-lg bg-green-100">
                <Video className={`w-4 h-4`} />
            </div>;
        case 'exercise':
            return <div className="p-2 rounded-lg bg-purple-100">
                <Pencil className={`w-4 h-4`} />
            </div>;
        case 'forum':
            return <div className="p-2 rounded-lg bg-blue-100">
                <MessageSquare className={`w-4 h-4`} />
            </div>;
        default:
            return <div className="p-2 rounded-lg bg-gray-100">
                <BookOpen className={`w-4 h-4`} />
            </div>;
    }
}

const LoadingSkeleton = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
                <div className="p-6">
                    {/* Header */}
                    <div className="mb-8 space-y-4">
                        <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-40 h-4 bg-gray-200 rounded animate-pulse"></div>
                    </div>

                    {/* Stats Cards Loading Skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mb-2"></div>
                                        <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
                                    </div>
                                    <div className="p-3 bg-gray-100 rounded-lg">
                                        <div className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center">
                                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Recent Activity Loading Skeleton */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div className="p-6 border-b border-gray-200 space-y-4">
                            <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-40 h-4 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-lg">
                                        <div className="p-2 rounded-lg bg-gray-100">
                                            <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="h-5 w-48 bg-gray-200 rounded animate-pulse mb-2"></div>
                                            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                                        </div>
                                        <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function MyContent() {
    const [stats, setStats] = useState<ContentStats>({
        dashboardData: {
            numOfBlogs: 0,
            numOfForums: 0,
            numOfVideos: 0,
            numOfExercises: 0,
        },
        recentActivities: []
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get('http://localhost:6969/user-content/dashboard');
                setStats(response.data);
            } catch (error) {
                console.error('Error fetching dashboard stats:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchStats();
    }, []);

    if (isLoading) {
        return <LoadingSkeleton />;
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
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">ផ្ទាំងគ្រប់គ្រង</h1>
                        <p className="text-gray-600">ស្វាគមន៍មកកាន់មាតិការបស់អ្នក និងមើលវឌ្ឍនភាពរបស់អ្នក</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {/* Blogs */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">ប្លុក</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.dashboardData.numOfBlogs}</p>
                                </div>
                                <div className="p-3 bg-indigo-100 rounded-lg">
                                    <BookOpen className="w-6 h-6 text-indigo-600" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center text-sm text-gray-500">
                                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                                <span>+2 ក្នុងខែនេះ</span>
                            </div>
                        </div>

                        {/* Videos */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">វីដេអូ</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.dashboardData.numOfVideos}</p>
                                </div>
                                <div className="p-3 bg-green-100 rounded-lg">
                                    <Video className="w-6 h-6 text-green-600" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center text-sm text-gray-500">
                                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                                <span>+5 ក្នុងខែនេះ</span>
                            </div>
                        </div>

                        {/* Exercises */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">លំហាត់</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.dashboardData.numOfExercises}</p>
                                </div>
                                <div className="p-3 bg-purple-100 rounded-lg">
                                    <Pencil className="w-6 h-6 text-purple-600" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center text-sm text-gray-500">
                                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                                <span>+8 ក្នុងខែនេះ</span>
                            </div>
                        </div>

                        {/* Forums */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">វេទិកា</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.dashboardData.numOfForums}</p>
                                </div>
                                <div className="p-3 bg-blue-100 rounded-lg">
                                    <MessageSquare className="w-6 h-6 text-blue-600" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center text-sm text-gray-500">
                                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                                <span>+3 ក្នុងខែនេះ</span>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900">សកម្មភាពថ្មីៗ</h2>
                            <p className="text-sm text-gray-600">សកម្មភាពថ្មីៗរបស់អ្នកនៅលើវេទិកា</p>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                {stats.recentActivities.map((activity, index) => {
                                    const Icon = getContentTypeIcon(activity.contentType);
                                    return (
                                        <div key={index} className="flex items-center gap-4  rounded-lg hover:bg-gray-50 transition-colors">
                                            <div className={`p-2 rounded-lg`}>
                                                {Icon}
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-gray-900 line-clamp-1">{activity.title}</p>
                                                {/* <p className="text-sm text-gray-600">{getContentTypeKhmer(activity.contentType)}</p> */}
                                            </div>
                                            <span className="hidden lg:block text-xs text-gray-500">{formatToKhmerDate(activity.createdAt)}</span>
                                            <span className="lg:hidden text-xs text-gray-500">{(activity.createdAt.split('T')[0])}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
