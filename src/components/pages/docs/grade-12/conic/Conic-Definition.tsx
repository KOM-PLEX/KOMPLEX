import DefinitionBox from "../../common/box/DefinitionBox";
import ExampleBox from "../../common/box/ExampleBox";
import TipBox from "../../common/box/TipBox";
import ExerciseBox from "../../common/box/ExerciseBox";
import HintBox from "../../common/box/HintBox";
import WarningBox from "../../common/box/WarningBox";
import { ImageBox } from "../../common/box/explanation-box/ImageExplanationBox";
import { TopicContent } from "@/types/topic";
import Graph from "../../../../helper/Graph";
import { BlockMath, InlineMath } from "react-katex";
import { GraphExplanationBox } from "../../common/box/explanation-box/GraphExplanationBox";

const ConicDefinition = () => {
  const TOPIC_CONTENT: TopicContent = {
    definition: {
      title: "តើកោនិកគឺជាអ្វី?",
      content: "កោនិក គឺជាសំណុំចំណុចដែលបំពេញលក្ខខណ្ឌមួយពាក់ព័ន្ធនឹងចម្ងាយពីចំណុចថេរ និងបន្ទាត់ថេរ។"
    },
    tip: {
      title: "ចំណុចសំខាន់ៗ",
      content: (
        <>
        • កោនិកមានបីប្រភេទសំខាន់ៗ៖ ប៉ារ៉ាបូល អេលីប និងអុីពែបូល។ <br />
        • កោនិកកើតឡើងពីការកាត់រង្វង់នៃប៉ូលីនីមាត្រដែលមានទិសផ្សេងៗ។ <br />
        • កោនិកអាចកំណត់ដោយសមីការគណិតវិទ្យា។ <br />
        • កោនិកមានលក្ខណៈពិសេសពាក់ព័ន្ធនឹងចម្ងាយពីចំណុចថេរ (កំណុំ) និងបន្ទាត់ថេរ (បន្ទាត់ប្រាប់ទិស)។ <br />
        • កោនិកត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយក្នុងគណិតវិទ្យា និងវិទ្យាសាស្ត្រផ្សេងៗ។ <br /> <br />
        ចំណុចគួរដឹងអំពីកោនិកក្នុងការប្រើប្រាស់ក្នុងជីវិតប្រចាំថ្ងៃ៖ <br />
        • អេលីប៖ ប្រើសម្រាប់ផ្លូវដំណើររបស់ភព និងផ្ទាំងសម្លេង (Elliptical Orbits, Whispering Galleries) <br />
        • ប៉ារ៉ាបូល៖ ប្រើសម្រាប់ចានបង្ហាញសញ្ញាផ្កាយរណប និងកាំបិតបាញ់ទឹក <br />
        • អុីពែបូល៖ ប្រើសម្រាប់ផ្លូវដំណើររបស់ភពដែលគេចេញពីប្រព័ន្ធសូឡា

        </>
       )
    },
    graphExplanation: {
      expressions: [
        { id: 'ellipse', latex: '\frac{x^2}{9} + \frac{y^2}{4} = 1', color: '#2d6cdf' },
        { id: 'parabola', latex: 'y = x^2', color: '#eab308' },
        { id: 'hyperbola', latex: '\frac{x^2}{9} - \frac{y^2}{4} = 1', color: '#c026d3' }
      ],
      explanation: (
        <>
        កោនិកមានបីប្រភេទសំខាន់ៗទាំងនេះខុសគ្នាតាម ទិសផ្ទៃរាបកាត់កោនិច៖ <br />
        •  អេលីប (Ellipse): កើតឡើងពេលផ្ទៃរាបកាត់កោនិចមិនឆ្លងកាត់កំពូលទេ។ <br />
        •  ប៉ារ៉ាបូល (Parabola): កើតឡើងពេលផ្ទៃរាបកាត់កោនិចស្របនឹងបន្ទាត់ប៉ូលីនីមាត្រ។ <br />
        •  អុីពែបូល (Hyperbola): កើតឡើងពេលផ្ទៃរាបកាត់កោនិចឆ្លងកាត់ទាំងពីរប្រសព្វ។ <br />
        </>
      )
    },
    hint: {
        content: "ពេលសិក្សាអំពីកោនិក ត្រូវចាប់អារម្មណ៍លើទម្រង់សមីការនីមួយៗ ដើម្បីសម្គាល់ប្រភេទ។"
      },
    warning: {
      content: "កុំច្រឡំរវាងអេលីប ប៉ារ៉ាបូល និងអុីពែបូល។ សូមពិនិត្យសមីការឱ្យម៉ត់ចត់។"
    }
  }
 
  return (
    <>
      {TOPIC_CONTENT.definition && (
          <DefinitionBox title={TOPIC_CONTENT.definition.title} content={TOPIC_CONTENT.definition.content} />
      )}

      {TOPIC_CONTENT.tip && (
          <TipBox title={TOPIC_CONTENT.tip.title} content={TOPIC_CONTENT.tip.content} />
      )}

      {TOPIC_CONTENT.example && (
          <ExampleBox question={TOPIC_CONTENT.example.question} steps={TOPIC_CONTENT.example.steps} answer={TOPIC_CONTENT.example.answer} />
      )}

      {TOPIC_CONTENT.exercise && (
          <ExerciseBox questions={TOPIC_CONTENT.exercise.questions} />
      )}

      {TOPIC_CONTENT.hint && (
          <HintBox content={TOPIC_CONTENT.hint.content} />
      )}

      {TOPIC_CONTENT.warning && (
          <WarningBox content={TOPIC_CONTENT.warning.content} />
      )}

      {TOPIC_CONTENT.graphExplanation && (
          <GraphExplanationBox expressions={TOPIC_CONTENT.graphExplanation.expressions} explanation={TOPIC_CONTENT.graphExplanation.explanation} />
      )}
  </>
  )
}

export default ConicDefinition;