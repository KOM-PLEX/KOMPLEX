"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, BookAIcon } from "lucide-react";
import { Question } from "@/types/exercise";

export interface ExerciseBoxProps {
    questions: Question[];
    onAnswerSubmit?: (questionId: number, choiceId: number) => void;
}

export default function ExerciseBox({ questions, onAnswerSubmit }: ExerciseBoxProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
    const [isAnswering, setIsAnswering] = useState(false);
    const [questionAnswers, setQuestionAnswers] = useState<Map<number, number>>(new Map());

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswerSelect = (choiceId: number) => {
        setSelectedAnswer(choiceId);
        setIsAnswering(true);

        // Store the answer for this question
        setQuestionAnswers(prev => new Map(prev).set(currentQuestion.id, choiceId));

        // Mark question as answered
        setAnsweredQuestions(prev => new Set([...prev, currentQuestion.id]));

        // Call parent callback if provided
        if (onAnswerSubmit) {
            onAnswerSubmit(currentQuestion.id, choiceId);
        }

        // Auto-advance to next question after a better delay
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                nextQuestion();
            }
            setIsAnswering(false);
        }, 1500); // 1.5s delay for better visual feedback
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setIsAnswering(false);
        }
    };

    const prevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedAnswer(null);
            setIsAnswering(false);
        }
    };

    // Note: goToQuestion removed since we no longer have question dots

    // Reset selected answer when question changes
    useEffect(() => {
        setSelectedAnswer(null);
        setIsAnswering(false);
    }, [currentQuestionIndex]);

    return (
        <div className="bg-white/95 backdrop-blur-sm border-2 border-indigo-500/20 rounded-2xl p-6 my-6 shadow-lg shadow-indigo-500/15">

            {/* Question */}
            <div className={`mb-6 transition-opacity duration-300 ${isAnswering ? 'opacity-50' : 'opacity-100'}`}>
                <h4 className="text-gray-800 font-semibold text-lg mb-4">{currentQuestion.title}</h4>

                {/* Image if available */}
                {currentQuestion.imageUrl && (
                    <div className="mb-4">
                        <img
                            src={currentQuestion.imageUrl}
                            alt="Question"
                            className="max-w-full h-auto rounded-lg border border-gray-200"
                        />
                    </div>
                )}

                {/* Choices */}
                <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
                    {currentQuestion.choices.map((choice, index) => {
                        const isSelected = selectedAnswer === choice.id;
                        const isAnswered = answeredQuestions.has(currentQuestion.id);
                        const wasPreviouslySelected = questionAnswers.get(currentQuestion.id) === choice.id;

                        return (
                            <button
                                key={choice.id}
                                onClick={() => handleAnswerSelect(choice.id)}
                                disabled={isAnswered}
                                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-500 font-medium ${isSelected && isAnswering
                                    ? "border-indigo-600 bg-indigo-200 text-indigo-800 shadow-lg scale-101 ring-2 ring-indigo-200"
                                    : isSelected && !isAnswered
                                        ? "border-indigo-500 bg-indigo-50/80 text-indigo-700"
                                        : wasPreviouslySelected
                                            ? "border-indigo-400 bg-indigo-50/60 text-indigo-600 cursor-not-allowed"
                                            : !isAnswered
                                                ? "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/40 text-gray-700"
                                                : "border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-semibold">
                                        {String.fromCharCode(0x1780 + index)} {/* Khmer letters: ក, ខ, គ, ឃ */}
                                    </span>
                                    <span>{choice.text}</span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Navigation */}
            <div className={`flex items-center justify-center gap-10 mt-6 pt-4 border-t border-indigo-500/20 transition-opacity duration-300 ${isAnswering ? 'opacity-50' : 'opacity-100'}`}>
                <button
                    onClick={prevQuestion}
                    disabled={currentQuestionIndex === 0}
                    className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-50 disabled:text-gray-400 text-white px-4 py-2 rounded-xl transition-all duration-300"
                >
                    <ChevronLeft size={18} />
                </button>

                <div className="text-gray-600 text-sm">
                    សំណួរ {currentQuestionIndex + 1} នៃ {questions.length}
                </div>

                <button
                    onClick={nextQuestion}
                    disabled={currentQuestionIndex === questions.length - 1}
                    className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-50 disabled:text-gray-400 text-white px-4 py-2 rounded-xl transition-all duration-300"
                >
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
}
