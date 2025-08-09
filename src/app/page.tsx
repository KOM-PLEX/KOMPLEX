'use client'

import Footer from "@/components/common/Footer";
import Link from "next/link";
import Header from "@/components/common/Header";
import { Play, ArrowRight, BookOpen, Bot, MessageSquare, FileText, Video, Code, Target, CheckCircle, Rocket, Users, Globe, Heart, Brain, Github } from "lucide-react";
import ThreeDBox from "@/components/pages/docs/common/box/3DBox";
import GraphBox from "@/components/pages/docs/common/box/GraphBox";
import ExerciseBox from "@/components/pages/docs/common/box/ExerciseBox";
import { BlockMath, InlineMath } from 'react-katex';
import { Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import 'katex/dist/katex.min.css';

const GOAL_LIST_ITEMS = [
  "ផ្តល់ជាមេរៀនឥតគិតថ្លៃ និងអាចរៀនដោយខ្លួនឯក",
  "ជួយឱ្យយល់ជ្រៅជាងការចងចាំដោយគ្មានការយល់",
  "ផ្តល់ជាមេរៀនអន្តរកម្ម និងរូបភាពច្បាស់លាស់",
  "បង្កើតសហគមន៍រៀនជាមួយគ្នា",
  "បើកចំហសម្រាប់ការរួមចំណែក និងពង្រីកមេរៀន"
];

const FEATURES = [
  {
    icon: BookOpen,
    title: "មេរៀនអន្តរកម្ម",
    description: "រៀនគណិតវិទ្យា និងវិទ្យាសាស្ត្រជាមួយនឹងមេរៀនដែលមានការអន្តរកម្ម និងរូបភាពច្បាស់លាស់",
    color: "indigo",
    bgColor: "bg-indigo-50/80",
    borderColor: "border-indigo-600",
    iconColor: "text-indigo-600"
  },
  {
    icon: Bot,
    title: "អ្នកជំនាញ AI",
    description: "អ្នកជំនាញ AI ដែលអាចជួយដោះស្រាយបញ្ហាគណិតវិទ្យា និងផ្តល់ការណែនាំជាក់លាក់",
    color: "green",
    bgColor: "bg-green-50/80",
    borderColor: "border-green-600",
    iconColor: "text-green-600"
  },
  {
    icon: MessageSquare,
    title: "វេទិកាពិភាក្សា",
    description: "ចែករំលែកចំណេះដឹង និងសួរសំណួរជាមួយសិស្សដទៃទៀត",
    color: "blue",
    bgColor: "bg-blue-50/80",
    borderColor: "border-blue-600",
    iconColor: "text-blue-600"
  },
  {
    icon: FileText,
    title: "ប្លុកបទពិសោធន៍",
    description: "អានបទពិសោធន៍ និងគន្លឹះរៀនពីសិស្សដទៃទៀត",
    color: "purple",
    bgColor: "bg-purple-50/80",
    borderColor: "border-purple-600",
    iconColor: "text-purple-600"
  },
  {
    icon: Video,
    title: "វីដេអូឥតគិតថ្លៃ",
    description: "មើលវីដេអូរៀនឥតគិតថ្លៃ ដែលពន្យល់អំពីគោលគំនិតសំខាន់ៗ",
    color: "red",
    bgColor: "bg-red-50/80",
    borderColor: "border-red-600",
    iconColor: "text-red-600"
  },
  {
    icon: Code,
    title: "ប្រភពបើកចំហ",
    description: "ប្រព័ន្ធបើកចំហ ដែលអាចរួមចំណែក និងពង្រីកមេរៀនបាន",
    color: "orange",
    bgColor: "bg-orange-50/80",
    borderColor: "border-orange-600",
    iconColor: "text-orange-600"
  }
];

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

const FOUNDERS = [
  {
    image: "/angkor.jpg",
    name: "អោយ ចន្ទ័រក្សា",
    role: "ប្រធានគ្រឹះស្ថាន",
    description: "អ្នកជំនាញវិទ្យាសាស្ត្រកុំព្យូទ័រ និងអ្នកអប់រំដែលមានបទពិសោធន៍ជាង ១០ ឆ្នាំក្នុងការបង្រៀន STEM",
    color: "indigo",
    bgColor: "bg-indigo-50/80",
    borderColor: "border-indigo-600",
    iconColor: "text-indigo-600"
  },
  {
    image: "/angkor.jpg",
    name: "អុក វឌ្ឍនា",
    role: "អ្នកគ្រប់គ្រងផលិតកម្ម",
    description: "អ្នកអភិវឌ្ឍន៍វេបសាយ និងអ្នករចនាប្រព័ន្ធដែលមានចំណាប់អារម្មណ៍ខ្លាំងក្នុងការអប់រំ",
    color: "green",
    bgColor: "bg-green-50/80",
    borderColor: "border-green-600",
    iconColor: "text-green-600"
  },
  {
    image: "/angkor.jpg",
    name: "មំាន អារ៉ាហ្វាត",
    role: "អ្នកគ្រប់គ្រងគម្រោង",
    description: "អ្នកជំនាញគណិតវិទ្យា និងអ្នកបង្រៀនដែលមានបទពិសោធន៍ក្នុងការបង្កើតមេរៀនអន្តរកម្ម",
    color: "blue",
    bgColor: "bg-blue-50/80",
    borderColor: "border-blue-600",
    iconColor: "text-blue-600"
  },
  {
    image: "/angkor.jpg",
    name: "ហាក់ គីមលី",
    role: "អ្នកគ្រប់គ្រងអ្នកប្រើប្រាស់",
    description: "អ្នកជំនាញវិទ្យាសាស្ត្រអប់រំ និងអ្នកអភិវឌ្ឍន៍មេរៀនដែលមានចំណាប់អារម្មណ៍ខ្លាំងក្នុងការធ្វើឱ្យការរៀនកាន់តែងាយស្រួល",
    color: "purple",
    bgColor: "bg-purple-50/80",
    borderColor: "border-purple-600",
    iconColor: "text-purple-600"
  },
  {
    image: "/angkor.jpg",
    name: "សៅ វិសាល",
    role: "អ្នកគ្រប់គ្រងអ្នកប្រើប្រាស់",
    description: "អ្នកជំនាញវិទ្យាសាស្ត្រអប់រំ និងអ្នកអភិវឌ្ឍន៍មេរៀនដែលមានចំណាប់អារម្មណ៍ខ្លាំងក្នុងការធ្វើឱ្យការរៀនកាន់តែងាយស្រួល",
    color: "red",
    bgColor: "bg-red-50/80",
    borderColor: "border-red-600",
    iconColor: "text-red-600"
  },
  {
    image: "/angkor.jpg",
    name: "កែវ ហេងណែតុង",
    role: "អ្នកគ្រប់គ្រងអ្នកប្រើប្រាស់",
    description: "អ្នកជំនាញវិទ្យាសាស្ត្រអប់រំ និងអ្នកអភិវឌ្ឍន៍មេរៀនដែលមានចំណាប់អារម្មណ៍ខ្លាំងក្នុងការធ្វើឱ្យការរៀនកាន់តែងាយស្រួល",
    color: "orange",
    bgColor: "bg-orange-50/80",
    borderColor: "border-orange-600",
    iconColor: "text-orange-600"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="mt-15 pt-40 pb-40 px-5 bg-indigo-600 text-white text-center relative ">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30 z-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="white" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grain)" />
          </svg>
        </div>

        {/* 3D Image Placeholders */}
        <div className="absolute inset-0 overflow-hidden">
          {/* App Screenshot 1 */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -12 }}
            animate={{ opacity: 1, x: 0, rotate: 12 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-20 left-10 w-32 h-48 bg-white/10 backdrop-blur-sm rounded-xl transform rotate-12 shadow-2xl border border-white/20"
          >
            <div className="w-full h-full flex items-center justify-center text-white/60 text-xs">
              App Screenshot 1
            </div>
          </motion.div>

          {/* App Screenshot 2 */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 6 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute top-32 right-20 w-28 h-40 bg-white/10 backdrop-blur-sm rounded-xl transform -rotate-6 shadow-2xl border border-white/20"
          >
            <div className="w-full h-full flex items-center justify-center text-white/60 text-xs">
              App Screenshot 2
            </div>
          </motion.div>

          {/* App Screenshot 3 */}
          <motion.div
            initial={{ opacity: 0, y: 100, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute bottom-20 left-1/4 w-36 h-52 bg-white/10 backdrop-blur-sm rounded-xl transform rotate-3 shadow-2xl border border-white/20"
          >
            <div className="w-full h-full flex items-center justify-center text-white/60 text-xs">
              App Screenshot 3
            </div>
          </motion.div>

          {/* App Screenshot 4 */}
          <motion.div
            initial={{ opacity: 0, y: 100, rotate: 12 }}
            animate={{ opacity: 1, y: 0, rotate: -12 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-32 right-10 w-24 h-36 bg-white/10 backdrop-blur-sm rounded-xl transform -rotate-12 shadow-2xl border border-white/20"
          >
            <div className="w-full h-full flex items-center justify-center text-white/60 text-xs">
              App Screenshot 4
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mb-5 leading-tight"
          >
            ប្រព័ន្ធរៀន STEM សម្រាប់សិស្សខ្មែរ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl opacity-90 max-w-2xl mx-auto mb-10"
          >
            រៀនគណិតវិទ្យា និងវិទ្យាសាស្ត្រដោយឥតគិតថ្លៃ ជាមួយនឹងមេរៀនអន្តរកម្ម និងអ្នកជំនាញ AI
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-5 justify-center flex-wrap"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#features"
                className="bg-white text-indigo-600 px-8 py-4 rounded-2xl no-underline font-semibold text-base transition-all duration-300 hover:bg-gray-100 flex items-center gap-2"
              >
                <Play size={20} />
                ចាប់ផ្តើមរៀន
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#goals"
                className="bg-transparent text-white px-8 py-4 rounded-2xl no-underline font-semibold text-base transition-all duration-300 border-2 border-white hover:bg-white/10 flex items-center gap-2"
              >
                <ArrowRight size={20} />
                ស្វែងយល់បន្ថែម
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-15"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">មុខងារសំខាន់ៗ</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ប្រព័ន្ធរៀនដែលមានមុខងារល្អជាមួយនឹងបទពិសោធន៍រៀនដ៏អស្ចារ្យ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${feature.bgColor} ${feature.borderColor} border-2 rounded-2xl p-8 shadow-lg transition-all duration-300 backdrop-blur-sm hover:scale-105`}
                >
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
                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Features Section */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-15"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">អំពីមុខងារ</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ស្វែងយល់ពីមុខងារផ្សេងៗដែលធ្វើឱ្យការរៀនកាន់តែគួរឱ្យចាប់អារម្មណ៍
            </p>
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
              <h3 className="text-3xl font-bold text-gray-900">មេរៀនអន្តរកម្ម</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                រៀនគណិតវិទ្យាតាមរយៈមេរៀនដែលមានការអន្តរកម្ម និងរូបភាពច្បាស់លាស់។
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
                  មេរៀនអន្តរកម្មជាមួយនឹងរូបភាពច្បាស់លាស់
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
              whileHover={{ scale: 1.02 }}
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
              <h3 className="text-3xl font-bold text-gray-900">មើលរូបភាព 3D</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                រៀនគណិតវិទ្យាតាមរយៈរូបភាព 3D ដែលអាចធ្វើឱ្យគោលគំនិតស្មុគស្មាញកាន់តែងាយយល់។
                អ្នកអាចបង្វិល និងពង្រីករូបភាពដើម្បីយល់ជ្រៅជាង។
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
              whileHover={{ scale: 1.02 }}
              className="lg:order-1"
            >
              <ThreeDBox
                src="/test4.glb"
                scale={0.7}
                target={[0, 0, 0]}
                canvasBackgroundColor="black"
                title="រូបភាព 3D"
                height={500}
                canvasBackground={<Stars radius={100} depth={50} count={5000} factor={4} fade />}
                threeDText={[
                  { content: "រូបភាព 3D", position: [0, 1, -1], fontSize: 0.8, color: "white" },
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
              <h3 className="text-3xl font-bold text-gray-900">ក្រាបអន្តរកម្ម</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                បង្កើត និងពិសោធន៍ជាមួយក្រាបគណិតវិទ្យាតាមរយៈ Desmos ដែលមានអន្តរកម្ម។
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
              whileHover={{ scale: 1.02 }}
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
              <h3 className="text-3xl font-bold text-gray-900">ប្រព័ន្ធលំហាត់អនុវត្តន៍</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                ធ្វើលំហាត់អនុវត្តន៍ជាមួយនឹងការណែនាំជាក់លាក់។
                ប្រព័ន្ធយើងមានលំហាត់គណិតវិទ្យាជាច្រើនដែលជួយអ្នកយល់គោលគំនិត។
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
              whileHover={{ scale: 1.02 }}
              className="lg:order-1"
            >
              <ExerciseBox questions={EXERCISE_QUESTIONS} />
            </motion.div>
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
              <h3 className="text-3xl font-bold text-gray-900">ប្លុកបទពិសោធន៍</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                អានបទពិសោធន៍ និងគន្លឹះរៀនពីសិស្សដទៃទៀត។
                ចែករំលែកបទពិសោធន៍រៀនរបស់អ្នកជាមួយសហគមន៍។
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
                  បង្កើតប្លុកបទពិសោធន៍រៀន
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
              whileHover={{ scale: 1.02 }}
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
              <h3 className="text-3xl font-bold text-gray-900">វេទិកាពិភាក្សា</h3>
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
              whileHover={{ scale: 1.02 }}
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
              <h3 className="text-3xl font-bold text-gray-900">អ្នកជំនាញ AI</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                អ្នកជំនាញ AI ដែលអាចជួយដោះស្រាយបញ្ហាគណិតវិទ្យា និងផ្តល់ការណែនាំជាក់លាក់។
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
              whileHover={{ scale: 1.02 }}
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
              className="lg:order-2 space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-900">វីដេអូរៀនឥតគិតថ្លៃ</h3>
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
              whileHover={{ scale: 1.02 }}
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

          {/* Open Source Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-900">ប្រភពបើកចំហ</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                ប្រព័ន្ធបើកចំហ ដែលអាចរួមចំណែក និងពង្រីកមេរៀនបាន។
                យើងជឿថាការអប់រំគួរតែឥតគិតថ្លៃ និងអាចរកបានដោយគ្រប់គ្នា។
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
                  ប្រភពកូដបើកចំហដែលអាចរួមចំណែកបាន
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  អាចពង្រីក និងកែប្រែមេរៀនបាន
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  បង្កើតសហគមន៍អភិវឌ្ឍន៍ជាមួយគ្នា
                </motion.li>
              </motion.ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="w-full h-80 bg-gray-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Github className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">រូបភាពប្រភពបើកចំហនឹងត្រូវបានបង្ហាញនៅទីនេះ</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" className="py-20 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-15"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">គោលដៅរបស់យើង</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              យើងចង់ជួយដោះស្រាយបញ្ហានៅក្នុងប្រព័ន្ធអប់រំខ្មែរ
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-15"
          >
            {/* Problem Card */}
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-red-50/80 border-2 border-red-600 rounded-2xl p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-101"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ rotate: 360 }}
                  className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white"
                >
                  <Target size={24} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900">
                  បញ្ហាបច្ចុប្បន្ន
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                កម្ពុជាមានបញ្ហាជាច្រើនក្នុងប្រព័ន្ធអប់រំ ដែលសិស្សជាច្រើនពឹងផ្អែកលើការបង្រៀនឯកជន និងសៀវភៅសង្ខេបដែលត្រូវបង់ប្រាក់ដើម្បីយល់គោលគំនិតមូលដ្ឋាន។
              </p>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-3"
              >
                {GOAL_LIST_ITEMS.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white">
                      <CheckCircle size={16} />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Solution Card */}
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-green-50/80 border-2 border-green-600 rounded-2xl p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-101"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ rotate: 360 }}
                  className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white"
                >
                  <Rocket size={24} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900">
                  ដំណោះស្រាយរបស់យើង
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                បង្កើតប្រព័ន្ធរៀន STEM ដែលឥតគិតថ្លៃ និងមានប្រសិទ្ធភាពសម្រាប់សិស្សខ្មែរ ដើម្បីជួយដោះស្រាយបញ្ហានៅក្នុងប្រព័ន្ធអប់រំ និងផ្តល់ជាជម្រីសឥតគិតថ្លៃជាមួយនឹងការរៀនដោយខ្លួនឯកដែលគាំទ្រការយល់ជ្រៅជាងការចងចាំដោយគ្មានការយល់។
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-2 gap-4 mt-6"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-100/50 rounded-xl p-4 text-center"
                >
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-green-800">សហគមន៍រៀន</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-100/50 rounded-xl p-4 text-center"
                >
                  <Globe className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-green-800">បើកចំហ</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-20 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-15"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">អ្នកបង្កើត</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ស្គាល់អ្នកដែលបង្កើតប្រព័ន្ធរៀន STEM សម្រាប់សិស្សខ្មែរ
            </p>
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

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}