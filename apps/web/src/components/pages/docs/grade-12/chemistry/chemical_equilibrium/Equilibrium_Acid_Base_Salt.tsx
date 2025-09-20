import React from 'react'

import DefinitionBox from "../../../common/box/DefinitionBox"
import TipBox from "../../../common/box/TipBox"
import HintBox from "../../../common/box/HintBox"
import { TopicContent } from "@/types/docs/topic"
import { BlockMath, InlineMath } from "react-katex"
import 'katex/dist/katex.min.css'
import WarningBox from "../../../common/box/WarningBox"
import ExerciseBox from "../../../common/box/ExerciseBox"
import ExampleBox from "../../../common/box/ExampleBox"
import { div } from "three/tsl"
import { p } from 'framer-motion/client'


const FirstTopicContent: TopicContent = {
  definition: {
    title: "១. ថេរអុីយ៉ុងកម្មនៃអាសុីតខ្សោយ",
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
        <div className='flex flex-col items-start gap-3'>
          <p>អាសុីតអាសេទិច ជាអាសុីតខ្សោយ វាបំបែកក្នុងទឹកតាមសមីការតុល្យការ :</p>
          <span className='text-[13px]'><InlineMath math="CH_{3}COOH (aq) + H_{2}O (l) \xrightleftharpoons[(2)]{(1)} CH_{3}COO^{-} + H_{3}O^{+} (aq)" /></span>
          <p>កន្សោមថេរលំនឹងសរសេរ </p>
          <div className='flex items-center gap-2 flex-wrap'>
            <span className='text-[13px]'><InlineMath math="K_{a} = " /></span>
            <div className='text-[16px]'>
              <InlineMath math="\frac{[CH_{3}COO^{-}] \cdot [H_{3}O^{+}]}{[CH_{3}COOH]}" />
            </div>
          </div>
          <div className='flex items-center gap-1 flex-wrap'>
            <span className='text-[13px]'><InlineMath math="K_{a} = " /></span>
            <p>ហៅថាអុីយ៉ុងកម្មអាសុីត​ ឬថេរអាសុីត ។</p>
          </div>
        </div>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <p>សូលុយស្យុងអាសុីត HA មួយនៅកំហាប់ 0.1 M មាន pH = 2.2 ។</p>
        <div className='flex items-center gap-2 flex-wrap'>
          <p>ចូរកំណត់ថេរអុីយ៉ុងកម្មអាសុីតនេះ ។ គេឲ :</p>
          <span className='text-[13px]'> <InlineMath math="10^{0.8} = 6.3" /> </span>
        </div>
      </div>,
    ],
    steps: [
      {
        title: "រកថេរអុីយ៉ុងកម្មអាសុីត",
        content: (
          <>
            <div className='flex flex-col items-start gap-8'>
              <div className='flex items-center gap-2 flex-wrap'>
                <p>កំហាប់ </p>
                <span className='text-[13px]'><InlineMath math="H_{3}O^{+}" /></span>
                <p>ពេលលំនឹង </p>
              </div>
              <div className='flex items-center gap-2 flex-wrap text-[13px]'>
                <InlineMath math="H_{3}O^{+} = 10^{-pH}" />
                <InlineMath math="10^{-2.2} = 10^{0.8} \cdot 10^{-3}" />
                <InlineMath math="= 6.3 \cdot 10^{-3} M" />
                <InlineMath math="= 0.0063 M" />
              </div>
              <div className='flex items-start gap-1 sm:gap-5 flex-wrap'>
                <div className='flex items-center'>
                  <div className='flex flex-col gap-2'>
                    <div className='text-[11px] sm:text-[15px]'>
                      <InlineMath math="HA" />
                    </div>
                    <span className='text-[9px] sm:text-[15px]'>0.1</span>
                    <span className='text-[9px] sm:text-[15px]'>0.0063</span>
                    <div className='flex items-center flex-col sm:flex-row'>
                      <span className='text-[9px] sm:text-[15px]'>(0.1</span>
                      <span className='text-[9px] sm:text-[15px]'>-0.0063)</span>
                    </div>
                  </div>
                </div>
                <span>+</span>
                <div className='flex items-start'>
                  <div className='flex flex-col'>
                    <div className='text-[11px] sm:text-[15px]'>
                      <InlineMath math="H_{2}O" />
                    </div>
                  </div>
                </div>
                <InlineMath math="\xrightleftharpoons[(2)]{(1)}" />
                <div className='flex items-start  gap-5'>
                  <div className='flex flex-col gap-3'>
                    <div className='text-[11px] sm:text-[15px]'>
                      <InlineMath math="A^{-}" />
                    </div>
                    <span className='text-[9px] sm:text-[15px]'>0</span>
                    <span className='text-[9px] sm:text-[15px]'>0.0063</span>
                    <span className='text-[9px] sm:text-[15px]'>0.0063</span>

                  </div>
                </div>
                <span>+</span>
                <div className='flex items-start  gap-5'>
                  <div className='flex flex-col gap-3'>
                    <div className='text-[11px] sm:text-[15px]'>
                      <InlineMath math="H_{3}O^{+}" />
                    </div>
                    <span className='text-[9px] sm:text-[15px]'>0</span>
                    <span className='text-[9px] sm:text-[15px]'>0.0063</span>
                    <span className='text-[9px] sm:text-[15px]'>0.0063</span>
                  </div>
                </div>

              </div>

              <div className='flex items-center gap-2 flex-wrap text-[13px]'>
                <InlineMath math="K_{a} = " />
                <div className='text-[14px]'>
                  <InlineMath math="\frac{[A^{-}] \cdot [H_{3}O^{+}]}{[HA]}" />
                </div>
                <span>=</span>
                <div className='text-[14px]'>
                  <InlineMath math="\frac{0.0063 \cdot 0.0063}{0.1 - 0.0063}" />
                </div>
                <span>=</span>
                <div className='text-[14px]'>
                  <InlineMath math="\frac{(0.0063)^2}{0.0937}" />
                </div>
                <InlineMath math="= 4.23 \cdot 10^{-4}" />
              </div>
            </div>
          </>
        )
      },
    ]
  },
}


