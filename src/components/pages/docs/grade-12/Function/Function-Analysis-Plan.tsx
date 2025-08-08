import DefinitionBox from "../../common/box/DefinitionBox";
import ExampleBox from "../../common/box/ExampleBox";
import TipBox from "../../common/box/TipBox";
import ExerciseBox from "../../common/box/ExerciseBox";
import HintBox from "../../common/box/HintBox";
import WarningBox from "../../common/box/WarningBox";
import { ImageBox } from "../../common/box/ImageBox";
import { TopicContent } from "@/types/topic";
import Graph from "../../common/box/Graph";
import { InlineMath } from "react-katex";

const TOPIC_CONTENT: TopicContent = {
	definition: {
		title: "ប្លង់សិក្សាអនុគមន៍",
		content: (
			<>
				ប្លង់សិក្សាអនុគមន៍ គឺជាការវិភាគនិងសិក្សារូបរាងនៃក្រាបអនុគមន៍មួយ ដើម្បីយល់ពីលក្ខណៈសំខាន់ៗ របស់វា ដូចជា
				ដែនកំណត់ (Domain), ជួរតម្លៃ (Range), ព្រឹត្តិការណ៍លូតលាស់ និងថយចុះ, ចំណុចកំពូល, និងចំណុចឆ្លុះកាំជម្រៅ។
			</>
		),
	},

	tip: {
		title: "ចំណុចសំខាន់ក្នុងប្លង់សិក្សា",
		content: (
			<>
				• រកដែនកំណត់ និងជួរតម្លៃ <br />
				• សិក្សាអំពីអំពើលូតលាស់ និងថយចុះ <br />
				• ស្វែងរកចំណុចកំពូល (Maximum, Minimum) <br />
				• ពិនិត្យចំណុចឆ្លុះកាំជម្រៅ (Inflection Points) <br />• គូរខ្សែក្រាបត្រឹមត្រូវសម្រាប់បង្ហាញអនុគមន៍
			</>
		),
	},

	example: {
		question: <InlineMath math="f(x) = x^2 - 4x + 3" />,
		steps: [
			{
				title: "រកដែនកំណត់ និងជួរតម្លៃ",
				content: (
					<>
						ដែនកំណត់: <InlineMath math="(-\infty, \infty)" />
						<br />
						ជួរតម្លៃ: <InlineMath math="[ -1, \infty )" />
					</>
				),
			},
			{
				title: "សិក្សាអំពីអំពើលូតលាស់ និងថយចុះ",
				content: (
					<>
						អនុគមន៍ថយចុះពី <InlineMath math="(-\infty, 2)" /> និងលូតលាស់ពី <InlineMath math="(2, \infty)" />
					</>
				),
			},
			{
				title: "ស្វែងរកចំណុចកំពូល",
				content: (
					<>
						ចំណុចកំពូលជាបន្ទាត់កោងនៅ <InlineMath math="x=2" />, តម្លៃតិចតួចគឺ <InlineMath math="-1" />
					</>
				),
			},
			{
				title: "គូរខ្សែក្រាប",
				content: <>ក្រាបជាបន្ទាត់កោងខ្ពស់ជាបន្ទាត់កោងដែលបង្ហាញលក្ខណៈលូតលាស់ និងថយចុះ</>,
			},
		],
		answer: "ប្លង់សិក្សាបង្ហាញពីលក្ខណៈសំខាន់ៗនៃអនុគមន៍ និងរបៀបដំណើរការរបស់វា។",
	},

	exercise: {
		questions: [
			{
				id: "q1",
				question: <>គណនាអនុគមន៍: <InlineMath math="f(x) = x^2 - 2x + 1" /></>,
				options: [
					"ដែនកំណត់គឺ (-∞, ∞)",
					"ជួរតម្លៃគឺ (0, ∞)",
					"ចំណុចកំពូលគឺ (1, 0)",
					"អនុគមន៍នេះថយចុះពី (−∞,1) និងលូតលាស់ពី (1,∞)",
				],
				correctAnswer: 0,
			},
			{
				id: "q2",
				question: "តើអ្វីទៅជាចំណុចកំពូលនៃអនុគមន៍?",
				options: [
					"ចំណុចដែលអនុគមន៍មានតម្លៃអតិបរមា ឬអប្បបរមា",
					"ចំណុចឆ្លុះកាំជម្រៅ",
					"ចំណុចដែលខ្សែក្រាបឆ្លុះគ្នា",
					"ចំណុចដែលអនុគមន៍មិនមានតម្លៃ",
				],
				correctAnswer: 0,
			},
		],
	},

	hint: {
		content: <>ព្យាយាមរកតម្លៃ x ដែលធ្វើឲ្យអនុគមន៍មានតម្លៃអតិបរមា ឬអប្បបរមា។</>,
	},

	warning: {
		content: <>កុំច្រឡំចំណុចកំពូលជាមួយចំណុចឆ្លុះកាំជម្រៅ ឬចំណុចផ្សេងទៀតនៅលើក្រាប។</>,
	},

	image: {
		src: <Graph expressions={[{ id: "1", latex: "x^2 - 4x + 3", color: "#FF4136" }]} />,
		imageAlt: "ក្រាបប្លង់សិក្សាអនុគមន៍",
		explanation: (
			<>
				ក្រាបបង្ហាញអនុគមន៍ <InlineMath math="f(x) = x^2 - 4x + 3" /> ជាបន្ទាត់កោង ដែលមានចំណុចកំពូលនៅ{" "}
				<InlineMath math="(2, -1)" />។
			</>
		),
	},
};
export default function FunctionAnalysisPlan() {
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
