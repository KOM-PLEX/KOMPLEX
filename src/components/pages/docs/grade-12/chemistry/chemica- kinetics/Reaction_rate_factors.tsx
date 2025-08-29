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
    title: "១. កត្តាទំហំភាគល្អិត",
    content:
      <>
        <div className="flex flex-col items-start">
         
        </div>
      </>
  },
  tip: {
      title: "ចំណាំ",
      content: (
        <>
            <div className='flex items-start gap-3 flex-col'>
            </div>
        </>
      ),
  },
  example: {
    question: [
        <div className="flex flex-col items-start gap-3" key="q1">
             <p>ពិសោធន៍៖ គេដាក់ <span className='text-[13px]'><InlineMath math="CaCO_{3}" /></span> ទំហំល្មមចំនួន 20g , ដុំ <span className='text-[13px]'><InlineMath math="CaCO_{3}" /></span> តូចៗ20g និងម្សៅ <span className='text-[13px]'><InlineMath math="CaCO_{3}" /></span> 20g ទៅក្នុងសូលុយស្យុង  <span className='text-[13px]'><InlineMath math="HCl" /></span> ក្នុងកែវបីផ្សេងគ្នារៀង ដែលកែវនីមួយៗមានកំហាប់ 1M មាឌ 200mL ។</p>
             <div className='bg-red-500 w-full'>Picture</div>
             <p>សង្កេត៖ ប្រតិកម្មដោយប្រេីម្សៅ <span className='text-[13px]'><InlineMath math="CaCO_{3}" /></span> ជាមួយ <span className='text-[13px]'><InlineMath math="HCl" /></span> លឿនជាងប្រេីដុំតូចៗ និងលឿនជាដុំធំតាមរៀង ។</p>
             <p>សន្និដ្ឋាន៖ ល្បឿនប្រិតកម្មអាស្រ័យលើទំហំភាគល្អិត។ ទំហំភាគល្អិតនៃអង្គធាតុប្រតិករ កាន់តែតូច ល្បឿនប្រតិកម្មកាន់តែលឿន។</p>
            <p>បកស្រាយ៖ កាលណាទំហំភាគល្អិតកាន់តែតូច នាំឲ្យមានការទង្គិចប្រសិទ្ធ រវាងអង្គធាតុប្រតិករកាន់តែច្រើនជាហេតុធ្វើឲ្យល្បឿនប្រតិកម្មកាន់តែលឿន។</p>
        </div>,
    ],
  }
}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "២. កត្តាកំហាប់អង្គធាតុប្រតិករ",
    content:
      <>
        <div className="flex flex-col items-start">
         
        </div>
      </>
  },
    tip: {
      title: "ចំណាំ",
      content: (
        <>
            <div className='flex items-start gap-3 flex-col'>
            </div>
        </>
      ),
  },
  example: {
    question: [
        <div className="flex flex-col items-start gap-3" key="q1">
             <p>ពិសោធន៍៖ រៀបចំកែវបីដាក់សូលុយស្យុង KI ដែលមានកំហាប់ខុសគ្នាៗ ដោយមានបន្ថែមសូលុយស្យុង <span className='text-[13px]'><InlineMath math="H_{2}SO_{4}" /></span> បន្តិច ។​ បន្ទាប់មកចាក់ <span className='text-[13px]'><InlineMath math="H_{2}O_{2}" /></span> ក្នុងបរិមាណស្មេីគ្នា កំហាប់ស្មេីគ្នាចូលក្នុងកែវទាំងបីក្នុងពេលតែមួយ ។</p>
             <div className='bg-red-500 w-full'>Picture</div>
             <p>សង្កេត៖ កែវដែលមានកំហាប់ <span className='text-[13px]'><InlineMath math="KI" /></span> ខាប់ខ្លាំង <span className='text-[13px]'><InlineMath math="(I^{-})" /></span> នោះការឡេីងពណ៌ក្រហមត្នោតនៃ <span className='text-[13px]'><InlineMath math="I_{2}" /></span> លឿនជាងកែវដែលមានកំហាប់ <span className='text-[13px]'><InlineMath math="KI" /></span> រាវ ឬ <span className='text-[13px]'><InlineMath math="(I^{-})" /></span> តិច ។</p>
             <p>សន្និដ្ឋាន៖ ល្បឿនកំណអង្គធាតុកកើត ឬល្បឿនបំបាត់អង្គធាតុប្រតិករ កើនកាលណាកំហាប់អង្គធាតុប្រតិករកើនឡើង។</p>
            <p>បំណកស្រាយ៖ កំហាប់អង្គធាតុប្រតិករកើន នាំឲ្យមានទង្គិចប្រសិទ្ធច្រើន ដូចនេះល្បឿនបំបាត់ឬល្បឿនកំណក៏កើនឡើងដែរ។</p>
        </div>,
    ],
  }
}

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "៣. កត្តាសម្ពាធ",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  tip: {
      title: "ចំណាំ",
      content: (
        <>
            <div className='flex items-start gap-3 flex-col'>
                <p>សម្ពាធមានឥទ្ធិពលតែទៅលើប្រព័ន្ធប្រតិកម្មដែលមានភាពរូបជាឧស្ម័នតែប៉ុណ្ណោះ។កាលណាសម្ពាធកើនឡើង នាំឲ្យចំនួនទង្គិចប្រសិទ្ធកើនឡើងដែរនោះល្បឿនប្រតិកម្មកើនឡើង។</p>                
            </div>
        </>
      ),
  },
  example: {
    question: [
        <div className="flex flex-col items-start gap-3" key="q1">
             <p>ទង្វេីអាម៉ូញាក់តាមលំនាំហេប៊េីត្រូវការសីតុណ្ហភាពនិងសម្ពាធខ្ពស់ចំពោះមុខកាតាលីករដែក។</p>
             <span className='text-[13px]'><InlineMath math="N_{2} + 3H_{2} \rightleftharpoons 2NH_{3}" /></span>
             <div className='w-full bg-red-400'>Picture</div>
             <p>សន្និដ្ឋាន៖ កាលណាសម្ពាធកើន នាំឲ្យការកកើតអាម៉ូញាក់ក៏កើនដែរ។</p>
             <p>បំណកស្រាយ៖ កាលណាសម្ពាធកើន នាំឲ្យម៉ូលេគុលឧស្ម័ននៅកៀកគ្នា ជាហេតុធ្វើឲ្យមានទង្គិចប្រសិទ្ធកើនឡើង។ ដូចនេះល្បឿនកំណអង្គធាតុកកើត កើនឡើង។</p>
        </div>,
    ],
  }
}

