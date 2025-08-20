// THINGS TO ADD TO THIS COMPONENT:

// - Lessons have images, forumulas, exam questions, questions and answers at the end of each lesson, and more
// - Add exercise feature to practice feature (the one that only has ai)
// - Add images to everything





"use client";

import { motion } from "framer-motion";
import { BookOpen, ImageIcon, ChartBar, CheckCircle, FileText, MessageSquare, Bot, Brain, Video, Github } from "lucide-react";
import ThreeDBox from "@/components/pages/docs/common/box/3DBox";
import GraphBox from "@/components/pages/docs/common/box/GraphBox";
import { Stars } from "@react-three/drei";
import ExerciseBox from "../docs/common/box/ExerciseBox";
import { InlineMath } from "react-katex";

const EXERCISE_QUESTIONS = [
    {
        id: "1",
        question: (
            <div>
                គណនាលីមីតនៃអនុគមន៍ <InlineMath math="f(x) = \frac{x^2 - 4}{x - 2}" /> នៅពេល x ខិតទៅ 2
            </div>
        ),
        options: [
            <InlineMath key={1} math="\lim_{x \to 2} f(x) = 0" />,
            <InlineMath key={2} math="\lim_{x \to 2} f(x) = 4" />,
            <InlineMath key={3} math="\lim_{x \to 2} f(x) = 2" />,
            <InlineMath key={4} math="\lim_{x \to 2} f(x) = \infty" />
        ],
        correctAnswer: 1
    },
    {
        id: "2",
        question: (
            <div>
                គណនាអាំងតេក្រាល <InlineMath math="\int_0^1 x^2 dx" />
            </div>
        ),
        options: [
            <InlineMath key={1} math="\frac{1}{2}" />,
            <InlineMath key={2} math="\frac{1}{3}" />,
            <InlineMath key={3} math="\frac{1}{4}" />,
            <InlineMath key={4} math="\frac{1}{6}" />
        ],
        correctAnswer: 1
    },
    {
        id: "3",
        question: (
            <div>
                គណនាដេរីវេនៃអនុគមន៍ <InlineMath math="f(x) = \sin(x) \cos(x)" />
            </div>
        ),
        options: [
            <InlineMath key={1} math="f'(x) = \cos^2(x) - \sin^2(x)" />,
            <InlineMath key={2} math="f'(x) = 2\sin(x)\cos(x)" />,
            <InlineMath key={3} math="f'(x) = \sin^2(x) - \cos^2(x)" />,
            <InlineMath key={4} math="f'(x) = -2\sin(x)\cos(x)" />
        ],
        correctAnswer: 0
    },
    {
        id: "4",
        question: (
            <div>
                គណនាអាំងតេក្រាល <InlineMath math="\int e^x \sin(x) dx" />
            </div>
        ),
        options: [
            <InlineMath key={1} math="\frac{e^x}{2}(\sin(x) + \cos(x)) + C" />,
            <InlineMath key={2} math="\frac{e^x}{2}(\sin(x) - \cos(x)) + C" />,
            <InlineMath key={3} math="e^x(\sin(x) - \cos(x)) + C" />,
            <InlineMath key={4} math="e^x(\sin(x) + \cos(x)) + C" />
        ],
        correctAnswer: 1
    }
];

