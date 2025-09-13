import React from 'react'

import { TopicContent } from "@/types/docs/topic"
import {  InlineMath } from "react-katex"
import 'katex/dist/katex.min.css'
import { div } from "three/tsl"
import DefinitionBox from '../../../common/box/DefinitionBox'
import TipBox from '../../../common/box/TipBox'
import ExampleBox from '../../../common/box/ExampleBox'




const FirstTopicContent: TopicContent = {
  definition: {
    title: "១. ព្យាករណ៍នៃរំកិលលំនឹង",
    content:
      <>
        <div className="flex flex-col items-start">
         
        </div>
      </>
  },
  tip: {
    title: "គោលការណ៍ឡឺសាតឺលីយេ",
    content: (
      <>
        <div className='flex flex-col items-start gap-3'>
            <p>ប្រព័ន្ធមួយកំពុងមានលំនឹងរងនូវភាពតានតឹង លំនឹងនោះរំកិលតាមទិសដៅដែលមានទំនោររំដោះភាពតានតឹង ។ កត្តាដែលនាំឲមានភាពតានតឹង (រំខាន) ដល់លំនឹងគីមីគឺ សម្ពាធ កំហាប់ និងសីតុណ្ហភាព ។</p>
        </div>
      </>
    ),
  },
}


const SecondTopicContent: TopicContent = {
  definition: {
    title: "១.១ បម្រែបម្រួលសម្ពាធ",
    content:
      <>
        
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <ul className='list-disc pl-5 flex flex-col items-start gap-4'>
            <div>
                <li>ការប្រែប្រួលសម្ពាធក្នុងប្រព័ន្ធប្រតិកម្ម មានឥទ្ធិពលទៅលេីលំនឹងនៃប្រព័ន្ធដែលមានភាពរូបជាឧស្ម័ន និងចំនួនម៉ូលេគុល (ឬចំនួនម៉ូល) សរុបនៃអង្គធាតុប្រតិករខុសគ្នាពីចំនួនម៉ូលេគុលសរុបនៃអង្គធាតុកកេីត ។</li>
            </div>
            <div className='flex flex-col items-start gap-3'>
                <li>ពេលគេបង្កេីនសម្ពាធទៅលេីប្រព័ន្ធគីមី លំនឹងរំកិលពីផ្នែកដែលមាន ចំនួនម៉ូលសរុបច្រេីនជាង ទៅរកផ្នែកដែលមានចំនួនម៉ូលតិចជាង (ផ្នែក គឺសំដៅដល់ អង្គធាតុប្រតិករ ឬអង្គធាតុកកេីត) ។</li>
                <p>ឧទាហរណ៍ :</p>
                <div className='flex items-center gap-3 flex-wrap text-[15px]'>
                    <InlineMath math="N_{2} + 3H_{2} \xrightleftharpoons[(2)]{(1)} 2NH_{3} (g)" />
                </div>
                <div className='flex items-center gap-5 flex-wrap'>
                    <div className='flex items-center gap-3'>
                        <span>1 mol</span>
                        <span>3 mol</span>
                        <span>2 mol</span>
                    </div>
                </div>
                <p>យេីងឃេីញថា ចំនួនម៉ូលសរុបនៃអង្គធាតុប្រតិករមាន 4 mol និងចំនួនម៉ូលសរុបនៃអង្គធាតុកកេីតមាន 2 mol ។ ដូច្នេះ ការបង្កេីនសម្ពាធ នាំឲលំនឹងរំកិលតាមទិសដៅ ។</p>
            </div>
        </ul>
      </>
    ),
  },
}

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "១.២ បម្រែបម្រួលកំហាប់",
    content:
      <>
        
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <ul className='list-disc pl-5 flex flex-col items-start gap-4'>
            <div className='flex flex-col items-start gap-3'>
                <li>ការបង្កេីនកំហាប់ប្រតិករ ក៏បង្កេីនភាពតានតឹងដែរ ។ ប្រព័ន្ធលំនឹងគីមីមួយតាងដោយសមីការតុល្យការ :</li>
                <span className='text-[13px]'><InlineMath math="A + B \xrightleftharpoons[(2)]{(1)} C + D" /></span>
                
            </div>
            <div >                
                <li>កាលណាបន្ថែមអង្គធាតុ A ឬ​ B នាំឲលំនឹងរំកិលតាមទិសដៅ (1) ។ ការប្រែប្រួលកំហាប់ពុំមានប៉ះពាល់ដល់តម្លៃថេរលំនឹង K ទេរ ។</li>
            </div>
            <div >                
                <li>កំហាប់អង្គធាតុរឹងសុទ្ធនិងកំហាប់អង្គធាតុរាវសុទ្ធពុំប្រែប្រូលតាមសន្មត គេមិនសរសេរកំហាប់អង្គធាតុរឹងនិងអង្គធាតុរាវនៅក្នុងកន្សោមថេរលំនឹងទេរ ។</li>
            </div>
        </ul>
      </>
    ),
  },
  example: {
      question: [
          <div className="flex flex-col items-start gap-5" key="q1">
              <div className='flex items-start flex-col gap-3 flex-wrap text-[13px]'>
                <InlineMath math="CaCO_{3} \xrightleftharpoons[(2)]{(1)} CaO + CO_{2} " />
                <InlineMath math="\Rightarrow K= [CO_{2}]" />
              </div>
              <div className='flex items-start flex-col gap-3 flex-wrap text-[13px]'>
                <InlineMath math="CH_{3}COOH + H_{2}O \xrightleftharpoons[(2)]{(1)} CH_{3}COO^{-} + H_{3}O^{+} " />
                <span className='text-[14px]'><InlineMath math="\Rightarrow K= \frac{[CH_{3}COO^{-}] \cdot [H_{3}O^{+}]}{[CH_{3}COOH]}" /></span>
                
              </div>
              <div className='flex items-start flex-col gap-3 flex-wrap text-[13px]'>
                <InlineMath math="H_{2}O + H_{2}O \xrightleftharpoons[(2)]{(1)} H_{3}O^{+} + OH^{-} " />
                <InlineMath math="\Rightarrow K= [H_{3}O^{+}] \cdot [OH^{-}] = K_{e}" />
              </div>
          </div>,
      ],
    },
}


