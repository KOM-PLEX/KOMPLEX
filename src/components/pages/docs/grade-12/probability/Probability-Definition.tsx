import DefinitionBox from "../../common/box/DefinitionBox"
import TipBox from "../../common/box/TipBox"
import HintBox from "../../common/box/HintBox"
import { TopicContent } from "@/types/topic"
import { BlockMath, InlineMath } from "react-katex"
import 'katex/dist/katex.min.css'
import WarningBox from "../../common/box/WarningBox"
import ExerciseBox from "../../common/box/ExerciseBox"
import ExampleBox from "../../common/box/ExampleBox"

const FirstTopicContent: TopicContent = {
  definition: {
    title: "ប្រូបាប",
    content:
      <>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 flex-wrap w-full">
            <p>ប្រូបាបគឺជាផលធៀបរវាងចំនួនករណីស្របនិងចំនួនករណីអាចដែលនៅចន្លោះ 0 - 1។</p>
          </div>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <div className="flex  flex-col">
            <p>គេកំណត់ប្រូបាបនៃព្រឹត្តការណ៍ A មួយដោយ:</p>
            <div>
                <BlockMath math={"P(A) = \\frac{n(A)}{n(s)}"} />
            </div>
            <p> n(A) គឺជាចំនួនករណីស្រប</p>
            <p>n(s) គឺជាចំនួនករណីអាច</p>
        </div>
      </>
    ),
  },

  example: {
    question: [
        <div className="flex flex-col items-start gap-3" key="q2">
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 flex-wrap">
                   <p>គេរេីសសិស្សម្នាក់ធ្វេីជាប្រធានថ្នាក់ក្នុងចំណោមសិស្សស្រី ៥ នាក់​ និងសិស្សប្រុស ៣ នាក់។រកប្រូបាបដែល :</p>
                </div>
                <div className="flex  gap-5 flex-col">
                  <p>ក. ប្រធានថ្នាក់ជាស្រី</p>
                  <p>ខ. ប្រធានថ្នាក់ជាប្រុស</p>
                </div>
            </div>
        </div>,
    ],
    steps: [
        {
            title: "រកចំនួនករណីអាច",
            content: <div>
               <p>សិស្សទាំងអស់មាន ៨ នាក់</p>
               <BlockMath math={"n(s) = 8"} />
            </div>
        },
        {
            title: "ក. ប្រធានថ្នាក់ជាស្រី",
            content: <div className="flex flex-col gap-2">
                <p>សិស្សស្រីមាន ៥ នាក់</p>
                <BlockMath math={"n(A) = 5"} />
                <div>
                  <p>គេបាន</p>
                  <BlockMath math={"P(A) = \\frac{n(A)}{n(s)} = \\frac{5}{8}"} />
                </div>
            </div>
        },
        {
            title: "ក. ប្រធានថ្នាក់ជាប្រុស",
            content: <div className="flex flex-col gap-2">
                <p>សិស្សប្រុសមាន ៣ នាក់</p>
                <BlockMath math={"n(A) = 3"} />
                <div>
                  <p>គេបាន</p>
                  <BlockMath math={"P(A) = \\frac{n(A)}{n(s)} = \\frac{3}{8}"} />
                </div>
            </div>
        },
    ]
  },
  exercise: {
      questions: [
        {
          id: "ex-q1",
          question: (
            <div className="flex flex-col gap-3">
              <p>ក្នុងប្រអប់មួយមានបាល់ពណ៌ក្រហម ៣ បាល់ និងបាល់ពណ៌បៃតង ៧ បាល់។ ចាប់យកបាល់មួយដោយចៃដន្យ។ រកប្រូបាបនៃការចាប់យកបាល់ពណ៌បៃតង។</p>
            </div>
          ),
          options: [
            <p key="ex-q1-o1">3/10</p>,
            <p key="ex-q1-o2">7/10</p>,
            <p key="ex-q1-o3">1/2</p>,
            <p key="ex-q1-o4">2/5</p>,
          ],
          correctAnswer: 1,
        },
        {
          id: "ex-q2",
          question: (
            <div className="flex flex-col gap-3">
              <p>មានកាត ៥០ សន្លឹក។ ជ្រើសរើសកាតមួយសន្លឹកដោយចៃដន្យ។ រកប្រូបាបនៃការជ្រើសរើសកាតដែលមានលេខចាប់ពី ១ ទៅ ១០។</p>
            </div>
          ),
          options: [
            <p key="ex-q2-o1">10/50</p>,
            <p key="ex-q2-o2">1/5</p>,
            <p key="ex-q2-o3">1/10</p>,
            <p key="ex-q2-o4">5/10</p>,
          ],
          correctAnswer: 0,
        },
        {
          id: "ex-q3",
          question: (
            <div className="flex flex-col gap-3">
              <p>ក្នុងថ្នាក់មានសិស្ស ២៥ នាក់ ដែលមានសិស្សស្រី ១៥ នាក់។ ចាប់យកសិស្សម្នាក់ដោយចៃដន្យ។ រកប្រូបាបនៃការចាប់យកសិស្សប្រុស។</p>
            </div>
          ),
          options: [
            <p key="ex-q3-o1">10/25</p>,
            <p key="ex-q3-o2">15/25</p>,
            <p key="ex-q3-o3">1/5</p>,
            <p key="ex-q3-o4">3/5</p>,
          ],
          correctAnswer: 0,
        },
      ],
    }
}

const ProbabilityDefinition = () => {
  return (
      <>
        <div>
              {FirstTopicContent.definition && (
                  <DefinitionBox title={FirstTopicContent.definition.title} content={FirstTopicContent.definition.content} />
              )}
              {FirstTopicContent.tip && (
                  <TipBox title={FirstTopicContent.tip.title} content={FirstTopicContent.tip.content} />
              )}
    
              {FirstTopicContent.example && (
                  <ExampleBox question={FirstTopicContent.example.question} steps={FirstTopicContent.example.steps} answer={FirstTopicContent.example.answer} />
              )}
              {FirstTopicContent.exercise && (
                <ExerciseBox questions={FirstTopicContent.exercise.questions} />
              )}
        </div>
      </>
  )
}

export default ProbabilityDefinition
