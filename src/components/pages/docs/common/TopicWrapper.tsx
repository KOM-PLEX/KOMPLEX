import { ArrowLeft, ArrowRight, BookAIcon } from "lucide-react";
import Link from "next/link";

interface NavigationItem {
    title: string;
    link: string;
}

interface TopicWrapperProps {
    title: string;
    children: React.ReactNode;
    prev?: NavigationItem | null;
    next?: NavigationItem | null;
}

export default function TopicWrapper({ title, children, prev, next }: TopicWrapperProps) {
    return (
        <div className="lg:bg-white bg-gray-50  rounded-xl lg:shadow-lg lg:p-5 p-0">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 items-center">
                        <h1 className="text-3xl font-black text-indigo-500">{title}</h1>
                    </div>
                </div>
            </div>
            <div className="w-full h-0.5 bg-gray-50 mt-6"></div>
            {children}
            <div className="w-full flex justify-between items-center mt-6 gap-6">
                {prev ? (
                    <Link href={prev.link} className="max-w-[150px] lg:max-w-none">
                        <button className="bg-indigo-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-indigo-600 transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            <span className="line-clamp-1">{prev.title}</span>
                        </button>
                    </Link>
                ) : (
                    <button className="bg-gray-50 text-gray-400 px-4 py-2 rounded-md flex items-center gap-2 cursor-not-allowed" disabled>
                        <ArrowLeft className="w-4 h-4" />
                        <span>មុន</span>
                    </button>
                )}

                {next ? (
                    <Link href={next.link} className="max-w-[150px] lg:max-w-none">
                        <button className="bg-indigo-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-indigo-600 transition-colors">
                            <span className="line-clamp-1">{next.title}</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                ) : (
                    <button className="bg-gray-50 text-gray-400 px-4 py-2 rounded-md flex items-center gap-2 cursor-not-allowed" disabled>
                        <span>បន្ទាប់</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    )
}