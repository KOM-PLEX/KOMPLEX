import DefinitionBox from "../../../common/box/DefinitionBox";
import ExampleBox from "../../../common/box/ExampleBox";
import TipBox from "../../../common/box/TipBox";
import ExerciseBox from "../../../common/box/ExerciseBox";
import HintBox from "../../../common/box/HintBox";
import WarningBox from "../../../common/box/WarningBox";
import { TopicContent } from "@/types/docs/topic";
import GraphBox from "../../../common/box/GraphBox";
import { BlockMath } from "react-katex";

// ===== TOPIC CONTENT DATA (Derivative — Geometric Interpretation) =====

const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "ដេរីវេតាមធរណីមាត្រ",
    content: (
      <>
        <p>
          តាមទស្សនៈធរណីមាត្រ ដេរីវេនៅចំណុចមួយ គឺស្លាប (slope) នៃបន្ទាត់ប៉ះទៅនឹងក្រាបអនុគមន៍
          នៅចំណុចនោះ។ វាត្រូវបានទទួលបានជាលីមីតនៃស្លាបបន្ទាត់កាត់
          ពេលចន្លោះអប្បបរមា (h) ខិតទៅ 0។
        </p>
        <BlockMath math={String.raw`f'(a) = \lim_{h\to 0} \frac{f(a+h)-f(a)}{h}`} />
        <p>
          ជាភាសាសាមញ្ញ វាជា “អត្រាប្រែប្រួលភ្លាមៗ” នៃអនុគមន៍។ សញ្ញានៃស្លាបពន្យល់ថា
          ក្រាបកំពុងឡើង ឬចុះ នៅជុំវិញចំណុចនោះ។
        </p>
      </>
    ),
  },

  tip: {
    title: "ចំណុចសំខាន់ៗ",
    content: (
      <div>
        <p>• ស្លាបបន្ទាត់កាត់ (secant):</p>
        <BlockMath math={String.raw`\text{slope}=\dfrac{f(a+h)-f(a)}{h}`} />
        <p>• បន្ទាត់ប៉ះ (tangent): ដេរីវេគឺជាលីមីតនៃស្លាបបន្ទាត់កាត់ នៅពេល h→0។</p>
        <p>• សញ្ញា៖ <BlockMath math={String.raw`f'(a)`} /> &gt; 0 ➜ កំពុងឡើង, <BlockMath math={String.raw`f'(a)`} /> &lt; 0 ➜ កំពុងចុះ, <BlockMath math={String.raw`f'(a)`} /> = 0 ➜ បន្ទាត់ផ្តេក។</p>
        <p>• ឯកតា៖ បើ y ជាម៉ែត្រ និង x ជាវិនាទី នោះ <BlockMath math={String.raw`f'(x)`} /> ជា ម៉ែត្រ/វិនាទី។</p>
      </div>
    ),
  },

  example: {
    question: (
      <BlockMath math={String.raw`\text{រកស្លាបបន្ទាត់ប៉ះនៅ } x=1 \text{ សម្រាប់ } f(x)=x^2`} />
    ),
    steps: [
      {
        title: "ស្លាបបន្ទាត់កាត់ជាមួយ h ទូទៅ",
        content: (
          <>
            <p>សរសេរស្លាបបន្ទាត់កាត់ពីចំណុច (1, f(1)) ទៅ (1+h, f(1+h))</p>
            <BlockMath math={String.raw`\dfrac{f(1+h)-f(1)}{h}=\dfrac{(1+h)^2-1^2}{h}`} />
          </>
        ),
      },
      {
        title: "សម្រួលកន្សោម",
        content: (
          <BlockMath math={String.raw`=\dfrac{1+2h+h^2-1}{h}=\dfrac{2h+h^2}{h}=2+h`} />
        ),
      },
      {
        title: "យកលីមីត h → 0",
        content: <BlockMath math={String.raw`\lim_{h\to 0}(2+h)=2`} />,
      },
      {
        title: "សមីការបន្ទាត់ប៉ះ",
        content: (
          <>
            <p>ស្លាប = 2 និង f(1)=1 ដូចនេះសមីការបន្ទាត់ប៉ះ៖</p>
            <BlockMath math={String.raw`y-1=2(x-1)\ \ \Longrightarrow\ \ y=2x-1`} />
          </>
        ),
      },
    ],
    answer: "ស្លាបបន្ទាត់ប៉ះនៅ x=1 ស្មើ 2 និងបន្ទាត់ប៉ះ៖ y = 2x - 1",
  },

  exercise: {
    questions: [
      {
        id: "gq1",
        question: (
          <>
            <p>សម្រាប់</p>
            <BlockMath math={String.raw`f(x)=x^2`} />
            <p>ស្លាបបន្ទាត់ប៉ះនៅ x=2 ស្មើប៉ុន្មាន?</p>
          </>
        ),
        options: [
          <BlockMath key="gq1o0" math={String.raw`2`} />,
          <BlockMath key="gq1o1" math={String.raw`3`} />,
          <BlockMath key="gq1o2" math={String.raw`4`} />,
          <BlockMath key="gq1o3" math={String.raw`5`} />,
        ],
        correctAnswer: 2, // f'(x)=2x => f'(2)=4
      },
      {
        id: "gq2",
        question: (
          <>
            <p>ស្លាបបន្ទាត់កាត់ជុំវិញ x=a សម្រាប់</p>
            <BlockMath math={String.raw`f(x)=x^2`} />
            <p>គឺ:</p>
          </>
        ),
        options: [
          <BlockMath key="gq2o0" math={String.raw`\dfrac{(a+h)^2-a^2}{h} = 2a+h`} />,
          <BlockMath key="gq2o1" math={String.raw`\dfrac{(a+h)^2-a^2}{h} = 2a-h`} />,
          <BlockMath key="gq2o2" math={String.raw`\dfrac{(a+h)^2-a^2}{h} = a^2+2h`} />,
          <BlockMath key="gq2o3" math={String.raw`\dfrac{(a+h)^2-a^2}{h} = 2h+a`} />,
        ],
        correctAnswer: 0,
      },
      {
        id: "gq3",
        question: (
          <>
            <p>សម្រាប់</p>
            <BlockMath math={String.raw`f(x)=-x^3`} />
            <p>តម្លៃដេរីវេនៅ x=1 និងសញ្ញារបស់វា?</p>
          </>
        ),
        options: [
          <BlockMath key="gq3o0" math={String.raw`f'(1)=3 \ (\text{វិជ្ជមាន})`} />,
          <BlockMath key="gq3o1" math={String.raw`f'(1)=-3 \ (\text{អវិជ្ជមាន})`} />,
          <BlockMath key="gq3o2" math={String.raw`f'(1)=0`} />,
          <BlockMath key="gq3o3" math={String.raw`\text{មិនកំណត់}`} />,
        ],
        correctAnswer: 1, // f'(x)=-3x^2 => f'(1)=-3
      },
    ],
  },

  hint: {
    content: (
      <>
        <p>ចង់យល់ផ្លូវធរណីមាត្រ៖ គណនាស្លាបបន្ទាត់កាត់ជាមួយ h តូចៗ ហើយមើលវាខិតទៅតម្លៃថេរ។</p>
        <BlockMath math={String.raw`\text{slope}=\dfrac{f(a+h)-f(a)}{h} \ \xrightarrow{h\to 0}\ f'(a)`} />
        <p>សញ្ញានៃស្លាបបង្ហាញទិសដៅឡើង/ចុះនៃក្រាបជុំវិញចំណុច។</p>
      </>
    ),
  },

  warning: {
    content: (
      <>
        <p>កុំច្រឡំអត្រាប្រែប្រួលមធ្យម (secant) ជាមួយអត្រាប្រែប្រួលភ្លាមៗ (tangent)។</p>
        <p>បើមិនអាចទាត់ h ចេញពីភាគរយបាន កុំយកលីមីតភ្លាមៗ—សម្រួលជាមុនសិន។</p>
      </>
    ),
  },

  graph: {
    expressions: [
      { id: "f", latex: "f(x)=x^2", color: "#c00" },
      { id: "t", latex: "t(x)=2*(x-1)+1", color: "#00c" },
      { id: "s", latex: "s(x)=2.5*(x-1)+1", color: "#888" },
    ],
  },

};

// ===== MAIN COMPONENT =====

export default function DerivativeGeometric() {
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
      {TOPIC_CONTENT.graph && (
        <GraphBox
          expressions={TOPIC_CONTENT.graph.expressions}
        />
      )}
    </>
  );
}