const FourthTopicContent: TopicContent = {
  definition: {
    title: "១.៣ បម្រែបម្រួលសីតុណ្ហភាព",
    content:
      <>
        
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <ul className='list-disc pl-5 flex flex-col items-start gap-4'>
            <div className='flex flex-col items-start gap-3'>
                <li>កាលណាសីតុណ្ហភាពកេីន នាំឲលំនឹងគីមីរំកិលតាមទិសដៅប្រតិកម្មស្រូមកម្តៅ ។</li>
                <div className='flex items-center gap-3 flex-wrap'>
                    <p>ឧទាហរណ៍. </p>
                    <div className='flex items-center gap-3 flex-wrap'>
                        <span className='text-[13px]'><InlineMath math="N_{2} (g) + 3H_{2} \xrightleftharpoons[(2)]{(1)} 2NH_{3} (g) + 92KJ" />  </span>
                        <span>ជាប្រតិកម្មស្រូបកម្តៅ ។</span>
                    </div>
                </div>
                <p>ដូចនេះ កាលណាសីតុណ្ហភាពកេីន នាំឲលំនឹងគីមីរំកិលតាមទិសដៅ (2) ។</p>
            </div>
            <div className='flex flex-col items-start gap-3'>
                <li>កាលណាសីតុណ្ហភាពថយចុះ នាំឲលំនឹងគីមីរំកិលតាមទិសដៅប្រតិកម្មបញ្ចេញកម្តៅ ។ </li>
                <div className='flex items-center gap-3 flex-wrap'>
                    <p>ឧទាហរណ៍. ការផលិតឌីអាសូតតេត្រាអុកសុីត</p>
                    <div className='flex items-center gap-3 flex-wrap'>
                        <span className='text-[13px]'><InlineMath math="2NO_{2} (g) \xrightleftharpoons[(2)]{(1)} N_{2}O_{4} + កម្តៅ" />  </span>
                        <span>ជាប្រតិកម្មបញ្ចេញកម្តៅ ។</span>
                    </div>
                </div>
                <p>ដូចនេះ កាលណាសីតុណ្ហភាពថយចុះ នាំឲលំនឹងគីមីរំកិលតាមទិសដៅ (1) ។</p>
            </div>
            <div className='flex flex-col items-start gap-3'>
                <li>កាលណាសីតុណ្ហភាពប្រែប្រួល នាំឲថេរលំនឹង K ប្រែប្រួលដែរ ។</li>
            </div>    
        </ul>
      </>
    ),
  },
  example: {
      question: [
          <div className="flex flex-col items-start gap-3" key="q2">
             <p>ប្រតិកម្មខាងក្រោមស្ថិតក្នុងភាពលំនឹង :</p>
              <span className='text-[13px]'><InlineMath math="2CO (g) + O_{2} (g) \xrightleftharpoons[(2)]{(1)} 2CO_{2} (g) + កម្តៅ" />  </span>
              <p>ចូរពន្យល់ពីការរំកិលលំនឹង ពេល :</p> 
              <p>ក. សីតុណ្ហភាពនៃប្រព័ន្ធកេីនឡេីង</p>
              <p>ខ. បង្រួមមាឌកែវប្រតិកម្ម</p>
              <div className='flex items-center gap-1 flex-wrap'>
                  <p>គ. បន្ថែមឧស្ម័ន </p>
                  <span className='text-[13px]'><InlineMath math="CO_{2}" />  </span>
                  <p>ចូលក្នុងប្រព័ន្ធប្រតិកម្មនៅសម្ពាធថេរ </p>
              </div>
              <p>ឃ. បន្ថែមឧស្ម័ន He ចូលក្នុងប្រព័ន្ធប្រតិកម្មនៅមាឌថេរ</p>
          </div>,
      ],
      steps:[
          {
            title: "ករណីសីតុណ្ហភាពនៃប្រព័ន្ធកេីនឡេីង",
            content: (
              <>
                <div className='flex flex-col items-start gap-3' key={"step1"}>
                      <p>ដោយប្រតិកម្មតាមទិសដៅ (1) ជាប្រតិកម្មបញ្ចេញកម្តៅ យេីងអាចនិយាយបានថា ប្រតិកម្មតាមទិសដៅ​(2) ជាប្រតិកម្មស្រូបកម្តៅ ។ ដូចនេះ ប្រសិនបេីសីតុណ្ហភាពនៃប្រព័ន្ធកេីនឡេីង នោះលំនឹងនៃប្រតិកម្មរំកិលតាមទិសដៅ​ (2) ។</p>
                </div>
              </>
            )
          },
          {
            title: "ករណីបង្រួមមាឌកែវប្រតិកម្ម",
            content: (
              <>
                <div className='flex flex-col items-start gap-3' key={"step2"}>
                    <p>ការបង្រួមមាឌកែវ ធ្វេីឲសម្ពាធក្នុងកែវកេីនឡេីង មានន័យថាបង្កេីនសម្ពាធនៃប្រព័ន្ធប្រតិកម្ម ។ ដោយប្រភេទគីមីសុទ្ធតែជាឧស្ម័ន នោះលំនឹងទៅរកផ្នែកដែលមានចំនួនម៉ូលតិចជាង គឺលំនឹងរំកិលតាមទិសដៅ (1) ។</p>
                </div>
              </>
            )
          },
          {
            title: "ករណីបន្ថែមឧស្ម័ន CO_2 ចូលក្នុងប្រព័ន្ធប្រតិកម្មនៅសម្ពាធថេរ",
            content: (
              <>
                <div className='flex flex-col items-start gap-3' key={"step3"}>
                  <div className='flex items-center gap-1 flex-wrap'>
                    <p>ការបន្ថែមឧស្ម័ន </p>
                    <span className='text-[13px]'><InlineMath math="CO_{2}" />  </span>
                    <p>ចូលក្នុង</p>
                    <p>ប្រព័ន្ធប្រតិកម្ម</p>
                    <p>មានន័យថា បង្កេីនកំហាប់ </p>
                    <span className='text-[13px]'><InlineMath math="CO_{2} ។" /> </span>
                    <p>នៅពេលកំហាប់ </p>
                    <span className='text-[13px]'><InlineMath math="CO_{2}" /> </span>
                    <p>កេីន នោះលំនឹងរំកិលតាមទិសដៅ​ (2) </p>
                  </div>
                </div>
              </>
            )
          },
          {
            title: "ករណីបន្ថែមឧស្ម័ន He ចូលក្នុងប្រព័ន្ធប្រតិកម្មនៅមាឌថេរ",
            content: (
              <>
                <div className='flex flex-col items-start gap-3' key={"step4"}>
                    <p>ការបន្ថែមឧស្ម័ន He ចូលក្នុងប្រព័ន្ធប្រតិកម្ម ធ្វេីឲសម្ពាធដោយនៃឧស្ម័នប្រតិកម្មមិនប្រែប្រួលទេរ ។ ដូចនេះមិនមានការរំកិលលំនឹងទៅរកលំនឹងថ្មីទេ ។</p>
                </div>
              </>
            )
          },
      ],
    },
}

