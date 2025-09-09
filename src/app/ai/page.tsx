'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, ChevronUp } from 'lucide-react';
import { Listbox, Transition } from '@headlessui/react';
import { callAiAndWriteToHistory } from '@/services/me/ai';
import MarkdownRenderer from '@/components/helper/MarkDownRenderer';

interface Message {
    id: string;
    content: string;
    sender: 'user' | 'ai';
    timestamp: Date;
}

const languages = [
    { id: 'kh', name: 'ភាសាខ្មែរ' },
    { id: 'en', name: 'English' },
];

export default function AIChat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            content: inputMessage,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const currentInput = inputMessage;
        setInputMessage('');
        setIsLoading(true);

        try {
            const response = await callAiAndWriteToHistory(currentInput, selectedLanguage.id);

            const aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                content: response.data,
                sender: 'ai',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiResponse]);
            setIsLoading(false);
        } catch (error) {
            console.error('Error calling AI:', error);
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const autoResizeTextarea = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
        }
    };

    useEffect(() => {
        autoResizeTextarea();
    }, [inputMessage]);

    return (
        <div className="min-h-screen relative bg-gray-50 pt-16">

            {/* Main Chat Area */}
            <div className="flex flex-col h-[calc(100vh-4rem)]">
                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 max-w-4xl mx-auto w-full scrollbar-hide">
                    {messages.length === 0 ? (
                        // Welcome screen
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="text-center max-w-2xl">
                                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Bot className="w-10 h-10 text-indigo-600" />
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">ស្វាគមន៍!</h2>
                                <p className="text-gray-600 mb-8">ខ្ញុំជា AI ជំនួយការរៀន។ តើអ្នកចង់សួរអ្វីអំពីអ្វីដែរ?</p>
                            </div>
                        </div>
                    ) : (
                        // Messages
                        <>
                            {messages.map((message) => (
                                <div key={message.id} className="mb-8">
                                    {message.sender === 'user' ? (
                                        // User message
                                        <div className="flex justify-end">
                                            <div className="bg-indigo-600 text-white rounded-2xl px-4 py-3 max-w-[70%]">
                                                <p className="text-sm leading-relaxed">{message.content}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        // AI message
                                        <div className="w-full">
                                            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4">
                                                <MarkdownRenderer content={message.content} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {isLoading && (
                                <div className="w-full">
                                    <div className="bg-white border border-gray-200 rounded-2xl p-6">
                                        <div className="flex items-center gap-2">
                                            <div className="flex space-x-1">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                            </div>
                                            <span className="text-sm text-gray-500">កំពុងគិត...</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t border-gray-200 bg-white p-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-end gap-3">
                            {/* Language Dropdown */}
                            <div className="relative">
                                <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
                                    <Listbox.Button className="flex items-center gap-2 px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all">
                                        <span className="text-sm font-medium text-gray-700">{selectedLanguage.name}</span>
                                        <ChevronUp size={16} className="text-gray-500 transition-transform ui-open:rotate-180" />
                                    </Listbox.Button>

                                    <Transition
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-75 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Listbox.Options className="absolute bottom-full mb-2 left-0 w-48 bg-white rounded-lg border border-gray-200 shadow-lg z-50">
                                            {languages.map((language) => (
                                                <Listbox.Option
                                                    key={language.id}
                                                    value={language}
                                                    className={({ active, selected }) =>
                                                        `relative cursor-pointer select-none px-4 py-3 text-sm ${selected
                                                            ? 'bg-indigo-50 text-indigo-600 font-medium'
                                                            : active
                                                                ? 'bg-gray-50 text-gray-700'
                                                                : 'text-gray-700'
                                                        }`
                                                    }
                                                >
                                                    {language.name}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </Listbox>
                            </div>

                            {/* Input Field */}
                            <div className="flex-1 relative">
                                <textarea
                                    ref={textareaRef}
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="សរសេរសំណួររបស់អ្នក..."
                                    className="w-full px-3 py-2 min-h-10 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none bg-transparent"
                                />
                            </div>

                            {/* Send Button */}
                            <button
                                onClick={handleSendMessage}
                                disabled={!inputMessage.trim() || isLoading}
                                className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
