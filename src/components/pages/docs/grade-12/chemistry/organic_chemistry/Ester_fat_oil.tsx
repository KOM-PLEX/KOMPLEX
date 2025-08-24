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
    title: "១. អេស្ទែ",
    content:
      <>
        <div className="flex flex-col items-start">
            <p>អេស្ទែ ជាអង្គធាតុស្រឡាយនៃអាសុីតកាបុកសុីលិច <InlineMath math="(R-COOH)" /> ដែលបានពីការជំនួសក្រុម <InlineMath math="-OH" /> របស់អាសុីតដោយក្រុម <InlineMath math="(-OR^{\prime})" /> របស់អាកុល ។</p>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <div className='flex items-start gap-3 flex-col'>
            <div className='flex items-center gap-3 flex-wrap'>
                <p>អេស្ទែមានរូបមន្តទូទៅ :</p>
                <InlineMath math="-COO-R^{\prime}" />

            </div>
            <div className='flex items-center gap-3 flex-wrap'>
                <p>បង្គុំនាទីអេស្ទែ :</p>
                <InlineMath math="-COO-\underset{\vert}{\overset{\vert}{C}} -" />
            </div>
        </div>
      </>
    ),
  },
}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "១.១ នាមវលី",
    content:
      <>
        <div className="flex flex-col items-start">
            
        </div>
      </>
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <div className='flex items-start gap-3 flex-col'>
            <p>ដេីម្បីហៅឈ្មោះអេស្ទែ គេហៅឈ្មោះរ៉ាឌីកាល់ <InlineMath math="OR^{\prime}" /> របស់អាល់កុល រួចហៅឈ្មោះអាសុីតដោយប្តូរ បច្ចឹមបទពី "អូអុិច" ទៅជា​ "អូអាត" ។</p>
        </div>
      </>
    ),
  },
  example: {
    question: [
        <>
            <div className='flex items-start flex-col gap-4'>
                <div className='flex items-center gap-2 flex-wrap'>
                    <InlineMath math="CH_{3}-COO-C_{2}H_{5} " />
                    <p>អេទីល អេតាណូអាត</p>
                </div>
                <div className='flex items-center gap-2 flex-wrap'>
                    <InlineMath math="C_{6}H_{5}-COO-C_{2}H_{5} " />
                    <p>អេទីល បង់សូអាត</p>
                </div>
                <div className='flex items-center gap-2 flex-wrap'>
                    <InlineMath math="CH_{3}-COO-C_{6}H_{5} " />
                    <p>ផេនីល អេតាណូអាត</p>
                </div>
            </div>
        </>
    ],
  },
}

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "១.២ លក្ខណះរូប",
    content:
      <>
        <div className="flex flex-col items-start">
            
        </div>
      </>
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <div className='flex items-start gap-3 flex-col'>
            <p>អេស្ទែ ភាគច្រេីនដែលមានម៉ាសម៉ូលតូច រលាយក្នុងទឹក ងាយហេីរ មានក្លិនគួរជាទីគាប់ចិត្ត ។ ល្បាយអេស្ទែត្រូវបានប្រេីសម្រាប់ធ្វេីទឹកអប់ នំ បង្អែម ... ។</p>
        </div>
      </>
    ),
  },
}