const FifthTopicContent: TopicContent = {
  definition: {
    title: "២. ប្រតិកម្មឈានទៅរកសព្វ",
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
            <p>អុីយ៉ិងខ្លះ ចូលរួមប្រតិកម្មជាមួយគ្នា ឲផលជាឧស្ម័ន ឬកករអង្គធាតុបំបែកជាអុីយ៉ុងបានតិច ។ ប្រតិកម្មបែបនេះនឹងឈានទៅរកសព្វ ។</p>
        </div>
      </>
    ),
  },
}

const SixthTopicContent: TopicContent = {
  definition: {
    title: "២.១ ប្រតិកម្មកំណឧស្ម័ន",
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
            <p>អុីយ៉ិងខ្លះ ចូលរួមប្រតិកម្មជាមួយគ្នា ឲផលជាសារធាតុមិនស៊ប់ (មិនមានស្ថិរភាព ) ហេីយវាបំបែកជាឧស្ម័នភ្លាម ។</p>
        </div>
      </>
    ),
  },
  example: {
    question: [
        <div className="flex flex-col items-start gap-3" key="q1">
            <div className='text-[13px]'>
                <InlineMath math="2H_{3}O^{+} (aq) + CO_{3}^{2-} (aq) \xrightleftharpoons[(2)]{(1)} H_{2}CO_{3} (aq) + 2H_{2}O (l)" /> 
                <InlineMath math="H_{2}CO_{3} (aq) \xrightleftharpoons[(2)]{(1)} 2H_{2}O (l) + CO_{2} (g)" />   
            </div>
            
            <div className='flex items-center gap-2 flex-wrap'>
              <p>ប្រតិកម្មនេះ ជាប្រតិកម្មឈានទៅរកសព្វ ព្រោះផលិតផលកកេីតជាឧស្ម័ន <span className='text-[13px]'><InlineMath math="CO_{2}" /></span> </p>
            </div>
        </div>,
    ],
  },
}

