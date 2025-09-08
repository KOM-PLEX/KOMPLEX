'use client';

import BlogCard from '@/components/pages/blog/BlogCard';
import { useEffect, useState } from 'react';
import { Search, Book, Plus, Star, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Blog } from '@/types/content/blogs';
import { getAllBlogs } from '@/services/feed/blogs';
import BlogSkeleton from '@/components/pages/blog/BlogSkeleton';
import BlogError from '@/components/common/ContentError';

// ! TO CHANGE TOPIC AND TYPE FILTERING

export default function BlogPage() {
    const [blogPosts, setBlogPosts] = useState<Blog[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState<string | null>(null);

    const fetchBlogPosts = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const data = await getAllBlogs();
            if (data.blogs.length === 0) {
                setError('រកមិនឃើញប្លុក');
            } else {
                setBlogPosts(data.blogs);
            }
        } catch (error) {
            setError('មានបញ្ហាក្នុងការទាញយកប្លុក');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogPosts();
    }, []);

    if (isLoading) {
        return <BlogSkeleton />;
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="pt-36 p-5 max-w-7xl mx-auto">
                    <BlogError type={error === 'រកមិនឃើញប្លុក' ? 'no-results' : 'error'} message={error} />
                </div>
            </div>
        );
    }


    // Filter blog posts based on search and filters
    let filteredPosts: Blog[] = [];
    if (blogPosts.length > 0) {
        filteredPosts = blogPosts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.username.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesSearch;
        });
    }

    // Get featured post (first post) and remaining posts
    const featuredPost = blogPosts.sort((a, b) => b.viewCount - a.viewCount)[0];
    const remainingPosts = filteredPosts.length > 0 ? filteredPosts.slice(1) : [];


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

                {featuredPost && (
                    <div className='mb-8 flex justify-center items-center'>
                        <BlogCard key={featuredPost.id} post={featuredPost} />
                    </div>
                )}


                {/* Blog Posts Grid */}
                <div className='bg-white rounded-xl shadow-sm overflow-hidden p-6'>
                    <p className='text-2xl font-bold text-left mb-8  flex items-center gap-2'>
                        <BookOpen className='w-6 h-6 text-indigo-500' />
                        ប្លុកដទៃទៀត
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-6">

                        {remainingPosts.map((post: Blog) => (
                            <BlogCard key={post.id} post={post} />
                        ))}

                    </div>
                </div>
            </div>
        </div >
    );
}
