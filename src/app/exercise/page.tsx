'use client';

import React, { useEffect, useState } from 'react';
import { Calculator, Atom, Dna, History, Settings, Search, ChevronDown, BarChart3, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Listbox, Transition } from '@headlessui/react';
import PracticeCard from '@/components/pages/exercise/ExerciseCard';
import axios from 'axios';
import { Exercise, Subject, Topic } from '@/types/content/exercises';


// Helper functions for data transformation
const getSubjectIcon = (subjectName: string): React.ReactNode => {
    const iconMap: { [key: string]: React.ReactNode } = {
        'គណិតវិទ្យា': <Calculator className="w-8 h-8" />,
        'រូបវិទ្យា': <Atom className="w-8 h-8" />,
        'គីមីវិទ្យា': <Dna className="w-8 h-8" />,
        'ជីវវិទ្យា': <Dna className="w-8 h-8" />,
    };
    return iconMap[subjectName] || <BookOpen className="w-8 h-8" />;
};

const getSubjectColor = (subjectName: string): string => {
    const colorMap: { [key: string]: string } = {
        'គណិតវិទ្យា': 'bg-blue-500',
        'រូបវិទ្យា': 'bg-purple-500',
        'គីមីវិទ្យា': 'bg-green-500',
        'ជីវវិទ្យា': 'bg-emerald-500',
    };
    return colorMap[subjectName] || 'bg-gray-500';
};

const transformBackendDataToSubjects = (backendData: Exercise): Subject[] => {
    return Object.entries(backendData).map(([subjectName, exercises]) => {
        const topics: Topic[] = exercises.map(exercise => ({
            id: exercise.id.toString(),
            name: exercise.title,
            questionCount: exercise.numberOfQuestions,
            estimatedTime: `${exercise.duration}`,
            userProgress: exercise.highestScore,
            attempts: exercise.numberOfAttempts,
        }));

        return {
            id: subjectName.toLowerCase().replace(/\s+/g, '-'),
            name: subjectName,
            icon: getSubjectIcon(subjectName),
            color: getSubjectColor(subjectName),
            topics: topics
        };
    });
};

// !later extract this to a hardcoded file
const grades = [
    {
        id: 'grade-9',
        name: 'ថ្នាក់ទី៩',
    },
    {
        id: 'grade-10',
        name: 'ថ្នាក់ទី១០',
    },
    {
        id: 'grade-11',
        name: 'ថ្នាក់ទី១១',
    },
    {
        id: 'grade-12',
        name: 'ថ្នាក់ទី១២',
    },
];

