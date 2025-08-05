import DefinitionBox from "../../common/box/DefinitionBox";
import ExampleBox from "../../common/box/ExampleBox";
import TipBox from "../../common/box/TipBox";
import ExerciseBox from "../../common/box/ExerciseBox";
import HintBox from "../../common/box/HintBox";
import WarningBox from "../../common/box/WarningBox";
import { TopicContent } from "@/types/topic";

// ===== TOPIC CONTENT DATA =====

const TOPIC_CONTENT: TopicContent = {
    definition: {
        title: "តើលីមីត ០/០ គឺជាអ្វី?",
        content: "លីមីត ០/០ គឺជាលីមីតដែលភាគយក និងភាគបែងមានតម្លៃស្មើសូន្យ។"
    },

    tip: {
        title: "តើលីមីត ០/០ គឺជាអ្វី?",
        content: "លីមីត ០/០ គឺជាលីមីតដែលភាគយក និងភាគបែងមានតម្លៃស្មើសូន្យ។"
    },

    example: {
        question: "រកលីមីតៈ limx→2 (x² - 4)/(x - 2)",
        steps: [
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
        ],
        answer: "លីមីតគឺ 4"
    },

    exercise: {
        questions: [
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
        ]
    },

    hint: {
        content: "លីមីត ០/០ គឺជាលីមីតដែលភាគយក និងភាគបែងមានតម្លៃស្មើសូន្យ។"
    },

    warning: {
        content: "លីមីត ០/០ គឺជាលីមីតដែលភាគយក និងភាគបែងមានតម្លៃស្មើសូន្យ។"
    }
};

// ===== MAIN COMPONENT =====

export default function LimitZeroOverZero() {
    return (
        <>
            {TOPIC_CONTENT.definition && (
                <DefinitionBox title={TOPIC_CONTENT.definition.title} content={TOPIC_CONTENT.definition.content} />
            )}

            {TOPIC_CONTENT.tip && (
                <TipBox title={TOPIC_CONTENT.tip.title} content={TOPIC_CONTENT.tip.content} />
            )}

            {TOPIC_CONTENT.example && (
                <ExampleBox question={TOPIC_CONTENT.example.question} steps={TOPIC_CONTENT.example.steps} answer={TOPIC_CONTENT.example.answer} />
            )}

            {TOPIC_CONTENT.exercise && (
                <ExerciseBox questions={TOPIC_CONTENT.exercise.questions} />
            )}

            {TOPIC_CONTENT.hint && (
                <HintBox content={TOPIC_CONTENT.hint.content} />
            )}

            {TOPIC_CONTENT.warning && (
                <WarningBox content={TOPIC_CONTENT.warning.content} />
            )}
        </>
    );
}