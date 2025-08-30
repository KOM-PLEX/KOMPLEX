import TopicPracticeBox from "../../../common/box/TopicPracticeBox";
import { BlockMath, InlineMath } from "react-katex";
import 'katex/dist/katex.min.css';
import HintBox from "../../../common/box/HintBox";
import SummaryBox from "../../../common/box/SummaryBox";
import { AlertTriangleIcon, BookAIcon, ChartBarIcon, LightbulbIcon, WrenchIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/topic";
import { div } from "three/tsl";
import { p, span } from "framer-motion/client";

const EquilibriumPractice = () => {


  const summary: SummarySection[] = [
    {
      key: "formulas",
      title: "ចំណុចសមមូលអាសុីតបាស",
      icon: BookAIcon,
      content: (
        <div className="text-[13px]" key={"f1"}>
        </div>
      )
    },
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
            <div className="text-[13px]">
                 <p>គេមានប្រតិកម្ម <InlineMath math="N_{2} (g) + 3H_{2} (g) \rightleftharpoons 2NH_{3} (g)" /> ដែលមានលំនឹងនៅសីតុ, 773 K និងមានតម្លៃថេរលំនឹង k=0,286 ។
                    សរសេរកន្សោមថេរលំនឹង K និងគណនាកំហាប់របស់ឌីអាសូត នៅពេលមានលំនឹង ដោយដឹងថានៅពេលមាន លំនឹងនេះ
                    <InlineMath math="[H_{2}] = 0.42 mol/L" /> និង <InlineMath math="[NH_{3}] = 0.113 mol/L" />។
                </p>
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
            <div className="text-[13px]">
            <p>គេមានប្រតិកម្ម :  <InlineMath math="H_{2} (g) + Cl_{2} (g) \rightleftharpoons 2HCl (g)" />ដែលមានលំនឹងនៅសីតុណ្ហភាព
            1227°C ។ កំហាប់អង្គធាតុនៅពេលមានលំនឹងគីមី <InlineMath math="[H_{2}] = [Cl_{2}] = 4.5 \cdot 10^{-3} M" /> និង <InlineMath math="[HCl] = 62.5 \cdot 10^{-3} M" />។ ចូរគណនាតម្លៃថេរលំនឹង K ។</p>
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
      description: "ចូរព្យាករណ៍ទិសដៅរំកិលលំនឹងនៃប្រព័ន្ធនេះកាលណា គេបង្កេីនសម្ពាធលេីវា",
      problemType: "Third Exercise",
      problems: [
            <span className='text-[13px]'><InlineMath math="3O_{2} (g) \rightleftharpoons 2O_{3} (g)" /></span>,
            <span className='text-[13px]'><InlineMath math="H_{2} (g) + Cl_{2} (g) \rightleftharpoons 2HCl (g)" /></span>,
            <span className='text-[13px]'><InlineMath math="2N_{2} (g) + O_{2} \rightleftharpoons 2N_{2}O (g)" /></span>,
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
            
        </div>,
      ]
    },
    {
      id: "ex4",
      title: "លំហាត់ទី ៤",
      description: "ចូរព្យាករណ៍ទិសដៅរំកិលលំនឹងនៃប្រព័ន្ធនេះកាលណា គេបន្ថយសម្ពាធលេីវា",
      problemType: "Fourth Exercise",
      problems: [
            <span className='text-[13px]'><InlineMath math="2H_{2}O (aq) \rightleftharpoons 2H_{2}O (l) + O_{2} (g)" /></span>,
            <span className='text-[13px]'><InlineMath math="NH_{4}Cl (s) \rightleftharpoons NH_{3} (g) + HCl (g)" /></span>,
            <span className='text-[13px]'><InlineMath math="N_{2} (g) + O_{2} (g) \rightleftharpoons 2N_{2}O (g)" /></span>,
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
            
        </div>,
      ]
    },
    {
      id: "ex5",
      title: "លំហាត់ទី ៥",
      description: "តេីលំនឹងនីមួយៗរំកិលទៅទិសដៅណាមួយ ?",
      problemType: "Fifth Exercise",
      problems: [
          <div className="text-[13px] flex flex-col items-start gap-3">
              <p>ក. បេីគេរំដោះ <InlineMath math="O_{2} " />ចេញពីប្រព័ន្ធ</p>
              <span className='text-[12px]'><InlineMath math="4NH_{3} (g) + 5O_{2} (g) \rightleftharpoons 4NO (g) + 6H_{2}O (g)" /></span>
          </div>,
          <div className="text-[13px] flex flex-col items-start gap-3">
              <p>ខ. បេីគេបន្ថែម <InlineMath math="O_{2} " />ចេញពីប្រព័ន្ធ</p>
              <span className='text-[12px]'><InlineMath math="2Cl_{2} (g) + O_{2} (g) \rightleftharpoons 2ClO_{2} (g)" /></span>
          </div>,
          <div className="text-[13px] flex flex-col items-start gap-3">
              <p>ក. បេីគេបន្ថែម <InlineMath math="C" />ឲទៅប្រព័ន្ធ</p>
              <span className='text-[12px]'><InlineMath math="C (s) + \frac{1}{2}O_{2} (g) \rightleftharpoons CO (g)" /></span>
          </div>,

      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
            
        </div>,
      ]
    },
    {
      id: "ex6",
      title: "លំហាត់ទី ៦",
      description: "តេីលំនឹងប្រែប្រួលដូចម្តេចបេីគេឲប្រព័ន្ធលំនឹងនីមួយៗរងនូវបុព្វហេតុដូចខាងក្រោម ?",
      problemType: "Sixth Exercise",
      problems: [
          <div className="text-[13px] flex flex-col items-start gap-3">
              <p>ក. បង្កេីនកម្តៅប្រព័ន្ធ</p>
              <span className='text-[12px]'><InlineMath math="CO (g) + H_{2}O (g) \rightleftharpoons CO (g) + H_{2} (g) + កម្តៅ" /></span>
          </div>,
          <div className="text-[13px] flex flex-col items-start gap-3">
              <p>ខ. បន្ថែមកាតាលីករឲប្រព័ន្ធ</p>
              <span className='text-[12px]'><InlineMath math="CH_{4} (g) + H_{2}O (g) \rightleftharpoons CO (g) + 3H_{2} (g)" /></span>
          </div>,
          <div className="text-[13px] flex flex-col items-start gap-3">
              <p>គ. បេីគេបន្ថែមឧស្ម័ន <InlineMath math="CO_{2}" /> ឲទៅប្រព័ន្ធ</p>
              <span className='text-[12px]'><InlineMath math="CaCO_{3} (s) + H_{2}O (l) + CO_{2} (g) \rightleftharpoons Ca(HCO_{3})_{2} (aq)" /></span>
          </div>,
          <div className="text-[13px] flex flex-col items-start gap-3">
              <p>ឃ. បញ្ចុះសីតុណ្ហភាពប្រព័ន្ធ</p>
              <span className='text-[12px]'><InlineMath math="2SO_{2} (g) + O_{2} (g) \rightleftharpoons 2SO_{3} (g) + កម្តៅ" /></span>
          </div>,

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
            <div className="text-[13px] flex flex-col gap-3 items-start">
                <p>ចូររកអត្តសញ្ញាណអ៊ីយ៉ុងរួមចំពោះស្ថានភាពលំនឹងនៃប្រព័ន្ធដូចខាងក្រោម ។</p>
                <p>ក. គេបន្ថែម NaCl 10g ទៅក្នុងសូលុយស្យុងអាស៊ីតក្លរីឌ្រិច ដែលមានកំហាប់ 1 M </p>
                <p>ខ. គេបន្ថែមសូលុយស្យុង HCOONa ចំនួន 100mL នៅកំហាប់ 2M ទៅក្នុងសូលុយស្យុងHCOOH ដែលមានកំហាប់ 2M ។</p>
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
            <div className="text-[13px] flex flex-col gap-3 items-start">
                <p>គេមានប្រព័ន្ធលំនឹង:  <InlineMath math="2CO_{2} (g) \rightleftharpoons 2CO (g) + O_{2} (g)" /> នៅលក្ខខណ្ឌលំនឹង
                សមស្របមួយ ល្បឿនប្រតិកម្មបំបែក <InlineMath math="CO_{2}" /> មានតម្លៃ <InlineMath math="4.55 \cdot 10^{-4} mol.L^{-1}.s^{-1}" /></p>
                <p>ក. តើល្បឿនប្រតិកម្មបន្សំរវាង <InlineMath math="CO_{2}" /> និង <InlineMath math="O_{2}" /> នៅលំនឹងនេះមានតម្លៃប៉ុន្មាន ?</p>
                <p>ខ. តើល្បឿនប្រតិកម្មបន្សំរវាង <InlineMath math="CO" /> និង <InlineMath math="O_{2}" /> នៅពេលចាប់ផ្តើមប្រតិកម្មប៉ុន្មាន ?</p>
            </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
            
        </div>,
      ]
    },
    {
      id: "ex9",
      title: "លំហាត់ទី ៩",
      description: "តេីសូលុយស្យុងខាងក្រោមនេះជាសូលុយស្យុងតំប៉ុងឬទេ? បេីគេលាយ :",
      problemType: "Fourth Exercise",
      problems: [
            <span className='text-[13px]'>20mL នៃសូលុយស្យុងអាសុីត <InlineMath math="HNO_{3}" /> ដែលមានកំហាប់ 0.5 M និង 20mL នៃសូលុយស្យុង <InlineMath math="KNO_{3}" /> ដែលមានកំហាប់ 0.5 M ។</span>,
            <span className='text-[13px]'>20mL នៃសូលុយស្យុងអាសុីតខ្សោយ <InlineMath math="HCOOH" /> ដែលមានកំហាប់ 1 M និង 20mL នៃសូលុយស្យុង <InlineMath math="HCOONa" /> ដែលមានកំហាប់ 1 M ។</span>,
            <span className='text-[13px]'>20mL នៃសូលុយស្យុង <InlineMath math="HNO_{2}" />  ដែលមានកំហាប់ 0.5 M និង 20mL នៃសូលុយស្យុង <InlineMath math="KCl" />  ដែលមានកំហាប់ 0.5 M ។</span>,
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
            
        </div>,
      ]
    },
    {
      id: "ex10",
      title: "លំហាត់ទី ១០",
      description: "លំហាត់ទី ១០",
      problemType: "Tenth Exercise",
      problems: [
          <span className='text-[13px]'>សូលុយស្យុងអាសុិតខ្សោយ HA នៅកំហាប់ 0.4 M មាន pH = 2.93 ។​ គណនាតម្លៃ <InlineMath math="K_{a}" /> នៃអាសុីត HA ។</span>,
          <span className='text-[13px]'>គណនាកំហាប់អុីយ៉ុងអាសេតាតនៅក្នុងសូលុយស្យុង ។ គេដឹងថានៅក្នុង 1L នៃសូលុយស្យុងមានអាសុីតអាសេទិច 0.15 mol និងអាសុីតក្លរីឌ្រិច 0.25 mol រលាយចូល ។</span>,
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
            
        </div>,
      ]
    },
    {
      id: "ex11",
      title: "លំហាត់ទី ១១",
      description: "លំហាត់ទី ១១",
      problemType: "Eleventh Exercise",
      problems: [
        <div className="flex flex-col gap-3 text-[13px] items-start">
            <p>គេមានសូលុយស្យុង 500mL ដែលក្នុងនោះមានអាស៊ីតភ្លុយអរីឌ្រីច (HF)0.06molនិង សូដ្យូមភ្លុយអរូ (NaF)0.06mol រលាយ ។</p>
            <p>ក. រកកំហាប់ដើមនៃ (HF) និង (NaF) ក្នុងល្បាយ ។</p>
            <p>ខ. គណនាកំហាប់នៃអ៊ីយ៉ុងអ៊ីដ្រូញ៉ូម <InlineMath math="[H_{3}O^{+}]" />  និងគណនា pH នៃល្បាយសូលុយស្យុង ។</p>
            <p>គ. តើល្បាយសូលុយស្យុងខាងលើ ជាសូលុយស្យុងតំប៉ុងដែរ ឬ ទេ ? ព្រោះអ្វី ?</p>
            <p>គេឲ្យ <InlineMath math="log 6.7 = 0.8 , K_{a}(HF) = 6.7 \cdot 10^{-4}" /> </p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
            
        </div>,
      ]
    },
    {
      id: "ex12",
      title: "លំហាត់ទី ១២",
      description: "លំហាត់ទី ១២",
      problemType: "Twelfth Exercise",
      problems: [
        <div className="flex flex-col gap-3 text-[13px] items-start">
            <p>ហេតុអ្វីបានជាគេនិយាយថា កាលណាទំហំភាគល្អិត កាន់តែតូច ល្បឿនប្រតិកម្មកាន់តែលឿន? ចូរពន្យល់ ។</p>
        </div>,
        <div className="flex flex-col gap-3 text-[13px] items-start">
            <p>គេឲប្រព័ន្ធមមួយដែលមានសមីការតុល្យការលំនឹង <InlineMath math="2CO_{2} (g) + កម្តៅ \rightleftharpoons 2CO (g) + O_{2} (g)" /> គេឲប្រព័ន្ធរងនូវឥទ្ធិពលដូចខាងក្រោម តេីប្រព័ន្ធលំនឹងរំកិលដូចម្តេច ?</p>
            <p>ក. រំដោះ <InlineMath math="CO" /></p>
            <p>ខ. បន្ថែម <InlineMath math="O_{2}" /></p>
            <p>គ. បង្កេីនសីតុណ្ហភាព</p>
            <p>ឃ. បន្ថែម <InlineMath math="CO_{2}" /></p>
            <p>ង. បង្កេីនមាឌប្រព័ន្ធ </p>
            <p>ច. ផ្តល់កាតាលីករ </p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
            
        </div>,
      ]
    },
    {
      id: "ex13",
      title: "លំហាត់ទី ១៣",
      description: "លំហាត់ទី ១៣",
      problemType: "Thirteenth Exercise",
      problems: [
        <div className="flex flex-col gap-3 text-[13px] items-start">
            <p>គេមានប្រតិកម្ម <InlineMath math="N_{2} (g) + 3H_{2} (g) \rightleftharpoons 2NH_{3} (g)" /> ដែលមានលំនឹងនៅសីតុណ្ហភាព 773 K និងមានតម្លៃថេរលំនឹង K= 0.286 ។ សរសេរកន្សោមថេរលំនឹង K និងគណនាកំហាប់របស់ឌីអាសូត នៅពេលមានលំនឹង ដោយដឹងថានៅពេលមាន លំនឹងនេះ <InlineMath math="[H_{2} ] = 0.42 M និង [NH_{3}] = 0.113 M" />  ។</p>
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

export default EquilibriumPractice
