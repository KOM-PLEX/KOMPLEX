import TopicPracticeBox from "../../../common/box/TopicPracticeBox";
import { BlockMath, InlineMath } from "react-katex";
import 'katex/dist/katex.min.css';
import HintBox from "../../../common/box/HintBox";
import SummaryBox from "../../../common/box/SummaryBox";
import { AlertTriangleIcon, BookAIcon, ChartBarIcon, LightbulbIcon, WrenchIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/topic";
import { div } from "three/tsl";
import { p } from "framer-motion/client";


const QuestionAnswer = () => {

    const practiceExercises: PracticeExercise[] = [
        {
          id: "ex1",
          title: "",
          description: "សំណួរទី ១",
          problemType: "First Exercise",
          problems: [
                <p>តើនុយក្លេអូទីតជាអ្វី? វាផ្សំឡើងពីធាតុអ្វីខ្លះ? តើវាមានប៉ុន្មានប្រភេទ?</p>
          ],
          answers: [
            <div className="flex flex-col gap-3 text-[15px]">
                <p>_ នុយក្លេអូទីត ជាម៉ូណូមែ(ឬជាឯកតានៃធាតុបង្ក) របស់ADN។</p>
                <p>_ នុយក្លេអូទីតផ្សំឡើងពីអាស៊ីតផូស្វ័រិចមួយម៉ូលេគុល ស្ករដេអុកស៊ីរីបូសមួយម៉ូលេគុល និងបាសអាសូតមួយម៉ូលេគុល។</p>
                <p>_ ដោយសារបាសអាស៊ូតមាន៤ប្រភេទ A, T, C, G ដូចនេះនុយក្លេអូទីតក៏មាន៤ប្រភេទដែរ។</p>
            </div>
          ]
        },
        {
          id: "ex2",
          title: "",
          description: "សំណួរទី ២",
          problemType: "Second Exercise",
          problems: [
                <p>ហេតុអ្វីបានជានុយក្លេអូទីតតែ៤ប្រភេទ អាចបង្កើតម៉ូលេគុលADNខុសគ្នាជាច្រើន?</p>
          ],
          answers: [
            <div className="flex flex-col gap-3 text-[15px]">
                <p>បានជានុយក្លេអូទីតតែ៤ប្រភេទ អាចបង្កើតម៉ូលេគុលADNខុសគ្នាយ៉ាងច្រើន ពីព្រោះម៉ូលេគុលADNនីមួយៗកើត
                ពីនុយក្លេអូទីតពីរាប់ម៉ឺនទៅរាប់លាន ដែលតម្រៀបទៅតាមតំនលំដាប់នុយក្លេអូទីតជាក់លាក់។ ដូចនេះម៉ូលេគុលADN
                នីមួយៗខុសគ្នាដោយសារចំនួននុយក្លេអូទីត ប្រភេទនុយក្លេអូទីត និងទីតាំងនុយក្លេអូទីត។</p>
            </div>
          ]
        },
        {
          id: "ex3",
          title: "",
          description: "សំណួរទី ៣",
          problemType: "Third Exercise",
          problems: [
                <p>ចូរបកស្រាយពីចលនការស្វ័យដំឡើងទ្វេADN។</p>
          ],
          answers: [
            <div className="flex flex-col gap-3 text-[15px]">
                <p>បកស្រាយពីចលនការស្វ័យដំឡើងទ្វេADN៖</p>
                <p>ចលនការស្វ័យដំឡើងទ្វេADNប្រព្រឹត្តទៅក្នុងណ្វៃយ៉ូក្នុងវគ្គ S នៃចន្លោះវគ្គ ក្រោមអំពើអង់ស៊ីមADNប៉ូលីមេរ៉ាស។</p>
                <ul className="list-disc pl-5">
                    <li>ដំបូងច្រវាក់ទាំងពីររបស់ADNចាប់ផ្តើមរលា។</li>
                    <li>ច្រវាក់ទាំងពីររបស់ADN បែកចេញពីគ្នាដោយផ្តាច់សម្ព័ន្ធអ៊ីដ្រូសែនខ្សោយដែលភ្ជាប់ច្រវាក់ទាំងពីរ។</li>
                    <li>នុយក្លេអូទីតសេរីក្នុងណ្វៃយ៉ូ រត់ទៅបំពេញជាមួយនុយក្លេអូទីតច្រវាក់ម្ខាងៗរបស់ម៉ូលេគុលADNមេ តាមគោលការណ៍បំពេញបាស A-T,C-G។</li>
                </ul>
            </div>
          ]
        },
        {
          id: "ex4",
          title: "",
          description: "សំណួរទី ៤",
          problemType: "Fourth Exercise",
          problems: [
                <p>ក្រោយពេលដំឡើងទ្វេហើយ ហេតុអ្វីបានជាម៉ូលេគុលADNកូនទាំងពីរដូចបេះបិទទៅនឹងម៉ូលេគុលADNមេ?</p>
          ],
          answers: [
            <div className="flex flex-col gap-3 text-[15px]">
                <p>ក្រោយពេលដំឡើងទ្វេហើយ បានជាម៉ូលេគុលADNកូនទាំងពីរដូចបេះបិទទៅនឹងម៉ូលេគុលADNមេ ពីព្រោះនៅ
                ពេលស្វ័យដំឡើងទ្វេច្រវាក់ទាំងពីររបស់ADNមេ មាននាទីជាពុម្ពគំរូ ឯនុយក្លេអូទីតសេរីរត់ទៅបំពេញតាមគោលការណ៍
                បំពេញបាស A-T,C-G។ ហេតុនេះគេបានADNកូនពីរ ដែលកូននីមួយៗមានច្រវាក់ម្ខាងជាពុម្ពគំរូរបស់ADNមេ ឯច្រវាក់ម្ខាង
                ទៀតជាច្រវាក់កើតថ្មី គឺវាដូចបេះបិទ ហើយដូចADNមេទៀត។</p>
            </div>
          ]
        },
        {
          id: "ex5",
          title: "",
          description: "សំណួរទី ៥",
          problemType: "Fifth Exercise",
          problems: [
                <p>គេថាADNជាទម្រព័ត៌មានសេនេទិច។ តើពិតឬទេ? ពីព្រោះអ្វី?</p>
          ],
          answers: [
            <div className="flex flex-col gap-3 text-[15px]">
                <p>ពិត ពីព្រោះក្នុងម៉ូលេគុលADN មានតំនលំដាប់នុយក្លេអូទីតជាក់លាក់ ហើយតំនលំដាប់នុយក្លេអូទីតនេះហើយជាព័ត៌មានសេនេទិចដែលជាប្លង់សម្រាប់ដឹកនាំការសាងសង់លក្ខណះរបស់សារពាង្គកាយ។</p>
            </div>
          ]
        },
        {
          id: "ex6",
          title: "",
          description: "លំហាត់ទី ១",
          problemType: "Sixth Exercise",
          problems: [
               <div className="flex flex-col gap-3 items-start">

               </div>
          ],
          answers: [
            <div className="flex flex-col gap-3 text-[15px]">
            </div>
          ]
        },
  ];
  return (
    <div>
        <>
            <TopicPracticeBox exercises={practiceExercises} />
        </>
    </div>
  )
}

export default QuestionAnswer
