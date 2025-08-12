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
    title: "",
    content:
      <>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 flex-wrap w-full">

          </div>
          <div className="flex items-center gap-3 flex-wrap w-full">

          </div>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        
      </>
    ),
  },

  example: {
    question: [
      <>
        
      </>
    ]
  },
  exercise: {
    questions: [
      
    ]
  },
}



const SecondTopic: TopicContent = {
  definition: {
    title: "",
    content:
      <>
        
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>

      </>
    ),
  },
  example: {
    question: [
      
    ],
  },
  exercise: {
    questions: [
      
    ]
  },
  
}


const ProbabilityPractice = () => {
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
              {FirstTopicContent.example2 && (
                  <ExampleBox question={FirstTopicContent.example2.question} steps={FirstTopicContent.example2.steps} answer={FirstTopicContent.example2.answer} />
              )}
              {FirstTopicContent.exercise && (
                <ExerciseBox questions={FirstTopicContent.exercise.questions} />
              )}
            </div>
    
            <div>
              {SecondTopic.definition && (
                  <DefinitionBox title={SecondTopic.definition.title} content={SecondTopic.definition.content} />
              )}
              {SecondTopic.tip && (
                  <TipBox title={SecondTopic.tip.title} content={SecondTopic.tip.content} />
              )}
              {SecondTopic.example && (
                  <ExampleBox question={SecondTopic.example.question} steps={SecondTopic.example.steps} answer={SecondTopic.example.answer} />
              )}
               {SecondTopic.exercise && (
                <ExerciseBox questions={SecondTopic.exercise.questions} />
              )}
        </div>
    </>
  )
}

export default ProbabilityPractice
