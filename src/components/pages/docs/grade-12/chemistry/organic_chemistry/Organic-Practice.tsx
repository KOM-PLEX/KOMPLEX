import TopicPracticeBox from "../../../common/box/TopicPracticeBox";
import { BlockMath, InlineMath } from "react-katex";
import 'katex/dist/katex.min.css';
import HintBox from "../../../common/box/HintBox";
import SummaryBox from "../../../common/box/SummaryBox";
import { AlertTriangleIcon, BookAIcon, ChartBarIcon, LightbulbIcon, WrenchIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/topic";
import { div } from "three/tsl";
import { p, span } from "framer-motion/client";

const OrganicPractice = () => {


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
      description: "ចូរសរសេររូបមន្តទូទៅនៃ",
      problemType: "First Exercise",
      problems: [
            <span className="text-[13px]">អាមីន</span>,
            <span className="text-[13px]">អាមីត</span>,
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
            <InlineMath math="R-NH_{2}" />
        </div>,
        <div key="a2" className="flex flex-col items-start text-[13px] gap-3">
            <InlineMath math="R-NH_{3}^{+}" />
        </div>,  
      ]
    },
    {
      id: "ex2",
      title: "លំហាត់ទី ២",
      description: "លំហាត់ទី ២",
      problemType: "Second Exercise",
      problems: [
            <span className="text-[13px]">ហេតុអ្វីបានជាគេចាត់ទុកអាមីន ជាអង្គធាតុស្រឡាយនៃអាម៉ូញ៉ាក់ ? ចូរពន្យល់ ។</span>,
            <span className="text-[13px]">ហេតុអ្វីបានជាគេថា អាសុីតអាមីណេមានលក្ខណៈទ្វេ ?</span>,
            <span className="text-[13px]">ចូរសរសេរសមីការបង្កេីតទ្រីបុិបទីតពីអាសុីត <InlineMath math="\alpha" /> អាមីណូប្រូប្យូនិច ឬអាឡានីន</span>,

      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
            
        </div>,
      ]
    },
    {
      id: "ex3",
      title: "លំហាត់ទី ៣",
      description: "ចូរសរសេររូបមន្តសមាសធាតុ",
      problemType: "Second Exercise",
      problems: [
            <span className="text-[13px]">ប៊ុយតាណាមីត</span>,
            <span className="text-[13px]">N,N- ឌីមេទីលអាសេតាមីត</span>,
            <span className="text-[13px]">N,N- ឌីមេទីលផរម៉ាមីត</span>,
            <span className="text-[13px]">អាសុីត 3- អាមីណូប៊ូតាណូអុិច</span>,

      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
            <InlineMath math="CH_{3}-CH_{2}-CH_{2}-C(=O)NH_{2}" />
        </div>,
        <div key="a2" className="flex flex-col items-start text-[13px] gap-3">
             <InlineMath math="CH_{3}-C(=O)-N(CH_{3})_{2}" />
        </div>,
        <div key="a3" className="flex flex-col items-start text-[13px] gap-3">
             <InlineMath math="H-C(=O)-N(CH_{3})_{2}" />
        </div>,
        <div key="a4" className="flex flex-col items-start text-[13px] gap-3">
             <InlineMath math="H_{2}N-CH_{2}-CH_{2}-CH(COOH)-CH_{3}" />
        </div>,
      ]
    },
    {
      id: "ex4",
      title: "លំហាត់ទី ៤",
      description: "លំហាត់ទី ៤",
      problemType: "Fourth Exercise",
      problems: [
            <div className="text-[13px]">
                 <p>ចូរគណនាម៉ាសម៉ូលរបស់អាសុីតខ្លាញ់ដែលបានពីអុីដ្រូលីសខ្លាញ់ ឬប្រេងមួយដែលមានម៉ាស 884 g ។</p>
                 <p>ចូរកំណត់រូបមន្តរបស់អាសុីតខ្លាញ់នេះ បេីគេដឹងថាម៉ូលេគុលវាមានសម្ព័ន្ធពីរជាន់មួយ ។</p>
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
            <div className="text-[13px]">
                 <p>អាសុីតអាសេទិចធ្វេីប្រតិកម្មជាមួយអាល់កុលបង្កេីតបានអេស្ទែដែល 0.4 mol របស់វាមានម៉ាស 40.8 g ។</p>
                 <p>តេីអាល់កុលនោះមានម៉ាសម៉ូលប៉ុន្មាន ?</p>
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
            <div className="text-[13px]">
                <p>ចំហេះសព្វ 2.2 g អេស្ទែមួយផ្តល់ឧស្ម័នកាបូនឌីអុកសុីត 4.4 g ។ គេដឹងថា ផ្នែកអាល់កុលនិងផ្នែកអាសុីតដែលបង្កអេស្ទែនោះមានចំនួនអាតូមកាបូនស្មេីគ្នា ហេីយជាសមាសធាតុឆ្អែត ។ ចូរកំណត់រូបមន្តរបស់អេស្ទែនោះ។</p>
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
            <div className="text-[13px]">
                <p>អាម៉ូញ៉ាក់និងឧស្ម័នកាបូនឌីអុកសុីត ធ្វេីប្រតិកម្មជាមួយគ្នានៅលក្ខខណ្ឌធម្មតាក្នុងមាឌប៉ុនគ្នា គេទទួលបានអ៊ុយរ៉េ 6 g ។ តេីឧស្ម័នណាដែលនៅសល់មិនធ្វេីប្រតិកម្ម ? មាឌប៉ុន្មាន ?</p>
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
                <p>គេមានរូបមន្តដុលនៃអាមីន ៣ប្រភេទ </p>
                <p>មេទីលឡាមីន : <InlineMath math="CH_{5}N" /></p>
                <p>N-ឌីមេទីលឡាមីន : <InlineMath math="C_{2}H_{7}N" /></p>
                <p>អេទីលឡាមីន : <InlineMath math="C_{2}H_{7}N" /></p>
                <p>ក. សរសេររូបមន្តស្ទេីលាត និងធ្វេីចំណេកថ្នាក់អាមីនទាំងបីប្រភេទនេះ ។</p>
                <p>ខ. សរសេរសមីការតាងប្រតិកម្មរវាងមេទីលឡាមីនជាមួយទឹក ។</p>
                <p>គ. ក្នុងចំណោមអាមីនទាំងបីខាងលេីនេះ តេីអាមីនណាខ្លះជាអ៊ីសូមែនឹងគ្នា​ ។</p>
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
      description: "លំហាត់ទី ៩",
      problemType: "Ninth Exercise",
      problems: [
            <div className="text-[13px] flex flex-col gap-3 items-start">
              <p>ម៉ូណូអាស៊ីតកាបុកស៊ីលិចឆ្អែត A មួយមានម៉ាស 60 g/moL ។​ </p>
              <p>១. កំណត់រូបមន្តម៉ូលេគុលនៃ A សរសេររូបមន្តស្នើលាត និង ឲ្យឈ្មោះផ្លូវការនៃ A ។</p>
              <p>២. គេយកសមាសធាតុ A ឲ្យមានប្រតិកម្មជាមួយមេតាណុល គេទទួលបានសមាសធាតុ អេស្ទែ B ចំនួន 22.2 g ។គេដឹងថាទិន្នផលប្រតិកម្មគឺ 67% ។</p>
              <p>ក. សរសេរសមីការតាងប្រតិកម្មអេស្ទែកម្ម</p>
              <p>ខ.គណនាសមាសធាតុ A ដែលយកមកប្រើ ។</p>
            </div>
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
            <div className="text-[13px] flex flex-col gap-3 items-start">
              <p>គេយកអាស៊ីតអាសេទិច 0.18mol ចំនួន 1L ឲ្យធ្វើប្រតិកម្មជាមួយអាម៉ូញ៉ាក់ គេទទួលបានអាមីត <InlineMath math="(CH_{3}CONH_{2})" />និងទឹក ។</p>
              <p>១. សរសេរសមីការតាងប្រតិកម្មទង្វើអាមីត ។ ចូរប្រាប់ឈ្មោះអាមីតដែលទទួលបាន។</p>
              <p>២. កំណត់ pH នៃសូលុយស្យុងអាស៊ីតអាសេទិច បើ <InlineMath math="K_{a} = 1.8 \cdot 10^{-5}" /> ។</p>
              <p>៣.គណនាម៉ាសអាមីតដែលទទួលបាន បើទិន្នផលប្រតិកម្មស្មើនឹង 80% ។គេឲ្យ <InlineMath math="log 1.8 = 0.25" /> ។</p>
            </div>
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
            <div className="text-[13px] flex flex-col gap-3 items-start">
                <p>១.ចូរសរសេររូបមន្តទូទៅនៃអេស្ទែ ។</p>
                <p>២.ចូរឲ្យឈ្មោះអេស្ទែ E ដែលមានរូបមន្ត <InlineMath math="CH_{3}-COO-CH_{2}-CH_{3}" /> ។</p>
                <p>៣.គេយកអេស្ទែ E ឲ្យមានប្រតិកម្មអ៊ីដ្រូលីស ។</p>
                <p>ក.ចូរឲ្យនិយមន័យអ៊ីដ្រូលីសនៃអេស្ទែ ។</p>
                <p>ខ.ចូរសរសេរសមីការអ៊ីដ្រូលីសនៃអេស្ទែ E និងឲ្យឈ្មោះអង្គធាតុកកកើត។</p>
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

export default OrganicPractice
