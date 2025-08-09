import DefinitionBox from "../../common/box/DefinitionBox";
import ExampleBox from "../../common/box/ExampleBox";
import TipBox from "../../common/box/TipBox";
import ExerciseBox from "../../common/box/ExerciseBox";
import HintBox from "../../common/box/HintBox";
import WarningBox from "../../common/box/WarningBox";
import CustomBox from "../../common/box/CustomBox";
import { ImageBox } from "../../common/box/explanation-box/ImageExplanationBox";
import { VideoBox } from "../../common/box/explanation-box/VideoExplanationBox";
import { GraphExplanationBox } from "../../common/box/explanation-box/GraphExplanationBox";
import { ThreeDExplanationBox } from "../../common/box/explanation-box/3DExplanationBox";
import { TopicContent } from "@/types/topic";

import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import Graph from "../../../../helper/Graph";
import ThreeDBox from "../../common/box/3DBox";
import GraphBox from "../../common/box/GraphBox";
import { Stars, Box as ThreeBox } from "@react-three/drei";
import { Box } from "lucide-react";

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

    custom: {
        content: "នេះគឺជាការបង្ហាញនៃ CustomBox ដែលអាចប្រើសម្រាប់អត្ថបទផ្សេងៗ។ អ្នកអាចកំណត់ពណ៌ រូបភាព និងអត្ថបទផ្សេងៗបាន។",
        title: "ការបង្ហាញ CustomBox",
        titleIcon: Box,
        backgroundColor: "bg-purple-50",
        borderColor: "border-purple-600",
        titleColor: "text-purple-800",
        iconColor: "text-purple-600",
        contentColor: "text-purple-700"
    },

    threeD: {
        src: "/test.glb",
        scale: 1,
        title: "រូបភាព 3D ជាមួយ Model URL",
        target: [6, 0, 0],
        content: "ក្រាបនេះបង្ហាញពីរបៀបដែលអនុគមន៍ f(x) = (x² - 4)/(x - 2) មានរន្ធ (hole) នៅ x = 2។ ទោះបីអនុគមន៍មិនកំណត់នៅ x = 2 ក៏ដោយ លីមីតរបស់វាមានតម្លៃ 4។",
        canvasBackground: <Stars radius={100} depth={50} count={5000} factor={4} fade />,
        canvasBackgroundColor: "black",
        threeDText: [
            { content: "driver", position: [13.3, 3, 3], rotation: [0, 0, 0] },
            { content: "passenger", position: [10.3, 3, 3], rotation: [0, 0, 0] },
        ]
    },

    graph: {
        expressions: [
            { id: '1', latex: 'f(x)=\\frac{x^2 - 4}{x - 2}', color: '#c00' },
        ],
    },

    // ===== EXPLANATION BOXES =====
    imageExplanation: {
        src: "/angkor.jpg",
        imageAlt: "ក្រាបលីមីត ០/០",
        explanation: "ក្រាបនេះបង្ហាញពីរបៀបដែលអនុគមន៍ f(x) = (x² - 4)/(x - 2) មានរន្ធ (hole) នៅ x = 2។ ទោះបីអនុគមន៍មិនកំណត់នៅ x = 2 ក៏ដោយ លីមីតរបស់វាមានតម្លៃ 4។ រូបភាពនេះជួយឱ្យយើងយល់ពីគោលគំនិតនៃលីមីតដែលមានរន្ធ។"
    },

    videoExplanation: {
        src: "/test.mp4",
        videoTitle: "វីដេអូពន្យល់លីមីត ០/០",
        explanation: "វីដេអូនេះពន្យល់ពីរបៀបដោះស្រាយលីមីត ០/០ ដោយប្រើកត្តាលេខភាគ និងច្បាប់ L'Hôpital។ វីដេអូបង្ហាញពីវិធីសាស្ត្រជាក់លាក់ និងឧទាហរណ៍ជាច្រើនដើម្បីជួយឱ្យអ្នកយល់គោលគំនិតនេះបានល្អជាង។"
    },

    graphExplanation: {
        expressions: [
            { id: '1', latex: 'f(x)=\\frac{x^2 - 4}{x - 2}', color: '#3B82F6' },
            { id: '2', latex: 'g(x)=x+2', color: '#EF4444' },
            { id: '3', latex: 'x=2', color: '#10B981' }
        ],
        explanation: "ក្រាបនេះបង្ហាញពីអនុគមន៍ f(x) = (x² - 4)/(x - 2) និង g(x) = x + 2។ អ្នកអាចឃើញថាទោះបី f(x) មានរន្ធនៅ x = 2 ក៏ដោយ លីមីតរបស់វាស្មើនឹងតម្លៃនៃ g(x) នៅ x = 2 ដែលគឺ 4។ បន្ទាត់បញ្ឈរ x = 2 បង្ហាញពីចំណុចដែលអនុគមន៍មិនកំណត់។"
    },

    threeDExplanation: {
        src: (
            <>
                <ThreeBox args={[2, 2, 2]} position={[-2, 0, 0]}>
                    <meshStandardMaterial color="#3B82F6" />
                </ThreeBox>
                <ThreeBox args={[2, 2, 2]} position={[2, 0, 0]}>
                    <meshStandardMaterial color="#EF4444" />
                </ThreeBox>
                <ThreeBox args={[2, 2, 2]} position={[0, 2, 0]}>
                    <meshStandardMaterial color="#10B981" />
                </ThreeBox>
                <ThreeBox args={[2, 2, 2]} position={[0, -2, 0]}>
                    <meshStandardMaterial color="#F59E0B" />
                </ThreeBox>
            </>
        ),
        explanation: "រូបភាព 3D នេះបង្ហាញពីគោលគំនិតនៃលីមីត ០/០ តាមរយៈរូបភាពធរណីមាត្រ។ គូបទាំងបួនតំណាងឱ្យចំណុចផ្សេងៗនៅក្នុងលំហ ដែលជួបគ្នានៅចំណុចកណ្តាល។ នេះជួយឱ្យយើងយល់ពីរបៀបដែលអនុគមន៍ខិតទៅរកតម្លៃជាក់លាក់មួយ។"
    }
};

