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

import Acid_tables from './Acid_tables'



const FirstTopicContent: TopicContent = {
  definition: {
    title: "១. លក្ខណៈអាស៊ីត-បាស",
    content:
      <>
        <div className="flex flex-col items-start">

        </div>
      </>
  }
}


const SecondTopicContent: TopicContent = {
  definition: {
    title: "១.១ អាស៊ីត",
    content:
      <>
        <div className="flex flex-col items-start">
          <p>អាសុីតគឺជាសមាសធាតុទាំងឡាយណា ដែលមានលក្ខណះដូចជា៖ មានរសជាតិ ជូរ កាត់ ឬសុីនិងមាន pH តូចជាង 7។</p>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <p>អាសុីតមានប្រតិកម្មជាមួយបាសផ្តល់ផលជា អំបិលនិងទឹក។</p>
      </>
    ),
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <InlineMath math="HCl + NaOH \rightarrow NaCl + H_{2}O" />
      </div>,
    ],
  },
  exercise: {
    questions: [

    ]
  },
}

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "អុីដ្រូអាសុីត",
    content:
      <>
        <div className="flex flex-col items-start">
          <p>អុីដ្រូអាសុីតគឺជាអាសុីតដែលផ្សំដោយ H និងធាតុមួយផ្សេងទៀតដែលមានកម្រិត អេឡិចត្រូអវិជ្ជមានខ្លាំង។</p>
        </div>
      </>
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <div className='flex items-center gap-4 flex-wrap'>
          <div className='flex items-center gap-2 flex-wrap'>
            <InlineMath math="HF" />
            <span>(អាសុីតភ្លុយអរីឌ្រិច)</span>
          </div>
          <div className='flex items-center gap-2 flex-wrap'>
            <InlineMath math="HCl" />
            <span>(អាសុីតក្លរីឌ្រិច)</span>
          </div>
          <div className='flex items-center gap-2 flex-wrap'>
            <InlineMath math="H_{2}S" />
            <span>(អាសុីតស៊ុលភីឌ្រិច)</span>
          </div>
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
    title: "អុកសុីអាសុីត",
    content:
      <>
        <div className="flex flex-col items-start">
          <p>អុកសុីអាសុីតគឺជាអាសុីតដែលមានធាតុផ្សំ អុីដ្រូសែន អុកសុីសែន និងធាតុទី៣ដែល ភាគច្រេីនជាអលោហះ។</p>
        </div>
      </>
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <div className='flex items-center gap-4 flex-wrap'>
          <div className='flex items-center gap-2 flex-wrap'>
            <InlineMath math="HNO_{3}" />
            <span>(អាសុីតនីឌ្រិច)</span>
          </div>
          <div className='flex items-center gap-2 flex-wrap'>
            <InlineMath math="H_{2}SO_{4}" />
            <span>(អាសុីតស៊ុលផួរិច)</span>
          </div>
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
    title: "អាសុីតបំបែកជាអុីយ៉ុងអុីដ្រូញូមក្នុងទឹក",
    content:
      <>
        <div className="flex flex-col items-start">
          <p></p>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <p>នៅពេលអាសុីតប្រតិកម្មជាមួយទឹក ត្រូវពិនិត្យប្រភេទអាសុីតជាមុនសិន</p>
        <ul className='list-disc pl-5'>
          <li>បេីសិនជាអាសុីតខ្លាំង ព្រួញនៃសមីការមានទិសតែមួយ​</li>
          <li>បេីសិនជាអាសុីតខ្សោយ ព្រួញនៃសមីការត្រូមានទិសពីរ​ គឺទិសមុនប្រតិកម្មនិងក្រោយប្រតិកម្ម​</li>
        </ul>
      </>
    ),
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <div className='flex items-center gap-4 flex-wrap'>
          <InlineMath math="HNO_{3} (aq) + H_{2}O \rightarrow H_{3}O^{+} (aq) + NO_{3}^{-} (aq)" />
        </div>
        <div className='flex items-center gap-4 flex-wrap'>
          <InlineMath math="HOCl (aq) + H_{2}O \rightleftharpoons H_{3}O^{+} (aq) + ClO^{-} (aq)" />
        </div>
      </div>,
    ],
  },
  example2: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q2">
        <div className='flex items-center gap-2 flex-wrap'>
          <p>ក. ចូររកសមីការតាងប្រតិកម្មរវាងអាសុីត</p>
          <InlineMath math="H_{2}SO_{4}" />
          <p>និង</p>
          <InlineMath math="H_{3}PO_{4}" />
          <p>ជាមួយ</p>
          <InlineMath math="Ca(OH)_{2}" />
        </div>
        <div className='flex items-center gap-2 flex-wrap'>
          <p>ខ. គេមានសមីការសមាសធាតុអាសុីតបន្តបន្ទាប់នេះ </p>
          <InlineMath math="H_{3}PO_{4} , HClO_{4} , HBr , HI " />
          <p>ចូរកំណត់អាសុីតទាំងនេះជាអុីដ្រូអាសុីត និងអុកសុីអាសុីត ព្រមទាំងសរសេរសមីការអាសុីត HBr និង HI បំបែកជាអុីយ៉ុងអុីដ្រូញ៉ូមក្នុងទឹក។</p>
        </div>
      </div>,
    ],
    steps: [
      {
        title: "រកសមីការតាងប្រតិកម្ម",
        content: (
          <>
            <div className='flex flex-col items-start gap-3'>
              <div className='flex flex-col items-start gap-4'>
                <p>ក. សរសេរសមីការតាងប្រតិកម្ម</p>
                <InlineMath math="H_{2}SO_{4} (aq) + Ca(OH)_{2} (aq) \rightarrow CaSO_{4} (aq) + H_{2}O (l)" />
                <InlineMath math="2H_{3}PO_{4} (aq) + 3Ca(OH)_{2} (aq) \rightarrow Ca_{3}(PO_{4})_{2} (aq) + 3H_{2}O (l)" />
              </div>
            </div>
          </>
        )
      },
      {
        title: "អុីដ្រូអាសុីតមាន​ HBr និង HI",
        content: (
          <>
            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <p>អុកសុីតអាសុីតមាន​</p>
                <InlineMath math="H_{3}PO_{4}" />
                <p>និង</p>
                <InlineMath math="HClO_{4}" />
              </div>
              <div className='flex flex-col items-start gap-4'>
                <p>សមីការបំបែកដោយទឹកនៃអាសុីត</p>
                <InlineMath math="HBr (g) + H_{2}O (l) \rightarrow Br^{-} (aq) + H_{3}O^{+} (aq)" />
                <InlineMath math="HI (g) + H_{2}O (l) \rightarrow I^{-} (aq) + H_{3}O^{+} (aq)" />
              </div>
            </div>
          </>
        )
      }
    ]
  },
  exercise: {
    questions: [

    ]
  },
}


