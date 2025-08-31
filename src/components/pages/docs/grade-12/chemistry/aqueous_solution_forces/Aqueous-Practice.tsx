import TopicPracticeBox from "../../../common/box/TopicPracticeBox";
import { BlockMath, InlineMath } from "react-katex";
import 'katex/dist/katex.min.css';
import HintBox from "../../../common/box/HintBox";
import SummaryBox from "../../../common/box/SummaryBox";
import { AlertTriangleIcon, BookAIcon, ChartBarIcon, LightbulbIcon, WrenchIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/topic";

const AqueousPractice = () => {



  const practiceExercises: PracticeExercise[] = [
    {
      id: "ex1",
      title: "សរសេរសមីការបំបែកជាអុីយ៉ុងក្នុងទឹក",
      description: "សរសេរសមីការបំបែកជាអុីយ៉ុងក្នុងទឹក",
      problemType: "First Exercise",
      problems: [
        <span className='text-[13px]'><BlockMath key="p1" math={"KI"} /></span>,
        <span className='text-[13px]'><BlockMath key="p2" math={"Na_{2}NO_{3}"} /></span>,
        <span className='text-[13px]'><BlockMath key="p3" math={"MgCl_{2}"} /></span>,
      ],
      answers: [
         <div key="a1" className="flex flex-col items-start text-[13px]">
            <InlineMath math="KI \rightarrow K^{+}(aq) + I^{-}(aq)" />
          </div>,
          <div key="a2" className="flex flex-col items-start text-[13px]">
            <InlineMath math="NaNO_{3} \rightarrow Na^{+}(aq) + NO_{3}^{-}(aq)" />
          </div>,
          <div key="a3" className="flex flex-col items-start text-[13px]">
            <InlineMath math="MgCl_{2} \rightarrow Mg^{2+}(aq) + 2Cl^{-}(aq)" />
          </div>,
      ]
    },
    {
      id: "ex2",
      title: "សរសេរសមីការតុល្យការនិងសមីការអ៊ីយ៉ុងសម្រួល (ក្នុងសូលុយស្យុងទឹក )",
      description: "សរសេរសមីការតុល្យការនិងសមីការអ៊ីយ៉ុងសម្រួល (ក្នុងសូលុយស្យុងទឹក )",
      problemType: "First Exercise",
      problems: [
        <span className='text-[13px]'>បារត (II) ក្លរួ + ប៉ូតាស្យូមស៊ុលជួ</span>,
        <span className='text-[13px]'>សូដ្យូមកាបូណាត + កាល់ស្យូមក្លរួ</span>,
        <span className='text-[13px]'>ទង់ដែង (II) ក្លរួ + អាម៉ូញ៉ូមផូស្វាត</span>,
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-2">
          <p>សមីការម៉ូលេគុល៖</p>
          <span className='text-[12px]'><InlineMath math="BaCl_{2}(aq) + K_{2}SO_{4}(aq) \rightarrow BaSO_{4}(s) + 2KCl(aq)" /></span>
          <p>សមីការអ៊ីយ៉ុងសព្វ៖</p>
          <InlineMath math="Ba^{2+}(aq) + 2Cl^{-}(aq) + 2K^{+}(aq) + SO_{4}^{2-}(aq) \rightarrow BaSO_{4}(s) + 2K^{+}(aq) + 2Cl^{-}(aq)" />
          <p>សមីការអ៊ីយ៉ុងសម្រួល៖</p>
          <InlineMath math="Ba^{2+}(aq) + SO_{4}^{2-}(aq) \rightarrow BaSO_{4}(s)" />
        </div>,

        <div key="a2" className="flex flex-col items-start text-[12px] gap-2">
          <p>សមីការម៉ូលេគុល៖</p>
          <InlineMath math="Na_{2}CO_{3}(aq) + CaCl_{2}(aq) \rightarrow CaCO_{3}(s) + 2NaCl(aq)" />
          <p>សមីការអ៊ីយ៉ុងសព្វ៖</p>
          <InlineMath math="2Na^{+}(aq) + CO_{3}^{2-}(aq) + Ca^{2+}(aq) + 2Cl^{-}(aq) \rightarrow CaCO_{3}(s) + 2Na^{+}(aq) + 2Cl^{-}(aq)" />
          <p>សមីការអ៊ីយ៉ុងសម្រួល៖</p>
          <InlineMath math="Ca^{2+}(aq) + CO_{3}^{2-}(aq) \rightarrow CaCO_{3}(s)" />
        </div>,

        <div key="a3" className="flex flex-col items-start text-[12px] gap-2">
          <p>សមីការម៉ូលេគុល៖</p>
          <InlineMath math="3CuCl_{2}(aq) + 2(NH_{4})_{3}PO_{4}(aq) \rightarrow Cu_{3}(PO_{4})_{2}(s) + 6NH_{4}Cl(aq)" />
          <p>សមីការអ៊ីយ៉ុងសព្វ៖</p>
          <InlineMath math="3Cu^{2+}(aq) + 6Cl^{-}(aq) + 6NH_{4}^{+}(aq) + 2PO_{4}^{3-}(aq) \rightarrow Cu_{3}(PO_{4})_{2}(s) + 6NH_{4}^{+}(aq) + 6Cl^{-}(aq)" />
          <p>សមីការអ៊ីយ៉ុងសម្រួល៖</p>
          <InlineMath math="3Cu^{2+}(aq) + 2PO_{4}^{3-}(aq) \rightarrow Cu_{3}(PO_{4})_{2}(s)" />
        </div>,
      ]
    },
    {
      id: "ex3",
      title: "លំហាត់ទី ៣",
      description: "លំហាត់ទី ៣",
      problemType: "Third Exercise",
      problems: [
        <span className='text-[13px]'>
          ចូរបង្ហាញអីយ៉ុងទស្សនិកក្នុងប្រតិកម្មរវាង <InlineMath math="KCl" /> និង <InlineMath math="AgNO_{3}" /> ក្នុងសូលុយស្យុងទឹក ។
        </span>,
        <span className='text-[13px]'>
          ចូរបង្ហាញអីយ៉ុងទស្សនិកក្នុងប្រតិកម្មរវាង <InlineMath math="Na_{2}SO_{4}" /> និង <InlineMath math="BaCl_{2}" /> ក្នុងសូលុយស្យុងទឹក ។
        </span>,
        <span className='text-[13px]'>
          ចូរបង្ហាញអីយ៉ុងទស្សនិកក្នុងប្រតិកម្មរវាង <InlineMath math="CaCl_{2}" /> និង <InlineMath math="Na_{2}CO_{3}" /> ក្នុងសូលុយស្យុងទឹក ។
        </span>,
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-2">
          <p>សមីការតុល្យការ៖</p>
          <InlineMath math="KCl(aq) + AgNO_{3}(aq) \rightarrow AgCl(s) + KNO_{3}(aq)" />
          <p>សមីការអ៊ីយ៉ុងសព្វ៖</p>
          <InlineMath math="K^{+}(aq) + Cl^{-}(aq) + Ag^{+}(aq) + NO_{3}^{-}(aq) \rightarrow AgCl(s) + K^{+}(aq) + NO_{3}^{-}(aq)" />
          <p>អ៊ីយ៉ុងទស្សនិក៖</p>
          <InlineMath math="K^{+}(aq), NO_{3}^{-}(aq)" />
        </div>,

        <div key="a2" className="flex flex-col items-start text-[12px] gap-2">
          <p>សមីការតុល្យការ៖</p>
          <InlineMath math="Na_{2}SO_{4}(aq) + BaCl_{2}(aq) \rightarrow BaSO_{4}(s) + 2NaCl(aq)" />
          <p>សមីការអ៊ីយ៉ុងសព្វ៖</p>
          <InlineMath math="2Na^{+}(aq) + SO_{4}^{2-}(aq) + Ba^{2+}(aq) + 2Cl^{-}(aq) \rightarrow BaSO_{4}(s) + 2Na^{+}(aq) + 2Cl^{-}(aq)" />
          <p>អ៊ីយ៉ុងទស្សនិក៖</p>
          <InlineMath math="Na^{+}(aq), Cl^{-}(aq)" />
        </div>,

        <div key="a3" className="flex flex-col items-start text-[12px] gap-2">
          <p>សមីការតុល្យការ៖</p>
          <InlineMath math="CaCl_{2}(aq) + Na_{2}CO_{3}(aq) \rightarrow CaCO_{3}(s) + 2NaCl(aq)" />
          <p>សមីការអ៊ីយ៉ុងសព្វ៖</p>
          <InlineMath math="Ca^{2+}(aq) + 2Cl^{-}(aq) + 2Na^{+}(aq) + CO_{3}^{2-}(aq) \rightarrow CaCO_{3}(s) + 2Na^{+}(aq) + 2Cl^{-}(aq)" />
          <p>អ៊ីយ៉ុងទស្សនិក៖</p>
          <InlineMath math="Na^{+}(aq), Cl^{-}(aq)" />
        </div>,
      ]
    },
    {
      id: "ex4",
      title: "លំហាត់ទី ៤",
      description: "សរសេរសមីការអុីយ៉ុងសព្វ និងអុីយ៉ុងសម្រួល",
      problemType: "Fourth Exercise",
      problems: [
        <span className='text-[13px]'><InlineMath math="2AgNO_{3}(aq) + Na_{2}SO_{4}(aq) \rightarrow" /></span>,
        <span className='text-[13px]'><InlineMath math="BaCl_{2}(aq) + ZnSO_{4}(aq) \rightarrow" /></span>,
        <span className='text-[13px]'><InlineMath math="(NH_{4})_{2}CO_{3}(aq) + CaCl_{2}(aq) \rightarrow" /></span>,
        <span className='text-[13px]'><InlineMath math="Na_{2}S(aq) + ZnCl_{2}(aq) \rightarrow" /></span>,
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-2">
          <p>សមីការតុល្យការ៖</p>
          <InlineMath math="2AgNO_{3}(aq) + Na_{2}SO_{4}(aq) \rightarrow Ag_{2}SO_{4}(s) + 2NaNO_{3}(aq)" />
          <p>អុីយ៉ុងសព្វ៖</p>
          <InlineMath math="2Ag^{+}(aq) + 2NO_{3}^{-}(aq) + 2Na^{+}(aq) + SO_{4}^{2-}(aq) \rightarrow Ag_{2}SO_{4}(s) + 2Na^{+}(aq) + 2NO_{3}^{-}(aq)" />
          <p>អុីយ៉ុងសម្រួល៖</p>
          <InlineMath math="2Ag^{+}(aq) + SO_{4}^{2-}(aq) \rightarrow Ag_{2}SO_{4}(s)" />
        </div>,

        <div key="a2" className="flex flex-col items-start text-[12px] gap-2">
          <p>សមីការតុល្យការ៖</p>
          <InlineMath math="BaCl_{2}(aq) + ZnSO_{4}(aq) \rightarrow BaSO_{4}(s) + ZnCl_{2}(aq)" />
          <p>អុីយ៉ុងសព្វ៖</p>
          <InlineMath math="Ba^{2+}(aq) + 2Cl^{-}(aq) + Zn^{2+}(aq) + SO_{4}^{2-}(aq) \rightarrow BaSO_{4}(s) + Zn^{2+}(aq) + 2Cl^{-}(aq)" />
          <p>អុីយ៉ុងសម្រួល៖</p>
          <InlineMath math="Ba^{2+}(aq) + SO_{4}^{2-}(aq) \rightarrow BaSO_{4}(s)" />
        </div>,

        <div key="a3" className="flex flex-col items-start text-[12px] gap-2">
          <p>សមីការតុល្យការ៖</p>
          <InlineMath math="(NH_{4})_{2}CO_{3}(aq) + CaCl_{2}(aq) \rightarrow CaCO_{3}(s) + 2NH_{4}Cl(aq)" />
          <p>អុីយ៉ុងសព្វ៖</p>
          <InlineMath math="2NH_{4}^{+}(aq) + CO_{3}^{2-}(aq) + Ca^{2+}(aq) + 2Cl^{-}(aq) \rightarrow CaCO_{3}(s) + 2NH_{4}^{+}(aq) + 2Cl^{-}(aq)" />
          <p>អុីយ៉ុងសម្រួល៖</p>
          <InlineMath math="Ca^{2+}(aq) + CO_{3}^{2-}(aq) \rightarrow CaCO_{3}(s)" />
        </div>,

        <div key="a4" className="flex flex-col items-start text-[12px] gap-2">
          <p>សមីការតុល្យការ៖</p>
          <InlineMath math="Na_{2}S(aq) + ZnCl_{2}(aq) \rightarrow ZnS(s) + 2NaCl(aq)" />
          <p>អុីយ៉ុងសព្វ៖</p>
          <InlineMath math="2Na^{+}(aq) + S^{2-}(aq) + Zn^{2+}(aq) + 2Cl^{-}(aq) \rightarrow ZnS(s) + 2Na^{+}(aq) + 2Cl^{-}(aq)" />
          <p>អុីយ៉ុងសម្រួល៖</p>
          <InlineMath math="Zn^{2+}(aq) + S^{2-}(aq) \rightarrow ZnS(s)" />
        </div>,
      ]
    },
     {
      id: "ex5",
      title: "លំហាត់ទី ៥",
      description: "លំហាត់ទី ៥",
      problemType: "Fifth Exercise",
      problems: [
        <span className='text-[13px]'>ចូរកំណត់សមាសធាតុនីមួយៗជាសមាសធាតុរលាយ ឬមិនរលាយ <InlineMath math="Ca_{3}(PO_{4})_{2} , Mn(OH)_{2} , AgNO_{3} , K_{2}S , Hg(NO_{3})_{2} , CaCO_{3}" /> </span>,
        <span className='text-[13px]'>ចូរកំណត់សមាសធាតុនីមួយៗជាអេឡិចត្រូលីតខ្លាំង ឬអេឡិចត្រូលីតខ្សោយ <InlineMath math="H_{2}O , KCl , HNO_{3} , CH_{3}COOH , C_{12}H_{22}O_{11}" /> </span>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-2">
            <div className="flex items-center gap-2">
                <p>សមាសធាតុរលាយ :</p>
                <span className='text-[12px]'><InlineMath math="AgNO_{3} , K_{2}S , Hg(NO_{3})_{2}" /></span>
            </div>
            <div className="flex items-center gap-2">
                <p>សមាសធាតុមិនរលាយ :</p>
                <span className='text-[12px]'><InlineMath math="Ca_{3}(PO_{4})_{2} , Mn(OH)_{2} , CaCO_{3}" /></span>
            </div>
        </div>,
        <div key="a2" className="flex flex-col items-start text-[12px] gap-2">
            <div className="flex items-center gap-2">
                <p>អេឡិចត្រូលីតខ្លាំង :</p>
                <span className='text-[12px]'><InlineMath math="HNO_{3} , KCl" /></span>
            </div>
            <div className="flex items-center gap-2">
                <p>អេឡិចត្រូលីតខ្សោយ :</p>
                <span className='text-[12px]'><InlineMath math="H_{2}O , CH_{3}COOH , C_{12}H_{22}O_{11}" /></span>
            </div>
        </div>,
      ]
    },
     {
      id: "ex6",
      title: "លំហាត់ទី ៦",
      description: "លំហាត់ទី ៦",
      problemType: "Sixth Exercise",
      problems: [
          <div className="flex flex-col items-start gap-4 text-[13px]">
              <p>គេបន្ថែមសូលុយស្យុង <InlineMath math="FeSO_{4}" />ទៅក្នុងសូលុយស្យុង NaOH 1L ។ ក្រោយប្រតិកម្ម គេទទួលបានកករ <InlineMath math="Fe(OH)_{2}" />ចំនួន 0.45g ។</p>
              <p>ក. ចូរសរសេរសមីការគីមី សមីការអ៊ីយ៉ុងសព្វ និងសមីការអ៊ីយ៉ុងសម្រួលសម្រាប់ប្រតិកម្មខាងលើនេះ។</p>
              <p>ខ. គណនាកំហាប់ជាម៉ូលអ៊ីយ៉ុង <InlineMath math="OH^{-}" />និង pH នៃសូលុយស្យុង NaOH។</p>
              <p>គេឱ្យម៉ាសម៉ូលៈ Fe = 56 g/mol, O = 16 g/mol, H = 1 g/mol</p>
          </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-2">
            
        </div>,
        
      ]
    },
    {
      id: "ex7",
      title: "លំហាត់ទី ៧",
      description: "លំហាត់ទី ៧",
      problemType: "Seventh Exercise",
      problems: [
          <div className="flex flex-col items-start gap-4 text-[13px]">
              <p>គេលាយ 40mL នៃសូលុយស្យុង <InlineMath math="AgNO_{3}" /> នៅកំហាប់ 5M ជាមួយសូលុយស្យុង  <InlineMath math="Na_{2}SO_{4}" /> បរិមាណគ្រប់គ្រាន់ ។</p>
              <p>ក. សរសេរសមីការបីសណ្ឋានសម្រាប់ប្រតិកម្មនេះ។</p>
              <p>ខ. គណនាម៉ាសកករដែលទទួលបាន </p>
              <p>គេឲ Ag= 108 g/mol , S= 32 g/mol , O= 16 g/mol</p>
          </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-2">
           
        </div>,
        
      ]
    },
    {
      id: "ex8",
      title: "លំហាត់ទី ៨",
      description: "លំហាត់ទី ៨",
      problemType: "Eighth Exercise",
      problems: [
          <div className="flex flex-col items-start gap-4 text-[13px]">
              <p>គេដាក់ 200 mL នៃសូលុយស្យុងអាម៉ូញ៉ូមកាបូណាតដែលមានកំហាប់0.1M អោយមានប្រតិកម្មសព្វជាមួយសូលុយស្យុងកាល់ស្យូមនីត្រាត។</p>
              <p>ក.ចូរសរសេរសមីការគីមី សមីការអ៊ុយ៉ុងសព្វ និងសមីការអ៊ីយ៉ុងសម្រួលនៃប្រតិកម្មនេះ។</p>
              <p>ខ. ចូរកំណត់អីយ៉ុងទស្សនិក។</p>
              <p>គ. ចូរគណនាម៉ាសកករដែលទទួលបាន។</p>
          </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-2">
           
        </div>,
        
      ]
    },
    {
      id: "ex9",
      title: "លំហាត់ទី ៩",
      description: "លំហាត់ទី ៩",
      problemType: "Ninth Exercise",
      problems: [
          <div className="flex flex-col items-start gap-4 text-[13px]">
              <p>គេយកបារ៉ូមក្លរួ <InlineMath math="BaCl_{2}" />  ជាមួយសូដ្យូមស៊ុលផាត <InlineMath math="Na_{2}SO_{4}" />ចំនួន 20 mL កំហាប់ 0.50M គេឃើញមានកករពណ៌សកើតឡើង។</p>
              <p>ក. ចូរសរសេរសមីការគីមី សមីការអ៊ីយ៉ុងសព្វ និងសមីការអ៊ុយ៉ុងសម្រួល។</p>
              <p>ខ. រកមាឌបារ៉ូមក្លរួដែលត្រូវប្រើដើម្បីទទួលបានកករអតិបរមា។</p>
          </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-2">
           
        </div>,
        
      ]
    },

  ];

  return (
    <>
      <TopicPracticeBox exercises={practiceExercises} />
    </>
  );
}

export default AqueousPractice
