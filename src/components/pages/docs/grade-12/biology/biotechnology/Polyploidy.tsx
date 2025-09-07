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
    title: "៣. ប៉ូលីប្លូអុីឌី",
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
              <li>ជាបាតុភូតដែលធ្វើឲ្យចំនួនក្រូម៉ូសូម កើនឡើងតាមពហុគុណនៃnគឺ 3n,4n,5n...។</li>
              <li>រុក្ខជាតិប៉ូលីប្លូអីឌីមាន ដើម ស្លឹក ផ្កា ផ្លែ មានទំហំធំប្លែក គ្មានគ្រាប់ មានរសជាតិផ្អែម ធន់នឹងជម្ងឺនិងអាកាសធាតុ។</li>
          </ul>
      </>
    ),
  },
  example: {
      question: [
          <div className="flex flex-col items-start gap-3" key="q1">
              <p>ស្រូវសាលី ពោត កប្បាស ត្រកួន ឪឡឹក ប៉ោម ទំពាំងបាយជូរ...ជាតេត្រាប្លូអ៊ុត។</p>
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


const Polyploidy = () => {
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
    </div>
  )
}

export default Polyploidy
