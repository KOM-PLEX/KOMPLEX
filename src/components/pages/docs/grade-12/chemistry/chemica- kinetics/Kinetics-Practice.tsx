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
            <div className="flex flex-col gap-4 items-start text-[13px]">
                <p>គេឲគុរេដុក <InlineMath math="E^{0} (H_{2}O_{2}/ H_{2}O ) = 1.77  V , E^{0} (I_{2}/ I^{-}) = 0.54 V" /></p>
                <p>ក. សរសេរសមីការតុល្យការនៃប្រតិកម្មរវាងគូរេដុកទាំងពីរខាងលេី ។</p>
                <p>ខ. សរសេររូបមន្តតាងប្រតិកម្មល្បឿនមធ្យមកំណឌីអ៊ីយ៉ូត <InlineMath math="(I_{2})" /> នៅចន្លោះពេល <InlineMath math="t_{1} , t_{2}" /> ។</p>
                <p>គ. តេីសម្ពាធអាចធ្វេីឲល្បឿនប្រតិកម្មខាងលេីប្រែប្រួលបានឬទេ ? ព្រោះអ្វី ?</p>
            </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          
        </div>,
      ]
    },
    {
      id: "ex2",
      title: "លំហាត់ទី ២",
      description: "លំហាត់ទី ២",
      problemType: "Second Exercise",
      problems: [
            <div className="flex flex-col gap-4 items-start text-[13px]">
                <p>គេមានប្រតិកម្ម ៖ <InlineMath math="ClO^{-} + 2H^{+} + 2I^{-} \rightleftharpoons Cl^{-} + I_{2} + 2H_{2}O" /></p>
                <p>ក-តើប្រភេទគីមីណាខ្លះជាអុកស៊ីតករ និងប្រភេទគីមីណាជារេដុករ ?</p>
                <p>ខ-សរសេរគូរេដុកដែលចូលរួមប្រតិកម្មខាងលើ និង សរសេរកន្លះសមីការនៃគូរេដុកនោះ។</p>
                <p>គ-នៅខណៈ t កំណត់មួយល្បឿនខណៈកំណត់ <InlineMath math="Cl^{-}" /> ស្មើ  <InlineMath math="2 \cdot 10^{-2} M/s" /> ។ នៅខណៈដូចគ្នា ទាយរកល្បឿនបំបាត់ H⁺ ។</p>
            </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          
        </div>,
      ]
    },
    {
      id: "ex3",
      title: "លំហាត់ទី ៣",
      description: "លំហាត់ទី ៣",
      problemType: "Third Exercise",
      problems: [
            <div className="flex flex-col gap-4 items-start text-[13px]">
                <p>ថ្មកំបោរ <InlineMath math="CaCO_{3}" /> ប្រតិកម្មជាមួយ HCl តាមសមីការ</p>
                <InlineMath math="CaCO_{3} + 2HCl \rightarrow CaCl_{2} + H_{2}O + CO_{2}" />
                <p>នៅខណៈ t = 15 s កំហាប់ <InlineMath math="CaCO_{3}" /> កើតបាន <InlineMath math="1.8 \cdot 10^{-3} M" /> និងនៅខណៈ t = 30 s កំហាប់ <InlineMath math="CaCl_{2}" /> កើតបាន <InlineMath math="3.13 \cdot 10^{-3} M" /> គណនាល្បឿនមធ្យមកំណ <InlineMath math="CaCl_{2}" />នៅចន្លោះខាងលើ ។  </p>
            </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          
        </div>,
      ]
    }, 
    {
      id: "ex4",
      title: "លំហាត់ទី ៤",
      description: "លំហាត់ទី ៤",
      problemType: "Fourth Exercise",
      problems: [
            <div className="flex flex-col gap-4 items-start text-[13px]">
                <p>ប្រតិកម្មរេដុកមួយតាងដោយសមីការតុល្យការ <InlineMath math="2MnO_{4} + 5H_{2}C_{2}O_{4} + 6H^{+} \rightleftharpoons 2Mn^{2+} + 10CO_{2} + 8H_{2}O" /> </p>
                <p>១.ចូរសរសេរគូរេដុកដែលមានក្នុងសមីការតុល្យការនៃប្រតិកម្ម ។ តើប្រតិកម្មនេះអាចចាត់ ទុកជាប្រតិកម្មស្វ័យកាតាលីសបានដែរឬទេ ? ព្រោះអ្វី ?</p>
                <p>២.នៅចន្លោះពេល 20mn គេសង្កេតឃើញអ៊ីយ៉ុង <InlineMath math="MnO_{4}" />ចូលប្រតិកម្មអស់ <InlineMath math="6 \cdot 10^{-3} M" /> ។ គណនាល្បឿនមធ្យមកំណអ៊ីយ៉ុង <InlineMath math="Mn^{2+}" />នៅចន្លោះពេលខាងលើ ។</p>
                <p>៣.បើគេបន្ថែមកំហាប់អាស៊ីត <InlineMath math="H_{2}C_{2}O_{4}" /> ទៅក្នុងប្រតិកម្មខាងលើ តើល្បឿនប្រតិកម្មប្រែប្រួលដូចម្តេច?</p>
            </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          
        </div>,
      ]
    },   
    {
      id: "ex5",
      title: "លំហាត់ទី ៥",
      description: "លំហាត់ទី ៥",
      problemType: "Fifth Exercise",
      problems: [
            <div className="flex flex-col gap-4 items-start text-[13px]">
                <p>គេលាយមាឌស្មើគ្នា (25 mL) កំហាប់ដូចគ្នា <InlineMath math="(2 \cdot 10^{-2}) M" />នៃសូ.ពីរ មួយជាសូ. KI មួយទៀត ជាសូ. <InlineMath math="K_{2}S_{2}O_{3}" />ទៅក្នុងកែវមួយនៅសីតុ.ធម្មតា។ រយៈពេលប្រហែល ១នាទីមានពណ៌លេចឡើងក្នុងសូ. ។</p>
                <p>ក. តើប្រភេទគីមីណាដែលទទួលអុកស៊ីតកម្ម ហើយដោយអុកស៊ីតករណា ។</p>
                <p>ខ. ចូរសរសេរសមីការតុល្យការ (1) នៃប្រតិកម្មរវាងគូរេដុក <InlineMath math="S_{2}O_{8}^{2-} / SO_{4}^{2-} , I_{2}/I^{-}" /> </p>
                <p>គ. ប្រតិកម្មអុកស៊ីដូរេដុកម្មដូចតទៅជាប្រតិកម្មលឿន៖</p>
                <InlineMath math="2Fe^{3+} + 2I^{-} \rightarrow 2Fe^{2+} + I_{2} (2)" />
                <InlineMath math="2Fe^{2+} + S_{2}O_{8}^{2-} \rightarrow 2Fe^{3+} + 2SO_{4}^{2-} (3)" />
                <p>បង្ហាញថាអ៊ីយ៉ុង <InlineMath math="Fe^{2+}" /> និង <InlineMath math="Fe^{3+}" /> ជាកាតាលីករនៃប្រតិកម្ម (1)</p>
                <InlineMath math="E^{0} = S_{2}O_{8}^{2-} / SO_{4}^{2-} = 2.01 V ,  E^{0}= I_{2}/I^{-} = 0.54 V" />
            </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          
        </div>,
      ]
    },  
    {
      id: "ex6",
      title: "លំហាត់ទី ៦",
      description: "លំហាត់ទី ៦",
      problemType: "Sixth Exercise",
      problems: [
            <div className="flex flex-col gap-4 items-start text-[13px]">
                <p>គេឱ្យប៉ូតង់ស្យែលស្តង់ដានៃគូរេដុកដូចតទៅ៖ </p>
                <InlineMath math="MnO_{4}^{-} / Mn^{2+} : E^{0} = 1.51 V និង O_{2} / H_{2}O_{2} : E^{0} = 0.68 V" />
                <p>ក. ចូរសរសេរសមីការប្រតិកម្មកើតឯងរវាងគូទាំងពីរ។</p>
                <p>ខ. ល្បឿនកំណអឺយ៉ុង  <InlineMath math="Mn^{2+}" />នៅខណៈ t គឺ  <InlineMath math="2 \cdot 10^{-5} M" />ទាញរកល្បឿនកំណ <InlineMath math="O_{2}" /> ។ </p>
                <p>គ. បើគេបន្ថែមកំហាប់ <InlineMath math="H^{+}" /> ទៅក្នុងប្រតិកម្ម តើល្បឿនប្រតិកម្មប្រែប្រួលដូចម្តេច? ព្រោះអ្វី?។</p>
            </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          
        </div>,
      ]
    }, 
    {
      id: "ex7",
      title: "លំហាត់ទី ៧",
      description: "លំហាត់ទី ៧",
      problemType: "Seventh Exercise",
      problems: [
            <div className="flex flex-col gap-4 items-start text-[13px]">
                <p>ចូរសរសេរសមីការតុល្យការនៃប្រតិកម្ម បើគេឱ្យគូរេដុកនីមួយៗ៖</p>
                <p>ក. <InlineMath math="Cr_{2}O / Cr^{3+} E^{0} = 1.33 V និង NO_{3}^{-}/NO E^{0} = 0.96 V" /></p>
                <p>ខ. <InlineMath math="S_{2}O_{3}^{2-} / S E^{0} = 0.5 V និង SO_{2}/S_{2}O_{3}^{2-} E^{0} = 0.4 V" /></p>
                <p>គ. តើប្រតិកម្មណាមួយជាប្រតិកម្មឌីស្មូតកម្ម? ព្រោះអ្វី?</p>
                <p>ឃ. ចូរបកស្រាយកត្តាពីរយ៉ាងដើម្បីបង្កើនល្បឿនប្រតិកម្មរវាង <InlineMath math="CaCO_{3} " />ជាមួយសូលុយស្យុង HCl (aq) ក្នុងករណីកំហាប់ HCI ថេរ។</p>
            </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          
        </div>,
      ]
    },
    {
      id: "ex8",
      title: "លំហាត់ទី ៨",
      description: "លំហាត់ទី ៨",
      problemType: "Eighth Exercise",
      problems: [
            <div className="flex flex-col gap-4 items-start text-[13px]">
                <p>ថ្មកំបោរអាចមានអំពើជាមួយអាស៊ីតក្លរីឌ្រិចតាមសមីការតុល្យការៈ</p>
                <InlineMath math="CaCO_{3} + 2H^{+} \rightarrow Ca^{2+} + CO_{2} + H_{2}O" />
                <p>នៅខណៈ t = 0s កំហាប់អីយ៉ុង <InlineMath math="Ca^{2+}" /> មានតម្លៃស្មើសូន្យ ។ នៅខណៈt=15s កំហាប់អីយ៉ុង <InlineMath math="Ca^{2+}" /> កើតឡើងស្មើ <InlineMath math="3.13 \cdot 10^{-3} M" /></p>
                <p>ក. តើប្រភេទគីមីណាខ្លះជាអង្គធាតុប្រតិករ និងប្រភេទគីមីណាខ្លះជាអង្គធាតុកកើត ?</p>
                <p>ខ. គណនាល្បឿនមធ្យមកំណអីយ៉ុង<InlineMath math="Ca^{2+}" /> នៅចន្លោះពេល 15s និង 30s</p>
                <p>គ. ចូរទាញរកល្បឿនមធ្យមបំបាត់អីយ៉ុង <InlineMath math="H^{+}" /> ។</p>
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
