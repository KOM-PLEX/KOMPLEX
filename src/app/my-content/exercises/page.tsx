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
    BookOpen
} from 'lucide-react';

interface Exercise {
    id: number;
    title: string;
    subject: string;
    difficulty: string;
    status: 'completed' | 'in-progress' | 'not-started';
    score?: number;
    timeSpent?: number;
    completedAt?: string;
    createdAt: string;
}

export default function MyExercises() {
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedFilter, setSelectedFilter] = useState('all');

    // Mock data - replace with actual API call
    useEffect(() => {
        const mockExercises: Exercise[] = [
            {
                id: 1,
                title: 'លំហាត់អំពីដេរីវេ',
                subject: 'គណិតវិទ្យា',
                difficulty: 'ជាក់ស្តែង',
                status: 'completed',
                score: 95,
                timeSpent: 25,
                completedAt: '2024-01-15',
                createdAt: '2024-01-10'
            },
            {
                id: 2,
                title: 'លំហាត់អំពីអាំងតេក្រាល',
                subject: 'គណិតវិទ្យា',
                difficulty: 'ជាក់ស្តែង',
                status: 'in-progress',
                score: 60,
                timeSpent: 15,
                createdAt: '2024-01-12'
            },
            {
                id: 3,
                title: 'លំហាត់អំពីវ៉ិចទ័រ',
                subject: 'គណិតវិទ្យា',
                difficulty: 'ជាក់ស្តែង',
                status: 'not-started',
                createdAt: '2024-01-14'
            },
            {
                id: 4,
                title: 'លំហាត់អំពីគីមីវិទ្យា',
                subject: 'គីមីវិទ្យា',
                difficulty: 'ជាក់ស្តែង',
                status: 'completed',
                score: 88,
                timeSpent: 30,
                completedAt: '2024-01-13',
                createdAt: '2024-01-08'
            },
            {
                id: 5,
                title: 'លំហាត់អំពីរូបវិទ្យា',
                subject: 'រូបវិទ្យា',
                difficulty: 'ជាក់ស្តែង',
                status: 'completed',
                score: 92,
                timeSpent: 20,
                completedAt: '2024-01-11',
                createdAt: '2024-01-05'
            }
        ];

        setTimeout(() => {
            setExercises(mockExercises);
            setIsLoading(false);
        }, 1000);
    }, []);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'text-green-600 bg-green-100';
            case 'in-progress':
                return 'text-yellow-600 bg-yellow-100';
            case 'not-started':
                return 'text-gray-600 bg-gray-100';
            default:
                return 'text-gray-600 bg-gray-100';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'completed':
                return <CheckCircle className="w-4 h-4" />;
            case 'in-progress':
                return <Clock className="w-4 h-4" />;
            case 'not-started':
                return <XCircle className="w-4 h-4" />;
            default:
                return <XCircle className="w-4 h-4" />;
        }
    };

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'ជាក់ស្តែង':
                return 'text-blue-600 bg-blue-100';
            case 'មធ្យម':
                return 'text-yellow-600 bg-yellow-100';
            case 'ពិបាក':
                return 'text-red-600 bg-red-100';
            default:
                return 'text-gray-600 bg-gray-100';
        }
    };

    const filteredExercises = exercises.filter(exercise => {
        if (selectedFilter === 'all') return true;
        return exercise.status === selectedFilter;
    });

    const stats = {
        total: exercises.length,
        completed: exercises.filter(e => e.status === 'completed').length,
        inProgress: exercises.filter(e => e.status === 'in-progress').length,
        notStarted: exercises.filter(e => e.status === 'not-started').length,
        averageScore: exercises.filter(e => e.score).reduce((acc, e) => acc + (e.score || 0), 0) / exercises.filter(e => e.score).length
    };

    if (isLoading) {
        return (
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <div className="flex-1 ml-64 pt-20">
                    <div className="p-6">
                        <div className="animate-pulse space-y-6">
                            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {[...Array(4)].map((_, i) => (
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
            <div className="flex-1 ml-64 pt-20">
                <div className="p-6">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">លំហាត់របស់ខ្ញុំ</h1>
                        <p className="text-gray-600">គ្រប់គ្រងលំហាត់និងមើលវឌ្ឍនភាពរៀនរបស់អ្នក</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">លំហាត់សរុប</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                                </div>
                                <div className="p-3 bg-indigo-100 rounded-lg">
                                    <BookOpen className="w-6 h-6 text-indigo-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">បានបញ្ចប់</p>
                                    <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
                                </div>
                                <div className="p-3 bg-green-100 rounded-lg">
                                    <CheckCircle className="w-6 h-6 text-green-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">កំពុងធ្វើ</p>
                                    <p className="text-2xl font-bold text-yellow-600">{stats.inProgress}</p>
                                </div>
                                <div className="p-3 bg-yellow-100 rounded-lg">
                                    <Clock className="w-6 h-6 text-yellow-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">ពិន្ទុជាមធ្យម</p>
                                    <p className="text-2xl font-bold text-purple-600">{stats.averageScore.toFixed(0)}%</p>
                                </div>
                                <div className="p-3 bg-purple-100 rounded-lg">
                                    <BarChart3 className="w-6 h-6 text-purple-600" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="mb-6">
                        <div className="flex gap-2">
                            {['all', 'completed', 'in-progress', 'not-started'].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setSelectedFilter(filter)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedFilter === filter
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                        }`}
                                >
                                    {filter === 'all' ? 'ទាំងអស់' :
                                        filter === 'completed' ? 'បានបញ្ចប់' :
                                            filter === 'in-progress' ? 'កំពុងធ្វើ' : 'មិនទាន់ចាប់ផ្តើម'}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Exercises List */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-900">លំហាត់</h2>
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
                            {filteredExercises.length > 0 ? (
                                <div className="space-y-4">
                                    {filteredExercises.map((exercise) => (
                                        <div key={exercise.id} className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors">
                                            <div className={`p-3 rounded-lg ${getStatusColor(exercise.status)}`}>
                                                {getStatusIcon(exercise.status)}
                                            </div>

                                            <div className="flex-1">
                                                <h3 className="font-medium text-gray-900 mb-1">{exercise.title}</h3>
                                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                                    <span>{exercise.subject}</span>
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                                                        {exercise.difficulty}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="text-right">
                                                {exercise.score && (
                                                    <div className="text-sm font-medium text-gray-900 mb-1">
                                                        {exercise.score}%
                                                    </div>
                                                )}
                                                {exercise.timeSpent && (
                                                    <div className="text-xs text-gray-500">
                                                        {exercise.timeSpent} នាទី
                                                    </div>
                                                )}
                                            </div>

                                            <div className="text-right text-xs text-gray-500">
                                                <div>{new Date(exercise.createdAt).toLocaleDateString('km-KH')}</div>
                                                {exercise.completedAt && (
                                                    <div className="text-green-600">
                                                        បានបញ្ចប់ {new Date(exercise.completedAt).toLocaleDateString('km-KH')}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <Pencil className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">រកមិនឃើញលំហាត់</h3>
                                    <p className="text-gray-500 mb-6">សូមព្យាយាមផ្លាស់ប្តូរតម្លៃច្រោះ</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 