"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Clock, Target, Calculator, Brain, Zap, Star, Trophy, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import ExerciseBox from "@/components/pages/docs/common/box/ExerciseBox";
import { ExerciseQuestion } from "@/types/topic";
import PracticeInfo from "@/components/pages/practice/PracticeInfo";
import PracticeResult from "@/components/pages/practice/PracticeResult";

interface ExamSection {
    id: string;
    title: string;
    titleKh: string;
    description: string;
    descriptionKh: string;
    icon: React.ReactNode;
    questions: ExerciseQuestion[];
    timeLimit: number; // in minutes
}

export default function LessonPage() {
    const params = useParams();
    const { subject, lesson } = params;

    const [currentSection, setCurrentSection] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [isExamStarted, setIsExamStarted] = useState(false);
    const [examCompleted, setExamCompleted] = useState(false);
    const [answers, setAnswers] = useState<{ [sectionId: string]: { [questionId: string]: number } }>({});
    const [sectionResults, setSectionResults] = useState<{ [sectionId: string]: { correct: number; total: number } }>({});

    // Complex Numbers Exam Data
    const examSections: ExamSection[] = [
        {
            id: "complex-definition",
            title: "Complex Definition",
            titleKh: "និយមន័យកំុផ្លិច",
            description: "Understanding the fundamental concepts and properties of complex numbers",
            descriptionKh: "ការយល់ដឹងអំពីគោលគំនិតមូលដ្ឋាន និងលក្ខណៈសម្បត្តិនៃចំនួនកំុផ្លិច",
            icon: <Target className="w-6 h-6" />,
            timeLimit: 15,
            questions: [
                {
                    id: "def-1",
                    question: "តើចំនួនកំុផ្លិចជាអ្វី?",
                    options: ["ចំនួនពិត", "ចំនួនអសនិទាន", "ចំនួនដែលមានទម្រង់ a + bi", "ចំនួនគត់"],
                    correctAnswer: 2
                },
                {
                    id: "def-2",
                    question: "តើ i² ស្មើនឹងអ្វី?",
                    options: ["-1", "1", "i", "0"],
                    correctAnswer: 0
                },
                {
                    id: "def-3",
                    question: "តើចំនួនកំុផ្លិច 3 + 4i មានផ្នែកពិតស្មើនឹងអ្វី?",
                    options: ["3", "4", "4i", "3 + 4i"],
                    correctAnswer: 0
                }
            ]
        },
        {
            id: "complex-operations",
            title: "Complex Operations",
            titleKh: "ប្រមាណវិធីលើចំនួនកំុផ្លិច",
            description: "Performing arithmetic operations with complex numbers",
            descriptionKh: "ការអនុវត្តប្រមាណវិធីនព្វន្តលើចំនួនកំុផ្លិច",
            icon: <Calculator className="w-6 h-6" />,
            timeLimit: 20,
            questions: [
                {
                    id: "op-1",
                    question: "គណនា (3 + 4i) + (2 - i)",
                    options: ["5 + 3i", "5 + 5i", "1 + 5i", "5 + 4i"],
                    correctAnswer: 0
                },
                {
                    id: "op-2",
                    question: "គណនា (2 + 3i) × (1 - 2i)",
                    options: ["8 - i", "8 + i", "4 - i", "4 + i"],
                    correctAnswer: 0
                },
                {
                    id: "op-3",
                    question: "គណនា (4 + 3i) ÷ (2 + i)",
                    options: ["2 + i", "2 - i", "1 + 2i", "1 - 2i"],
                    correctAnswer: 0
                }
            ]
        },
        {
            id: "complex-trigonometric",
            title: "Trigonometric Form",
            titleKh: "ទម្រង់ត្រីកោណមាត្រ",
            description: "Converting complex numbers to and from trigonometric form",
            descriptionKh: "ការបំប្លែងចំនួនកំុផ្លិចទៅជាទម្រង់ត្រីកោណមាត្រ និងច្រាសមកវិញ",
            icon: <Brain className="w-6 h-6" />,
            timeLimit: 18,
            questions: [
                {
                    id: "trig-1",
                    question: "តើចំនួនកំុផ្លិច 1 + i មានទម្រង់ត្រីកោណមាត្រយ៉ាងណា?",
                    options: ["√2(cos π/4 + i sin π/4)", "√2(cos π/2 + i sin π/2)", "2(cos π/4 + i sin π/4)", "2(cos π/2 + i sin π/2)"],
                    correctAnswer: 0
                },
                {
                    id: "trig-2",
                    question: "តើចំនួនកំុផ្លិច 2(cos π/3 + i sin π/3) មានទម្រង់ពិជគណិតយ៉ាងណា?",
                    options: ["1 + √3i", "1 - √3i", "√3 + i", "√3 - i"],
                    correctAnswer: 0
                },
                {
                    id: "trig-3",
                    question: "តើចំនួនកំុផ្លិច -1 មានទម្រង់ត្រីកោណមាត្រយ៉ាងណា?",
                    options: ["cos π + i sin π", "cos 0 + i sin 0", "cos π/2 + i sin π/2", "cos -π + i sin -π"],
                    correctAnswer: 0
                }
            ]
        },
        {
            id: "complex-modulus",
            title: "Modulus & Argument",
            titleKh: "ម៉ូឌុល និងអាគុយម៉ង់",
            description: "Understanding modulus, argument, and their properties",
            descriptionKh: "ការយល់ដឹងអំពីម៉ូឌុល អាគុយម៉ង់ និងលក្ខណៈសម្បត្តិរបស់វា",
            icon: <Zap className="w-6 h-6" />,
            timeLimit: 17,
            questions: [
                {
                    id: "mod-1",
                    question: "តើម៉ូឌុលនៃចំនួនកំុផ្លិច 3 + 4i ស្មើនឹងអ្វី?",
                    options: ["5", "7", "12", "25"],
                    correctAnswer: 0
                },
                {
                    id: "mod-2",
                    question: "តើអាគុយម៉ង់នៃចំនួនកំុផ្លិច 1 + i ស្មើនឹងអ្វី?",
                    options: ["π/4", "π/2", "π", "3π/4"],
                    correctAnswer: 0
                },
                {
                    id: "mod-3",
                    question: "តើម៉ូឌុលនៃចំនួនកំុផ្លិច -2 - 3i ស្មើនឹងអ្វី?",
                    options: ["√13", "13", "5", "√5"],
                    correctAnswer: 0
                }
            ]
        },
        {
            id: "complex-practice",
            title: "Advanced Practice",
            titleKh: "លំហាត់អនុវត្តកម្រិតខ្ពស់",
            description: "Complex problem solving and applications",
            descriptionKh: "ការដោះស្រាយបញ្ហាស្មុគស្មាញ និងការអនុវត្ត",
            icon: <Star className="w-6 h-6" />,
            timeLimit: 25,
            questions: [
                {
                    id: "adv-1",
                    question: "ដោះស្រាយសមីការ z² + 4 = 0",
                    options: ["z = ±2i", "z = ±2", "z = ±4i", "z = ±4"],
                    correctAnswer: 0
                },
                {
                    id: "adv-2",
                    question: "គណនា (1 + i)¹⁰",
                    options: ["32i", "-32i", "32", "-32"],
                    correctAnswer: 0
                },
                {
                    id: "adv-3",
                    question: "តើចំនួនកំុផ្លិចដែលមានម៉ូឌុល 2 និងអាគុយម៉ង់ π/6 ជាអ្វី?",
                    options: ["√3 + i", "1 + √3i", "2 + 2i", "2√3 + 2i"],
                    correctAnswer: 0
                }
            ]
        }
    ];

    const totalTime = examSections.reduce((sum, section) => sum + section.timeLimit, 0);

    useEffect(() => {
        if (isExamStarted && !examCompleted) {
            const timer = setInterval(() => {
                setTimeRemaining(prev => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        setExamCompleted(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [isExamStarted, examCompleted]);

    const startExam = () => {
        setIsExamStarted(true);
        setTimeRemaining(totalTime * 60); // Convert to seconds
    };

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    };

    const handleAnswerSubmit = (sectionId: string, questionId: string, answerIndex: number) => {
        setAnswers(prev => ({
            ...prev,
            [sectionId]: {
                ...prev[sectionId],
                [questionId]: answerIndex
            }
        }));
    };

    const calculateSectionScore = (section: ExamSection) => {
        const sectionAnswers = answers[section.id] || {};
        let correct = 0;
        const total = section.questions.length;

        section.questions.forEach(question => {
            if (sectionAnswers[question.id] === question.correctAnswer) {
                correct++;
            }
        });

        return { correct, total };
    };

    const getOverallScore = () => {
        let totalCorrect = 0;
        let totalQuestions = 0;

        examSections.forEach(section => {
            const score = calculateSectionScore(section);
            totalCorrect += score.correct;
            totalQuestions += score.total;
        });

        return { correct: totalCorrect, total: totalQuestions };
    };

    if (!isExamStarted) {
        return (
            <div className="min-h-screen bg-gray-50 flex justify-center items-center pt-14 ">
                <div className="max-w-7xl m-auto px-4 py-8 w-full">

                    <PracticeInfo
                        examTitle="វិញ្ញាសាចំនួនកំុផ្លិច"
                        examSections={examSections}
                        totalTime={totalTime}
                        onStartExam={startExam}
                    />
                </div>
            </div>
        );
    }

    if (examCompleted) {
        const overallScore = getOverallScore();
        const percentage = Math.round((overallScore.correct / overallScore.total) * 100);

        return (
            <div className="min-h-screen bg-gray-50 flex justify-center items-center pt-14 ">
                <div className="max-w-7xl m-auto px-4 py-8 w-full">
                    <PracticeResult
                        examSections={examSections}
                        overallScore={overallScore}
                        sectionScores={Object.fromEntries(
                            examSections.map(section => [
                                section.id,
                                calculateSectionScore(section)
                            ])
                        )}
                        onRetakeExam={() => {
                            setIsExamStarted(false);
                            setExamCompleted(false);
                            setAnswers({});
                            setCurrentSection(0);
                        }}
                    />
                </div>
            </div>
        );
    }

    const currentSectionData = examSections[currentSection];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-8 pt-20">
                {/* Header with Timer */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">

                            <div className="text-left">
                                <h1 className="text-2xl font-bold text-gray-900">
                                    វិញ្ញាសាចំនួនកំុផ្លិច
                                </h1>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-center">
                                <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                                    <Clock size={20} className="text-indigo-600" />
                                    <span>{formatTime(timeRemaining)}</span>
                                </div>
                                <p className="text-sm text-gray-500">ពេលវេលានៅសល់</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Navigation */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">

                    <div className="flex gap-2 overflow-x-auto scrollbar-hide ">
                        {examSections.map((section, index) => (
                            <button
                                key={section.id}
                                onClick={() => setCurrentSection(index)}
                                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${index === currentSection
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {section.titleKh}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Current Section */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {currentSectionData.titleKh}
                        </h3>
                    </div>

                    <ExerciseBox
                        questions={currentSectionData.questions}
                    />
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => setCurrentSection(prev => Math.max(0, prev - 1))}
                        disabled={currentSection === 0}
                        className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                    >
                        <ArrowLeft size={20} />
                        ផ្នែកមុន
                    </button>

                    {currentSection === examSections.length - 1 ? (
                        <button
                            onClick={() => setExamCompleted(true)}
                            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-colors"
                        >
                            បញ្ចប់វិញ្ញាសា
                        </button>
                    ) : (
                        <button
                            onClick={() => setCurrentSection(prev => prev + 1)}
                            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                        >
                            ផ្នែកបន្ទាប់
                            <ArrowLeft size={20} className="rotate-180" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