const SixthTopicContent: TopicContent = {
  definition: {
    title: "១.២ បាស",
    content:
      <>
        <div className="flex flex-col items-start">
          <p>បាសគឺជាសមាសធាតុទាំងឡាយណា ដែលមានលក្ខណះដូចជា៖ មានរសជាតិល្វីង កាត់ ឬសុីនិងមាន pH ធំជាង 7។</p>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <p>បាសជាអេឡិចត្រូលីត និងអាចប្រែពណ៌បានអង្គធាតុចង្អុលពណ៌បាន។ បាសមានប្រតិកម្មជាមួយអាសុីតផ្តល់ផលជា អំបិលនិងទឹក។</p>
      </>
    ),
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <InlineMath math="NaOH(s) \rightarrow Na^{+} (aq) + OH^{-} (aq)" />
        <InlineMath math="NH_{3} (g) + H_{2}O (l) \rightarrow NH_{4}^{+} (aq) + OH^{-} (aq)" />
      </div>,
    ],
  },
  example2: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <div className='flex items-center gap-4 flex-wrap'>
          <p>ចូរសរសេរសមីការតាងប្រតិកម្មរវាងអាសុីត</p>
          <InlineMath math="KOH" />
          <p>និង</p>
          <InlineMath math="Ca(OH)_{2}" />
          <p>ជាមួយ</p>
          <InlineMath math="H_{2}SO_{4}" />
        </div>
      </div>,
    ],
    steps: [
      {
        title: "សមីការតាងប្រតិកម្ម",
        content: (
          <>
            <div className='flex flex-col items-start gap-3'>
              <div className='flex flex-col items-start gap-4'>
                <InlineMath math="2KOH (aq) + H_{2}SO_{4} (aq) \rightarrow K_{2}SO_{4} (aq) + 2H_{2}O (l)" />
                <InlineMath math="Ca(OH)_{2} (aq) + H_{2}SO_{4} (aq) \rightarrow CaSO_{4} (aq) + 2H_{2}O (l)" />
              </div>
            </div>
          </>
        )
      },
    ]
  },
  exercise: {
    questions: [

    ]
  },
}