export default function PracticePage() {
    const [selectedGrade, setSelectedGrade] = useState({
        id: 'grade-12',
        name: 'ថ្នាក់ទី១២',
    });
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await axios.get<Exercise>(`http://localhost:6969/exercises/?grade=${selectedGrade.name}`);
                const transformedSubjects = transformBackendDataToSubjects(response.data);
                setSubjects(transformedSubjects);
                console.log('Fetched exercises:', response.data);
            } catch (err) {
                setError('Failed to fetch exercises');
                console.error('Error fetching exercises:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchExercises();
    }, [selectedGrade]);

    const getSubjectColorVariants = (color: string) => {
        const colorMap: { [key: string]: { bg: string; border: string } } = {
            'bg-blue-500': { bg: 'bg-indigo-50/80', border: 'border-indigo-500' },
            'bg-purple-500': { bg: 'bg-purple-50/80', border: 'border-purple-300' },
            'bg-green-500': { bg: 'bg-green-50/80', border: 'border-green-300' },
            'bg-emerald-500': { bg: 'bg-emerald-50/80', border: 'border-emerald-300' },
            'bg-amber-500': { bg: 'bg-amber-50/80', border: 'border-amber-300' },
            'bg-red-500': { bg: 'bg-red-50/80', border: 'border-red-300' },
            'bg-gray-500': { bg: 'bg-gray-50/80', border: 'border-gray-300' }
        };
        return colorMap[color] || { bg: 'bg-gray-50/80', border: 'border-gray-300' };
    };

    const currentGrade = grades.find(g => g.id === selectedGrade.id);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Secondary Header */}
            <div className="fixed w-full top-14 z-40 bg-white/95 backdrop-blur-md border-b border-indigo-500/10">
                <div className="max-w-full mx-auto px-5 py-3">
                    <div className="flex items-center justify-between">

                        {/* Search Bar */}
                        <div className="flex items-center gap-2 flex-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="ស្វែងរកលំហាត់"
                                    className="pl-9 pr-4 py-2 w-full  text-sm bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex items-center gap-2 ">
                            <Link href="/practice/history" className="flex items-center gap-2 p-1 lg:px-3 lg:py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                                <History size={16} />
                                <span className="hidden lg:inline">ប្រវត្តិ</span>
                            </Link>
                            <Link href="/practice/reports" className="flex items-center gap-2 p-1 lg:px-3 lg:py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                                <BarChart3 size={16} />
                                <span className="hidden lg:inline">របាយការណ៍</span>
                            </Link>
                            <Link href="/practice/settings" className="flex items-center gap-2 p-1 lg:px-3 lg:py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                                <Settings size={16} />
                                <span className="hidden lg:inline">ការកំណត់</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-32">

                <div className="max-w-7xl mx-auto px-5 py-8">
                    {/* Page Header with Grade Selection */}
                    <div className="flex items-center justify-between mb-8">
                        <div className='pr-2'>
                            <h1 className="lg:text-3xl text-2xl font-bold text-gray-900 mb-2">
                                លំហាត់សម្រាប់ {currentGrade?.name}
                            </h1>
                            <p className="text-gray-600 text-sm">
                                ជ្រើសរើសវិញ្ញាបន្នដើម្បីចាប់ផ្តើមអនុវត្តន៍
                            </p>
                        </div>

                        {/* Grade Dropdown */}
                        <div className="relative">
                            <Listbox value={selectedGrade} onChange={(value) => setSelectedGrade(value)}>
                                <Listbox.Button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all">
                                    <span className="text-sm font-medium text-gray-700">{currentGrade?.name}</span>
                                    <ChevronDown size={16} className="text-gray-500 transition-transform ui-open:rotate-180" />
                                </Listbox.Button>

                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Listbox.Options className="absolute right-0 mt-2 w-48 bg-white rounded-lg border border-gray-200 shadow-lg z-50">
                                        {grades.map((grade) => (
                                            <Listbox.Option
                                                key={grade.id}
                                                value={grade.id}
                                                className={({ active, selected }) =>
                                                    `relative cursor-pointer select-none px-4 py-3 text-sm ${selected
                                                        ? 'bg-indigo-50 text-indigo-600 font-medium'
                                                        : active
                                                            ? 'bg-gray-50 text-gray-700'
                                                            : 'text-gray-700'
                                                    }`
                                                }
                                            >
                                                {grade.name}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </Listbox>
                        </div>
                    </div>

                    {/* Loading State */}
                    {loading && (
                        <div className="space-y-6">
                            {/* Subject Skeleton */}
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="lg:bg-white bg-gray-50 lg:rounded-2xl lg:shadow-sm lg:p-6">
                                    {/* Subject Header Skeleton */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-gray-200 rounded-xl animate-pulse"></div>
                                        <div className="flex-1">
                                            <div className="h-8 bg-gray-200 rounded-lg w-48 animate-pulse mb-2"></div>
                                        </div>
                                    </div>

                                    {/* Topics Grid Skeleton */}
                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                                        {[1, 2, 3, 4, 5, 6].map((j) => (
                                            <div key={j} className="bg-gray-100 rounded-xl p-4 animate-pulse">
                                                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                                                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                                                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="text-center py-12">
                            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                                <p className="text-red-600">{error}</p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                                >
                                    ព្យាយាមម្តងទៀត
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Subjects and Topics */}
                    {!loading && !error && selectedGrade && (
                        <div className="grid grid-cols-1 gap-4">
                            {subjects.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-md mx-auto">
                                        <p className="text-gray-600">មិនមានលំហាត់សម្រាប់ថ្នាក់នេះទេ</p>
                                    </div>
                                </div>
                            ) : (
                                subjects.map((subject) => {
                                    const subjectColors = getSubjectColorVariants(subject.color);
                                    return (
                                        <div key={subject.id} className="lg:bg-white bg-gray-50 lg:rounded-2xl lg:shadow-sm lg:p-6">
                                            {/* Subject Header */}
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className={`w-16 h-16 ${subject.color} rounded-xl flex items-center justify-center text-white`}>
                                                    {subject.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{subject.name}</h3>
                                                </div>
                                            </div>

                                            {/* Topics Grid */}
                                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                                                {subject.topics.map((topic) => (
                                                    <PracticeCard
                                                        key={topic.id}
                                                        topic={topic}
                                                        subjectId={subject.id}
                                                        subjectColors={subjectColors}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}