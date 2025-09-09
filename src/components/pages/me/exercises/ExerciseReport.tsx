'use client';

import { useState, useEffect } from 'react';
import { Target, TrendingUp, Clock, BarChart3, Calculator, Atom, Dna, BookOpen, ChevronDown } from 'lucide-react';
import ReportViewer from './ReportViewer';
import { ExerciseWithAttempts } from '@/types/user-content/exercise';
import { Listbox, Transition } from '@headlessui/react';
import axios from 'axios';
import { getExercisesByGrade } from '@/services/feed/exercises';

// Grade options
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

interface ExerciseReportData {
    [subjectName: string]: {
        id: number;
        title: string;
        duration: number;
        subject: string;
        grade: string;
        numberOfAttempts: number;
        highestScore: number | null;
        lastAttempt: string | null;
    }[];
}

interface ExerciseItem {
    id: number;
    title: string;
    duration: number;
    subject: string;
    grade: string;
    numberOfAttempts: number;
    highestScore: number | null;
    lastAttempt: string | null;
}

export default function ExerciseReportComponent() {
    const [selectedGrade, setSelectedGrade] = useState({
        id: 'grade-12',
        name: 'ថ្នាក់ទី១២',
    });
    const [exerciseData, setExerciseData] = useState<ExerciseReportData>({});
    const [selectedExercise, setSelectedExercise] = useState<ExerciseWithAttempts | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Helper functions for subject icons and colors
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

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                setIsLoading(true);
                const response = await getExercisesByGrade(selectedGrade.name);
                setExerciseData(response);
                console.log('Fetched exercise reports:', response);
            } catch (error) {
                console.error('Error fetching exercise reports:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchExercises();
    }, [selectedGrade]);

    const openModal = (exercise: ExerciseItem) => {
        // For now, we'll create a mock ExerciseWithAttempts structure
        // In the future, this should fetch detailed attempt data from the API
        const mockExercise: ExerciseWithAttempts = {
            exerciseId: exercise.id,
            title: exercise.title,
            totalAttempts: exercise.numberOfAttempts || 0,
            bestScore: exercise.highestScore || 0,
            averageScore: exercise.highestScore || 0,
            lastAttempted: exercise.lastAttempt || new Date().toISOString(),
            attempts: [
                {
                    id: 1,
                    score: exercise.highestScore || 0,
                    timeTaken: exercise.duration * 60,
                    createdAt: exercise.lastAttempt || new Date().toISOString(),
                    sectionScores: [
                        { sectionName: 'ផ្នែកទី១', score: exercise.highestScore || 0, totalQuestions: 10, correctAnswers: Math.floor((exercise.highestScore || 0) / 10) },
                        { sectionName: 'ផ្នែកទី២', score: exercise.highestScore || 0, totalQuestions: 8, correctAnswers: Math.floor((exercise.highestScore || 0) / 12.5) },
                        { sectionName: 'ផ្នែកទី៣', score: exercise.highestScore || 0, totalQuestions: 6, correctAnswers: Math.floor((exercise.highestScore || 0) / 16.67) }
                    ]
                }
            ]
        };
        setSelectedExercise(mockExercise);
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('km-KH');
    };

    const getScoreColor = (score: number) => {
        if (score >= 90) return 'text-green-600 bg-green-100';
        if (score >= 80) return 'text-blue-600 bg-blue-100';
        if (score >= 70) return 'text-yellow-600 bg-yellow-100';
        return 'text-red-600 bg-red-100';
    };

    if (isLoading) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">របាយការណ៍លំហាត់</h2>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="animate-pulse">
                                <div className="h-32 bg-gray-200 rounded-xl"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    const currentGrade = grades.find(g => g.id === selectedGrade.id);

    return (
        <>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">របាយការណ៍លំហាត់</h2>
                            <p className="text-sm text-gray-600 mt-1">{currentGrade?.name}</p>
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
                </div>

                <div className="p-6">
                    {Object.keys(exerciseData).length > 0 ? (
                        <div className="space-y-8">
                            {Object.entries(exerciseData).map(([subjectName, exercises]) => {
                                const subjectColors = getSubjectColorVariants(getSubjectColor(subjectName));
                                return (
                                    <div key={subjectName} className="border border-gray-200 rounded-xl overflow-hidden">
                                        {/* Subject Header */}
                                        <div className="bg-gray-50 p-4 border-b border-gray-200">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 ${getSubjectColor(subjectName)} rounded-xl flex items-center justify-center text-white`}>
                                                    {getSubjectIcon(subjectName)}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-semibold text-gray-900">{subjectName}</h3>
                                                    <p className="text-sm text-gray-600">{exercises.length} លំហាត់</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Exercises Grid */}
                                        <div className="p-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                                {exercises.map((exercise) => (
                                                    <div
                                                        key={exercise.id}
                                                        onClick={() => openModal(exercise)}
                                                        className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-4 cursor-pointer hover:shadow-lg hover:border-indigo-200 transition-all duration-200 group"
                                                    >
                                                        <div className="flex items-center justify-between mb-3">
                                                            <div className='flex items-center gap-2'>
                                                                <div className="flex items-center gap-2 p-2 rounded-lg bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                                                                    <Target className="w-4 h-4" />
                                                                </div>
                                                                <h4 className="font-semibold text-gray-900  text-base group-hover:text-indigo-600 transition-colors">
                                                                    {exercise.title}
                                                                </h4>
                                                            </div>

                                                        </div>



                                                        <div className="space-y-2">
                                                            <div className="flex items-center justify-between text-xs">
                                                                <span className="text-gray-600 flex items-center gap-1">
                                                                    <BarChart3 className="w-3 h-3" />
                                                                    ព្យាយាម
                                                                </span>
                                                                <span className="font-medium text-gray-900">{exercise.numberOfAttempts || 0} ដង</span>
                                                            </div>

                                                            {exercise.highestScore ? (
                                                                <div className="flex justify-between rounded-full text-xs font-medium">
                                                                    <span className="text-gray-600 flex items-center gap-1">
                                                                        <BarChart3 className="w-3 h-3" />
                                                                        ពិន្ទុខ្ពស់បំផុត
                                                                    </span>
                                                                    {exercise.highestScore || 0}%
                                                                </div>
                                                            ) : (
                                                                <div className="flex justify-between rounded-full text-xs font-medium">
                                                                    <span className="text-gray-600 flex items-center gap-1">
                                                                        <BarChart3 className="w-3 h-3" />
                                                                        ពិន្ទុខ្ពស់បំផុត
                                                                    </span>
                                                                    <span className="font-medium text-gray-900">មិនមានរបាយការណ៍</span>
                                                                </div>
                                                            )}

                                                            {exercise.lastAttempt ? (
                                                                <div className="flex items-center justify-between text-xs">
                                                                    <span className="text-gray-600 flex items-center gap-1">
                                                                        <TrendingUp className="w-3 h-3" />
                                                                        ចុងក្រោយ
                                                                    </span>
                                                                    <span className="font-medium text-gray-900">{formatDate(exercise.lastAttempt)}</span>
                                                                </div>
                                                            ) : (
                                                                <div className="flex items-center justify-between text-xs">
                                                                    <span className="text-gray-600 flex items-center gap-1">
                                                                        <TrendingUp className="w-3 h-3" />
                                                                        ចុងក្រោយ
                                                                    </span>
                                                                    <span className="font-medium text-gray-900">មិនមានរបាយការណ៍</span>
                                                                </div>
                                                            )}
                                                        </div>

                                                        <div className="mt-3 pt-3 border-t border-gray-100">
                                                            <div className="text-xs text-indigo-600 font-medium group-hover:text-indigo-700 transition-colors">
                                                                ចុចដើម្បីមើលរបាយការណ៍លម្អិត
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">រកមិនឃើញរបាយការណ៍លំហាត់</h3>
                            <p className="text-gray-500">សូមចាប់ផ្តើមលំហាត់ដើម្បីមើលរបាយការណ៍</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Report Viewer Modal */}
            {selectedExercise && (
                <ReportViewer
                    id={selectedExercise.exerciseId}
                    onClose={() => setSelectedExercise(null)}
                />
            )}
        </>
    );
}
