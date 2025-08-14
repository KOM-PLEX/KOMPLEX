'use client';

import React, { useState } from 'react';
import { Tag, X } from 'lucide-react';

interface TagsProps {
    subjects: string[];
    onSubjectsChange: (subjects: string[]) => void;
}

const suggestedSubjects = [
    'គណិតវិទ្យា', 'រូបវិទ្យា', 'គីមីវិទ្យា', 'ជីវវិទ្យា',
    'អក្សរសាស្ត្រខ្មែរ', 'ប្រវត្តិវិទ្យា', 'ភូមិវិទ្យា', 'ភាសាអង់គ្លេស',
    'អក្សរសិល្ប៍', 'វិទ្យាសាស្ត្រ', 'បច្ចេកវិទ្យា', 'សិល្បៈ'
];

const suggestedTags = [
    'លំហាត់សៀវភៅ', 'លំហាត់កម្សាន្ត', 'លំហាត់អូឡាំព្យាដ', 'លំហាត់សាកល្បង',
    'ជំនួយកិច្ចការផ្ទះ', 'ការត្រៀមប្រលង', 'ការរំលឹកមេរៀន', 'ការដោះស្រាយបញ្ហា',
    'ការរៀនអន្តរកម្ម', 'ការរៀនតាមរូបភាព', 'ជំហានម្តងមួយៗ', 'កម្រិតខ្ពស់',
    'សមស្របសម្រាប់អ្នកចាប់ផ្តើម', 'លំហាត់ប្រកួតប្រជែង', 'ការអនុវត្តជាក់ស្តែង',
    'ទ្រឹស្តី', 'អនុវត្តន៍', 'ការគិតច្នៃប្រឌិត', 'ការវិភាគសុីជម្រៅ'
];

export default function Tags({ subjects, onSubjectsChange }: TagsProps) {
    const [subjectInput, setSubjectInput] = useState('');
    const [tagInput, setTagInput] = useState('');
    const [showSubjectSuggestions, setShowSubjectSuggestions] = useState(false);
    const [showTagSuggestions, setShowTagSuggestions] = useState(false);

    // Handle subjects as tags
    const addSubject = (subject: string) => {
        if (subject.trim() && !subjects.includes(subject.trim())) {
            onSubjectsChange([...subjects, subject.trim()]);
        }
        setSubjectInput('');
        setShowSubjectSuggestions(false);
    };

    const removeSubject = (subjectToRemove: string) => {
        onSubjectsChange(subjects.filter(subject => subject !== subjectToRemove));
    };

    const handleSubjectInputChange = (value: string) => {
        setSubjectInput(value);
        setShowSubjectSuggestions(value.length > 0);
    };

    const handleTagInputChange = (value: string) => {
        setTagInput(value);
        setShowTagSuggestions(value.length > 0);
    };

    const addTag = (tag: string) => {
        if (tag.trim() && !subjects.includes(tag.trim())) {
            onSubjectsChange([...subjects, tag.trim()]);
        }
        setTagInput('');
        setShowTagSuggestions(false);
    };

    const filteredSubjectSuggestions = suggestedSubjects.filter(subject =>
        subject.toLowerCase().includes(subjectInput.toLowerCase()) &&
        !subjects.includes(subject)
    );

    const filteredTagSuggestions = suggestedTags.filter(tag =>
        tag.toLowerCase().includes(tagInput.toLowerCase()) &&
        !subjects.includes(tag)
    );

    return (
        <div className="lg:bg-white bg-gray-50 rounded-2xl lg:shadow-sm lg:p-6">
            <div className="flex items-center justify-between mb-6 pb-4 ">
                <div className="text-indigo-600 font-semibold text-xl flex gap-3 items-center">
                    <Tag className="text-indigo-600" />
                    មុខវិជ្ជា និងស្លាក
                </div>
            </div>
            <div className="space-y-6">
                {/* Subject Input */}
                <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        មុខវិជ្ជា
                    </label>
                    <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent">
                        <Tag size={18} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="វាយបញ្ចូលមុខវិជ្ជា..."
                            value={subjectInput}
                            onChange={(e) => handleSubjectInputChange(e.target.value)}
                            className="flex-1 outline-none"
                        />
                    </div>

                    {/* Subject Suggestions */}
                    {showSubjectSuggestions && filteredSubjectSuggestions.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                            {filteredSubjectSuggestions.map((subject, index) => (
                                <button
                                    key={index}
                                    onClick={() => addSubject(subject)}
                                    className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                                >
                                    {subject}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Tag Input */}
                <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        ស្លាកបន្ថែម
                    </label>
                    <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent">
                        <Tag size={18} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="វាយបញ្ចូលស្លាក..."
                            value={tagInput}
                            onChange={(e) => handleTagInputChange(e.target.value)}
                            className="flex-1 outline-none"
                        />
                    </div>

                    {/* Tag Suggestions */}
                    {showTagSuggestions && filteredTagSuggestions.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                            {filteredTagSuggestions.map((tag, index) => (
                                <button
                                    key={index}
                                    onClick={() => addTag(tag)}
                                    className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Selected Subject Tags */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        ស្លាកដែលបានជ្រើសរើស
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {subjects.map((subject, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                            >
                                {subject}
                                <button
                                    onClick={() => removeSubject(subject)}
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
    );
}
