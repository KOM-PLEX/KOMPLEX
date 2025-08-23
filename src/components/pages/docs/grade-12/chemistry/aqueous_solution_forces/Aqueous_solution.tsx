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
    title: "១. ការបំបែកអុីយ៉ុងក្នុងទឹក",
    content:
      <>
        <div className="flex flex-col items-start">
            <p>សមាសធាតុភាគច្រេីនរលាយក្នុងទឹកអាចបំបែកជាអុីយ៉ុងបាន។</p>
        </div>
      </>
  },
  // tip: {
  //   title: "ជាទូទៅ",
  //   content: (
  //     <>
        
  //     </>
  //   ),
  // },

  example: {
    question: [
        <div className="flex flex-col items-start gap-3" key="q1">
            <BlockMath math="NaCl(s) \rightarrow Na^{+}(aq) + Cl^{-}(aq)" />
            <div className='flex items-center gap-2 flex-wrap'>
                <BlockMath math="HCl + H_{2}O \rightarrow " />
                <BlockMath math="H_{3}O^{+} " />
                <BlockMath math="+ Cl^{-}" />
            </div>
            <div className='flex items-center gap-2 flex-wrap'>
                <BlockMath math="Ca(NO_{3})_{2} \rightarrow " /> 
                <BlockMath math="Ca^{2+}" />
                <BlockMath math="+ 2NO_{3}^{-}" />
            </div>
        </div>,
    ],
  },
  exercise: {
    questions: [
        
    ]
  },
}

const SecondTopic: TopicContent = {
  definition: {
    title: "១.១ ប្រតិកម្មបង្កេីតកករ",
    content:
      <>
        <div className="flex flex-col items-start">
            <p>សមាសធាតុអុីយ៉ុងមួយចំនួនមិនរលាយក្នុងទឹកទេ។</p>
            <p>សមាសធាតុរលាយឬមិនរលាយក្នុងទឹកមានបង្ហាញក្នុងតារាងធាតុរលាយនៅខាងក្រោម។</p>
        </div>
      </>
  },
  // tip: {
  //   title: "ជាទូទៅ",
  //   content: (
  //     <>
        
  //     </>
  //   ),
  // },

  example: {
    question: [
        <div className="flex flex-col items-start gap-3" key="q1">
            <BlockMath math="AgNO_{3} \rightarrow Ag^{+} + NO_{3}^{-}" />
            <BlockMath math="2NaOH \rightarrow 2Na^{+} + 2OH^{-}" />
        </div>,
    ],
  },
  example2: {
    question: [
        <div className="flex flex-col items-start gap-3" key="q1">
            <p>តេីកករនឹងកេីតមានឡេីងឬទេ កាលណាគេលាយសូលុយស្យុងទឹកនៃស័ង្កសីនីត្រាតនិងអាម៉ូញូមស៊ុលផាតចូលគ្នា?ចូរសរសេរសមីការប្រតិកម្មជំនួសទ្វេដែលអាចមាន។ បន្ទាប់មកសរសេរសមីការគីមី សមីការអុីយ៉ុងសព្វ និងសមីការអុីយ៉ុងសម្រួល។</p>
        </div>,   
    ],
    steps: [
        {
            title: "សមីការប្រតិកម្មជំនួសទ្វេ",
            content: 
            <div>
                <div className="flex flex-col items-start">
                    <div className='flex items-center gap-2 flex-wrap'>
                        <BlockMath math={"Zn(NO_{3})_{2}(aq) + (NH_{4})_{2}SO_{4}(aq)"} />
                        <BlockMath math={"\\rightarrow ZnS(?) + 2NH_{4}NO_{3}(?)"} />
                    </div>
                </div>  
            </div>
        },
        {
            title: "សមីការប្រតិកម្មគីមី",
            content: 
            <div>
                <div className="flex flex-col items-start">
                    <div className='flex items-center gap-1 flex-wrap'>
                        <p>ដោយ ZnS គឺជាស៊ុលផួមិនរលាយ​ ចំណែក</p>
                        <BlockMath math={"NH_{4}NO_{3}"} />
                        <p>ជាសមាសធាតុ</p>
                        <p>រលាយ</p>
                        <p>ក្នុងទឹក នោះគេបាន :</p>
                    </div>
                    <div className='flex items-center gap-2 flex-wrap'>
                        <BlockMath math={"Zn(NO_{3})_{2}(aq) + (NH_{4})_{2}SO_{4}(aq)"} />
                        <BlockMath math={"\\rightarrow ZnS(s) + 2NH_{4}NO_{3}(aq)"} />
                    </div>
                </div>  
            </div>
        },
        {
            title: "សមីការអុីយ៉ុងសព្វ",
            content: 
            <div>
                <div className="flex flex-col items-start">
                    <div className='flex items-center gap-2 flex-wrap'>
                        <BlockMath math={"Zn^{2+}(aq) + 2NO_{3}^{-}(aq)"} />
                        <BlockMath math={"+ 2NH_{4}^{+}(aq)"} />
                        <BlockMath math={"+ S^{2-}(aq)"} />
                        <BlockMath math={"\\rightarrow ZnS(s) + 2NH_{4}^{+}(aq) + 2NO_{3}^{-}(aq)"} />
                    </div>

                </div>  
            </div>
        },
        {
            title: "សមីការអុីយ៉ុងសម្រួល",
            content: 
            <div>
                <div className="flex flex-col items-start">
                  <p>អុីយ៉ុងអាម៉ូញូមនិងអុីយ៉ុងនីត្រាតដែលមាននៅអង្គទាំងពីរណៃសមីការគឺជាអុីយ៉ុងទស្សនិក។</p>
                    <div className='flex items-center gap-2 flex-wrap'>
                        <BlockMath math={"Zn^{2+}(aq) + S^{2-}(aq) \\rightarrow ZnS(s)"} />
                    </div>

                </div>  
            </div>
        },
    ],  
  },
    exercise: {
      questions: [
          
      ]
    },
}


