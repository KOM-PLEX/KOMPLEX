import React from 'react';
import DefinitionBox from '../../common/box/DefinitionBox';
import TipBox from '../../common/box/TipBox';
import ExampleBox from '../../common/box/ExampleBox';
import { BlockMath, InlineMath } from 'react-katex';
import { ImageBox } from '../../common/box/explanation-box/ImageExplanationBox';
import WarningBox from '../../common/box/WarningBox';
import HintBox from '../../common/box/HintBox';
import ExerciseBox from '../../common/box/ExerciseBox';
import { math } from '@/curriculum/grade-12/math';
import { Content } from 'next/font/google';
import { title } from 'process';

const TOPIC_CONTENT = {
  definition: {
    title: "មាឌចតុមុខ(តេត្រាអែត)",
    content: (
      <>
        <ImageBox
          src="/tetrahedron.png"
          imageAlt="Tetrahedron"
          explanation={
            <>
              <b>មាឌចតុមុខ(តេត្រាអែត) ABCD កំណត់ដោយ៖</b>
                <BlockMath math="V = \frac{1}{6} |\overrightarrow{AB} \times \overrightarrow{AC} \cdot \overrightarrow{AD}|" />
                (V: មាឌ, ខ្នាតគិត​ជា <InlineMath math="cm^3" />)<br />
              <b>ឬគេ​អាចរកតាម:</b>
              <BlockMath math={String.raw`V = \frac{1}{3} S_{BCD} \cdot h`} />
                (S<sub>BCD</sub>: ផ្ទៃបាត, h: កំពស់តេត្រាអែត)
              <br />
              <b>ចំណាំ:</b> មាឌអាចគណនាដោយប្រើវ៉ិចទ័របានផងដែរ។
            </>
          }
        />
      </>
    ),
  },
  hint: {
    hint: {
    content: (
      <>
        <ul>
          <li>មាឌចតុមុខ (តេត្រាអែត) គឺជាមាឌរបស់រូបធរណីមាត្រដែលមានកំពូល ៤។</li>
          <li>ប្រើរូបមន្ត <InlineMath math={"V = \\frac{1}{6} | \\overrightarrow{AB} \\times \\overrightarrow{AC} \\cdot \\overrightarrow{AD} |"} /> ដើម្បីគណនាមាឌ។</li>
          <li>គណនាវ៉ិចទ័រ <InlineMath math={"\\overrightarrow{AB}, \\overrightarrow{AC}, \\overrightarrow{AD}"} /> ពីចំណុចកំណត់។</li>
          <li>គណនាផលគុណវ៉ិចទ័រកាត់ (cross product) និងផលគុណស្កាលែរ (scalar product) តាមលំដាប់។</li>
          <li>ប្រើតម្លៃដាច់ខាត (absolute value) និងចែក ៦ ដើម្បីទទួលបានមាឌ។</li>
        </ul>
      </>
    )
  },
  example: {
    question: (
      <>
        <b>ឧទាហរណ៍</b><br />
        ចូរគណនាមាឌចតុមុខ ABCD ដែលមានកូអរដោនេចំណុចដូចខាងក្រោម៖<br />
        A(1,1,1), B(2,3,4), C(3,1,2), D(0,0,0) (ចំណុចគល់)
      </>
    ),
    steps: [
      {
        title: "គណនាវ៉ិចទ័រទាំងបីពីចំណុច A",
        content: (
          <>
            តាមរូបមន្ត៖ <InlineMath math={"V = \\frac{1}{6} | \\overrightarrow{AB} \\times \\overrightarrow{AC} \\cdot \\overrightarrow{AD} |"} /><br /><br />
            គេឲ្យ <InlineMath math={"A = (1,1,1), B = (2,3,4), C = (3,1,2), D = (0,0,0)"} /> <br /><br />
            គេបាន៖ <br />
            <InlineMath math={"\\overrightarrow{AB} = (1,2,3)"} /> <br />
            <InlineMath math={"\\overrightarrow{AC} = (2,0,1)"} /> <br />
            <InlineMath math={"\\overrightarrow{AD} = (-1,-1,-1)"} /> <br />
          </>
        )
      },
      {
        title: "គណនាផលគុណវ៉ិចទ័រ",
        content: (
          <>
              <InlineMath math={String.raw`\overrightarrow{AB} \times \overrightarrow{AC}`} /> <br />
              <InlineMath math={String.raw` = (1,2,3) \times (2,0,1)`} /> <br />
              <InlineMath math={String.raw` = (2, 5, -4)`} /> <br />
          </>
        )
      },
      {
        title: "គណនាផលគុណស្កាលែ",
        content: (
          <>
              <InlineMath math={String.raw`(\overrightarrow{AB} \times \overrightarrow{AC}) \cdot \overrightarrow{AD}`} /> <br /> 
              <InlineMath math={String.raw` = (2, 5, -4) \cdot (-1, -1, -1)`} /> <br />
              <InlineMath math={String.raw` = (2)(-1) + (5)(-1) + (-4)(-1)`} /> <br />
              <InlineMath math={String.raw` = -2 - 5 + 4 = -3`} /> <br />
          </>
        )
      },
      {
        title: "គណនាមាឌចតុមុខ",
        content: (
          <>
            យើងបាន៖ <InlineMath math={String.raw `V = \frac{1}{6} | -3 | = \frac{1}{6} \times 3 = \frac{1}{2}`} /> <br />
          </>
        )
      }
    ],
    answer: (
      <>
        ដូចនេះមាឌចតុមុខ ABCD គឺ <InlineMath math={"V = 0.5 m^3"} />
      </>
    )
  }
},
}