const SeventhTopicContent: TopicContent = {
  definition: {
    title: "២. អាសុីត-បាសតាមអារ៉េញ៉ូស",
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
        <div className='flex flex-col items-start gap-3'>
          <ul className='list-disc pl-5 flex flex-col gap-4'>
            <div className='flex flex-col items-start gap-3'>
              <li>អាសុីត ជាសមាសធាតុគីមីដែលបង្កេីតអុីយ៉ុងអុីដ្រូសែន ក្នុងសូលុយស្យុងទឹក។</li>
              <div className='flex items-center gap-2 flex-wrap'>
                <span>ឧទាហរណ៍</span>
                <InlineMath math="HCl (aq) \rightarrow H^{+} (aq) + Cl^{-} (aq)" />
              </div>
            </div>
            <div className='flex flex-col items-start gap-3'>
              <li>បាស ជាសមាសធាតុគីមីដែឡបង្កេីតអុីយ៉ុងអុីដ្រុកសុីត ក្នុងសូលុយស្យុងក្នុងទឹក។</li>
              <div className='flex items-center gap-2 flex-wrap'>
                <span>ឧទាហរណ៍</span>
                <InlineMath math="NaOH (aq) \rightarrow Na^{+} (aq) + OH^{-} (aq)" />
              </div>
            </div>
            <div className='flex flex-col items-start gap-3'>
              <li>សូលុយស្យុងអាសុីត​ ជាអេឡិចត្រូលីតដែលមានអុីយ៉ុងអុីដ្រូសែន ច្រេីនជាងអុីយ៉ុងអុីដ្រូស៊ីត។</li>
              <div className='flex items-center gap-2 flex-wrap'>
                <p>ក្នុងសូលុយស្យុងទឹកអុីយ៉ុងអុីដ្រូសែនចងសម្ព័ន្ធជាមួយម៉ូលេគុលទឹកបង្កេីតបានជាអុីយ៉ុង</p>
                <InlineMath math="H_{3}O^{+}" />
                <span>។</span>
              </div>
              <InlineMath math="H^{+} (aq) + H_{2}O (l) \rightarrow H_{3}O^{+} (aq)" />
              <p>ដូច្នេះអុីយ៉ុងកម្មរបស់អាសុីតក្នុងទឹកគេអាចសរសេរ :</p>
              <span>ឧទាហរណ៍</span>
              <InlineMath math="HCl (g) + H_{2}O (l) \rightarrow H_{3}O^{+} (aq) + Cl^{-} (aq)" />
              <InlineMath math="HNO_{3} (l) + H_{2}O (l) \rightarrow H_{3}O^{+} (aq) + NO_{3}^{-} (aq)" />
            </div>
            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <li>សូលុយស្យុងបាស ជាអេឡិចត្រូលីតដែលមានអុីយ៉ុងអុីដ្រុកសុីត ច្រេីនជាងអុីយ៉ុង</li>
                <InlineMath math="H_{3}O^{+}" />
              </div>
              <span>ឧទាហរណ៍</span>
              <InlineMath math="NaOH (s) \rightarrow Na^{+} (aq) + OH^{-} (aq)" />
              <InlineMath math="NH_{3} (g) + H_{2}O (l) \rightarrow NH_{4}^{+} (aq) + OH^{-} (aq)" />
            </div>
          </ul>
        </div>
      </>
    ),
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <div className='flex items-center gap-4 flex-wrap'>
          <p>ចូរជ្រេីសរេីសសមាសធាតុខាងក្រោមនេះ</p>
          <InlineMath math="NH_{3} , H_{2}SO_{4} , HCl , NaOH , HNO_{3}" />
          <p>ជាអាសុីតនិងបាសអារ៉េញ៉ូស។</p>
        </div>
      </div>,
    ],
    steps: [
      {
        title: "កំណត់ប្រភេទសមាសធាតុខាងក្រោម :",
        content: (
          <>
            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <p>អាសុីតអារ៉េញ៉ូស :</p>
                <InlineMath math="HCl , H_{2}SO_{4} , HNO_{3}" />
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <p>បាសអារ៉េញ៉ូស :</p>
                <InlineMath math="NaOH , NH_{3}" />
              </div>
            </div>
          </>
        )
      },
    ]
  },
  exercise: {
    questions: [

    ]
  },
}



