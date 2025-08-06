'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ForumCard from '@/components/pages/forum/ForumCard';
import Comment from '@/components/pages/forum/Comment';
import { useState } from 'react';

interface Comment {
    id: number;
    author: { name: string; avatar: string; };
    time: string;
    content: string;
    upvotes: number;
    upvoted: boolean;
    replies?: Comment[];
}

export default function ForumDiscussion({ params }: { params: { id: string } }) {
    const [isCommentInputActive, setIsCommentInputActive] = useState(false);
    const forumPost = {
        id: parseInt(params.id),
        author: { name: 'សុខវណ្ណា អ៊ុំ', avatar: 'ស' },
        time: 'មុន ២ ម៉ោង',
        title: 'ខ្ញុំជាអ្នកឈ្នះអូឡាំពិចគណិតវិទ្យាជាតិ សួរអ្វីក៍បាន!',
        content: 'ស្វាគមន៍! ខ្ញុំឈ្មោះសុខវណ្ណា ជាអ្នកឈ្នះអូឡាំពិចគណិតវិទ្យាជាតិឆ្នាំ២០២៤។ ខ្ញុំចង់ជួយចែករំលែកចំណេះដឹងជាមួយអ្នកទាំងអស់។ សួរអ្វីក៍បានអំពីគណិតវិទ្យា ឬវិធីសាស្ត្ររៀន!',
        image: '',
        upvotes: 24,
        comments: 12,
        upvoted: false
    };

    const comments: Comment[] = [
        {
            id: 1,
            author: { name: 'វណ្ណា សុខ', avatar: 'វ' },
            time: 'មុន ១ ម៉ោង',
            content: 'ស្វាគមន៍! ខ្ញុំចង់សួរអំពីវិធីរៀនគណិតវិទ្យាឱ្យបានល្អ។ តើអ្នកមានគន្លឹះអ្វីខ្លះ?',
            upvotes: 8,
            upvoted: false
        },
        {
            id: 2,
            author: { name: 'ដេរីវេ ម៉ាស្ទើរ', avatar: 'ដ' },
            time: 'មុន ៤៥ នាទី',
            content: 'អ្នកឈ្នះអូឡាំពិច! ខ្ញុំចង់សួរអំពីវិធីដោះស្រាយបញ្ហាលីមីត។ តើអ្នកប្រើវិធីសាស្ត្រអ្វី?',
            upvotes: 12,
            upvoted: false
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto p-5 pt-20">
                {/* Back Button */}
                <div className="mb-6">
                    <Link href="/forum" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
                        <ArrowLeft className="w-4 h-4" />
                        ត្រឡប់ទៅវេទិកា
                    </Link>
                </div>

                {/* Main Post */}
                <div className="mb-6">
                    <ForumCard post={forumPost} isFromBasePage={false} onCommentClick={() => setIsCommentInputActive(!isCommentInputActive)}/>
                </div>

                {/* Comments Section */}
                <Comment comments={comments} focusInput={isCommentInputActive} />
            </div>
        </div>
    );
}