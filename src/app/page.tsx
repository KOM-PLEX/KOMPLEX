'use client'

import Footer from "@/components/common/Footer";
import Link from "next/link";
import Header from "@/components/common/Header";
import { Play, ArrowRight, BookOpen, Bot, MessageSquare, FileText, Video, Code, Target, CheckCircle, Rocket, Users, Globe, Heart, Brain, Github, ChartBar, ImageIcon } from "lucide-react";
import ThreeDBox from "@/components/pages/docs/common/box/3DBox";
import GraphBox from "@/components/pages/docs/common/box/GraphBox";
import ExerciseBox from "@/components/pages/docs/common/box/ExerciseBox";
import { BlockMath, InlineMath } from 'react-katex';
import { Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import 'katex/dist/katex.min.css';
import Hero from "@/components/pages/landing/Hero";
import Features from "@/components/pages/landing/Features";
import AboutFeatures from "@/components/pages/landing/AboutFeatures";
import Goals from "@/components/pages/landing/Goals";
import Founders from "@/components/pages/landing/Founders";

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
    description: "អ្នកជំនាញមកយឺត (bro c++)",
    color: "orange",
    bgColor: "bg-orange-50/80",
    borderColor: "border-orange-600",
    iconColor: "text-orange-600"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden scroll-smooth">
      <Header />
      <Hero />
      <Features />
      <AboutFeatures />
      <Goals />
      <Founders />
      <Footer />
    </div>
  );
}