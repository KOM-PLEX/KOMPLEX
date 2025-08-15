'use client';

import Link from 'next/link';
import ForumCard from '@/components/pages/forum/ForumCard';
import { Search, Filter, MessageSquare, Plus, Eye, MessageCircle, Heart } from 'lucide-react';
import { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';

export default function Forum() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const forumPosts = [
        {
            id: 1,
            author: {
                name: 'សុខវណ្ណា អ៊ុំ',
                avatar: 'ស'
            },
            time: 'មុន ២ ម៉ោង',
            title: 'ខ្ញុំជាអ្នកឈ្នះអូឡាំពិចគណិតវិទ្យាជាតិ សួរអ្វីក៍បាន!',
            content: 'ស្វាគមន៍! ខ្ញុំឈ្មោះសុខវណ្ណា ជាអ្នកឈ្នះអូឡាំពិចគណិតវិទ្យាជាមឆ្នាំ២០២៤។ ខ្ញុំចង់ជួយចែករំលែកចំណេះដឹងជាមួយអ្នកទាំងអស់។ សួរអ្វីក៍បានអំពីគណិតវិទ្យា ឬវិធីសាស្ត្ររៀន!',
            image: ['/angkor.jpg'],
            upvotes: 24,
            comments: 12,
            upvoted: true,
            category: 'គណិតវិទ្យា'
        },
        {
            id: 2,
            author: {
                name: 'វណ្ណា សុខ',
                avatar: 'វ'
            },
            time: 'មុន ៥ ម៉ោង',
            title: 'មិនដឹងដោះស្រាយលីមីតនេះយ៉ាងណា ជួយខ្ញុំផង!',
            content: 'ខ្ញុំជាប់នៅលីមីតនេះយូរហើយ៖ lim(x→0) (sin x)/x។ អ្នកណាដឹងវិធីដោះស្រាយដែរឬទេ? ខ្ញុំព្យាយាមប្រើច្បាប់ L\'Hôpital ប៉ុន្តែមិនបានលទ្ធផល។',
            upvotes: 8,
            comments: 6,
            upvoted: false,
            category: 'គណិតវិទ្យា'
        },
        {
            id: 3,
            author: {
                name: 'គីមី សិស្ស',
                avatar: 'គ'
            },
            time: 'មុន ១ ថ្ងៃ',
            title: 'តើធ្វើដូចម្តេចដើម្បីរៀនគណិតវិទ្យាឱ្យបានល្អ?',
            content: 'ខ្ញុំជាសិស្សថ្នាក់ទី១១ និងចង់ធ្វើឱ្យគណិតវិទ្យាកាន់តែល្អ។ តើអ្នកណាមានគន្លឹះល្អៗដើម្បីរៀនគណិតវិទ្យាឱ្យបានល្អ? ខ្ញុំចង់ដឹងវិធីរៀន និងវិធីដោះស្រាយបញ្ហាឱ្យបានល្អ។',
            image: ['/angkor.jpg'],
            upvotes: 15,
            comments: 9,
            upvoted: false,
            category: 'គណិតវិទ្យា'
        },
        {
            id: 4,
            author: {
                name: 'ដេរីវេ ម៉ាស្ទើរ',
                avatar: 'ដ'
            },
            time: 'មុន ២ ថ្ងៃ',
            title: 'វិធីងាយស្រួលដើម្បីចងចាំច្បាប់ដេរីវេ',
            content: 'ខ្ញុំរកឃើញវិធីងាយស្រួលដើម្បីចងចាំច្បាប់ដេរីវេ។ ប្រសិនបើអ្នកចងចាំច្បាប់ដេរីវេដូចជា d/dx(x^n) = nx^(n-1) និង d/dx(sin x) = cos x នោះអ្នកអាចដោះស្រាយបញ្ហាភាគច្រើនបាន។ តើអ្នកណាចង់ដឹងវិធីចងចាំច្បាប់ដេរីវេដទៃទៀត?',
            upvotes: 32,
            comments: 18,
            upvoted: true,
            category: 'គណិតវិទ្យា'
        },
        {
            id: 5,
            author: {
                name: 'អាំងតេក្រាល សិស្ស',
                avatar: 'អ'
            },
            time: 'មុន ៣ ថ្ងៃ',
            title: 'តើអាំងតេក្រាលដែលមិនកំណត់ខុសពីអាំងតេក្រាលកំណត់យ៉ាងណា?',
            content: 'ខ្ញុំច្រឡំអំពីភាពខុសគ្នារវាងអាំងតេក្រាលដែលមិនកំណត់ និងអាំងតេក្រាលកំណត់។ អ្នកណាអាចពន្យល់ឱ្យខ្ញុំយល់បានដែរឬទេ? ខ្ញុំចង់ដឹងពេលណាប្រើអាំងតេក្រាលដែលមិនកំណត់ និងពេលណាប្រើអាំងតេក្រាលកំណត់។',
            image: ['/angkor.jpg'],
            upvotes: 12,
            comments: 7,
            upvoted: false,
            category: 'គណិតវិទ្យា'
        },
        {
            id: 6,
            author: {
                name: 'វ៉ិចទ័រ អ្នករៀន',
                avatar: 'វ'
            },
            time: 'មុន ៤ ថ្ងៃ',
            title: 'តើធ្វើដូចម្តេចដើម្បីគណនាផលគុណវ៉ិចទ័រ?',
            content: 'ខ្ញុំជាប់នៅការគណនាផលគុណវ៉ិចទ័រ។ តើអ្នកណាអាចពន្យល់ឱ្យខ្ញុំយល់បានដែរឬទេ? ខ្ញុំចង់ដឹងវិធីគណនាផលគុណវ៉ិចទ័រ និងពេលណាប្រើវា។ សូមជួយខ្ញុំផង!',
            image: ['/angkor.jpg']      ,
            upvotes: 6,
            comments: 4,
            upvoted: false,
            category: 'គណិតវិទ្យា'
        }
    ];

    const categories = ['គណិតវិទ្យា', 'រូបវិទ្យា', 'គីមីវិទ្យា', 'ជីវវិទ្យា', 'អូឡាំពិច'];

    // Filter forum posts based on search and categories
    const filteredPosts = forumPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(post.category);

        return matchesSearch && matchesCategory;
    });

    const toggleCategory = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const clearFilters = () => {
        setSelectedCategories([]);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Secondary Header */}
            <div className="fixed w-full top-14 z-40 bg-white/95 backdrop-blur-md border-b border-indigo-500/10">
                <div className="mx-auto px-6 py-2">
                    <div className="flex items-center justify-between gap-6">
                        {/* Left Section: Search and Filter */}
                        <div className="flex items-center gap-4 flex-1">
                            {/* Search Bar */}
                            <div className="relative flex-1 max-w-md">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="ស្វែងរកវេទិកា..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                                />
                            </div>

                            {/* Filter Dropdown */}
                            <div className="relative">
                                <Listbox>
                                    <Listbox.Button className="flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                                        <Filter className="text-gray-600" size={18} />
                                        {selectedCategories.length > 0 && (
                                            <span className="ml-1 px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                                                {selectedCategories.length}
                                            </span>
                                        )}
                                    </Listbox.Button>
                                    <Transition
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-75 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Listbox.Options className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl border border-gray-200 shadow-lg backdrop-blur-sm z-50 p-3">
                                            <div className="space-y-4">
                                                {/* Header */}
                                                <div className="flex items-center justify-between">
                                                    {selectedCategories.length > 0 && (
                                                        <button
                                                            onClick={clearFilters}
                                                            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                                                        >
                                                            លុបច្រោះ
                                                        </button>
                                                    )}
                                                </div>

                                                {/* Categories */}
                                                <div>
                                                    <h4 className="text-sm font-medium text-gray-700 mb-2">ប្រភេទ</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {categories.map((category) => (
                                                            <button
                                                                key={category}
                                                                onClick={() => toggleCategory(category)}
                                                                className={`px-2 py-1 text-sm rounded-lg transition-all duration-200 font-medium ${selectedCategories.includes(category)
                                                                    ? 'text-indigo-600 bg-indigo-100 border border-indigo-200'
                                                                    : 'text-gray-600 bg-gray-100 hover:bg-gray-200 border border-transparent'
                                                                    }`}
                                                            >
                                                                {category}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Listbox.Options>
                                    </Transition>
                                </Listbox>
                            </div>
                        </div>

                        {/* Right Section: Action Buttons */}
                        <div className="flex items-center gap-3">
                            <Link
                                href="/forums/create"
                                className="flex items-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                                <span className='hidden lg:block'>បង្កើតអត្ថបទថ្មី</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="pt-36 p-5 max-w-7xl mx-auto">
                {/* Forum Posts List */}
                <div className="flex flex-col gap-5">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <ForumCard key={post.id} post={post} isFromBasePage={true} />
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">រកមិនឃើញអត្ថបទ</h3>
                            <p className="text-gray-500">សូមព្យាយាមផ្លាស់ប្តូរតម្លៃច្រោះឬស្វែងរក</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
