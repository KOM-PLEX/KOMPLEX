import BulletList from '@/components/helper/BulletList';
import { VideoPlayer } from '@/components/helper/VideoPlayer';
import { Video } from 'lucide-react';

export interface VideoBoxProps {
    src?: string;
    videoTitle?: string;
    explanation: string | string[] | React.ReactNode;
}

export const VideoBox = ({ src, videoTitle, explanation }: VideoBoxProps) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-2 my-6'>
            <div className="bg-indigo-50/80 border border-indigo-600 p-6 rounded-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
                <div className="grid grid-cols-1 gap-6">
                    <div className="w-full">
                        {src ? (
                            <VideoPlayer
                                src={src}
                                poster="/angkor.jpg"
                                className="rounded-lg shadow-md h-auto w-full"
                            />
                        ) : (
                            <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
                                <div className="text-center">
                                    <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                    <p className="text-gray-500">{videoTitle || 'Video content will be displayed here'}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="lg:hidden flex flex-col my-6 w-full">
                    <div className="flex items-center gap-3 mb-4">
                        <Video size={20} className='text-indigo-600' />
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
                            <Video size={20} className='text-indigo-600' />
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