'use client';

import Link from 'next/link';
import ForumCard from '@/components/pages/forum/ForumCard';
import ForumSkeleton from '@/components/pages/forum/ForumSkeleton';
import ForumError from '@/components/pages/forum/ForumError';
import { Search, Filter, MessageSquare, Plus } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ForumPost } from '@/types/content/forums';
import { getAllForums } from '@/services/feed/forums';
import { toggleForumLike } from '@/services/me/forums';

export default function Forum() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [forumPosts, setForumPosts] = useState<ForumPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    // Fetch forum posts from backend
    useEffect(() => {
        const fetchForumPosts = async () => {
            try {
                setLoading(true);
                const { forums } = await getAllForums();
                setForumPosts(forums);
                setError(null);
            } catch (err) {
                console.error('Error fetching forum posts:', err);
                setError('មានបញ្ហាក្នុងការទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។');
            } finally {
                setLoading(false);
            }
        };

        fetchForumPosts();
    }, []);

    const handleLikeClick = async (postId: number, isLiked: boolean) => {
        try {
            await toggleForumLike(postId.toString(), isLiked);
            setForumPosts(prev => prev.map(post => post.id === postId ? { ...post, likeCount: isLiked ? post.likeCount - 1 : post.likeCount + 1, isLiked: !isLiked } : post));
        } catch (error) {
            console.error('Error liking post:', error);
        }
    }

    const categories = ['គណិតវិទ្យា', 'រូបវិទ្យា', 'គីមីវិទ្យា', 'ជីវវិទ្យា', 'អូឡាំពិច'];

    // Filter forum posts based on search and categories
    const filteredPosts = forumPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.username.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(post.topic);

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

    const handleRetry = () => {
        window.location.reload();
    };

    // Early returns for loading and error states
    if (loading) {
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
                                    href="/my-content/createForum"
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
                    <ForumSkeleton count={6} />
                </div>
            </div>
        );
    }

    if (error) {
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
                                    href="/my-content/createForum"
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
                    <ForumError message={error} onRetry={handleRetry} />
                </div>
            </div>
        );
    }

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
                                href="/my-content/createForum"
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
                            <ForumCard key={post.id} post={post} isFromBasePage={true} onLikeClick={() => handleLikeClick(post.id, post.isLiked)} />
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
