'use client';

import React, { useState } from 'react';
import { BookOpen, Calculator, Atom, Dna, Globe, History, Languages, Target, TrendingUp, Star, Clock, Users, User, BarChart3, FileText, Trophy, Settings, Search } from 'lucide-react';
import Link from 'next/link';

interface Subject {
    id: string;
    name: string;
    nameKh: string;
    icon: React.ReactNode;
    color: string;
    description: string;
    topics: Topic[];
}

interface Topic {
    id: string;
    name: string;
    nameKh: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    questionCount: number;
    estimatedTime: string;
    userProgress?: number; // 0-100 percentage
    attempts?: number;
}

interface Grade {
    id: string;
    name: string;
    nameKh: string;
    subjects: string[];
}

const subjects: Subject[] = [
    {
        id: 'mathematics',
        name: 'Mathematics',
        nameKh: 'គណិតវិទ្យា',
        icon: <Calculator className="w-8 h-8" />,
        color: 'bg-blue-500',
        description: 'Algebra, Geometry, Calculus, and more',
        topics: [
            { id: 'algebra', name: 'Algebra', nameKh: 'ពិជគណិត', difficulty: 'beginner', questionCount: 45, estimatedTime: '30 min', userProgress: 75, attempts: 3 },
            { id: 'geometry', name: 'Geometry', nameKh: 'ធរណីមាត្រ', difficulty: 'intermediate', questionCount: 38, estimatedTime: '25 min', userProgress: 45, attempts: 2 },
            { id: 'calculus', name: 'Calculus', nameKh: 'គណនាវិទ្យា', difficulty: 'advanced', questionCount: 52, estimatedTime: '40 min', userProgress: 0, attempts: 0 },
            { id: 'statistics', name: 'Statistics', nameKh: 'ស្ថិតិវិទ្យា', difficulty: 'intermediate', questionCount: 35, estimatedTime: '20 min', userProgress: 90, attempts: 5 }
        ]
    },
    {
        id: 'physics',
        name: 'Physics',
        nameKh: 'រូបវិទ្យា',
        icon: <Atom className="w-8 h-8" />,
        color: 'bg-purple-500',
        description: 'Mechanics, Thermodynamics, Electromagnetism',
        topics: [
            { id: 'mechanics', name: 'Mechanics', nameKh: 'មេកានិច', difficulty: 'beginner', questionCount: 42, estimatedTime: '35 min', userProgress: 60, attempts: 4 },
            { id: 'thermodynamics', name: 'Thermodynamics', nameKh: 'កម្ដៅវិទ្យា', difficulty: 'intermediate', questionCount: 28, estimatedTime: '25 min', userProgress: 0, attempts: 0 },
            { id: 'electromagnetism', name: 'Electromagnetism', nameKh: 'អគ្គិសនីម៉ាញេទិច', difficulty: 'advanced', questionCount: 36, estimatedTime: '30 min', userProgress: 30, attempts: 1 }
        ]
    },
    {
        id: 'chemistry',
        name: 'Chemistry',
        nameKh: 'គីមីវិទ្យា',
        icon: <Dna className="w-8 h-8" />,
        color: 'bg-green-500',
        description: 'Organic, Inorganic, Physical Chemistry',
        topics: [
            { id: 'organic', name: 'Organic Chemistry', nameKh: 'គីមីសរីរៈ', difficulty: 'intermediate', questionCount: 48, estimatedTime: '35 min', userProgress: 0, attempts: 0 },
            { id: 'inorganic', name: 'Inorganic Chemistry', nameKh: 'គីមីអសរីរៈ', difficulty: 'beginner', questionCount: 32, estimatedTime: '25 min', userProgress: 85, attempts: 6 },
            { id: 'physical', name: 'Physical Chemistry', nameKh: 'គីមីរូបវិទ្យា', difficulty: 'advanced', questionCount: 41, estimatedTime: '40 min', userProgress: 0, attempts: 0 }
        ]
    },
    {
        id: 'biology',
        name: 'Biology',
        nameKh: 'ជីវវិទ្យា',
        icon: <Dna className="w-8 h-8" />,
        color: 'bg-emerald-500',
        description: 'Cell Biology, Genetics, Ecology',
        topics: [
            { id: 'cell-biology', name: 'Cell Biology', nameKh: 'ជីវវិទ្យាកោសិកា', difficulty: 'beginner', questionCount: 39, estimatedTime: '30 min', userProgress: 0, attempts: 0 },
            { id: 'genetics', name: 'Genetics', nameKh: 'ហ្សែន', difficulty: 'intermediate', questionCount: 44, estimatedTime: '35 min', userProgress: 55, attempts: 3 },
            { id: 'ecology', name: 'Ecology', nameKh: 'បរិស្ថានវិទ្យា', difficulty: 'intermediate', questionCount: 31, estimatedTime: '25 min', userProgress: 0, attempts: 0 }
        ]
    },
    {
        id: 'history',
        name: 'History',
        nameKh: 'ប្រវត្តិវិទ្យា',
        icon: <History className="w-8 h-8" />,
        color: 'bg-amber-500',
        description: 'Ancient, Modern, World History',
        topics: [
            { id: 'ancient', name: 'Ancient History', nameKh: 'ប្រវត្តិវិទ្យាបុរាណ', difficulty: 'beginner', questionCount: 35, estimatedTime: '25 min', userProgress: 0, attempts: 0 },
            { id: 'modern', name: 'Modern History', nameKh: 'ប្រវត្តិវិទ្យាទំនើប', difficulty: 'intermediate', questionCount: 42, estimatedTime: '30 min', userProgress: 70, attempts: 4 },
            { id: 'world', name: 'World History', nameKh: 'ប្រវត្តិវិទ្យាពិភពលោក', difficulty: 'intermediate', questionCount: 38, estimatedTime: '28 min', userProgress: 0, attempts: 0 }
        ]
    },
    {
        id: 'khmer',
        name: 'Khmer Literature',
        nameKh: 'អក្សរសាស្ត្រខ្មែរ',
        icon: <Languages className="w-8 h-8" />,
        color: 'bg-red-500',
        description: 'Grammar, Literature, Writing',
        topics: [
            { id: 'grammar', name: 'Grammar', nameKh: 'វេយ្យាករណ៍', difficulty: 'beginner', questionCount: 40, estimatedTime: '30 min', userProgress: 95, attempts: 8 },
            { id: 'literature', name: 'Literature', nameKh: 'អក្សរសាស្ត្រ', difficulty: 'intermediate', questionCount: 36, estimatedTime: '25 min', userProgress: 0, attempts: 0 },
            { id: 'writing', name: 'Writing', nameKh: 'ការសរសេរ', difficulty: 'intermediate', questionCount: 33, estimatedTime: '20 min', userProgress: 40, attempts: 2 }
        ]
    }
];

