import { redirect } from "next/navigation";
import { curriculum } from "@/curriculum/curriculum";
// docs/${curriculum[0].content[0].lessons[0].topics[0].englishTitle}`)
export default function Docs() {
    redirect(`/docs/${curriculum[0].grade}/${curriculum[0].content[0].subject}/${curriculum[0].content[0].lessons[0].englishTitle}/${curriculum[0].content[0].lessons[0].topics[0].englishTitle}`);
}