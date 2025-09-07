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
    title: "ផលវិបាកនៃវិស្វកម្មសេនេទិច",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  imageExplanation: [
      {
          title: "គ្រោះថ្នាក់ប៉ះពាល់ដល់បរិស្ថាន",
          src: "/docs/grade-12/biology/adn/",
          imageAlt: "",
          explanation: [
              "រុក្ខជាតិGMធ្វើឲ្យបាត់បង់ដល់ជីវិតជីវចម្រុះ។",
              "សត្វល្អិតធន់នឹងរុក្ខជាតិ GM មានសកម្មភាពជាតិពុលដូចរុក្ខជាតិ GM ធ្វើឲ្យរុក្ខជាតិឈ្មោលអារមិនអាចផលិតគ្រាប់លំអងសម្រាប់បន្តពូជ។"
          ],
      },
      {
          title: "គ្រោះថ្នាក់ដល់សុខភាព",
          src: "/docs/grade-12/biology/adn/",
          imageAlt: "",
          explanation: [
              "",
              ""
          ],
      },
      {
          title: "ប៉ះពាល់សីលធម៌ និងសង្គម",
          src: "/docs/grade-12/biology/adn/",
          imageAlt: "",
          explanation: [
              "",
              ""
          ],
      },
      {
          title: "គ្រោះថ្នាក់ប៉ះពាល់ដល់សេដ្ឋកិច្ច",
          src: "/docs/grade-12/biology/adn/",
          imageAlt: "",
          explanation: [
              ""
          ],
      },
    ]
}


const Dangers = () => {
  return (
    <div>
          <div>
                {FirstTopicContent.definition && (
                  <DefinitionBox title={FirstTopicContent.definition.title} content={FirstTopicContent.definition.content} />
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

export default Dangers
