'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, FileText, MessageSquare, BookOpen, Bot } from 'lucide-react';
import { curriculum } from '@/app/curriculum/curriculum';

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
        label: 'អ្នកជំនាញ AI',
        href: '#',
        icon: Bot,
        style: "bg-indigo-600 text-white no-underline font-semibold shadow-lg shadow-indigo-500/30 border border-white/20 hover:bg-indigo-500"
    }
]

const MobileNavMenu = () => {
    return (
        <div className="md:hidden fixed top-14 rounded-b-2xl right-0 w-[50%]  bg-white flex flex-col p-6 shadow-2xl border-l border-indigo-500/10 transition-all duration-300 ease-in-out">
            <div className="space-y-3">
                {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-sm text-gray-600 no-underline font-medium  backdrop-blur-sm border border-indigo-500/10 hover:text-indigo-600 hover:bg-indigo-50/90 transition-all duration-300 ${link.style}`}
                        >
                            <Icon size={18} />
                            {link.label}
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-white/95 backdrop-blur-md border-b border-indigo-500/10 fixed top-0 left-0 right-0 z-50 w-full">
            <div className="max-w-full px-6 py-2 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-decoration-none">
                    <div className="flex items-center justify-center gap-0">
                        <span className="text-3xl font-extrabold tracking-tight text-indigo-600">KOM</span>
                        <span className="text-3xl font-extrabold tracking-tight text-black">PLEX</span>
                    </div>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden bg-none border-none text-2xl text-indigo-600 cursor-pointer "
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Navigation Menu */}
                <div className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center gap-2 text-gray-600 no-underline font-medium text-sm px-4 py-2.5 rounded-xl transition-all duration-300 relative ${link.style}`}
                            >
                                <Icon size={18} />
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <>
                    <MobileNavMenu />
                </>
            )}
        </div>
    );
}