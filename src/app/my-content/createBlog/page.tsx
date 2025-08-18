'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Book, Trash, Upload, Plus, Tag, X } from 'lucide-react';
import axios from 'axios';
import Sidebar from '@/components/pages/my-content/Sidebar';

export default function CreateBlog() {
    const [title, setTitle] = useState('');
    const [bodyText, setBodyText] = useState('');
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [titleCharCount, setTitleCharCount] = useState(0);
    const [blogTypes, setBlogTypes] = useState<string[]>([]);
    const [topics, setTopics] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const suggestedBlogTypes = ['បទពិសោធន៍', 'វិធីសាស្ត្ររៀន', 'រឿងរ៉ាវ', 'គន្លឹះ'];
    const suggestedTopics = ['គណិតវិទ្យា', 'រូបវិទ្យា', 'គីមីវិទ្យា', 'ជីវវិទ្យា', 'អូឡាំពិច'];

    const handlePostBlog = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', bodyText);
        selectedImages.forEach(f => formData.append('files', f));

        formData.append('type', 'education');
        formData.append('topic', 'biology');

        try {
            const response = await axios.post('http://localhost:6969/blogs', formData);
            console.log('Blog post created:', response.data);
        } catch (error) {
            console.error('Error creating blog post:', error);
        }
    }

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

    return (
        <div className="flex min-h-screen transition-colors duration-200 bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 ml-64 pt-20">
                <div className="max-w-7xl mx-auto p-5">
                    {/* Header */}
                    <div className="mb-6">
                        <Link href="/my-content/blogs" className="inline-flex items-center gap-2 font-medium transition-colors duration-200 text-gray-700">
                            <ArrowLeft className="w-4 h-4" />
                            ត្រឡប់ទៅប្លុក
                        </Link>
                    </div>

                    {/* Create Post Form */}
                    <div className="transition-colors duration-200 " id="test-form">
                        {/* Header */}
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold mb-2 flex items-center gap-2 text-gray-700">
                                <Book className='w-6 h-6' style={{ color: '#6366f1' }} />
                                បង្កើតប្លុក
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
                                className="w-full px-4 py-3 bg-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 border border-gray-200"
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
                                        ប្រភេទប្លោក
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    {/* Blog Type Input */}
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ប្រភេទប្លោក
                                        </label>
                                        <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent">
                                            <Tag size={18} className="text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="វាយបញ្ចូលប្រភេទប្លោក..."
                                                className="flex-1 outline-none"
                                                onKeyPress={(e) => {
                                                    if (e.key === 'Enter') {
                                                        const target = e.target as HTMLInputElement;
                                                        if (target.value.trim() && !blogTypes.includes(target.value.trim())) {
                                                            setBlogTypes([...blogTypes, target.value.trim()]);
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
                                                    onClick={() => {
                                                        if (!blogTypes.includes(type)) {
                                                            setBlogTypes([...blogTypes, type]);
                                                        }
                                                    }}
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
                                                    className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                                                >
                                                    {type}
                                                    <button
                                                        onClick={() => setBlogTypes(blogTypes.filter(t => t !== type))}
                                                        className="text-indigo-600 hover:text-indigo-800 transition-colors"
                                                    >
                                                        <X size={14} />
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
                                                            setTopics([...topics, target.value.trim()]);
                                                            target.value = '';
                                                        }
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Topic Suggestions */}
                                    <div>
                                        <label className="block text.sm font-medium text-gray-700 mb-2">
                                            អនុសាសន៍
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {suggestedTopics.map((topic) => (
                                                <button
                                                    key={topic}
                                                    onClick={() => {
                                                        if (!topics.includes(topic)) {
                                                            setTopics([...topics, topic]);
                                                        }
                                                    }}
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
                                                    className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                                                >
                                                    {topic}
                                                    <button
                                                        onClick={() => setTopics(topics.filter(t => t !== topic))}
                                                        className="text-indigo-600 hover:text-indigo-800 transition-colors"
                                                    >
                                                        <X size={14} />
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
                                className="w-full p-4 rounded-lg bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-colors duration-200"
                                rows={12}
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                            <button
                                onClick={handlePostBlog}
                                disabled={!title.trim() || !bodyText.trim()}
                                className="px-6 py-2 bg-indigo-500 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                            >
                                បោះផ្សាយ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 