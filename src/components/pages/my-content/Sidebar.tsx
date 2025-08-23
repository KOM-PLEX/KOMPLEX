'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    BookOpen,
    MessageSquare,
    Video,
    Pencil
} from 'lucide-react';

const navItems = [
    {
        label: 'ផ្ទាំងគ្រប់គ្រង',
        href: '/my-content',
        icon: LayoutDashboard,
        description: 'ទិដ្ឋភាពទូទៅនៃមាតិកានិងសកម្មភាព'
    },
    {
        label: 'ប្លុក',
        href: '/my-content/blogs',
        icon: BookOpen,
        description: 'គ្រប់គ្រងប្លុករបស់អ្នក'
    },
    {
        label: 'វេទិកា',
        href: '/my-content/forums',
        icon: MessageSquare,
        description: 'ការសន្ទនានិងអត្ថបទរបស់អ្នក'
    },
    {
        label: 'វីដេអូ',
        href: '/my-content/videos',
        icon: Video,
        description: 'វីដេអូដែលអ្នកបានបង្ហោះ'
    },
    {
        label: 'លំហាត់',
        href: '/my-content/exercises',
        icon: Pencil,
        description: 'លំហាត់និងការអនុវត្តន៍'
    }
];


export default function Sidebar() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === '/my-content') {
            return pathname === '/my-content';
        }
        return pathname?.startsWith(href);
    };

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-14 overflow-y-auto">
                <div className="p-6">
                    {/* Main Navigation */}
                    <div className="mb-8">
                        <nav className="space-y-1">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const active = isActive(item.href);

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`group flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${active
                                            ? 'text-indigo-600 bg-indigo-50 border border-indigo-200 shadow-sm'
                                            : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50 border border-transparent hover:border-indigo-100'
                                            }`}
                                    >
                                        <div className={`p-2 rounded-lg transition-colors duration-200 ${active
                                            ? 'bg-indigo-100 text-indigo-600'
                                            : 'bg-gray-100 text-gray-600 group-hover:bg-indigo-100 group-hover:text-indigo-600'
                                            }`}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-medium">{item.label}</div>
                                            <div className={`text-xs transition-colors duration-200 ${active ? 'text-indigo-500' : 'text-gray-400 group-hover:text-indigo-400'
                                                }`}>
                                                {item.description}
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </div>

            {/* Mobile Top Navigation */}
            <div className="lg:hidden fixed top-14 left-0 right-0 bg-white border-b border-gray-200 z-40">
                <div className="px-5 py-2">
                    <nav className="flex justify-between items-center gap-4 overflow-x-auto scrollbar-hide">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const active = isActive(item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex-shrink-0 flex flex-col items-center gap-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 min-w-[70px] ${active
                                        ? 'text-indigo-600 bg-indigo-50 border border-indigo-200'
                                        : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50 border border-transparent hover:border-indigo-100'
                                        }`}
                                >
                                    <div className={`p-1.5 rounded-md transition-colors duration-200 ${active
                                        ? 'bg-indigo-100 text-indigo-600'
                                        : 'bg-gray-100 text-gray-600 group-hover:bg-indigo-100 group-hover:text-indigo-600'
                                        }`}>
                                        <Icon className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-center leading-tight">{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </>
    );
}
