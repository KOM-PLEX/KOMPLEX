import React from 'react'
import { TopicContent } from '@/types/topic'
import DefinitionBox from '../../../common/box/DefinitionBox'
import TipBox from '../../../common/box/TipBox'
import { BlockMath, InlineMath } from 'react-katex';
import ExampleBox from '../../../common/box/ExampleBox';
import { ImageBox } from '../../../common/box/explanation-box/ImageExplanationBox';

const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "តើវ៉ិចទ័រគឺជាអ្វី?",
    content: "វ៉ិចទ័រគឺជាអថេរដែលមាន​ទំហំ​ ទិស ទិសដៅ និងប្រវែង។ វាអាចត្រូវបានបង្ហាញដោយសមីការដូចជា v = ai + bj ដែល a និង b ជាចំនួនពិត។"
  },
  tip: {
    title: "ចំណុចសំខាន់ៗ",
    content: (
      <>
        • វ៉ិចទ័រមានទិស និងប្រវែង។ <br />
        • វ៉ិចទ័រអាចត្រូវបានបង្ហាញដោយសមីការដូចជា v = ai + bj។ <br />
        • វ៉ិចទ័រអាចត្រូវបានគណនាដោយប្រើសមីការបូក និងដក។ <br />   
      </>
    )
  },
}

const TOPIC_CONTENT_COMPLEX: TopicContent = {
  definition: {
    title: "វ៉ិចទ័រប្រាប់ទិស នៃបន្ទាត់",
    content: (
      <>
        វ៉ិចទ័រប្រាប់ទិសនៃបន្ទាត់ <InlineMath math="(D)" />  គឺវ៉ិចទ័រមួយដែលស្រប នឹងបន្ទាត់ <InlineMath math="(D)" />។<br />
        វ៉ិចទ័រប្រាប់ទិសនៃ <InlineMath math="(D)" />  គឺគ្រប់វ៉ិចទ័រ <InlineMath math="\overrightarrow{AB}" /> ដែលមាន <InlineMath math="A" /> និង <InlineMath math="B" /> ជាចំណុចស្ថិតលើបន្ទាត់ <InlineMath math="(D)" /> និង <InlineMath math="A ≠ B" />។
      </>
    )
  },
  tip: {
    title: "លក្ខណៈនៃវ៉ិចទ័រប្រាប់ទិស",
    content: (
      <>
        • វ៉ិចទ័រប្រាប់ទិសមានទិសដៅស្រប នឹងបន្ទាត់។<br/>
        • ប្រសិនបើបន្ទាត់ <InlineMath math="(D)" /> មានវ៉ិចទ័រប្រាប់ទិស <InlineMath math="\vec{u}" /> នោះគ្រប់វ៉ិចទ័រ <InlineMath math="\vec{v}" /> ដែល <InlineMath math="\vec{v} = k \vec{u}" /> (<InlineMath math="k ≠ 0" />) ក៏ជាវ៉ិចទ័រប្រាប់ទិសដែរ។ <br/>
        • វ៉ិចទ័រប្រាប់ទិសពីចំណុចលើបន្ទាត់ប្រសិនបើ <InlineMath math="A" /> និង <InlineMath math="B" /> ជាចំណុចលើបន្ទាត់ <InlineMath math="(D)" /> ហើយ <InlineMath math="A ≠ B" /> នោះ <InlineMath math="\overrightarrow{AB}" /> គឺជាវ៉ិចទ័រប្រាប់ទិសនៃ <InlineMath math="(D)" />។ <br/>
        • បន្ទាត់ពីរដែលមានវ៉ិចទ័រប្រាប់ទិសស្របគ្នា គេអាចថាបន្ទាត់ទាំងពីរនោះជាបន្ទាត់ស្របគ្នា។
      </>
    )
  },
}
const VectorDefinition = () => {
  return (
    <div>
      {TOPIC_CONTENT.definition && (
        <DefinitionBox title={TOPIC_CONTENT.definition.title} content={TOPIC_CONTENT.definition.content} />
      )}
      {TOPIC_CONTENT.tip && (
        <TipBox title={TOPIC_CONTENT.tip.title} content={TOPIC_CONTENT.tip.content} />
      )}
      {TOPIC_CONTENT.example && (
        <ExampleBox question={TOPIC_CONTENT.example.question} steps={TOPIC_CONTENT.example.steps} answer={TOPIC_CONTENT.example.answer} />
      )}
      {TOPIC_CONTENT_COMPLEX.definition && (
        <DefinitionBox title={TOPIC_CONTENT_COMPLEX.definition.title} content={TOPIC_CONTENT_COMPLEX.definition.content} />
      )}
      {TOPIC_CONTENT_COMPLEX.tip && (
        <TipBox title={TOPIC_CONTENT_COMPLEX.tip.title} content={TOPIC_CONTENT_COMPLEX.tip.content} />
      )}
      {TOPIC_CONTENT_COMPLEX.example && (
        <ExampleBox question={TOPIC_CONTENT_COMPLEX.example.question} steps={TOPIC_CONTENT_COMPLEX.example.steps} answer={TOPIC_CONTENT_COMPLEX.example.answer} />
      )}
      <ImageBox
              src=" "  // Remove 'public' since Next.js serves from public by default
              imageAlt="ក្រាប"
              explanation={
                <div>
                  ក្នុងក្រាបខាងឆ្វេងនេះ ៖
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    បន្ទាត់ពណ៌ក្រហម និង បន្ទាត់ពណ៌ខៀវមានមេគុណប្រាប់ទិស​ដូចគ្នា។<br />
                    បន្ទាត់ពណ៌បៃតងកាត់បន្ទាត់ទាំងពីរ
                  </ul>
                </div>
              }
            />

    </div>
  )
}

export default VectorDefinition

