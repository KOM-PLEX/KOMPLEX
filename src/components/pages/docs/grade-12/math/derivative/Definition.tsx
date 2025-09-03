import DefinitionBox from "../../../common/box/DefinitionBox";
import ExampleBox from "../../../common/box/ExampleBox";
import TipBox from "../../../common/box/TipBox";
import ExerciseBox from "../../../common/box/ExerciseBox";
import HintBox from "../../../common/box/HintBox";
import WarningBox from "../../../common/box/WarningBox";
import { TopicContent } from "@/types/docs/topic";
import { BlockMath } from "react-katex";

const TOPIC_CONTENT: TopicContent = {
    definition: {
        title: "តើដេរីវេគឺជាអ្វី?",
        content: (
            <>
                <p>ដេរីវេនិយមន័យគឺ</p>
                <BlockMath math="f'(a) = \lim_{h\to 0} \frac{f(a+h)-f(a)}{h}" />
                <p>ដែលវាបង្ហាញអត្រាប្រែប្រួលភ្លាមៗ។</p>
            </>
        )
    },

    tip: {
        title: "ចំណុចសំខាន់ៗ",
        content: (
            <div>
                <p>• ដេរីវេបង្ហាញអត្រាប្រែប្រួល និងស្លាបបន្ទាត់ប៉ះនៃអនុគមន៍។</p>
                <p>• ដេរីវេមាន បើលីមីតនៃប្រភាគខាងក្រោម នៅពេល h កាន់តែតូច ស្ទើរតែបានតម្លៃតែមួយ៖</p>
                <BlockMath math="\frac{f(a+h) - f(a)}{h}" />
                <p>• អនុគមន៍ដែលមានក្រុងចតុរូប ឬស្នូតព្រិល អាចមិនមានដេរីវេនៅចំណុចនោះ។</p>
            </div>
        )
    },

    example: {
        question: (
            <BlockMath math="\text{រក }f'(2)\text{ សម្រាប់ }f(x)=x^2+3x-2\text{ ដោយប្រើនិយមន័យដេរីវេ}" />
        ),
        steps: [
            {
                title: "សរសេរនិយមន័យ",
                content: (
                    <>
                        <p>តាមនិយមន័យ ដេរីវេរបស់ f នៅ x = 2 គឺ：</p>
                        <BlockMath math="f'(2) = \lim_{h\to 0} \frac{f(2+h) - f(2)}{h}" />
                    </>
                )
            },
            {
                title: "ជំនួសអនុគមន៍ f",
                content: (
                    <>
                        <BlockMath math="f(2+h) = (2+h)^2 + 3(2+h) - 2" />
                        <BlockMath math="f(2) = 2^2 + 3·2 - 2" />
                    </>
                )
            },
            {
                title: "គណនាប្រភាគ",
                content: (
                    <BlockMath math="\frac{(2+h)^2 + 3(2+h) - 2 - (2^2 + 3·2 - 2)}{h} = \frac{h^2 + 7h}{h} = h + 7" />
                )
            },
            {
                title: "យកលីមីត h → 0",
                content: <BlockMath math="\lim_{h\to 0} (h + 7) = 7" />
            }
        ],
        answer: "ដេរីវេ f'(2) = 7"
    },

    // exercise: {
    //     // ...exercise unchanged...
    // },

    hint: {
        content: (
            <>
                <p>
                    បើចង់រកដេរីវេ ត្រូវសរសេរប្រភាគខាងក្រោម ហើយយកលីមីតនៅពេល h ខិតទៅ 0៖
                </p>
                <BlockMath math="\frac{f(a+h) - f(a)}{h}" />
                <p>
                    សូមរៀបចំកន្សោម និងបំបែក h ដើម្បីទាត់ h ចេញពីភាគរយ។
                </p>
            </>
        )
    },

    // warning: {
    //     // ...warning unchanged...
    // },

    // image: {
    //     // ...image unchanged...
    // }
};

// ===== MAIN COMPONENT =====

export default function DerivativeDefinition() {
    return (
        <>
            {TOPIC_CONTENT.definition && (
                <DefinitionBox
                    title={TOPIC_CONTENT.definition.title}
                    content={TOPIC_CONTENT.definition.content}
                />
            )}
            {TOPIC_CONTENT.tip && (
                <TipBox title={TOPIC_CONTENT.tip.title} content={TOPIC_CONTENT.tip.content} />
            )}
            {TOPIC_CONTENT.example && (
                <ExampleBox
                    question={TOPIC_CONTENT.example.question}
                    steps={TOPIC_CONTENT.example.steps}
                    answer={TOPIC_CONTENT.example.answer}
                />
            )}
            {TOPIC_CONTENT.exercise && (
                <ExerciseBox questions={TOPIC_CONTENT.exercise.questions} />
            )}
            {TOPIC_CONTENT.hint && <HintBox content={TOPIC_CONTENT.hint.content} />}
            {TOPIC_CONTENT.warning && <WarningBox content={TOPIC_CONTENT.warning.content} />}

        </>
    );
}
