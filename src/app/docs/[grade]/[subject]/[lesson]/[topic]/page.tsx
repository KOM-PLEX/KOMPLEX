'use client'

import { curriculum2 } from "@/app/data/curriculum";
import SubjectHeader from "@/components/docs/DocHeader";
import Sidebar from "@/components/docs/Sidebar";

type Params = { grade: string; subject: string; lesson: string; topic: string };

const getTopicComponent = ({ params }: { params: Params }) => {
    const grade = curriculum2.find(g => g.grade === params.grade);
    const subject = grade?.content.find(s => s.subject === params.subject);
    const lesson = subject?.lessons.find(l => l.lesson === params.lesson);
    const topic = lesson?.topics.find(t => t.title === params.topic);

    return topic?.component;
}

export default function ConceptPage({ params }: { params: Params }) {
    const TopicComponent = getTopicComponent({ params });

    return (
        <div className="flex bg-gray-50 min-h-screen">
            <Sidebar />
            <SubjectHeader />
            <div className="w-full lg:ml-70 lg:mt-30 mt-40 p-5 lg:p-6">
                {TopicComponent && <TopicComponent />}
            </div>
        </div>
    );
}