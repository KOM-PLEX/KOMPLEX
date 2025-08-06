import DefinitionBox from "../../common/box/DefinitionBox";
import ExampleBox from "../../common/box/ExampleBox";
import TipBox from "../../common/box/TipBox";
import ExerciseBox from "../../common/box/ExerciseBox";
import HintBox from "../../common/box/HintBox";
import WarningBox from "../../common/box/WarningBox";
import { ImageBox } from "../../common/box/ImageBox";
import { TopicContent } from "@/types/topic";
import Graph from "../../common/box/Graph";
import { BlockMath } from "react-katex";

// ===== TOPIC CONTENT DATA =====

const TOPIC_CONTENT: TopicContent = {
    definition: {
        title: "តើលីមីតគឺជាអ្វី?",
        content: "លីមីតគឺជាតម្លៃដែលអនុគមន៍ខិតទៅរក នៅពេលអថេរឯករាជ្យខិតទៅរកតម្លៃជាក់លាក់មួយ។ នៅក្នុងការសរសេរគណិតវិទ្យា យើងសរសេរ limx→a f(x) = L ដែលមានន័យថា នៅពេល x ខិតទៅរក a អនុគមន៍ f(x) ខិតទៅរកតម្លៃ L។"
    },

    tip: {
        title: "ចំណុចសំខាន់ៗ",
        content: "លីមីតមិនត្រូវការអនុគមន៍ត្រូវតែកំណត់នៅចំណុច a ទេ។ វាគ្រាន់តែត្រូវការអនុគមន៍កំណត់នៅជិតចំណុច a ប៉ុណ្ណោះ។ នេះជាមូលហេតុដែលធ្វើឱ្យលីមីតមានប្រយោជន៍ក្នុងការដោះស្រាយបញ្ហាដែលមិនអាចវាយតម្លៃបានដោយផ្ទាល់។"
    },

    example: {
        question: <BlockMath math="\lim_{x \to 2} (x^2 + 3x - 2)" />,
        steps: [
            {
                title: "ជំនួសតម្លៃ x = 2",
                content: "យើងជំនួស x = 2 ទៅក្នុងអនុគមន៍៖ (2)² + 3(2) - 2"
            },
            {
                title: "គណនាតម្លៃ",
                content: "= 4 + 6 - 2 = 8"
            },
            {
                title: "ចម្លើយ",
                content: "ដូច្នេះ limx→2 (x² + 3x - 2) = 8"
            }
        ],
        answer: "លីមីតគឺ 8"
    },

    exercise: {
        questions: [
            {
                id: "q1",
                question: "រកលីមីតៈ limx→1 (x² + 2x + 1)",
                options: ["១", "២", "៤", "៥"],
                correctAnswer: 2
            },
            {
                id: "q2",
                question: "រកលីមីតៈ limx→3 (x³ - 2x)",
                options: ["១៥", "១៨", "២១", "២៤"],
                correctAnswer: 2
            },
            {
                id: "q3",
                question: "តើ limx→0 (x + 5) ស្មើប៉ុណ្ណា?",
                options: ["០", "៥", "មិនកំណត់", "មិនមាន"],
                correctAnswer: 1
            }
        ]
    },

    hint: {
        content: "ពេលដោះស្រាយលីមីត តែងតែពិនិត្យមើលថាតើអនុគមន៍កំណត់នៅចំណុចនោះឬទេ។ ប្រសិនបើកំណត់ អ្នកអាចជំនួសតម្លៃដោយផ្ទាល់។ ប្រសិនបើមិនកំណត់ អ្នកត្រូវប្រើបច្ចេកទេសផ្សេងទៀត។"
    },

    warning: {
        content: "កុំច្រឡំរវាងលីមីតជាមួយនឹងតម្លៃអនុគមន៍។ លីមីតគឺជាតម្លៃដែលអនុគមន៍ខិតទៅរក មិនមែនជាតម្លៃអនុគមន៍នៅចំណុចនោះទេ។ ឧទាហរណ៍៖ អនុគមន៍អាចមិនកំណត់នៅ x = a ប៉ុន្តែលីមីតអាចមាន។"
    },

    image: {
        src: <Graph expressions={[{ id: '1', latex: 'f(x)=\\frac{x^2 - 4}{x - 2}', color: '#c00' }]} />,
        imageAlt: "ក្រាបលីមីត",
        explanation: "ក្រាបនេះបង្ហាញពីរបៀបដែលអនុគមន៍ខិតទៅរកតម្លៃជាក់លាក់មួយ នៅពេលអថេរ x ខិតទៅរកចំណុច a។ លីមីតគឺជាតម្លៃ L ដែលអនុគមន៍ខិតទៅរក។"
    }
};

// ===== MAIN COMPONENT =====

export default function LimitDefinition() {
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