'use client';

import { useState, useRef, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Book, Trash, Upload, Plus, Tag, X, Save, Edit, Eye } from 'lucide-react';
import axios from 'axios';
import Sidebar from '@/components/pages/my-content/Sidebar';
import Carousel from '@/components/common/Carousel';

interface BlogPost {
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

// Skeleton Loading Component for Display Mode
function BlogPostSkeleton() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto p-5 pt-20">
                {/* Back Button Skeleton */}
                <div className="mb-6">
                    <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
                </div>

                {/* Blog Post Skeleton */}
                <article className="bg-white rounded-2xl shadow-lg shadow-indigo-500/10 border border-indigo-500/10 overflow-hidden">
                    <div className="p-6 md:p-8">
                        {/* Title Skeleton */}
                        <div className="mb-2">
                            <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse"></div>
                        </div>

                        {/* User Info Skeleton */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
                            <div className="flex items-center gap-2">
                                <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                                <div className="w-2 h-4 bg-gray-200 rounded animate-pulse"></div>
                                <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                        </div>

                        {/* Image/Carousel Skeleton */}
                        <div className="w-full h-64 bg-gray-200 rounded-lg animate-pulse mb-6"></div>

                        {/* Content Skeleton */}
                        <div className="space-y-3">
                            <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-4/5 h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default function BlogPost() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const [blogPost, setBlogPost] = useState<BlogPost>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);

    // Edit form states
    const [title, setTitle] = useState('');
    const [bodyText, setBodyText] = useState('');
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [titleCharCount, setTitleCharCount] = useState(0);
    const [blogTypes, setBlogTypes] = useState<string[]>([]);
    const [topics, setSelectedTopics] = useState<string[]>([]);
    const [isSaving, setIsSaving] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const suggestedBlogTypes = ['បទពិសោធន៍', 'វិធីសាស្ត្ររៀន', 'រឿងរ៉ាវ', 'គន្លឹះ'];
    const suggestedTopics = ['គណិតវិទ្យា', 'រូបវិទ្យា', 'គីមីវិទ្យា', 'ជីវវិទ្យា', 'អូឡាំពិច'];

