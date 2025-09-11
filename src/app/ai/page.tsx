'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, ChevronUp, Copy, Check, X, Loader, RefreshCw, Square } from 'lucide-react';
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
    { id: 'khmer', name: 'ភាសាខ្មែរ', acronym: 'KH' },
    { id: 'english', name: 'English', acronym: 'ENG' },
    { id: 'chinese', name: '中文', acronym: 'CH' },
    { id: 'japanese', name: '日本語', acronym: 'JAP' },
    { id: 'korean', name: '한국어', acronym: 'KOR' },
    { id: 'vietnamese', name: 'Tiếng Việt', acronym: 'VN' },
    { id: 'french', name: 'Français', acronym: 'FR' },
    { id: 'german', name: 'Deutsch', acronym: 'DE' },
    { id: 'spanish', name: 'Español', acronym: 'ES' },
];

export default function AIChat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [isMultiLine, setIsMultiLine] = useState(false);
    const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [streamingMessage, setStreamingMessage] = useState<string>('');
    const [isStreaming, setIsStreaming] = useState(false);
    const [isRequestInProgress, setIsRequestInProgress] = useState(false);
    const streamingIntervalRef = useRef<NodeJS.Timeout | null>(null);
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
        setIsRequestInProgress(true);
        setError(null); // Clear any previous errors

        try {
            const response = await callAiAndWriteToHistory(currentInput, selectedLanguage.id);
            setIsLoading(false);
            setIsRequestInProgress(false);

            // Start streaming animation
            streamText(response.data);
        } catch (error) {
            console.error('Error calling AI:', error);
            setIsLoading(false);
            setIsRequestInProgress(false);
            setError('មានបញ្ហាក្នុងការទាក់ទងតារា។ សូមព្យាយាមម្តងទៀត។');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleCopyMessage = async (messageId: string, content: string) => {
        try {
            await navigator.clipboard.writeText(content);
            setCopiedMessageId(messageId);
            setTimeout(() => setCopiedMessageId(null), 2000); // Reset after 2 seconds
        } catch (error) {
            console.error('Failed to copy text: ', error);
        }
    };

    const streamText = (text: string) => {
        setIsStreaming(true);
        setStreamingMessage('');
        let index = 0;

        streamingIntervalRef.current = setInterval(() => {
            if (index < text.length) {
                setStreamingMessage(text.slice(0, index + 1));
                index++;
            } else {
                if (streamingIntervalRef.current) {
                    clearInterval(streamingIntervalRef.current);
                    streamingIntervalRef.current = null;
                }
                setIsStreaming(false);
                // Add the complete message to the messages array
                const aiResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    content: text,
                    sender: 'ai',
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, aiResponse]);
                setStreamingMessage('');
            }
        }, 5); // Adjust speed here (lower = faster)
    };

    const autoResizeTextarea = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = '30px';
            const scrollHeight = textareaRef.current.scrollHeight;
            const newHeight = Math.min(Math.max(scrollHeight, 30), 120);
            textareaRef.current.style.height = newHeight + 'px';

            // Detect if we have multiple lines with hysteresis to prevent flickering
            // Use a buffer zone: if currently single-line, need > 45px to switch to multi-line
            // If currently multi-line, need < 38px to switch back to single-line
            const hasMultipleLines = isMultiLine
                ? newHeight > 35  // If already multi-line, need to go below 38px to switch back
                : newHeight > 38; // If single-line, need to go above 45px to switch to multi-line

            setIsMultiLine(hasMultipleLines);
        }
    };

    useEffect(() => {
        autoResizeTextarea();
    }, [inputMessage]);

    const handleTryAgain = async () => {
        setIsLoading(true);
        setIsRequestInProgress(true);
        setError(null);

        try {
            const response = await callAiAndWriteToHistory(messages[messages.length - 1].content, selectedLanguage.id);
            setIsLoading(false);
            setIsRequestInProgress(false);

            // Start streaming animation
            streamText(response.data);
        } catch (error) {
            console.error('Error calling AI:', error);
            setIsLoading(false);
            setIsRequestInProgress(false);
            setError('មានបញ្ហាក្នុងការទាក់ទងតារា។ សូមព្យាយាមម្តងទៀត។');
        }
    };

    const handleStopStreaming = () => {
        if (isRequestInProgress) {
            // Case 1: Stop the actual API request (if still in progress)
            setIsRequestInProgress(false);
            setIsLoading(false);
            setError('បានបញ្ឈប់ការស្នើសុំ។');
        } else if (isStreaming) {
            // Case 2: Stop the fake streaming and keep what has been streamed
            if (streamingIntervalRef.current) {
                clearInterval(streamingIntervalRef.current);
                streamingIntervalRef.current = null;
            }
            setIsStreaming(false);

            // Add the partial message to the messages array
            if (streamingMessage.trim()) {
                const aiResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    content: streamingMessage,
                    sender: 'ai',
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, aiResponse]);
            }
            setStreamingMessage('');
        }
    };

    return (
        <div className="min-h-screen relative bg-gray-50 pt-16 pb-32">
            {/* Main Chat Area */}
            <div className=" overflow-y-auto p-4 space-y-4 max-w-4xl mx-auto w-full scrollbar-hide">
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
                                        <div className="relative ">
                                            <MarkdownRenderer content={message.content} />
                                            <button
                                                onClick={() => handleCopyMessage(message.id, message.content)}
                                                className=" mt-2"
                                                title="Copy response"
                                            >
                                                {copiedMessageId === message.id ? (
                                                    <div className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-600" />
                                                        បានចម្លង
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-2">
                                                        <Copy className="w-4 h-4 text-gray-600" />
                                                        ចម្លង
                                                    </div>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {isLoading && (
                            <div className="w-full">
                                <div className="flex items-center gap-2">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    </div>
                                    <span className="text-sm text-gray-500">កំពុងគិត...</span>
                                </div>
                            </div>
                        )}

                        {isStreaming && (
                            <div className="w-full">
                                <div className="relative">
                                    <MarkdownRenderer content={streamingMessage} />
                                </div>
                            </div>
                        )}

                        {error && (
                            <div className="w-full">
                                <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        <span className="text-sm text-red-700">{error}</span>
                                        <button
                                            onClick={handleTryAgain}
                                            className="ml-auto text-red-500 hover:text-red-700 transition-colors"
                                        >
                                            <RefreshCw className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Fixed Input Area */}
            <div className='bg-gray-50 fixed h-20 w-full bottom-0 '></div>
            <div className="fixed bottom-0 left-0 right-0 px-4 py-2">
                <div className="max-w-4xl mx-auto">
                    {/* Input Container */}
                    <div className={`bg-white shadow-lg border border-gray-200 p-2 mb-2 transition-all duration-200 ${isMultiLine ? 'rounded-2xl' : 'rounded-full'}`}>
                        {/* Single line layout - show when not multi-line */}
                        <div className={`flex items-center gap-2`}>
                            {/* Language Dropdown */}
                            <div className={`relative flex-shrink-0 ${isMultiLine ? 'hidden' : 'flex'}`}>
                                <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
                                    <Listbox.Button className="flex items-center gap-1 px-3 py-2 bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all">
                                        <span className="text-xs font-medium text-gray-700">{selectedLanguage.acronym}</span>
                                        <ChevronUp size={14} className="text-gray-500 transition-transform ui-open:rotate-180" />
                                    </Listbox.Button>

                                    <Transition
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-75 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Listbox.Options className="absolute bottom-full mb-2 left-0 w-32 bg-white rounded-lg border border-gray-200 shadow-lg z-50 focus:outline-none">
                                            {languages.map((language) => (
                                                <Listbox.Option
                                                    key={language.id}
                                                    value={language}
                                                    className={({ active, selected }) =>
                                                        `relative cursor-pointer select-none px-3 py-2 text-sm ${selected
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

                            {/* Textarea Container */}
                            <div className="flex-1 relative min-h-[40px] flex items-center">
                                <textarea
                                    ref={textareaRef}
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="សរសេរសំណួររបស់អ្នក..."
                                    className="w-full px-3 py-2 text-sm focus:outline-none resize-none bg-transparent border-none placeholder-gray-400"
                                    style={{
                                        minHeight: '30px',
                                        maxHeight: '120px',
                                        height: 'auto'
                                    }}
                                />
                            </div>

                            {/* Send Button */}
                            {
                                !isLoading && !isStreaming ? (<button
                                    onClick={handleSendMessage}
                                    disabled={!inputMessage.trim()}
                                    className={`flex-shrink-0 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${isMultiLine ? 'hidden' : 'flex'}`}
                                >
                                    <Send className="w-4 h-4" />
                                </button>) : (
                                    <button className="flex-shrink-0 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-200"
                                        onClick={handleStopStreaming}
                                        title={isRequestInProgress ? "បញ្ឈប់ការស្នើសុំ" : "បញ្ឈប់ការសរសេរ"}
                                    >
                                        <Square className="w-4 h-4" />
                                    </button>
                                )
                            }
                        </div>

                        {/* Multi-line layout - show when multi-line */}
                        <div className={`space-y-3 ${isMultiLine ? 'block' : 'hidden'}`}>

                            {/* Controls row */}
                            <div className="flex items-center justify-between">
                                {/* Language Dropdown */}
                                <div className="relative">
                                    <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
                                        <Listbox.Button className="flex items-center gap-1 px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all">
                                            <span className="text-xs font-medium text-gray-700">{selectedLanguage.acronym}</span>
                                            <ChevronUp size={14} className="text-gray-500 transition-transform ui-open:rotate-180" />
                                        </Listbox.Button>

                                        <Transition
                                            enter="transition duration-100 ease-out"
                                            enterFrom="transform scale-95 opacity-0"
                                            enterTo="transform scale-100 opacity-100"
                                            leave="transition duration-75 ease-out"
                                            leaveFrom="transform scale-100 opacity-100"
                                            leaveTo="transform scale-95 opacity-0"
                                        >
                                            <Listbox.Options className="absolute bottom-full mb-2 left-0 w-32 bg-white rounded-lg border border-gray-200 shadow-lg z-50">
                                                {languages.map((language) => (
                                                    <Listbox.Option
                                                        key={language.id}
                                                        value={language}
                                                        className={({ active, selected }) =>
                                                            `relative cursor-pointer select-none px-3 py-2 text-sm ${selected
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

                                {/* Send Button */}
                                {!isLoading && !isStreaming ? (
                                    <button
                                        onClick={handleSendMessage}
                                        disabled={!inputMessage.trim()}
                                        className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleStopStreaming}
                                        className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                                        title={isRequestInProgress ? "បញ្ឈប់ការស្នើសុំ" : "បញ្ឈប់ការសរសេរ"}
                                    >
                                        <Square className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Warning Text */}
                    <div className="text-center">
                        <p className="text-xs text-gray-500"><span className='font-black'>តារា</span> អាចមានកំហុស។ សូមពិនិត្យព័ត៌មានសំខាន់។</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