const EighthTopicContent: TopicContent = {
  definition: {
    title: "៣. អាសុីត-បាសតាមប្រុងស្ទែត-ឡូរី",
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
        <div className='flex flex-col items-start gap-3'>
          <ul className='list-disc pl-5 flex flex-col gap-4'>

            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <li>អាសុីត ជាប្រភេទគីមីទាំងឡាយណាដែលបោះបង់ប្រូតុង។</li>
                <InlineMath math="( H^{+} )" />
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <span>ឧទាហរណ៍</span>
                <InlineMath math="HCl (g) + NH_{3} (g) \rightarrow NH_{4}^{+} (aq) + Cl^{-} (aq)" />
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <InlineMath math="HCl" />
                <p>ជាអាសុីត ព្រោះវាបោះបង់ប្រូតុងអោយ </p>
                <InlineMath math="NH_{3}" />
              </div>
            </div>

            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <li>បាស ជាប្រភេទគីមីទាំងឡាយណាដែលទទួលយកប្រូតុង។</li>
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <span>ឧទាហរណ៍</span>
                <InlineMath math="NH_{3} (g) + H_{2}O (l) \rightarrow NH_{4}^{+} (aq) + OH^{-} (aq)" />
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <InlineMath math="NH_{3}" />
                <p>ជាបាស ព្រោះវាទទួលប្រូតុងពី </p>
                <InlineMath math="H_{2}O" />
              </div>
            </div>
          </ul>
        </div>
      </>
    ),
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <div className='flex items-center gap-4 flex-wrap'>
          <p>ចូរកំណត់ប្រភេទគីមីទាំងនេះ</p>
          <InlineMath math="NH_{3} , H_{2}SO_{4} , HCl , NaOH , HNO_{3} , HBr" />
          <p>ជាអាសុីតឬបាសតាមប្រុងស្ទែត-ឡូរី</p>
        </div>
      </div>,
    ],
    steps: [
      {
        title: "កំណត់ប្រភេទសមាសធាតុខាងក្រោម :",
        content: (
          <>
            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <p>អាសុីតប្រុងស្ទែត-ឡូរី :</p>
                <InlineMath math="HCl , H_{2}SO_{4} , HBr , NH_{4}^{+}" />
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <p>បាសប្រុងស្ទែត-ឡូរី :</p>
                <InlineMath math="NaOH , NH_{3}" />
              </div>
            </div>
          </>
        )
      },
    ]
  },
  exercise: {
    questions: [

    ]
  },
}


const NinthTopicContent: TopicContent = {
  definition: {
    title: "៤. អាសុីត-បាសតាមឡឺវីស",
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
        <div className='flex flex-col items-start gap-3'>
          <ul className='list-disc pl-5 flex flex-col gap-4'>

            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <li>អាសុីត ជាប្រភេទគីមីទាំងឡាយណាដែលទទួលទ្វេតាអេឡិចត្រុង ដេីម្បីបង្កើតសម្ព័ន្ធកូវ៉ាឡង់។</li>
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <span>ឧទាហរណ៍</span>
                {/* <InlineMath math="HCl (g) + NH_{3} (g) \rightarrow NH_{4}^{+} (aq) + Cl^{-} (aq)" /> */}
              </div>
            </div>

            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <li>បាស ជាប្រភេទគីមីទាំងឡាយណាដែលអោយទ្វេតាអេឡិចត្រុង ដេីម្បីបង្កើតសម្ព័ន្ធកូវ៉ាឡង់។</li>
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <span>ឧទាហរណ៍</span>
                {/* <InlineMath math="NH_{3} (g) + H_{2}O (l) \rightarrow NH_{4}^{+} (aq) + OH^{-} (aq)" /> */}
              </div>
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
    steps: [

    ]
  },
  exercise: {
    questions: [

    ]
  },
}



