import BulletList from '@/components/helper/BulletList';
import { Image } from 'lucide-react';

export interface ImageBoxProps {
    imageSrc: string;
    imageAlt: string;
    explanation: string | string[];
}

export const ImageBox = ({ imageSrc, imageAlt, explanation }: ImageBoxProps) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-2'>
            <div className="bg-indigo-50/80 border border-indigo-600 p-6  rounded-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
                <div className="grid grid-cols-1  gap-6">
                    <div className="w-full">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="rounded-lg shadow-md h-auto w-full"
                        />
                    </div>
                </div>
                <div className="lg:hidden flex flex-col my-6 w-full">
                    <div className="flex items-center gap-3 mb-4">
                        <Image size={20} className='text-indigo-600' />
                        <h3 className="text-xl font-bold text-gray-900">ការពន្យល់</h3>
                    </div>
                    {typeof explanation === 'string' ? (
                        <p className="text-gray-700 text-base">
                            {explanation}
                        </p>
                    ) : (
                        <ul className="text-gray-700 text-base list-disc list-inside space-y-1">
                            {explanation.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className="hidden lg:flex  bg-indigo-50/80 border border-indigo-600 p-6  rounded-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
                <div className="grid grid-cols-1  gap-6">

                    <div className="w-full">
                        <div className="flex  items-center gap-3 mb-4">
                            <Image size={20} className='text-indigo-600' />
                            <h3 className="text-xl font-bold text-gray-900">ការពន្យល់</h3>
                        </div>
                        {typeof explanation === 'string' ? (
                            <p className="text-gray-700 leading-relaxed text-base">
                                {explanation}
                            </p>
                        ) : (
                            <BulletList content={explanation} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};