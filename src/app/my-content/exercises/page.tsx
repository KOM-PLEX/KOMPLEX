'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/pages/my-content/Sidebar';
import {
    Pencil,
    Plus,
    TrendingUp,
    Clock,
    CheckCircle,
    XCircle,
    Target,
    Calendar,
    BarChart3,
    BookOpen,
    History,
    FileText
} from 'lucide-react';
import axios from 'axios';
import { ExerciseDashboard, ExerciseHistory, ExerciseReport } from '@/types/user-content/exercise';

export default function MyExercises() {
    const [dashboard, setDashboard] = useState<ExerciseDashboard | null>(null);
    const [history, setHistory] = useState<ExerciseHistory[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'history' | 'report'>('history');

    // Fetch dashboard and history data
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);

                // Fetch dashboard data
                const dashboardResponse = await axios.get<ExerciseDashboard>('http://localhost:6969/user-content/exercises/dashboard');
                setDashboard(dashboardResponse.data);

                // Fetch history data
                const historyResponse = await axios.get<ExerciseHistory[]>('http://localhost:6969/user-content/exercises/history');
                setHistory(historyResponse.data);

            } catch (error) {
                console.error('Error fetching exercise data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const formatDate = (dateString: string | null) => {
        if (!dateString) return 'មិនដឹង';
        return new Date(dateString).toLocaleDateString('km-KH');
    };

    if (isLoading) {
        return (
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
                    <div className="p-6">
                        <div className="animate-pulse space-y-6">
                            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[...Array(3)].map((_, i) => (
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
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">លំហាត់របស់ខ្ញុំ</h1>
                        <p className="text-gray-600">គ្រប់គ្រងលំហាត់និងមើលវឌ្ឍនភាពរៀនរបស់អ្នក</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">លំហាត់បានបញ្ចប់</p>
                                    <p className="text-2xl font-bold text-gray-900">{dashboard?.totalExercisesCompleted || 0}</p>
                                </div>
                                <div className="p-3 bg-indigo-100 rounded-lg">
                                    <BookOpen className="w-6 h-6 text-indigo-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">ចំនួនដងព្យាយាម</p>
                                    <p className="text-2xl font-bold text-green-600">{dashboard?.totalAttempts || 0}</p>
                                </div>
                                <div className="p-3 bg-green-100 rounded-lg">
                                    <CheckCircle className="w-6 h-6 text-green-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">ពិន្ទុជាមធ្យម</p>
                                    <p className="text-2xl font-bold text-purple-600">{dashboard?.averageScore ? dashboard.averageScore.toFixed(1) : '0'}%</p>
                                </div>
                                <div className="p-3 bg-purple-100 rounded-lg">
                                    <BarChart3 className="w-6 h-6 text-purple-600" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="mb-6">
                        <div className="flex gap-2">
                            <button
                                onClick={() => setActiveTab('history')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${activeTab === 'history'
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                    }`}
                            >
                                <History className="w-4 h-4" />
                                ប្រវត្តិ
                            </button>
                            <button
                                onClick={() => setActiveTab('report')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${activeTab === 'report'
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                    }`}
                            >
                                <FileText className="w-4 h-4" />
                                របាយការណ៍
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'history' ? (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-semibold text-gray-900">ប្រវត្តិលំហាត់</h2>
                                    <Link
                                        href="/practice"
                                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                        ចាប់ផ្តើមលំហាត់
                                    </Link>
                                </div>
                            </div>
                            <div className="p-6">
                                {history.length > 0 ? (
                                    <div className="space-y-4">
                                        {history.map((exercise) => (
                                            <div key={exercise.id} className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors">
                                                <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                                                    <Target className="w-4 h-4" />
                                                </div>

                                                <div className="flex-1">
                                                    <h3 className="font-medium text-gray-900 mb-1">{exercise.title}</h3>
                                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                                        <span>ពិន្ទុ: {exercise.score}%</span>
                                                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
                                                            ពេលវេលា: {formatTime(exercise.timeTaken)}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="text-right text-xs text-gray-500">
                                                    <div>{formatDate(exercise.createdAt)}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">រកមិនឃើញប្រវត្តិលំហាត់</h3>
                                        <p className="text-gray-500 mb-6">សូមចាប់ផ្តើមលំហាត់ដើម្បីមើលប្រវត្តិ</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                            <div className="p-6 border-b border-gray-200">
                                <h2 className="text-lg font-semibold text-gray-900">របាយការណ៍លំហាត់</h2>
                            </div>
                            <div className="p-6">
                                <div className="text-center py-12">
                                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">របាយការណ៍នឹងមកដល់ឆាប់ៗ</h3>
                                    <p className="text-gray-500">API នេះនឹងត្រូវបានអភិវឌ្ឍន៍នៅពេលអនាគត</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
} 