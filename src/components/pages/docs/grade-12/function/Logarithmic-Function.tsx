import DefinitionBox from "../../common/box/DefinitionBox";
import ExampleBox from "../../common/box/ExampleBox";
import TipBox from "../../common/box/TipBox";
import ExerciseBox from "../../common/box/ExerciseBox";
import HintBox from "../../common/box/HintBox";
import WarningBox from "../../common/box/WarningBox";
import { ImageBox } from "../../common/box/explanation-box/ImageExplanationBox";
import { TopicContent } from "@/types/topic";
import Graph from "../../../../helper/Graph";
import { InlineMath } from "react-katex";
import { GraphExplanationBox } from "../../common/box/explanation-box/GraphExplanationBox";

const TOPIC_CONTENT: TopicContent = {
	definition: {
		title: "អនុគមន៍ឡូហ្សារីធមិ",
		content: (
			<>
				អនុគមន៍ឡូហ្សារីធមិគឺជាអនុគមន៍ដែលជាការវិលត្រឡប់នៃអនុគមន៍អិចស្ប៉ូណង់ស្យែល។
				តម្លៃអនុគមន៍ត្រូវបានកំណត់ដោយសមីការ <InlineMath math="f(x) = \log_a x" /> ដែល <InlineMath math="a" />{" "}
				ជាចំនួនវិជ្ជមាន និង a ≠ 1។
				<br />
				វានិយមប្រើសម្រាប់រកសមីការនៃចំនួនដែលត្រូវបានកើន ឬថយក្រោមមូលដ្ឋាន<a> a </a>។
			</>
		),
	},

	tip: {
		title: "លក្ខណៈសំខាន់",
		content: (
			<>
				• <InlineMath math="a^y = x" /> មានន័យថា <InlineMath math="\log_a x = y" /> <br />
				• ដែនកំណត់ (Domain): <InlineMath math="(0, \infty)" /> (តម្លៃ <InlineMath math="x" />{" "}
				ត្រូវតែជាចំនួនវិជ្ជមាន) <br />
				• ជួរតម្លៃ (Range): <InlineMath math="(-\infty, \infty)" /> <br />
				• ក្រាបរបស់អនុគមន៍ឡូហ្សារីធមិឆ្លងកាត់ចំណុច <InlineMath math="(1, 0)" />
			</>
		),
	},

	example: {
		question: <InlineMath math="f(x) = \log_2 x" />,
		steps: [
			{
				title: "ជ្រើសតម្លៃ x",
				content: (
					<>
						ជ្រើស <InlineMath math="x = 1, 2, 4, 8" />
					</>
				),
			},
			{
				title: "គណនាតម្លៃ f(x)",
				content: (
					<>
						<ul className="list-disc list-inside space-y-3 text-small">
							<li>
								<InlineMath math="f(1) = \log_2 1 = 0" />
							</li>
							<li>
								<InlineMath math="f(2) = \log_2 2 = 1" />
							</li>
							<li>
								<InlineMath math="f(4) = \log_2 4 = 2" />
							</li>
							<li>
								<InlineMath math="f(8) = \log_2 8 = 3" />
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
								<th className="border border-gray-300 px-4 py-2 text-left font-normal">1</th>
								<th className="border border-gray-300 px-4 py-2 text-left font-normal">2</th>
								<th className="border border-gray-300 px-4 py-2 text-left font-normal">4</th>
								<th className="border border-gray-300 px-4 py-2 text-left font-normal">8</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th className="border border-gray-300 px-4 py-2 text-left font-bold">f(x)</th>
								<td className="border border-gray-300 px-4 py-2 text-left">
									<InlineMath math="0" />
								</td>
								<td className="border border-gray-300 px-4 py-2 text-left">
									<InlineMath math="1" />
								</td>
								<td className="border border-gray-300 px-4 py-2 text-left">
									<InlineMath math="2" />
								</td>
								<td className="border border-gray-300 px-4 py-2 text-left">
									<InlineMath math="3" />
								</td>
							</tr>
						</tbody>
					</table>
				),
			},
		],
		answer: "តារាងបង្ហាញថា អនុគមន៍ឡូហ្សារីធមិបង្កើតតម្លៃជាប្រយោគនៃ m នៃមូលដ្ឋាន។",
	},

	exercise: {
		questions: [
			{
				id: "q1",
				question: <>រកតម្លៃអនុវត្តន៍: <InlineMath math="f(x) = \log_3 9, \quad f(x) = \;?" /></>,
				options: ["1", "2", "3", "0"],
				correctAnswer: 1,
			},
			{
				id: "q2",
				question: <>រកតម្លៃអនុវត្តន៍: <InlineMath math="f(x) = \log_5 25, \quad f(x) = \;?" /></>,
				options: ["5", "2", "3", "4"],
				correctAnswer: 1,
			},
			{
				id: "q3",
				question: "តើដែនកំណត់ (Domain) របស់អនុគមន៍ឡូហ្សារីធមិជាអ្វី?",
				options: ["(0, infty)", "(-infty, 0)", "(-infty, infty)", "[0, infty)"],
				correctAnswer: 0,
			},
		],
	},

	hint: {
		content: (
			<>
				ចងចាំថា អនុគមន៍ឡូហ្សារីធមិមានតម្លៃត្រឹមតែ <InlineMath math="x > 0" /> ហើយមូលដ្ឋាន{" "}
				<InlineMath math="a" /> គឺជាចំនួនវិជ្ជមានមិនស្មើ 1។
			</>
		),
	},

	warning: {
		content: <>កុំច្រឡំរវាងអនុគមន៍ឡូហ្សារីធមិ និងអនុគមន៍អិចស្ប៉ូណង់ស្យែល ព្រោះពួកវាជាអនុគមន៍វិលត្រឡប់គ្នា។</>,
	},

	graphExplanation: {
		expressions: [{ id: "1", latex: "f(x)=\\log_2 x", color: "#FF4136" }, { id: "2", latex: "2^x", color: "#0074D9" }],
		explanation: (
			<>
				ក្រាបក្រហមបង្ហាញអនុគមន៍ឡូហ្សារីធមិ <InlineMath math="\\log_2 x" /> និងក្រាបខៀវបង្ហាញ
				អនុគមន៍អិចស្ប៉ូណង់ស្យែល <InlineMath math="2^x" />។
			</>
		),
	},
};

export default function LogarithmicFunction() {
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

			{TOPIC_CONTENT.graphExplanation && (
				<GraphExplanationBox
					expressions={TOPIC_CONTENT.graphExplanation.expressions}
					explanation={TOPIC_CONTENT.graphExplanation.explanation}
				/>
			)}
		</>
	);
}
