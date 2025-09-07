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
    title: "៤.១ បច្ចេកវិទ្យាក្នុងការផលិត",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  imageExplanation: [
      {
          title: "ក្នុងវិស័យសុខាភិបាល",
          src: "/docs/grade-12/biology/adn/",
          imageAlt: "",
          explanation: [
              
          ],
      },
      {
          title: "ក្នុងវិស័យកសិកម្ម",
          src: "/docs/grade-12/biology/adn/",
          imageAlt: "",
          explanation: [
              
          ],
      },
      {
          title: "ក្នុងវិស័យបរិស្ថាន",
          src: "/docs/grade-12/biology/adn/",
          imageAlt: "",
          explanation: [
              
          ],
      },
      {
          title: "ក្នុងវិស័យឧស្សាហកម្មស្បៀង",
          src: "/docs/grade-12/biology/adn/",
          imageAlt: "",
          explanation: [
              
          ],
      },
    ]
}


const GeneticEngineering = () => {
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

export default GeneticEngineering
