import DefinitionBox from "../../common/box/DefinitionBox";
import ExampleBox from "../../common/box/ExampleBox";
import TipBox from "../../common/box/TipBox";
import ExerciseBox from "../../common/box/ExerciseBox";
import HintBox from "../../common/box/HintBox";
import WarningBox from "../../common/box/WarningBox";
import { ImageBox } from "../../common/box/ImageBox";
import { TopicContent } from "@/types/topic";
import Graph from "../../common/box/Graph";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

const TOPIC_CONTENT: TopicContent = {
	definition: {
		title: "អនុគមន៍អិចស្ប៉ូណង់ស្យែល",
		content: (
			<>
				អនុគមន៍អិចស្ប៉ូណង់ស្យែល គឺជាអនុគមន៍ដែលមានទម្រង់ <BlockMath math="f(x) = a^x" /> ដែល{" "}
				<InlineMath math="a" /> ជាចំនួនវិជ្ជមាន និង <InlineMath math="a \neq 1" />។ តម្លៃនៃ{" "}
				<InlineMath math="f(x)" /> ប្រែប្រួលយ៉ាងលឿនពេល <InlineMath math="x" /> ផ្លាស់ប្ដូរ។
			</>
		),
	},

	tip: {
		title: "លក្ខណៈសំខាន់",
		content: (
			<>
				• បើ <InlineMath math="a > 1" /> អនុគមន៍នឹងលូតលាស់ (growth) <br />
				• បើ <InlineMath math="0 < a < 1" /> អនុគមន៍នឹងថយចុះ (decay) <br />• ក្រាបឆ្លងកាត់ចំណុច{" "}
				<InlineMath math="(0, 1)" /> ជានិច្ច <br />• ដែនកំណត់ (Domain): <InlineMath math="(-\infty, \infty)" />{" "}
				<br />• ជួរតម្លៃ (Range): <InlineMath math="(0, \infty)" />
			</>
		),
	},

	example: {
		question: <BlockMath math="f(x) = 2^x" />,
		steps: [
			{
				title: "ជ្រើសតម្លៃ x",
				content: (
					<>
						ជ្រើស <InlineMath math="x = -1, 0, 1, 2" />
					</>
				),
			},
			{
				title: "គណនាតម្លៃ f(x)",
				content: (
					<>
						<BlockMath math="f(-1) = 2^{-1} = \frac{1}{2}" />
						<BlockMath math="f(0) = 1" />
						<BlockMath math="f(1) = 2" />
						<BlockMath math="f(2) = 4" />
					</>
				),
			},
			{
				title: "តារាងតម្លៃ",
				content: (
					<>
						<InlineMath math="x: -1 \quad 0 \quad 1 \quad 2" />
						<br />
						<InlineMath math="f(x): \frac{1}{2} \quad 1 \quad 2 \quad 4" />
					</>
				),
			},
		],
		answer: "អនុគមន៍នេះលូតលាស់ ព្រោះ a = 2 > 1 និងតម្លៃកើនឡើងពេល x កើនឡើង។",
	},

	exercise: {
		questions: [
			{
				id: "q1",
				question: <BlockMath math="f(x) = 3^x, \quad f(2) = \;?" />,
				options: ["6", "9", "8", "3"],
				correctAnswer: 1,
			},
			{
				id: "q2",
				question: <BlockMath math="f(x) = \left( \frac12 \right)^x, \quad f(3) = \;?" />,
				options: ["\\frac{1}{8}", "\\frac{2}{3}", "\\frac{1}{2}", "8"],
				correctAnswer: 0,
			},
			{
				id: "q3",
				question: "ក្រាបអនុគមន៍អិចស្ប៉ូណង់ស្យែលដែល a > 1 មានលក្ខណៈដូចម្តេច?",
				options: ["លូតលាស់លឿន", "ថយចុះលឿន", "បន្ទាត់ផ្តេក", "បន្ទាត់បញ្ឈរ"],
				correctAnswer: 0,
			},
		],
	},

	hint: {
		content: (
			<>
				ចងចាំថា អនុគមន៍ <InlineMath math="f(x) = a^x" /> នឹងលូតលាស់បើ <InlineMath math="a > 1" /> ហើយថយចុះបើ{" "}
				<InlineMath math="0 < a < 1" />។
			</>
		),
	},

	warning: {
		content: (
			<>
				កុំច្រឡំរវាងអនុគមន៍អិចស្ប៉ូណង់ស្យែល <InlineMath math="a^x" /> និងអនុគមន៍លីនេអ៊ែរ{" "}
				<InlineMath math="mx + b" /> ព្រោះពួកវាមានលក្ខណៈការលូតលាស់ខុសគ្នា។
			</>
		),
	},

	image: {
		src: (
			<Graph
				expressions={[
					{ id: "1", latex: "2^x", color: "#FF4136" },
					{ id: "2", latex: "(1/2)^x", color: "#0074D9" },
				]}
			/>
		),
		imageAlt: "ក្រាបអនុគមន៍អិចស្ប៉ូណង់ស្យែល",
		explanation: (
			<>
				ក្រាបបង្ហាញអនុគមន៍ <InlineMath math="2^x" /> (ក្រហម) ដែលលូតលាស់ និង <InlineMath math="(1/2)^x" /> (ខៀវ)
				ដែលថយចុះ។
			</>
		),
	},
};
export default function ExponentialFunction() {
	return (
		<>
			{TOPIC_CONTENT.definition && (
				<DefinitionBox title={TOPIC_CONTENT.definition.title} content={TOPIC_CONTENT.definition.content} />
			)}

			{TOPIC_CONTENT.tip && <TipBox title={TOPIC_CONTENT.tip.title} content={TOPIC_CONTENT.tip.content} />}

			{TOPIC_CONTENT.example && (
				<ExampleBox
					question={TOPIC_CONTENT.example.question}
					steps={TOPIC_CONTENT.example.steps}
					answer={TOPIC_CONTENT.example.answer}
				/>
			)}

			{TOPIC_CONTENT.exercise && <ExerciseBox questions={TOPIC_CONTENT.exercise.questions} />}

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
