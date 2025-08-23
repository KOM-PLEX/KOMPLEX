'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, FileText, MessageSquare, BookOpen, Bot, Camera, Pencil, User, Settings, LogOut, BookMarked, UserCircle, MessageCircle } from 'lucide-react';
import { Menu as HeadlessMenu, Transition } from '@headlessui/react';
import { curriculum } from '@/curriculum/curriculum';
import FeedbackModal from '../pages/feedback/FeedbackModal';
import Image from 'next/image';

const navLinks = [
    {
        label: 'ឯកសារ',
        href: `/docs/${curriculum[0].grade}/${curriculum[0].content[0].subject}/${curriculum[0].content[0].lessons[0].lesson}/${curriculum[0].content[0].lessons[0].topics[0].englishTitle}`,
        icon: FileText,
        style: "bg-white/80 backdrop-blur-sm border border-indigo-500/10 hover:text-indigo-600 hover:bg-indigo-50/90 shadow-lg shadow-indigo-500/10"
    },
    {
        label: 'វេទិកា',
        href: '/forum',
        icon: MessageSquare,
        style: "bg-white/80 backdrop-blur-sm border border-indigo-500/10 hover:text-indigo-600 hover:bg-indigo-50/90 shadow-lg shadow-indigo-500/10"
    },
    {
        label: 'ប្លុក',
        href: '/blog',
        icon: BookOpen,
        style: "bg-white/80 backdrop-blur-sm border border-indigo-500/10 hover:text-indigo-600 hover:bg-indigo-50/90 shadow-lg shadow-indigo-500/10"
    },
    {
        label: 'អនុវត្តន៍',
        href: '/exercise',
        icon: Pencil,
        style: "bg-white/80 backdrop-blur-sm border border-indigo-500/10 hover:text-indigo-600 hover:bg-indigo-50/90 shadow-lg shadow-indigo-500/10"
    },
    {
        label: 'វីដេអូ',
        href: '/video',
        icon: Camera,
        style: "bg-white/80 backdrop-blur-sm border border-indigo-500/10 hover:text-indigo-600 hover:bg-indigo-50/90 shadow-lg shadow-indigo-500/10"
    },
    {
        label: 'KOMPLEX AI',
        href: '/ai',
        icon: Bot,
        style: "bg-indigo-600 text-white no-underline font-semibold shadow-lg shadow-indigo-500/30 border border-white/20 hover:bg-indigo-500"
    }
]

