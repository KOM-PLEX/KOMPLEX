import DefinitionBox from "./DefinitionBox";
import ExampleBox from "./ExampleBox";
import TipBox from "./TipBox";
import TopicWrapper from "./TopicWrapper";
import ExerciseBox from "./ExerciseBox";
import HintBox from "./HintBox";
import WarningBox from "./WarningBox";


export default function LimitZeroOverZero() {
    return (
        <TopicWrapper title="លីមីត ០/០" subtitle="លីមីត ០/០ គឺជាលីមីតដែលភាគយក និងភាគបែងមានតម្លៃស្មើសូន្យ។">
            <DefinitionBox title="តើលីមីត ០/០ គឺជាអ្វី?" content="លីមីត ០/០ គឺជាលីមីតដែលភាគយក និងភាគបែងមានតម្លៃស្មើសូន្យ។" />
            <TipBox title="តើលីមីត ០/០ គឺជាអ្វី?" content="លីមីត ០/០ គឺជាលីមីតដែលភាគយក និងភាគបែងមានតម្លៃស្មើសូន្យ។" />
            <ExampleBox
                question="រកលីមីតៈ limx→2 (x² - 4)/(x - 2)"
                steps={[
                    {
                        title: "កត្តាលេខភាគ",
                        content: "x² - 4 = (x + 2)(x - 2)"
                    },
                    {
                        title: "ធ្វើឱ្យសាមញ្ញ",
                        content: "(x² - 4)/(x - 2) = (x + 2)(x - 2)/(x - 2) = x + 2"
                    },
                    {
                        title: "វាយតម្លៃលីមីត",
                        content: "limx→2 (x + 2) = 2 + 2 = 4"
                    }
                ]}
                answer="លីមីតគឺ 4"
            />
            <ExerciseBox
                questions={[
                    {
                        id: "q1",
                        question: "រកលីមីតៈ limx→3 (x²-9)/(x - 3)",
                        options: ["៣", "៦", "៩", "មិនកំណត់"],
                        correctAnswer: 1 
                    },
                    {
                        id: "q2",
                        question: "រកលីមីតៈ limx→1 (x²-1)/(x - 1)",
                        options: ["០", "១", "២", "មិនកំណត់"],
                        correctAnswer: 2 
                    }
                ]}
            />
            <HintBox message="លីមីត ០/០ គឺជាលីមីតដែលភាគយក និងភាគបែងមានតម្លៃស្មើសូន្យ។" />
            <WarningBox title="ការពិន័យ" content="លីមីត ០/០ គឺជាលីមីតដែលភាគយក និងភាគបែងមានតម្លៃស្មើសូន្យ។" />
        </TopicWrapper>
    )
}