const SecondTopicContent: TopicContent = {
  definition: {
    title: "២. ថេរអុីយ៉ុងកម្មនៃទឹក",
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
        <div className='flex flex-col items-start gap-3'>
          <p>ទឹកមានអំពេីជាមួយគ្នាតាមសមីការតុល្យការ :</p>
          <span className='text-[13px]'><InlineMath math="H_{2}O (l) + H_{2}O (l) \xrightleftharpoons[(2)]{(1)} H_{3}O^{+} (aq) + OH^{-} (aq)" /></span>

          <p>ប្រតិកម្មនេះហៅថា ប្រតិកម្មស្វ័យអុីយ៉ុងកម្មអូតូប្រូលីសនៃទឹក ។ </p>
          <p>កន្សោមថេរអុីយ៉ុងកម្មនៃទឹកសរសេរ :</p>
          <div className='flex items-center gap-2 flex-wrap'>
            <span className='text-[13px]'><InlineMath math="K_{e} = [H_{3}O^{+}] \cdot [OH^{-}] = K_{w} = 10^{-14}" /></span>

            <p>នៅសីតុណ្ហភាព 25 °C</p>
          </div>
        </div>
      </>
    ),
  },
}

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "៣. អុីយ៉ុងកម្មនៃអំបិល",
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
          <div className='flex items-center gap-1 flex-wrap'>
            <li>អំបិលជាផលិតផលនៃប្រតិកម្មបន្សាបរវាងអាសុីត និងបាស ។ ពេលអំបិលរលាយក្នុងទឹកវាបំបែកជា អុីយ៉ុង (កាចុង និងអាញ៉ុង) ។ អំបិលខ្លះរលាយក្នុងទឹក ឲផលជាសូលុយស្យុងណឺតមាន pH=7 ។ </li>
            <p>អំបិល <span className='text-[13px]'><InlineMath math="Na_{2}CO_{3} " /></span>  រលាយក្នុងទឹកឲផលជាសូលុយស្យុងបាសមាន pH ធំជាង 7 ។ អំបិល <span className='text-[13px]'><InlineMath math="NH_{4}Cl" />រ</span>លាយក្នុងទឹកឲផលជាសូលុយស្យុងបាសមាន pH តូចជាង 7 ។ </p>
          </div>
          <div className='flex items-center gap-1 flex-wrap'>
            <li>អុីយ៉ុងដែលបានពីអាសុីតខ្សោយ ឬបាសខ្សោយមានអំពេីជាមួយទឹកឲផលជាសូលុយស្យុងមាន pH ធំជាង ឬតូចជាង 7 ។</li>
          </div>
        </ul>
      </>
    ),
  },
}