const SeventhTopicContent: TopicContent = {
  definition: {
    title: "២.២ ប្រតិកម្មឲផលជាកករ",
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
            <div className='flex items-center gap-1 flex-wrap'>
                <p>បេីគេលាយសូលុយស្យុង </p>
                <span className='text-[13px]'><InlineMath math="AgNO_{3}" /> </span>
                <p>និង </p>
                <span className='text-[13px]'><InlineMath math="NaCl" /></span>
                <p>គេទទួលបានកករ </p>
                <span className='text-[13px]'><InlineMath math="AgCl" /> ។</span>
            </div>
            
        </div>
      </>
    ),
  },
  example: {
    question: [
        <div className="flex flex-col items-start gap-3" key="q1">
            <div className='text-[13px]'>
                <InlineMath math="AgNO_{3} (aq) + NaCl (aq) \xrightleftharpoons[(2)]{(1)} AgCl (s) + NaCl (aq)" /> 
                <InlineMath math="Ag^{+} (aq) + Cl^{-} (aq) \xrightleftharpoons[(2)]{(1)} AgCl (s) " /> 
            </div>
            
            <p>ប្រតិកម្មនេះ ជាប្រតិកម្មឈានទៅរកសព្វ ព្រោះផលិតផលកកេីតជាកករ AgCl ។</p>
        </div>,
    ],
  },
}

