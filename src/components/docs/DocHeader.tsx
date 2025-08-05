'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    BookOpen,
    Calculator,
    Atom,
    FlaskConical,
    ChevronDown,
    ChevronRight,
    Target,
    FunctionSquare,
    Variable,
    Box
} from 'lucide-react';

interface Subject {
    id: string;
    title: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    href: string;
}

const subjects: Subject[] = [
    {
        id: 'math',
        title: 'គណិតវិទ្យា',
        icon: Calculator,
        href: '/docs/grade-12/math',
    },
    {
        id: 'physics',
        title: 'រូបវិទ្យា',
        icon: Atom,
        href: '/docs/grade-12/physics'
    },
    {
        id: 'chemistry',
        title: 'គីមីវិទ្យា',
        icon: FlaskConical,
        href: '/docs/grade-12/chemistry'
    },
    {
        id: 'biology',
        title: 'ជីវវិទ្យា',
        icon: BookOpen,
        href: '/docs/grade-12/biology'
    }
];

interface SubjectHeaderProps {
    currentSubject?: string;
    currentLesson?: string;
    currentTopic?: string;
}

export default function SubjectHeader({
    currentSubject = 'math',
    currentLesson = 'limits',
    currentTopic = 'zero-over-zero'
}: SubjectHeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Desktop Subject Header */}
            <div className="hidden md:block fixed w-full top-15 z-40 bg-white/95 backdrop-blur-md border-b border-indigo-500/10">
                <div className="max-w-full mx-auto px-5 py-2">
                    <div className="flex items-center justify-between gap-5">
                        <div className="flex items-center gap-4">
                            {subjects.map((subject) => {
                                const Icon = subject.icon;
                                const isActive = currentSubject === subject.id;
                                return (
                                    <Link
                                        key={subject.id}
                                        href={subject.href}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-2xl transition-all duration-300 font-medium text-sm ${isActive
                                            ? 'text-indigo-600 bg-indigo-50/90 border border-indigo-500/20 shadow-sm'
                                            : 'text-gray-600 bg-white/80 backdrop-blur-sm border border-indigo-500/10 hover:text-indigo-600 hover:bg-indigo-50/90'
                                            }`}
                                    >
                                        <Icon size={18} />
                                        {subject.title}
                                    </Link>
                                );
                            })}
                        </div>
                        <select className="bg-white/95 border border-indigo-500/20 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer transition-all duration-300 backdrop-blur-sm hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
                            <option value="12">ថ្នាក់ទី១២</option>
                            <option value="11">ថ្នាក់ទី១១</option>
                            <option value="10">ថ្នាក់ទី១០</option>
                            <option value="9">ថ្នាក់ទី៩</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Mobile Subject Navigation */}
            <div className="md:hidden fixed w-full top-13 z-40 bg-white/95 backdrop-blur-md border-b border-indigo-500/10">
                <div className="max-w-full mx-auto px-5 py-2">
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                            {subjects.map((subject) => {
                                const Icon = subject.icon;
                                const isActive = currentSubject === subject.id;
                                return (
                                    <Link
                                        key={subject.id}
                                        href={subject.href}
                                        className={`flex items-center gap-2 px-3 py-2 rounded-2xl transition-all duration-300 font-medium text-xs whitespace-nowrap flex-shrink-0 ${isActive
                                            ? 'text-indigo-600 bg-indigo-50/90 border border-indigo-500/20 shadow-sm'
                                            : 'text-gray-600 bg-white/80 backdrop-blur-sm border border-indigo-500/10 hover:text-indigo-600 hover:bg-indigo-50/90'
                                            }`}
                                    >
                                        <Icon size={16} />
                                        {subject.title}
                                    </Link>
                                );
                            })}
                        </div>
                        <select className="bg-white/95 border border-indigo-500/20 rounded-xl px-2 py-2 text-xs font-medium text-gray-700 cursor-pointer transition-all duration-300 backdrop-blur-sm hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
                            <option value="12">ថ្នាក់ទី១២</option>
                            <option value="11">ថ្នាក់ទី១១</option>
                            <option value="10">ថ្នាក់ទី១០</option>
                            <option value="9">ថ្នាក់ទី៩</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Mobile Content Navigation */}
            <div className="md:hidden fixed w-full top-26 z-30 bg-white/95 backdrop-blur-md border-b border-indigo-500/10">
                <div className="max-w-full mx-auto px-5 py-2">
                    <div className="flex items-center justify-between gap-3">
                        <select className="bg-white/95 border border-indigo-500/20 rounded-xl px-2 py-2 text-xs font-medium text-gray-700 cursor-pointer transition-all duration-300 backdrop-blur-sm hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
                            <option value="limits">លីមីត</option>
                            <option value="derivatives">ដេរីវេ</option>
                            <option value="integration">អាំងតេក្រាល</option>
                            <option value="vectors">វ៉ិចទ័រ</option>
                        </select>
                        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                            {[
                                { id: 'definition', title: 'និយមន័យលីមីត' },
                                { id: 'simple', title: 'លីមីតសាមញ្ញ' },
                                { id: 'zero-over-zero', title: 'លីមីត 0/0' },
                                { id: 'infinity', title: 'លីមីតនៅអនន្ត' },
                                { id: 'one-sided', title: 'លីមីតម្ខាង' },
                                { id: 'rules', title: 'ច្បាប់លីមីត' }
                            ].map((topic) => {
                                const isActive = currentTopic === topic.id;
                                return (
                                    <Link
                                        key={topic.id}
                                        href={`/docs/grade-12/math/limits/${topic.id}`}
                                        className={`flex items-center gap-2 px-3 py-2 rounded-2xl transition-all duration-300 font-medium text-xs whitespace-nowrap flex-shrink-0 ${isActive
                                            ? 'text-indigo-600 bg-indigo-50/90 border border-indigo-500/20 shadow-sm'
                                            : 'text-gray-600 bg-white/80 backdrop-blur-sm border border-indigo-500/10 hover:text-indigo-600 hover:bg-indigo-50/90'
                                            }`}
                                    >
                                        {topic.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}