const FourthTopicContent: TopicContent = {
  definition: {
    title: "៣.១ អុីដ្រូលីសនៃអាញ៉ុង",
    content:
      <>
        <div className="flex flex-col items-start">
          <p>អុីដ្រូលីសនៃអាញ៉ុង ជាអំពេីរវាងអុីយ៉ុងអវិជ្ជមានជាមួយទឹក ឲផលជាសូលុយស្យុងបាស ។ </p>
        </div>
      </>
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <div className='flex items-start flex-col gap-3'>
          <div className='flex items-center gap-1 flex-wrap'>
            <p>តាង HA ជាអាសុីតខ្សោយដែលមានអំពេីជាមួយទឹក ឲផលជាអាញ៉ុង <span className='text-[13px]'><InlineMath math="A^{-}" /></span>និងអុីយ៉ុង <span className='text-[13px]'><InlineMath math="OH^{-} ។" /></span>តាមសមីការលំនឹង :</p>
          </div>
          <span className='text-[13px]'><InlineMath math="HA (aq) + H_{2}O (l) \xrightleftharpoons[(2)]{(1)} A^{-} (aq) + H_{3}O^{+}" /></span>

          <div className='flex items-center gap-1 flex-wrap'>
            <p>អាញ៉ុង <span className='text-[13px]'><InlineMath math="A^{-}" /></span> ជាបាសឆ្លាស់នៃអាសុីតខ្សោយ វាទទួលបានប្រូតុងពីទឹក ឲផលជាអាសុីត និងអុីយ៉ុង <span className='text-[13px]'><InlineMath math="OH^{-} ។" /></span> តាមសមីការលំនឹង :</p>
          </div>
          <span className='text-[13px]'><InlineMath math="A^{-} (aq) + H_{2}O (l) \xrightleftharpoons[(2)]{(1)} HA (aq) + OH^{-} (aq)" /></span>

          <div className='flex items-center gap-1 flex-wrap'>
            <p>អុីដ្រូលីសនៃអាញ៉ុង <span className='text-[13px]'><InlineMath math="A^{-}" /></span> ធ្វេីឲកំហាប់ <span className='text-[13px]'><InlineMath math="OH^{-} ។" /></span>  កេីនឡេីងនៅក្នុងសូលុយស្យុងហេតុនេះហេីយបានជាសូលុយស្យុងទទួលបានជាសូលុយស្យុងបាស ។</p>
          </div>
          <p>ដូច្ន អាសុីត HA កាន់តែខ្សោយ បាសឆ្លាស់ <span className='text-[13px]'><InlineMath math="A^{-}" /></span> កាន់តែខ្លាំង ។</p>
        </div>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-4" key="q1">
        <p>សូដ្យូមកាបូណាត <InlineMath math="Na_{2}CO_{3}" /> ជាបាស</p>
        <div className='text-[13px] flex flex-col gap-2'>
          <InlineMath math="Na_{2}CO_{3} (s) \rightarrow 2Na^{+} (aq) + CO_{3}^{2-} (aq)" />
          <InlineMath math="Na^{+} (aq) + H_{2}O \rightarrow គ្មាន" />
          <InlineMath math="CO_{3}^{2-} (aq) \rightarrow HCO_{3}^{-} (g) + OH^{-} (aq)" />
        </div>

        <p>អុីដ្រូលីស <span className='text-[13px]'><InlineMath math="CO_{3}^{2-} " /></span> ដែលបានមកពី <span className='text-[13px]'><InlineMath math="Na_{2}CO_{3}" /></span> បង្កេីតបាន <span className='text-[13px]'><InlineMath math="OH^{-}" /></span>  ក្នុងសូលុយស្យុង ។ ដូចនេះសូលុយស្យុង <span className='text-[13px]'><InlineMath math="Na_{2}CO_{3}" /></span> ជាបាស ។</p>
      </div>,
    ],
  },
}

