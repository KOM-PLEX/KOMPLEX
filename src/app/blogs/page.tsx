'use client';

import BlogCard from '@/components/pages/blog/BlogCard';
import { useEffect, useState } from 'react';
import { Search, Book, Plus, Star, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Blog } from '@/types/content/blogs';
import { getAllBlogs } from '@/services/feed/blogs';
import BlogsSkeleton from '@/components/pages/blog/BlogsSkeleton';
import BlogError from '@/components/common/ContentError';
import Sidebar from '@/components/pages/blog/Sidebar';

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
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="pt-20 lg:pt-20 p-5 max-w-7xl mx-auto">
                    <div className="flex gap-6">
                        <Sidebar />
                        {/* Main Content Area */}
                        <div className="flex-1">
                            <BlogsSkeleton />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="pt-20 lg:pt-20 p-5 max-w-7xl mx-auto">
                    <div className="flex gap-6">
                        <Sidebar />
                        {/* Main Content Area */}
                        <div className="flex-1">
                            <BlogError type={error === 'រកមិនឃើញប្លុក' ? 'no-results' : 'error'} message={error} />
                        </div>
                    </div>
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


            {/* Main Content */}
            <div className="pt-36 lg:pt-20 p-5 max-w-7xl mx-auto">
                <div className="flex gap-6">
                    {/* Sidebar */}
                    <Sidebar />


                    {/* Main Content Area */}
                    <div className="flex-1 w-full lg:w-auto">
                        {/* Featured Post Section */}
                        <div className="mb-8">
                            {/* <p className='text-2xl font-bold text-left mb-6 flex items-center gap-2'>
                                <Star className='w-6 h-6 text-indigo-500' />
                                ប្លុកពេញនិយម
                            </p> */}

                            {featuredPost && (
                                <div className='flex justify-center items-center'>
                                    <BlogCard key={featuredPost.id} post={featuredPost} />
                                </div>
                            )}
                        </div>

                        {/* Blog Posts Grid */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {remainingPosts.map((post: Blog) => (
                                <BlogCard key={post.id} post={post} />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}