const ThirdTopic: TopicContent = {
  definition: {
    title: "១.២ សមីការអុីយ៉ុងសម្រួល",
    content:
      <>
        <div className="flex flex-col items-start">
            <p>សមាសធាតុភាគច្រេីនរលាយក្នុងទឹកអាចបំបែកជាអុីយ៉ុងបាន។</p>
        </div>
      </>
  },
  // tip: {
  //   title: "ជាទូទៅ",
  //   content: (
  //     <>
        
  //     </>
  //   ),
  // },
  example: {
  question: [
        <div className="flex flex-col items-start gap-3" key="q1">
            <p>សមីការម៉ូលេគុល</p>
            <div className='flex items-center gap-2 flex-wrap'>
              <BlockMath math="AgNO_{3}(aq) + NaCl(aq) \rightarrow AgCl(s)" />
              <BlockMath math="  + NaNO_{3}(aq)" />

            </div>
            <p>សមីការអុីយ៉ុងសព្វ</p>
            <div className='flex items-center gap-1 flex-wrap'>
                <BlockMath math="Ag^{+}(aq) + NO_{3}^{-}(aq)" />
                <BlockMath math="+ Na^{+}(aq)" />
                <BlockMath math="+ Cl^{-}(aq)" />
                <BlockMath math="\rightarrow AgCl(s)" />
                <BlockMath math="+ Na^{+}(aq)" />
                <BlockMath math="+ Cl^{-}(aq)" />
            </div>
            <p>សមីការអុីយ៉ុងសម្រួល</p>
            <div className='flex items-center gap-2 flex-wrap'>
                <BlockMath math="Ag^{+}(aq) + Cl^{-}(aq) \rightarrow AgCl(s)" /> 
            </div>
        </div>,
    ],
  },

  exercise: {
    questions: [
        
    ]
  },
}



