import { ArrowLeft, ArrowRight, BookAIcon } from "lucide-react";

// TODO:  this component should take the curriculum and then find the next and prev topic title

export default function TopicWrapper({ title, subtitle, children }: { title: string, subtitle?: string, children: React.ReactNode, prev?: string, next?: string }) {
    return (
        <div className="bg-white  rounded-xl shadow-lg p-5">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 items-center">
                        {/* gonna need to use a custom prop icon */}
                        <BookAIcon className="text-indigo-500" />
                        <h1 className="text-3xl font-black text-indigo-500">{title}</h1>
                    </div>
                    <p className="text-md text-gray-500">{subtitle}</p>
                </div>
            </div>
            <div className="w-full h-0.5 bg-gray-50 mt-6"></div>
            {children}
            <div className="w-full flex justify-between items-center mt-6">
                <button className="bg-indigo-500 text-white px-4 py-2 rounded-md flex items-center gap-2 disabled:bg-gray-50 disabled:text-gray-400">
                    <ArrowLeft className="w-4 h-4" />
                    <span>មុន</span>
                </button>
                <button className="bg-indigo-500 text-white px-4 py-2 rounded-md flex items-center gap-2 disabled:bg-gray-50 disabled:text-gray-400">
                    <span>បន្ទាប់</span>
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}