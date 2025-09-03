import DefinitionBox from "../../../common/box/DefinitionBox";
import ExampleBox from "../../../common/box/ExampleBox";
import TipBox from "../../../common/box/TipBox";
import ExerciseBox from "../../../common/box/ExerciseBox";
import HintBox from "../../../common/box/HintBox";
import WarningBox from "../../../common/box/WarningBox";
import { ImageBox } from "../../../common/box/explanation-box/ImageExplanationBox";
import { TopicContent } from "@/types/docs/topic";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import { GraphExplanationBox } from "../../../common/box/explanation-box/GraphExplanationBox";

// ===== TOPIC CONTENT DATA =====
const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "ផ្ទៃក្រឡាត្រីកោណ",
    content: (
      <>
        ត្រីកោណ គឺជារាងភ្លោះប្លង់ដែលកើតឡើងពីរចំណុចបី​មិនស្របគ្នា​តភ្ជាប់ដោយបន្ទាត់ត្រង់។ <br />
        លក្ខណៈសំខាន់ៗរបស់ត្រីកោណមានដូចជា៖
        <li>មាន 3 ជ្រុងនិង 3 មុំ</li>
        <li>ផលបូកមុំទាំង 3 គឺ 180 ដឺក្រេ</li>
        <ImageBox
          src="/images/2d-vector/2d-vector-1.png"
          imageAlt="2D Vector"
          explanation={
            <>
              <b>ផ្ទៃក្រឡាត្រីកោណ ABC កំណត់ដោយរូបមន្ត៖</b>
              <BlockMath math={String.raw`S = \frac{1}{2} |\overrightarrow{AB} \times \overrightarrow{AC}|`} />
              <BlockMath math={String.raw`S = \frac{1}{2} |\overrightarrow{BA} \times \overrightarrow{BC}|`} />
              <BlockMath math={String.raw`S = \frac{1}{2} |\overrightarrow{CA} \times \overrightarrow{CB}|`} />
              (<InlineMath math="S" /> ជាបរិមាណផ្ទៃ, ខ្នាតគិតជា <InlineMath math="cm^2" />)
            </>
          }
        />
      </>
    ),
  },
  example: {
    question: (
      <>
        នៅក្នុងតម្រុយអរតូណម៉ាល់់មានទិសដៅវិជ្ជាមាន​ <InlineMath math={"\\vec{i}, \\vec{j}, \\vec{k}"} /> គឲ្យមានចំណុ A(-1,4,4) ; B(1,2,3) និង C(3,2,4) ។<br />
        <b>គណនាផ្ទៃក្រឡានៃត្រីកោណ ABC</b>
      </>
    ),
    steps: [
      {
        title: "គណនាផ្ទៃក្រឡានៃត្រីកោណ ABC",
        content: (
          <>
            គេមានពីរចំណុច <InlineMath math="A(1,4,4)" />, <InlineMath math="B(1,2,3)" />​​ និង <InlineMath math="C(3,2,4)" />​។<br />
            តាមរូបមន្ត​​៖  <InlineMath math="S = \frac{1}{2} |\overrightarrow{AB} \times \overrightarrow{AC}|" />​ <br />
            {/* ​នាំឲ៖​​  <InlineMath math="S = \frac{1}{2} |(0, -2, -1) \times (2, -2, 0)|" />​ <br />
            ​ដូចនេះយើង​បាន៖  <InlineMath math="S = \frac{1}{2} |(-2, -2, 4)|" />​ <br />
            ​នាំឲ៖​​  <InlineMath math="S = \frac{1}{2} \sqrt{(-2)^2 + (-2)^2 + 4^2} = \frac{1}{2} \sqrt{24} = 2\sqrt{6}" />​ */}
          </>
        )
      },
      {
        title: "រកប្រវែងនៃវ៉ិចទ័រ (AB × AC)",
        content: (
          <>
            ដើម្បីរកប្រវែងនៃវ៉ិចទ័រ (AB × AC) យើងត្រូវគណនាផលគុណវ៉ិចទ័រ៖ <br />
            <InlineMath math={String.raw`|\overrightarrow{AB} \times \overrightarrow{AC}| = |(0, -2, -1) \times (2, -2, 0)|`} /> <br /><br />
            <InlineMath math={String.raw`= |(-2, -2, 4)|`} /> <br /><br />
            <InlineMath math={String.raw`= \sqrt{(-2)^2 + (-2)^2 + 4^2}`} /> <br /><br />
            <InlineMath math={String.raw`= \sqrt{4 + 4 + 16} = \sqrt{24} = 2\sqrt{6}`} />
          </>
        )
      },
      {
        title: "ជួសតម្លៃចូលតាមរូបមន្ត",
        content: (
          <>
            យើង​បាន៖​ <InlineMath math="S = \frac{1}{2} \times 2\sqrt{6}" />​ <br /><br />
            ដូចនេះផ្ទៃក្រឡានៃត្រីកោណ ABC គឺ <InlineMath math="= \sqrt{6} cm^2" />។
          </>
        )
      }
    ],
    answer: (<InlineMath math="S = 2\sqrt{6} cm^2" />),
  },
};
const TOPIC_CONTENT_PARALLELOGRAM: TopicContent = {
  definition: {
    title: "ផ្ទៃក្រឡាប្រលេឡូក្រាម",
    content: (
      <>
        ក្រឡាប្រលេឡូក្រាម គឺជាចតុកោណដែលមានជ្រុងទាំងពីរគូទល់គ្នាស្របគ្នានិងប្រវែងស្មើគ្នា។<br />
        លក្ខណៈសំខាន់ៗរបស់ក្រឡាប្រលេឡូក្រាមមានដូចជា៖
        <li>ជ្រុងពីរទល់គ្នាស្របរៀងគ្នា</li>
        <li>​មុំគូទល់គ្នាស្មើគ្នា</li>
        <ImageBox
          src="/images/2d-vector/2d-vector-1.png"
          imageAlt="2D Vector"
          explanation={
            <>
              <b>ផ្ទៃក្រឡាប្រលេឡូក្រាម ABCD កំណត់ដោយរូបមន្ត៖</b>
              <BlockMath math={String.raw`S = b \cdot h`} />
              <BlockMath math={String.raw`S = |\overrightarrow{AB} \times \overrightarrow{AC}|`} />
              <BlockMath math={String.raw`S = |\overrightarrow{AB} \times \overrightarrow{AD}|`} />
              <BlockMath math={String.raw`S = |\overrightarrow{AC} \times \overrightarrow{AD}|`} />
              (​ដែល <InlineMath math="b" />: ជាបាត និង <InlineMath math="h" />: ជាកម្ពស់)
            </>
          }
        />
      </>
    ),
  },
}

const ShapeArea = () => {
  return (
    <div>
      <DefinitionBox title={TOPIC_CONTENT.definition?.title} content={TOPIC_CONTENT.definition?.content} />
      <DefinitionBox title={TOPIC_CONTENT_PARALLELOGRAM.definition?.title} content={TOPIC_CONTENT_PARALLELOGRAM.definition?.content} />
      <ExampleBox question={TOPIC_CONTENT.example?.question} steps={TOPIC_CONTENT.example?.steps} answer={TOPIC_CONTENT.example?.answer} />

    </div>
  )
}

export default ShapeArea
