'use client';

import React from 'react';
import {
    Home,
    Play,
    Clock,
    TrendingUp,
    History,
    Calculator,
    Atom,
    Globe,
    Lightbulb,
    Target,
    BookOpen
} from 'lucide-react';

interface SidebarProps {
    selectedSubject: string;
    selectedDifficulty: string;
    onSubjectChange: (subject: string) => void;
    onDifficultyChange: (difficulty: string) => void;
    sidebarOpen: boolean;
    onSidebarToggle: () => void;
}

const subjects = [
    { id: 'mathematics', name: 'គណិតវិទ្យា', icon: Calculator, color: 'text-blue-600' },
    { id: 'chemistry', name: 'គីមីវិទ្យា', icon: Atom, color: 'text-green-600' },
    { id: 'physics', name: 'រូបវិទ្យា', icon: Target, color: 'text-purple-600' },
    { id: 'biology', name: 'ជីវវិទ្យា', icon: Lightbulb, color: 'text-emerald-600' },
    { id: 'khmer', name: 'អក្សរសាស្ត្រខ្មែរ', icon: BookOpen, color: 'text-red-600' },
    { id: 'history', name: 'ប្រវត្តិវិទ្យា', icon: Globe, color: 'text-amber-600' }
];

export default function Sidebar({
    selectedSubject,
    selectedDifficulty,
    onSubjectChange,
    onDifficultyChange,
    sidebarOpen,
    onSidebarToggle
}: SidebarProps) {
    return (
        <>
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                    onClick={onSidebarToggle}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed lg:static top-14 left-0 z-50 w-64 bg-white shadow-lg overflow-y-auto scrollbar-hide border-r border-gray-200 transform transition-transform duration-300 ease-in-out max-h-[calc(100vh-3.5rem)] ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                }`}>
                {/* Navigation */}
                <nav className="p-4 space-y-2">
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                        <Home size={20} className="text-indigo-600" />
                        <span>ទំព័រដើម</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                        <Play size={20} />
                        <span>វីដេអូខ្លី</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                        <TrendingUp size={20} />
                        <span>ពេញនិយម</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                        <Clock size={20} />
                        <span>ថ្មីៗ</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                        <History size={20} />
                        <span>ប្រវត្តិ</span>
                    </a>
                </nav>

                {/* Subject Filter */}
                <div className="p-4 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">មុខវិជ្ជា</h3>
                    <div className="space-y-2">
                        <button
                            onClick={() => onSubjectChange('all')}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedSubject === 'all'
                                ? 'bg-indigo-100 text-indigo-700'
                                : 'text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            ទាំងអស់
                        </button>
                        {subjects.map((subject) => {
                            const Icon = subject.icon;
                            return (
                                <button
                                    key={subject.id}
                                    onClick={() => onSubjectChange(subject.id)}
                                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${selectedSubject === subject.id
                                        ? 'bg-indigo-100 text-indigo-700'
                                        : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    <Icon size={16} className={subject.color} />
                                    {subject.name}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
