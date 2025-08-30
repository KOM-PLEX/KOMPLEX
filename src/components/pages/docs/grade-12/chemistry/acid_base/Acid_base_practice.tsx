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
      title: "ចំណុចសមមូលអាសុីតបាស",
      icon: BookAIcon,
      content: (
        <div className="text-[13px]" key={"f1"}>
            <InlineMath math="C_{a} \cdot V_{a} = C_{b} \cdot V_{b}" />
        </div>
      )
    },
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
            <p>តេីមានវិធីប៉ុន្មានយ៉ាងសម្រាប់វាស់ pH របស់សូលុយស្យុង ?</p>,
            <p>ដូចម្តេចហៅថា ស្វ័យអុីយ៉ុងកម្មនៃទឹក ?</p>,
            <p>តេីគេប្រេី pH សម្រាប់វាស់អ្វី ? ឲនិយមន័យ pH ។</p>,
            <p>ដូចម្តេចហៅថា សូលុយស្យុងណឺត ? វាមាន PH ស្មេីប៉ុន្មាន ?</p>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          
        </div>,
      ]
    },
    {
      id: "ex2",
      title: "សរសេរសមីការបំបែកជាអុីយ៉ុងក្នុងទឹក",
      description: "ចូរបំពេញនិងថ្លឹងសមីការប្រតិកម្មអាសុីត",
      problemType: "Second Exercise",
      problems: [
        <span className='text-[13px]'><InlineMath math="H_{2}CO_{3} + Sr(OH)_{2} \rightarrow" /></span>,
        <span className='text-[13px]'><InlineMath math="HBr + Ba(OH)_{2} \rightarrow" /></span>,
        <span className='text-[13px]'><InlineMath math="NaOH + H_{2}SO_{4} \rightarrow" /></span>,
      ],
      answers: [
         <div key="a1" className="flex flex-col items-start text-[13px]">
            <InlineMath math="H_{2}CO_{3}(aq) + Sr(OH)_{2}(aq) \rightarrow SrCO_{3}(s) + 2H_{2}O(l)" />
          </div>,

          <div key="a2" className="flex flex-col items-start text-[13px]">
            <InlineMath math="2HBr(aq) + Ba(OH)_{2}(aq) \rightarrow BaBr_{2}(aq) + 2H_{2}O(l)" />
          </div>,

          <div key="a3" className="flex flex-col items-start text-[13px]">
            <InlineMath math="2NaOH(aq) + H_{2}SO_{4}(aq) \rightarrow Na_{2}SO_{4}(aq) + 2H_{2}O(l)" />
          </div>,
      ]
    },
    {
      id: "ex3",
      title: "លំហាត់ទី ៣",
      description: "លំហាត់ទី ៣",
      problemType: "Third Exercise",
      problems: [
        <span className='text-[13px]'>ចូរកំណត់សមាសធាតុនីមួយៗជាអាសុីត បាស ឬមិនមែន ។ <InlineMath math="HCl , NaCl , Ca(OH)_{2} , NH_{4}Cl , CH_{4} , H_{2}CO_{3} , CaCO_{3} , NaOH" /> </span>,
        <span className='text-[13px]'>ចូរកំណត់សមាសធាតុនីមួយៗជាម៉ូណូប្រទិច ឌីប្រូទិច និងទ្រីប្រូទិច ។ <InlineMath math="HCl , HClO_{4} , H_{2}SO_{4} , H_{2}SO_{3} , CH_{3}COOH , HNO_{3} , H_{3}PO_{2} , H_{3}PO_{4}" /> </span>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-2">
            <div className="flex items-center gap-2">
                <p>អាសុីត :</p>
                <span className='text-[12px]'><InlineMath math="HCl , H_{2}CO_{3}" /></span>
            </div>
            <div className="flex items-center gap-2">
                <p>បាស :</p>
                <span className='text-[12px]'><InlineMath math="Ca(OH)_{2} , NaOH" /></span>
            </div>
            <div className="flex items-center gap-2">
                <p>មិនមែនទាំងពីរ :</p>
                <span className='text-[12px]'><InlineMath math="NaCl , NH_{4}Cl , CH_{4} , CaCO_{3}" /></span>
            </div>
        </div>,
        <div key="a2" className="flex flex-col items-start text-[12px] gap-2">
            <div className="flex items-center gap-2">
                <p>ម៉ូណូប្រទិច :</p>
                <span className='text-[12px]'><InlineMath math="HCl , HClO_{4} , HNO_{3} , CH_{3}COOH" /></span>
            </div>
            <div className="flex items-center gap-2">
                <p>ឌីប្រូទិចអាសុីត :</p>
                <span className='text-[12px]'><InlineMath math="H_{2}SO_{4} , H_{2}SO_{3} , H_{3}PO_{2}" /></span>
            </div>
            <div className="flex items-center gap-2">
                <p>ទ្រីប្រូទិចអាសុីត :</p>
                <span className='text-[12px]'><InlineMath math="H_{3}PO_{4}" /></span>
            </div>
        </div>,
      ]
    },
    {
      id: "ex4",
      title: "សរសេររូបមន្តបាសឆ្លាស់របស់អាសុីត",
      description: "សរសេររូបមន្តបាសឆ្លាស់របស់អាសុីត",
      problemType: "Fourth Exercise",
      problems: [
        <span className='text-[13px]'><InlineMath math="HNO_{2}" /></span>,
        <span className='text-[13px]'><InlineMath math="H_{2}SO_{4}" /></span>,
        <span className='text-[13px]'><InlineMath math="H_{2}S" /></span>,
        <span className='text-[13px]'><InlineMath math="HCN" /></span>,
        <span className='text-[13px]'><InlineMath math="HCOOH" /></span>,
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px]">
          <p><InlineMath math="HNO_{2} \rightarrow NO_{2}^{-}"/></p>
        </div>,

        <div key="a2" className="flex flex-col items-start text-[13px]">
          <p><InlineMath math="H_{2}SO_{4} \rightarrow HSO_{4}^{-}"/></p>
        </div>,

        <div key="a3" className="flex flex-col items-start text-[13px]">
          <p><InlineMath math="H_{2}S \rightarrow HS^{-}"/></p>
        </div>,

        <div key="a4" className="flex flex-col items-start text-[13px]">
          <p><InlineMath math="HCN \rightarrow CN^{-}"/></p>
        </div>,

        <div key="a5" className="flex flex-col items-start text-[13px]">
          <p><InlineMath math="HCOOH \rightarrow HCOO^{-}"/></p>
        </div>,
      ]
    },
    {
      id: "ex5",
      title: "បញ្ជាក់ពីគូអាសុីត បាសឆ្លាស់",
      description: "បញ្ជាក់ពីគូអាសុីត បាសឆ្លាស់",
      problemType: "Fifth Exercise",
      problems: [
        <span className='text-[13px]'><InlineMath math="CH_{3}COO^{-} + HCN \rightleftharpoons CH_{3}COOH + CN^{-}" /></span>,
        <span className='text-[13px]'><InlineMath math="HCO_{3}^{-} + HCO_{3}^{-} \rightleftharpoons H_{2}CO_{3} + CO_{3}^{2-}" /></span>,
        <span className='text-[13px]'><InlineMath math="H_{2}SO_{4} + SO_{3}^{2-} \rightleftharpoons HSO_{4}^{-} + HSO_{3}^{-}" /></span>,
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p><InlineMath math="CH_{3}COOH / CH_{3}COO^{-}"/></p>
          <p><InlineMath math="HCN / CN^{-}"/></p>
        </div>,

        <div key="a2" className="flex flex-col items-start text-[13px] gap-3">
          <p><InlineMath math="H_{2}CO_{3} / HCO_{3}^{-}"/></p>
          <p><InlineMath math="HCO_{3}^{-} / CO_{3}^{2-}"/></p>
        </div>,

        <div key="a3" className="flex flex-col items-start text-[13px] gap-3">
          <p><InlineMath math="H_{2}SO_{4} / HSO_{4}^{-}"/></p>
          <p><InlineMath math="HSO_{3}^{-} / SO_{3}^{2-}"/></p>
        </div>,
      ]
    },
    {
    id: "ex6",
    title: "សរសេររូបមន្តអាសុីតឆ្លាស់របស់អាសុីត",
    description: "សរសេររូបមន្តអាសុីតឆ្លាស់របស់អាសុីត",
    problemType: "Sixth Exercise",
    problems: [
      <span className='text-[13px]'><InlineMath math="HS^{-}" /></span>,
      <span className='text-[13px]'><InlineMath math="HCO_{3}^{-}" /></span>,
      <span className='text-[13px]'><InlineMath math="CO_{3}^{2-}" /></span>,
      <span className='text-[13px]'><InlineMath math="H_{2}PO_{4}^{-}" /></span>,
      <span className='text-[13px]'><InlineMath math="HPO_{4}^{2-}" /></span>,
      <span className='text-[13px]'><InlineMath math="HSO_{4}^{-}" /></span>,
      <span className='text-[13px]'><InlineMath math="SO_{4}^{2-}" /></span>,
      <span className='text-[13px]'><InlineMath math="SO_{3}^{2-}" /></span>,
    ],
    answers: [
      <div key="a1" className="flex flex-col items-start text-[13px]">
        <p><InlineMath math="HS^{-} \rightarrow H_{2}S"/></p>
      </div>,

      <div key="a2" className="flex flex-col items-start text-[13px]">
        <p><InlineMath math="HCO_{3}^{-} \rightarrow H_{2}CO_{3}"/></p>
      </div>,

      <div key="a3" className="flex flex-col items-start text-[13px]">
        <p><InlineMath math="CO_{3}^{2-} \rightarrow HCO_{3}^{-}"/></p>
      </div>,

      <div key="a4" className="flex flex-col items-start text-[13px]">
        <p><InlineMath math="H_{2}PO_{4}^{-} \rightarrow H_{3}PO_{4}"/></p>
      </div>,

      <div key="a5" className="flex flex-col items-start text-[13px]">
        <p><InlineMath math="HPO_{4}^{2-} \rightarrow H_{2}PO_{4}^{-}"/></p>
      </div>,

      <div key="a6" className="flex flex-col items-start text-[13px]">
        <p><InlineMath math="HSO_{4}^{-} \rightarrow H_{2}SO_{4}"/></p>
      </div>,

      <div key="a7" className="flex flex-col items-start text-[13px]">
        <p><InlineMath math="SO_{4}^{2-} \rightarrow HSO_{4}^{-}"/></p>
      </div>,

      <div key="a8" className="flex flex-col items-start text-[13px]">
        <p><InlineMath math="SO_{3}^{2-} \rightarrow HSO_{3}^{-}"/></p>
      </div>,
    ]
  },
  {
      id: "ex7",
      title: "លំហាត់ទី ៧",
      description: "លំហាត់ទី ៧",
      problemType: "Seventh Exercise",
      problems: [
        <div className="flex flex-col items-start text-[13px] gap-3">
            <p>គណនាកំហាប់អុីយ៉ុងអុីដ្រូញ៉ូមរបស់សូលុយស្យុងមួយ ដែលមានកំហាប់អុីយ៉ុងអុីដ្រុកសុីត <InlineMath math="2.8 \cdot 10^{-9} M" /> ។</p>
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
      <div className="flex flex-col items-start text-[13px] gap-3">
          <p>សូលុយស្យុងមួយមាន pH ស្មេីនឹង 1.50 ។ គណនាកំហាប់របស់អុីយ៉ុង <InlineMath math="[H_{3}O^{+}]" /> និង <InlineMath math="[OH^{-}]" /> ។</p>
      </div>
    ],
    answers: [
      <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p>គណនាកំហាប់របស់អុីយ៉ុង <InlineMath math="[H_{3}O^{+}]" /></p>
          <p>គេមាន pH= 1.50</p>
          <p>តាមរូបមន្ត <InlineMath math="pH = -\log_{10}[H_{3}O^{+}]" /></p>
          <p>នាំឲ <InlineMath math=" [H_{3}O^{+}] = 10^{-pH} = 10^{-1.50}" /></p>
          <p><InlineMath math="[H_{3}O^{+}] = 3.16 \cdot 10^{-2} M" /></p>
          <p>គណនាកំហាប់របស់អុីយ៉ុង <InlineMath math="[OH^{-}]" /></p>
          <p>គេមាន <InlineMath math="K_{w} = 1.0 \cdot 10^{-14}" /></p>
          <p>តាមរូបមន្ត <InlineMath math="[OH^{-}] = \dfrac{K_{w}}{[H_{3}O^{+}]} = \dfrac{1.0 \cdot 10^{-14}}{3.16 \cdot 10^{-2}}" /></p>
          <p><InlineMath math="[OH^{-}] = 3.16 \cdot 10^{-13} M" /></p>
      </div>,
    ]
  },

  {
      id: "ex9",
      title: "លំហាត់ទី ៩",
      description: "លំហាត់ទី ៩",
      problemType: "Ninth Exercise",
      problems: [
        <div className="flex flex-col items-start text-[13px] gap-3">
            <p>គេដាក់ស័ង្កសីឲមានប្រតិកម្មជាមួយសូលុយស្យុង <InlineMath math="H_{2}SO_{4}" /> ចំនួន 100mL នៅកំហាប់ 6M ។ គណនា:</p>
            <p>ក. ម៉ាសស័ង្កសីស៊ុលផាតដែលទទួលបាន</p>
            <p>ខ. មាឌឧស្ម័នអុីដ្រូសែនដែលភាយចេញពីប្រតិកម្មនៅសីតុណ្ហភាព STP ។</p>
            <p>(Zn = 65 , S= 32 , O= 16 , H = 1 ឧស្ម័ន 1mol នៅ STP មានមាឌ 22.4L)</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
            <p className="font-bold">ក. គណនាម៉ាសស័ង្កសីស៊ុលផាតដែលទទួលបាន</p>
            <div className="flex flex-wrap items-center gap-2">
              <p>សមីការតាងប្រតិកម្ម</p>
              <InlineMath math="Zn + H_{2}SO_{4} \rightarrow ZnSO_{4} + H_{2}" />
            </div>
            <p>តាមរូបមន្ត <InlineMath math="m = n \cdot M" /></p>
            <p>ដោយ <InlineMath math="M_{ZnSO_{4}}" /> = 65 + 32 + 4 x 16 = 98 g/mol</p>
            <p>រក <InlineMath math="n_{ZnSO_{4}}" /></p>
            <p>គេមាន <InlineMath math="V_{a}" /> = 100mL = 0.1 L</p>
            <p><InlineMath math="C_{a}" /> = 6M</p>

            <p>តាមរូបមន្ត <InlineMath math="n_{a} = C_{a} \cdot V_{a}" /></p>
            <p>= 6 x 0.1 = 0.6 mol</p>
            <p>ដោយ <InlineMath math="n_{ZnSO_{4}} = n_{a}" /></p>
            <p>នាំឲ <InlineMath math="n_{ZnSO_{4}} = 0.6 mol" /></p>
            <p>គេបាន <InlineMath math="m_{ZnSO_{4}} = n_{ZnSO_{4}} \cdot M_{ZnSO_{4}}" /></p>
            <p>= 0.6 x 98 = 58.8 g</p>
            <p>ដូច្នេះ ម៉ាសស័ង្កសីស៊ុលផាតដែលទទួលបានគឺ 58.8g</p>
            <p className="font-bold">ខ. គណនាមាឌឧស្ម័នអុីដ្រូសែនដែលភាយចេញពីប្រតិកម្ម</p>
            <p>តាមរូបមន្ត <InlineMath math="V_{H_{2}} = n_{H_{2}} \cdot V_{m}" /></p>
            <p>ដោយ <InlineMath math="V_{m} = 22.4 L" /></p>
            <p>នាំឲ <InlineMath math="n_{H_{2}} = n_{a} = 0.6 mol" /></p>
            <p>គេបាន <InlineMath math="V_{H_{2}} = n_{H_{2}} \cdot V_{m}" /></p>
            <p>= 0.6 x 22.4 = 13.44 L</p>
            <p>ដូច្នេះ មាឌឧស្ម័នអុីដ្រូសែនដែលភាយចេញពីប្រតិកម្មគឺ 13.44L</p>
        </div>,
      ]
    },
    
    {
      id: "ex10",
      title: "លំហាត់ទី ១០",
      description: "លំហាត់ទី ១០",
      problemType: "Tenth Exercise",
      problems: [
        <div className="flex flex-col items-start text-[13px] gap-3">
            <p>សំបកខ្យងមួយផ្សំពី <InlineMath math="CaCO_{3}" /> មានប្រតិកម្មជាមួយសូលុយស្យុង HCl គេទទួលបាន 1500mL ឧស្ម័ន​ <InlineMath math="CO_{2}" /> នៅសីតុណ្ហភាព STP រួមទាំង <InlineMath math="CaCl_{2}" /> និងទឹក ។ គណនា:</p>
            <p>ក. បរិមាណ <InlineMath math="CaCO_{3}" /> ចូលរួមប្រតិកម្ម</p>
            <p>ខ. មាឌសូលុយស្យុង HCl នៅ 2M ដែលប្រេីក្នុងប្រតិកម្ម</p>
            <p>(Ca = 40 , C= 12 , O= 16 , H = 1 , Cl = 35.5 ឧស្ម័ន 1mol នៅ STP មានមាឌ 22.4L)</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
            <p className="font-bold">ក. គណនាបរិមាណ <InlineMath math="CaCO_{3}" /> ចូលរួមប្រតិកម្ម</p>
            <div className="flex flex-wrap items-center gap-2">
              <p>សមីការតាងប្រតិកម្ម</p>
              <InlineMath math="CaCO_{3} + 2HCl \rightarrow CaCl_{2} + H_{2}O + CO_{2}" />
            </div>
            <p>គេបាន <InlineMath math="V_{CO_{2}}" /> = 1500mL = 1.5 L</p>
            <p>ដោយ <InlineMath math="V_{m}" /> = 22.4 L/mol</p>
            <p>តាមរូបមន្ត <InlineMath math="n = \frac{V}{V_{m}}" /></p>
            <p><InlineMath math="n_{CO_{2}} = \frac{1.5}{22.4} = 0.067 mol" /></p>
            <p>តាមសមីការ <InlineMath math="n_{CaCO_{3}} = n_{CO_{2}}" /></p>
            <p>នាំឲ <InlineMath math="n_{CaCO_{3}} = 0.067 mol" /></p>
            <p>ដូច្នេះ បរិមាណ <InlineMath math="CaCO_{3}" /> ចូលរួមប្រតិកម្មគឺ 0.067 mol</p>

            <p className="font-bold">ខ. គណនាមាឌសូលុយស្យុង HCl</p>
            <p>តាមសមីការ៖ <InlineMath math="CaCO_{3} + 2HCl \rightarrow CaCl_{2} + H_{2}O + CO_{2}" /></p>
            <p><InlineMath math="n_{HCl} = 2 \times n_{CaCO_{3}}" /></p>
            <p>= 2 × 0.067 = 0.134 mol</p>
            <p>តាមរូបមន្ត C = <span className='text-[16px]'><InlineMath math="\frac{n}{V}" /></span></p>
            <p><InlineMath math="V_{HCl} = \frac{0.134}{2} = 0.067 L" /></p>
            <p>ដូច្នេះ មាឌសូលុយស្យុង HCl ដែលបានប្រើគឺ 0.067 L</p>
        </div>,
      ]
    },

    {
      id: "ex11",
      title: "លំហាត់ទី ១១",
      description: "លំហាត់ទី ១១",
      problemType: "Eleventh Exercise",
      problems: [
        <div className="flex flex-col items-start text-[13px] gap-3">
            <p>សូលុយស្យុងអាសុីត HCl មួយមានកំហាប់ <InlineMath math="4.5 \cdot 10^{-3} M" /> ។ គណនាកំហាប់របស់អុីយ៉ុង <InlineMath math="[H_{3}O^{+}]" /> និង <InlineMath math="[OH^{-}]" /> ។ ចូរគណនា :</p>
            <p>ក. កំហាប់អុីយ៉ុង <InlineMath math="[H_{3}O^{+}]" /></p>
            <p>ខ. កំហាប់អុីយ៉ុង <InlineMath math="[OH^{-}]" /></p>
            <p>គ. pH របស់សូលុយស្យុង</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
            <p className="font-bold">ក. គណនាកំហាប់អុីយ៉ុង <InlineMath math="[H_{3}O^{+}]" /></p>
            <p>ដោយ HCl ជាអាសុីតខ្លាំង</p>
            <p>នាំឲ <InlineMath math="[H_{3}O^{+}] = C_{HCl} = 4.5 \cdot 10^{-3} M" /></p>

            <p className="font-bold">ខ. កំហាប់អុីយ៉ុង <InlineMath math="[OH^{-}]" /></p>
            <p>យើងដឹងថា <InlineMath math="K_{w} = [H_{3}O^{+}] \cdot [OH^{-}] = 1 \cdot 10^{-14}" /></p>
            <p>នាំឲ <InlineMath math="[OH^{-}] =" /> <span className='text-[16px]'><InlineMath math="\frac{1 \cdot 10^{-14}}{[H_{3}O^{+}]}" /></span></p>
            <p>= <span className='text-[16px]'><InlineMath math="\frac{1 \cdot 10^{-14}}{4.5 \cdot 10^{-3}}" /></span></p>
            <p>= <InlineMath math="2.22 \cdot 10^{-12} M" /></p>

            <p className="font-bold">គ. គណនា pH</p>
            <p>តាមរូបមន្ត <InlineMath math="pH = - \log [H_{3}O^{+}]" /></p>
            <p>= - log(4.5 × 10⁻³)</p>
            <p>= 2.35</p>

        </div>,
      ]
    },

    {
      id: "ex12",
      title: "លំហាត់ទី ១២",
      description: "លំហាត់ទី ១២",
      problemType: "Twelfth Exercise",
      problems: [
        <div className="flex flex-col items-start text-[13px] gap-3">
            <p>ត្រីទឹកសាបអាចរស់បាន នៅក្នុងទឹកដែលមាន pH = 6.5 ទៅ 7.5 ។ អាងចិញ្ចឹមត្រីមួយមាន ទឹកសុទ្ធ 100L (pH = 7.0) ។ គេបានច្រលំចាក់អាសុីតក្លរីឌ្រិច (HCl = 1 mol/L) ចំនួន 10ml ទៅក្នុងអាងនោះ ។</p>
            <p>ក. គណនាកំហាប់អុីយ៉ុងក្លរួ និងអុីយ៉ុងអុីដ្រូញ៉ូម ក្នុងអាង</p>
            <p>ខ. គណនា pH នៃទឹកក្នុងអាងចិញ្ចឹមត្រី ។ តេីត្រីអាចរស់ក្នុងមជ្ឈដ្ឋាននេះបានទេ ?</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
            <p>ក. គណនាកំហាប់អុីយ៉ុង Cl⁻ និង H₃O⁺</p>
            <p>គេមាន <InlineMath math="C_{HCl} = 1 M" />, <InlineMath math="V = 10 mL = 0.01 L" /></p>
            <p>តាមរូបមន្ត <InlineMath math="n = C \cdot V" /></p>
            <p>នាំឲ <InlineMath math="n_{HCl} = 1 \cdot 0.01 = 0.01 mol" /></p>
            <p>ដោយ HCl ជាអាសុីតខ្លាំង</p>
            <p><InlineMath math="n_{H_{3}O^{+}} = n_{Cl^{-}} = 0.01 mol" /></p>
            <p>ទឹកក្នុងអាងសរុប <InlineMath math="V_{total} = 100 L" /></p>
            <p>តាមរូបមន្ត <InlineMath math="[H_{3}O^{+}] =" /> <span className='text-[17px]'><InlineMath math="\frac{n_{H_{3}O^{+}}}{V_{total}}" /></span></p>
            <p><InlineMath math="[H_{3}O^{+}] =" /> <span className='text-[16px]'><InlineMath math="\frac{0.01}{100}" /></span> = <InlineMath math="10^{-4} M" /></p>
            <p>តាមរូបមន្ត <InlineMath math="[Cl^{-}] =" /> <span className='text-[17px]'><InlineMath math="\frac{n_{Cl^{-}}}{V_{total}}" /></span></p>
            <p><InlineMath math="[Cl^{-}] =" /> <span className='text-[16px]'><InlineMath math="\frac{0.01}{100}" /></span> = <InlineMath math="10^{-4} M" /></p>
            <p>ខ. គណនាថា pH</p>
            <p><InlineMath math="pH = -\log [H_{3}O^{+}]" /></p>
            <p>= -log(1 × 10⁻⁴)</p>
            <p>= 4</p>

            <p>ដូច្នេះ pH នៃទឹកក្នុងអាងគឺ 4</p>
            <p>ត្រីអាចរស់បានត្រឹម pH = 6.5 → 7.5 ប៉ុណ្ណោះ។</p>
            <p>គេបាន pH = 4 ដែលអាស៊ីតខ្លាំងពេក → ត្រីមិនអាចរស់នៅក្នុងមជ្ឈដ្ឋាននេះបានទេ។</p>
        </div>,
      ]
    },

    {
      id: "ex13",
      title: "លំហាត់ទី ១៣",
      description: "លំហាត់ទី ១៣",
      problemType: "Thirteenth Exercise",
      problems: [
        <div className="flex flex-col items-start text-[13px] gap-3">
            <p>គេបន្ថែមសូ. <InlineMath math="Pb(NO_{3})_{2}" /> លេីសទៅក្នុង 500mL សូ. <InlineMath math="H_{2}SO_{4}" /> គេទទួលបានកករ 3.03g ។</p>
            <p>ក. គណនា pH និង pOH នៃសូលុយស្យុងអាសុីតស៊ុលផួរិច </p>
            <p>ខ. គេលាយ 50mL នៃអាសុីតនេះទៅលាយជាមួយ 50mL នៃសូ. <InlineMath math="NaOH" /> កំហាប់ 0.01M ។​ គណនា pH នៃល្បាយក្រោយប្រតិកម្ម ។</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          
        </div>,
      ]
    },
    {
      id: "ex14",
      title: "លំហាត់ទី ១៤",
      description: "លំហាត់ទី ១៤",
      problemType: "Fourteenth Exercise",
      problems: [
        <div className="flex flex-col items-start text-[13px] gap-3">
           <p>គេមានសូ.អាសុីត HA ដែលមានកំហាប់ Ca ។ គេដឹងថា pH នៃសូ.អាសុីត នេះមានតម្លៃស្មេី2 ។​ បេីគេយកសូ.អាសុីត HA ចំនួន Va = 20mL ទៅធ្វេីអត្រាកម្មជាមួយសូ.ស៊ូតនៅសមមួល VbE = 20mL ។</p>
           <p>ក. ចូរបង្ហាញថាសូ.អាសុីត HA ជាអាសុីតខ្លាំង ឬ អាសុីតខ្សោយ ។</p>
           <p>ខ. សរសេរសមីការតាងប្រតិកម្មរវាង អាសុីតHA ជាមួយទឹក ។</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          
        </div>,
      ]
    },
    {
      id: "ex15",
      title: "លំហាត់ទី ១៥",
      description: "លំហាត់ទី ១៥",
      problemType: "Fifteenth Exercise",
      problems: [
        <div className="flex flex-col items-start text-[13px] gap-3">
            <p>គេយកអាស៊ីតកាបុកស៊ីលិចមួយដែលមានម៉ាស 4,6g ទៅដាក់ក្នុងកែវបេស៊ែ រួច គេបន្ថែមទឹកឲ្យបាន 1L ។ គេយកសូ.អាស៊ីតកាបុកស៊ីលិចនេះ Va=20mL ទៅធ្វើអត្រាកម្មដោយសូ.សូដ្យូមអ៊ីស្រុកស៊ីតដែលមានកំហាប់
            Cb = 0,2 mol/L ។ គេដឹងថាសូ.សូដ្យូមអ៊ីស្រុកស៊ីតដែលត្រូវបន្តក់ចូល ដើម្បីបានសមមូលអាស៊ីត បាសមានមាឌ VbE= 10 mL ។ អាស៊ីតកាបុកស៊ីលិចមានរូបមន្តទូទៅ R-COOH ។</p>
            <p>ក. ចូរកំណត់កំហាប់សូ.អាស៊ីតកាបុកស៊ីលិច ។</p>
            <p>ខ. តើនៅសមមូលអាស៊ីត បាសមានpH ធំជាង 7 ឬតូចជាង 7 ឬ ស្មើ 7 ?</p>
            <p>គ.  ចូរកំណត់ម៉ាសម៉ូល ម៉ូលេគុលនៃអាស៊ីតកាបុកស៊ីលិច និងទាញរករូបមន្តរបស់វា ។</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
            
        </div>,
      ]
    },
    {
      id: "ex16",
      title: "លំហាត់ទី ១៦",
      description: "លំហាត់ទី ១៦",
      problemType: "Sixteenth Exercise",
      problems: [
        <div className="flex flex-col items-start text-[13px] gap-3">
            <p>ក្នុងទីពីសោធន៍អត្រាកម្មនៃ 20,4mL សូ.អាស៊ីតក្លរីឌ្រីចនៅកំហាប់ 0,883M ធ្វើប្រតិកម្ម បន្សាបជាមួយ <InlineMath math="Ba(OH)_{2}" />មាឌ 19,3mL ។ គណនាកំហាប់សូ. <InlineMath math="Ba(OH)_{2}" /> និងគណនា pH គេរំលាយអ៊ីដ្រូសែនក្លរួ 0,56L ក្នុងទឹកបិទគេទទួល
            បានសូលុយស្យុងអាស៊ីតក្លរីឌ្រីច 500 mL ។ មាឌឧស័ន្មវាស់ក្នុងលក្ខណ្ឌធម្មតានៃសីតុណ្ហភាព និង សំពាធ ។ </p>
            <p>1. សរសេរសមីការតុល្យការប្រតិកម្មអ៊ីដ្រូសែនក្លរួ និង ទឹក ។</p>
            <p>2. តើសូលុយស្យុងអាស៊ីតក្លរីឌ្រិចមាន pH ប៉ុន្មាន ។</p>
            <p>3. គេចាក់50mLនៃសូលុយស្យុងអាស៊ីតក្លរតីឌ្រីចខាងលើទៅក្នុងសូលុយស្យុងស៊ូត 40mL កំហាប់ 0,04mol/L គេទទួលបានសូលុយស្យុង A ។</p>
            <div className="ml-2">
                <p>ក. សរសេរសមីការតុល្យការប្រតិកម្មអាស៊ីតក្លរីឌ្រីច និង ស៊ូត ។</p>
                <p>ខ. តើសូលុយស្យុង A ដែលទទួលបាននេះ ជា សូលុយស្យុងអាស៊ីត រឺ បាស ?</p>
                <p>គ. តើគេត្រូវថែមសូ.អាស៊ីត ក្លរីឌ្រីច រឺ សូ.ស៊ូត ប៉ុន្មាន mLទៅក្នុងសូ. A ដើម្បីបានសមមូលអាស៊ីត- បាស ? <span className='text-[11px]'><InlineMath math="V = 22.4 L.mol^{-1}" /></span></p>
            </div>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
            
        </div>,
      ]
    },
    {
      id: "ex17",
      title: "លំហាត់ទី ១៧",
      description: "លំហាត់ទី ១៧",
      problemType: "Seventeenth Exercise",
      problems: [
        <div className="flex flex-col items-start text-[13px] gap-3">
            <p>ដើម្បីបានសមមូលអាស៊ីត បាសគេត្រូវបន្តក់សូ.ប៉ូតាស្យូមអ៊ីស្រុកស៊ីត16 mLនៅកំហាប់ <InlineMath math="Cb = 4 \cdot 10^{-2} mol.L^{-1}" /> ទៅក្នុងសូ.អាស៊ីតក្លរីឌ្រីច 20mL នៅកំហាប់ Ca ។</p>
            <p>ក. សរសេរសមីការតាងប្រតិកម្មអត្រា ។</p>
            <p>ខ. រកកំហាប់ Ca នៃសូ.អាស៊ីតក្លរីឌ្រីច ។</p>
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
