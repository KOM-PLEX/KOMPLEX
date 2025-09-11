import { TopicContent } from "@/types/topic";
import DefinitionBox from "@/components/pages/docs/common/box/DefinitionBox";
import TipBox from "@/components/pages/docs/common/box/TipBox";
import ExampleBox from "@/components/pages/docs/common/box/ExampleBox";
import WarningBox from "@/components/pages/docs/common/box/WarningBox";
import { ImageBox, ImageBoxProps } from "@/components/pages/docs/common/box/explanation-box/ImageExplanationBox";
import { ThreeDExplanationBox, ThreeDExplanationBoxProps } from "@/components/pages/docs/common/box/explanation-box/3DExplanationBox";
import { BlockMath, InlineMath } from "react-katex"
import 'katex/dist/katex.min.css'


const FirstTopicContent: TopicContent = {
  definition: {
    title: "៤. ជម្រេីសដោយធម្មជាតិ",
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
          <div className="flex flex-col items-start gap-2">
            <p>តាមទ្រឹស្តីវិវត្តរបស់ដាវិន ជម្រើសដោយធម្មជាតិកើតឡើងបានដោយសារកត្តាមួយចំនួនៈ</p>
            <ul className="list-disc ml-4 flex flex-col gap-3">
                <li>ភាវៈរស់បង្កើតកូនចៅច្រើនលើសលុប។</li>
                <li>ភាវៈរស់មានបម្រែបម្រួល គឺមានលក្ខណះថ្មីកើតឡើង។</li>
                <li>ភាវៈរស់ដែលមានបម្រែបម្រួល មានប្រយោជន៍អាចបន្សំនឹងមជ្ឈដ្ឋាន អាចរស់នៅនិងបន្តពូជ ហើយបញ្ជូនលក្ខណះរបស់ខ្លួនទៅសន្ដានក្រោយ។</li>
                <li>ឆ្លងកាត់រយះពេលដ៏យូរ បម្រែបម្រួលមានប្រយោជន៍គរផ្គុំទុកពូជ ឬប្រភេទភាវៈរស់ថ្មី។</li>
            </ul>
          </div>   
      </>
    ),
  },
}


const NaturalSelection = () => {
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
    </div>
  )
}

export default NaturalSelection
