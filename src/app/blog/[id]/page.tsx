'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from '@/components/common/Carousel';

interface BlogPostDetailed {
    id: number;
    username: string;
    title: string;
    type: string;
    topic: string;
    description: string;
    viewCount: number;
    likeCount: number;
    createdAt: string;
    updatedAt: string;
    media: {
        url: string;
        mediaType: string;
    }[];
}

export default function BlogPost() {
    const params = useParams();
    const id = params.id as string;

    const [blogPost, setBlogPost] = useState<BlogPostDetailed>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    console.log('Component rendered with id:', id);
    console.log('Current state - isLoading:', isLoading, 'blogPost:', blogPost, 'error:', error);

    useEffect(() => {
        console.log('useEffect triggered with id:', id);

        const fetchBlogPost = async () => {
            try {
                console.log('Starting to fetch blog post...');
                setIsLoading(true);
                setError(null);

                // Add a minimum loading time to prevent flash
                const startTime = Date.now();

                const response = await axios.get(`http://localhost:6969/blogs/${id}`);
                const data = response.data;
                console.log('API response data:', data);

                // Ensure minimum loading time of 800ms for better UX
                const elapsedTime = Date.now() - startTime;
                const minLoadingTime = 800;

                if (elapsedTime < minLoadingTime) {
                    console.log('Waiting for minimum loading time...');
                    await new Promise(resolve => setTimeout(resolve, minLoadingTime - elapsedTime));
                }

                console.log('Setting blog post data...');
                setBlogPost(data);
                console.log('Blog post data set successfully');
            } catch (err) {
                console.error('Error fetching blog post:', err);
                setError('Failed to load blog post. Please try again.');
            } finally {
                console.log('Setting loading to false...');
                setIsLoading(false);
            }
        };

        if (id) {
            console.log('ID exists, calling fetchBlogPost...');
            fetchBlogPost();
        } else {
            console.log('No ID available yet');
        }
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">កំពុងផ្ទុកអត្ថបទ...</p>
                    <p className="text-gray-500 text-sm">Loading blog post...</p>
                </div>
            </div>
        );
    }

    if (error) {
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

    if (!blogPost) return null;

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
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                            {blogPost.title}
                        </h1>
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

                        {/* Image
                        <img
                            src={blogPost.media[0].url}
                            alt={blogPost.title}
                            className="w-full h-full object-cover rounded-lg"
                        />

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none">
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {blogPost.description}
                            </div>
                        </div>
                        <Carousel images={["/angkor.jpg", "/argument.png", "/angkor.jpg"]} />
                    </div>
                </article>
            </div>
        </div>
    );
}
