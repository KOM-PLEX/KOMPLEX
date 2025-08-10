'use client';

import React, { useState } from 'react';
import { Calculator, Atom, Dna, History, Languages, Settings, Search, ChevronDown, BarChart3, Target, Clock } from 'lucide-react';
import Link from 'next/link';
import { Listbox, Transition } from '@headlessui/react';
import PracticeCard from '@/components/pages/practice/PracticeCard';

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

// Comprehensive Math Exams and Lessons
const mathExams: Topic[] = [
    // Main Lesson Categories
    { id: 'complex-numbers', name: 'Complex Numbers', nameKh: 'កំុផ្លិច', difficulty: 'intermediate', questionCount: 200, estimatedTime: '120 min' },
    { id: 'limits', name: 'Limits', nameKh: 'លីមីត', difficulty: 'intermediate', questionCount: 250, estimatedTime: '150 min' },
    { id: 'derivatives', name: 'Derivatives', nameKh: 'ដេរីវេ', difficulty: 'advanced', questionCount: 280, estimatedTime: '180 min' },
    { id: 'integration', name: 'Integration', nameKh: 'អាំងតេក្រាល', difficulty: 'advanced', questionCount: 220, estimatedTime: '140 min' },
    { id: 'differential-equations', name: 'Differential Equations', nameKh: 'សមីការឌីផេរ៉ង់សែ្យល', difficulty: 'advanced', questionCount: 240, estimatedTime: '160 min' },
    { id: 'probability', name: 'Probability', nameKh: 'ប្រូបាប', difficulty: 'intermediate', questionCount: 180, estimatedTime: '100 min' },
    { id: 'vectors', name: 'Vectors', nameKh: 'វ៉ិចទ័រ', difficulty: 'intermediate', questionCount: 200, estimatedTime: '120 min' },
    { id: 'conics', name: 'Conics', nameKh: 'កោនិក', difficulty: 'intermediate', questionCount: 160, estimatedTime: '100 min' },
    { id: 'functions', name: 'Functions', nameKh: 'អនុគមន៍', difficulty: 'intermediate', questionCount: 220, estimatedTime: '140 min' },

    // BacII Exams
    { id: 'bacii-2024', name: 'BacII 2024', nameKh: 'វិញ្ញាសាបាក់ឌុប ២០២៤', difficulty: 'advanced', questionCount: 50, estimatedTime: '120 min' },
    { id: 'bacii-2023', name: 'BacII 2023', nameKh: 'វិញ្ញាសាបាក់ឌុប ២០២៣', difficulty: 'advanced', questionCount: 50, estimatedTime: '120 min' },
    { id: 'bacii-2022', name: 'BacII 2022', nameKh: 'វិញ្ញាសាបាក់ឌុប ២០២២', difficulty: 'advanced', questionCount: 50, estimatedTime: '120 min' },
    { id: 'bacii-2021', name: 'BacII 2021', nameKh: 'វិញ្ញាសាបាក់ឌុប ២០២១', difficulty: 'advanced', questionCount: 50, estimatedTime: '120 min' },
    { id: 'bacii-2020', name: 'BacII 2020', nameKh: 'វិញ្ញាសាបាក់ឌុប ២០២០', difficulty: 'advanced', questionCount: 50, estimatedTime: '120 min' },
    { id: 'bacii-2019', name: 'BacII 2019', nameKh: 'វិញ្ញាសាបាក់ឌុប ២០១៩', difficulty: 'advanced', questionCount: 50, estimatedTime: '120 min' },
    { id: 'bacii-2018', name: 'BacII 2018', nameKh: 'វិញ្ញាសាបាក់ឌុប ២០១៨', difficulty: 'advanced', questionCount: 50, estimatedTime: '120 min' },
    { id: 'bacii-2017', name: 'BacII 2017', nameKh: 'វិញ្ញាសាបាក់ឌុប ២០១៧', difficulty: 'advanced', questionCount: 50, estimatedTime: '120 min' },
    { id: 'bacii-2016', name: 'BacII 2016', nameKh: 'វិញ្ញាសាបាក់ឌុប ២០១៦', difficulty: 'advanced', questionCount: 50, estimatedTime: '120 min' },
    { id: 'bacii-2015', name: 'BacII 2015', nameKh: 'វិញ្ញាសាបាក់ឌុប ២០១៥', difficulty: 'advanced', questionCount: 50, estimatedTime: '120 min' },
    { id: 'bacii-2014', name: 'BacII 2014', nameKh: 'វិញ្ញាសាបាក់ឌុប ២០១៤', difficulty: 'advanced', questionCount: 50, estimatedTime: '120 min' },
    { id: 'bacii-2013', name: 'BacII 2013', nameKh: 'វិញ្ញាសាបាក់ឌុប ២០១៣', difficulty: 'advanced', questionCount: 50, estimatedTime: '120 min' },
    { id: 'bacii-2012', name: 'BacII 2012', nameKh: 'វិញ្ញាសាបាក់ឌុប ២០១២', difficulty: 'advanced', questionCount: 50, estimatedTime: '120 min' },
    { id: 'bacii-2011', name: 'BacII 2011', nameKh: 'វិញ្ញាសាបាក់ឌុប ២០១១', difficulty: 'advanced', questionCount: 50, estimatedTime: '120 min' },
    { id: 'bacii-2010', name: 'BacII 2010', nameKh: 'វិញ្ញាសាបាក់ឌុប ២០១០', difficulty: 'advanced', questionCount: 50, estimatedTime: '120 min' },
    { id: 'bacii-2009', name: 'BacII 2009', nameKh: 'វិញ្ញាសាបាក់ឌុប ២០០៩', difficulty: 'advanced', questionCount: 50, estimatedTime: '120 min' },
    { id: 'bacii-2008', name: 'BacII 2008', nameKh: 'វិញ្ញាសាបាក់ឌុប ២០០៨', difficulty: 'advanced', questionCount: 50, estimatedTime: '120 min' },
    { id: 'bacii-2007', name: 'BacII 2007', nameKh: 'វិញ្ញាសាបាក់ឌុប ២០០៧', difficulty: 'advanced', questionCount: 50, estimatedTime: '120 min' },
    { id: 'bacii-2006', name: 'BacII 2006', nameKh: 'វិញ្ញាសាបាក់ឌុប ២០០៦', difficulty: 'advanced', questionCount: 50, estimatedTime: '120 min' },

    // Preparation Sets
    { id: 'prep-1', name: 'Preparation Set 1', nameKh: 'វិញ្ញាសាត្រៀមទី ១', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' },
    { id: 'prep-2', name: 'Preparation Set 2', nameKh: 'វិញ្ញាសាត្រៀមទី ២', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' },
    { id: 'prep-3', name: 'Preparation Set 3', nameKh: 'វិញ្ញាសាត្រៀមទី ៣', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' },
    { id: 'prep-4', name: 'Preparation Set 4', nameKh: 'វិញ្ញាសាត្រៀមទី ៤', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' },
    { id: 'prep-5', name: 'Preparation Set 5', nameKh: 'វិញ្ញាសាត្រៀមទី ៥', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' },
    { id: 'prep-6', name: 'Preparation Set 6', nameKh: 'វិញ្ញាសាត្រៀមទី ៦', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' },
    { id: 'prep-7', name: 'Preparation Set 7', nameKh: 'វិញ្ញាសាត្រៀមទី ៧', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' },
    { id: 'prep-8', name: 'Preparation Set 8', nameKh: 'វិញ្ញាសាត្រៀមទី ៨', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' },
    { id: 'prep-9', name: 'Preparation Set 9', nameKh: 'វិញ្ញាសាត្រៀមទី ៩', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' },
    { id: 'prep-10', name: 'Preparation Set 10', nameKh: 'វិញ្ញាសាត្រៀមទី ១០', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' },
    { id: 'prep-11', name: 'Preparation Set 11', nameKh: 'វិញ្ញាសាត្រៀមទី ១១', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' },
    { id: 'prep-12', name: 'Preparation Set 12', nameKh: 'វិញ្ញាសាត្រៀមទី ១២', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' },
    { id: 'prep-13', name: 'Preparation Set 13', nameKh: 'វិញ្ញាសាត្រៀមទី ១៣', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' },
    { id: 'prep-14', name: 'Preparation Set 14', nameKh: 'វិញ្ញាសាត្រៀមទី ១៤', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' },
    { id: 'prep-15', name: 'Preparation Set 15', nameKh: 'វិញ្ញាសាត្រៀមទី ១៥', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' },
    { id: 'prep-16', name: 'Preparation Set 16', nameKh: 'វិញ្ញាសាត្រៀមទី ១៦', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' },
    { id: 'prep-17', name: 'Preparation Set 17', nameKh: 'វិញ្ញាសាត្រៀមទី ១៧', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' },
    { id: 'prep-18', name: 'Preparation Set 18', nameKh: 'វិញ្ញាសាត្រៀមទី ១៨', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' },
    { id: 'prep-19', name: 'Preparation Set 19', nameKh: 'វិញ្ញាសាត្រៀមទី ១៩', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' },
    { id: 'prep-20', name: 'Preparation Set 20', nameKh: 'វិញ្ញាសាត្រៀមទី ២០', difficulty: 'intermediate', questionCount: 45, estimatedTime: '90 min' }
];

const subjects: Subject[] = [
    {
        id: 'mathematics',
        name: 'Mathematics',
        nameKh: 'គណិតវិទ្យា',
        icon: <Calculator className="w-8 h-8" />,
        color: 'bg-blue-500',
        description: 'Algebra, Geometry, Calculus, and more',
        topics: mathExams
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
    const [isGradeDropdownOpen, setIsGradeDropdownOpen] = useState(false);

    const filteredSubjects = selectedGrade
        ? subjects.filter(subject => grades.find(g => g.id === selectedGrade)?.subjects.includes(subject.id))
        : subjects;

    const getSubjectColor = (color: string) => {
        const colorMap: { [key: string]: { bg: string; border: string } } = {
            'bg-blue-500': { bg: 'bg-indigo-50/80', border: 'border-indigo-500' },
            'bg-purple-500': { bg: 'bg-purple-50/80', border: 'border-purple-300' },
            'bg-green-500': { bg: 'bg-green-50/80', border: 'border-green-300' },
            'bg-emerald-500': { bg: 'bg-emerald-50/80', border: 'border-emerald-300' },
            'bg-amber-500': { bg: 'bg-amber-50/80', border: 'border-amber-300' },
            'bg-red-500': { bg: 'bg-red-50/80', border: 'border-red-300' }
        };
        return colorMap[color] || { bg: 'bg-gray-50/80', border: 'border-gray-300' };
    };

    const currentGrade = grades.find(g => g.id === selectedGrade);

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
                                លំហាត់សម្រាប់ {currentGrade?.nameKh}
                            </h1>
                            <p className="text-gray-600 text-sm">
                                ជ្រើសរើសវិញ្ញាបន្នដើម្បីចាប់ផ្តើមអនុវត្តន៍
                            </p>
                        </div>

                        {/* Grade Dropdown */}
                        <div className="relative">
                            <Listbox value={selectedGrade} onChange={(value) => setSelectedGrade(value)}>
                                <Listbox.Button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all">
                                    <span className="text-sm font-medium text-gray-700">{currentGrade?.nameKh}</span>
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
                                                {grade.nameKh}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </Listbox>
                        </div>
                    </div>

                    {/* Subjects and Topics */}
                    {selectedGrade && (
                        <div className="grid grid-cols-1 gap-4">
                            {filteredSubjects.map((subject) => {
                                const subjectColors = getSubjectColor(subject.color);
                                return (
                                    <div key={subject.id} className="lg:bg-white bg-gray-50 lg:rounded-2xl lg:shadow-sm lg:p-6">
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
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}