// ===== MAIN COMPONENT =====

export default function LimitZeroOverZero() {
    return (
        <>
            {/* Basic Boxes */}
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

            {TOPIC_CONTENT.custom && (
                <CustomBox
                    title={TOPIC_CONTENT.custom.title}
                    content={TOPIC_CONTENT.custom.content}
                    titleIcon={TOPIC_CONTENT.custom.titleIcon}
                    backgroundColor={TOPIC_CONTENT.custom.backgroundColor}
                    borderColor={TOPIC_CONTENT.custom.borderColor}
                    titleColor={TOPIC_CONTENT.custom.titleColor}
                    iconColor={TOPIC_CONTENT.custom.iconColor}
                    contentColor={TOPIC_CONTENT.custom.contentColor}
                />
            )}

            {/* Wrapper Boxes */}
            {TOPIC_CONTENT.threeD && (
                <ThreeDBox
                    src={TOPIC_CONTENT.threeD.src}
                    title={TOPIC_CONTENT.threeD.title}
                    content={TOPIC_CONTENT.threeD.content}
                    target={TOPIC_CONTENT.threeD.target}
                    canvasBackground={TOPIC_CONTENT.threeD.canvasBackground}
                    canvasBackgroundColor={TOPIC_CONTENT.threeD.canvasBackgroundColor}
                    threeDText={TOPIC_CONTENT.threeD.threeDText}
                />
            )}

            {TOPIC_CONTENT.graph && (
                <GraphBox expressions={TOPIC_CONTENT.graph.expressions} />
            )}

            {/* Explanation Boxes */}
            {TOPIC_CONTENT.imageExplanation && (
                <ImageBox
                    src={TOPIC_CONTENT.imageExplanation.src}
                    imageAlt={TOPIC_CONTENT.imageExplanation.imageAlt}
                    explanation={TOPIC_CONTENT.imageExplanation.explanation}
                />
            )}

            {TOPIC_CONTENT.videoExplanation && (
                <VideoBox
                    src={TOPIC_CONTENT.videoExplanation.src}
                    videoTitle={TOPIC_CONTENT.videoExplanation.videoTitle}
                    explanation={TOPIC_CONTENT.videoExplanation.explanation}
                />
            )}

            {TOPIC_CONTENT.graphExplanation && (
                <GraphExplanationBox
                    expressions={TOPIC_CONTENT.graphExplanation.expressions}
                    explanation={TOPIC_CONTENT.graphExplanation.explanation}
                />
            )}

            {TOPIC_CONTENT.threeDExplanation && (
                <ThreeDExplanationBox
                    src={TOPIC_CONTENT.threeDExplanation.src}
                    explanation={TOPIC_CONTENT.threeDExplanation.explanation}
                />
            )}
        </>
    );
}