    // Fetch existing blog data
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`http://localhost:6969/blogs/${id}`);
                const blog = response.data;

                setBlogPost(blog);

                // Populate form with existing data for edit mode
                setTitle(blog.title);
                setTitleCharCount(blog.title.length);
                setBodyText(blog.description);
                setBlogTypes(blog.type ? [blog.type] : []);
                setSelectedTopics(blog.topic ? [blog.topic] : []);

                // Set existing images as previews
                if (blog.media && blog.media.length > 0) {
                    setImagePreviews(blog.media.map((media: { url: string; mediaType: string }) => media.url));
                }
            } catch (error) {
                console.error('Error fetching blog:', error);
                setError('មានបញ្ហាកើតឡើងពេលផ្ទុកប្លុក សូមព្យាយាមម្តងទៀត');
            } finally {
                setIsLoading(false);
            }
        };

        if (id) {
            fetchBlog();
        }
    }, [id]);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTitle(value);
        setTitleCharCount(value.length);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        const remainingSlots = 4 - selectedImages.length;
        const filesToAdd = files.slice(0, remainingSlots);

        if (filesToAdd.length > 0) {
            const newImages = [...selectedImages, ...filesToAdd];
            setSelectedImages(newImages);

            // Generate previews for new images
            filesToAdd.forEach(file => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setImagePreviews(prev => [...prev, e.target?.result as string]);
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const handleImageClick = () => {
        if (selectedImages.length < 4) {
            fileInputRef.current?.click();
        }
    };

    const removeImage = (index: number) => {
        setSelectedImages(prev => prev.filter((_, i) => i !== index));
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const addBlogType = (type: string) => {
        if (type.trim() && !blogTypes.includes(type)) {
            setBlogTypes([type.trim()]);
        }
    };

    const removeBlogType = () => {
        setBlogTypes([]);
    };

    const addTopic = (topic: string) => {
        if (topic.trim() && !topics.includes(topic)) {
            setSelectedTopics([topic.trim()]);
        }
    };

    const removeTopic = () => {
        setSelectedTopics([]);
    };

    const handleSave = async () => {
        if (!title.trim() || !bodyText.trim()) {
            alert('សូមបំពេញចំណងជើងនិងមាតិកា');
            return;
        }

        try {
            setIsSaving(true);

            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', bodyText);
            selectedImages.forEach(f => formData.append('files', f));
            formData.append('type', blogTypes[0] || '');
            formData.append('topic', topics[0] || '');

            await axios.patch(`http://localhost:6969/blogs/${id}`, formData);

            // Refresh blog data and switch back to display mode
            const response = await axios.get(`http://localhost:6969/blogs/${id}`);
            setBlogPost(response.data);
            setIsEditMode(false);
        } catch (error) {
            console.error('Error updating blog:', error);
            alert('មានបញ្ហាកើតឡើងពេលរក្សាទុកប្លុក សូមព្យាយាមម្តងទៀត');
        } finally {
            setIsSaving(false);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:6969/blogs/${id}`);
            router.push('/my-content/blogs');
        } catch (error) {
            console.error('Error deleting blog:', error);
            alert('មានបញ្ហាកើតឡើងពេលលុបប្លុក សូមព្យាយាមម្តងទៀត');
        }
    };

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

    // Display Mode
    if (!isEditMode) {
        return (
            <div className="flex min-h-screen transition-colors duration-200 bg-gray-50">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 ml-64 pt-20">
                    <div className="max-w-7xl mx-auto p-5">
                        {/* Header with Back Button and Edit Button */}
                        <div className="mb-6 flex items-center justify-between">
                            <Link href="/my-content/blogs" className="inline-flex items-center gap-2 font-medium transition-colors duration-200 text-gray-700">
                                <ArrowLeft className="w-4 h-4" />
                                ត្រឡប់ទៅប្លុករបស់ខ្ញុំ
                            </Link>
                            <div className='flex gap-2 items-center'>
                                <button
                                    onClick={() => handleDelete()}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                                >
                                    <Trash className="w-4 h-4" />
                                    លុប
                                </button>
                                <button
                                    onClick={() => setIsEditMode(true)}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                                >
                                    <Edit className="w-4 h-4" />
                                    កែប្រែ
                                </button>
                            </div>
                        </div>

                        {/* Blog Post Display */}
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

                                {/* Media Carousel */}
                                {blogPost.media.length > 0 && (
                                    <div className="mb-6">
                                        <Carousel images={blogPost.media.map(media => media.url)} />
                                    </div>
                                )}

                                {/* Article Content */}
                                <div className="prose prose-lg max-w-none">
                                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                        {blogPost.description}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        );
    }

    // Edit Mode
    return (
        <div className="flex min-h-screen transition-colors duration-200 bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 ml-64 pt-20">
                <div className="max-w-7xl mx-auto p-5">
                    {/* Header */}
                    <div className="mb-6 flex items-center justify-between">
                        <Link href="/my-content/blogs" className="inline-flex items-center gap-2 font-medium transition-colors duration-200 text-gray-700">
                            <ArrowLeft className="w-4 h-4" />
                            ត្រឡប់ទៅប្លុករបស់ខ្ញុំ
                        </Link>
                        <button
                            onClick={() => setIsEditMode(false)}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                        >
                            <Eye className="w-4 h-4" />
                            មើល
                        </button>
                    </div>

                    {/* Edit Post Form */}
                    <div className="rounded-2xl shadow-lg p-6 transition-colors duration-200 bg-white border border-gray-200">
                        {/* Header */}
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold mb-2 flex items-center gap-2 text-gray-700">
                                <Book className='w-6 h-6' style={{ color: '#6366f1' }} />
                                កែប្រែប្លុក
                            </h1>
                        </div>

                        {/* Title Input */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                                ចំណងជើង
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={handleTitleChange}
                                placeholder="សរសេរចំណងជើងប្លុករបស់អ្នក..."
                                className="w-full px-4 py-3 bg-indigo-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 border border-gray-200"
                                maxLength={300}
                            />
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-xs text-gray-500">
                                    {titleCharCount}/300
                                </span>
                            </div>
                        </div>

                        {/* Blog Type and Topic Selection */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            {/* Blog Type Selection */}
                            <div className="lg:bg-white bg-gray-50 rounded-2xl lg:shadow-sm lg:p-6">
                                <div className="flex items-center justify-between mb-6 pb-4">
                                    <div className="text-indigo-600 font-semibold text-xl flex gap-3 items-center">
                                        <Tag className="text-indigo-600" />
                                        ប្រភេទប្លុក
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    {/* Blog Type Input */}
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ប្រភេទប្លុក
                                        </label>
                                        <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent">
                                            <Tag size={18} className="text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="វាយបញ្ចូលប្រភេទប្លុក..."
                                                className="flex-1 outline-none"
                                                onKeyPress={(e) => {
                                                    if (e.key === 'Enter') {
                                                        const target = e.target as HTMLInputElement;
                                                        if (target.value.trim() && !blogTypes.includes(target.value.trim())) {
                                                            addBlogType(target.value.trim());
                                                            target.value = '';
                                                        }
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Blog Type Suggestions */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            អនុសាសន៍
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {suggestedBlogTypes.map((type) => (
                                                <button
                                                    key={type}
                                                    onClick={() => addBlogType(type)}
                                                    disabled={blogTypes.includes(type)}
                                                    className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Selected Blog Type Tags */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ប្រភេទដែលបានជ្រើសរើស
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {blogTypes.map((type, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg border border-indigo-200"
                                                >
                                                    {type}
                                                    <button
                                                        onClick={removeBlogType}
                                                        className="text-indigo-600 hover:text-indigo-800"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Topic Selection */}
                            <div className="lg:bg-white bg-gray-50 rounded-2xl lg:shadow-sm lg:p-6">
                                <div className="flex items-center justify-between mb-6 pb-4">
                                    <div className="text-indigo-600 font-semibold text-xl flex gap-3 items-center">
                                        <Tag className="text-indigo-600" />
                                        ប្រធានបទ
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    {/* Topic Input */}
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ប្រធានបទ
                                        </label>
                                        <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent">
                                            <Tag size={18} className="text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="វាយបញ្ចូលប្រធានបទ..."
                                                className="flex-1 outline-none"
                                                onKeyPress={(e) => {
                                                    if (e.key === 'Enter') {
                                                        const target = e.target as HTMLInputElement;
                                                        if (target.value.trim() && !topics.includes(target.value.trim())) {
                                                            addTopic(target.value.trim());
                                                            target.value = '';
                                                        }
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Topic Suggestions */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            អនុសាសន៍
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {suggestedTopics.map((topic) => (
                                                <button
                                                    key={topic}
                                                    onClick={() => addTopic(topic)}
                                                    disabled={topics.includes(topic)}
                                                    className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {topic}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Selected Topic Tags */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ប្រធានបទដែលបានជ្រើសរើស
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {topics.map((topic, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg border border-indigo-200"
                                                >
                                                    {topic}
                                                    <button
                                                        onClick={removeTopic}
                                                        className="text-indigo-600 hover:text-indigo-800"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Upload Area */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2 text-gray-700">
                                រូបគំរូ (អតិបរមា 4 រូប)
                            </label>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleImageUpload}
                                className="hidden"
                            />

                            {/* 2x2 Grid for Images */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {imagePreviews.map((preview, index) => (
                                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden border border-gray-200">
                                        <img
                                            src={preview}
                                            alt={`Preview ${index + 1}`}
                                            className="w-full h-full object-contain"
                                        />
                                        <button
                                            onClick={() => removeImage(index)}
                                            className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200 cursor-pointer"
                                        >
                                            <Trash className="w-3 h-3" />
                                        </button>
                                    </div>
                                ))}

                                {/* Upload Button (if less than 4 images) */}
                                {imagePreviews.length < 4 && (
                                    <div
                                        onClick={handleImageClick}
                                        className="aspect-video border-2 border-dashed rounded-lg flex flex-col items-center justify-center hover:border-indigo-400 transition-colors duration-200 cursor-pointer"
                                    >
                                        <Plus className="w-6 h-6 mb-2 text-gray-500" />
                                        <p className="text-xs text-gray-500 text-center">អូសរូបឬ</p>
                                        <button className="text-xs font-medium" style={{ color: '#6366f1' }}>
                                            ជ្រើសរើសរូប
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Image Count Info */}
                            <div className="mt-2 text-xs text-gray-500">
                                {imagePreviews.length}/4 រូប
                            </div>
                        </div>

                        {/* Body Text */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2 text-gray-700">
                                មាតិកា
                            </label>
                            <textarea
                                value={bodyText}
                                onChange={(e) => setBodyText(e.target.value)}
                                placeholder="សរសេរមាតិកាប្លុករបស់អ្នក..."
                                className="w-full p-4 rounded-lg bg-indigo-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-colors duration-200"
                                rows={12}
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                            <button
                                onClick={() => setIsEditMode(false)}
                                className="px-6 py-2 bg-gray-500 text-white rounded-lg transition-colors duration-200 hover:bg-gray-600 font-medium"
                            >
                                បោះបង់
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={!title.trim() || !bodyText.trim() || isSaving}
                                className="px-6 py-2 bg-indigo-500 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center gap-2"
                            >
                                {isSaving ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        កំពុងរក្សាទុក...
                                    </>
                                ) : (
                                    <>
                                        <Save className="w-4 h-4" />
                                        រក្សាទុក
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 