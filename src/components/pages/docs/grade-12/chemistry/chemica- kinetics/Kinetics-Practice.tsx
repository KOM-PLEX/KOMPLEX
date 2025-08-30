import TopicPracticeBox from "../../../common/box/TopicPracticeBox";
import { BlockMath, InlineMath } from "react-katex";
import 'katex/dist/katex.min.css';
import HintBox from "../../../common/box/HintBox";
import SummaryBox from "../../../common/box/SummaryBox";
import { AlertTriangleIcon, BookAIcon, ChartBarIcon, LightbulbIcon, WrenchIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/topic";
import { div } from "three/tsl";
import { p } from "framer-motion/client";

const Acid_base_practice = () => {


  const summary: SummarySection[] = [
    {
      key: "formulas",
      title: "មាត្រដ្ឋាន pH",
      icon: BookAIcon,
      content: (
        <div className="text-[13px] flex flex-col items-start gap-4" key={"f2"}>
            <InlineMath math="pH = -log[H_{3}O^{+}]" />
            <InlineMath math="[H_{3}O^{+}] = 10^{-pH}" />
            <InlineMath math="pOH = -log[OH^{-}]" />
            <InlineMath math="[OH^{-}] = 10^{-pOH}" />
        </div>
      )
    },
  ];



  const practiceExercises: PracticeExercise[] = [
    {
      id: "ex1",
      title: "លំហាត់ទី ១",
      description: "លំហាត់ទី ១",
      problemType: "First Exercise",
      problems: [
            <div className="flex flex-col gap-4 items-start">
                <p>គេឲគុរេដុក <InlineMath math="E^{0} (H_{2}O_{2}/ H_{2}O ) = 1.77  V , E^{0} (I_{2}/ I^{-}) = 0.54 V" /></p>
                <p>ក. សរសេរសមីការតុល្យការនៃប្រតិកម្មរវាងគូរេដុកទាំងពីរខាងលេី ។</p>
                <p>ខ. សរសេររូបមន្តតាងប្រតិកម្មល្បឿនមធ្យមកំណឌីអ៊ីយ៉ូត <InlineMath math="(I_{2})" /> នៅចន្លោះពេល <InlineMath math="t_{1} , t_{2}" /> ។</p>
                <p>គ. តេីសម្ពាធអាច ។</p>
            </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          
        </div>,
      ]
    },   
  ];

  return (
    <>
      <SummaryBox
            title="រូបមន្តសំខាន់ៗ"
            sections={summary}
          />
      <TopicPracticeBox exercises={practiceExercises} />
    </>
  );
}

export default Acid_base_practice
