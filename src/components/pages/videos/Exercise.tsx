'use client';

import React, { useState } from 'react';
import { BookOpen, CheckCircle, XCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import MarkDownRenderer from '@/components/helper/MarkDownRenderer';
import type { VideoExercise } from '@/types/content/videos';

interface ExerciseProps {
    exercises?: VideoExercise[];
}

interface UserAnswer {
    questionId: number;
    selectedChoiceId: number;
}

export default function Exercise({ exercises: exercisesProp }: ExerciseProps) {
    const exercises = exercisesProp ?? [];
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

    // Handle answer selection
    const handleAnswerSelect = (questionId: number, choiceId: number) => {
        setUserAnswers(prev => {
            const existing = prev.find(answer => answer.questionId === questionId);
            if (existing) {
                return prev.map(answer =>
                    answer.questionId === questionId
                        ? { ...answer, selectedChoiceId: choiceId }
                        : answer
                );
            } else {
                return [...prev, { questionId, selectedChoiceId: choiceId }];
            }
        });
    };

    // No exercises state
    if (exercises.length === 0) {
        return null;
    }

    const currentExercise = exercises[currentExerciseIndex];

    return (
        <div className="bg-white rounded-2xl shadow-sm">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                    <h2 className="text-xl font-bold text-gray-900">លំហាត់</h2>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">


                {/* Questions */}
                <div className="space-y-6">
                    {currentExercise.questions.map((question, questionIndex) => {
                        const userAnswer = userAnswers.find(answer => answer.questionId === question.id);
                        const hasAnswered = userAnswer !== undefined;

                        return (
                            <div key={question.id} className="border border-gray-200 rounded-lg p-4">
                                <div className="font-medium text-gray-900 mb-3">
                                    <span className="inline-block mr-2">{questionIndex + 1}.</span>
                                    <MarkDownRenderer content={question.title} />
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                    {question.choices.map((choice) => {
                                        const isSelected = userAnswer?.selectedChoiceId === choice.id;
                                        const isCorrect = choice.isCorrect;
                                        const isWrong = isSelected && !isCorrect;

                                        let choiceStyle = 'border-gray-200 hover:border-gray-300';
                                        let textStyle = 'text-gray-700';

                                        if (hasAnswered) {
                                            if (isCorrect) {
                                                choiceStyle = 'border-green-500 bg-green-50';
                                                textStyle = 'text-green-700 font-medium';
                                            } else if (isWrong) {
                                                choiceStyle = 'border-red-500 bg-red-50';
                                                textStyle = 'text-red-700';
                                            } else {
                                                choiceStyle = 'border-gray-200 bg-gray-50';
                                                textStyle = 'text-gray-500';
                                            }
                                        } else if (isSelected) {
                                            choiceStyle = 'border-indigo-500 bg-indigo-50';
                                            textStyle = 'text-indigo-700';
                                        }

                                        return (
                                            <label
                                                key={choice.id}
                                                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${choiceStyle}`}
                                            >
                                                <input
                                                    type="radio"
                                                    name={`question-${question.id}`}
                                                    value={choice.id}
                                                    checked={isSelected}
                                                    onChange={() => handleAnswerSelect(question.id, choice.id)}
                                                    className="w-4 h-4 text-indigo-600"
                                                />
                                                <div className={textStyle}>
                                                    <MarkDownRenderer content={choice.text} />
                                                </div>
                                                {hasAnswered && isCorrect && (
                                                    <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                                                )}
                                                {hasAnswered && isWrong && (
                                                    <XCircle className="w-4 h-4 text-red-500 ml-auto" />
                                                )}
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                    <button
                        onClick={() => setCurrentExerciseIndex(Math.max(0, currentExerciseIndex - 1))}
                        disabled={currentExerciseIndex === 0}
                        className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        មុន
                    </button>

                    <span className="text-sm text-gray-500">
                        {currentExerciseIndex + 1} / {exercises.length}
                    </span>

                    <button
                        onClick={() => setCurrentExerciseIndex(Math.min(exercises.length - 1, currentExerciseIndex + 1))}
                        disabled={currentExerciseIndex === exercises.length - 1}
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        បន្ត
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}