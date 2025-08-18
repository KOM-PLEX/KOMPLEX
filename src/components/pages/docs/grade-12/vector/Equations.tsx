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
    title: "សមីការប៉ារ៉ាម៉ែត្រនៃបន្ទាត់ និង សមីការឆ្លុះនៃបន្ទាត់",
    content: (
      <>
        បន្ទាត់ L កាត់តាមចំណុច <InlineMath math={"A(x_0, y_0, z_0)"} /> ហើយស្របនឹងវ៉ិចទ័រប្រាប់ទិស
        <InlineMath math={"\\vec{u} = (a, b, c)"} />​ នោះគេបាន៖
      </>
    ),
    tip: {
      content: (
        <>
        <b>សមីការប៉ារ៉ាម៉ែត្រនៃបន្ទាត់ L :</b>
        <BlockMath math={String.raw`\begin{cases} x = x_0 + at \\ y = y_0 + bt \\ z = z_0 + ct \end{cases} \quad , t \in \mathbb{R}`}/>
        <br />
        <b>សមីការឆ្លុះនៃបន្ទាត់ L :</b>
        <BlockMath math={String.raw`\frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}`}/>
        <br />t ជា parameter (អថេរតំណាង) , (a, b, c ជាចំនួនពិត)
        </>
      )
    },
    hint: {
      content: (
        <>
          <li>បន្ទាត់ L កំណត់ដោយចំណុច <InlineMath math={"A(x_0, y_0, z_0)"} /> និងវ៉ិចទ័រទិសដៅ <InlineMath math={"\\vec{u} = (a, b, c)"} />។</li>
          <li>សមីការប៉ារ៉ាម៉ែត្របង្ហាញពីទីតាំងនៃបន្ទាត់ដោយប្រើប៉ារ៉ាម៉ែត្រ t។</li>
          <li>រាល់តម្លៃ <InlineMath math={"t"} /> ផ្តល់ចំណុចមួយលើបន្ទាត់។</li>
        </>
      )
    }
  },
  example: {
    question: (
      <>
        រកសមីការប៉ារ៉ាម៉ែត្រ និងសមីការឆ្លុះនៃបន្ទាត់ L ដែលកាត់តាមចំណុច <InlineMath math={"A(1,2,3)"} /> 
        ហើយស្របនឹងវ៉ិចទ័រប្រាប់ទិស <InlineMath math={"\\vec{u} = (4,−5,6)"} />។
      </>
    ),
    steps: [
      {
        title: "រកសមីការប៉ារ៉ាម៉ែត្រ",
        content: (
          <>
            យើងដឹងថា L កាត់តាមចំណុច​ A(1, 2, 3) ហើយស្របនឹង​ វ៉ិចទ័រប្រាប់ទិស <InlineMath math={"\\vec{u} = (a,b,c) "} /><br /><br />
            នោះយើងទាញបាន៖​​ <InlineMath math={"\\vec{u} = (a, b, c) = (4, -5, 6)"} />, <InlineMath math={"A(x_0, y_0, z_0)=(1, 2, 3)"} /><br /><br />
            <p>សមីការប៉ារ៉ាម៉ែត្រនៃបន្ទាត់ L គឺ៖</p><br />
            <BlockMath math={String.raw`\begin{cases} x = 1 + 4t \\ y = 2 + 5t \\ z = 3 + 6t \end{cases} \quad , t \in \mathbb{R}`} />
          </>
        )
      },
      {
        title: "រកសមីការឆ្លុះ",
        content: (
          <>
            <p>សមីការឆ្លុះនៃបន្ទាត់ L គឺ៖</p>
            <BlockMath math={String.raw`\frac{x - 1}{4} = \frac{y - 2}{5} = \frac{z - 3}{6}`} />
          </>
        )
      }
    ],
    answer: (
      <>
       ដូច្នេះសមីការប៉ារ៉ាម៉ែត្រនៃបន្ទាត់ L គឺ៖
       <BlockMath math={String.raw`\begin{cases} x = 1 + 4t \\ y = 2 + 5t \\ z = 3 + 6t \end{cases} \quad , t \in \mathbb{R}`} />
      </>
    )
  }
}

