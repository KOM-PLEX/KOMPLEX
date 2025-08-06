'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BlogPost {
    id: number;
    author: {
        name: string;
        avatar: string;
    };
    date: string;
    title: string;
    image: string;
    content: string;
}

export default function BlogPost() {
    const params = useParams();
    const id = params.id as string;

    // Mock blog post data - in a real app, this would come from an API or database
    const blogPost: BlogPost = {
        id: parseInt(id),
        author: {
            name: 'សុខវណ្ណា អ៊ុំ',
            avatar: 'ស'
        },
        date: 'មុន ៣ ថ្ងៃ',
        title: 'បទពិសោធន៍របស់ខ្ញុំពីសិស្សដែលបរាជ័យទៅជាសិស្ស A',
        image: '/angkor.jpg',
        content: `
            ស្វាគមន៍! ខ្ញុំឈ្មោះសុខវណ្ណា ជាអ្នកឈ្នះអូឡាំពិចគណិតវិទ្យាជាតិឆ្នាំ២០២៤។ នៅក្នុងអត្ថបទនេះ ខ្ញុំចង់ចែករំលែកបទពិសោធន៍របស់ខ្ញុំពីរបៀបដែលខ្ញុំបានផ្លាស់ប្តូរពីសិស្សដែលបរាជ័យទៅជាសិស្ស A ក្នុងគណិតវិទ្យា។

            ការចាប់ផ្តើមដំណើរការ ខ្ញុំជាសិស្សដែលតែងតែបានពិន្ទុទាបក្នុងគណិតវិទ្យា។ ខ្ញុំមិនចូលចិត្តគណិតវិទ្យាទេ និងគិតថាវាពិបាកណាស់។ ប៉ុន្តែនៅពេលដែលខ្ញុំបានជួបគ្រូដែលមានវិធីសាស្ត្របង្រៀនល្អ ខ្ញុំបានចាប់ផ្តើមយល់ថាគណិតវិទ្យាមិនមែនជាអ្វីដែលពិបាកដូចដែលខ្ញុំគិតទេ។

            វិធីសាស្ត្រដែលជួយខ្ញុំបានផ្លាស់ប្តូរ៖

            ១. ការយកចិត្តទុកដាក់លើមូលដ្ឋានគ្រឹះ
            ខ្ញុំបានចាប់ផ្តើមពីការយល់ច្បាប់មូលដ្ឋានគ្រឹះឱ្យបានល្អ ដូចជាការបូក ដក គុណ ចែក និងច្បាប់អិចស្បូណង់ស្យែល។

            ២. ការអនុវត្តជាប្រចាំ
            ខ្ញុំបានធ្វើលំហាត់គណិតវិទ្យាជាប្រចាំ យ៉ាងហោចណាស់ ៣០ នាទីក្នុងមួយថ្ងៃ។ ការអនុវត្តជាប្រចាំជួយឱ្យខ្ញុំចងចាំរូបមន្ត និងវិធីដោះស្រាយបញ្ហាបានល្អ។

            ៣. ការស្វែងរកជំនួយ
            ខ្ញុំមិនខ្មាសអៀនក្នុងការសួរសំណួរនៅពេលដែលខ្ញុំមិនយល់។ ខ្ញុំបានស្វែងរកជំនួយពីគ្រូ មិត្តភក្តិ និងអ៊ីនធឺណិត។

            ៤. ការប្រើប្រាស់ឧបករណ៍ជំនួយ
            ខ្ញុំបានប្រើប្រាស់ឧបករណ៍ជំនួយផ្សេងៗ ដូចជាកាលគណនា ក្រាហ្វិក និងកម្មវិធីគណិតវិទ្យាដើម្បីជួយយល់គំនិតដែលពិបាក។

            លទ្ធផលដែលបាន៖
            បន្ទាប់ពីព្យាយាមជាប្រចាំអស់រយៈពេល ៦ ខែ ខ្ញុំបានផ្លាស់ប្តូរពីពិន្ទុ C ទៅជាពិន្ទុ A ក្នុងគណិតវិទ្យា។ ខ្ញុំក៏បានចូលរួមការប្រកួតអូឡាំពិចគណិតវិទ្យាជាតិ និងបានជាប់ជាអ្នកឈ្នះ។

            សេចក្តីសន្និដ្ឋាន៖
            គណិតវិទ្យាមិនមែនជាអ្វីដែលអ្នកត្រូវមានអំណោយភាពពិសេសទេ។ វាគ្រាន់តែត្រូវការការព្យាយាម ការយកចិត្តទុកដាក់ និងវិធីសាស្ត្រត្រឹមត្រូវ។ ប្រសិនបើអ្នកចង់ធ្វើឱ្យគណិតវិទ្យាកាន់តែល្អ សូមចាប់ផ្តើមពីថ្ងៃនេះ និងអនុវត្តជាប្រចាំ។

            សូមចែករំលែកបទពិសោធន៍របស់អ្នកជាមួយខ្ញុំផង! តើអ្នកមានវិធីសាស្ត្រអ្វីខ្លះដើម្បីរៀនគណិតវិទ្យាឱ្យបានល្អ?
        `
    };

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
                    {/* Hero Image */}
                    <div className="w-full h-[500px] relative">
                        <img
                            src={blogPost.image}
                            alt={blogPost.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                        {/* Header */}
                        <div className="mb-6 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                                    {blogPost.author.avatar}
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className="font-semibold text-gray-900">
                                        {blogPost.author.name}
                                    </div>
                                    |
                                    <div className="text-gray-500 text-sm">
                                        {blogPost.date}
                                    </div>
                                </div>
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                {blogPost.title}
                            </h1>

                        </div>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none">
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {blogPost.content}
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
