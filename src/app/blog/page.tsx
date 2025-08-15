'use client';

import BlogCard from '@/components/pages/blog/BlogCard';
import Sidebar from '@/components/pages/blog/Sidebar';
import { Bot, Target } from 'lucide-react';
import { useState } from 'react';

const blogPosts = [
    {
        id: 1,
        featured: true,
        author: {
            name: 'សុខវណ្ណា អ៊ុំ',
            avatar: 'ស'
        },
        date: 'មុន ៣ ថ្ងៃ',
        title: 'បទពិសោធន៍របស់ខ្ញុំពីសិស្សដែលបរាជ័យទៅជាសិស្ស A',
        image: '/angkor.jpg',
        excerpt: '',
    },
    {
        id: 2,
        featured: false,
        author: {
            name: 'វណ្ណា សុខ',
            avatar: 'វ'
        },
        date: 'មុន ១ សប្តាហ៍',
        image: '/angkor.jpg',
        title: 'តើធ្វើដូចម្តេចដើម្បីរៀនគណិតវិទ្យាឱ្យបានល្អក្នុងពេលដែលមានពេលវេលាតិច?',
        excerpt: '',
    },
    {
        id: 3,
        featured: false,
        author: {
            name: 'គីមី សិស្ស',
            avatar: 'គ'
        },
        date: 'មុន ២ សប្តាហ៍',
        image: '/angkor.jpg',
        title: 'រឿងរ៉ាវរបស់ខ្ញុំពីការចូលរួមការប្រកួតអូឡាំពិចគណិតវិទ្យា',
        excerpt: '',
    },
    {
        id: 4,
        featured: false,
        author: {
            name: 'ដេរីវេ ម៉ាស្ទើរ',
            avatar: 'ដ'
        },
        date: 'មុន ៣ សប្តាហ៍',
        image: '/angkor.jpg',
        title: 'វិធីសាស្ត្ររៀនគណិតវិទ្យាដែលជួយខ្ញុំបានជាប់ថ្នាក់ទី១',
        excerpt: '',
    },
    {
        id: 5,
        featured: false,
        author: {
            name: 'អាំងតេក្រាល សិស្ស',
            avatar: 'អ'
        },
        date: 'មុន ១ ខែ',
        image: '/angkor.jpg',
        title: 'តើធ្វើដូចម្តេចដើម្បីដោះស្រាយបញ្ហាអាំងតេក្រាលឱ្យបានល្អ?',
        excerpt: '',
    },
    {
        id: 6,
        featured: false,
        author: {
            name: 'វ៉ិចទ័រ អ្នករៀន',
            avatar: 'វ'
        },
        date: 'មុន ២ ខែ',
        image: '/angkor.jpg',
        title: 'គន្លឹះដើម្បីចងចាំច្បាប់វ៉ិចទ័រឱ្យបានល្អ',
        excerpt: '',
    }
];

export default function Blog() {
    const [showOverlay, setShowOverlay] = useState(true);

    return (
        <div className="min-h-screen bg-gray-50">


            <div className="mt-15 p-5 flex gap-8 max-w-7xl mx-auto">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 mt-14 lg:mt-0">
                    {showOverlay && (
                        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm z-20 flex items-center justify-center mt-14">
                            <div className="flex items-center justify-center  w-full">
                                <div className="text-center max-w-2xl mx-auto px-6 py-4 rounded-2xl bg-indigo-50 border border-indigo-500">
                                    <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <Target className="w-12 h-12 text-indigo-600" />
                                    </div>

                                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                        មុខងាប្លុកពេញលេញនឹងមកដល់ឆាប់ៗ
                                    </h1>

                                    <p className="text-lg text-gray-600 mb-8">
                                        កំពុងធ្វើការអភិវឌ្ឍមុខងារវេទិកាដ៏អស្ចារ្យសម្រាប់អ្នក។
                                    </p>

                                    <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                                        <h2 className="text-xl font-semibold text-gray-900 mb-6">
                                            មុខងារដែលនឹងមាន៖
                                        </h2>

                                        <div className="space-y-4 text-left">
                                            <div className="flex items-center gap-3">
                                                <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                                                <span className="text-gray-700">ការសរសេរអត្ថបទ</span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                                                <span className="text-gray-700">ការចែករំលែកបទពិសោធន៍</span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                                                <span className="text-gray-700">ការពិភាក្សាជាមួយអ្នកដទៃ</span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                                                <span className="text-gray-700">ការបង្កើតក្រុមសិក្សា</span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                                                <span className="text-gray-700">ការស្វែងរកអត្ថបទ</span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                                                <span className="text-gray-700">ការតាមដានការរីកចម្រើន</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setShowOverlay(false)}
                                        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
                                    >
                                        បន្តប្រើ
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
                        {blogPosts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
