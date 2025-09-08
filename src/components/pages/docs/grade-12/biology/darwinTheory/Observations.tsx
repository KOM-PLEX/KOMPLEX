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
    title: "១. ការសង្កេតរបស់ដាវិន",
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
              <li>ដាវិនសង្កេតឃើញភាវៈរស់ប្លែកៗ</li>
              <li>ផូស៊ីលសត្វខ្លះមានលក្ខណះខុសប្លែកពីសត្វសព្វថ្ងៃ ហើយខ្លះទៀតក៏មានលក្ខណះដូចសត្វសព្វថ្ងៃខ្លះដែរ។</li>
              <li>នៅប្រជុំកោះកាឡាប៉ាកូសភាវៈរស់មានលក្ខណះប្លែកៗ ខុសគ្នាពីកោះមួយទៅកោះមួយទៀត។</li>
              <li>លក្ខណះនីមួយៗ ជាលក្ខណះបណ្ដុំនៃភាវៈរស់នៅក្នុងមជ្ឈដ្ឋានមួយ។</li>
              <li>សត្វនៅលើកោះកាឡាប៉ាកូស មានលក្ខណះដូចគ្នាខ្លះជាមួយសត្វនៅលើទ្វីបអាមេរិចខាងត្បូង។</li>
              <li>ដាវិនសន្និដ្ឋានថា សត្វនៅលើកោះមានដើមកំណើតពីសត្វនៅលើទ្វីប។</li>
          </ul>
      </>
    ),
  },
    imageExplanation: [
      {
          title: "",
          src: "/docs/grade-12/biology/adn/",
          imageAlt: "",
          explanation: [
              
          ],
      },
    ]
}


const Observations = () => {
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
    </div>
  )
}

export default Observations
