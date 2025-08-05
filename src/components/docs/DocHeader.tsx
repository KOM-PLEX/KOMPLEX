'use client';

import { useState } from 'react';
import Link from 'next/link';
import { curriculum } from '@/app/curriculum/curriculum';

interface DocHeaderProps {
    currentGrade?: string;
    currentSubject?: string;
    currentLesson?: string;
    currentTopic?: string;
}

export default function DocHeader({
    currentGrade = 'grade-12',
    currentSubject = 'math',
    currentLesson = 'limits',
    currentTopic = 'zero-over-zero'
}: DocHeaderProps) {

    // Find the current grade and subject data
    const gradeData = curriculum.find(g => g.grade === currentGrade);
    if (!gradeData) return null;

    const subjects = gradeData.content;
    const grades = curriculum.map(g => g.gradeKhmer);

    return (
        <>
            {/* Desktop Subject Header */}
            <div className="hidden md:block fixed w-full top-14.5 z-40 bg-white/95 backdrop-blur-md border-b border-indigo-500/10">
                <div className="max-w-full mx-auto px-5 py-2">
                    <div className="flex items-center justify-between gap-5">
                        <div className="flex items-center gap-4">
                            {subjects.map((subject) => {
                                const Icon = subject.icon;
                                const isActive = currentSubject === subject.subject;
                                return (
                                    <Link
                                        key={subject.subject}
                                        href={`/docs/${currentGrade}/${subject.subject}/${subject.lessons[0].lesson}/${subject.lessons[0].topics[0].englishTitle}`}
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
                            {grades.map(grade => (
                                <option key={grade} value={grade}>
                                    {grade}
                                </option>
                            ))}
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
                                const isActive = currentSubject === subject.subject;
                                return (
                                    <Link
                                        key={subject.subject}
                                        href={`/docs/${currentGrade}/${subject.subject}`}
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
                            {grades.map(grade => (
                                <option key={grade} value={grade}>
                                    {grade}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Mobile Content Navigation */}
            <div className="md:hidden fixed w-full top-26 z-30 bg-white/95 backdrop-blur-md border-b border-indigo-500/10">
                <div className="max-w-full mx-auto px-5 py-2">
                    <div className="flex items-center justify-between gap-3">
                        <select className="bg-white/95 border border-indigo-500/20 rounded-xl px-2 py-2 text-xs font-medium text-gray-700 cursor-pointer transition-all duration-300 backdrop-blur-sm hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
                            {subjects.find(s => s.subject === currentSubject)?.lessons.map(lesson => (
                                <option key={lesson.lesson} value={lesson.lesson}>
                                    {lesson.title}
                                </option>
                            ))}
                        </select>
                        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                            {subjects.find(s => s.subject === currentSubject)?.lessons.find(l => l.lesson === currentLesson)?.topics.map((topic) => {
                                const isActive = currentTopic === topic.englishTitle;
                                return (
                                    <Link
                                        key={topic.englishTitle}
                                        href={`/docs/${currentGrade}/${currentSubject}/${currentLesson}/${topic.englishTitle}`}
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