export default function AboutFeatures() {
    return (
        <section className="py-20 px-5 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-15"
                >
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">មុខងារមេរៀន</h2>
                </motion.div>

                {/* Lesson Navigation Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                            <BookOpen size={24} className="text-indigo-600 mt-2" />
                            មេរៀន</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            រៀនគណិតវិទ្យាតាមរយៈមេរៀនដែលស្រួលយល់ និងរូបភាពច្បាស់លាស់។
                            អ្នកអាចរុករកមេរៀនតាមថ្នាក់រៀន និងមុខវិជ្ជាបានយ៉ាងងាយស្រួល។
                        </p>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-3 text-gray-600"
                        >
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-indigo-600" />
                                រុករកមេរៀនតាមថ្នាក់រៀន និងមុខវិជ្ជា
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-indigo-600" />
                                រូបភាពច្បាស់លាស់
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-indigo-600" />
                                ការណែនាំជាក់លាក់សម្រាប់គ្រប់គោលគំនិត
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="bg-white rounded-2xl p-6 shadow-lg"
                    >
                        <div className="w-full h-80 bg-gray-100 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-500">រូបភាពមេរៀនអន្តរកម្មនឹងត្រូវបានបង្ហាញនៅទីនេះ</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 3D Model Viewing */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:order-2 space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                            <ImageIcon size={24} className="text-indigo-600 mt-2" />
                            រូបភាព 3D
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            រៀនតាមរយៈរូបភាព 3D ដែលធ្វើឱ្យគោលគំនិតស្មុគស្មាញកាន់តែងាយយល់។
                        </p>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-3 text-gray-600"
                        >

                            {/* //! TO CHANGE */}
                            <motion.li
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                បង្វិលរូបភាព 360° ដើម្បីមើលគ្រប់មុំ
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                ពង្រីក និងធ្វើឱ្យតូចដើម្បីមើលលម្អិត
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                បន្ថែមអត្ថបទ 3D ដើម្បីពន្យល់បន្ថែម
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:order-1"
                    >
                        <ThreeDBox
                            src="/adult_brain.glb"
                            scale={20}
                            target={[0, 0, 0]}
                            canvasBackgroundColor="gray"
                            title="រូបភាព 3D"
                            height={500}
                            canvasBackground={<Stars radius={100} depth={50} count={5000} factor={4} fade />}
                            threeDText={[
                                // { content: "រូបភាព ខួរក្បាល", position: [0, 1, -2], fontSize: 0.8, color: "black" },
                                { content: "--- ខួរធំ", position: [0.6, 0.5, 0.2], fontSize: 0.2, color: "black" },
                                { content: "ខួរតូច -----", position: [-0.45, -0.1, -0.25], fontSize: 0.2, color: "black" },
                                { content: "--- ខួរកាញ់ចឹងក", position: [0.7, -0.5, -0.13], fontSize: 0.2, color: "black" },
                            ]}
                        />
                    </motion.div>
                </motion.div>

                {/* Graph Viewing */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                            <ChartBar size={24} className="text-indigo-600 mt-2" />
                            ក្រាប</h3>
                        <p className="text-lg text-gray-600 leading-relaxed flex items-center gap-2">
                            បង្កើត និងពិសោធន៍ជាមួយក្រាប។
                            អ្នកអាចបង្កើតក្រាប និងមើលពីរបៀបដែលវាផ្លាស់ប្តូរ។
                        </p>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-3 text-gray-600"
                        >
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-blue-600" />
                                បង្កើតក្រាបគណិតវិទ្យាស្មុគស្មាញ
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-blue-600" />
                                បង្ហាញអនុគមន៍ជាច្រើនក្នុងពេលតែមួយ
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-blue-600" />
                                ពិសោធន៍ជាមួយប៉ារ៉ាម៉ែត្រផ្សេងៗ
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <GraphBox
                            expressions={[
                                { id: "1", latex: "y = x^2", color: "#3B82F6" },
                                { id: "2", latex: "y = \\sin(x)", color: "#EF4444" },
                                { id: "3", latex: "y = \\frac{1}{x}", color: "#10B981" }
                            ]}
                        />
                    </motion.div>
                </motion.div>

                {/* Exercise System */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:order-2 space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                            <BookOpen size={24} className="text-indigo-600 mt-2" />
                            លំហាត់អនុវត្តន៍ក្នុងមេរៀន</h3>

                        {/* //! TO CHANGE */}
                        <p className="text-lg text-gray-600 leading-relaxed">
                            ធ្វើលំហាត់អនុវត្តន៍ជាមួយនឹងការណែនាំជាក់លាក់។
                        </p>

                        {/* //! TO CHANGE */}
                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-3 text-gray-600"
                        >
                            <motion.li
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-purple-600" />
                                លំហាត់អនុវត្តន៍ជាមួយនឹងការណែនាំជាក់លាក់
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-purple-600" />
                                ការវាយតម្លៃដោយភ្លាមៗ
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-purple-600" />
                                ការណែនាំពិស្តារ និងដំណោះស្រាយ
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:order-1"
                    >
                        <ExerciseBox questions={EXERCISE_QUESTIONS} />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-15"
                >
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">មុខងារអនុវត្តន៍</h2>
                </motion.div>

                {/* AI Assistant */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                            <Bot size={24} className="text-indigo-600 mt-2" />
                            KOMPLEX AI</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            KOMPLEX AI ដែលអាចជួយដោះស្រាយបញ្ហាគណិតវិទ្យា និងផ្តល់ការណែនាំជាក់លាក់។
                            សួរសំណួរណាមួយដែលអ្នកមាន។
                        </p>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-3 text-gray-600"
                        >
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                ដោះស្រាយបញ្ហាគណិតវិទ្យាជាមួយនឹងការណែនាំជាក់លាក់
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                ពន្យល់គោលគំនិតស្មុគស្មាញឱ្យកាន់តែងាយយល់
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                ផ្តល់ឧទាហរណ៍ និងលំហាត់បន្ថែម
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="bg-white rounded-2xl p-6 shadow-lg"
                    >
                        <div className="w-full h-80 bg-gray-100 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                                <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-500">រូបភាពអ្នកជំនាញ AI នឹងត្រូវបានបង្ហាញនៅទីនេះ</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-15"
                >
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">មុខងារចែករំលែក</h2>
                </motion.div>

                {/* Blog Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                            <FileText size={24} className="text-indigo-600 mt-2" />
                            អត្ថបទ</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            អានអត្ថបទ ប្រើបទពិសោធន៍ និងគន្លឹះសិក្សាពីសិស្ស និងគ្រូផ្សេងទៀត។
                        </p>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-3 text-gray-600"
                        >
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-orange-600" />
                                បង្កើតអត្ថបទចែករំលែកបទពិសោធន៍
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-orange-600" />
                                ចែករំលែកគន្លឹះ និងវិធីសាស្ត្ររៀន
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-orange-600" />
                                អានបទពិសោធន៍ពីសិស្សដទៃទៀត
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="bg-white rounded-2xl p-6 shadow-lg"
                    >
                        <div className="w-full h-80 bg-gray-100 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-500">រូបភាពប្លុកនឹងត្រូវបានបង្ហាញនៅទីនេះ</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Forum Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:order-2 space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                            <MessageSquare size={24} className="text-indigo-600 mt-2" />
                            វេទិកាពិភាក្សា</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            ចូលរួមក្នុងការពិភាក្សាជាមួយសិស្សដទៃទៀត។
                            សួរសំណួរ និងចែករំលែកចំណេះដឹងរបស់អ្នក។
                        </p>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-3 text-gray-600"
                        >
                            <motion.li
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-blue-600" />
                                ចូលរួមក្នុងការពិភាក្សាជាមួយសិស្សដទៃទៀត
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-blue-600" />
                                សួរសំណួរ និងរកដំណោះស្រាយ
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-blue-600" />
                                ស្វែងរកគន្លឹះ និងដំណោះស្រាយ
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:order-1 bg-white rounded-2xl p-6 shadow-lg"
                    >
                        <div className="w-full h-80 bg-gray-100 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                                <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-500">រូបភាពវេទិកានឹងត្រូវបានបង្ហាញនៅទីនេះ</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Videos Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
                >

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:order-1 space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                            <Video size={24} className="text-indigo-600 " />
                            វីដេអូ</h3>

                        {/* //! TO CHANGE */}
                        <p className="text-lg text-gray-600 leading-relaxed">
                            មើលវីដេអូរៀនឥតគិតថ្លៃដែលពន្យល់អំពីគោលគំនិតសំខាន់ៗ។
                            វីដេអូយើងត្រូវបានធ្វើឡើងដោយអ្នកជំនាញដើម្បីជួយអ្នកយល់។
                        </p>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-3 text-gray-600"
                        >
                            <motion.li
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-red-600" />
                                វីដេអូរៀនគណិតវិទ្យាឥតគិតថ្លៃ
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-red-600" />
                                ការពន្យល់ជាក់លាក់ដោយអ្នកជំនាញ
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-red-600" />
                                វីដេអូអន្តរកម្មជាមួយនឹងការអនុវត្តន៍
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:order-1 bg-white rounded-2xl p-6 shadow-lg"
                    >
                        <div className="w-full h-80 bg-gray-100 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                                <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-500">វីដេអូរៀននឹងត្រូវបានបង្ហាញនៅទីនេះ</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
}