const FourthTopicContent: TopicContent = {
  definition: {
    title: "៤. កត្តាសីតុណ្ហភាព",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  tip: {
      title: "ចំណាំ",
      content: (
        <>
            <div className='flex items-start gap-3 flex-col'>
            </div>
        </>
      ),
  },

  example: {
    question: [
        <div className="flex flex-col items-start gap-3" key="q1">
             <p>ពិសោធន៍៖ បំពង់សាកពីរ A និង B ដាក់សូលុយស្យុង <span className='text-[13px]'><InlineMath math="I^{-}" /></span> ប្រហែល <span className='text-[13px]'><InlineMath math="\frac{1}{4}" /></span>នៃបំពង់សាកដោយមាន
              លាយសូលុយស្យុង <span className='text-[13px]'><InlineMath math="H_{2}SO_{4}" /></span> បន្តិច។ បន្ទាប់មក យកបំពង់សាក A ដាក់ត្រាំក្នុង ទឹកកក
              និងបំពង់សាក B ត្រាំក្នុងទឹកក្តៅ។ ចាក់សូលុយស្យុង <span className='text-[13px]'><InlineMath math="H_{2}SO_{4}" /></span> ប្រហែល <span className='text-[13px]'><InlineMath math="\frac{1}{4}" /></span> ដែរ ទៅក្នុង បំពង់សាកទាំងពីរខាងលើក្នុងពេលដំណាលគ្នា។</p>
              <div className='w-full bg-red-500'>Picture</div>
              <p>សង្កេត៖ ចូរកំណត់កម្លាំងអន្តរម៉ូលេគុលនិងសម្ព័ន្ធអ៊ីដ្រូសែ នៃគូក្នុងសមាសធាតុខាងក្រោម៖</p>
              <p>បកស្រាយ៖ នៅពេលសីតុណ្ហភាពកើន ភាគល្អិត (ម៉ូលេគុល អាតូម ឬអីយ៉ុង) ធ្វើចលនាកាន់តែលឿន នាំឲ្យមានទង្គិចប្រសិទ្ធកាន់តែច្រើន។ដូចនេះ ល្បឿននៃប្រតិកម្មកាន់តែលឿនដែរ។</p>
        </div>,
    ],
  }
}

const FifthTopicContent: TopicContent = {
  definition: {
    title: "៥. កត្តាកាតាលីករ",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
}

const SixthTopicContent: TopicContent = {
  definition: {
    title: "៥.១ កាតាលីករ",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  tip: {
      title: "ចំណាំ",
      content: (
        <>
            <div className='flex items-start gap-3 flex-col'>
                <p>កាតាលីករ គឺជាសារធាតុដែលជួយពន្លឿនល្បឿនប្រតិកម្មគីមីកើតឯង ហើយវាកើតឡើងវិញដោយគ្មានបាត់បង់លក្ខណៈគីមីនៅពេលប្រតិកម្មចប់។</p>
            </div>
        </>
      ),
  },
  example: {
    question: [
        <div className="flex flex-col items-start gap-3" key="q1">
            
            
        </div>,
    ],
  }
}

const SeventhTopicContent: TopicContent = {
  definition: {
    title: "៥.២ កាតាលីស",
    content:
      <>
        <div className="flex flex-col items-start">
            <p>កាតាលីស គឺជាអំពីនៃកាតាលីករទៅលើប្រតិកម្មគីមី។</p>
        </div>
      </>
  },
  tip: {
      title: "ចំណាំ",
      content: (
        <>
            <div className='flex items-start gap-3 flex-col'>
              <p>គេចែកកាតាលីសជាបីប្រភេទ៖</p>
              <ul className='list-disc pl-5 flex flex-col items-start gap-4'>
                  <div className='flex flex-col gap-2'>
                    <li>កាតាលីសអូម៉ូសែន ៖ គឺជាកាតាលីសដែលកាតាលីករនិងអង្គធាតុប្រតិករមានផាសដូចគ្នា។</li>
                    <span className='text-[13px]'><InlineMath math="H_{2}O_{2} \xrightarrow{Fe^{2+}} H_{2}O + \frac{1}{2} O_{2}"/></span>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <li>កាតាលីសអេតេរ៉ូសែន ៖ជាកាតាលីសដែលកាតាលីករនិងអង្គធាតុប្រតិករមានផាសខុសគ្នា។</li>
                    <span className='text-[13px]'><InlineMath math="H_{2}O_{2} \xrightarrow{MnO_{2}} H_{2}O + \frac{1}{2} O_{2}"/></span>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <li>កាតាលីសអង់ស៊ីម ៖ ជាកាតាលីសដែលកាតាលីករជាអង់ស៊ីម(ដូចជាប្រូតេអ៊ីនដែលបង្កឡើង ពីភាវរស់)។</li>
                    <span className='text-[13px]'><InlineMath math="H_{2}O_{2} \xrightarrow{ អង់សុីមក្នុងថ្លេីម } H_{2}O + \frac{1}{2} O_{2}"/></span>
                  </div>
              </ul>
            </div>
        </>
      ),
  },
  example: {
    question: [
        <div className="flex flex-col items-start gap-3" key="q1">
            
            
        </div>,
    ],
  }
}


const EighthTopicContent: TopicContent = {
  definition: {
    title: "៥.៣​ លក្ខណៈកាតាលីករ",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  tip: {
      title: "ចំណាំ",
      content: (
        <>
            <ul className='list-disc pl-5 flex flex-col items-start gap-4'>
                <div className='flex flex-col gap-2'>
                    <li> <span className='font-bold'>នាទីលើស៊ីនេទិច:</span> កាតាលីករអាចបង្កើនល្បឿនតែទៅលើប្រតិកម្មទាំងឡាយណាដែលប្រព្រឹត្តទៅតាមទែម៉ូឌីណាមិចប៉ុណ្ណោះ។ ចំពោះប្រតិកម្មដែលមានភាពរាំងខ្ទប់ស៊ីនេទិច គ្មានកាតាលីករណាអាចធ្វើឲ្យប្រតិកម្មប្រព្រឹត្តទៅបានទេ។</li>
                    <span className='text-[13px]'><InlineMath math="Cu (s) + HCl (aq) \rightarrow ​គ្មានប្រតិកម្មកើតឡេីងទេ"/></span>
                </div>
                <div>
                    <li><span className='font-bold'>បាតុភូតវិសេសភាព:</span>កាលណាកាតាលីករមួយមានសកម្មភាពលើប្រតិកម្មគីមីមួយច្បាស់លាស់គេនិយាយថាកាតាលីករមានវិសេសភាពចំពោះប្រតិកម្មនោះ។</li>
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
  }
}





const Reaction_rate_factors = () => {
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
                <ExampleBox question={ThirdTopicContent.example.question} />
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
                <ExampleBox question={FourthTopicContent.example.question} />
            )}
        </div>
        <div>
            {FifthTopicContent.definition && (
              <DefinitionBox title={FifthTopicContent.definition.title} content={FifthTopicContent.definition.content} />
            )}
        </div>
        <div>
            {SixthTopicContent.definition && (
              <DefinitionBox title={SixthTopicContent.definition.title} content={SixthTopicContent.definition.content} />
            )}
            {SixthTopicContent.tip && (
                <TipBox title={SixthTopicContent.tip.title} content={SixthTopicContent.tip.content} />
            )}
            {SixthTopicContent.example && (
                <ExampleBox question={SixthTopicContent.example.question} />
            )}
        </div>
        <div>
            {SeventhTopicContent.definition && (
              <DefinitionBox title={SeventhTopicContent.definition.title} content={SeventhTopicContent.definition.content} />
            )}
            {SeventhTopicContent.tip && (
                <TipBox title={SeventhTopicContent.tip.title} content={SeventhTopicContent.tip.content} />
            )}
            {SeventhTopicContent.example && (
                <ExampleBox question={SeventhTopicContent.example.question} />
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
                <ExampleBox question={EighthTopicContent.example.question} />
            )}
          </div>

    </div>
  )
}

export default Reaction_rate_factors