const TOPIC_CONTENT_PLANE = {
  definition: {
    title: "សមីការប្លង់",
    content: (
      <>
        ប្លង់ P កាត់តាមចំណុច <InlineMath math={"A(x_0, y_0, z_0)"} /> និងមានវ៉ិចទ័រណរម៉ាល់​ <InlineMath math={"\\vec{n} = (a, b, c)"} /> នោះគេបាន៖
      </>
    ),
    tip: {
      content: (
        <>
          <b>សមីការប្លង់ P :</b>
          <BlockMath math={String.raw` a(x - x_0) + b(y - y_0) + c(z - z_0) = 0`} />
          <br />
          <b>សមីការប្លង់ទូទៅ:</b>
          <BlockMath math={String.raw` ax + by + cz + d = 0`} />
          <b>ដែល</b> <InlineMath math={"d = - (a x_0 + b y_0 + c z_0)"} />
        </>
      )
    },
    hint: {
      content: (
        <>
          <li>វ៉ិចទ័រណរម៉ាល់ ​ឬ វ៉ិចទ័រកែង <InlineMath math={"\\vec{n} = (a, b, c)"} />។</li>
          <li>វ៉ិចទ័រណរម៉ាល់ <InlineMath math={"\\vec{n} = (a, b, c)"} /> ជាវ៉ិចទ័រដែលបង្ហាញពីទិសដៅនៃប្លង់។</li>
          <li>ប្លង់ P កំណត់ដោយចំណុច <InlineMath math={"A(x_0, y_0, z_0)"} /> និងវ៉ិចទ័រប្រាប់ទិស <InlineMath math={"\\vec{n} = (a, b, c)"} />។</li>
          <li>សមីការប្លង់ទូទៅអាចបង្ហាញពីទិសដៅនៃប្លង់បាន។</li>
        </>
      )
    }
  },
}

const TOPIC_CONTENT_SPHERICAL = {
  definition: {
    title: "សមីការស្វ៊ែ",
    content: (
      <>
        បើស្វ៊ែ S មានផ្ចិត ​<InlineMath math={"I (x_0, y_0, z_0)"} /> និងមានកាំ <InlineMath math={"r"} /> នោះគេបាន៖
      </>
    ),
    tip: {
      content: (
        <>
          <b>សមីការស្តង់ដា ​:</b>
          <BlockMath math={String.raw`(x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 = r^2`} />
          <br />
          <b>សមីការទូទៅ​ :</b>
          <BlockMath math={String.raw`x^2 + y^2 + z^2 - 2x_0 x - 2y_0 y - 2z_0 z + k = 0`} />
          <br />
          <b>ដែល</b> <InlineMath math={"k = x_0^2 + y_0^2 + z_0^2 - r^2"} />

        </>
      )
    },
    hint: {
      content: (
        <>
          <li>ស្វ៊ែ S មានផ្ចិត​ <InlineMath math={"I(x_0, y_0, z_0)"} /> និងមានកាំ <InlineMath math={"r"} />។</li>
        </>
      )
    }
  },
}

