'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { auth, googleProvider, facebookProvider, microsoftProvider } from '@/config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { getCurrentUser, signup, socialLogin } from '@/services/auth';
import { uploadFile } from '@/services/upload';
import {
    validateLoginForm,
    validateSignupForm,
} from '@/utils/validator';
import LogIn from '@/components/pages/auth/LogIn';
import SignUp from '@/components/pages/auth/SignUp';

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

    // Validation functions
    const isLoginValid = () => {
        return validateLoginForm(loginIdentifier, loginPassword);
    };

    const isSignupValid = () => {
        return validateSignupForm(signupData);
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLoginValid()) return;

        try {
            // Use Firebase email/password login regardless of username/email entered
            const result = await signInWithEmailAndPassword(auth, loginIdentifier, loginPassword);
            const token = await result.user.getIdToken(true);
            const userData = await getCurrentUser();

            localStorage.setItem("user", JSON.stringify(userData));

            router.push('/');
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isSignupValid()) return;

        try {
            let imageKey = '';
            if (signupData.profileImage) {
                imageKey = await uploadFile(signupData.profileImage);
            }

            const result = await createUserWithEmailAndPassword(auth, signupData.email, signupData.password);
            const userData = await signup({
                email: signupData.email,
                username: signupData.username,
                uid: result.user.uid,
                firstName: signupData.firstName,
                lastName: signupData.lastName,
                dateOfBirth: signupData.dateOfBirth,
                phone: signupData.phone,
                profileImageKey: imageKey,
            });

            localStorage.setItem("user", JSON.stringify(userData));

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
            const userData = await socialLogin({
                provider: providerKey,
                email: result.user.email || '',
                username: result.user.displayName || '',
                uid: result.user.uid,
                firstName: result.user.displayName?.split(' ')[0] || '',
                lastName: result.user.displayName?.split(' ').slice(1).join(' ') || '',
                dateOfBirth: null,
                phone: '',
                profileImage: result.user.photoURL,
                profileImageKey: null,
            });

            localStorage.setItem("user", JSON.stringify(userData));
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
                        <LogIn
                            loginIdentifier={loginIdentifier}
                            setLoginIdentifier={setLoginIdentifier}
                            loginPassword={loginPassword}
                            setLoginPassword={setLoginPassword}
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                            isLoginValid={isLoginValid}
                            handleLogin={handleLogin}
                        />
                    )}

                    {/* Signup Form */}
                    {activeTab === 'signup' && (
                        <SignUp
                            signupData={signupData}
                            setSignupData={setSignupData}
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                            showConfirmPassword={showConfirmPassword}
                            setShowConfirmPassword={setShowConfirmPassword}
                            isSignupValid={isSignupValid}
                            handleSignup={handleSignup}
                            handleProfileImageChange={handleProfileImageChange}
                        />
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