const FourthTopicContent: TopicContent = {
  definition: {
    title: "២. អុីយ៉ុងកម្ម",
    content:
      <>
        <div className="flex flex-col items-start">
            <p>អុីយ៉ុងកម្មគឺជាលំនាំបំបែកជាអុីយ៉ុងកនៃសារធាតុរលាយដោយអំពេីនៃសារធាតុរំលាយ។</p>
            
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <p>កាលណាសមាសធាតុអុីយ៉ុងរលាយ អុីយ៉ុងត្រូវបានផ្តាច់ចេញពីគ្នាហេីយត្រូវហ៊ុំព័ទ្ធដោយម៉ូលេគុលសារធាតុរំលាយ។</p>
      </>
    ),
  },

  example: {
    question: [
        <div className="flex flex-col items-start gap-3" key="q1">
            <BlockMath math={"NaCl(s) \\rightarrow Na^{+}(aq) + Cl^{-}(aq)"} />
            <div className='flex items-center flex-wrap gap-1'>
                <BlockMath math={"HCl(g) + H_{2}O(l) \\rightarrow "} />
                <BlockMath math={"H_{3}O^{+}(aq)"} />
                <BlockMath math={"+ Cl^{-}(aq)"} />
            </div>
        </div>,
    ],
  },
  exercise: {
    questions: [
        
    ]
  },
}


const FifthTopicContent: TopicContent = {
  definition: {
    title: "៣. អុីយ៉ុងអុីដ្រូញ៉ូម",
    content:
      <>
        <div className="flex flex-col items-start">
            <p>អុីយ៉ុងអុីដ្រូញ៉ូមគឺជាអុីយ៉ុងដែលមានសមាសធាតុជាអុីដ្រូញ៉ូម។</p>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <div className='flex items-start flex-col'>
          <div className='flex items-center gap-2 flex-wrap'>
              <p>ទឹកចាប់យកអុីយ៉ុង</p>
              <InlineMath math="H^{+}" />
              <p>ពីអាសុីត</p>
              <p>បង្កេីតបានជា</p>
              <p>អុីយ៉ុងអុីដ្រូញ៉ូម</p>
              <InlineMath math="H_{3}O^{+}" />
          </div>
      </div>
    ),
  },

  example: {
    question: [
        <div className="flex flex-col items-start gap-5" key="q1">
          <div className='flex items-center gap-2 flex-wrap'>
              <InlineMath math="HCl(g) \rightarrow^{H_{2}O} H^{+}(aq) + Cl^{-}(aq)" />
              <span>(1)</span>
          </div>
          <div className='flex items-center gap-2 flex-wrap'>
              <InlineMath math="H^{+}(aq) + H_{2}O(l) \rightarrow H_{3}O^{+}(aq)" />
              <span>(2)</span>
          </div>
          <div className='flex items-center gap-2 flex-wrap'>
            <span>ជាសរុប</span>
            <InlineMath math="HCl(g) + H_{2}O(l) \rightarrow H_{3}O^{+}(aq) + Cl^{-}(aq)" />
          </div>
        </div>,
    ],
  },
  exercise: {
    questions: [
        
    ]
  },
}


const SixthTopicContent: TopicContent = {
  definition: {
    title: "៤. អេឡិចត្រូលីតខ្លាំង និងអេឡិចត្រូលីតខ្សោយ",
    content:
      <>
        <div className="flex flex-col items-start">
            <p>អេឡិចត្រូលីតគឺជាសារធាតុដែលផ្តល់ផលជាអុីយ៉ុង និងចម្លងចរន្តអគ្គិសនីក្នុងសូលុយស្យុងទឹក។</p>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <div className='flex items-start flex-col'>
          <p>សារធាតុដែលមិនផ្តល់ផលជាអុីយ៉ុង និងមិនចម្លងចរន្តអគ្គិសនីក្នុងសូលុយស្យុងទឹក មិនមែនជាអេឡិចត្រូលីតទេ។</p>
      </div>
    ),
  },
}


const SeventhTopicContent: TopicContent = {
  definition: {
    title: "៤.១ អេឡិចត្រូលីតខ្លាំង ",
    content:
      <>
        <div className="flex flex-col items-start">
            <p>អេឡិចត្រូលីតខ្លាំងគឺជាសារធាតុដែលអាចបំបែកជាអុីយ៉ុងទាំងស្រុងនៅក្នុងទឹក។</p>
        </div>
      </>
  },
    example: {
    question: [
        <div className="flex flex-col items-start gap-5" key="q1">
            <p>បាសខ្លាំង អាសុីតខ្លាំង អំបិលរលាយសព្វក្នុងទឹក</p>
            <InlineMath math="Ba(OH)_{2}(s) \rightarrow^{H_{2}O} Ba^{2+}(aq) + 2OH^{-}(aq)" />
            <InlineMath math="HCl(g) + H_{2}O(l) \rightarrow H_{3}O^{+}(aq) + Cl^{-}(aq)" />
            <InlineMath math="NaCl(s) \rightarrow^{H_{2}O} Na^{+}(aq) + Cl^{-}(aq)" />
        </div>,
    ],
  },
}






