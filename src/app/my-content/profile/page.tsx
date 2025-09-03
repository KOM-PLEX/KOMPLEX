'use client';

import Sidebar from '@/components/pages/my-content/Sidebar';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { Mail, Calendar, Phone, User as UserIcon, AtSign, ShieldCheck, ShieldAlert } from 'lucide-react';

export default function ProfilePage() {
    const { user, userOAuth, loading } = useAuth();

    if (loading) {
        return (
            <div className="pt-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="animate-pulse h-32 bg-gray-100 rounded-xl" />
                </div>
            </div>
        );
    }

    if (!user && !userOAuth) {
        return (
            <div className="pt-20 px-6">
                <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl p-6 text-center">
                    <p className="text-gray-700 mb-4">អ្នកមិនទាន់បានចូលគណនីទេ</p>
                    <Link href="/auth" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:bg-indigo-500 transition-colors duration-300">ចូលទៅកាន់</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="px-6">
            <Sidebar></Sidebar>
            <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
                {/* OAuth profile section */}
                {userOAuth && (
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-4">
                                {userOAuth.photoURL ? (
                                    <img src={userOAuth.photoURL} alt="Profile" className="w-20 h-20 rounded-full object-cover border border-indigo-500" />
                                ) : (
                                    <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                                        {(userOAuth.displayName || userOAuth.email || 'U').charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <h1 className="text-2xl font-semibold text-gray-900">{userOAuth.displayName || 'អ្នកប្រើប្រាស់'}</h1>
                                        <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full border ${userOAuth.emailVerified ? 'text-green-700 bg-green-50 border-green-200' : 'text-amber-700 bg-amber-50 border-amber-200'}`}>
                                            {userOAuth.emailVerified ? <ShieldCheck size={14} /> : <ShieldAlert size={14} />}
                                            {userOAuth.emailVerified ? ' បានផ្ទៀងផ្ទាត់អ៊ីមែល' : ' អ៊ីមែលមិនទាន់ផ្ទៀងផ្ទាត់'}
                                        </span>
                                    </div>
                                    <div className="mt-1 flex items-center gap-2 text-gray-600">
                                        <Mail size={16} /> <span className="text-sm">{userOAuth.email || '-'}</span>
                                    </div>
                                    <div className="mt-1 flex items-center gap-2 text-gray-600">
                                        <span className="text-xs bg-gray-100 border border-gray-200 rounded-full px-2 py-0.5">{userOAuth.providerData?.map(p => p.providerId).join(', ') || 'oauth'}</span>
                                    </div>
                                </div>
                            </div>
                            <Link href="/settings" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 border border-white/20">
                                កែប្រែព័ត៌មាន
                            </Link>
                        </div>

                        <div className="h-px bg-gray-200 my-5" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 hover:bg-white transition-colors rounded-xl p-4 border border-gray-100 hover:border-indigo-100">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600"><AtSign size={16} /></div>
                                    <div>
                                        <div className="text-xs text-gray-500">ឈ្មោះ</div>
                                        <div className="text-gray-900 font-medium">{userOAuth.displayName || '-'}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 hover:bg-white transition-colors rounded-xl p-4 border border-gray-100 hover:border-indigo-100">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600"><Mail size={16} /></div>
                                    <div>
                                        <div className="text-xs text-gray-500">អ៊ីមែល</div>
                                        <div className="text-gray-900 font-medium">{userOAuth.email || '-'}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 hover:bg-white transition-colors rounded-xl p-4 border border-gray-100 hover:border-indigo-100">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600"><Calendar size={16} /></div>
                                    <div>
                                        <div className="text-xs text-gray-500">ចូលចុងក្រោយ</div>
                                        <div className="text-gray-900 font-medium">{userOAuth.metadata?.lastSignInTime || '-'}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 hover:bg-white transition-colors rounded-xl p-4 border border-gray-100 hover:border-indigo-100">
                                <div className="flex items-center gap-3">
                                    <div className={`${userOAuth.emailVerified ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'} p-2 rounded-lg`}>{userOAuth.emailVerified ? <ShieldCheck size={16} /> : <ShieldAlert size={16} />}</div>
                                    <div>
                                        <div className="text-xs text-gray-500">ស្ថានភាពអ៊ីមែល</div>
                                        <div className="text-gray-900 font-medium">{userOAuth.emailVerified ? 'បានផ្ទៀងផ្ទាត់' : 'មិនបានផ្ទៀងផ្ទាត់'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-gray-200 my-5" />
                    </div>
                )}

                {/* Local user profile section */}
                {user && (
                    <div className="bg-white border border-gray-200 rounded-2xl p-6">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-4">
                                {user.profileImage ? (
                                    <img src={user.profileImage} alt="Profile" className="w-20 h-20 rounded-full object-cover border border-indigo-500" />
                                ) : (
                                    <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                                        {((`${user.firstName || ''} ${user.lastName || ''}`.trim()) || user.username || user.email || 'U').charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <h1 className="text-2xl font-semibold text-gray-900">{`${user.firstName || ''} ${user.lastName || ''}`.trim() || user.username}</h1>
                                    </div>
                                    <div className="mt-1 flex items-center gap-2 text-gray-600">
                                        <Mail size={16} /> <span className="text-sm">{user.email}</span>
                                    </div>
                                </div>
                            </div>
                            <Link href="/settings" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 border border-white/20">
                                កែប្រែព័ត៌មាន
                            </Link>
                        </div>

                        <div className="h-px bg-gray-200 my-5" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 hover:bg-white transition-colors rounded-xl p-4 border border-gray-100 hover:border-indigo-100">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600"><AtSign size={16} /></div>
                                    <div>
                                        <div className="text-xs text-gray-500">ឈ្មោះអ្នកប្រើប្រាស់</div>
                                        <div className="text-gray-900 font-medium">{user.username}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 hover:bg-white transition-colors rounded-xl p-4 border border-gray-100 hover:border-indigo-100">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600"><UserIcon size={16} /></div>
                                    <div>
                                        <div className="text-xs text-gray-500">ឈ្មោះ</div>
                                        <div className="text-gray-900 font-medium">{user.firstName || '-'}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 hover:bg-white transition-colors rounded-xl p-4 border border-gray-100 hover:border-indigo-100">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600"><UserIcon size={16} /></div>
                                    <div>
                                        <div className="text-xs text-gray-500">នាមត្រកូល</div>
                                        <div className="text-gray-900 font-medium">{user.lastName || '-'}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 hover:bg-white transition-colors rounded-xl p-4 border border-gray-100 hover:border-indigo-100">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600"><Calendar size={16} /></div>
                                    <div>
                                        <div className="text-xs text-gray-500">ថ្ងៃខែឆ្នាំកំណើត</div>
                                        <div className="text-gray-900 font-medium">{user.dateOfBirth || '-'}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 hover:bg-white transition-colors rounded-xl p-4 border border-gray-100 hover:border-indigo-100">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600"><Phone size={16} /></div>
                                    <div>
                                        <div className="text-xs text-gray-500">លេខទូរស័ព្ទ</div>
                                        <div className="text-gray-900 font-medium">{user.phone || '-'}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 hover:bg-white transition-colors rounded-xl p-4 border border-gray-100 hover:border-indigo-100">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${user.isVerified ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>{user.isVerified ? <ShieldCheck size={16} /> : <ShieldAlert size={16} />}</div>
                                    <div>
                                        <div className="text-xs text-gray-500">ស្ថានភាព</div>
                                        <div className="text-gray-900 font-medium">{user.isVerified ? 'បានផ្ទៀងផ្ទាត់' : 'មិនបានផ្ទៀងផ្ទាត់'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-gray-200 my-5" />
                    </div>
                )}
            </div>
        </div>
    );
}


