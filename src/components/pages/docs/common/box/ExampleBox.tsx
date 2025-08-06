import { Step } from '@/types/topic';
import { Search } from 'lucide-react';

export interface ExampleBoxProps {
    question: string | React.ReactNode;
    content?: string | string[] | React.ReactNode;
    steps: Step[];
    answer?: string | React.ReactNode;
}

function AnswerBox({ answer }: { answer: string | React.ReactNode }) {
    return (
        <div className="bg-green-50/90 border-2 border-green-500 rounded-xl p-5 my-4 shadow-lg shadow-green-500/15">
            <div className="text-green-800 font-semibold">
                ចម្លើយៈ {answer}
            </div>
        </div>
    );
}

export default function ExampleBox({ question, content, steps, answer }: ExampleBoxProps) {
    return (
        <div className="bg-amber-50/90 border-2 border-amber-500 rounded-2xl p-6 my-6 shadow-lg shadow-amber-500/15">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <Search size={20} className="text-amber-600" />
                <h4 className="text-amber-800 font-semibold text-lg">
                    ឧទាហរណ៍
                </h4>
            </div>

            {/* Question */}
            <div className="text-gray-800 mb-4 font-medium">
                {question}
            </div>

            {/* Content */}
            <div className="text-gray-800 mb-4 font-medium">
                {content}
            </div>

            {/* Solution Steps */}
            <div className="bg-white text-white rounded-xl p-5 mb-4 shadow-lg">
                <div className="space-y-4">
                    {steps.map((step, index) => (
                        <div key={index} className="space-y-2">
                            <div className="font-semibold text-black">
                                ជំហានទី{index + 1}៖ {step.title}
                            </div>
                            <div className="font-mono text-sm p-3 rounded-lg border-2 border-gray-200 text-black">
                                {step.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Answer */}
            {answer && <AnswerBox answer={answer} />}
        </div>
    );
}
