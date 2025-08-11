'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Book, Trash, Upload } from 'lucide-react';

export default function CreateBlog() {
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

    const handleSubmit = () => {
        if (title.trim() && bodyText.trim()) {
            // Here you would typically send the blog post to your backend
            console.log('Creating blog post:', {
                title,
                bodyText,
                image: selectedImage
            });
            // Reset form
            setTitle('');
            setBodyText('');
            setSelectedImage(null);
            setImagePreview('');
            setTitleCharCount(0);
        }
    };

    return (
        <div className="min-h-screen transition-colors duration-200" style={{ backgroundColor: 'var(--background)' }} id="test-container">
            <div className="max-w-7xl mx-auto p-5 pt-20">
                {/* Header */}
                <div className="mb-6">
                    <Link href="/blog" className="inline-flex items-center gap-2 font-medium transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                        <ArrowLeft className="w-4 h-4" />
                        ត្រឡប់ទៅប្លុក
                    </Link>
                </div>

                {/* Create Post Form */}
                <div className="rounded-2xl shadow-lg p-6 transition-colors duration-200" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }} id="test-form">
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
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
                            className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
                            style={{
                                backgroundColor: 'var(--input-bg)',
                                border: '1px solid var(--input-border)',
                                color: 'var(--text-primary)'
                            }}
                            maxLength={300}
                        />
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                                {titleCharCount}/300
                            </span>
                        </div>
                    </div>

                    {/* Image Upload Area */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
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
                            <div className="relative w-full rounded-lg overflow-hidden" style={{ border: '2px solid var(--input-border)' }}>
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
                                className="w-full h-64 border-2 border-dashed rounded-lg flex flex-col items-center justify-center hover:border-indigo-400 transition-colors duration-200 cursor-pointer"
                                style={{
                                    borderColor: 'var(--input-border)',
                                    backgroundColor: 'var(--input-bg)'
                                }}
                            >
                                <Upload className="w-8 h-8 mb-2" style={{ color: 'var(--text-secondary)' }} />
                                <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>អូសរូបឬ</p>
                                <button className="text-sm font-medium" style={{ color: '#6366f1' }}>
                                    ជ្រើសរើសរូប
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Body Text */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                            មាតិកា
                        </label>
                        <textarea
                            value={bodyText}
                            onChange={(e) => setBodyText(e.target.value)}
                            placeholder="សរសេរមាតិកាប្លុករបស់អ្នក..."
                            className="w-full p-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-colors duration-200"
                            style={{
                                backgroundColor: 'var(--input-bg)',
                                border: '1px solid var(--input-border)',
                                color: 'var(--text-primary)'
                            }}
                            rows={12}
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-3 pt-4" style={{ borderTop: '1px solid var(--card-border)' }}>
                        <button
                            onClick={handleSubmit}
                            disabled={!title.trim() || !bodyText.trim()}
                            className="px-6 py-2 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                            style={{ backgroundColor: '#6366f1' }}
                        >
                            បោះផ្សាយ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 