const grades: Grade[] = [
    {
        id: 'grade-9',
        name: 'Grade 9',
        nameKh: 'ថ្នាក់ទី៩',
        subjects: ['mathematics', 'physics', 'chemistry', 'biology', 'history', 'khmer']
    },
    {
        id: 'grade-10',
        name: 'Grade 10',
        nameKh: 'ថ្នាក់ទី១០',
        subjects: ['mathematics', 'physics', 'chemistry', 'biology', 'history', 'khmer']
    },
    {
        id: 'grade-11',
        name: 'Grade 11',
        nameKh: 'ថ្នាក់ទី១១',
        subjects: ['mathematics', 'physics', 'chemistry', 'biology', 'history', 'khmer']
    },
    {
        id: 'grade-12',
        name: 'Grade 12',
        nameKh: 'ថ្នាក់ទី១២',
        subjects: ['mathematics', 'physics', 'chemistry', 'biology', 'history', 'khmer']
    }
];

export default function PracticePage() {
    const [selectedGrade, setSelectedGrade] = useState<string>('grade-12');

    const filteredSubjects = selectedGrade
        ? subjects.filter(subject => grades.find(g => g.id === selectedGrade)?.subjects.includes(subject.id))
        : subjects;

    const getSubjectColor = (color: string) => {
        const colorMap: { [key: string]: { bg: string; border: string } } = {
            'bg-blue-500': { bg: 'bg-blue-50/80', border: 'border-blue-300' },
            'bg-purple-500': { bg: 'bg-purple-50/80', border: 'border-purple-300' },
            'bg-green-500': { bg: 'bg-green-50/80', border: 'border-green-300' },
            'bg-emerald-500': { bg: 'bg-emerald-50/80', border: 'border-emerald-300' },
            'bg-amber-500': { bg: 'bg-amber-50/80', border: 'border-amber-300' },
            'bg-red-500': { bg: 'bg-red-50/80', border: 'border-red-300' }
        };
        return colorMap[color] || { bg: 'bg-gray-50/80', border: 'border-gray-300' };
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Secondary Header */}
            <div className="fixed w-full top-14.5 z-40 bg-white/95 backdrop-blur-md border-b border-indigo-500/10">
                <div className="max-w-full mx-auto px-5 py-3">
                    <div className="flex items-center justify-between">

                        {/* Grade Selection */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-600">ថ្នាក់:</span>
                                <div className="flex bg-gray-100 rounded-lg p-1">
                                    {grades.map((grade) => (
                                        <button
                                            key={grade.id}
                                            onClick={() => setSelectedGrade(grade.id)}
                                            className={`px-3 py-1.5 text-sm rounded-md transition-all ${selectedGrade === grade.id
                                                ? 'bg-white text-indigo-600 shadow-sm font-medium'
                                                : 'text-gray-600 hover:text-gray-900'
                                                }`}
                                        >
                                            {grade.nameKh}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>
                        {/* Navigation Links */}
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="ស្វែងរកលំហាត់"
                                    className="pl-9 pr-4 py-2 w-64 text-sm bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                            <Link href="/practice/history" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                                <History size={16} />
                                <span className="hidden sm:inline">ប្រវត្តិ</span>
                            </Link>
                            <Link href="/practice/reports" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                                <BarChart3 size={16} />
                                <span className="hidden sm:inline">របាយការណ៍</span>
                            </Link>
                            <Link href="/practice/settings" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                                <Settings size={16} />
                                <span className="hidden sm:inline">ការកំណត់</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-32">
                <div className="max-w-7xl mx-auto px-5 py-8">
                    {/* Page Header
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            ការអនុវត្តន៍
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            ជ្រើសរើសវិញ្ញាបន្ន ឬថ្នាក់រៀនដើម្បីចាប់ផ្តើមអនុវត្តន៍លំហាត់
                        </p>
                    </div> */}

                    {/* Subjects and Topics */}
                    {selectedGrade && (
                        <div className="grid grid-cols-1   gap-4">
                            {filteredSubjects.map((subject) => {
                                const subjectColors = getSubjectColor(subject.color);
                                return (
                                    <div key={subject.id} className="bg-white rounded-2xl shadow-sm p-6">
                                        {/* Subject Header */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`w-16 h-16 ${subject.color} rounded-xl flex items-center justify-center text-white`}>
                                                {subject.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{subject.nameKh}</h3>
                                            </div>
                                        </div>

                                        {/* Topics Grid */}
                                        <div className="grid grid-cols-1 lg:grid-cols-3  gap-4">
                                            {subject.topics.map((topic) => (
                                                <Link
                                                    key={topic.id}
                                                    href={`/practice/${subject.id}/${topic.id}`}
                                                    className={`${subjectColors.bg} border-2 ${subjectColors.border} rounded-xl p-6 hover:shadow-md transition-all hover:scale-101 group`}
                                                >
                                                    <div className="mb-4">
                                                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                                                            {topic.nameKh}
                                                        </h4>
                                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                                                            <Target size={16} />
                                                            <span>{topic.questionCount} សំណួរ</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                                            <Clock size={16} />
                                                            <span>ប្រហែល {topic.estimatedTime}</span>
                                                        </div>
                                                    </div>

                                                    {/* Progress Section */}
                                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                                        {topic.userProgress && topic.userProgress > 0 ? (
                                                            <div className="space-y-2">
                                                                <div className="flex items-center justify-between text-sm">
                                                                    <span className="text-gray-600">ពិន្ទុរបស់អ្នក</span>
                                                                </div>
                                                                <div className="  rounded-full h-2 flex items-center justify-between relative w-full gap-4">
                                                                    <div className='relative w-full'>
                                                                        <div className="absolute left-0 bg-gray-200 h-2 rounded-full transition-all duration-300" style={{ width: '100%' }}></div>
                                                                        <div
                                                                            className="bg-indigo-500 h-2 rounded-full transition-all duration-300 text-right pr-2 absolute"
                                                                            style={{ width: `${topic.userProgress}%` }}
                                                                        ></div>
                                                                    </div>
                                                                    <span className="font-semibold text-xs text-indigo-500 mt-1.5">{topic.userProgress}%</span>
                                                                </div>
                                                                <div className="text-xs text-gray-500 text-center">
                                                                    បានព្យាយាម {topic.attempts} ដង
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div className="text-center py-5">
                                                                <div className="text-sm text-gray-500 ">មិនទាន់បានចាប់ផ្តើម</div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}