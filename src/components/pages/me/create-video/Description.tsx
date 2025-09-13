'use client';

import React from 'react';
import { BookOpen, FileText } from 'lucide-react';

interface DescriptionProps {
    title: string;
    description: string;
    thumbnail: string;
    onTitleChange: (title: string) => void;
    onDescriptionChange: (description: string) => void;
}

export default function Description({ title, description, thumbnail, onTitleChange, onDescriptionChange }: DescriptionProps) {
    return (
        <div className="lg:bg-white bg-gray-50 rounded-2xl lg:shadow-sm lg:p-6">
            <div className="flex items-center justify-between mb-6 pb-4 ">
                <div className="text-indigo-600 font-semibold text-xl flex gap-3 items-center">
                    <FileText className="text-indigo-600" />
                    ការពិពណ៌នា
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        ចំណងជើងវីដេអូ
                    </label>
                    <input
                        type="text"
                        placeholder="ចំណងជើងវីដេអូ..."
                        value={title}
                        onChange={(e) => onTitleChange(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        ការពិពណ៌នា
                    </label>
                    <textarea
                        placeholder="ពិពណ៌នាអំពីវីដេអូរបស់អ្នក..."
                        value={description}
                        onChange={(e) => onDescriptionChange(e.target.value)}
                        rows={6}
                        className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    />
                </div>

                {/* Thumbnail Preview */}
                {thumbnail && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            រូបភាពតូច
                        </label>
                        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                            <img
                                src={thumbnail}
                                alt="Thumbnail"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