const TOPIC_CONTENT_PARALLELEPIPED = {
  definition: {
    title: "មាឌប្រលេពីប៉ែតកែង",
    content: (
      <>
        <ImageBox
          src="/parallelepiped.png"
          imageAlt="3D Parallelepiped"
          explanation={
            <>
              <b>មាឌប្រលេពីប៉ែតកែង​ កំណត់ដោយ៖​</b><br />
              <BlockMath math={String.raw`V = |(\overrightarrow{AB} \times \overrightarrow{AC}) \cdot \overrightarrow{AD}|`} /> <br />
                (V: មាឌ, ខ្នាតគិត​ជា <InlineMath math="cm^3" />)
            </>
          }
        />
      </>
    ),
  },
  hint: {
    hint: {
    content: (
      <>
        <ul>
          <li>មាឌប្រលេពីប៉ែតកែង គឺជាមាឌរបស់រូបធរណីមាត្រដែលមានមុខទាំងអស់ជាប្រលេប៉ែត។</li>
          <li>ប្រើរូបមន្ត <InlineMath math={"V = | \\overrightarrow{AB} \\cdot ( \\overrightarrow{AD} \\times \\overrightarrow{AE} ) |"} /> ដើម្បីគណនាមាឌ។</li>
          <li>គណនាវ៉ិចទ័រ <InlineMath math={"\\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AE}"} /> ពីចំណុចកំណត់។</li>
          <li>គណនាផលគុណវ៉ិចទ័រកាត់ (cross product) រវាង <InlineMath math={"\\overrightarrow{AD}"} /> និង <InlineMath math={"\\overrightarrow{AE}"} /> ជាមុន។</li>
          <li>បន្ទាប់មកគណនាផលគុណស្កាលែរ (scalar product) រវាង <InlineMath math={"\\overrightarrow{AB}"} /> និងលទ្ធផលនោះ។</li>
          <li>ប្រើតម្លៃដាច់ខាត (absolute value) ដើម្បីទទួលបានមាឌ។</li>
        </ul>
      </>
    )
  },
  example: {
    question: (
      <>
        <b>ឧទាហរណ៍</b><br />
        គណនាមាឌប្រលេពីប៉ែតកែងដែលកំណត់ដោយចំណុច៖<br />
        A(0,0,0), B(2,1,3), D(1,2,0), E(0,1,2)
      </>
    ),
    steps: [
      {
        title: "គណនាវ៉ិចទ័រ",
        content: (
          <>
            តាមរូបមន្ត៖​ <InlineMath math={"V = | \\overrightarrow{AB} \\cdot ( \\overrightarrow{AD} \\times \\overrightarrow{AE} ) |"} /> <br /><br />
            គេមាន​ <InlineMath math={"A = (0,0,0), B = (2,1,3), D = (1,2,0), E = (0,1,2)"} /> <br /><br />
            នាំឲ៖ <br />
            <InlineMath math={"\\overrightarrow{AB} = (2,1,3)"} /> <br />
            <InlineMath math={"\\overrightarrow{AD} = (1,2,0)"} /> <br />
            <InlineMath math={"\\overrightarrow{AE} = (0,1,2)"} /> <br />
          </>
        )
      },
      {
        title: "គណនាផលគុណវ៉ិចទ័រ",
        content: (
          <>
          <InlineMath math={String.raw`\overrightarrow{AD} \times \overrightarrow{AE}`} /> <br />
          <InlineMath math={String.raw`= (1,2,0) \times (0,1,2)`} /> <br />
          <InlineMath math={String.raw`= (4, -2, 1)`} /> <br />
          </>
        )
      },
      {
        title: "គណនាផលគុណស្កាលែរ",
        content: (
          <>
          <InlineMath math={String.raw`\overrightarrow{AB} \cdot (\overrightarrow{AD} \times \overrightarrow{AE})`} /> <br />
          <InlineMath math={String.raw`= (2,1,3) \cdot (4,-2,1)`} /> <br />
          <InlineMath math={String.raw`= (2)(4) + (1)(-2) + (3)(1) `} /> <br />
          <InlineMath math={String.raw`= 8 - 2 + 3 = 9`} /> <br />
          </>
        )
      },
      {
        title: "គណនាមាឌប្រលេពីប៉ែតកែង",
        content: (
          <>
            យើងបាន៖ <InlineMath math={"V = |9| = 9"} /> <br />
          </>
        )
      }
    ],

    answer: (
      <>
        ដូចនេះមាឌប្រលេពីប៉ែតកែង<InlineMath math={"V = 9"} />
      </>
    )
  }
},
exercise: {
  questions: [
    {
      id: "ex1",
      question: (
        <>
          គណនាមាឌប្រលេពីប៉ែតកែងដែលកំណត់ដោយចំណុច៖<br />
          A(1,0,0), B(3,2,1), D(2,1,0), E(0,1,2)
        </>
      ),
      options: [
        <div className='flex items-center gap-1 '>
          <InlineMath math='5 m^{3}' />
        </div>,
        <div className='flex items-center gap-1 '>
          <InlineMath math='6 m^{3}' />
        </div>,
        <div className='flex items-center gap-1 '>
          <InlineMath math='7 m^{3}' />
        </div>,
        <div className='flex items-center gap-1 '>
          <InlineMath math='8 m^{3}' />
        </div>
      ],
      correctAnswer: 2
    },
    {
      id: "ex2",
      question: (
        <>
          គណនាមាឌប្រលេពីប៉ែតកែងដែលកំណត់ដោយចំណុច៖<br />
          A(0,0,0), B(1,1,1), D(1,0,0), E(0,1,0)
        </>
      ),
      options: [
        <div className='flex items-center gap-1 '>
          <InlineMath math='1 m^{3}' />
        </div>,
        <div className='flex items-center gap-1 '>
          <InlineMath math='2 m^{3}' />
        </div>,
        <div className='flex items-center gap-1 '>
          <InlineMath math='3 m^{3}' />
        </div>,
        <div className='flex items-center gap-1 '>
          <InlineMath math='4 m^{3}' />
        </div>
      ],
      correctAnswer: 1
    },
    {
      id: "ex3",
      question: (
        <>
          គណនាមាឌចតុមុខ ABCD ដែលមានកូអរដោនេចំណុច៖<br />
          A(1,1,1), B(2,3,4), C(3,1,2), D(0,0,0)
        </>
      ),
      options: [
        <div className='flex items-center gap-1 '>
          <InlineMath math='0.5 m^{3}' />
        </div>,
        <div className='flex items-center gap-1 '>
          <InlineMath math='1 m^{3}' />
        </div>,
        <div className='flex items-center gap-1 '>
          <InlineMath math='1.5 m^{3}' />
        </div>,
        <div className='flex items-center gap-1 '>
          <InlineMath math='2 m^{3}' />
        </div>
      ],
      correctAnswer: 0
    }
  ],
},
}

const Volume = () => {
  return (
    <div>
      <DefinitionBox title={TOPIC_CONTENT.definition?.title} content={TOPIC_CONTENT.definition?.content} />
      <HintBox content={TOPIC_CONTENT.hint?.hint.content} />
      <ExampleBox question={TOPIC_CONTENT.hint.example?.question} steps={TOPIC_CONTENT.hint.example?.steps} answer={TOPIC_CONTENT.hint.example?.answer} />
      <DefinitionBox title={TOPIC_CONTENT_PARALLELEPIPED.definition?.title} content={TOPIC_CONTENT_PARALLELEPIPED.definition?.content} />
      <HintBox content={TOPIC_CONTENT_PARALLELEPIPED.hint?.hint.content} />
      <ExampleBox question={TOPIC_CONTENT_PARALLELEPIPED.hint.example?.question} steps={TOPIC_CONTENT_PARALLELEPIPED.hint.example?.steps} answer={TOPIC_CONTENT_PARALLELEPIPED.hint.example?.answer} />
      {TOPIC_CONTENT_PARALLELEPIPED.exercise && (<ExerciseBox questions={TOPIC_CONTENT_PARALLELEPIPED.exercise.questions} />)}


    </div>
  )
}

export default Volume
