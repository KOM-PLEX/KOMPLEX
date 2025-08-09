import BulletList from '@/components/helper/BulletList';
import { FunctionSquare } from 'lucide-react';
import Graph, { Expression } from '../../../../../helper/Graph';
import { CalculatorOptions } from 'desmos';

export interface GraphExplanationBoxProps {
    expressions: Expression[];
    options?: Partial<CalculatorOptions>;
    explanation: string | string[] | React.ReactNode;
}

export const GraphExplanationBox = ({ expressions, options, explanation }: GraphExplanationBoxProps) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-2 my-6'>
            <div className="bg-indigo-50/80 border border-indigo-600 p-6 rounded-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
                <div className="grid grid-cols-1 gap-6">
                    <div className="w-full">
                        <div className="flex items-center gap-2 mb-4">
                            <FunctionSquare size={20} className="text-indigo-600" />
                            <div className="text-lg font-bold text-gray-900">ក្រាប</div>
                        </div>
                        <div className="rounded-lg shadow-md h-auto w-full">
                            <Graph expressions={expressions} options={options} />
                        </div>
                    </div>
                </div>
                <div className="lg:hidden flex flex-col my-6 w-full">
                    <div className="flex items-center gap-3 mb-4">
                        <FunctionSquare size={20} className='text-indigo-600' />
                        <h3 className="text-xl font-bold text-gray-900">ការពន្យល់</h3>
                    </div>
                    {typeof explanation === 'string' ? (
                        <p className="text-gray-700 text-base">
                            {explanation}
                        </p>
                    ) : Array.isArray(explanation) ? (
                        <BulletList content={explanation} />
                    ) : (
                        <div className="text-gray-700 text-base">
                            {explanation}
                        </div>
                    )}
                </div>
            </div>
            <div className="hidden lg:flex bg-indigo-50/80 border border-indigo-600 p-6 rounded-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
                <div className="grid grid-cols-1 gap-6">
                    <div className="w-full">
                        <div className="flex items-center gap-3 mb-4">
                            <FunctionSquare size={20} className='text-indigo-600' />
                            <h3 className="text-xl font-bold text-gray-900">ការពន្យល់</h3>
                        </div>
                        {typeof explanation === 'string' ? (
                            <p className="text-gray-700 leading-relaxed text-base">
                                {explanation}
                            </p>
                        ) : Array.isArray(explanation) ? (
                            <BulletList content={explanation} />
                        ) : (
                            <div className="text-gray-700 leading-relaxed text-base">
                                {explanation}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}; 