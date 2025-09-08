'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, FileText, MessageSquare, BookOpen, Bot, Camera, Pencil, Settings, LogOut, BookMarked, MessageCircle, UserIcon } from 'lucide-react';
import { Menu as HeadlessMenu, Transition } from '@headlessui/react';
import { curriculum } from '@/curriculum/curriculum';
import FeedbackModal from '../pages/feedback/FeedbackModal';
import { useAuth } from '@/hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '@/config/firebase';

const navLinks = [
    {
        label: 'ឯកសារ',
        href: `/docs/${curriculum[0].grade}/${curriculum[0].content[0].subject}/${curriculum[0].content[0].lessons[0].lesson}/${curriculum[0].content[0].lessons[0].topics[0].englishTitle}`,
        icon: FileText,
        style: "bg-white/80 backdrop-blur-sm hover:text-indigo-600 hover:bg-indigo-50/90 "
    },
    {
        label: 'វេទិកា',
        href: '/forums',
        icon: MessageSquare,
        style: "bg-white/80 backdrop-blur-sm  hover:text-indigo-600 hover:bg-indigo-50/90 "
    },
    {
        label: 'ប្លុក',
        href: '/blogs',
        icon: BookOpen,
        style: "bg-white/80 backdrop-blur-sm  hover:text-indigo-600 hover:bg-indigo-50/90 "
    },
    {
        label: 'អនុវត្តន៍',
        href: '/exercises',
        icon: Pencil,
        style: "bg-white/80 backdrop-blur-sm  hover:text-indigo-600 hover:bg-indigo-50/90 "
    },
    {
        label: 'វីដេអូ',
        href: '/videos',
        icon: Camera,
        style: "bg-white/80 backdrop-blur-sm  hover:text-indigo-600 hover:bg-indigo-50/90 "
    },
    {
        label: 'KOMPLEX AI',
        href: '/ai',
        icon: Bot,
        style: "bg-indigo-600 text-white no-underline font-semibold   hover:bg-indigo-500"
    }
]

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const { user, loading } = useAuth();


    const [showFeedbackModal, setShowFeedbackModal] = useState(false);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem("user");
            router.push("/auth");
        } catch (error) {
            console.error('Logout error:', error);
        }
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
                                                {() => (
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
                                {/* Mobile: User area and actions */}
                                {!loading && (
                                    <div className="mt-2 p-2">
                                        <div className='h-0.5 bg-gray-200 my-2'></div>
                                        {user ? (
                                            <>
                                                <div className="flex items-center gap-3 px-2 py-2">
                                                    {user?.profileImage ? (
                                                        <img
                                                            src={user.profileImage}
                                                            alt="Profile"
                                                            className="w-8 h-8 border border-indigo-500 rounded-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
                                                            {((`${user?.firstName || ''} ${user?.lastName || ''}`.trim()) || user?.username || user?.email || 'U').toUpperCase().charAt(0)}
                                                        </div>
                                                    )}
                                                    <div>
                                                        <div className="text-sm font-semibold text-gray-900">
                                                            {user ? ((`${user.firstName || ''} ${user.lastName || ''}`.trim()) || user.username || 'Unknown') : 'Unknown'}
                                                        </div>
                                                        <div className="text-xs text-gray-500">
                                                            {user ? (user.email || '') : ''}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-1 mt-2">
                                                    <HeadlessMenu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                href="/me"
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
                                                            <button
                                                                onClick={handleLogout}
                                                                className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-700 no-underline font-medium transition-colors duration-200 ${active ? 'bg-gray-50 text-red-600' : 'hover:bg-gray-50 hover:text-red-600'}`}
                                                            >
                                                                <LogOut className="w-4 h-4" />
                                                                ចាកចេញ
                                                            </button>
                                                        )}
                                                    </HeadlessMenu.Item>
                                                </div>
                                            </>
                                        ) : pathname === "/auth" ? null : (
                                            <div className="px-2 py-2">
                                                <Link
                                                    href="/auth"
                                                    className="w-full bg-indigo-600 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:bg-indigo-500 transition-colors duration-300 border border-white/20 flex items-center justify-center gap-2"
                                                >
                                                    <UserIcon size={16} />
                                                    ចុះឈ្មោះ
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                )}
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

                        {/* User Menu or Sign Up Button */}
                        {loading || pathname === "/auth" ? null : user ? (
                            <HeadlessMenu as="div" className="relative ml-2">
                                <HeadlessMenu.Button className="flex items-center gap-2 rounded-xl transition-colors duration-200 cursor-pointer">
                                    {user.profileImage ? (
                                        <img src={user.profileImage} alt="Profile" className="w-8 h-8 border border-indigo-500 rounded-full object-cover" />
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
                                            {((`${user.firstName || ''} ${user.lastName || ''}`.trim()) || user.username || user.email || 'U').charAt(0)}
                                        </div>
                                    )}
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
                                            {user.profileImage ? (
                                                <img src={user.profileImage} alt="Profile" className="w-12 h-12 border border-indigo-500 rounded-full object-cover" />
                                            ) : (
                                                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-lg">
                                                    {((`${user.firstName || ''} ${user.lastName || ''}`.trim()) || user.username || user.email || 'U').charAt(0)}
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="font-semibold text-gray-900 text-sm">
                                                    {((`${user.firstName || ''} ${user.lastName || ''}`.trim()) || user.username || 'User')}
                                                </h3>
                                                <p className="text-gray-500 text-xs">
                                                    {user.email || ''}
                                                </p>
                                            </div>
                                        </div>

                                        <div className='h-0.5 bg-gray-200 my-2'></div>

                                        {/* Menu Items */}
                                        <div className="space-y-1">
                                            <HeadlessMenu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        href="/me"
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
                                                    <button
                                                        onClick={handleLogout}
                                                        className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-700 no-underline font-medium transition-colors duration-200 ${active ? 'bg-gray-50 text-red-600' : 'hover:bg-gray-50 hover:text-red-600'}`}
                                                    >
                                                        <LogOut className="w-4 h-4" />
                                                        ចាកចេញ
                                                    </button>
                                                )}
                                            </HeadlessMenu.Item>
                                        </div>
                                    </HeadlessMenu.Items>
                                </Transition>
                            </HeadlessMenu>
                        ) : (
                            <div className="ml-1">
                                <Link
                                    href="/auth"
                                    className="bg-indigo-600 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:bg-indigo-500 transition-colors duration-300 shadow-lg shadow-indigo-500/30 border border-white/20 flex items-center justify-between gap-2"
                                >
                                    <UserIcon size={16} />
                                    ចុះឈ្មោះ
                                </Link>
                            </div>
                        )}
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