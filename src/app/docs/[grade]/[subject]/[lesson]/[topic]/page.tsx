import { curriculum } from "@/app/curriculum/curriculum";
import DocHeader from "@/components/docs/DocHeader";
import Sidebar from "@/components/docs/Sidebar";
import { notFound } from "next/navigation";

type Params = { grade: string; subject: string; lesson: string; topic: string };

const getTopicComponent = ({ params }: { params: Params }) => {
    const grade = curriculum.find(g => g.grade === params.grade);
    const subject = grade?.content.find(s => s.subject === params.subject);
    const lesson = subject?.lessons.find(l => l.lesson === params.lesson);
    const topic = lesson?.topics.find(t => t.englishTitle === params.topic);

    return topic?.component;
}

export default async function Page({ params }: { params: Params }) {
    const TopicComponent = getTopicComponent({ params });

    if (!TopicComponent) {
        return notFound();
    }

    const Component = TopicComponent;

    return (
        <div className="flex bg-gray-50 min-h-screen">
            <Sidebar
                currentGrade={params.grade}
                currentSubject={params.subject}
                currentLesson={params.lesson}
                currentTopic={params.topic}
            />
            <DocHeader
                currentGrade={params.grade}
                currentSubject={params.subject}
                currentLesson={params.lesson}
                currentTopic={params.topic}
            />
            <div className="w-full lg:ml-70 lg:mt-30 mt-40 p-5 lg:p-6">
                <Component />
            </div>
        </div>
    );
}