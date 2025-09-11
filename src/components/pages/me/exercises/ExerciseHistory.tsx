'use client';

import Link from 'next/link';
import { Plus, Target } from 'lucide-react';
import { ExerciseHistory } from '@/types/user-content/exercise';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config/axios';

export default function ExerciseHistoryComponent() {
    const [history, setHistory] = useState<ExerciseHistory[]>([]);

    useEffect(() => {
        // Fetch history data
        const fetchHistory = async () => {
            try {
                const historyResponse = await api.get<ExerciseHistory[]>('/me/exercises/history');
                setHistory(historyResponse.data);
            } catch (error) {
                console.error('Error fetching exercise history:', error);
            }
        }
        fetchHistory();
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

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">ប្រវត្តិលំហាត់</h2>
                    <Link
                        href="/exercises"
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        ចាប់ផ្តើមលំហាត់
                    </Link>
                </div>
            </div>
            <div className="p-6">
                {history.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                        {history.map((exercise, index) => (
                            <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors">
                                <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                                    <Target className="w-4 h-4" />
                                </div>

                                <div className="flex-1 space-y-3 lg:space-y-0">
                                    <h3 className="font-medium text-gray-900 line-clamp-1">{exercise.title}</h3>
                                    <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 lg:gap-4 text-sm text-gray-500">
                                        <span className="w-full lg:w-auto">ពិន្ទុ: {exercise.score}%</span>
                                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
                                            ពេលវេលា: {formatTime(exercise.timeTaken)}
                                        </span>
                                        <div className="hidden lg:block">ធ្វើនៅ {formatDate(exercise.createdAt)}</div>
                                        <div className="lg:hidden">ធ្វើនៅ {exercise.createdAt ? exercise.createdAt.split('T')[0] : 'មិនដឹង'}</div>
                                    </div>
                                </div>

                                <div className="w-full lg:w-auto flex justify-end">
                                    <Link
                                        href={`/exercises/${exercise.id}`}
                                        className='w-full lg:w-auto px-4 py-2 hover:bg-indigo-400 hover:text-white bg-indigo-500 rounded-lg transition-colors flex items-center justify-center gap-2'
                                    >
                                        <p className='text-sm font-medium text-white'>ធ្វើលំហាត់ម្ដងទៀត</p>
                                    </Link>
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
    );
} 