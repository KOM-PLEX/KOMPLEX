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

// ===== TOPIC CONTENT DATA (Derivative — Trigonometric Functions) =====

const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "ដេរីវេអនុគមន៍ត្រីកោណមាត្រ",
    content: (
      <>
        <p>រូបមន្តដេរីវេមូលដ្ឋានសម្រាប់អនុគមន៍ត្រីកោណមាត្រ៖</p>

        <BlockMath math={String.raw`\frac{d}{dx}(\sin x) = \cos x`} />
        <BlockMath math={String.raw`\frac{d}{dx}(\cos x) = -\sin x`} />
        <BlockMath math={String.raw`\frac{d}{dx}(\tan x) = \sec^2 x`} />
        <BlockMath math={String.raw`\frac{d}{dx}(\cot x) = -\csc^2 x`} />
        <BlockMath math={String.raw`\frac{d}{dx}(\sec x) = \sec x \tan x`} />
        <BlockMath math={String.raw`\frac{d}{dx}(\csc x) = -\csc x \cot x`} />

        <p>បើមានអាគុយម៉ង់ខុសពី x តែមួយ (ដូចជា ax+b) ត្រូវប្រើច្បាប់ខ្សែសង្វាក់។</p>
        <BlockMath math={String.raw`\frac{d}{dx}[\sin(ax+b)] = a\cos(ax+b)`} />
      </>
    )
  },

  tip: {
    title: "ចំណុចសំខាន់ៗ",
    content: (
      <div>
        <p>• ចងចាំសញ្ញា៖ ដេរីវេនៃ cos មានសញ្ញាអវិជ្ជមាន។</p>
        <BlockMath math={String.raw`\frac{d}{dx}(\cos x) = -\sin x`} />
        <p>• tan និង sec ទទួលវិជ្ជមាន; cot និង csc ទទួលអវិជ្ជមាន។</p>
        <BlockMath math={String.raw`\frac{d}{dx}(\tan x)=\sec^2 x \quad,\quad \frac{d}{dx}(\sec x)=\sec x \tan x`} />
        <BlockMath math={String.raw`\frac{d}{dx}(\cot x)=-\csc^2 x \quad,\quad \frac{d}{dx}(\csc x)=-\csc x \cot x`} />
        <p>• ច្បាប់ខ្សែសង្វាក់៖ ប្រសិនបើ x ត្រូវបានជំនួសដោយ g(x)</p>
        <BlockMath math={String.raw`\frac{d}{dx}[\sin(g(x))] = \cos(g(x))\cdot g'(x)`} />
      </div>
    )
  },

  example: {
    question: (
      <BlockMath math={String.raw`\text{រក } y' \text{ សម្រាប់ } y=\sin x + 2\cos x - 3\tan x \text{ និងគណនា } y'(\pi/4)`} />
    ),
    steps: [
      {
        title: "យកដេរីវេនីមួយៗ",
        content: (
          <>
            <BlockMath math={String.raw`\frac{d}{dx}(\sin x) = \cos x`} />
            <BlockMath math={String.raw`\frac{d}{dx}(2\cos x) = 2(-\sin x) = -2\sin x`} />
            <BlockMath math={String.raw`\frac{d}{dx}(-3\tan x) = -3\sec^2 x`} />
          </>
        )
      },
      {
        title: "បូកទាំងអស់",
        content: (
          <BlockMath math={String.raw`y' = \cos x - 2\sin x - 3\sec^2 x`} />
        )
      },
      {
        title: "គណនា​នៅ x=\pi/4",
        content: (
          <>
            <BlockMath math={String.raw`\cos(\pi/4)=\frac{\sqrt{2}}{2},\ \ \sin(\pi/4)=\frac{\sqrt{2}}{2},\ \ \sec^2(\pi/4)=2`} />
            <BlockMath math={String.raw`y'(\pi/4)=\frac{\sqrt{2}}{2}-2\cdot \frac{\sqrt{2}}{2}-3\cdot 2 = -\frac{\sqrt{2}}{2}-6`} />
          </>
        )
      }
    ],
    answer: "y' = cos x − 2 sin x − 3 sec² x និង y'(π/4) = −(√2)/2 − 6"
  },

  exercise: {
    questions: [
      {
        id: "tq1",
        question: (
          <>
            <p>រកដេរីវេនៃ</p>
            <BlockMath math={String.raw`y=\sin(2x)`} />
          </>
        ),
        options: [
          <BlockMath key="tq1o0" math={String.raw`\cos(2x)`} />,
          <BlockMath key="tq1o1" math={String.raw`2\cos(2x)`} />,
          <BlockMath key="tq1o2" math={String.raw`2\sin(2x)`} />,
          <BlockMath key="tq1o3" math={String.raw`-2\sin(2x)`} />
        ],
        correctAnswer: 1 // 2 cos(2x)
      },
      {
        id: "tq2",
        question: (
          <>
            <p>រកដេរីវេនៃ</p>
            <BlockMath math={String.raw`y=\cos(3x)-\tan x`} />
          </>
        ),
        options: [
          <BlockMath key="tq2o0" math={String.raw`-3\sin(3x)-\sec^2 x`} />,
          <BlockMath key="tq2o1" math={String.raw`3\sin(3x)-\sec^2 x`} />,
          <BlockMath key="tq2o2" math={String.raw`-3\cos(3x)-\csc^2 x`} />,
          <BlockMath key="tq2o3" math={String.raw`-\sin(3x)-\sec^2 x`} />
        ],
        correctAnswer: 0 // -3 sin(3x) - sec^2 x
      },
      {
        id: "tq3",
        question: (
          <>
            <p>គណនា</p>
            <BlockMath math={String.raw`y'(\pi/6) \text{ សម្រាប់ } y=\sec x`} />
          </>
        ),
        options: [
          <BlockMath key="tq3o0" math={String.raw`\sec(\pi/6)\tan(\pi/6)=\frac{2}{\sqrt{3}}\cdot \frac{1}{\sqrt{3}}=\frac{2}{3}`} />,
          <BlockMath key="tq3o1" math={String.raw`\tan(\pi/6)=\frac{1}{\sqrt{3}}`} />,
          <BlockMath key="tq3o2" math={String.raw`\sec(\pi/6)=\frac{2}{\sqrt{3}}`} />,
          <BlockMath key="tq3o3" math={String.raw`0`} />
        ],
        correctAnswer: 0
      }
    ]
  },

  hint: {
    content: (
      <>
        <p>ចាំបាច់យកច្បាប់ខ្សែសង្វាក់ នៅពេលមានអាគុយម៉ង់ជាប្រូពេសិន (ax+b):</p>
        <BlockMath math={String.raw`\frac{d}{dx}[\sin(ax+b)] = a\cos(ax+b)`} />
        <BlockMath math={String.raw`\frac{d}{dx}[\cos(ax+b)] = -a\sin(ax+b)`} />
        <BlockMath math={String.raw`\frac{d}{dx}[\tan(ax+b)] = a\sec^2(ax+b)`} />
      </>
    )
  },

  warning: {
    content: (
      <>
        <p>• កុំភ្លេចសញ្ញា​ក្នុង cos, cot, csc ដែលមាន “−” នៅដេរីវេ។</p>
        <p>• ប្រយ័ត្នដែនកំណត់ (domain): tan/sec មិនកំណត់នៅ x = \pi/2 + k\pi; cot/csc មិនកំណត់នៅ x = k\pi។</p>
      </>
    )
  },

  image: {
    src: (
      <Graph
        expressions={[
          { id: "sin", latex: "f(x)=sin(x)", color: "#c00" },
          { id: "cos", latex: "g(x)=cos(x)", color: "#00c" }
        ]}
      />
    ),
    imageAlt: "ក្រាប sin និង cos",
    explanation:
      "ក្រាបបង្ហាញ f(x)=sin(x) (ក្រហម) និងដេរីវេរបស់វា f'(x)=cos(x) (ខៀវ) ដើម្បីបង្ហាញទំនាក់ទំនងដេរីវេត្រីកោណមាត្រ។"
  }
};

// ===== MAIN COMPONENT =====

export default function DerivativeTrigonometric() {
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
      {TOPIC_CONTENT.image && (
        <ImageBox
          src={TOPIC_CONTENT.image.src}
          imageAlt={TOPIC_CONTENT.image.imageAlt}
          explanation={TOPIC_CONTENT.image.explanation}
        />
      )}
    </>
  );
}
