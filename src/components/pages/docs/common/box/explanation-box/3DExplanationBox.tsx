import BulletList from '@/components/helper/BulletList';
import { Box } from 'lucide-react';
import { ThreeD } from '@/components/helper/ThreeD';
import { ThreeDTextItem, TwoDTextItem } from '@/types/threeD';



export interface ThreeDExplanationBoxProps {
    src?: string | React.ReactNode;
    explanation: string | string[] | React.ReactNode;
    scale?: number;
    target?: [number, number, number];
    canvasBackground?: React.ReactNode;
    canvasBackgroundColor?: string;
    threeDText?: ThreeDTextItem | ThreeDTextItem[];
    twoDText?: TwoDTextItem | TwoDTextItem[];
    height?: number;
}

export const ThreeDExplanationBox = ({
    src,
    explanation,
    scale = 0.7,
    target = [0, 0, 0],
    canvasBackground,
    canvasBackgroundColor = 'black',
    threeDText,
    twoDText,
    height = 400
}: ThreeDExplanationBoxProps) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-2 my-6'>
            <div className="bg-indigo-50/80 border border-indigo-600 p-6 rounded-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
                <div className="grid grid-cols-1 gap-6">
                    <div className="w-full">
                        <div className="flex items-center gap-2 mb-4">
                            <Box size={20} className="text-indigo-600" />
                            <div className="text-lg font-bold text-gray-900">រូបភាព 3D</div>
                        </div>
                        <ThreeD
                            src={src}
                            scale={scale}
                            target={target}
                            canvasBackground={canvasBackground}
                            canvasBackgroundColor={canvasBackgroundColor}
                            threeDText={threeDText}
                            twoDText={twoDText}
                            height={height}
                        />
                    </div>
                </div>
                <div className="lg:hidden flex flex-col my-6 w-full">
                    <div className="flex items-center gap-3 mb-4">
                        <Box size={20} className='text-indigo-600' />
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
                            <Box size={20} className='text-indigo-600' />
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