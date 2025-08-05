'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    BookOpen,
    Calculator,
    Atom,
    FlaskConical,
    Leaf,
    ChevronDown,
    ChevronRight,
    FileText,
    Target,
    Infinity,
    ArrowRight,
    ArrowLeft,
    FunctionSquare,
    Variable,
    Box
} from 'lucide-react';

interface Topic {
    id: string;
    title: string;
    href: string;
}

interface Lesson {
    id: string;
    title: string;
    topics: Topic[];
}

interface SidebarProps {
    lessons?: Record<string, Topic[]>;
    currentLesson?: string;
    currentTopic?: string;
}

// Mock lessons data
const mockLessons: Record<string, Topic[]> = {
    'limits': [
        { id: 'definition', title: 'និយមន័យលីមីត', href: '/docs/grade-12/math/limits/definition' },
        { id: 'simple', title: 'លីមីតសាមញ្ញ', href: '/docs/grade-12/math/limits/simple' },
        { id: 'zero-over-zero', title: 'លីមីត 0/0', href: '/docs/grade-12/math/limits/zero-over-zero' },
        { id: 'infinity', title: 'លីមីតនៅអនន្ត', href: '/docs/grade-12/math/limits/infinity' },
        { id: 'one-sided', title: 'លីមីតម្ខាង', href: '/docs/grade-12/math/limits/one-sided' },
        { id: 'rules', title: 'ច្បាប់លីមីត', href: '/docs/grade-12/math/limits/rules' }
    ],
    'derivatives': [
        { id: 'definition', title: 'និយមន័យដេរីវេ', href: '/docs/grade-12/math/derivatives/definition' },
        { id: 'rules', title: 'ច្បាប់ដេរីវេ', href: '/docs/grade-12/math/derivatives/rules' },
        { id: 'functions', title: 'ដេរីវេអនុគមន៍', href: '/docs/grade-12/math/derivatives/functions' },
        { id: 'implicit', title: 'ដេរីវេអ៊ីមភ្លិច', href: '/docs/grade-12/math/derivatives/implicit' }
    ],
    'integration': [
        { id: 'definition', title: 'និយមន័យអាំងតេក្រាល', href: '/docs/grade-12/math/integration/definition' },
        { id: 'indefinite', title: 'អាំងតេក្រាលមិនកំណត់', href: '/docs/grade-12/math/integration/indefinite' },
        { id: 'definite', title: 'អាំងតេក្រាលកំណត់', href: '/docs/grade-12/math/integration/definite' },
        { id: 'methods', title: 'វិធីសាស្ត្រអាំងតេក្រាល', href: '/docs/grade-12/math/integration/methods' }
    ],
    'vectors': [
        { id: 'definition', title: 'និយមន័យវ៉ិចទ័រ', href: '/docs/grade-12/math/vectors/definition' },
        { id: 'operations', title: 'ប្រតិកម្មវ៉ិចទ័រ', href: '/docs/grade-12/math/vectors/operations' },
        { id: 'products', title: 'ផលគុណវ៉ិចទ័រ', href: '/docs/grade-12/math/vectors/products' },
        { id: 'coordinates', title: 'អ័ក្សកូអរដែន', href: '/docs/grade-12/math/vectors/coordinates' }
    ]
};

const lessonIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    'limits': Target,
    'derivatives': FunctionSquare,
    'integration': Variable,
    'vectors': Box
};

export default function Sidebar({
    lessons = mockLessons,
    currentTopic = 'zero-over-zero'
}: SidebarProps) {
    const [expandedLessons, setExpandedLessons] = useState<Record<string, boolean>>(() => {
        // Initialize all lessons as expanded
        return Object.keys(lessons).reduce((acc, lessonId) => {
            acc[lessonId] = true;
            return acc;
        }, {} as Record<string, boolean>);
    });

    const toggleLesson = (lessonId: string) => {
        setExpandedLessons(prev => ({
            ...prev,
            [lessonId]: !prev[lessonId]
        }));
    };

    return (
        <div className="hidden lg:block w-70 bg-white/95 backdrop-blur-md border-r border-indigo-500/10 overflow-y-auto fixed h-[calc(100vh-56px)] top-29  z-40 shadow-lg scrollbar-hide">
            {/* Hide scrollbar */}
            <div className="">
                <div className="p-4 ">
                    <div className="space-y-4 ">
                        {Object.entries(lessons).map(([lessonId, topics]) => {
                            const Icon = lessonIcons[lessonId] || BookOpen;
                            const isExpanded = expandedLessons[lessonId];

                            return (
                                <div key={lessonId} className="space-y-2">
                                    {/* Lesson Header */}
                                    <button
                                        onClick={() => toggleLesson(lessonId)}
                                        className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 
                                            bg-indigo-50 text-indigo-600 border-l-4 border-indigo-600 shadow-lg shadow-indigo-500/15
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon size={20} className={'text-indigo-600'} />
                                            <span className="font-semibold text-base">
                                                {lessonId === 'limits' && 'លីមីត'}
                                                {lessonId === 'derivatives' && 'ដេរីវេ'}
                                                {lessonId === 'integration' && 'អាំងតេក្រាល'}
                                                {lessonId === 'vectors' && 'វ៉ិចទ័រ'}
                                            </span>
                                        </div>
                                        {isExpanded ? (
                                            <ChevronDown size={18} className='text-indigo-600' />
                                        ) : (
                                            <ChevronRight size={18} className='text-indigo-600' />
                                        )}
                                    </button>

                                    {/* Topics */}
                                    {isExpanded && (
                                        <div className="ml-4 space-y-1">
                                            {topics.map((topic) => {
                                                const isTopicActive = currentTopic === topic.id;
                                                return (
                                                    <Link
                                                        key={topic.id}
                                                        href={topic.href}
                                                        className={`block px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium hover:translate-x-1 ${isTopicActive
                                                            ? 'text-indigo-600 bg-indigo-50/80 font-semibold'
                                                            : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/60'
                                                            }`}
                                                    >
                                                        {topic.title}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
