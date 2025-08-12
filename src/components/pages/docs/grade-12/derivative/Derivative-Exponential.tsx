import DefinitionBox from "../../common/box/DefinitionBox";
import ExampleBox from "../../common/box/ExampleBox";
import TipBox from "../../common/box/TipBox";
import ExerciseBox from "../../common/box/ExerciseBox";
import HintBox from "../../common/box/HintBox";
import WarningBox from "../../common/box/WarningBox";
import { TopicContent } from "@/types/topic";
import { BlockMath } from "react-katex";
import GraphBox from "../../common/box/GraphBox";

// ===== TOPIC CONTENT DATA (Derivative — Exponential Functions) =====

const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "ដេរីវេអនុគមន៍អុិចស្បូណង់ស្យែល",
    content: (
      <>
        <p>រូបមន្តដេរីវេមូលដ្ឋានសម្រាប់អុិចស្បូណង់ស្យែល៖</p>
        <BlockMath math={String.raw`\frac{d}{dx}\big(e^x\big) = e^x`} />
        <BlockMath math={String.raw`\frac{d}{dx}\big(a^x\big) = a^x \ln(a)\quad (a>0,\ a\neq 1)`} />
        <p>ប្រសិនបើអាគុយម៉ង់គឺ g(x) ត្រូវប្រើច្បាប់ខ្សែសង្វាក់៖</p>
        <BlockMath math={String.raw`\frac{d}{dx}\big(e^{g(x)}\big) = g'(x)\,e^{g(x)}`} />
        <BlockMath math={String.raw`\frac{d}{dx}\big(a^{g(x)}\big) = g'(x)\,a^{g(x)}\ln(a)`} />
      </>
    ),
  },

  tip: {
    title: "ចំណុចសំខាន់ៗ",
    content: (
      <div>
        <p>• e^x ដេរីវេស្មើខ្លួនវាផ្ទាល់។</p>
        <BlockMath math={String.raw`\frac{d}{dx}(e^{kx+b}) = k\,e^{kx+b}`} />
        <p>• សម្រាប់មូលដ្ឋានទូទៅ a^x ត្រូវបន្ថែម \ln(a):</p>
        <BlockMath math={String.raw`\frac{d}{dx}(a^{x}) = a^{x}\ln(a)`} />
        <p>• ច្បាប់ខ្សែសង្វាក់សម្រាប់ <BlockMath math={String.raw`a^{g(x)}`} />:</p>
        <BlockMath math={String.raw`\frac{d}{dx}(a^{g(x)}) = g'(x)\,a^{g(x)}\ln(a)`} />
      </div>
    ),
  },

  example: {
    question: (
      <BlockMath
        math={String.raw`\text{រក } y' \text{ សម្រាប់ } y = e^{2x} - 4e^{-x} + 3\cdot 5^{x}`}
      />
    ),
    steps: [
      {
        title: "យកដេរីវេនីមួយៗ",
        content: (
          <>
            <BlockMath math={String.raw`\frac{d}{dx}(e^{2x}) = 2e^{2x}`} />
            <BlockMath math={String.raw`\frac{d}{dx}(-4e^{-x}) = -4\cdot(-e^{-x}) = 4e^{-x}`} />
            <BlockMath math={String.raw`\frac{d}{dx}(3\cdot 5^{x}) = 3\cdot 5^{x}\ln(5)`} />
          </>
        ),
      },
      {
        title: "បូកលទ្ធផល",
        content: (
          <BlockMath math={String.raw`y' = 2e^{2x} + 4e^{-x} + 3\ln(5)\,5^{x}`} />
        ),
      },
      {
        title: "ចម្លើយ",
        content: "ដេរីវេ y' = 2e^{2x} + 4e^{-x} + 3 ln(5) · 5^x",
      },
    ],
    answer: "y' = 2e^{2x} + 4e^{-x} + 3 ln(5) · 5^x",
  },

  exercise: {
    questions: [
      {
        id: "eq1",
        question: (
          <>
            <p>ដេរីវេនៃ</p>
            <BlockMath math={String.raw`y = e^{3x}`} />
            <p>គឺ?</p>
          </>
        ),
        options: [
          <BlockMath key="eq1o0" math={String.raw`3e^{3x}`} />,
          <BlockMath key="eq1o1" math={String.raw`e^{3x}`} />,
          <BlockMath key="eq1o2" math={String.raw`3e^{x}`} />,
          <BlockMath key="eq1o3" math={String.raw`e^{x}`} />,
        ],
        correctAnswer: 0,
      },
      {
        id: "eq2",
        question: (
          <>
            <p>ដេរីវេនៃ</p>
            <BlockMath math={String.raw`y = 2^{x}`} />
            <p>គឺ?</p>
          </>
        ),
        options: [
          <BlockMath key="eq2o0" math={String.raw`2^{x}`} />,
          <BlockMath key="eq2o1" math={String.raw`\ln(2)\,2^{x}`} />,
          <BlockMath key="eq2o2" math={String.raw`\ln(e)\,2^{x}`} />,
          <BlockMath key="eq2o3" math={String.raw`\dfrac{1}{\ln(2)}\,2^{x}`} />,
        ],
        correctAnswer: 1, // (ln 2) 2^x
      },
      {
        id: "eq3",
        question: (
          <>
            <p>គណនា</p>
            <BlockMath math={String.raw`y'(0) \text{ សម្រាប់ } y = e^{x} + 5\cdot 3^{x}`} />
          </>
        ),
        options: [
          <BlockMath key="eq3o0" math={String.raw`1 + 5\ln(3)`} />,
          <BlockMath key="eq3o1" math={String.raw`\ln(3) + 5`} />,
          <BlockMath key="eq3o2" math={String.raw`6`} />,
          <BlockMath key="eq3o3" math={String.raw`5\ln(3)`} />,
        ],
        correctAnswer: 0, // e^0 + 5 ln 3 * 3^0 = 1 + 5 ln 3
      },
    ],
  },

  hint: {
    content: (
      <>
        <p>ចងចាំ៖ អាចសរសេរ <BlockMath math={String.raw`a^x = e^{x\ln a}`} /> ហើយយកដេរីវេតាមខ្សែសង្វាក់៖</p>
        <BlockMath math={String.raw`\frac{d}{dx}\big(e^{x\ln a}\big) = (\ln a)\,e^{x\ln a} = (\ln a)\,a^{x}`} />
        <p>សម្រាប់ <BlockMath math={String.raw`e^{kx+b}`} /> មាន</p>
        <BlockMath math={String.raw`\frac{d}{dx}\big(e^{kx+b}\big)=k\,e^{kx+b}`} />
      </>
    ),
  },

  warning: {
    content: (
      <>
        <p>• កុំភ្លេចកត្តា \ln(a) សម្រាប់ a^x។</p>
        <p>• ប្រើខ្សែសង្វាក់ពេលអាគុយម៉ង់មិនមែន x តែប៉ុណ្ណោះ (ដូចជា <BlockMath math={String.raw`e^{2x-1}, 3^{x^2}`} />).</p>
        <p>• ប្រសិនបើមានផលគុណ (ឧ. x\,e^x) ត្រូវប្រើច្បាប់គុណ មិនមែនខ្សែសង្វាក់។</p>
      </>
    ),
  },

  graph: {
    expressions: [
      { id: "e", latex: "f(x)=exp(x)", color: "#c00" },
      { id: "eprime", latex: "g(x)=exp(x)", color: "#00c" },
      { id: "two", latex: "h(x)=2^x", color: "#0a0" },
      { id: "twoprime", latex: "k(x)=0.69314718056*2^x", color: "#a0a" },
    ],
  },
};

// ===== MAIN COMPONENT =====

export default function DerivativeExponential() {
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
