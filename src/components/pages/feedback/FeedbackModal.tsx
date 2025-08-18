'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import { X, ImagePlus, Loader2, ChevronDown, Check, MessageCircle } from 'lucide-react';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';

type FeedbackTypeOption =
    | 'bug'
    | 'wrong_content'
    | 'issue'
    | 'question'
    | 'feature_request'
    | 'other';

interface FeedbackModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
    const [feedbackType, setFeedbackType] = useState<FeedbackTypeOption>('bug');
    const [customType, setCustomType] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const maxImages = 2;

    const options: { value: FeedbackTypeOption; label: string }[] = useMemo(
        () => [
            { value: 'bug', label: 'បញ្ហាប្រើប្រាស់' },
            { value: 'wrong_content', label: 'មាតិកាមិនត្រឹមត្រូវ' },
            { value: 'question', label: 'សំណួរ' },
            { value: 'feature_request', label: 'ស្នើមុខងារថ្មី' },
            { value: 'other', label: 'ផ្សេងទៀត' },
        ],
        []
    );

    useEffect(() => {
        if (!isOpen) return;
        setFeedbackType('bug');
        setCustomType('');
        setContent('');
        setSelectedImages([]);
        setImagePreviews([]);
        setIsSubmitting(false);
    }, [isOpen]);

    const handleOpenFilePicker = () => {
        fileInputRef.current?.click();
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        const remainingSlots = maxImages - imagePreviews.length;
        if (remainingSlots <= 0) return;
        const filesToAdd = files.slice(0, remainingSlots);

        if (filesToAdd.length > 0) {
            const newImages = [...selectedImages, ...filesToAdd];
            setSelectedImages(newImages);

            filesToAdd.forEach((file) => {
                const reader = new FileReader();
                reader.onload = (ev) => {
                    setImagePreviews((prev) => [...prev, (ev.target?.result as string) || '']);
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const removeImage = (index: number) => {
        setSelectedImages((prev) => prev.filter((_, i) => i !== index));
        setImagePreviews((prev) => prev.filter((_, i) => i !== index));
        if (fileInputRef.current) fileInputRef.current.value = '';
    };



    const canSubmit = useMemo(() => {
        const typeValid = feedbackType !== 'other' ? Boolean(feedbackType) : customType.trim().length > 0;
        const contentValid = content.trim().length > 0;
        return typeValid && contentValid && !isSubmitting;
    }, [feedbackType, customType, content, isSubmitting]);

    const handleSubmit = async () => {
        if (!canSubmit) return;
        try {
            setIsSubmitting(true);

            //! use json for now, form data later when backend supports images
            const body = {
                type: feedbackType,
                content: content,
                // files: selectedImages
            }
            // const formData = new FormData();
            // const finalType = feedbackType === 'other' ? customType.trim() : feedbackType;

            // formData.append('type', finalType);
            // formData.append('content', content);
            // selectedImages.forEach((file) => formData.append('files', file));

            await axios.post("http://localhost:6969/feedback", body);

            onClose();
        } catch (error) {
            console.error('Failed to submit feedback:', error);
            alert('Failed to submit feedback. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/40" onClick={onClose} />

            <div className="relative z-10 w-full max-w-lg mx-auto bg-white rounded-2xl shadow-xl border border-gray-200">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                        <MessageCircle className="w-5 h-5 text-indigo-500" />
                        ផ្ញើមតិយោបល់
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
                        aria-label="Close feedback modal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">ប្រភេទ</label>
                        <Listbox value={feedbackType} onChange={setFeedbackType}>
                            <div className="relative">
                                <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-3 pl-4 pr-10 text-left shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                                    <span className="block truncate text-gray-900">
                                        {options.find(opt => opt.value === feedbackType)?.label}
                                    </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        {options.map((option) => (
                                            <Listbox.Option
                                                key={option.value}
                                                className={({ active }) =>
                                                    `relative cursor-pointer select-none py-3 pl-10 pr-4 ${active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'
                                                    }`
                                                }
                                                value={option.value}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                            {option.label}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                <Check className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                        {feedbackType === 'other' && (
                            <input
                                type="text"
                                value={customType}
                                onChange={(e) => setCustomType(e.target.value)}
                                placeholder="បញ្ចូលប្រភេទផ្ទាល់ខ្លួន"
                                className="mt-3 w-full px-4 py-3 bg-white rounded-lg text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            />
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">រូបភាព (អតិបរមា {maxImages})</label>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                        <div className="grid grid-cols-2 gap-4">
                            {imagePreviews.map((preview, index) => (
                                <div key={index} className="relative aspect-video rounded-xl overflow-hidden border-2 border-gray-200 bg-gray-50">
                                    <Image
                                        src={preview}
                                        alt={`មើលជាមុន ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                    <button
                                        onClick={() => removeImage(index)}
                                        className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
                                        aria-label={`លុបរូប ${index + 1}`}
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                            {imagePreviews.length < maxImages && (
                                <button
                                    type="button"
                                    onClick={handleOpenFilePicker}
                                    className="aspect-video border-2 border-dashed border-indigo-300 rounded-xl flex flex-col items-center justify-center hover:border-indigo-500 hover:bg-indigo-50 transition-all text-indigo-600"
                                >
                                    <ImagePlus className="w-8 h-8 mb-2" />
                                    <span className="text-sm font-medium">បន្ថែមរូប</span>
                                </button>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">មតិយោបល់</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="ពិពណ៌នាអំពីបញ្ហា/ប្រធានបទ/សំណួរ ឬចែករំលែកមតិយោបល់របស់អ្នក..."
                            className="w-full p-4 rounded-xl bg-white border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all"
                            rows={6}
                        />
                    </div>
                </div>

                <div className="p-6 border-t border-gray-200 flex items-center justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
                        disabled={isSubmitting}
                    >
                        បោះបង់
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={!canSubmit}
                        className={`px-6 py-3 rounded-xl text-white flex items-center gap-2 font-medium transition-all ${canSubmit ? 'bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-xl' : 'bg-indigo-400 cursor-not-allowed'
                            }`}
                    >
                        {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                        ផ្ញើ
                    </button>
                </div>
            </div>
        </div>
    );
}


