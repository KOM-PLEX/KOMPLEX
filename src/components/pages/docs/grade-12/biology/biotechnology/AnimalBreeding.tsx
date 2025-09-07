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
    title: "ក. ការបង្កាត់ជិត",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  tip: {
    title: "ចំណាំ",
    content: (
      <>
          <ul className="list-disc ml-4 flex flex-col gap-3">
              <li>ការបង្កាត់ជិត គឺជាការបង្កាត់សត្វ ដែលកើតចេញពីមេបាមួយគូឬរវាងមេបានិងកូនរបស់វា។</li>
              <li>ផ្តល់សន្តានក្រោយមានកម្លាំងជីវិតខ្សោយ លទ្ធភាពបន្តពូជថយចុះ បង្កើតភាពមិនប្រក្រតីនៃក្រូម៉ូសូម នាំទៅរកការផុតពូជ។</li>
              <li>អាចបង្កើតនិងរក្សានូវពូជសុទ្ធ ចំពោះលក្ខណះអន់ដែលគេចង់បាន។</li>
              <li>ការបង្កាត់ជិតធ្វើឡើងចំពោះសត្វដែលគេចិញ្ចឹមដូចជា គោ ក្របី ឆ្កែ ឆ្មា ជាដើម។</li>
          </ul>
      </>
    ),
  },
  example: {
      question: [
          <div className="flex flex-col items-start gap-3" key="q1">
              
          </div>,
      ],
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

const SecondTopicContent: TopicContent = {
  definition: {
    title: "ខ. ការបង្កាត់ឆ្ងាយ",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  tip: {
    title: "ចំណាំ",
    content: (
      <>
          <ul className="list-disc ml-4 flex flex-col gap-3">
              <li>ការបង្កាត់រវាងមេបាពូជខុសគ្នា ឬប្រភេទខុសគ្នា ឬសែស្រឡាយឆ្ងាយដាច់ពីគ្នា។</li>
              <li>ផ្តល់អីប្រ៊ីតមានកម្លាំងជីវិតខ្លាំង ធន់នឹងជម្ងឺ ឆាប់លូតលាស់បានល្អ ផ្តល់ទិន្នផលខ្ពស់។</li>
              <li>អារ មិនអាចបង្កកំណើតបាន(ករណីមេបាមានប្រភេទខុសគ្នា) ។</li>
          </ul>
      </>
    ),
  },
  example: {
      question: [
          <div className="flex flex-col items-start gap-3" key="q1">
              <p>សេះញីបង្កាត់ជាមួយលាឈ្មោលទទួលបានមុយលេ(មុយលេជាអុីប្រ៊ីតអារ)។</p>
          </div>,
      ],
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


const AnimalBreeding = () => {
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
                    <ExampleBox question={FirstTopicContent.example.question} />
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
                {SecondTopicContent.tip && (
                    <TipBox title={SecondTopicContent.tip.title} content={SecondTopicContent.tip.content} />
                )}
                {SecondTopicContent.example && (
                    <ExampleBox question={SecondTopicContent.example.question} />
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

export default AnimalBreeding