export default function Header() {
    const pathname = usePathname();
    const isAuthPage = pathname?.startsWith('/auth');

    const [showFeedbackModal, setShowFeedbackModal] = useState(false);

    // Mock user data - replace with actual user data later
    const user = {
        name: 'សុខវណ្ណា អ៊ុំ',
        email: 'sokvanna.oum@example.com',
        avatar: 'ស'
    };


    return (
        <>
            <div className="bg-white/95 backdrop-blur-md border-b border-indigo-500/10 fixed top-0 left-0 right-0 z-50 w-full">
                <div className="max-w-full px-6 py-2 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="text-decoration-none flex items-center gap-2">
                        <img src="/logo.png" alt="logo" className='w-5 h-5' />
                        <div className="flex items-center justify-center gap-0">
                            <span className="text-2xl font-extrabold tracking-tight text-indigo-500">KOM</span>
                            <span className="text-2xl font-extrabold tracking-tight text-black">PLEX</span>
                        </div>
                    </Link>

                    {/* Mobile Menu */}
                    <HeadlessMenu as="div" className="md:hidden relative">
                        <HeadlessMenu.Button className="bg-none border-none text-2xl text-indigo-600 cursor-pointer p-2 hover:bg-indigo-50 rounded-lg transition-colors duration-200">
                            <Menu size={24} />
                        </HeadlessMenu.Button>

                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <HeadlessMenu.Items className="absolute -right-6 mt-2 w-56 bg-white rounded-bl-2xl shadow-2xl border border-indigo-500/10 backdrop-blur-sm z-50 p-2">
                                <div className="space-y-1">
                                    {navLinks.map((link) => {
                                        const Icon = link.icon;
                                        const isActive = pathname?.includes(link.href);
                                        return (
                                            <HeadlessMenu.Item key={link.href}>
                                                {({ active }) => (
                                                    <Link
                                                        href={link.href}
                                                        className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-sm text-gray-600 no-underline font-medium backdrop-blur-sm  transition-all duration-300 ${isActive
                                                            ? 'text-indigo-600 bg-indigo-50/90 shadow-sm border border-indigo-500/10'
                                                            : 'hover:text-indigo-600 hover:bg-indigo-50/90'
                                                            }`}
                                                    >
                                                        <Icon size={18} />
                                                        {link.label}
                                                    </Link>
                                                )}
                                            </HeadlessMenu.Item>
                                        );
                                    })}
                                </div>
                            </HeadlessMenu.Items>
                        </Transition>
                    </HeadlessMenu>

                    {/* Desktop Navigation Menu */}
                    <div className="hidden md:flex gap-2.5 items-center">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = pathname?.includes(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`flex items-center gap-2 text-gray-600 no-underline font-medium text-sm px-3 py-2.5 rounded-xl transition-all duration-300 relative ${isActive ? 'text-indigo-600 bg-indigo-50/90 shadow-sm border border-indigo-500/10' : link.style}`}
                                >
                                    <Icon size={18} />
                                    {link.label}
                                </Link>
                            );
                        })}

                        {/* User Menu */}
                        <HeadlessMenu as="div" className="relative ml-2">
                            <HeadlessMenu.Button className="flex items-center gap-2 rounded-xl transition-colors duration-200 cursor-pointer">
                                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
                                    {user.avatar}
                                </div>
                            </HeadlessMenu.Button>

                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <HeadlessMenu.Items className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 backdrop-blur-sm z-50 p-4">
                                    {/* User Info Section */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-lg">
                                            {user.avatar}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-sm">{user.name}</h3>
                                            <p className="text-gray-500 text-xs">{user.email}</p>
                                        </div>
                                    </div>

                                    <div className='h-0.5 bg-gray-200 my-2'></div>

                                    {/* Menu Items */}
                                    <div className="space-y-1">
                                        <HeadlessMenu.Item>
                                            {({ active }) => (
                                                <Link
                                                    href="/my-content"
                                                    className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-700 no-underline font-medium transition-colors duration-200 ${active ? 'bg-gray-50 text-indigo-600' : 'hover:bg-gray-50 hover:text-indigo-600'}`}
                                                >
                                                    <BookMarked className="w-4 h-4" />
                                                    មាតិការបស់ខ្ញុំ
                                                </Link>
                                            )}
                                        </HeadlessMenu.Item>
                                        <HeadlessMenu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => setShowFeedbackModal(true)}
                                                    className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-700 no-underline font-medium transition-colors duration-200 ${active ? 'bg-gray-50 text-indigo-600' : 'hover:bg-gray-50 hover:text-indigo-600'}`}
                                                >
                                                    <MessageCircle className="w-4 h-4" />
                                                    ជួយផ្ដល់មតិ
                                                </button>
                                            )}
                                        </HeadlessMenu.Item>

                                        <HeadlessMenu.Item>
                                            {({ active }) => (
                                                <Link
                                                    href="/settings"
                                                    className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-700 no-underline font-medium transition-colors duration-200 ${active ? 'bg-gray-50 text-indigo-600' : 'hover:bg-gray-50 hover:text-indigo-600'}`}
                                                >
                                                    <Settings className="w-4 h-4" />
                                                    ការកំណត់
                                                </Link>
                                            )}
                                        </HeadlessMenu.Item>

                                        <HeadlessMenu.Item>
                                            {({ active }) => (
                                                <Link
                                                    href="/auth"
                                                    className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-700 no-underline font-medium transition-colors duration-200 ${active ? 'bg-gray-50 text-red-600' : 'hover:bg-gray-50 hover:text-red-600'}`}
                                                >
                                                    <LogOut className="w-4 h-4" />
                                                    ចាកចេញ
                                                </Link>
                                            )}
                                        </HeadlessMenu.Item>
                                    </div>
                                </HeadlessMenu.Items>
                            </Transition>
                        </HeadlessMenu>
                    </div>
                </div>
            </div>
            <FeedbackModal
                isOpen={showFeedbackModal}
                onClose={() => setShowFeedbackModal(false)}
            />
        </>
    );
}