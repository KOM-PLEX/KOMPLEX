'use client';

import React from 'react';
import { ThumbsUp, MessageSquare, Settings2, SettingsIcon } from 'lucide-react';

interface SettingsProps {
    showLikes: boolean;
    showComments: boolean;
    onShowLikesChange: (show: boolean) => void;
    onShowCommentsChange: (show: boolean) => void;
}

export default function Settings({ showLikes, showComments, onShowLikesChange, onShowCommentsChange }: SettingsProps) {
    return (
        <div className="lg:bg-white bg-gray-50 rounded-2xl lg:shadow-sm lg:p-6">
            <div className="flex items-center justify-between mb-6 pb-4 ">
                <div className="text-indigo-600 font-semibold text-xl flex gap-3 items-center">
                    <SettingsIcon className="text-indigo-600" />
                    ការកំណត់ការបង្ហាញ
                </div>
            </div>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <ThumbsUp size={20} className="text-gray-600" />
                        <div>
                            <span className="text-sm font-medium text-gray-700">បង្ហាញចំណូលចិត្ត</span>
                            <p className="text-xs text-gray-500">អនុញ្ញាតឱ្យអ្នកមើលចុចចំណូលចិត្ត</p>
                        </div>
                    </div>
                    <button
                        onClick={() => onShowLikesChange(!showLikes)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${showLikes ? 'bg-indigo-600' : 'bg-gray-200'
                            }`}
                    >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${showLikes ? 'translate-x-6' : 'translate-x-1'
                            }`} />
                    </button>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <MessageSquare size={20} className="text-gray-600" />
                        <div>
                            <span className="text-sm font-medium text-gray-700">បង្ហាញមតិតិការ</span>
                            <p className="text-xs text-gray-500">អនុញ្ញាតឱ្យអ្នកមើលធ្វើមតិតិការ</p>
                        </div>
                    </div>
                    <button
                        onClick={() => onShowCommentsChange(!showComments)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${showComments ? 'bg-indigo-600' : 'bg-gray-200'
                            }`}
                    >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${showComments ? 'translate-x-6' : 'translate-x-1'
                            }`} />
                    </button>
                </div>
            </div>
        </div>
    );
}
