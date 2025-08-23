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
    title: "១. ប្រតិកម្មទៅមក",
    content:
      <>
        <div className="flex flex-col items-start">
            <p>ប្រតិកម្មទៅមកគឺជាប្រតិកម្មដែលក្នុងនោះអង្គធាតុកកេីត (ផលិតផល) អាចមានប្រតិកម្មជាមួយគ្នាបង្កេីតអង្គធាតុប្រតិករវិញ ។</p>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <ul className='list-disc pl-5 flex flex-col items-start gap-4'>
            <div className='flex flex-col gap-3'>
                <li>ប្រតិកម្មចំហេះម៉ាញេស្យូមក្នុងខ្យល់បង្កេីតបានម៉ាញេស្យូមអុកសុីត​ ។</li>
                <InlineMath math="2Mg(s) + O_{2} (g) \rightarrow 2MgO (s)" />
                <p>ក្នុងប្រតិកម្មនេះ ម៉ាញេស្យូមអុកសុីតមិនអាចប្រតិកម្មជាមួយគ្នាបង្កេីតជា ម៉ាញេស្យូមនិង អុកសុីសែនវិញទេ ។</p>
            </div>
            <div className='flex flex-col gap-3'>
                <li>នៅពេលដុតកម្តៅ បារត (II) អុកសុីត បំបែកជា បារត និងឧស្ម័នអុកសុីសែន ។</li>
                <InlineMath math="2HgO (s) \rightarrow 2Hg (l) + O_{2} (g) (1)" />
                <p>ក្នុងពេលប្រតិកម្មបំបែកកំពុងប្រព្រឹត្តទៅ បារតមានអំពេីជាមួយ អុកសុីសែន​ឲផលជាបារត (II) អុកសុីតវិញ</p>
                <InlineMath math="2Hg (l) + O_{2} \rightarrow 2HgO (s)" />
                <p>ប្រតិកម្មបែបនេះ ហៅថាប្រតិកម្មទៅមកដែលអាចសរសេរជា</p>
                <InlineMath math="2HgO (s) \xrightleftharpoons[(2)]{(1)} 2Hg (l) + O_{2} (g)" />
            </div>
        </ul>
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


