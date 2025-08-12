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

const TOPIC_CONTENT: TopicContent = {
	definition: {
		title: "អនុគមន៍សមីការ",
		content: (
			<>
				អនុគមន៍សមីការ គឺជាអនុគមន៍ដែលត្រូវបានបញ្ជាក់តាមរយៈសមីការ ដែលបង្ហាញទំនាក់ទំនងរវាងអថេរ{" "}
				<InlineMath math="x" /> និងតម្លៃ
				<InlineMath math="f(x)" /> ។ សមីការនេះអាចមានបែបផ្សេងៗ ដូចជា សមីការ បន្ទាត់ សមីការប៉ូលីណូម
				ឬសមីការជាអិចស្ប៉ូណង់។
			</>
		),
	},

	tip: {
		title: "ចំណុចសំខាន់",
		content: (
			<>
				• អនុគមន៍សមីការត្រូវបានបង្ហាញជាសមីការ <InlineMath math="f(x) = ..." /> <br />
				• អាចប្រើសមីការប្រភេទផ្សេងៗ ដើម្បីពណ៌នាអនុគមន៍ <br />• អាចប្រើក្រាប
				ដើម្បីយល់ដឹងពីអាកប្បកិរិយារបស់អនុគមន៍
			</>
		),
	},

	example: {
		question: <InlineMath math="f(x) = 2x + 3" />,
		steps: [
			{
				title: "ជ្រើសតម្លៃ x",
				content: (
					<>
						ជ្រើស <InlineMath math="x = 0, 1, 2" />
					</>
				),
			},
			{
				title: "គណនាតម្លៃ f(x)",
				content: (
          <>
            <ul className="list-disc list-inside space-y-3 text-small">
              <li>
                <InlineMath math="f(0) = 2(0) + 3 = 3" />
              </li>
              <li>
                <InlineMath math="f(1) = 2(1) + 3 = 5" />
              </li>
              <li>
                <InlineMath math="f(2) = 2(2) + 3 = 7" />
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
                <th className="border border-gray-300 px-4 py-2 text-left font-normal">0</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-normal">1</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-normal">2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left font-bold">f(x)</th>
                <td className="border border-gray-300 px-4 py-2 text-left">
                  <InlineMath math="3" />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-left">
                  <InlineMath math="5" />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-left">
                  <InlineMath math="7" />
                </td>
              </tr>
            </tbody>
          </table>
				),
			},
		],
		answer: "តារាងបង្ហាញទំនាក់ទំនងរវាង x និង f(x) តាមសមីការ។",
	},

	exercise: {
		questions: [
			{
				id: "q1",
				question: <>រកតម្លៃអនុវត្តន៍: <InlineMath math="f(x) = 3x - 1, \quad f(2) = \;?" /></>,
				options: ["5", "6", "7", "8"],
				correctAnswer: 0,
			},
			{
				id: "q2",
				question: <>រកតម្លៃអនុវត្តន៍: <InlineMath math="f(x) = x^2 + 1, \quad f(3) = \;?" /></>,
				options: ["9", "10", "11", "12"],
				correctAnswer: 1,
			},
			{
				id: "q3",
				question: "តើអ្វីខាងក្រោមជាសមីការអនុគមន៍ត្រឹមត្រូវ?",
				options: ["f(x) = 4x + 2", "x = 3", "y = 2", "x^2 + y^2 = 1"],
				correctAnswer: 0,
			},
		],
	},

	hint: {
		content: (
			<>
				អនុគមន៍សមីការត្រូវបានកំណត់តាមសមីការដែលយើងអាចគណនាតម្លៃ <InlineMath math="f(x)" /> នៅលើតម្លៃអថេរ{" "}
				<InlineMath math="x" /> ។
			</>
		),
	},

	warning: {
		content: (
			<>
				កុំច្រឡំអនុគមន៍សមីការជាមួយសមីការទូទៅដែលមិនបានកំណត់តម្លៃ <InlineMath math="f(x)" />{" "}
				ឬមិនបង្ហាញទំនាក់ទំនងច្បាស់លាស់។
			</>
		),
	},

	graphExplanation: {
		expressions: [{ id: "1", latex: "2x + 3", color: "#0074D9" }],
		explanation: (
			<>
				ក្រាបបង្ហាញអនុគមន៍ <InlineMath math="f(x) = 2x + 3" /> ដែលជាបន្ទាត់ត្រង់។
			</>
		),
	},
};
export default function EquationFunction() {
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

			{TOPIC_CONTENT.imageExplanation && (
				<ImageBox
					src={TOPIC_CONTENT.imageExplanation.src}
					imageAlt={TOPIC_CONTENT.imageExplanation.imageAlt}
					explanation={TOPIC_CONTENT.imageExplanation.explanation}
				/>
			)}
		</>
	);
}
