'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User, Phone, Calendar, Upload } from 'lucide-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { auth, googleProvider, facebookProvider, microsoftProvider } from '@/config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export default function AuthPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Login form state
    const [loginIdentifier, setLoginIdentifier] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // Signup form state
    const [signupData, setSignupData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: '',
        phone: '',
        profileImage: null as File | null
    });

    // Social login platforms (Firebase)
    const socialPlatforms = [
        {
            name: 'Google',
            provider: 'google',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
            )
        },
        {
            name: 'Facebook',
            provider: 'facebook',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            )
        },
        {
            name: 'Microsoft',
            provider: 'microsoft',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 23 23" fill="#00A4EF">
                    <path d="M0 0h11v11H0zm12 0h11v11H12zM0 12h11v11H0zm12 0h11v11H12z" />
                </svg>
            )
        }
    ];

    // Validation functions
    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidUsername = (username: string) => {
        return username.length >= 3 && username.length <= 20 && /^[a-zA-Z0-9_]+$/.test(username);
    };

    const isValidPassword = (password: string) => {
        return password.length >= 6;
    };

    const isValidPhone = (phone: string) => {
        return /^[0-9+\-\s()]+$/.test(phone);
    };

    const isLoginValid = () => {
        return loginIdentifier.trim() && loginPassword.trim();
    };

    const isSignupValid = () => {
        return (
            signupData.username.trim() &&
            signupData.firstName.trim() &&
            signupData.lastName.trim() &&
            signupData.email.trim() &&
            signupData.password.trim() &&
            signupData.confirmPassword.trim() &&
            signupData.dateOfBirth &&
            signupData.phone.trim() &&
            isValidUsername(signupData.username) &&
            isValidEmail(signupData.email) &&
            isValidPassword(signupData.password) &&
            signupData.password === signupData.confirmPassword &&
            isValidPhone(signupData.phone)
        );
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLoginValid()) return;

        try {
            // Use Firebase email/password login regardless of username/email entered
            const result = await signInWithEmailAndPassword(auth, loginIdentifier, loginPassword);
            const token = await result.user.getIdToken(true);
            const response = await axios.get("http://localhost:6969/auth/me", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            localStorage.setItem("user", JSON.stringify(response.data));

            router.push('/');
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isSignupValid()) return;
        // const {
        //     email,
        //     password,
        //     username,
        //     firstName,
        //     lastName,
        //     dateOfBirth,
        //     isAdmin,
        //     isVerified,
        //     phone,
        //     profileImage,
        //   } = req.body;

        try {
            let imageKey = '';
            if (signupData.profileImage) {
                // presigned url for profile image
                const response = await axios.post("http://localhost:6969/upload/upload-url", {
                    fileName: signupData.profileImage?.name || '',
                    fileType: signupData.profileImage?.type || ''
                }, { withCredentials: true })

                const { signedUrl, key } = response.data;
                // upload file to s3
                await axios.put(signedUrl, signupData.profileImage, {
                    headers: {
                        'Content-Type': signupData.profileImage?.type || ''
                    }
                });
                imageKey = key;
            }

            const result = await createUserWithEmailAndPassword(auth, signupData.email, signupData.password);
            const response = await axios.post("http://localhost:6969/auth/signup", {
                email: signupData.email,
                username: signupData.username,
                uid: result.user.uid,
                firstName: signupData.firstName,
                lastName: signupData.lastName,
                dateOfBirth: signupData.dateOfBirth,
                phone: signupData.phone,
                profileImageKey: imageKey,
            }, { withCredentials: true });


            localStorage.setItem("user", JSON.stringify(response.data));

            // redirect to home page
            router.push('/');
        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    const handleSocialLogin = async (providerKey: 'google' | 'facebook' | 'microsoft') => {
        try {
            const provider =
                providerKey === 'google' ? googleProvider :
                    providerKey === 'facebook' ? facebookProvider :
                        microsoftProvider;
            const result = await signInWithPopup(auth, provider);
            const response = await axios.post("http://localhost:6969/auth/social-login", {
                provider: providerKey,
                email: result.user.email,
                username: result.user.displayName,
                uid: result.user.uid,
                firstName: result.user.displayName?.split(' ')[0],
                lastName: result.user.displayName?.split(' ').slice(1).join(' '),
                dateOfBirth: null,
                phone: '',
                profileImage: result.user.photoURL,
                profileImageKey: null,
            }, { withCredentials: true });

            router.push('/');
        } catch (error) {
            console.error('Social login error:', error);
        }
    };

    const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSignupData(prev => ({ ...prev, profileImage: file }));
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-3xl relative z-10 pt-16">
                {/* Auth Container */}
                <div className="bg-indigo-500/10 backdrop-blur-sm border border-indigo-600 rounded-2xl shadow-xl shadow-indigo-500/10 p-6">
                    {/* Logo and Slogan */}
                    <div className="text-center mb-8">
                        <Link href="/" className="flex items-center justify-center gap-2 mb-4">
                            <img src="/logo.png" alt="" className='w-8 h-8' />
                            <div>
                                <span className="text-4xl font-extrabold tracking-tight text-indigo-600">KOM</span>
                                <span className="text-4xl font-extrabold tracking-tight text-black">PLEX</span>
                            </div>
                        </Link>
                        {/* <p className="text-gray-700 text-xl font-medium mb-2">
                            ប្រព័ន្ធសិក្សា សម្រាប់សិស្សកម្ពុជា
                        </p>
                        <p className="text-gray-600 text-lg">
                            បង្កើតឡើងដោយសិស្សកម្ពុជា
                        </p> */}
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex bg-white rounded-xl p-1 mb-6 border border-indigo-600  mx-auto">
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
                        <form onSubmit={handleLogin} className="space-y-4  mx-auto">
                            <div>
                                <label className="block text-sm font-medium text-black mb-2">
                                    អ៊ីមែល ឬ ឈ្មោះអ្នកប្រើប្រាស់
                                </label>
                                <div className="relative">
                                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                                    <input
                                        type="text"
                                        value={loginIdentifier}
                                        onChange={(e) => setLoginIdentifier(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                                        placeholder="បញ្ចូលអ៊ីមែល ឬ ឈ្មោះអ្នកប្រើប្រាស់"
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
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
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
                                disabled={!isLoginValid()}
                                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-indigo-500 transition-colors duration-300 shadow-lg shadow-indigo-500/30 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                ចូលទៅកាន់
                            </button>
                        </form>
                    )}

                    {/* Signup Form */}
                    {activeTab === 'signup' && (
                        <form onSubmit={handleSignup} className="space-y-6  mx-auto">
                            {/* Profile Image and Basic Info Row */}
                            <div className="flex flex-col lg:flex-row gap-6 items-start">
                                {/* Profile Image */}
                                <div className="flex-shrink-0">
                                    <label className="block text-sm font-medium text-black mb-2">
                                        រូបផ្ទាល់ខ្លួន
                                    </label>
                                    <div className="relative">
                                        <div className="w-32 h-32 rounded-full border-2 border-indigo-300 bg-gray-100 flex items-center justify-center overflow-hidden">
                                            {signupData.profileImage ? (
                                                <img
                                                    src={URL.createObjectURL(signupData.profileImage)}
                                                    alt="Profile preview"
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <Upload size={32} className="text-indigo-400" />
                                            )}
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleProfileImageChange}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                    </div>
                                    {signupData.profileImage && (
                                        <p className="text-green-600 text-xs mt-1 text-center">រូបផ្ទាល់ខ្លួនត្រូវបានជ្រើសរើស</p>
                                    )}
                                </div>

                                {/* Username, First Name, Last Name */}
                                <div className="flex-1 space-y-4 w-full">
                                    <div >
                                        <label className="block text-sm font-medium text-black mb-2">
                                            ឈ្មោះអ្នកប្រើប្រាស់
                                        </label>
                                        <input
                                            type="text"
                                            value={signupData.username}
                                            onChange={(e) => setSignupData(prev => ({ ...prev, username: e.target.value }))}
                                            className="w-full px-4 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                                            placeholder="បញ្ចូលឈ្មោះអ្នកប្រើប្រាស់"
                                        />
                                        {signupData.username && !isValidUsername(signupData.username) && (
                                            <p className="text-red-500 text-xs mt-1">ឈ្មោះអ្នកប្រើប្រាស់ត្រូវតែមាន 3-20 តួអក្សរ និងមិនមានអក្សរពិសេស</p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-sm font-medium text-black mb-2">
                                                ឈ្មោះ
                                            </label>
                                            <input
                                                type="text"
                                                value={signupData.firstName}
                                                onChange={(e) => setSignupData(prev => ({ ...prev, firstName: e.target.value }))}
                                                className="w-full px-4 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                                                placeholder="ឈ្មោះ"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-black mb-2">
                                                នាមត្រកូល
                                            </label>
                                            <input
                                                type="text"
                                                value={signupData.lastName}
                                                onChange={(e) => setSignupData(prev => ({ ...prev, lastName: e.target.value }))}
                                                className="w-full px-4 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                                                placeholder="នាមត្រកូល"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-black mb-2">
                                    អ៊ីមែល
                                </label>
                                <div className="relative">
                                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                                    <input
                                        type="email"
                                        value={signupData.email}
                                        onChange={(e) => setSignupData(prev => ({ ...prev, email: e.target.value }))}
                                        className="w-full pl-10 pr-4 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                                        placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                                    />
                                </div>
                                {signupData.email && !isValidEmail(signupData.email) && (
                                    <p className="text-red-500 text-xs mt-1">សូមបញ្ចូលអ៊ីមែលត្រឹមត្រូវ</p>
                                )}
                            </div>

                            {/* Password and Confirm Password */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">
                                        ពាក្យសម្ងាត់
                                    </label>
                                    <div className="relative">
                                        <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={signupData.password}
                                            onChange={(e) => setSignupData(prev => ({ ...prev, password: e.target.value }))}
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
                                    {signupData.password && !isValidPassword(signupData.password) && (
                                        <p className="text-red-500 text-xs mt-1">ពាក្យសម្ងាត់ត្រូវតែមានយ៉ាងតិច 6 តួអក្សរ</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">
                                        បញ្ជាក់ពាក្យសម្ងាត់
                                    </label>
                                    <div className="relative">
                                        <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                                        <input
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            value={signupData.confirmPassword}
                                            onChange={(e) => setSignupData(prev => ({ ...prev, confirmPassword: e.target.value }))}
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
                                    {signupData.confirmPassword && signupData.password !== signupData.confirmPassword && (
                                        <p className="text-red-500 text-xs mt-1">ពាក្យសម្ងាត់មិនត្រូវគ្នា</p>
                                    )}
                                </div>
                            </div>

                            {/* Date of Birth and Phone */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">
                                        ថ្ងៃខែឆ្នាំកំណើត
                                    </label>
                                    <div className="relative">
                                        <Calendar size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                                        <input
                                            type="date"
                                            value={signupData.dateOfBirth}
                                            onChange={(e) => setSignupData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                                            className="w-full pl-10 pr-4 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">
                                        លេខទូរស័ព្ទ
                                    </label>
                                    <div className="relative">
                                        <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10" />
                                        <input
                                            type="tel"
                                            value={signupData.phone}
                                            onChange={(e) => setSignupData(prev => ({ ...prev, phone: e.target.value }))}
                                            className="w-full pl-10 pr-4 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300"
                                            placeholder="លេខទូរស័ព្ទ"
                                        />
                                    </div>
                                    {signupData.phone && !isValidPhone(signupData.phone) && (
                                        <p className="text-red-500 text-xs mt-1">សូមបញ្ចូលលេខទូរស័ព្ទត្រឹមត្រូវ</p>
                                    )}
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
                                disabled={!isSignupValid()}
                                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-indigo-500 transition-colors duration-300 shadow-lg shadow-indigo-500/30 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                ចុះឈ្មោះ
                            </button>
                        </form>
                    )}

                    {/* Divider */}
                    <div className="my-6 flex items-center  mx-auto">
                        <div className="flex-1 border-t border-indigo-500/20"></div>
                        <span className="px-4 text-sm text-gray-500">ឬ</span>
                        <div className="flex-1 border-t border-indigo-500/20"></div>
                    </div>

                    {/* Social Login */}
                    <div className="flex gap-2 mx-auto">
                        {socialPlatforms.map((platform, index) => (
                            <button
                                key={index}
                                onClick={() => handleSocialLogin(platform.provider as 'google' | 'facebook' | 'microsoft')}
                                className="flex-1 bg-white border border-indigo-500/20 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                {platform.icon}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
