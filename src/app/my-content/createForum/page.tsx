'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, Trash, Upload, Tag, X, Plus } from 'lucide-react';
import Sidebar from '@/components/pages/my-content/Sidebar';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function CreateForum() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [bodyText, setBodyText] = useState('');
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [titleCharCount, setTitleCharCount] = useState(0);
    const [forumTypes, setForumTypes] = useState<string[]>([]);
    const [topics, setTopics] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const suggestedForumTypes = ['បទពិសោធន៍', 'វិធីសាស្ត្ររៀន', 'រឿងរ៉ាវ', 'គន្លឹះ'];
    const suggestedTopics = ['គណិតវិទ្យា', 'រូបវិទ្យា', 'គីមីវិទ្យា', 'ជីវវិទ្យា', 'អូឡាំពិច'];

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

    const addForumType = (type: string) => {
        if (type.trim() && !forumTypes.includes(type)) {
            setForumTypes([type.trim()]);
        }
    };

    const removeForumType = () => {
        setForumTypes([]);
    };

    const addTopic = (topic: string) => {
        if (topic.trim() && !topics.includes(topic)) {
            setTopics([topic.trim()]);
        }
    };

    const removeTopic = () => {
        setTopics([]);
    };

    const handleSubmit = async () => {
        if (!title.trim() || !bodyText.trim()) {
            alert('សូមបំពេញចំណងជើងនិងមាតិកា');
            return;
        }

        try {
            // Build multipart form data per controller
            const formData = new FormData();
            formData.append('title', title.trim());
            formData.append('description', bodyText.trim());

            // ! TO CHANGE
            formData.append('type', 'biology');
            formData.append('topic', 'idk');

            // Add images if selected (field name must be 'images' per multer)
            if (selectedImages.length > 0) {
                selectedImages.forEach((file) => {
                    formData.append('images', file);
                });
            }

            const response = await axios.post('http://localhost:6969/user-content/forums', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            console.log('Forum created:', response.data);

            // Reset form and redirect
            setTitle('');
            setBodyText('');
            setSelectedImages([]);
            setImagePreviews([]);
            setTitleCharCount(0);
            setForumTypes([]);
            setTopics([]);

            router.push('/my-content/forums');
        } catch (error) {
            console.error('Error creating forum:', error);
            alert('មានបញ្ហាកើតឡើងពេលបង្កើតវេទិកា សូមព្យាយាមម្តងទៀត');
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
                <div className="max-w-7xl mx-auto p-5">
                    {/* Header */}
                    <div className="mb-6">
                        <Link href="/my-content/forums" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
                            <ArrowLeft className="w-4 h-4" />
                            ត្រឡប់ទៅវេទិកា
                        </Link>
                    </div>

                    {/* Create Post Form */}
                    <div className="bg-white rounded-2xl shadow-lg shadow-indigo-500/10 border border-indigo-500/10 p-6">
                        {/* Header */}
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2"><MessageCircle className='w-6 h-6 text-indigo-500' />បង្កើតការឆ្លើយតប</h1>
                        </div>

                        {/* Title Input */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                ចំណងជើង
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={handleTitleChange}
                                placeholder="សរសេរចំណងជើងការឆ្លើយតបរបស់អ្នក..."
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                maxLength={300}
                            />
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-xs text-gray-500">
                                    {titleCharCount}/300
                                </span>
                            </div>
                        </div>

                        {/* Forum Type and Topic Selection */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            {/* Forum Type Selection */}
                            <div className="lg:bg-white bg-gray-50 rounded-2xl lg:shadow-sm lg:p-6">
                                <div className="flex items-center justify-between mb-6 pb-4">
                                    <div className="text-indigo-600 font-semibold text-xl flex gap-3 items-center">
                                        <Tag className="text-indigo-600" />
                                        ប្រភេទវេទិកា
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    {/* Forum Type Input */}
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ប្រភេទវេទិកា
                                        </label>
                                        <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent">
                                            <Tag size={18} className="text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="វាយបញ្ចូលប្រភេទវេទិកា..."
                                                className="flex-1 outline-none"
                                                onKeyPress={(e) => {
                                                    if (e.key === 'Enter') {
                                                        const target = e.target as HTMLInputElement;
                                                        if (target.value.trim() && !forumTypes.includes(target.value.trim())) {
                                                            addForumType(target.value.trim());
                                                            target.value = '';
                                                        }
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Forum Type Suggestions */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            អនុសាសន៍
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {suggestedForumTypes.map((type) => (
                                                <button
                                                    key={type}
                                                    onClick={() => addForumType(type)}
                                                    disabled={forumTypes.includes(type)}
                                                    className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Selected Forum Type Tags */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ប្រភេទដែលបានជ្រើសរើស
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {forumTypes.map((type, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg border border-indigo-200"
                                                >
                                                    {type}
                                                    <button
                                                        onClick={removeForumType}
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
                            <label className="block text-sm font-medium text-gray-700 mb-2">
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
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                មាតិកា
                            </label>
                            <textarea
                                value={bodyText}
                                onChange={(e) => setBodyText(e.target.value)}
                                placeholder="សរសេរមាតិកាការឆ្លើយតបរបស់អ្នក..."
                                className="w-full p-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                                rows={12}
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                            <button
                                onClick={handleSubmit}
                                disabled={!title.trim() || !bodyText.trim()}
                                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
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
