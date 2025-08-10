'use client';

import React from 'react';
import { ChevronDownIcon, Download, FileText, BookOpen, Bot } from 'lucide-react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';


export interface ExamQuestionBoxProps {
    // PDF URLs
    questionPdfUrl: string;

    // Flexible answer - either PDF URL or structured data
    answerPdfUrl: string;
}

export default function ExamQuestionBox({
    questionPdfUrl,
    answerPdfUrl,
}: ExamQuestionBoxProps) {

    const handleDownload = (type: 'questions' | 'answers') => {
        const url = type === 'questions' ? questionPdfUrl : (answerPdfUrl || '');
        if (!url) return;

        const link = document.createElement('a');
        link.href = url;
        link.download = type === 'questions' ? 'exam-questions.pdf' : 'exam-with-answers.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const hasAnswerContent = answerPdfUrl;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
            {/* Questions PDF Box */}
            <div className="bg-indigo-50/80 border border-indigo-600 p-6 rounded-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                    <FileText size={20} className="text-indigo-600" />
                    <h3 className="text-xl font-bold text-gray-900">វិញ្ញាសា</h3>
                </div>

                <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <iframe
                        src={`${questionPdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                        className="w-full h-[800px] aspect-[9/16] border-0"
                        title="Question PDF"
                        onLoad={() => { }}
                    />


                </div>
            </div>

            {/* Answers Box - Flexible Content */}
            <div className="bg-indigo-50/80 border border-indigo-600 p-6 rounded-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                    <BookOpen size={20} className="text-indigo-600" />
                    <h3 className="text-xl font-bold text-gray-900">ដំណោះស្រាយ</h3>
                </div>

                {answerPdfUrl ? (
                    // PDF Answer with iframe
                    <div className="bg-white rounded-lg p-2 border border-gray-200">
                        <iframe
                            src={`${answerPdfUrl}#toolbar=1&navpanes=0&scrollbar=1&zoom=30&view=FitH`}
                            className="w-full h-[800px] aspect-[9/16] border-0"
                            title="Answer PDF"
                            onLoad={() => { }}
                        />
                    </div>
                ) : (
                    // No answer content
                    <div className="text-center text-gray-500 py-8 bg-white rounded-lg border border-gray-200">
                        គ្មានចម្លើយ
                    </div>
                )}
            </div>

            {/* Action Buttons - Full Width Below */}
            <div className="lg:col-span-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Download Dropdown */}
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200">
                            <Download size={18} />
                            ទាញយក
                            <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            onClick={() => handleDownload('questions')}
                                            className={`${active ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700'
                                                } group flex w-full items-center px-4 py-3 text-sm transition-colors duration-200`}
                                        >
                                            <FileText size={16} className="mr-3 text-indigo-600" />
                                            ទាញយកសំណួរតែប៉ុណ្ណោះ
                                        </button>
                                    )}
                                </Menu.Item>

                                {hasAnswerContent && (
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={() => handleDownload('answers')}
                                                className={`${active ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700'
                                                    } group flex w-full items-center px-4 py-3 text-sm transition-colors duration-200`}
                                            >
                                                <BookOpen size={16} className="mr-3 text-indigo-600" />
                                                ទាញយកជាមួយចម្លើយ
                                            </button>
                                        )}
                                    </Menu.Item>
                                )}
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>

                {/* AI Follow-up Button */}
                <button
                    onClick={() => { }}
                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/10 border border-indigo-500 px-4 py-3 text-sm font-semibold text-indigo-500 shadow-sm hover:bg-indigo-500/10 transition-all duration-200"
                >
                    <Bot size={18} />
                    ផ្ទៀងផ្ទាត់ជាមួយ AI
                </button>
            </div>
        </div>
    );
}
