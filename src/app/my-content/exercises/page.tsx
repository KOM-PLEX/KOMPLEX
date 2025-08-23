'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/pages/my-content/Sidebar';
import {
    BookOpen,
    CheckCircle,
    Clock,
    BarChart3
} from 'lucide-react';
import axios from 'axios';
import { ExerciseDashboard, ExerciseHistory } from '@/types/user-content/exercise';
import ExerciseHistoryComponent from '@/components/pages/my-content/exercises/ExerciseHistory';
import ExerciseReportComponent from '@/components/pages/my-content/exercises/ExerciseReport';

export default function MyExercises() {
    const [dashboard, setDashboard] = useState<ExerciseDashboard | null>(null);
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

            } catch (error) {
                console.error('Error fetching exercise data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this only runs once on mount



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
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                ប្រវត្តិ
                            </button>
                            <button
                                onClick={() => setActiveTab('report')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${activeTab === 'report'
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                    }`}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                របាយការណ៍
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'history' ? (
                        <ExerciseHistoryComponent history={history} />
                    ) : (
                        <ExerciseReportComponent />
                    )}
                </div>
            </div>
        </div>
    );
} 