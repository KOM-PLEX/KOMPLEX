import TopicPracticeBox from "../../../common/box/TopicPracticeBox";
import { BlockMath, InlineMath } from "react-katex";
import 'katex/dist/katex.min.css';
import HintBox from "../../../common/box/HintBox";
import SummaryBox from "../../../common/box/SummaryBox";
import { AlertTriangleIcon, BookAIcon, ChartBarIcon, LightbulbIcon, WrenchIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/topic";
import { div } from "three/tsl";
import { p, ul } from "framer-motion/client";


const GeneticPractice = () => {

    const practiceExercises: PracticeExercise[] = [
        {
          id: "ex1",
          title: "",
          description: "សំណួរទី ១",
          problemType: "First Exercise",
          problems: [
                <p>ដូចម្តេចដែលហៅថាសែន?</p>
          ],
          answers: [
            <div className="flex flex-col gap-3 text-[15px]">
                <p>សែន ជាអង្កត់មួយរបស់ADN ។</p>
            </div>
          ]
        },
        {
          id: "ex2",
          title: "",
          description: "សំណួរទី ២",
          problemType: "Second Exercise",
          problems: [
                <p>ចូរប្រៀបធៀប <span className="text-[13px]"><InlineMath math="ADN" /></span> និង <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span></p>
          ],
          answers: [
            <ul className="list-disc pl-5">
                <li>លក្ខណះដូចគ្នា</li>
                <p>_ ជាប្រភេទអាស៊ីតនុយក្លេអ៊ុិច</p>
                <p>_ មានអាស៊ីតផូស្វ័រិច</p>
                <p>_ មានបាសអាសូត A, C, G</p>
                <li>លក្ខណៈខុសគ្នា :</li>
                <div className="flex flex-col gap-3 md:flex-row md:gap-15 flex-wrap">
                    <div className="flex flex-col gap-2">
                      <span className="text-[13px]"><InlineMath math="+ ADN" /></span> 
                      <p>_ កើតពីច្រវាក់នុយក្លេអូទីតពីរបំពេញគ្នា ។</p>
                      <p>_ ស្គរដេអុកស៊ីរីបូស ។</p>
                      <p>_ មានបាសT អត់ U ។</p>
                      <p>_ មាននុយក្លេអូទីតច្រេីនពីរាប់មុឺនទៅរាប់លាន ប្រវែងវែងជាង ។</p>
                      <p>_ ម៉ាសម៉ូលេគុលធំ ។</p>
                      <p>_ អង្កត់មួយរបស់ ADN កំណត់សំយោគ <span className="text-[13px]"><InlineMath math="ARN_{m}" /> </span> មួយ ។</p>
                      <p>_ ផ្ទុកព័ត៌មានសេនេទិចសម្រាប់ចម្លងចេញនូវ <span className="text-[13px]"><InlineMath math="ARN_{m}" /> </span> ។</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-[13px]"><InlineMath math="+ ARN_{m}" /></span> 
                      <p>_ កើតពីច្រវាក់នុយក្លេអូទីតតែម្ខាង។</p>
                      <p>_ ស្កររីបូស។</p>
                      <p>_ មានបាស U អត់ T ។</p>
                      <p>_ មាននុយក្លេអូទីតតិច ពីរាប់រយទៅរាប់ពាន់ប្រវែងខ្លីជាង។</p>
                      <p>_ ម៉ាសម៉ូលេគុលតូច។</p>
                      <p>_ <span className="text-[13px]"><InlineMath math="+ ARN_{m}" /></span>  មួយសំយោគចេញពីអង្កត់មួយរបស់ADN។</p>
                      <p>_ ចម្លងព័ត៌មានសេនេទិចរបស់ADN។</p>
                    </div>
                </div>  
            </ul>
          ]
        },
        {
          id: "ex3",
          title: "",
          description: "សំណួរទី ៣",
          problemType: "Third Exercise",
          problems: [
                <p>តើមានបាតុភូតអ្វី កើតឡើងនៅពេលដែលរីបូសូមលោតដល់កូដុងស្តុប?</p>
          ],
          answers: [
            <div className="flex flex-col gap-3 text-[15px]">
                <p>នៅពេលដែលរីបូសូមលោតដល់កូដុងស្តុប (UAA UAG UGA) ចលនការសំយោគប្រូតេអ៊ីនត្រូវបាន
                    បញ្ចប់ដោយធាតុចម្រុះសាំញ៉ាំមាន <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span> រីបូសូម <span className="text-[13px]"><InlineMath math="ARN_{t}" /></span> និងច្រវាក់ប៉ូលីប៉ិបទីតបានបំបែកចេញពីគ្នា ហើយភ្លាម
                    នោះអាស៊ីតអាមីនេមេត្យូនីនត្រូវបានផ្តាច់ចេញពីច្រវាក់ប៉ូលីប៉ិបទីតដែរ។</p>
            </div>
          ]
        },
        {
          id: "ex4",
          title: "",
          description: "សំណួរទី ៤",
          problemType: "Fourth Exercise",
          problems: [
                <p>ចូរនិយាយពីចលនការចម្លងក្រម។</p>],
          answers: [
            <div className="flex flex-col gap-3 text-[15px]">
                <p>ចលនការចម្លងក្រមប្រព្រឹត្តទៅនៅលើម៉ូលេគុលADN នៅចន្លោះវគ្គរបស់វដ្តកោសិកាក្រោមអំពើរបស់អង់ស៊ីមARNប៉ូលីមែរ៉ាស។ ARNប៉ូលីមែរ៉ាសមាននាទី៖</p>
                <ul className="list-disc pl-5 flex flex-col items-start text-[14px]">
                    <li>ទទួលស្គាល់សញ្ញាសេនេទិច លើម៉ូលេគុលADN ដែលអាចឲ្យចាប់ផ្តើម និងបញ្ចប់ការសំយោគម៉ូលេគុល <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span> នៅត្រង់កន្លែងជាក់លាក់។</li>
                    <li>បើកម៉ូលេគុលADNដោយផ្តាច់សម្ព័ន្ធអ៊ីដ្រូសែនដែលភ្ជាប់ច្រវាក់ទាំងពីររបស់ADN។</li>
                    <li>ធ្វើឲ្យមានប៉ូលីមែកម្មនៃរីបូនុយក្លេអូទីត: រីបូនុយក្លេអូទីតសេរីចូលមកបំពេញច្រវ៉ាក់ម្ខាងរបស់អង្កត់ADNតាមគោលការណ៍បំពេញបាស A-U, T-A, C-G, G-C។</li>
                    <li>សំយោគចប់ <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span> ផ្តាច់ខ្លួនចេញពីADN ហើយចាកចេញពីណៃយ៉ូទៅក្នុងស៊ីតូប្លាស។</li>
                </ul>
            </div>
          ]
        },
        {
          id: "ex5",
          title: "",
          description: "សំណួរទី ៥",
          problemType: "Fifth Exercise",
          problems: [
                <p>ហេតុអ្វីបានជាគេនិយាយថាADNជាម៉ាក្រូម៉ូលេគុលមានក្រម?</p>
          ],
          answers: [
            <div className="flex flex-col gap-3 text-[15px]">
                <p>បានជាគេនិយាយថាADNជាម៉ាក្រូម៉ូលេគុលមានក្រម ពីព្រោះម៉ូលេគុលADNកើតឡើងពីនុយក្លេអូទីតជាច្រើន
                តភ្ជាប់គ្នាតាមតំណលំដាប់ជាក់លាក់ ហៅថាតំណលំដាប់នុយក្លេអូទីត។ ម៉្យាងទៀតតំណលំដាប់នុយក្លេអូទីតរបស់ADN
                ជាក្រមជាក់លាក់សម្រាប់កំណត់តំណលំដាប់រីបូនុយក្លេអូទីតរបស់ <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span>  ដើម្បីសំយោគប្រូតេអ៊ុនយថាប្រភេទ។</p>
            </div>
          ]
        },
        {
          id: "ex6",
          title: "",
          description: "សំណួរទី ៦",
          problemType: "Sixth Exercise",
          problems: [
                <p>តើគេប្រៀបប្រដូចក្រមសេនេទិចទៅនឹងអ្វី?</p>
          ],
          answers: [
            <div className="flex flex-col gap-3 text-[15px]">
                <p>គេប្រៀបប្រដូចក្រមសេនេទិចដូចវចនានុក្រមសម្រាប់បកប្រែភាសាអក្សរ4តួរបស់ADN ឲ្យទៅជាភាសាអក្សរ20តួររបស់ប្រូតេអ៊ីន។</p>
            </div>
          ]
        },
        {
          id: "ex7",
          title: "",
          description: "សំណួរទី ៧",
          problemType: "Seventh Exercise",
          problems: [
                <p>ចូរពណ៌នាពីនាទី <span className="text-[13px]"><InlineMath math="ADN" /></span>  <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span> <span className="text-[13px]"><InlineMath math="ARN_{t}" /></span> <span className="text-[13px]"><InlineMath math="ARN_{r}" /></span> ក្នុងចលនការសំយោគប្រូតេអុីន ។</p>
          ],
          answers: [
            <ul className="list-disc pl-5 flex flex-col items-start text-[14px]">
                <li><span className="text-[13px]"><InlineMath math="ADN" /></span>: មាននាទីផ្ទុកព័ត៌មានសេនេទិច សម្រាប់សំយោគចេញពីARN។</li>
                <li><span className="text-[13px]"><InlineMath math="ARN_{m}" /></span>: មាននាទីចម្លងព័ត៌មានសេនេទិចគឺ ចម្លងតំណលំដាប់នុយក្លេអូទីតចេញពីច្រវាក់ម្ខាងរបស់សែន ឲ្យទៅជាតំណលំដាប់រីបូនុយក្លេអូទីត ហើយបញ្ជូនតំណលំដាប់រីបូនុយក្លេអូទីតទៅកាន់រីបូសូម ដើម្បីសំយោគប្រូតេអ៊ីន។</li>
                <li><span className="text-[13px]"><InlineMath math="ARN_{t}" /></span>: មាននាទីដឹកអាស៊ីតអាមីនេពីស៊ីតូប្លាស ទៅកាន់រីបូសូម និងតម្រូវអង់ទីកូដុងជាមួយកូដុង ដើម្បីចូលរួមមកប្រែព័ត៌មានសេនេទិចឲ្យទៅជាប្រូតេអ៊ីន។</li>
                <li><span className="text-[13px]"><InlineMath math="ARN_{r}" /></span>: មាននាទីចូលរួមជាមួយប្រូតេអ៊ីន បង្កើតជារីបូសូម ដែលជារោងជាងសំយោគប្រូតេអ៊ីន។</li>
            </ul>
          ]
        },
        {
          id: "ex8",
          title: "",
          description: "លំហាត់ទី ១",
          problemType: "Eighth Exercise",
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

export default GeneticPractice