const TOPIC_CONTENT_DISTANCE_BETWEEN_POINTS = {
  definition: {
    title: "ចម្ងាយពីរចំណុច",
    content: (<></>),
    tip: {
      content: (
        <>
          <b>ចម្ងាយពីរចំណុចមួយទៅចំណុចមួយក្នុងលំហ</b><br />
          ចម្ងាយពីចំណុច <InlineMath math={"A(x_1, y_1, z_1)"} /> ទៅ <InlineMath math={"B(x_2, y_2, z_2)"} /> ក្នុងលំហគឺ៖
          <BlockMath math={"d(A,B) = |\\overrightarrow{AB}| = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}"} /><br />
          <b>ចម្ងាយពីចំណុចទៅប្លង់</b><br />
          បើប្លង់ <InlineMath math={"P"} /> មានសមីការ<InlineMath math={" ax + by + cz + d = 0"} /> នោះចម្ងាយពីចំណុច <InlineMath math={"A(x_0, y_0, z_0)"} /> ទៅប្លង់ P គឺ៖
          <BlockMath math={String.raw`d = \frac{|a x_0 + b y_0 + c z_0 + d|}{\sqrt{a^2 + b^2 + c^2}}`} />
          <b>ចម្ងាយពីរចំណុចមួយទៅបន្ទាត់មួយក្នុងលំហ</b> <br />
          បើបន្ទាត់​​ <InlineMath math={"L"} /> ស្របនឹងវិចទ័រ​ <InlineMath math={"\\vec{u}"} /> និង <InlineMath math={"M \\in L"} /> ហើយ​ <InlineMath math={"A \\notin L"} /> នោះយើងបាន៖
          <BlockMath math={String.raw`d(A, L) = \frac{|\overrightarrow{MA} \times \vec{u}|}{|\vec{u}|}`} />
          <b>ចម្ងាយរវាងប្លង់ពីរស្របគ្នា</b><br />
          បើប្លង់ <InlineMath math={"P_1"} /> និង <InlineMath math={"P_2"} /> ស្របគ្នា ហើយ <InlineMath math={"A \\in P_1"} /> និង <InlineMath math={"B \\in P_2"} /> នោះចម្ងាយរវាងប្លង់ពីរស្របគ្នាគឺ៖
          <BlockMath math={String.raw`d(P_1,P_2) = d(A,P_2) = d(B,P_1)`} />
        </>
      )
    },
    hint: {
      content: (
        <>
          <li>ចម្ងាយគឺជាអត្រារវាងចំណុចនិងបន្ទាត់។</li>
          <li>អាចប្រើសមីការចម្ងាយដើម្បីរកចម្ងាយពីចំណុចទៅប្លង់។</li>
        </>
      )
    }
  },
}

const Equations = () => {
  return (
    <div>
      {TOPIC_CONTENT.definition && (
        <DefinitionBox title={TOPIC_CONTENT.definition.title} content={TOPIC_CONTENT.definition.content} />
      )}
      {TOPIC_CONTENT.definition?.tip && (
        <TipBox content={TOPIC_CONTENT.definition.tip.content} />
      )}
      {TOPIC_CONTENT.definition?.hint && (
        <HintBox content={TOPIC_CONTENT.definition.hint.content} />
      )}
      {TOPIC_CONTENT.example && (
        <ExampleBox
          question={TOPIC_CONTENT.example.question}
          steps={TOPIC_CONTENT.example.steps}
        />
      )}
      {TOPIC_CONTENT_PLANE.definition && (
        <DefinitionBox title={TOPIC_CONTENT_PLANE.definition.title} content={TOPIC_CONTENT_PLANE.definition.content} />
      )}
      {TOPIC_CONTENT_PLANE.definition?.tip && (
        <TipBox content={TOPIC_CONTENT_PLANE.definition.tip.content} />
      )}
      {TOPIC_CONTENT_PLANE.definition?.hint && (
        <HintBox content={TOPIC_CONTENT_PLANE.definition.hint.content} />
      )}
      {TOPIC_CONTENT_SPHERICAL.definition && ( 
        <DefinitionBox title={TOPIC_CONTENT_SPHERICAL.definition.title} content={TOPIC_CONTENT_SPHERICAL.definition.content} />
      )}
      {TOPIC_CONTENT_SPHERICAL.definition?.tip && (
        <TipBox content={TOPIC_CONTENT_SPHERICAL.definition.tip.content} />
      )}
      {TOPIC_CONTENT_SPHERICAL.definition?.hint && (
        <HintBox content={TOPIC_CONTENT_SPHERICAL.definition.hint.content} />
      )}
      {TOPIC_CONTENT_DISTANCE_BETWEEN_POINTS.definition && (
        <DefinitionBox title={TOPIC_CONTENT_DISTANCE_BETWEEN_POINTS.definition.title} content={TOPIC_CONTENT_DISTANCE_BETWEEN_POINTS.definition.content} />
      )}
      {TOPIC_CONTENT_DISTANCE_BETWEEN_POINTS.definition?.tip && (
        <TipBox content={TOPIC_CONTENT_DISTANCE_BETWEEN_POINTS.definition.tip.content} />
      )}
      {TOPIC_CONTENT_DISTANCE_BETWEEN_POINTS.definition?.hint && (
        <HintBox content={TOPIC_CONTENT_DISTANCE_BETWEEN_POINTS.definition.hint.content} />
      )}

    </div>
  )
}

export default Equations
