'use client';

import BlogCard from '@/components/pages/blog/BlogCard';
import { useEffect, useState } from 'react';
import { Search, Filter, Book, Eye, Plus, User, ChevronDown, X, Star, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Sidebar from '@/components/pages/blog/Sidebar';
import { Listbox, Transition } from '@headlessui/react';
import { Blog } from '@/types/content/blogs';



// Skeleton Loading Component
function BlogSkeleton() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="pt-32 p-5 max-w-7xl mx-auto">
                {/* Featured Post Skeleton */}
                <div className="mb-8">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            {/* Featured Image Skeleton */}
                            <div className="relative h-64 lg:h-full bg-gray-200 animate-pulse"></div>

                            {/* Featured Content Skeleton */}
                            <div className="p-6 lg:p-8 flex flex-col justify-center">
                                <div className="space-y-4">
                                    {/* Title Skeleton */}
                                    <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="w-1/2 h-6 bg-gray-200 rounded animate-pulse"></div>

                                    {/* Author Info Skeleton */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
                                        <div className="space-y-2">
                                            <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                                            <div className="w-32 h-3 bg-gray-200 rounded animate-pulse"></div>
                                        </div>
                                    </div>

                                    {/* Stats Skeleton */}
                                    <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Posts Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                            {/* Image Skeleton */}
                            <div className="w-full h-48 bg-gray-200 animate-pulse"></div>

                            {/* Content Skeleton */}
                            <div className="p-4 space-y-3">
                                {/* Title Skeleton */}
                                <div className="w-full h-5 bg-gray-200 rounded animate-pulse"></div>
                                <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>

                                {/* Author and Date Skeleton */}
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
                                    <div className="space-y-1">
                                        <div className="w-20 h-3 bg-gray-200 rounded animate-pulse"></div>
                                        <div className="w-16 h-3 bg-gray-200 rounded animate-pulse"></div>
                                    </div>
                                </div>

                                {/* Stats Skeleton */}
                                <div className="flex gap-4">
                                    <div className="w-16 h-3 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="w-16 h-3 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function BlogPage() {
    const [blogPosts, setBlogPosts] = useState<Blog[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const blogTypes = ['បទពិសោធន៍', 'វិធីសាស្ត្ររៀន', 'រឿងរ៉ាវ', 'គន្លឹះ'];
    const topics = ['គណិតវិទ្យា', 'រូបវិទ្យា', 'គីមីវិទ្យា', 'ជីវវិទ្យា', 'អូឡាំពិច'];

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('http://localhost:6969/user-content/blogs');
                const data = await response.json();
                setBlogPosts(data);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchBlogPosts();
    }, []);

    if (isLoading) {
        return <BlogSkeleton />;
    }


    // Filter blog posts based on search and filters
    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.username.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(post.type);
        const matchesTopic = selectedTopics.length === 0 || selectedTopics.includes(post.topic);

        return matchesSearch && matchesType && matchesTopic;
    });

    // Get featured post (first post) and remaining posts
    const featuredPost = blogPosts.sort((a, b) => b.viewCount - a.viewCount)[0];
    const remainingPosts = filteredPosts.slice(1);

    const toggleType = (type: string) => {
        setSelectedTypes(prev =>
            prev.includes(type)
                ? prev.filter(t => t !== type)
                : [...prev, type]
        );
    };

    const toggleTopic = (topic: string) => {
        setSelectedTopics(prev =>
            prev.includes(topic)
                ? prev.filter(t => t !== topic)
                : [...prev, topic]
        );
    };

    const clearFilters = () => {
        setSelectedTypes([]);
        setSelectedTopics([]);
    };


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Secondary Header */}
            <div className="fixed w-full top-14 z-40 bg-white/95 backdrop-blur-md border-b border-indigo-500/10">
                <div className=" mx-auto px-6 py-2">
                    <div className="flex items-center justify-between gap-6">
                        {/* Left Section: Search and Filter */}
                        <div className="flex items-center gap-4 flex-1">
                            {/* Search Bar */}
                            <div className="relative flex-1 max-w-md">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="ស្វែងរកប្លុក..."
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
                                        {(selectedTypes.length > 0 || selectedTopics.length > 0) && (
                                            <span className="ml-1 px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                                                {selectedTypes.length + selectedTopics.length}
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
                                                    {(selectedTypes.length > 0 || selectedTopics.length > 0) && (
                                                        <button
                                                            onClick={clearFilters}
                                                            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                                                        >
                                                            លុបច្រោះ
                                                        </button>
                                                    )}
                                                </div>

                                                {/* Blog Types */}
                                                <div>
                                                    <h4 className="text-sm font-medium text-gray-700 mb-2">ប្រភេទប្លុក</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {blogTypes.map((type) => (
                                                            <button
                                                                key={type}
                                                                onClick={() => toggleType(type)}
                                                                className={`px-2 py-1 text-sm rounded-lg transition-all duration-200 font-medium ${selectedTypes.includes(type)
                                                                    ? 'text-indigo-600 bg-indigo-100 border border-indigo-200'
                                                                    : 'text-gray-600 bg-gray-100 hover:bg-gray-200 border border-transparent'
                                                                    }`}
                                                            >
                                                                {type}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Topics */}
                                                <div>
                                                    <h4 className="text-sm font-medium text-gray-700 mb-2">ប្រធានបទ</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {topics.map((topic) => (
                                                            <button
                                                                key={topic}
                                                                onClick={() => toggleTopic(topic)}
                                                                className={`px-2 py-1 text-sm rounded-lg transition-all duration-200 font-medium ${selectedTopics.includes(topic)
                                                                    ? 'text-indigo-600 bg-indigo-100 border border-indigo-200'
                                                                    : 'text-gray-600 bg-gray-100 hover:bg-gray-200 border border-transparent'
                                                                    }`}
                                                            >
                                                                {topic}
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
                                href="/my-content/createBlog"
                                className="flex items-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                                <span className='hidden lg:block'>បង្កើតប្លុក</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="pt-36 p-5 max-w-7xl mx-auto">
                {/* Featured Post Section */}
                <p className='text-2xl font-bold text-left mb-8 flex items-center gap-2'>
                    <Star className='w-6 h-6 text-indigo-500' />
                    ប្លុកពេញនិយម
                </p>

                <div className='mb-8 flex justify-center items-center'>
                    <BlogCard key={featuredPost.id} post={featuredPost} />
                </div>


                {/* Blog Posts Grid */}
                <div className='bg-white rounded-xl shadow-sm overflow-hidden p-6'>
                    <p className='text-2xl font-bold text-left mb-8  flex items-center gap-2'>
                        <BookOpen className='w-6 h-6 text-indigo-500' />
                        ប្លុកដទៃទៀត
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-6">

                        {remainingPosts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}

                    </div>
                </div>

                {/* No Results Message */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                        <Book className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">រកមិនឃើញប្លុក</h3>
                        <p className="text-gray-500">សូមព្យាយាមផ្លាស់ប្តូរតម្លៃច្រោះឬស្វែងរក</p>
                    </div>
                )}
            </div>
        </div >
    );
}
