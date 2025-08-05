// for the small exercise in each lesson

export interface Question {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
}

// Nested curriculum type

export interface Grade {
    grade: string;
    gradeKhmer: string;
    content: Content[];
}

export interface Content {
    subject: string;
    title: string;
    englishTitle: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    lessons: Lesson[];
}

export interface Lesson {
    lesson: string;
    title: string;
    englishTitle: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    topics: Topic[];
}

export interface Topic {
    title: string;
    englishTitle: string;
    component: React.ComponentType<{ size?: number; className?: string }>;
}