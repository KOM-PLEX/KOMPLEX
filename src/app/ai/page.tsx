'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, ArrowLeft, Plus, Image, Scan, Settings, Paperclip, Mic, Volume2 } from 'lucide-react';

interface Message {
    id: string;
    content: string;
    sender: 'user' | 'ai';
    timestamp: Date;
}

interface ChatSession {
    id: string;
    title: string;
    lastMessage: string;
    timestamp: Date;
    messages: Message[];
}

export default function AIChat() {
    const [chatSessions, setChatSessions] = useState<ChatSession[]>([
        {
            id: '1',
            title: 'គណិតវិទ្យាមូលដ្ឋាន',
            lastMessage: 'តើអ្នកចង់ដឹងអ្វីអំពីគណិតវិទ្យា?',
            timestamp: new Date(),
            messages: []
        },
        {
            id: '2',
            title: 'វិធីដោះស្រាយបញ្ហា',
            lastMessage: 'ខ្ញុំអាចជួយអ្នកដោះស្រាយបញ្ហាបាន។',
            timestamp: new Date(Date.now() - 86400000),
            messages: []
        }
    ]);
    const [currentSession, setCurrentSession] = useState<string>('1');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            content: 'ស្វាគមន៍! ខ្ញុំជា AI ជំនួយការរៀនគណិតវិទ្យា។ តើអ្នកចង់សួរអ្វីអំពីគណិតវិទ្យា?',
            sender: 'ai',
            timestamp: new Date()
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);
    const [isNewChat, setIsNewChat] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const suggestedPrompts = [
        'គណិតវិទ្យា',
        'វិធីសាស្ត្រ',
        'បញ្ហា',
        'រូបមន្ត',
        'លំហាត់'
    ];

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
        setInputMessage('');
        setIsLoading(true);
        setIsNewChat(false);

        // Simulate AI response
        setTimeout(() => {
            const aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                content: getAIResponse(inputMessage),
                sender: 'ai',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiResponse]);
            setIsLoading(false);
        }, 1000);
    };

    const getAIResponse = (userMessage: string): string => {
        const responses = [
            'អូខេ! ខ្ញុំអាចជួយអ្នកបាន។ តើអ្នកចង់ដឹងអ្វីខ្លះ?',
            'គណិតវិទ្យាគឺជាវិទ្យាសាស្ត្រដ៏សំខាន់។ ខ្ញុំអាចជួយពន្យល់បាន។',
            'អ្នកសួរសំណួរល្អណាស់! ខ្ញុំនឹងព្យាយាមជួយអ្នកឱ្យបានល្អបំផុត។',
            'ខ្ញុំយល់សំណួររបស់អ្នក។ សូមអ្នកពន្យល់បន្ថែមបានទេ?',
            'គណិតវិទ្យាមានច្បាប់ជាច្រើន។ តើអ្នកចង់ដឹងអំពីច្បាប់ណាជាងគេ?'
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const createNewChat = () => {
        const newSession: ChatSession = {
            id: Date.now().toString(),
            title: 'ការឆ្លើយតបថ្មី',
            lastMessage: 'ចាប់ផ្តើមការឆ្លើយតបថ្មី...',
            timestamp: new Date(),
            messages: []
        };
        setChatSessions(prev => [newSession, ...prev]);
        setCurrentSession(newSession.id);
        setMessages([]);
        setIsNewChat(true);
    };

    const deleteChat = (sessionId: string) => {
        setChatSessions(prev => prev.filter(session => session.id !== sessionId));
        if (currentSession === sessionId) {
            const remainingSessions = chatSessions.filter(session => session.id !== sessionId);
            if (remainingSessions.length > 0) {
                setCurrentSession(remainingSessions[0].id);
            }
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

    const handlePromptClick = (prompt: string) => {
        setInputMessage(prompt);
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-16">
            <div className="flex h-screen">
                {/* Sidebar */}
                <div className={`w-80 fixed top-14 left-0 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 flex flex-col z-10 transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                    {/* Sidebar Header */}
                    <div className="px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center justify-between ">
                            <h2 className="font-semibold text-gray-900">ការឆ្លើយតប</h2>
                            <button
                                onClick={createNewChat}
                                className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
                            >
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Chat Sessions */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {chatSessions.map((session) => (
                            <div
                                key={session.id}
                                className={`px-2 rounded-lg py-3 mb-2 border-gray-100 cursor-pointer transition-colors duration-200 ${currentSession === session.id ? 'bg-indigo-50 border-indigo-200' : 'hover:bg-gray-50'
                                    }`}
                                onClick={() => {
                                    setCurrentSession(session.id);
                                    setIsNewChat(false);
                                }}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1 min-w-0 ">
                                        <h3 className="font-medium text-gray-900 truncate">{session.title}</h3>
                                        {/* <p className="text-sm text-gray-500 truncate mt-1">{session.lastMessage}</p> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar Footer */}
                    <div className="p-4 border-t border-gray-200">
                        <button className="w-full flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                            <Settings className="w-5 h-5" />
                            <span className="text-sm">ការកំណត់</span>
                        </button>
                    </div>
                </div>

                {/* Main Chat Area */}
                <div className={`flex-1 flex flex-col transition-all duration-300 ${showSidebar ? 'lg:ml-80' : ''}`}>
                    {/* Messages Container */}
                    <div className="flex-1 relative overflow-y-auto scrollbar-hide p-4 space-y-4 max-w-4xl mx-auto w-full">
                        {isNewChat ? (
                            // New Chat - Welcome with prompts and normal input section
                            <div className="flex flex-col mt-12 items-center justify-center h-full">
                                <div className="text-center max-w-4xl w-full">
                                    <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Bot className="w-10 h-10 text-indigo-600" />
                                    </div>
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">ស្វាគមន៍!</h2>
                                    <p className="text-gray-600 mb-8">ខ្ញុំជា AI ជំនួយការរៀន។ តើអ្នកចង់សួរអ្វីអំពីអ្វីដែរ?</p>

                                   

                                    {/* Input Section (same as normal chat) */}
                                    <div className="flex items-center gap-3 w-full  mx-auto">
                                        {/* Attachment Options */}
                                        <div className="flex items-center gap-1">
                                            <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200">
                                                <Paperclip className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200">
                                                <Image className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200">
                                                <Scan className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {/* Input Field */}
                                        <div className="flex-1 relative">
                                            <textarea
                                                ref={textareaRef}
                                                value={inputMessage}
                                                onChange={(e) => setInputMessage(e.target.value)}
                                                onKeyPress={handleKeyPress}
                                                placeholder="សរសេរសំណួររបស់អ្នក..."
                                                className="w-full px-3 py-2 h-10 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none bg-transparent"
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
                                     {/* Suggested Prompts */}
                                     <div className="my-6 flex flex-wrap gap-2 justify-center">
                                        {suggestedPrompts.map((prompt, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handlePromptClick(prompt)}
                                                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm transition-colors duration-200"
                                            >
                                                {prompt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Existing Chat - Normal Messages + Bottom Input
                            <>
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div className={`flex items-start gap-3 max-w-[70%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'user'
                                                ? 'bg-indigo-600'
                                                : 'bg-gray-200'
                                                }`}>
                                                {message.sender === 'user' ? (
                                                    <User className="w-4 h-4 text-white" />
                                                ) : (
                                                    <Bot className="w-4 h-4 text-gray-600" />
                                                )}
                                            </div>
                                            <div className={`rounded-2xl px-4 py-3 ${message.sender === 'user'
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-white text-gray-900 border border-gray-200'
                                                }`}>
                                                <p className="text-sm leading-relaxed">{message.content}</p>
                                                <p className={`text-xs mt-2 ${message.sender === 'user' ? 'text-indigo-100' : 'text-gray-500'
                                                    }`}>
                                                    {message.timestamp.toLocaleTimeString('km-KH', {
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="flex items-start gap-3 max-w-[70%]">
                                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Bot className="w-4 h-4 text-gray-600" />
                                            </div>
                                            <div className="bg-white text-gray-900 border border-gray-200 rounded-2xl px-4 py-3">
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
                                    </div>
                                )}

                                {/* Bottom Input for Existing Chat */}
                                <div className="mt-6 fixed bottom-0 left-0 ml-80 w-[calc(100vw-320px)] flex items-center justify-center">
                                    <div className=' flex w-full max-w-4xl'>

                                        <div className="flex items-center gap-3 w-full px-4 ">
                                            {/* Attachment Options */}
                                            <div className="flex items-center gap-1">
                                                <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200">
                                                    <Paperclip className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200">
                                                    <Image className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200">
                                                    <Scan className="w-4 h-4" />
                                                </button>
                                            </div>

                                            {/* Input Field */}
                                            <div className="flex-1 relative">
                                                <textarea
                                                    ref={textareaRef}
                                                    value={inputMessage}
                                                    onChange={(e) => setInputMessage(e.target.value)}
                                                    onKeyPress={handleKeyPress}
                                                    placeholder="សរសេរសំណួររបស់អ្នក..."
                                                    className="w-full px-3 py-2 h-10 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none bg-transparent"

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
                            </>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
            </div>
        </div>
    );
}
