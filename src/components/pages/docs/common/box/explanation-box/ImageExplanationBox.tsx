import BulletList from '@/components/helper/BulletList';
import { Image } from 'lucide-react';

export interface ImageBoxProps {
    src?: string;
    imageAlt: string;
    explanation: string | string[] | React.ReactNode;
    title?: string;
}

export const ImageBox = ({ src, imageAlt, explanation, title }: ImageBoxProps) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-2 my-6'>
            <div className="bg-indigo-50/80 border border-indigo-600 p-6  rounded-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
                <div className="grid grid-cols-1  gap-6">
                    <div className="w-full">
                        <img
                            src={src}
                            alt={imageAlt}
                            className="rounded-lg shadow-md h-auto w-full aspect-video object-contain"
                        />
                    </div>
                </div>
                <div className="lg:hidden flex flex-col my-6 w-full">
                    <div className="flex items-center gap-3 mb-4">
                        <Image size={20} className='text-indigo-600' />
                        <h3 className="text-xl font-bold text-gray-900">{title || "ការពន្យល់"}</h3>
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
            <div className="hidden lg:flex  bg-indigo-50/80 border border-indigo-600 p-6  rounded-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
                <div className="grid grid-cols-1  gap-6">

                    <div className="w-full">
                        <div className="flex  items-center gap-3 mb-4">
                            <Image size={20} className='text-indigo-600' />
                            <h3 className="text-xl font-bold text-gray-900">{title || "ការពន្យល់"}</h3>
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