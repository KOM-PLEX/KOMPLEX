import DefinitionBox from "../../common/box/DefinitionBox";
import ExampleBox from "../../common/box/ExampleBox";
import TipBox from "../../common/box/TipBox";
import ExerciseBox from "../../common/box/ExerciseBox";
import HintBox from "../../common/box/HintBox";
import WarningBox from "../../common/box/WarningBox";
import { TopicContent } from "@/types/topic";
import GraphBox from "../../common/box/GraphBox";
import { BlockMath } from "react-katex";

// ===== TOPIC CONTENT DATA (Derivative Formulas) =====

const TOPIC_CONTENT: TopicContent = {
    definition: {
        title: "រូបមន្តដេរីវេ",
        content: (
            <>
                <p>រូបមន្តដេរីវេសំខាន់ៗមានដូចខាងក្រោម៖</p>

                <p>• ថេរ (c) មានដេរីវេស្មើ 0:</p>
                <BlockMath math={String.raw`\frac{d}{dx}(c) = 0`} />

                <p>• ច្បាប់អនុគមន៍អង្កត់សន្ទះ (power rule):</p>
                <BlockMath math={String.raw`\frac{d}{dx}(x^n) = n x^{n-1}`} />

                <p>• គុណថេរ:</p>
                <BlockMath math={String.raw`\frac{d}{dx}[c\,f(x)] = c\,f'(x)`} />

                <p>• បូក/ដក:</p>
                <BlockMath math={String.raw`\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)`} />

                <p>• ច្បាប់គុណ:</p>
                <BlockMath math={String.raw`\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)`} />

                <p>• ច្បាប់ចែក:</p>
                <BlockMath
                    math={String.raw`\frac{d}{dx}\!\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}`}
                />
            </>
        ),
    },

    tip: {
        title: "ចំណុចសំខាន់ៗ",
        content: (
            <div>
                <p>• សរសេរអនុគមន៍ជាផ្នែកៗ ហើយយកដេរីវេតាមរូបមន្តខាងលើ។</p>
                <p>• ប្រសិនបើមានផលគុណ/ចែក ត្រូវប្រើច្បាប់គុណ/ចែក មុនបញ្ចប់។</p>
                <p>• កុំភ្លេចថេរ → ដេរីវេ = 0; គុណថេរ → អាចដកចេញខាងក្រៅ។</p>
            </div>
        ),
    },

    example: {
        question: <BlockMath math={String.raw`\text{គណនាដេរីវេ } f(x) = 3x^4 - 5x^2 + 2`} />,
        steps: [
            {
                title: "អនុវត្តរូបមន្តលើសមាសធាតុនីមួយៗ",
                content: (
                    <>
                        <BlockMath math={String.raw`\frac{d}{dx}[3x^4] = 3\cdot 4x^3 = 12x^3`} />
                        <BlockMath math={String.raw`\frac{d}{dx}[-5x^2] = -5\cdot 2x = -10x`} />
                        <BlockMath math={String.raw`\frac{d}{dx}[2] = 0`} />
                    </>
                ),
            },
            {
                title: "បូកលទ្ធផល",
                content: <BlockMath math={String.raw`f'(x) = 12x^3 - 10x`} />,
            },
            {
                title: "ចម្លើយ",
                content: <BlockMath math={String.raw`ដេរីវេនៃ f'(x) = 12x^3 - 10x`}/>
            },
        ],
        answer: <BlockMath math={String.raw`f'(x) = 12x^3 - 10x`}/>,
    },

    // exercise: {
    //     questions: [
    //         {
    //             id: "q1",
    //             question: "ដេរីវេនៃ f(x) = x^3 + 2x^2 + 1 គឺ?",
    //             options: ["3x^2 + 4x", "3x^2 + 2", "3x^2 + 4x + 2", "6x + 2"],
    //             correctAnswer: 0, // 3x^2 + 4x
    //         },
    //         {
    //             id: "q2",
    //             question: "គណនាថា f'(2) សម្រាប់ f(x) = x^4 - 4x",
    //             options: ["12", "16", "20", "28"],
    //             correctAnswer: 3, // f'(x) = 4x^3 - 4; at x=2 => 32-4 = 28
    //         },
    //         {
    //             id: "q3",
    //             question: "ដេរីវេនៃ g(x) = 5x^5 - 3x^3 + 4 គឺ?",
    //             options: ["25x^4 - 9x^2", "25x^4 - 9x^2 + 4", "15x^4 - 3x^2", "10x^4 - 9x^2"],
    //             correctAnswer: 0, // 25x^4 - 9x^2
    //         },
    //     ],
    // },

    // exercise: {
    //     questions: [
    //         {
    //             id: "q1",
    //             question: (
    //                 <>
    //                     <p>ដេរីវេនៃ</p>
    //                     <BlockMath math={String.raw`f(x)=x^3 + 2x^2 + 1`} />
    //                     <p>គឺ?</p>
    //                 </>
    //             ),
    //             options: ["12x^3 - 10x", "12x^3 - 10", "12x^3", "12x^3 - 10x + 2"],
    //             correctAnswer: 0,
    //         }
    //     ]
    // },

    exercise: {
  questions: [
    {
      id: "q1",
      question: (
        <>
          <p>ដេរីវេនៃ</p>
          <BlockMath math={String.raw`f(x)=x^3 + 2x^2 + 1`} />
          <p>គឺ?</p>
        </>
      ),
      options: [
        <BlockMath key="q1o0" math={String.raw`3x^2 + 4x`} />,
        <BlockMath key="q1o1" math={String.raw`3x^2 + 2`} />,
        <BlockMath key="q1o2" math={String.raw`3x^2 + 4x + 2`} />,
        <BlockMath key="q1o3" math={String.raw`6x + 2`} />,
      ],
      correctAnswer: 0, // 3x^2 + 4x
    },
    {
      id: "q2",
      question: (
        <>
          <p>គណនាតម្លៃ</p>
          <BlockMath math={String.raw`f'(2)`} />
          <p>សម្រាប់</p>
          <BlockMath math={String.raw`f(x)=x^4 - 4x`} />
        </>
      ),
      options: [
        <BlockMath key="q2o0" math={String.raw`12`} />,
        <BlockMath key="q2o1" math={String.raw`16`} />,
        <BlockMath key="q2o2" math={String.raw`20`} />,
        <BlockMath key="q2o3" math={String.raw`28`} />,
      ],
      correctAnswer: 3, // f'(x)=4x^3-4; at x=2 => 32-4 = 28
    },
    {
      id: "q3",
      question: (
        <>
          <p>ដេរីវេនៃ</p>
          <BlockMath math={String.raw`g(x)=5x^5 - 3x^3 + 4`} />
          <p>គឺ?</p>
        </>
      ),
      options: [
        <BlockMath key="q3o0" math={String.raw`25x^4 - 9x^2`} />,
        <BlockMath key="q3o1" math={String.raw`25x^4 - 9x^2 + 4`} />,
        <BlockMath key="q3o2" math={String.raw`15x^4 - 3x^2`} />,
        <BlockMath key="q3o3" math={String.raw`10x^4 - 9x^2`} />,
      ],
      correctAnswer: 0, // 25x^4 - 9x^2
    },
  ],
},


    hint: {
        content: (
            <>
                <p>ចងចាំរូបមន្តមូលដ្ឋាន៖</p>
                <BlockMath math={String.raw`\frac{d}{dx}(x^n) = n x^{n-1}`} />
                <BlockMath math={String.raw`\frac{d}{dx}[c\,f(x)] = c\,f'(x)`} />
                <BlockMath math={String.raw`\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)`} />
                <p>បើជួបផលគុណ ឬចែក សូមប្រើច្បាប់សមស្រប។</p>
            </>
        ),
    },

    warning: {
        content: (
            <>
                <p>• កុំស្រែកថេរ→1! ថេរ​ណាមួយមានដេរីវេ 0។</p>
                <p>• កុំភ្លេចប្រើច្បាប់គុណ/ចែក ពេលមានផលគុណ ឬភាគផ្ចិត។</p>
                <p>• សកម្មភាពបំលែងតាមលាយឡំមិនអនុញ្ញាត—បំបែកជាជំហានច្បាស់ៗ។</p>
            </>
        ),
    },

    graph: {
        expressions: [
            { id: "f", latex: "f(x)=x^2", color: "#c00" },
            { id: "fprime", latex: "g(x)=2x", color: "#00c" },
        ],
    },

};

// ===== MAIN COMPONENT =====

export default function DerivativeFormulas() {
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
            {/* {TOPIC_CONTENT.image && (
                <ImageBox
                    src={TOPIC_CONTENT.image.src}
                    imageAlt={TOPIC_CONTENT.image.imageAlt}
                    explanation={TOPIC_CONTENT.image.explanation}
                />
            )} */}
        </>
    );
}