const TenthTopicContent: TopicContent = {
  definition: {
    title: "៥. ម៉ូណូប្រូទិច និងប៉ូលីប្រូទិចអាសុីត",
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
        <div className='flex flex-col items-start gap-3'>
          <ul className='list-disc pl-5 flex flex-col gap-4'>

            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <li>ម៉ូណូប្រូទិចអាសុីត ជាអាសុីតដែលអោយប្រូតុងតែមួយក្នុងមួយម៉ូលេគុល។</li>
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <span>ឧទាហរណ៍</span>
                <InlineMath math="HCl (aq) + H_{2}O (l) \rightarrow  Cl^{-} (aq) + H_{3}O^{+} (aq)" />
              </div>
            </div>

            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <li>ឌីប្រូទិចអាសុីត ជាអាសុីតដែលអោយប្រូតុងពីរនៅក្នុងមួយម៉ូលេគុល។</li>
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <span>ឧទាហរណ៍</span>
                <InlineMath math="H_{2}SO_{4} (aq) + H_{2}O (l) \rightarrow  HSO_{4}^{-} (aq) + H_{3}O^{+} (aq)" />
              </div>
            </div>

            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <li>ទ្រីប្រូទិចអាសុីត ជាអាសុីតដែលអោយប្រូតុងបីនៅក្នុងមួយម៉ូលេគុល។</li>
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <span>ឧទាហរណ៍</span>
                <InlineMath math="H_{3}PO_{4} (aq) + H_{2}O (l) \rightarrow  H_{2}PO_{4}^{-} (aq) + H_{3}O^{+} (aq)" />
              </div>
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
    steps: [

    ]
  },
  exercise: {
    questions: [

    ]
  },
}

const EleventhTopicContent: TopicContent = {
  definition: {
    title: "៦. កម្លាំងអាស៊ីត-បាស",
    content:
      <>
        <div className="flex flex-col items-start">

        </div>
      </>
  }
}


const TwelfthTopicContent: TopicContent = {
  definition: {
    title: "ក. កម្លាំងអាស៊ីត",
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
        <div className='flex flex-col items-start gap-3'>
          <ul className='list-disc pl-5 flex flex-col gap-4'>

            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <li>អាសុីតខ្លាំង ជាអាសុីតដែលបំបែកជាអុីយ៉ុងអុីដ្រូញ៉ូម </li>
                <InlineMath math="(H_{3}O^{+})" />
                <span>សព្វក្នុងទឹក។</span>
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <span>ឧទាហរណ៍</span>
                <InlineMath math="HCl (aq) + H_{2}O (l) \rightarrow  Cl^{-} (aq) + H_{3}O^{+} (aq)" />
              </div>
            </div>

            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <li>អាសុីតខ្សោយ ជាអាសុីតដែលបំបែកជាអុីយ៉ុងអុីដ្រូញ៉ូម</li>
                <InlineMath math="(H_{3}O^{+})" />
                <span>មិនសព្វក្នុងទឹក។</span>
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <span>ឧទាហរណ៍</span>
                <InlineMath math="HF (aq) + H_{2}O (l) \rightarrow  F^{-} (aq) + H_{3}O^{+} (aq)" />
              </div>
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
    steps: [

    ]
  },
  exercise: {
    questions: [

    ]
  },
}


const ThirdTeenthTopicContent: TopicContent = {
  definition: {
    title: "ខ. កម្លាំងបាស",
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
        <div className='flex flex-col items-start gap-3'>
          <ul className='list-disc pl-5 flex flex-col gap-4'>

            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <li>បាសខ្លាំង ជាបាសដែលបំបែកជាអុីយ៉ុងអុីដ្រុកសុីត </li>
                <InlineMath math="(OH^{-})" />
                <span>សព្វក្នុងទឹក។</span>
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <span>ឧទាហរណ៍</span>
                <InlineMath math="KOH (aq) \rightarrow  K^{+} (aq) + OH^{-} (aq)" />
              </div>
            </div>

            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <li>បាសខ្សោយ ជាបាសដែលបំបែកជាអុីយ៉ុងអុីដ្រុកសុីត </li>
                <InlineMath math="(OH^{-})" />
                <span>មិនសព្វក្នុងទឹក។</span>
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <span>ឧទាហរណ៍</span>
                <InlineMath math="NH_{3} (g) + H_{2}O (l) \rightarrow  NH_{4}^{+} (aq) + OH^{-} (aq)" />
              </div>
            </div>
          </ul>
        </div>
      </>
    ),
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <div className='flex items-center gap-2 flex-wrap'>
          <p>ចូរកំណត់ថ្នាក់ប្រភេទគីមីបន្ទាប់នេះ </p>
          <InlineMath math="HCl , NaOH , NH_{3} , HNO_{3} , C_{6}H_{5}NH_{2} ," />
          <InlineMath math="NaC_{2}H_{5}O_{2} , HClO_{4} , HC_{2}H_{3}O_{2}" />
          <p>ជាអាសុីតខ្លាំង អាសុីតខ្សោយ បាសខ្លាំង និងបាសខ្សោយ។</p>
        </div>
      </div>,
    ],
    steps: [
      {
        title: "កំណត់ប្រភេទសមាសធាតុខាងក្រោម :",
        content: (
          <>
            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <p>អាសុីតខ្លាំង :</p>
                <InlineMath math="HCl , HNO_{3} , HClO_{4}" />
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <p>អាសុីតខ្សោយ :</p>
                <InlineMath math="HC_{2}H_{3}O_{2}" />
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <p>បាសខ្លាំង :</p>
                <InlineMath math="NaOH" />
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <p>បាសខ្សោយ :</p>
                <InlineMath math="NH_{3} , C_{6}H_{5}NH_{2}" />
              </div>
            </div>
          </>
        )
      },
    ]
  },
  exercise: {
    questions: [

    ]
  },
}