const FifthTopicContent: TopicContent = {
  definition: {
    title: "៣.២ អុីដ្រូលីសនៃកាចុង",
    content:
      <>
        <div className="flex flex-col items-start">
          <p>អុីដ្រូលីសនៃកាចុង ជាអំពេីរវាងអុីយ៉ុងវិជ្ជមានជាមួយទឹក ឲផលជាសូលុយស្យុងអាសុីត ។ </p>
        </div>
      </>
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <div className='flex items-start flex-col gap-3'>
          <div className='flex items-center gap-1 flex-wrap'>
            <p>តាង B ជាបាសខ្សោយដែលមានអំពេីជាមួយទឹក ឲផលជាអាញ៉ុង <InlineMath math="BH^{+}" />និងអុីយ៉ុង <InlineMath math="OH^{-} ។" />តាមសមីការលំនឹង :</p>
          </div>
          <span className='text-[13px]'><InlineMath math="B (aq) + H_{2}O (l) \xrightleftharpoons[(2)]{(1)} BH^{+} (aq) + OH^{-} (aq)" /></span>

          <div className='flex items-center gap-1 flex-wrap'>
            <p>កាចុង <span className='text-[13px]'><InlineMath math="BH^{+}" /></span> ជាអាសុីតឆ្លាស់នៃបាសខ្សោយ វាបោះបង់ប្រូតុងឲទឹក ឲផលជា B និងអុីយ៉ុង <span className='text-[13px]'><InlineMath math="H_{3}O^{+} " /></span>តាមសមីការលំនឹង :</p>
          </div>
          <span className='text-[13px]'><InlineMath math="BH^{+} (aq) + H_{2}O (l) \xrightleftharpoons[(2)]{(1)} B (aq) + H_{3}O^{+}" /></span>
          <div className='flex items-center gap-1 flex-wrap'>
            <p>អុីដ្រូលីសនៃកាចុង <span className='text-[13px]'><InlineMath math="BH^{+}" /></span>  បង្កេីតបាន <span className='text-[13px]'><InlineMath math="H_{3}O^{+} " /></span> ក្នុងសូលុយស្យុង ហេតុនេះហេីយបានជា សូលុយស្យុងទទួលបានជាសូឡុយស្យុងអាសុីត ។</p>
          </div>
          <p>បាស B កាន់តែខ្សោយ អាសុីតឆ្លាស់ <span className='text-[13px]'><InlineMath math="BH^{+}" /></span> កាន់តែខ្លាំង</p>
        </div>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-4" key="q1">
        <p>អាម៉ូញូមក្លរួ <span className='text-[13px]'><InlineMath math="NH_{4}Cl" /></span> ជាអាសុីត</p>
        <div className='flex flex-col gap-2 text-[13px]'>
          <InlineMath math="NH_{4}Cl (s) \rightarrow NH_{4}^{+} (aq) + Cl^{-} (aq)" />
          <InlineMath math="Cl^{-} (aq) + H_{2}O \rightarrow គ្មាន" />
          <InlineMath math="NH_{4}^{+} (aq) + H_{2}O (l) \rightarrow NH_{3} (g) + H_{3}O^{+}" />
        </div>

        <p>ដូចនេះសូលុយស្យុង <span className='text-[13px]'><InlineMath math="NH_{4}Cl" /></span> ជាអាសុីតព្រោះវាបានបង្កេីតបាន <span className='text-[13px]'><InlineMath math="H_{3}O^{+}" /></span> ក្នុងសូលុយស្យុង ។</p>
      </div>,
    ],
  },
}