const FourthTopicContent: TopicContent = {
  definition: {
    title: "១.៣ លក្ខណះគីមី",
    content:
      <>
        <div className="flex flex-col items-start">
            
        </div>
      </>
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <ul className='list-disc pl-5 flex flex-col items-start gap-4'>
            <div>
                <li>អុីដ្រូលីស ជាប្រតិកម្មរវាងអេស្ទែ និង ទឹក ឲផលជាអាសុីតនិងអាល់កុល ។</li>
                <InlineMath math="R-COO-R^{\prime} + H_{2}O  \xrightleftharpoons[(2)]{(1)} R-COOH + R^{\prime}-OH" />
                <InlineMath math="CH_{3}-COO-C_{2}H_{5} + H_{2}O  \xrightleftharpoons[(2)]{(1)} CH_{3}COOH + C_{2}H_{5}-OH" />
            </div>
            <div>
                <li>សាប៊ូកម្ម : អេស្ទែមានអំពេីជាមួយស៊ូត ឲផលជាអំបិលនៃអាសុីត​និង អាល់កុល ។</li>
                <InlineMath math="R-COO-R^{\prime} + NaOH  \xrightleftharpoons[(2)]{(1)} R-COONa + R^{\prime}-OH" />
                <InlineMath math="CH_{3}-COO-C_{2}H_{5} + NaOH  \xrightleftharpoons[(2)]{(1)} CH_{3}-COONa + C_{2}H_{5}-OH" />
            </div>
            <div>
                <li>ប្រតិកម្មជាមួយអាម៉ូញ៉ាក់ : អាម៉ូញ៉ាក់មានអំពេីជាមួយអេស្ទែ ឲផលជាអាមីតនិងអាល់កុល ។</li>
                <InlineMath math="R-COO-R^{\prime} + NH_{3}  \xrightleftharpoons[(2)]{(1)} R-CO-NH_{2} + R^{\prime}-OH" />
                <InlineMath math="CH_{3}-COO-C_{2}H_{5} + NH_{3}  \xrightleftharpoons[(2)]{(1)} CH_{3}-CO-NH_{2} + C_{2}H_{5}-OH" />
            </div>
            <div>
                <li>ប្រតិកម្មរេដុកម្មអេស្ទែ : អេស្ទែរងរេដុកម្មជាអាល់កុលដោយអុីដ្រូសែននៅចំពោះមុខកាតាលីករ ដូចជាល្បាយ នៃ​ <InlineMath math="CuO , CuCr_{2}O_{4}" />នៅសីតុណ្ហភាពនិងសម្ពាធខ្ពស់ ។</li>
                <InlineMath math="R-COO-R^{\prime} + 2H_{2}  \xrightleftharpoons[(2)]{(1)} R-CH_{2}-OH + R^{\prime}-OH" />
                <InlineMath math="CH_{3}-COO-C_{3}H_{7} + 2H_{2}  \xrightleftharpoons[(2)]{(1)} CH_{3}-CH_{2}-OH + C_{3}H_{7}-OH" />
            </div>
        </ul>
      </>
    ),
  },
}

const FifthTopicContent: TopicContent = {
  definition: {
    title: "១.៤ ទង្វេីអេស្ទែ",
    content:
      <>
        <div className="flex flex-col items-start">
            
        </div>
      </>
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <div className='flex items-start flex-col gap-2'>
            <span>អេស្ទែអាចធ្វេីឡេីងតាមពីររបៀប :</span>
            <ul className='list-disc pl-5 flex flex-col items-start gap-4'>
                <div>
                    <li>អេស្ទែកម្ម : ជាប្រតិកម្មរវាងអាសុីត និងអាល់កុល ឲផលជាអេស្ទែនិងទឹក ។</li>
                    <InlineMath math="R-COO-COOH + R^{\prime}-OH   \xrightleftharpoons[(2)]{(1)} R-COO-R^{\prime} + H_{2}O" />
                    <InlineMath math="CH_{3}COOH + C_{2}H_{5}-OH  \xrightleftharpoons[(2)]{(1)} CH_{3}-COO-C_{2}H_{5} + H_{2}O" />
                </div>
                <div className='flex flex-col items-start gap-3'>
                    <li>ប្រតិកម្មរវាងអានីទ្រីតអាសុីតឬអាសុីលក្លរួ និងអាល់កុល</li>
                    <div className='flex flex-col items-start gap-3'>
                        <p>_ អានីទ្រីតអាសុីតមានអំពេីជាមួយអាល់កុល ឲផលជាអេស្ទែនិងអាសុីត ។</p>
                        <InlineMath math="R-CO-O-CO-R + R^{\prime}-OH   \xrightleftharpoons[(2)]{(1)} R-COO-R^{\prime} + R-COOH" />
                       <InlineMath math="CH_{3}CO-O-CO-CH_{3} + C_{2}H_{5}-OH   \xrightleftharpoons[(2)]{(1)} CH_{3}-COO-C_{2}H_{5} + CH_{3}-COOH" />
                    </div>
                    <div className='flex flex-col items-start gap-3'>
                        <p>_ អាសុីលក្លរួមានអំពេីជាមួយអាល់កុល ឲផលជាអេស្ទែនិងអាសុីតក្លរីឌ្រិច ។</p>
                        <InlineMath math="R-CO-Cl + R^{\prime}-OH   \xrightleftharpoons[(2)]{(1)} R-COO-R^{\prime} + HCl" />
                        <InlineMath math="CH_{3}-CO-Cl + C_{2}H_{5}-OH   \xrightleftharpoons[(2)]{(1)} CH_{3}-COO-C_{2}H_{5} + HCl" />
                    </div>
                    
                </div>
            </ul>
        </div>
      </>
    ),
  },
}