const Acid_base_theory = () => {
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
          <ExampleBox question={SecondTopicContent.example.question} />
        )}
      </div>
      <div>
        {ThirdTopicContent.definition && (
          <DefinitionBox title={ThirdTopicContent.definition.title} content={ThirdTopicContent.definition.content} />
        )}
        {ThirdTopicContent.example && (
          <ExampleBox question={ThirdTopicContent.example.question} />
        )}

      </div>
      <div>
        {FourthTopicContent.definition && (
          <DefinitionBox title={FourthTopicContent.definition.title} content={FourthTopicContent.definition.content} />
        )}
        {FourthTopicContent.example && (
          <ExampleBox question={FourthTopicContent.example.question} />
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
          <ExampleBox question={FifthTopicContent.example.question} />
        )}
        {FifthTopicContent.example2 && (
          <ExampleBox question={FifthTopicContent.example2.question} steps={FifthTopicContent.example2.steps} answer={FifthTopicContent.example2.answer} />
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
        {SixthTopicContent.example2 && (
          <ExampleBox question={SixthTopicContent.example2.question} steps={SixthTopicContent.example2.steps} answer={SixthTopicContent.example2.answer} />
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
      <div>
        {NinthTopicContent.definition && (
          <DefinitionBox title={NinthTopicContent.definition.title} content={NinthTopicContent.definition.content} />
        )}
        {NinthTopicContent.tip && (
          <TipBox title={NinthTopicContent.tip.title} content={NinthTopicContent.tip.content} />
        )}
        {NinthTopicContent.example && (
          <ExampleBox question={NinthTopicContent.example.question} steps={NinthTopicContent.example.steps} answer={NinthTopicContent.example.answer} />
        )}
      </div>
      <div>
        {TenthTopicContent.definition && (
          <DefinitionBox title={TenthTopicContent.definition.title} content={TenthTopicContent.definition.content} />
        )}
        {TenthTopicContent.tip && (
          <TipBox title={TenthTopicContent.tip.title} content={TenthTopicContent.tip.content} />
        )}
        {TenthTopicContent.example && (
          <ExampleBox question={TenthTopicContent.example.question} steps={TenthTopicContent.example.steps} answer={TenthTopicContent.example.answer} />
        )}
      </div>
      <div>
        {EleventhTopicContent.definition && (
          <DefinitionBox title={EleventhTopicContent.definition.title} content={EleventhTopicContent.definition.content} />
        )}
      </div>
      <div>
        {TwelfthTopicContent.definition && (
          <DefinitionBox title={TwelfthTopicContent.definition.title} content={TwelfthTopicContent.definition.content} />
        )}
        {TwelfthTopicContent.tip && (
          <TipBox title={TwelfthTopicContent.tip.title} content={TwelfthTopicContent.tip.content} />
        )}
        {TwelfthTopicContent.example && (
          <ExampleBox question={TwelfthTopicContent.example.question} steps={TwelfthTopicContent.example.steps} answer={TwelfthTopicContent.example.answer} />
        )}
      </div>
      <div>
        {ThirdTeenthTopicContent.definition && (
          <DefinitionBox title={ThirdTeenthTopicContent.definition.title} content={ThirdTeenthTopicContent.definition.content} />
        )}
        {ThirdTeenthTopicContent.tip && (
          <TipBox title={ThirdTeenthTopicContent.tip.title} content={ThirdTeenthTopicContent.tip.content} />
        )}
        {ThirdTeenthTopicContent.example && (
          <ExampleBox question={ThirdTeenthTopicContent.example.question} steps={ThirdTeenthTopicContent.example.steps} answer={ThirdTeenthTopicContent.example.answer} />
        )}
      </div>
    </div>
  )
}

export default Acid_base_theory