const EighthTopicContent: TopicContent = {
  definition: {
    title: "២.៣ ប្រតិកម្មឲផលជាសារធាតុបំបែកអុីយ៉ុងបានតិច",
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
            <div className='flex items-center gap-1 flex-wrap'>
                <p>បេីគេលាយសូលុយស្យុង </p>
                <span className='text-[13px]'><InlineMath math="HCl" /></span>
                <p>និង </p>
                <span className='text-[13px]'><InlineMath math="NaOH" /></span>
                <p>គេទទួលបានទឹក ។</p>
            </div>
            
        </div>
      </>
    ),
  },
  example: {
    question: [
        <div className="flex flex-col items-start gap-3" key="q1">
            <div className='text-[13px]'>
                <InlineMath math="HCl (aq) + NaOH (aq) \xrightleftharpoons[(2)]{(1)} NaCl (aq) + H_{2}O (l)" /> 
                <InlineMath math="H_{3}O^{+} (aq) + OH^{-} (aq) \xrightleftharpoons[(2)]{(1)} 2H_{2}O (l) " /> 
            </div>
            
            <p>ប្រតិកម្មនេះ ជាប្រតិកម្មឈានទៅរកសព្វ ព្រោះផលិតផលកកេីតជាសារធាតុបំបែកជាអុីយ៉ុងបានតិច ។</p>
        </div>,
    ],
  },
}

const NinethTopicContent: TopicContent = {
  definition: {
    title: "៣. ផលអុីយ៉ុងរួម",
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
            <p>បេីគេបន្ថែមអុីយ៉ុងណាមួយចូលទៅក្នុងសូលុយស្យុងមួយទៀតដែលមានវត្តមានអុីយ៉ុងនោះដែរ និងធ្វេីឲមានការប្រែប្រួលដល់លំនឹង ដូចជាបណ្តាលឲកេីតជាកករ ឬឧស្ម័ននៃសមាសធាតុប្រតិករវិញ បាតុភូតនេះ ហៅថា ផលអុីយ៉ុងរួម ។</p>
        </div>
      </>
    ),
  },
}