const SixthTopicContent: TopicContent = {
  definition: {
    title: "អេស្ទែសំខាន់ ៗ",
    content:
      <>
        <div className="flex flex-col items-start">
            
        </div>
      </>
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <div className='flex items-start gap-3 flex-col'>
            {/* picture need for this  */}
        </div>
      </>
    ),
  },
}

const SeventhTopicContent: TopicContent = {
  definition: {
    title: "២. ខ្លាញ់ និងប្រេង",
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
            <p>ខ្លាញ់ និងប្រេងមានច្រេីននៅក្នុងធម្មជាតិ វាបង្កសំខាន់នៅក្នុងកោសិកាសត្វនិងរុក្ខជាតិ ។ ខ្លាញ់បានពីសត្វ ហេីយប្រេងបានពីរុក្ខជាតិ​ ។</p>
        </div>
      </>
    ),
  },
}

const EighthTopicContent: TopicContent = {
  definition: {
    title: "២.១ សមាសភាព",
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
            <p>ខ្លាញ់ និងប្រងមានទម្រង់ដូចគ្នា គឺជាទ្រីអេស្ទែដែលកេីតពីគ្លីសេរ៉ុល ឬប្រូប៉ាន -1,2,3-ទ្រីអុល​ <InlineMath math="(CH_{2}OH-CHOH-CH_{2}OH)" /> និងអាសុីតខ្លាញ់ ។</p>
            

        </div>
      </>
    ),
  },
}


const Ester_fat_oil = () => {
  return (
    <div>
        <div>
            {FirstTopicContent.definition && (
              <DefinitionBox title={FirstTopicContent.definition.title} content={FirstTopicContent.definition.content} />
            )}
            {FirstTopicContent.tip && (
                <TipBox title={FirstTopicContent.tip.title} content={FirstTopicContent.tip.content} />
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
                 <ExampleBox question={SecondTopicContent.example.question}/>
             )}
        </div>
        <div>
            {ThirdTopicContent.definition && (
              <DefinitionBox title={ThirdTopicContent.definition.title} content={ThirdTopicContent.definition.content} />
            )}
            {ThirdTopicContent.tip && (
                <TipBox title={ThirdTopicContent.tip.title} content={ThirdTopicContent.tip.content} />
            )}
        </div>
        <div>
            {FourthTopicContent.definition && (
              <DefinitionBox title={FourthTopicContent.definition.title} content={FourthTopicContent.definition.content} />
            )}
            {FourthTopicContent.tip && (
                <TipBox title={FourthTopicContent.tip.title} content={FourthTopicContent.tip.content} />
            )}
        </div>
        <div>
            {FifthTopicContent.definition && (
              <DefinitionBox title={FifthTopicContent.definition.title} content={FifthTopicContent.definition.content} />
            )}
            {FifthTopicContent.tip && (
                <TipBox title={FifthTopicContent.tip.title} content={FifthTopicContent.tip.content} />
            )}
        </div>
        <div>
            {SixthTopicContent.definition && (
              <DefinitionBox title={SixthTopicContent.definition.title} content={SixthTopicContent.definition.content} />
            )}
            {SixthTopicContent.tip && (
                <TipBox title={SixthTopicContent.tip.title} content={SixthTopicContent.tip.content} />
            )}
        </div>
        <div>
            {SeventhTopicContent.definition && (
              <DefinitionBox title={SeventhTopicContent.definition.title} content={SeventhTopicContent.definition.content} />
            )}
            {SeventhTopicContent.tip && (
                <TipBox title={SeventhTopicContent.tip.title} content={SeventhTopicContent.tip.content} />
            )}
        </div>
        <div>
            {EighthTopicContent.definition && (
              <DefinitionBox title={EighthTopicContent.definition.title} content={EighthTopicContent.definition.content} />
            )}
            {EighthTopicContent.tip && (
                <TipBox title={EighthTopicContent.tip.title} content={EighthTopicContent.tip.content} />
            )}
        </div>
    </div>
  )
}

export default Ester_fat_oil
