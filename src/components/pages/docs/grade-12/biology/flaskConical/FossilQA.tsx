import TopicPracticeBox from "../../../common/box/TopicPracticeBox";
import { BlockMath, InlineMath } from "react-katex";
import 'katex/dist/katex.min.css';
import HintBox from "../../../common/box/HintBox";
import SummaryBox from "../../../common/box/SummaryBox";
import { AlertTriangleIcon, BookAIcon, ChartBarIcon, LightbulbIcon, WrenchIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/topic";
import { div } from "three/tsl";
import { p, ul } from "framer-motion/client";


const FossilQA = () => {

    const practiceExercises: PracticeExercise[] = [
        {
          id: "ex1",
          title: "",
          description: "សំណួរទី ១",
          problemType: "First Exercise",
          problems: [
            <p>តើផូស៊ីលជាអ្វី? ការកកើតផូស៊ីលមានប៉ុន្មានរបៀប? អ្វីខ្លះ?</p>
          ],
          answers: [
            <ul className="list-disc pl-5 flex flex-col gap-3 items-start">
                <li>ផូស៊ីលគឺជាស្នាម ឬសំណល់ភាវៈរស់ដែលបានបន្សល់ទុកនៅសម័យយូរលង់មកហើយ។</li>
                <li>ដំណើរកកើតផូស៊ីលមាន៣របៀប៖</li>
                <p>_ ដំណើរក្លាយជាថ្ម សំណល់ភាវៈរស់ខ្លះដែលកប់ជាប់ក្នុងកំទេចកំណប្លែងជាថ្ម</p>
                <p>_ ពុម្ពក្រៅនិងពុម្ពក្នុង</p>
                <li>ពុម្ពក្រៅពេលដែលសារពាង្គកាយកប់ក្នុងកំទេចកំណត្រូវ ក្លាយបន្តិចម្តងៗហើយបន្សល់ទុកពុម្ពទទេ។</li>
                <li>ពុម្ពក្នុងទឹកហូរនាំកំទេចកំណមកចាក់បំពេញពុម្ពនោះ បង្កើតបានជាពុម្ពក្នុងដែលប្លែងជាសិលាមានទ្រង់ទ្រាយដូចសារពាង្គកាយ។</li>
                <p>_ ការបន្សល់ទុកសារពាង្គកាយនៅទាំងមូលកប់ក្នុងជ័ររុក្ខជាតិ ឬទឹកកក។</p>
            </ul>
          ]
        },
        {
          id: "ex2",
          title: "",
          description: "សំណួរទី ២",
          problemType: "Second Exercise",
          problems: [
            <p>តើភាវៈរស់អាចបន្សល់អ្វីខ្លះទុកជាផូស៊ីល?</p>
          ],
          answers: [
            <div className="flex flex-col gap-3 text-[15px]">
                <p>ភាវៈរស់អាចបន្សល់ទុកឆ្អឹង គម្រសារពាង្គកាយ (សំបកសិប្បីសត្វ) ឬរាងកាយទាំងមូលក្នុងករណីកប់ជាប់ក្នុងទឹកកក។</p>
            </div>
          ]
        },
        {
          id: "ex3",
          title: "",
          description: "សំណួរទី ៣",
          problemType: "Third Exercise",
          problems: [
                <p>តើផូស៊ីលមានសារះសំខាន់ដូចម្តេចខ្លះ?</p>
          ],
          answers: [
            <ul className="list-disc pl-5 flex flex-col gap-3 items-start">
                <li>ធ្វើឲ្យយើងស្គាល់ប្រវត្តិនៃការវិវត្តរបស់ភាវៈរស់គឺ ការកកើត ការរីកចម្រើន និងការវិនាសបាត់ទៅវិញនៃប្រភេទនៃភាវៈរស់នីមួយៗ។</li>
                <li>ធ្វើឲ្យយើងស្គាល់ប្រវត្តិនៃផែនដីដែលបង្ហាញនូវលក្ខណះអាកាសធាតុនាសម័យកាលនីមួយៗ។</li>
            </ul>
          ]
        },
        {
          id: "ex4",
          title: "",
          description: "សំណួរទី ៤",
          problemType: "Fourth Exercise",
          problems: [
                <p>ចូរពន្យល់ពី ការកកើតនៃពុម្ពក្រៅ ។</p>
            ],
          answers: [
            <div className="flex flex-col gap-3 text-[15px]">
                <p>ការកកើតពុម្ពក្រៅ កកើតឡើងនៅពេលសារពាង្គកាយកប់ក្នុងកំទេចកំណត្រូវរលាយបន្តិចម្តងៗហើយបន្សល់ទុក
                នូវពុម្ពទទេដែលមានទម្រង់ដូចសារពាង្គកាយ។ ពុម្ពទទេនេះ ជាពុម្ពក្រៅ។ (ឬនៅពេលភាវៈរស់បានងាប់ទៅបានធ្លាក់ទៅ
                បាតបឹងឬបាតសមុទ្រ ទឹកហូរនាំសិលាកម្ទេចកំណគ្របដណ្តប់លើសាកសពនោះ។ សាកសពរលួយបែកធាតុហើយបន្សល់
                ទុកនៅតែរូបរាង ដែលបង្ហាញពីរូបរាងរបស់ភាវៈរស់នោះ នេះជាពុម្ពក្រៅ)។</p>
            </div>
          ]
        },
        {
          id: "ex5",
          title: "",
          description: "សំណួរទី ៥",
          problemType: "Fifth Exercise",
          problems: [
            <p>តើគេប្រេីវិធីអ្វីខ្លះដេីម្បីកំណត់អាយុះផូស៊ីល?</p>
          ],
          answers: [
            
          ]
        },
        {
          id: "ex6",
          title: "",
          description: "សំណួរទី ៦",
          problemType: "Sixth Exercise",
          problems: [
            <p>ចូរពន្យល់វិធីកំណត់អាយុផូស៊ីលតាមសារធាតុវិទ្យុកម្ម ។</p>
          ],
          answers: [
            
          ]
        },
        {
          id: "ex7",
          title: "",
          description: "សំណួរទី ៧",
          problemType: "Seventh Exercise",
          problems: [
            <p>ប្រៀបធៀបការកំណត់អាយុផូសុីលតាមសារធាតុវិទ្យុកម្មនិងតាមស្រទាប់សិលា ។</p>
          ],
          answers: [
            
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

export default FossilQA
