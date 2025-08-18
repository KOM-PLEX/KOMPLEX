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




const FirstTopicContent: TopicContent = {
  definition: {
    title: "គោលការណ៍ផលបូក",
    content:
      <>
        <div className="flex flex-col items-start">
         
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
        <div className="flex flex-col items-start gap-3" key="q1">
           
        </div>,
    ],
    steps: [
        
         
    ],
    answer:(
            <div>
                
            </div> 
        )
  },
  exercise: {
    questions: [
        
    ]
  },
}



const Ester_fat_oil = () => {
  return (
    <div>
      
    </div>
  )
}

export default Ester_fat_oil
