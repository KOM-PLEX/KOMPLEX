import React from 'react'

import DefinitionBox from "../../../common/box/DefinitionBox"
import TipBox from "../../../common/box/TipBox"
import HintBox from "../../../common/box/HintBox"
import { TopicContent } from "@/types/topic"
import { BlockMath, InlineMath } from "react-katex"
import 'katex/dist/katex.min.css'
import WarningBox from "../../../common/box/WarningBox"
import ExerciseBox from "../../../common/box/ExerciseBox"
import ExampleBox from "../../../common/box/ExampleBox"
import { div } from "three/tsl"

// import ChemicalSlowReactionDiagram from './diagram'




const FirstTopicContent: TopicContent = {
  definition: {
    title: "១. កត្តាពេលក្នុងប្រតិកម្មគីមី",
    content:
      <>
        <div className='flex flex-col items-start'>
            <p>សុីនេទិចគីមីគឺជាការសិក្សាអំពីបម្រែបម្រួលល្បឿននៃប្រតិកម្មគីមី។</p>
        </div>
      </>
  },
}

const SecondTopic: TopicContent = {
  definition: {
    title: "១.១ ប្រតិកម្មរហ័ស",
    content:
        <div>
            <div>
                <p>ប្រតិកម្មរហ័សគឺជាប្រតិកម្មដែលកើតឡើងក្នុងរយៈពេលខ្លី។</p>
            </div>
        </div>
  },
  example: {
    question: [
        <div className="flex flex-col items-start" key="q1">
            <div className='flex items-center flex-wrap'>
                <BlockMath math="Ag^{+}(aq) + Cl^{-}(aq)" />
                <BlockMath math="\rightarrow AgCl(s)" />

            </div>
            <div className='flex items-center flex-wrap'>
                <BlockMath math="Cu^{2+}(aq) + 2OH^{-}(aq)" />
                <BlockMath math="\rightarrow Cu(OH)_{2}(s)" />
            </div>
        </div>,
    ],
  },
}

const ThirdTopic: TopicContent = {
  definition: {
    title: "១.២ ប្រតិកម្មយឺត",
    content:
        <div>
            <div>
                <p>ប្រតិកម្មយឺតគឺជាប្រតិកម្មដែលកកេីតឡេីងក្នុងរយៈពេលច្រើននវិនាទី នាទី ឬច្រេីនម៉ោង។</p>
            </div>
        </div>
  },
  example: {
    question: [
        <div key="q1">
              {/* <ChemicalSlowReactionDiagram/> */}
        </div>
    ],
  },


}




const RateChemicalReaction = () => {
  return (
    <>
        <div>
            {FirstTopicContent.definition && (
                              <DefinitionBox title={FirstTopicContent.definition.title} content={FirstTopicContent.definition.content} />
            )}
            {FirstTopicContent.tip && (
                <TipBox title={FirstTopicContent.tip.title} content={FirstTopicContent.tip.content} />
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
        </div>
        <div>
            {ThirdTopic.definition && (
                <DefinitionBox title={ThirdTopic.definition.title} content={ThirdTopic.definition.content} />
            )}
            {ThirdTopic.tip && (
                <TipBox title={ThirdTopic.tip.title} content={ThirdTopic.tip.content} />
            )}
            {ThirdTopic.example && (
                <ExampleBox question={ThirdTopic.example.question} steps={ThirdTopic.example.steps} answer={ThirdTopic.example.answer} />
            )}
        </div>
    </>
  )
}

export default RateChemicalReaction
