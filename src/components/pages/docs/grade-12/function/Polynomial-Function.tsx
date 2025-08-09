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

// ===== TOPIC CONTENT DATA =====

const TOPIC_CONTENT: TopicContent = {
	definition: {
		title: "អនុគមន៍សនិទាន",
		content: (
			<>
				អនុគមន៍សនិទាន គឺជាអនុគមន៍ដែលមានតម្លៃ <InlineMath math="f(x)" /> ដូចគ្នា សម្រាប់គ្រប់តម្លៃ{" "}
				<InlineMath math="x" /> ទាំងអស់។
				<br />
				ក្នុងទម្រង់គណិតវិទ្យា អាចសរសេរ៖ <InlineMath math="f(x) = c" /> ដែល <InlineMath math="c" /> ជាចំនួនថេរ។
			</>
		),
	},

	tip: {
		title: "លក្ខណៈសំខាន់",
		content: (
			<>
				• ក្រាបជាបន្ទាត់ផ្តេកកាត់អ័ក្ស y នៅ <InlineMath math="y = c" /> <br />
				• ចំនួនថេរ <InlineMath math="c" /> គឺជាកម្ពស់នៃបន្ទាត់
				<br />• មិនសូវមានការប្រែប្រួលតម្លៃទេ ព្រោះគ្រប់ <InlineMath math="x" /> ផ្តល់តម្លៃដូចគ្នា
			</>
		),
	},

	example: {
		question: <InlineMath math="f(x) = 5" />,
		steps: [
			{
				title: "ជ្រើសតម្លៃ x",
				content: (
					<>
						ជ្រើស <InlineMath math="x = -1, 0, 2" />
					</>
				),
			},
			{
				title: "គណនាតម្លៃ f(x)",
				content: (
					<>
						<ul className="list-disc list-inside space-y-3 text-small">
							<li>
								<InlineMath math="f(-1) = 5" />
							</li>
							<li>
								<InlineMath math="f(0) = 5" />
							</li>
							<li>
								<InlineMath math="f(2) = 5" />
							</li>
						</ul>
					</>
				),
			},
			{
				title: "តារាងតម្លៃ",
				content: (
					<table className="table-auto border-collapse border border-gray-300 text-left my-4">
						<thead>
							<tr>
								<th className="border border-gray-300 px-4 py-2 text-left font-bold">x</th>
								<th className="border border-gray-300 px-4 py-2 text-left font-normal">-1</th>
								<th className="border border-gray-300 px-4 py-2 text-left font-normal">0</th>
								<th className="border border-gray-300 px-4 py-2 text-left font-normal">2</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th className="border border-gray-300 px-4 py-2 text-left font-bold">f(x)</th>
								<td className="border border-gray-300 px-4 py-2 text-left">
									<InlineMath math="5" />
								</td>
								<td className="border border-gray-300 px-4 py-2 text-left">
									<InlineMath math="5" />
								</td>
								<td className="border border-gray-300 px-4 py-2 text-left">
									<InlineMath math="5" />
								</td>
							</tr>
						</tbody>
					</table>
				),
			},
		],
		answer: "គ្រប់តម្លៃ x ទាំងអស់ផ្តល់ f(x) = 5 ដូចគ្នា",
	},

	exercise: {
		questions: [
			{
				id: "q1",
				question: <>រកតម្លៃអនុវត្តន៍: <InlineMath math="f(x) = -3, \quad f(7) = \;?" /></>,
				options: ["7", "-3", "0", "3"],
				correctAnswer: 1,
			},
			{
				id: "q2",
				question: <>រកតម្លៃអនុវត្តន៍: <InlineMath math="f(x) = 10, \quad f(-5) = \;?" /></>,
				options: ["10", "-5", "5", "0"],
				correctAnswer: 0,
			},
			{
				id: "q3",
				question: "ក្រាបរបស់អនុគមន៍សនិទានមានរូបរាងដូចម្តេច?",
				options: ["បន្ទាត់ផ្តេក", "បន្ទាត់ទ្រេត", "បន្ទាត់កោង", "បន្ទាត់បញ្ឈរ"],
				correctAnswer: 0,
			},
		],
	},

	hint: {
		content: (
			<>
				សូមចងចាំថា អនុគមន៍សនិទាន <InlineMath math="f(x) = c" /> មានតម្លៃថេរ មិនថា <InlineMath math="x" />{" "}
				ផ្លាស់ប្ដូរយ៉ាងណាក៏ដោយ។
			</>
		),
	},

	warning: {
		content: (
			<>
				កុំច្រឡំអនុគមន៍សនិទានជាមួយអនុគមន៍បន្ទាត់ទ្រេត <InlineMath math="f(x) = mx + b" /> ព្រោះអនុគមន៍សនិទានមាន{" "}
				<InlineMath math="m = 0" /> ប៉ុណ្ណោះ។
			</>
		),
	},

	image: {
		src: <Graph expressions={[{ id: "1", latex: "f(x)=5", color: "#FF4136" }]} />,
		imageAlt: "ក្រាបអនុគមន៍សនិទាន",
		explanation: (
			<>
				ក្រាបបង្ហាញអនុគមន៍ <InlineMath math="f(x) = 5" /> ជាបន្ទាត់ផ្តេកកាត់អ័ក្ស y នៅចំណុច{" "}
				<InlineMath math="y = 5" />។
			</>
		),
	},
};

// ===== MAIN COMPONENT =====

export default function PolynomialFunction() {
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
