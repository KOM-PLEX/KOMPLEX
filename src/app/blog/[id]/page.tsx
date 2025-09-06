'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Bookmark } from 'lucide-react';
import { useEffect, useState } from 'react';
import Carousel from '@/components/common/Carousel';
import { Blog } from '@/types/content/blogs';
import { getBlogById } from '@/services/feed/blogs';
import { toggleBlogSave } from '@/services/me/blogs';
import { BlogPostSkeleton } from '@/components/pages/blog/BlogPostSkeleton';



export default function BlogPost() {
    const params = useParams();
    const id = params.id as string;

    const [blogPost, setBlogPost] = useState<Blog>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {

        const fetchBlogPost = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await getBlogById(id);
                setIsSaved(data.isSaved);

                setBlogPost(data);
            } catch (err) {
                console.error('Error fetching blog post:', err);
                setError('Failed to load blog post. Please try again.');
            } finally {
                setIsLoading(false);
            }
        };

        if (id) {
            fetchBlogPost();
        } else {
        }
    }, [id]);

    const handleToggleSave = async () => {
        try {
            await toggleBlogSave(id, isSaved);
            setIsSaved(!isSaved);
        } catch (err) {
            console.error('Error bookmarking blog post:', err);
            setError('Failed to bookmark blog post. Please try again.');
        }
    }

    if (isLoading) {
        return <BlogPostSkeleton />;
    }

    if (error || !blogPost) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                        <span className="text-red-600 text-2xl">!</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">មានបញ្ហាកើតឡើង</h2>
                    <p className="text-gray-600 mb-4">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                        ព្យាយាមម្តងទៀត
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto p-5 pt-20">
                {/* Back Button */}
                <div className="mb-6">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
                        <ArrowLeft className="w-4 h-4" />
                        ត្រឡប់ទៅប្លុក
                    </Link>
                </div>

                {/* Blog Post */}
                <article className="bg-white rounded-2xl shadow-lg shadow-indigo-500/10 border border-indigo-500/10 overflow-hidden">
                    {/* Header */}
                    <div className="p-6 md:p-8">
                        <div className='flex items-center justify-between gap-2'>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                                {blogPost.title}
                            </h1>
                            <button onClick={handleToggleSave} className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
                                {isSaved ? <Bookmark className="fill-indigo-600 w-8 h-8" /> : <Bookmark className="w-8 h-8" />}
                            </button>
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                                {blogPost.username.split(" ")[0].charAt(0)}
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className="font-semibold text-gray-900">{blogPost.username}</span>
                                <span>|</span>
                                <span className="text-gray-500 text-sm">{new Date(blogPost.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                        </div>


                        {/* Article Content */}
                        {
                            blogPost.media.length > 0 && (
                                <Carousel media={blogPost.media.map(media => ({ url: media.url, type: media.type as "video" | "image" }))} />
                            )
                        }

                        <div className="prose prose-lg max-w-none mt-6">
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {blogPost.description}
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
