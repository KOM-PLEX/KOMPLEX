'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDown, Check } from 'lucide-react';
import { curriculum } from '@/curriculum/curriculum';

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
    const grades = curriculum.map(g => ({ value: g.grade, label: g.gradeKhmer }));

    // Get current selections
    const currentGradeData = grades.find(g => g.value === currentGrade);
    const currentSubjectData = subjects.find(s => s.subject === currentSubject);
    const currentLessonData = currentSubjectData?.lessons.find(l => l.lesson === currentLesson);

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

                        {/* Grade Dropdown */}
                        <Listbox value={currentGradeData} onChange={(grade) => {
                            if (grade) {
                                window.location.href = `/docs/${grade.value}/${subjects[0].subject}/${subjects[0].lessons[0].lesson}/${subjects[0].lessons[0].topics[0].englishTitle}`;
                            }
                        }}>
                            <div className="relative">
                                <Listbox.Button className="bg-white/95 border border-indigo-500/20 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer transition-all duration-300 backdrop-blur-sm hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 flex items-center justify-between  min-w-[120px]">
                                    <span>{currentGradeData?.label}</span>
                                    <ChevronDown size={16} className="text-gray-500" />
                                </Listbox.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Listbox.Options className="absolute right-0 mt-2 w-48 bg-white rounded-xl border border-indigo-500/20 shadow-lg backdrop-blur-sm z-50 max-h-60 overflow-auto">
                                        {grades.map((grade) => (
                                            <Listbox.Option
                                                key={grade.value}
                                                value={grade}
                                                className={({ active }) =>
                                                    `relative cursor-pointer select-none py-3 px-4 text-sm ${active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
                                                    }`
                                                }
                                            >
                                                {({ selected }) => (
                                                    <div className="flex items-center justify-between">
                                                        <span>{grade.label}</span>
                                                        {selected && <Check size={16} className="text-indigo-600" />}
                                                    </div>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
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
                                        href={`/docs/${currentGrade}/${subject.subject}/${subject.lessons[0].lesson}/${subject.lessons[0].topics[0].englishTitle}`}
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

                        {/* Mobile Grade Dropdown */}
                        <Listbox value={currentGradeData} onChange={(grade) => {
                            if (grade) {
                                window.location.href = `/docs/${grade.value}/${subjects[0].subject}/${subjects[0].lessons[0].lesson}/${subjects[0].lessons[0].topics[0].englishTitle}`;
                            }
                        }}>
                            <div className="relative">
                                <Listbox.Button className="bg-white/95 border border-indigo-500/20 rounded-xl px-2 py-2 text-xs font-medium text-gray-700 cursor-pointer transition-all duration-300 backdrop-blur-sm hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 flex items-center justify-between  max-w-[80px] min-w-[60px]">
                                    <span className="truncate">{currentGradeData?.label}</span>
                                    <ChevronDown size={14} className="text-gray-500 flex-shrink-0" />
                                </Listbox.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Listbox.Options className="absolute right-0 mt-2 w-40 bg-white rounded-xl border border-indigo-500/20 shadow-lg backdrop-blur-sm z-50 max-h-60 overflow-auto scrollbar-hide p-1.5">
                                        {grades.map((grade) => (
                                            <Listbox.Option
                                                key={grade.value}
                                                value={grade}
                                                className={({ active }) =>
                                                    `relative cursor-pointer select-none py-2 px-2 text-xs rounded-xl ${active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
                                                    }`
                                                }
                                            >
                                                {({ selected }) => (
                                                    <div className="flex items-center justify-between">
                                                        <span>{grade.label}</span>
                                                        {selected && <Check size={14} className="text-indigo-600" />}
                                                    </div>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>
                </div>
            </div>

            {/* Mobile Content Navigation */}
            <div className="md:hidden fixed w-full top-25.5 z-30 bg-white/95 backdrop-blur-md border-b border-indigo-500/10">
                <div className="max-w-full mx-auto px-5 py-2">
                    <div className="flex items-center justify-start gap-3">
                        {/* Mobile Lesson Dropdown */}
                        <Listbox value={currentLessonData} onChange={(lesson) => {
                            if (lesson) {
                                window.location.href = `/docs/${currentGrade}/${currentSubject}/${lesson.lesson}/${lesson.topics[0].englishTitle}`;
                            }
                        }}>
                            <div className="relative">
                                <Listbox.Button className="bg-white/95 border border-indigo-500/20 rounded-xl px-2 py-2 text-xs font-medium text-gray-700 cursor-pointer transition-all duration-300 backdrop-blur-sm hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 flex items-center justify-between  max-w-[80px] min-w-[60px]">
                                    <span className="truncate">{currentLessonData?.title}</span>
                                    <ChevronDown size={14} className="text-gray-500 flex-shrink-0" />
                                </Listbox.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Listbox.Options className="absolute left-0 mt-2 w-48 bg-white rounded-xl border border-indigo-500/20 shadow-lg backdrop-blur-sm z-50 max-h-60 overflow-auto scrollbar-hide p-1.5">
                                        {subjects.find(s => s.subject === currentSubject)?.lessons.map(lesson => (
                                            <Listbox.Option
                                                key={lesson.lesson}
                                                value={lesson}
                                                className={({ active }) =>
                                                    `relative cursor-pointer select-none py-2 px-2 text-xs rounded-xl ${active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
                                                    }`
                                                }
                                            >
                                                {({ selected }) => (
                                                    <div className="flex items-center justify-between">
                                                        <span>{lesson.title}</span>
                                                        {selected && <Check size={14} className="text-indigo-600" />}
                                                    </div>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>

                        {/* Mobile Topics */}
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