const TenthTopicContent: TopicContent = {
  definition: {
    title: "៣.១ ផលអុីយ៉ុងរួមឲជាកករ",
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
            <p>គេអាចរំកិលលំនឹងនៃប្រតិកម្មនៃប្រតិកម្មណាមួយទៅតាមទិសដៅដែលចង់បានតាមគោលការណ៍ឡឺសាតឺលីយេ ។ គេមានសូលុយស្យុងសូដ្យូមក្លរួឆ្អែត ដែលមានសមីការលំនឹង :</p>
            <span className='text-[13px]'><InlineMath math="NaCl (s) \xrightleftharpoons[(2)]{(1)} Na^{+} (aq) + Cl^{-} (aq)" /> </span>
            <div className='flex items-center gap-1 flex-wrap'>
                <p>បេីគេបន្ថែមអុីដ្រូសែនក្លរួ </p>
                <span className='text-[13px]'><InlineMath math="HCl" /></span>
                <p> ទៅក្នុងសូលុយស្យុងខាងលេី នាំឲអុីយ៉ុងក្លរួ </p>
                <span className='text-[13px]'><InlineMath math="Cl^{-}" /></span>
                <p>មានអំពេីជាមួយអុីយ៉ុងសូដ្យូម </p>
                <span className='text-[13px]'><InlineMath math="Na^{+}" /></span>
                <p>ឲផលជាកករសូដ្យូមក្លរួ (NaCl) វិញ ។</p>
            </div>
        </div>
      </>
    ),
  },
}

const EleventhTopicContent: TopicContent = {
  definition: {
    title: "៣. ផលអុីយ៉ុងរួមបន្ថយកំរិតអុីយ៉ុងកម្ម",
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
          <div className='flex items-center gap-1 flex-wrap'>
              <p>អាសុីតអាសេទិចជាអាសុីតខ្សោយ </p>
              <span className='text-[13px]'><InlineMath math="CH_{3}COOH" /></span>

              <p>នៅកំហាប់ 0.1 M វាអាចបំបែកជាអុីយ៉ុង </p>
              <span className='text-[13px]'><InlineMath math="H_{3}O^{+}" /></span>
              <p>បានតែ 1.3% ប៉ុណ្ណោះ ។ </p>
          </div>
          <span className='text-[13px]'>
          <InlineMath math="CH_{3}COOH (aq) + H_{2}O (l) \xrightleftharpoons[(2)]{(1)} CH_{3}COO^{-} (aq) + H_{3}O^{+}" /> 
          </span>
          <div className='flex items-center gap-1 flex-wrap'>
              <p>បេីគេបន្ថែម </p>
              <span className='text-[13px]'><InlineMath math="CH_{3}COOH" /></span>
              <p>បន្តិចទៅក្នុងសូលុយស្យុងខាងលេី នាំឲអុីយ៉ុង </p>
              <span className='text-[13px]'><InlineMath math="CH_{3}COO^{-}" /></span>
              <p>បានពី </p>
              <span className='text-[13px]'><InlineMath math="CH_{3}COONa" /></span>
              <p>មានអំពេីជាមួយអុីយ៉ុង </p>
              <span className='text-[13px]'><InlineMath math="H_{3}O^{+}" /></span>
              <p>ក្នុងសូលុយស្យុង  </p>
              <span className='text-[13px]'><InlineMath math="CH_{3}COOH" /></span>
              <p>បង្កេីតជា  </p>
              <span className='text-[13px]'><InlineMath math="CH_{3}COOH" /></span>
              <p>វិញ ។  </p>
          </div>
        </div>
      </>
    ),
  },
  example: {
    question: [
        <div className="flex flex-col items-start gap-3" key="q1">
            <p>ប្រតិកម្មខាងក្រោមនេះប្រព្រឹត្តទៅនៅសីតុណ្ហភាព 400 °C :</p>
            <span className='text-[13px]'>
            <InlineMath math="H_{2} (g) + I_{2} (g) \rightleftharpoons 2HI (g)  , K= 50" />  
            </span>
            <p>គេយក 0.08 mol នៃអុីដ្រូសែន និង 0.08 mol នៃអុីយ៉ូត ទៅដាក់ក្នុងកែវចំណុះ 1L ហេីយបិទជិត និងទុកឲប្រព័ន្ធមានលំនឹង ។ ចូររកកំហាប់អុីយ៉ូតនៅពេលលំនឹង ។</p>
        </div>,
    ],
    steps: [
        {
            title: "រកកំហាប់អុីយ៉ូតនៅពេលលំនឹង",
            content: (
              <>
                <div className='flex flex-col items-start gap-3'>
                  <span className='text-[13px]'>
                   <InlineMath math="H_{2} (g) + I_{2} (g) \rightleftharpoons 2HI (g)" />  
                   </span>
                    <div className='flex items-center gap-4 text-[13px]'>
                        <InlineMath math="0.08 M" />
                        <InlineMath math="0.08 M" />
                        <InlineMath math="0" />
                    </div>
                    <div className='flex items-center gap-15'>
                        <InlineMath math="x" />
                        <InlineMath math="x" />
                        <InlineMath math="2x" />
                    </div>
                    <div className='flex items-center gap-4'>
                        <InlineMath math="(0.08 - x)" />
                        <InlineMath math="(0.08 - x)" />
                        <InlineMath math="2x" />
                    </div>
                    <div className='flex items-center gap-2 flex-wrap'>
                          <InlineMath math="K = " />  
                          <div className='text-[15px]'>
                                <InlineMath math="\frac{[HI^{2}]}{[H_{2}] \cdot [I_{2}]}" />   
                          </div> 
                          <div className='flex items-center gap-2'>
                              <span>=</span>
                              <div className='text-[15px]'>
                                <InlineMath math="\frac{(2x)^{2}}{(0.08 - x)^{2}} " />   
                              </div>
                                <InlineMath math="= 50 " />   
                          </div>
                    </div>
                    <div className='flex items-center gap-2 flex-wrap'>
                        <div className='text-[15px]'>
                          <InlineMath math="\frac{2x}{0.08 - x} " />   
                        </div>
                          <InlineMath math="= \sqrt 50 = 7.07" />   
                    </div>
                    <InlineMath math="2x = 0.5656 - 7.07x" />   
                    <InlineMath math="\Rightarrow  x = 0.06 M" /> 
                    <div className='flex items-center gap-2 flex-wrap text-[13px]'>
                        <p>ដូចនេះ </p>
                        <InlineMath math="[I_{2}] = 0.08-0.06 = 0.02 M" /> 
                    </div>  
                </div>
              </>
            )
        },
    ],
  },
}