const EighthTopicContent: TopicContent = {
  definition: {
    title: "៤.២ អេឡិចត្រូលីតខ្សោយ",
    content:
      <>
        <div className="flex flex-col items-start">
            <p>អេឡិចត្រូលីតខ្សោយគឺជាសារធាតុដែលបំបែកជាអុីយ៉ុងដោយផ្នែកមួយនៅក្នុងទឹក។</p>
        </div>
      </>
  },
   example: {
    question: [
        <div className="flex flex-col items-start gap-5" key="q1">
            <p>បាសខ្សោយ អាសុីតខ្សោយ</p>
            <InlineMath math="NH_{3}(aq) + H_{2}O(l) \rightleftharpoons NH_{4}^{+}(aq) + OH^{-}(aq)" />
            <InlineMath math="CH_{3}COOH(aq) + H_{2}O(l) \rightleftharpoons H_{3}O^{+}(aq) + CH_{3}COO^{-}(aq)" />
        </div>,
    ],
  },
}

const NinethTopicContent: TopicContent = {
  definition: {
    title: "",
    content:
      <>
        
      </>
  },
   example: {
    question: [
        <div className="flex flex-col items-start gap-3" key="q3">
            <p>តេីកករនឹងកេីតមានឡេីងឬទេ កាលណាគេលាយសូលុយស្យុងទឹកនៃស័ង្កសីនីត្រាតនិងអាម៉ូញូមស៊ុលផាតចូលគ្នា? ចូរសរសេរសមីការប្រតិកម្មជំនួសទ្វេដែលអាចមាន។ បន្ទាប់មកសរសេរសមីការគីមី សមីការអុីយ៉ុងសព្វ និងសមីការអុីយ៉ុងសម្រួល។</p>
        </div>,   
    ],
    steps: [
        {
            title: "សមីការប្រតិកម្មជំនួសទ្វេ",
            content: 
            <div>
                <div className="flex flex-col items-start">
                    <div className='flex items-center gap-2 flex-wrap'>
                        <BlockMath math={"Zn(NO_{3})_{2}(aq)"} />
                        <BlockMath math={"+ (NH_{4})_{2}SO_{4}(aq)"} />
                        <BlockMath math={"\\rightarrow ZnS(?) + 2NH_{4}NO_{3}(?)"} />
                    </div>
                </div>  
            </div>
        },
        {
            title: "សមីការប្រតិកម្មគីមី",
            content: 
            <div>
                <div className="flex flex-col items-start">
                    <div className='flex items-center gap-2 flex-wrap'>
                        <p>ដោយ ZnS គឺជាស៊ុលផួមិនរលាយ​ ចំណេក</p>
                        <BlockMath math={"NH_{4}NO_{3}"} />
                        <p>ជាសមាសធាតុរលាយក្នុងទឹក នោះគេបាន :</p>
                    </div>
                    <div className='flex items-center gap-2 flex-wrap'>
                        <BlockMath math={"Zn(NO_{3})_{2}(aq) + (NH_{4})_{2}SO_{4}(aq)"} />
                        <BlockMath math={"\\rightarrow ZnS(s) + 2NH_{4}NO_{3}(aq)"} />
                    </div>
                </div>  
            </div>
        },
        {
            title: "សមីការអុីយ៉ុងសព្វ",
            content: 
            <div>
                <div className="flex flex-col items-start">
                    <div className='flex items-center gap-1 flex-wrap'>
                        <BlockMath math={"Zn^{2+}(aq) + 2NO_{3}^{-}(aq)"} />
                        <BlockMath math={"+ 2NH_{4}^{+}(aq) + S^{2-}(aq) \\rightarrow"} />
                        <BlockMath math={" ZnS(s)"} />
                        <BlockMath math={"+ 2NH_{4}^{+}(aq) + 2NO_{3}^{-}(aq)"} />
                    </div>

                </div>  
            </div>
        },
        {
            title: "សមីការអុីយ៉ុងសម្រួល",
            content: 
            <div>
                <div className="flex flex-col items-start">
                  <p>សមីការអុីយ៉ុងសម្រួលគឺជាសមីការដែលសរសេរតែប្រភេទគីមីទាំងឡាយណាដែលរងនូវបម្រែបម្រួលគីមីក្នុងលំនាំប្រតិកម្ម។</p>
                    <div className='flex items-center gap-2 flex-wrap'>
                        <BlockMath math={"Zn^{2+}(aq) + S^{2-}(aq) \\rightarrow ZnS(s)"} />
                    </div>

                </div>  
            </div>
        },
    ]
  },
}






