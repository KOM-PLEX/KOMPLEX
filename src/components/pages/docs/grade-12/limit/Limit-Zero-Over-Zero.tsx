import DefinitionBox from "../../common/box/DefinitionBox";
import ExampleBox from "../../common/box/ExampleBox";
import TipBox from "../../common/box/TipBox";
import ExerciseBox from "../../common/box/ExerciseBox";
import HintBox from "../../common/box/HintBox";
import WarningBox from "../../common/box/WarningBox";
import { ImageBox } from "../../common/box/ImageBox";
import { TopicContent } from "@/types/topic";

import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import Graph from "../../common/box/Graph";

// ===== TOPIC CONTENT DATA =====

const TOPIC_CONTENT: TopicContent = {
    definition: {
        title: "លីមីត ០/០ - តើវាជាអ្វី?",
        content: "លីមីត ០/០ គឺជាលីមីតដែលភាគយក និងភាគបែងទាំងពីរខិតទៅរកសូន្យ។ នេះជាប្រភេទលីមីតដែលមិនអាចវាយតម្លៃបានដោយផ្ទាល់ ដោយសារវាផ្តល់ឱ្យយើងនូវទម្រង់មិនកំណត់។ យើងត្រូវប្រើបច្ចេកទេសផ្សេងទៀតដូចជា កត្តាលេខភាគ ឬ ច្បាប់ L'Hôpital។"
    },

    tip: {
        title: "ច្បាប់សំខាន់ៗសម្រាប់លីមីត ០/០",
        content: [
            "តែងតែព្យាយាមកត្តាលេខភាគជាមុនសិន។",
            "ប្រសិនបើកត្តាលេខភាគមិនដំណើរការ ប្រើច្បាប់ L'Hôpital។",
            "ពិនិត្យមើលថាតើអនុគមន៍អាចធ្វើឱ្យសាមញ្ញបានឬទេ។",
            "ប្រើក្រាបឬតារាងតម្លៃដើម្បីយល់ដឹងពីឥរិយាបថអនុគមន៍។",
        ]
    },

    example: {
        question:
            <div className="flex items-center gap-4">
                <p>រកលីមីតៈ</p>
                <BlockMath math="\lim_{x \to 2} \frac{x^2 - 4}{x - 2}" />
            </div>,
        steps: [
            {
                title: "ពិនិត្យមើលទម្រង់",
                content: <div>
                    នៅ <InlineMath math="x = 2" /><br />
                    ភាគយក = <InlineMath math="2^2 - 4 = 0" /><br />
                    ភាគបែង = <InlineMath math="2 - 2 = 0" /><br />
                    ដូច្នេះយើងមានទម្រង់ <InlineMath math="0/0" />
                </div>
            },
            {
                title: "កត្តាលេខភាគ",
                content: <div>
                    <InlineMath math="x^2 - 4 = (x + 2)(x - 2)" /><br /><br />
                    ដូច្នេះ <InlineMath math="\frac{x^2 - 4}{x - 2} = \frac{(x + 2)(x - 2)}{x - 2} = x + 2" />
                </div>
            },
            {
                title: "វាយតម្លៃលីមីត",
                content: <div>
                    <InlineMath math="\lim_{x \to 2} (x + 2) = 2 + 2 = 4" /><br /><br />
                    ដូច្នេះ <InlineMath math="\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4" />
                </div>
            }
        ],
        answer: "លីមីតគឺ 4"
    },

    exercise: {
        questions: [
            {
                id: "q1",
                question: "រកលីមីតៈ limx→3 (x² - 9)/(x - 3)",
                options: ["៣", "៦", "៩", "មិនកំណត់"],
                correctAnswer: 1
            },
            {
                id: "q2",
                question: "រកលីមីតៈ limx→1 (x² - 1)/(x - 1)",
                options: ["០", "១", "២", "មិនកំណត់"],
                correctAnswer: 2
            },
            {
                id: "q3",
                question: "រកលីមីតៈ limx→0 (x³ - x)/(x² - x)",
                options: ["០", "១", "មិនកំណត់", "មិនមាន"],
                correctAnswer: 1
            },
            {
                id: "q4",
                question: "តើ limx→4 (x² - 16)/(x - 4) ស្មើប៉ុណ្ណា?",
                options: ["៤", "៨", "១២", "១៦"],
                correctAnswer: 1
            }
        ]
    },

    hint: {
        content: "ពេលជួបប្រទះលីមីត ០/០ តែងតែចាំថា៖ ១) ព្យាយាមកត្តាលេខភាគជាមុន ២) ស្វែងរកកត្តារួមរវាងភាគយកនិងភាគបែង ៣) ប្រើអត្តសញ្ញាណិកដើម្បីធ្វើឱ្យសាមញ្ញ ៤) ប្រសិនបើអស់វិធី ប្រើច្បាប់ L'Hôpital។"
    },

    warning: {
        content: "កុំច្រឡំរវាងលីមីត ០/០ ជាមួយនឹងការចែកដោយសូន្យ។ លីមីត ០/០ គឺជាទម្រង់មិនកំណត់ដែលអាចដោះស្រាយបាន ខណៈពេលដែលការចែកដោយសូន្យគឺជាប្រតិបត្តិការដែលមិនកំណត់។ កុំព្យាយាមជំនួសតម្លៃដោយផ្ទាល់ក្នុងលីមីត ០/០។"
    },

    image: {
        src: <Graph
            expressions={[
                { id: '1', latex: 'f(x)=\\frac{x^2 - 4}{x - 2}', color: '#c00' },
            ]}
        />,
        imageAlt: "ក្រាបលីមីត ០/០",
        explanation: "ក្រាបនេះបង្ហាញពីរបៀបដែលអនុគមន៍ f(x) = (x² - 4)/(x - 2) មានរន្ធ (hole) នៅ x = 2។ ទោះបីអនុគមន៍មិនកំណត់នៅ x = 2 ក៏ដោយ លីមីតរបស់វាមានតម្លៃ 4។"
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

            {TOPIC_CONTENT.image && (
                <ImageBox src={TOPIC_CONTENT.image.src} imageAlt={TOPIC_CONTENT.image.imageAlt} explanation={TOPIC_CONTENT.image.explanation} />
            )}
        </>
    );
}