const Equilibrium_shift = () => {
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
                <ExampleBox question={FourthTopicContent.example.question} steps={FourthTopicContent.example.steps}/>
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
                <ExampleBox question={FifthTopicContent.example.question} steps={FifthTopicContent.example.steps}/>
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
                <ExampleBox question={SixthTopicContent.example.question} steps={SixthTopicContent.example.steps}/>
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
                <ExampleBox question={SeventhTopicContent.example.question} steps={SeventhTopicContent.example.steps}/>
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
                <ExampleBox question={EighthTopicContent.example.question} steps={EighthTopicContent.example.steps}/>
            )}
        </div>
        <div>
            {NinethTopicContent.definition && (
              <DefinitionBox title={NinethTopicContent.definition.title} content={NinethTopicContent.definition.content} />
            )}
            {NinethTopicContent.tip && (
                <TipBox title={NinethTopicContent.tip.title} content={NinethTopicContent.tip.content} />
            )}
            {NinethTopicContent.example && (
                <ExampleBox question={NinethTopicContent.example.question} steps={NinethTopicContent.example.steps}/>
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
                <ExampleBox question={TenthTopicContent.example.question} steps={TenthTopicContent.example.steps}/>
            )}
        </div>
        <div>
            {EleventhTopicContent.definition && (
              <DefinitionBox title={EleventhTopicContent.definition.title} content={EleventhTopicContent.definition.content} />
            )}
            {EleventhTopicContent.tip && (
                <TipBox title={EleventhTopicContent.tip.title} content={EleventhTopicContent.tip.content} />
            )}
            {EleventhTopicContent.example && (
                <ExampleBox question={EleventhTopicContent.example.question} steps={EleventhTopicContent.example.steps}/>
            )}
        </div>
    </div>
  )
}

export default Equilibrium_shift