const Aqueous_solution = () => {
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
                <ExampleBox question={FirstTopicContent.example.question} steps={FirstTopicContent.example.steps} answer={FirstTopicContent.example.answer} />
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
                  {/* {SecondTopic.example2 && (
                      <ExampleBox question={SecondTopic.example2.question} steps={SecondTopic.example2.steps} answer={SecondTopic.example2.answer} />
                  )} */}
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
                    {NinethTopicContent.example && (
                        <ExampleBox question={NinethTopicContent.example.question} steps={NinethTopicContent.example.steps} />
                    )}
                </div>
                <div>
                    {FourthTopicContent.definition && (
                        <DefinitionBox title={FourthTopicContent.definition.title} content={FourthTopicContent.definition.content} />
                    )}
                    {FourthTopicContent.tip && (
                        <TipBox title={FourthTopicContent.tip.title} content={FourthTopicContent.tip.content} />
                    )}
                    {FourthTopicContent.example && (
                        <ExampleBox question={FourthTopicContent.example.question} steps={FourthTopicContent.example.steps} answer={FourthTopicContent.example.answer} />
                    )}
                </div>
                <div>
                    {FifthTopicContent.definition && (
                        <DefinitionBox title={FifthTopicContent.definition.title} content={FifthTopicContent.definition.content} />
                    )}
                    {FifthTopicContent.tip && (
                        <TipBox title={FifthTopicContent.tip.title} content={FifthTopicContent.tip.content} />
                    )}
                    {FifthTopicContent.example && (
                        <ExampleBox question={FifthTopicContent.example.question} steps={FifthTopicContent.example.steps} answer={FifthTopicContent.example.answer} />
                    )}
                </div>
                <div>
                    {SixthTopicContent.definition && (
                        <DefinitionBox title={SixthTopicContent.definition.title} content={SixthTopicContent.definition.content} />
                    )}
                    {SixthTopicContent.tip && (
                        <TipBox title={SixthTopicContent.tip.title} content={SixthTopicContent.tip.content} />
                    )}
                    {/* {SixthTopicContent.example && (
                        <ExampleBox question={SixthTopicContent.example.question} steps={SixthTopicContent.example.steps} answer={SixthTopicContent.example.answer} />
                    )} */}
                </div>
                <div>
                    {SeventhTopicContent.definition && (
                        <DefinitionBox title={SeventhTopicContent.definition.title} content={SeventhTopicContent.definition.content} />
                    )}
                    {SeventhTopicContent.tip && (
                        <TipBox title={SeventhTopicContent.tip.title} content={SeventhTopicContent.tip.content} />
                    )}
                    {SeventhTopicContent.example && (
                        <ExampleBox question={SeventhTopicContent.example.question} steps={SeventhTopicContent.example.steps} answer={SeventhTopicContent.example.answer} />
                    )}
                </div>
                <div>
                    {EighthTopicContent.definition && (
                        <DefinitionBox title={EighthTopicContent.definition.title} content={EighthTopicContent.definition.content} />
                    )}
                    {EighthTopicContent.tip && (
                        <TipBox title={EighthTopicContent.tip.title} content={EighthTopicContent.tip.content} />
                    )}
                    {EighthTopicContent.example && (
                        <ExampleBox question={EighthTopicContent.example.question} steps={EighthTopicContent.example.steps} answer={EighthTopicContent.example.answer} />
                    )}
                </div>
    </div>
  )
}

export default Aqueous_solution