const SecondTopicContent : TopicContent = {
  definition: {
    title: "២. លំនឹងគីមី",
    content:
      <>
        <div className="flex flex-col items-start">
            <p>លំនឹងគីមីជាច្រេីន ជាប្រតិកម្មទៅមកនៅក្រោមលក្ខខណ្ឌសីតុណ្ហភាព និងកំហាប់ប្រក្រតី ។ ប្រតិកម្មទាំងនោះទៅដល់ស្ថានភាពលំនឹង បេីគ្មានសារធាតុមួយត្រូវបានរំដោះចេញពីប្រព័ន្ធគីមី ។</p>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <ul className='list-disc pl-5 flex flex-col items-start gap-4'>
            <div className='flex flex-col gap-3'>
                <li>ករណីខ្លះ ប្រតិកម្មតាមទិសបណ្តោយប្រព្រឹត្តទៅស្ទេីរទាំងស្រុង ទេីបមានប្រតិកម្មតាមទិសច្រាសកេីតឡេីង ។ ដូចនេះនៅពេលមានលំនឹងគីមី កំហាប់អង្គធាតុកកេីតធំជាង អង្គធាតុប្រតិករ ។ គេថាលំនឹងទោរទៅខាងស្តាំ ជាប្រតិកម្មនាំមុខ ។</li>
                <div className='flex items-center gap-2 flex-wrap'>
                    <p>ឧទាហរណ៍. </p>
                    <InlineMath math="2SO_{2} (g) + O_{2} (g) \rightleftharpoons 2SO_{3} (g)" />
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <li>ករណីខ្លះ ប្រតិកម្មតាមទិសបណ្តោយប្រព្រឹត្តទៅដោយលំបាក និងប្រតិកម្មតាមទិសច្រាសប្រព្រឹត្តទៅងាយស្រួល ។ ដូចនេះនៅពេលមានលំនឹងគីមី កំហាប់អង្គធាតុប្រតិករធំជាងអង្គធាតុកកេីត ។ គេថា លំនឹងទោរទៅខាងឆ្វេង ជាប្រតិកម្មនាំមុខ ។</li>
                <div className='flex items-center gap-2 flex-wrap'>
                    <p>ឧទាហរណ៍. </p>
                    <InlineMath math="H_{2}CO_{3} (aq) + H_{2}O (l) \rightleftharpoons H_{3}O^{+} (aq) + HCO_{3}^{-} (aq)" />
                </div>
            </div>
        </ul>
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


const ThirdTopicContent : TopicContent = {
  definition: {
    title: "៣. កន្សោមថេរលំនឹង",
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
          <div className='flex items-start gap-3 flex-col'>
              <p>ឧបមាថា គេមានអង្គធាតុ A និង B មានប្រតិកម្មនឹងគ្នា បង្កេីតបានជាអង្គធាតុ C និង​ D ហេីយអង្គធាតុ C និង D មានប្រតិកម្មជាមួយគ្នាបង្កេីតបានជាអង្គធាតុ A និង​ B វិញ ។ នៅពេលលំនឹងគីមី គេបានសមីការតុល្យការ :</p>
              <InlineMath math="aA + bB \rightleftharpoons cC + dD" />
              <div className='flex items-center flex-wrap gap-3'>
                  <p>គេបានកន្សោមថេរលំនឹង</p>
                  <div className='flex items-center gap-2'>
                        <InlineMath math="K = " />  
                        <div className='text-xl'>
                              <InlineMath math="\frac{[C]^{c} \cdot [D]^{d}}{[A]^{a} \cdot [B]^{b}} " />   
                        </div> 
                  </div>
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                  <p >ថេរ K ឬថេរលំនឹង K ជាទំហំគ្មានខ្នាត ឯកំហាប់ប្រភេទគីមី គិតជា <InlineMath math="mol.L^{-1}" /> ។</p>
              </div>
              <p>ថេរ K មិនអាស្រ័យនឹងកំហាប់ប្រភេទគីមីទេ តែអាស្រ័យនឹងសីតុណ្ហភាព ។</p>
          </div>
      </>
    ),
  },

  example: {
    question: [
        <div className="flex flex-col items-start gap-3" key="q1">
            <p>គេមានប្រតិកម្មមួយស្ថិតក្នុងភាពលំនឹង :</p>
            <InlineMath math="2SO_{2} (g) + O_{2} (g) \rightleftharpoons 2SO_{3} (g)" />  
            <p>ចូរសរសេរកន្សោមថេរលំនឹងនៃប្រតិកម្មខាងលេី ។</p>
        </div>,
    ],
    steps: [
        {
            title: "កន្សោមថេរលំនឹង",
            content: (
              <>
                <div className='flex flex-col items-start gap-3'>
                    <div className='flex items-center gap-2 flex-wrap'>
                        <p>កន្សោមថេរលំនឹងនៃប្រតិកម្ម</p>
                        <InlineMath math="2SO_{2} (g) + O_{2} (g) \rightleftharpoons 2SO_{3} (g)" />  
                        <p>គឺ :</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <InlineMath math="K = " />  
                        <div className='text-xl'>
                              <InlineMath math="\frac{[SO_{3}^{2}]}{[SO_{2}^{2} \cdot [O_{2}]]} " />   
                        </div> 
                  </div>
                </div>
              </>
            )
        },
    ],
  },
  example2: {
    question: [
        <div className="flex flex-col items-start gap-3" key="q2">
            <div className='flex items-center gap-2 flex-wrap'>
                <p>ល្បាយនៃ </p>
                <InlineMath math="H_{2} 0.5 mol" /> 
                <p>និង </p>
                <InlineMath math="I_{2} 0.5 mol" /> 
                <p>ត្រូវបានដាក់ក្នុងកែវដែកថែបដែល គ្មានច្រេះចំនុះ 1L នៅសីតុណ្ហភាព 430 °C ។ ថេរលំនឹងសម្រាប់ប្រតិកម្មគឺ 54.3</p>
            </div>
            <InlineMath math="H_{2} (g) + I_{2} (g) \rightleftharpoons 2HI" /> 
            <div className='flex items-center gap-2 flex-wrap'>
                  <p>ចូរគណនាកំហាប់នៃ </p>
                  <InlineMath math="H_{2} , I_{2}" /> 
                  <p>និង </p>
                  <InlineMath math="HI" /> 
                  <p>នៅពេលលំនឹង ។ </p>
            </div>
        </div>,
    ],
    steps: [
        {
            title: "",
            content: (
              <>
                <div className='flex flex-col items-start gap-3' key={"q1"}>
                    <div className='flex items-center gap-10 sm:gap-15 '>
                        <p>សមីការ</p>
                        <InlineMath math="H_{2} + I_{2} \rightleftharpoons 2HI" /> 
                    </div>
                    <div className='flex items-center gap-6 sm:gap-10 '>
                        <p>កំហាប់ដេីម</p>
                        <div className='flex items-center gap-5'>
                            <span>0.5</span>
                            <span>0.5</span>
                            <span>0</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 '>
                        <p>កំហាប់ប្រែប្រួល</p>
                        <div className='flex items-center gap-5'>
                          <InlineMath math="-x" /> 
                          <InlineMath math="-x" /> 
                          <InlineMath math="+2x" /> 
                        </div>
                    </div>
                    <div className='flex items-center gap-1 sm:gap-2 '>
                        <p>កំហាប់លំនឹង</p>
                        <div className='flex items-center gap-2 sm:gap-5 text-xs'>
                          <InlineMath math="(0.5 -x)" /> 
                          <InlineMath math="(0.5 -x)" /> 
                          <InlineMath math="2x" /> 
                        </div>
                    </div>
                </div>
              </>
            )
        },
        {
            title: "កន្សោមថេរលំនឹង",
            content: (
              <>
                <div className='flex flex-col items-start gap-3' key={"q2"}>
                    <div className='flex items-center flex-wrap gap-3'>
                        <p>កន្សោមថេរលំនឹងគឺ :</p>
                        <div className='flex items-center gap-2'>
                            <InlineMath math="K = " />  
                            <div className='text-xl'>
                              <InlineMath math="\frac{[SO_{3}^{2}]}{[SO_{2}^{2} \cdot [O_{2}]]} " />   
                            </div> 
                        </div>
                    </div>
                    <p>ដោយជំនួសកំហាប់ចូលយេីងបាន </p>
                    <div className='flex items-center flex-wrap gap-2'>
                        <InlineMath math="54.3 = " />  
                        <div className='text-xl'>
                            <InlineMath math="\frac{(2x)^{2}}{(0.5-x)(0.5-x)} " />   
                        </div>
                        <div className='text-xl'>
                            <InlineMath math="= \frac{(2x)^{2}}{(0.5-x)^{2}} " />   
                        </div> 
                    </div>
                    <p>បំពាក់រឺសការ៉េលេីអង្គទាំងសងខាងយេីងបាន </p>
                    <div className='flex items-center gap-2 flex-wrap'>
                        <InlineMath math="7.37 " />  
                        <div className='text-xl'>
                            <InlineMath math="= \frac{2x}{0.5-x} " />   
                        </div>  
                          <InlineMath math="\Leftrightarrow x = 0.393 M" />   
                    </div>  
                </div>
              </>
            )
        },
        {
            title: "",
            content: (
              <>
                <div className='flex flex-col items-start gap-3' key={"q3"}>
                    <p>នៅលំនឹង កំហាប់របស់ប្រភេទគីមីគឺ </p>
                   <div className='flex items-center gap-2 flex-wrap'>
                        <InlineMath math="[H_{2}] = ( 0.5 - 0.393) " />  
                        <InlineMath math="= 0.107 M " />   
                   </div>
                   <div className='flex items-center gap-2 flex-wrap'>
                        <InlineMath math="[I_{2}] = ( 0.5 - 0.393) " />  
                        <InlineMath math="= 0.107 M " />   
                   </div>
                   <div className='flex items-center gap-2 flex-wrap'>
                        <InlineMath math="[H_{2}] = ( 2 \cdot 0.393 ) " />  
                        <InlineMath math="= 0.786 M " />   
                   </div>
                </div>
              </>
            )
        },
    ],
    answer:[
      <div className='flex flex-col items-start gap-4'>
          <p>កំហាប់នៅពេលមានលំនឹងនៃ </p>
          <div className='flex flex-col items-start sm:items-center sm:justify-center justify-start w-full'>
              <InlineMath math="[H_{2}] = 0.107 M" />   
              <InlineMath math="[I_{2}] = 0.107 M " />  
              <InlineMath math="[H_{2}] = 0.786 M " /> 
          </div>     
      </div>
    ]
  },
  exercise: {
    questions: [
        
    ]
  },
}



const Nature_equilibrium = () => {
  return (
    <div>
        <div>
            {FirstTopicContent.definition && (
              <DefinitionBox title={FirstTopicContent.definition.title} content={FirstTopicContent.definition.content} />
            )}
            {FirstTopicContent.tip && (
                <TipBox title={FirstTopicContent.tip.title} content={FirstTopicContent.tip.content} />
            )}
            {FirstTopicContent.example && (
                <ExampleBox question={FirstTopicContent.example.question} />
            )}
        </div>
        <div>
            {SecondTopicContent.definition && (
              <DefinitionBox title={SecondTopicContent.definition.title} content={SecondTopicContent.definition.content} />
            )}
            {SecondTopicContent.tip && (
                <TipBox title={SecondTopicContent.tip.title} content={SecondTopicContent.tip.content} />
            )}
            {SecondTopicContent.example && (
                <ExampleBox question={SecondTopicContent.example.question} />
            )}
        </div>
        <div>
            {ThirdTopicContent.definition && (
              <DefinitionBox title={ThirdTopicContent.definition.title} content={ThirdTopicContent.definition.content} />
            )}
            {ThirdTopicContent.tip && (
                <TipBox title={ThirdTopicContent.tip.title} content={ThirdTopicContent.tip.content} />
            )}
            {ThirdTopicContent.example && (
                <ExampleBox question={ThirdTopicContent.example.question} steps={ThirdTopicContent.example.steps}/>
            )}
            {ThirdTopicContent.example2 && (
                <ExampleBox question={ThirdTopicContent.example2.question} steps={ThirdTopicContent.example2.steps} answer={ThirdTopicContent.example2.answer}/>
            )}
        </div>

    </div>
  )
}

export default Nature_equilibrium
