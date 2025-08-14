'use client';

import BlogCard from '@/components/pages/blog/BlogCard';
import Sidebar from '@/components/pages/blog/Sidebar';
import { useEffect, useState } from 'react';

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

export interface BlogPost {
    id: number;
    username: string;
    title: string;
    type: string;
    topic: string;
    viewCount: number;
    likeCount: number;
    createdAt: string;
    updatedAt: string;
    media: {
        url: string;
        mediaType: string;
    }[];
}

export default function Blog() {

    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            const response = await fetch('http://localhost:6969/blogs');
            const data = await response.json();
            setBlogPosts(data);
        }
        fetchBlogPosts();
    }, []);

    if (!blogPosts) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50">


            <div className="mt-15 p-5 flex gap-8 max-w-7xl mx-auto">
                {/* Sidebar */}
                <Sidebar />

                <div className="flex-1 mt-14 lg:mt-0">
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
