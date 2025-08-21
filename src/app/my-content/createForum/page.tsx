'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, Trash, Upload } from 'lucide-react';
import Sidebar from '@/components/pages/my-content/Sidebar';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function CreateForum() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [bodyText, setBodyText] = useState('');
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>('');
    const [titleCharCount, setTitleCharCount] = useState(0);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTitle(value);
        setTitleCharCount(value.length);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const removeImage = () => {
        setSelectedImage(null);
        setImagePreview('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSubmit = async () => {
        if (title.trim() && bodyText.trim()) {

            //! TODO: handle image upload

            const response = await axios.post('http://localhost:6969/user-content/forums', {
                title,
                description: bodyText,
            });

            console.log(response);


            setTitle('');
            setBodyText('');
            setSelectedImage(null);
            setImagePreview('');
            setTitleCharCount(0);

            router.push('/my-content/forums');
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

                        {/* Image Upload Area */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                រូបគំរូ
                            </label>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                            />

                            {imagePreview ? (
                                // Image Preview
                                <div className="relative w-full border-2 border-gray-300 rounded-lg overflow-hidden">
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="w-full h-full object-cover"
                                    />
                                    <button
                                        onClick={removeImage}
                                        className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                                    >
                                        <Trash className="w-4 h-4" />
                                    </button>
                                </div>
                            ) : (
                                // Upload Area
                                <div
                                    onClick={handleImageClick}
                                    className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:border-indigo-400 transition-colors duration-200 cursor-pointer"
                                >
                                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                                    <p className="text-gray-500 text-sm mb-1">អូសរូបឬ</p>
                                    <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                                        ជ្រើសរើសរូប
                                    </button>
                                </div>
                            )}
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
