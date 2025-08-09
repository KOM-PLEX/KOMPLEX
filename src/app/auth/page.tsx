'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User, Calculator, Atom, Brain, Microscope, Rocket, Lightbulb, Target, CheckCircle, Users, Globe, Heart } from 'lucide-react';

export default function AuthPage() {
    const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const features = [
        {
            icon: Brain,
            title: "ការរៀនដោយប្រើ AI",
            description: "អ្នកជំនាញ AI ជួយដោះស្រាយបញ្ហា",
            color: "indigo",
            bgColor: "bg-indigo-50/80",
            borderColor: "border-indigo-600",
            iconColor: "text-indigo-600"
        },
        {
            icon: Rocket,
            title: "វិធីសាស្ត្រទំនើប",
            description: "មេរៀនអន្តរកម្មជាមួយរូបភាព 3D",
            color: "green",
            bgColor: "bg-green-50/80",
            borderColor: "border-green-600",
            iconColor: "text-green-600"
        },
        {
            icon: Lightbulb,
            title: "ចំណេះដឹងជ្រៅ",
            description: "យល់គោលគំនិតជាជាងចងចាំ",
            color: "blue",
            bgColor: "bg-blue-50/80",
            borderColor: "border-blue-600",
            iconColor: "text-blue-600"
        },
        {
            icon: Users,
            title: "សហគមន៍រៀន",
            description: "រៀនជាមួយសិស្សដទៃទៀត",
            color: "purple",
            bgColor: "bg-purple-50/80",
            borderColor: "border-purple-600",
            iconColor: "text-purple-600"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 ">
            <div className="w-full max-w-7xl relative z-10">
                {/* Auth Container */}
                <div className="bg-indigo-500/10 backdrop-blur-sm border border-indigo-600 rounded-2xl shadow-xl shadow-indigo-500/10 p-8">
                    <div className="flex gap-8">
                        {/* Left Side - Logo and Info */}
                        <div className="hidden lg:flex flex-col justify-center items-center w-1/2 bg-white rounded-xl p-6 border border-indigo-600">
                            <div className="text-center mb-6">
                                <Link href="/" className="flex items-center justify-center gap-0 mb-4">
                                    <span className="text-5xl font-extrabold tracking-tight text-indigo-600">KOM</span>
                                    <span className="text-5xl font-extrabold tracking-tight text-black">PLEX</span>
                                </Link>
                                <p className="text-gray-600 text-lg font-medium mb-6">
                                    ការអប់រំ STEM សម្រាប់អនាគត
                                </p>

                                {/* Simple Subject List */}
                                <div className="flex flex-wrap justify-center gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-indigo-600">
                                        <Calculator size={20} />
                                        <span className="text-sm font-medium">គណិតវិទ្យា</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-indigo-600">
                                        <Atom size={20} />
                                        <span className="text-sm font-medium">រូបវិទ្យា</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-indigo-600">
                                        <Microscope size={20} />
                                        <span className="text-sm font-medium">គីមីវិទ្យា</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-indigo-600">
                                        <Heart size={20} />
                                        <span className="text-sm font-medium">ជីវវិទ្យា</span>
                                    </div>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-3 w-full">
                                {features.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div
                                            key={index}
                                            className={`${feature.bgColor} ${feature.borderColor} border-2 rounded-xl p-3 shadow-lg transition-all duration-300 backdrop-blur-sm hover:scale-105`}
                                        >
                                            <div className={`w-10 h-10 ${feature.bgColor} ${feature.borderColor} border-2 rounded-full flex items-center justify-center mx-auto mb-2`}>
                                                <Icon size={20} className={feature.iconColor} />
                                            </div>
                                            <h5 className="text-sm font-bold text-center text-gray-900 mb-1">{feature.title}</h5>
                                            <p className="text-xs text-gray-600 text-center">{feature.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Side - Auth Forms */}
                        <div className="flex-1 lg:w-1/2">
                            {/* Mobile Logo */}
                            <div className="lg:hidden text-center mb-6">
                                <div className="flex items-center justify-center gap-0 mb-2">
                                    <span className="text-3xl font-extrabold tracking-tight text-indigo-600">KOM</span>
                                    <span className="text-3xl font-extrabold tracking-tight text-black">PLEX</span>
                                </div>
                                <p className="text-gray-600 text-sm font-medium">
                                    ការអប់រំ STEM សម្រាប់អនាគត
                                </p>
                            </div>

                            {/* Tab Navigation */}
                            <div className="flex bg-white rounded-xl p-1 mb-6 border border-indigo-600">
                                <button
                                    onClick={() => setActiveTab('login')}
                                    className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all hover:bg-gray-50 duration-300 ${activeTab === 'login'
                                        ? 'bg-white text-indigo-600 shadow-sm border border-indigo-600'
                                        : 'text-black hover:text-indigo-600'
                                        }`}
                                >
                                    ចូលទៅកាន់
                                </button>
                                <button
                                    onClick={() => setActiveTab('signup')}
                                    className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all hover:bg-gray-50 duration-300 ${activeTab === 'signup'
                                        ? 'bg-white text-indigo-600 shadow-sm border border-indigo-600'
                                        : 'text-black hover:text-indigo-600'
                                        }`}
                                >
                                    ចុះឈ្មោះ
                                </button>
                            </div>

                            {/* Login Form */}
                            {activeTab === 'login' && (
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-black mb-2">
                                            អ៊ីមែល
                                        </label>
                                        <div className="relative">
                                            <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                                            <input
                                                type="email"
                                                className="w-full pl-10 pr-4 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                                                placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-black mb-2">
                                            ពាក្យសម្ងាត់
                                        </label>
                                        <div className="relative">
                                            <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                className="w-full pl-10 pr-12 py-3 border border-indigo-500/20 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                                                placeholder="បញ្ចូលពាក្យសម្ងាត់"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-600 hover:text-gray-600 transition-colors"
                                            >
                                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 text-indigo-600 border-indigo-500/30 rounded focus:ring-indigo-500/30"
                                            />
                                            <span className="ml-2 text-sm text-gray-600">ចងចាំខ្ញុំ</span>
                                        </label>
                                        <Link href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500 font-medium">
                                            ភ្លេចពាក្យសម្ងាត់?
                                        </Link>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-indigo-500 transition-colors duration-300 shadow-lg shadow-indigo-500/30 border border-white/20"
                                    >
                                        ចូលទៅកាន់
                                    </button>
                                </form>
                            )}

                            {/* Signup Form */}
                            {activeTab === 'signup' && (
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-black mb-2">
                                            ឈ្មោះពេញ
                                        </label>
                                        <div className="relative">
                                            <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                                            <input
                                                type="text"
                                                className="w-full pl-10 pr-4 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                                                placeholder="បញ្ចូលឈ្មោះពេញរបស់អ្នក"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-black mb-2">
                                            អ៊ីមែល
                                        </label>
                                        <div className="relative">
                                            <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                                            <input
                                                type="email"
                                                className="w-full pl-10 pr-4 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                                                placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-black mb-2">
                                            ពាក្យសម្ងាត់
                                        </label>
                                        <div className="relative">
                                            <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                className="w-full pl-10 pr-12 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                                                placeholder="បង្កើតពាក្យសម្ងាត់"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-600 hover:text-gray-600 transition-colors"
                                            >
                                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-black mb-2">
                                            បញ្ជាក់ពាក្យសម្ងាត់
                                        </label>
                                        <div className="relative">
                                            <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                                            <input
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                className="w-full pl-10 pr-12 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                                                placeholder="បញ្ជាក់ពាក្យសម្ងាត់ម្តងទៀត"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-600 hover:text-gray-600 transition-colors"
                                            >
                                                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 text-indigo-600 border-indigo-500/30 rounded focus:ring-indigo-500/30 mt-1"
                                        />
                                        <span className="ml-2 text-sm text-gray-600">
                                            ខ្ញុំយល់ស្របជាមួយ <Link href="/terms" className="text-indigo-600 hover:text-indigo-500 font-medium">លក្ខខណ្ឌ</Link> និង <Link href="/privacy" className="text-indigo-600 hover:text-indigo-500 font-medium">គោលការណ៍ភាពឯកជន</Link>
                                        </span>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-indigo-500 transition-colors duration-300 shadow-lg shadow-indigo-500/30 border border-white/20"
                                    >
                                        ចុះឈ្មោះ
                                    </button>
                                </form>
                            )}

                            {/* Divider */}
                            <div className="my-6 flex items-center">
                                <div className="flex-1 border-t border-indigo-500/20"></div>
                                <span className="px-4 text-sm text-gray-500">ឬ</span>
                                <div className="flex-1 border-t border-indigo-500/20"></div>
                            </div>

                            {/* Social Login */}
                            <div className="flex gap-2">
                                <button className="flex-1 bg-white border border-indigo-500/20 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                </button>
                                <button className="flex-1 bg-white border border-indigo-500/20 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </button>
                                <button className="flex-1 bg-white border border-indigo-500/20 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
