import { curriculum } from "@/app/curriculum/curriculum";
import DocHeader from "@/components/pages/docs/common/DocHeader";
import Sidebar from "@/components/pages/docs/common/Sidebar";
import TopicWrapper from "@/components/pages/docs/common/TopicWrapper";
import { notFound } from "next/navigation";

type Params = { grade: string; subject: string; lesson: string; topic: string };

const getTopicComponent = ({ params }: { params: Params }) => {
    const grade = curriculum.find(g => g.grade === params.grade);
    const subject = grade?.content.find(s => s.subject === params.subject);
    const lesson = subject?.lessons.find(l => l.lesson === params.lesson);
    const topic = lesson?.topics.find(t => t.englishTitle === params.topic);

    return { topic, lesson, subject, grade };
}

const getNavigationTopics = (params: Params) => {
    const { topic, lesson, subject, grade } = getTopicComponent({ params });

    if (!topic || !lesson || !subject || !grade) return { prev: null, next: null };

    const currentIndex = lesson.topics.findIndex(t => t.englishTitle === params.topic);

    const prev = currentIndex > 0 ? {
        title: lesson.topics[currentIndex - 1].title,
        link: `/docs/${params.grade}/${params.subject}/${params.lesson}/${lesson.topics[currentIndex - 1].englishTitle}`
    } : null;

    const next = currentIndex < lesson.topics.length - 1 ? {
        title: lesson.topics[currentIndex + 1].title,
        link: `/docs/${params.grade}/${params.subject}/${params.lesson}/${lesson.topics[currentIndex + 1].englishTitle}`
    } : null;

    return { prev, next };
}

export default async function Page({ params }: { params: Params }) {
    const { topic } = getTopicComponent({ params });
    const navigation = getNavigationTopics(params);

    if (!topic?.component) {
        return notFound();
    }

    const Component = topic.component;

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
                <TopicWrapper
                    title={topic.title}
                    prev={navigation.prev}
                    next={navigation.next}
                >
                    <Component />
                </TopicWrapper>
            </div>
        </div>
    );
}