const SixthTopicContent: TopicContent = {
  definition: {
    title: "៤. សូលុយស្យុងតំប៉ុង",
    content:
      <>

      </>
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <ul className='list-disc pl-5 flex flex-col items-start gap-4'>
          <div>
            <li>សូលុយស្យុងតំប៉ុង ជាសូលុយស្យុងដែលផ្សំឡេីងដោយអាសុីតខ្សោយ និងបាសឆ្លាស់របស់វា ឬសូលុយស្យុងបាសខ្សោយ និងអាសុីតឆ្លាស់របស់វា ហេីយមានកំហាប់ស្មេីរគ្នា។</li>
          </div>
          <div>
            <li>សូលុយស្យុងតំប៉ុង មានបម្រែបម្រួល pH តិចតួច កាលណាគេបន្ថែមអាសុីតខ្លាំង ឬបាសខ្លាំងបន្តិចចូល ។</li>
          </div>
        </ul>
      </>
    ),
  },
  example: {
    question: [
      <>
        <p>សូលុយស្យុងមាន 0.1mol នៃ <span className='text-[13px]'><InlineMath math="CH_{3}COOH " /></span>និង​ <span className='text-[13px]'><InlineMath math="CH_{3}COONa" /></span> ជាសូលុយស្យុងតំប៉ុង ព្រោះក្នុងសូលុយស្យុងនេះមាន <span className='text-[13px]'><InlineMath math="CH_{3}COOH " /></span> និង <span className='text-[13px]'><InlineMath math="CH_{3}COO^{-} " /></span> មានបរិមាណ 0.1mol ដូចគ្នា ។</p>
      </>
    ],
  },
}

const Equilibrium_Acid_Base_Salt = () => {
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
          <ExampleBox question={FirstTopicContent.example.question} steps={FirstTopicContent.example.steps} />
        )}
      </div>
      <div>
        {SecondTopicContent.definition && (
          <DefinitionBox title={SecondTopicContent.definition.title} content={SecondTopicContent.definition.content} />
        )}
        {SecondTopicContent.tip && (
          <TipBox title={SecondTopicContent.tip.title} content={SecondTopicContent.tip.content} />
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
        )
        }{FourthTopicContent.example && (
          <ExampleBox question={FourthTopicContent.example.question} steps={FourthTopicContent.example.steps} />
        )}
      </div>
      <div>
        {FifthTopicContent.definition && (
          <DefinitionBox title={FifthTopicContent.definition.title} content={FifthTopicContent.definition.content} />
        )}
        {FifthTopicContent.tip && (
          <TipBox title={FifthTopicContent.tip.title} content={FifthTopicContent.tip.content} />
        )
        }{FifthTopicContent.example && (
          <ExampleBox question={FifthTopicContent.example.question} steps={FifthTopicContent.example.steps} />
        )}
      </div>
      <div>
        {SixthTopicContent.definition && (
          <DefinitionBox title={SixthTopicContent.definition.title} content={SixthTopicContent.definition.content} />
        )}
        {SixthTopicContent.tip && (
          <TipBox title={SixthTopicContent.tip.title} content={SixthTopicContent.tip.content} />
        )
        }{SixthTopicContent.example && (
          <ExampleBox question={SixthTopicContent.example.question} steps={SixthTopicContent.example.steps} />
        )}
      </div>
    </div>
  )
}

export default Equilibrium_Acid_Base_Salt
