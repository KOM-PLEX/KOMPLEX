"use client";

import { BookOpen, Bot, MessageSquare, FileText, Video, Code, Edit } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

const FEATURES = [
    {
        icon: BookOpen,
        title: "មេរៀន",
        href: "/docs",
        description:
            "សិក្សានិងស្រាវជ្រាវ ដោយមានមេរៀនងាយយល់ និងរូបភាពច្បាស់លាស់",
        color: "indigo",
        bgColor: "bg-indigo-50/80",
        borderColor: "border-indigo-600",
        iconColor: "text-indigo-600",
    },
    {
        icon: MessageSquare,
        title: "ការពិភាក្សា",
        href: "/forums",
        description:
            "ចែករំលែកចំណេះដឹង សួរសំណួរ និងពិភាក្សាជាមួយសិស្សដទៃទៀត",
        color: "green",
        bgColor: "bg-green-50/80",
        borderColor: "border-green-600",
        iconColor: "text-green-600",
    },
    {
        icon: FileText,
        title: "អត្ថបទ",
        href: "/blogs",
        description:
            "អានអត្ថបទ ទទួលបានបទពិសោធន៍ និងគន្លឹះសិក្សាពីសិស្ស និងគ្រូផ្សេងទៀត",
        color: "purple",
        bgColor: "bg-purple-50/80",
        borderColor: "border-purple-600",
        iconColor: "text-purple-600",
    },
    {
        icon: Edit,
        title: "លំហាត់អនុវត្តន៍",
        href: "/exercises",
        description:
            "អនុវត្តលំហាត់ដើម្បីបង្កើនជំនាញ ដោះស្រាយបញ្ហា និងទទួលបានរបាយការណ៍ជាក់លាក់",
        color: "orange",
        bgColor: "bg-orange-50/80",
        borderColor: "border-orange-600",
        iconColor: "text-orange-600",
    },
    {
        icon: Video,
        title: "វីដេអូ",
        href: "/videos",
        description:
            "មើលវីដេអូសិក្សា ដែលពន្យល់អំពីគោលគំនិតសំខាន់ៗ",
        color: "red",
        bgColor: "bg-red-50/80",
        borderColor: "border-red-600",
        iconColor: "text-red-600",
    },
    {
        icon: Bot,
        title: "តារា AI",
        href: "/ai",
        description:
            "ប្រើប្រាស់ តារា AI ជាអ្នកជួយសិក្សា ដោះស្រាយបញ្ហា និងផ្តល់ការណែនាំឆាប់រហ័ស",
        color: "blue", // swapped with forum
        bgColor: "bg-blue-50/80",
        borderColor: "border-blue-600",
        iconColor: "text-blue-600",
    },
];


export default function Features() {
    return (
        <section id="features" className="py-20 px-5 bg-white scroll-m-14">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-15"
                >
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">មុខងារសំខាន់ៗ</h2>

                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                    {FEATURES.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`${feature.bgColor} ${feature.borderColor} border-2 rounded-3xl lg:p-8 p-4 shadow-lg transition-all duration-300 backdrop-blur-sm hover:scale-105 cursor-pointer`}
                            >
                                <Link href={feature.href}>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                        whileHover={{ rotate: 360 }}
                                        className={`w-20 h-20 ${feature.bgColor} ${feature.borderColor} border-2 rounded-full flex items-center justify-center mx-auto mb-5`}
                                    >
                                        <Icon size={32} className={feature.iconColor} />
                                    </motion.div>
                                    <h3 className="lg:text-2xl text-xl font-bold text-center text-gray-900 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-center text-sm lg:text-base">
                                        {feature.description}
                                    </p>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}


