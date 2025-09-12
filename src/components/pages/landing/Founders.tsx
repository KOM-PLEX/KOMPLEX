"use client";

import { motion } from "framer-motion";

const FOUNDERS = [
    {
        image: "/angkor.jpg",
        name: "អោយ ចន្ទ័រក្សា",
        role: "កម្មករ",
        description: "អ្នកជំនាញវិទ្យាសាស្ត្រកុំព្យូទ័រ (Bro Next.js)",
        color: "indigo",
        bgColor: "bg-indigo-50/80",
        borderColor: "border-indigo-600",
        iconColor: "text-indigo-600"
    },
    {
        image: "/angkor.jpg",
        name: "អ៊ុក វឌ្ឍនា",
        role: "មេការ សំណង់",
        description: "អ្នកអភិវឌ្ឍន៍វេបសាយ (bro pdf)",
        color: "green",
        bgColor: "bg-green-50/80",
        borderColor: "border-green-600",
        iconColor: "text-green-600"
    },
    {
        image: "/angkor.jpg",
        name: "ម៉ាន អារ៉ាហ្វាត",
        role: "កម្មករ",
        description: "អ្នកជំនាញ(front-end) (bro typescript)",
        color: "blue",
        bgColor: "bg-blue-50/80",
        borderColor: "border-blue-600",
        iconColor: "text-blue-600"
    },
    {
        image: "/angkor.jpg",
        name: "ហាក់ គីមលី",
        role: "cashier",
        description: "អ្នកជំនាញគណនី (sis excel)",
        color: "purple",
        bgColor: "bg-purple-50/80",
        borderColor: "border-purple-600",
        iconColor: "text-purple-600"
    },
    {
        image: "/angkor.jpg",
        name: "សៅ វិសាល",
        role: "អ្នក backend",
        description: "អ្នកជំនាញខ្ជិលធ្វើ front-end (bro fast-api)",
        color: "red",
        bgColor: "bg-red-50/80",
        borderColor: "border-red-600",
        iconColor: "text-red-600"
    },
    {
        image: "/angkor.jpg",
        name: "កែវ ហេងណៃតុង",
        role: "មេ algorithm",
        description: "អ្នកជំនាញមកយឺត time complexity មកសាលា O(n!) (bro c++)",
        color: "orange",
        bgColor: "bg-orange-50/80",
        borderColor: "border-orange-600",
        iconColor: "text-orange-600"
    }
];

export default function Founders() {
    return (
        <section id="founders" className="pb-20 px-5 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-15"
                >
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">ស្ថាបនិក</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {FOUNDERS.map((founder, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`${founder.bgColor} ${founder.borderColor} border-2 rounded-2xl p-8 shadow-lg transition-all duration-300 backdrop-blur-sm hover:scale-101`}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                className={`w-20 h-20 ${founder.bgColor} ${founder.borderColor} border-2 rounded-full flex items-center justify-center mx-auto mb-5 overflow-hidden`}
                            >
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-full h-full object-cover rounded-full"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        target.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                            </motion.div>
                            <h3 className="text-2xl text-center font-bold text-gray-900 mb-2">{founder.name}</h3>
                            <div className={`${founder.iconColor} font-semibold text-base mb-4 text-center`}>{founder.role}</div>
                            <p className="text-gray-600 leading-relaxed text-center">{founder.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}


