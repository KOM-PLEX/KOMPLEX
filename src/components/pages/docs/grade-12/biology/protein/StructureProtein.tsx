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
    title: "១. រូបផ្គុំរបស់ប្រូតេអុីន",
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
          <ul className="list-disc ml-4 flex flex-col gap-3">
               <li>ប្រូតេអ៊ុន ជាប៉ូលីមែនៃអាស៊ីតអាមីនេ ដែលកើតឡើងពីច្រវាក់ប៉ូលីប៉ិបទីតមួយ ឬច្រើន ហើយមានអាស៊ីតអាមីនេលើសពី៥០ឡើងទៅ។</li>
               <li>ម៉ូលេគុលដែលទាបបំផុត មានអាស៊ីតអាមីនេតិចជាង៥០ហៅថាប៉ូលីប៉ិបទីត។</li>
          </ul>
      </>
    ),
  },
  imageExplanation: [
      {
          title: "",
          src: "/docs/grade-12/biology/mixs/",
          imageAlt: "",
          explanation: [
              
          ],
      },
    ]
}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "១.១ ទម្រង់ទី១",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  imageExplanation: [
      {
          title: "",
          src: "/docs/grade-12/biology/mixs/",
          imageAlt: "",
          explanation: [
              "ទម្រង់ទី១ របស់ប្រូតេអ៊ីន កើតឡើងពីអាស៊ីតអាមីនេសុទ្ធ។",
              "ទម្រង់ទី១ ខុសគ្នាដោយសារ តំណលំដាប់(ចំនួនប្រភេទ ទីតាំង) អាស៊ីតអាមីនេ។",
          ],
      },
    ]
}



const StructureProtein = () => {
  return (
    <div>
          <div>
                {FirstTopicContent.definition && (
                  <DefinitionBox title={FirstTopicContent.definition.title} content={FirstTopicContent.definition.content} />
                )}
                {FirstTopicContent.tip && (
                    <TipBox title={FirstTopicContent.tip.title} content={FirstTopicContent.tip.content} />
                )}
                {FirstTopicContent.imageExplanation &&
                    Array.isArray(FirstTopicContent.imageExplanation) &&
                    FirstTopicContent.imageExplanation.map((image: ImageBoxProps, index: number) => (
                        <ImageBox key={index} title={image.title} src={image.src} imageAlt={image.imageAlt} explanation={image.explanation} />
                ))} 
            </div>    
            <div>
                {SecondTopicContent.definition && (
                  <DefinitionBox title={SecondTopicContent.definition.title} content={SecondTopicContent.definition.content} />
                )}
                {SecondTopicContent.imageExplanation &&
                    Array.isArray(SecondTopicContent.imageExplanation) &&
                    SecondTopicContent.imageExplanation.map((image: ImageBoxProps, index: number) => (
                        <ImageBox key={index} title={image.title} src={image.src} imageAlt={image.imageAlt} explanation={image.explanation} />
                ))} 
            </div>            
    </div>
  )
}

export default StructureProtein
