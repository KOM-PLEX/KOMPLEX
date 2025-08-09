'use client';

import Link from 'next/link';
import ForumCard from '@/components/pages/forum/ForumCard';
import Sidebar from '@/components/pages/forum/Sidebar';

export default function Forum() {
    const forumPosts = [
        {
            id: 1,
            author: {
                name: 'សុខវណ្ណា អ៊ុំ',
                avatar: 'ស'
            },
            time: 'មុន ២ ម៉ោង',
            title: 'ខ្ញុំជាអ្នកឈ្នះអូឡាំពិចគណិតវិទ្យាជាតិ សួរអ្វីក៍បាន!',
            content: 'ស្វាគមន៍! ខ្ញុំឈ្មោះសុខវណ្ណា ជាអ្នកឈ្នះអូឡាំពិចគណិតវិទ្យាជាតិឆ្នាំ២០២៤។ ខ្ញុំចង់ជួយចែករំលែកចំណេះដឹងជាមួយអ្នកទាំងអស់។ សួរអ្វីក៍បានអំពីគណិតវិទ្យា ឬវិធីសាស្ត្ររៀន!',
            image: '/angkor.jpg',
            upvotes: 24,
            comments: 12,
            upvoted: true
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
            upvoted: false
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
            image: '/angkor.jpg',
            upvotes: 15,
            comments: 9,
            upvoted: false
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
            upvoted: true
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
            image: '/angkor.jpg',
            upvotes: 12,
            comments: 7,
            upvoted: false
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
            image: '/angkor.jpg',
            upvotes: 6,
            comments: 4,
            upvoted: false
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="mt-15 md:mt-15 p-5 flex gap-8 max-w-7xl mx-auto">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 mt-14 lg:mt-0">
                    <div className="flex flex-col gap-5">
                        {forumPosts.map((post) => (
                            <ForumCard key={post.id} post={post} isFromBasePage={true} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
