import TopicPracticeBox from "../../../common/box/TopicPracticeBox";
import { BlockMath, InlineMath } from "react-katex";
import 'katex/dist/katex.min.css';
import HintBox from "../../../common/box/HintBox";
import SummaryBox from "../../../common/box/SummaryBox";
import { AlertTriangleIcon, BookAIcon, ChartBarIcon, LightbulbIcon, WrenchIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/docs/topic";
import { div } from "three/tsl";



const ConicPractice = () => {
  const summary: SummarySection[] = [
    {
      key: "formulas",
      title: "រូបមន្តសំខាន់ៗ",
      icon: BookAIcon,
      content: (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-indigo-600">•</span>
            <span>សមីការស្តង់ដាប៉ារ៉ាប៉ូលអ័ក្សឆ្លុះឈរ៖</span>
            <InlineMath math="(x-h)^2 = 4p(y-k)" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-indigo-600">•</span>
            <span>សមីការស្តង់ដាប៉ារ៉ាប៉ូលអ័ក្សឆ្លុះដេក៖</span>
            <InlineMath math="(y-k)^2 = 4p(x-h)" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-indigo-600">•</span>
            <span>សមីការស្តង់ដាអេលីបអ័ក្សធំឈរ៖</span>
            <InlineMath math="\frac{(x-h)^2}{b^2} + \frac{(y-k)^2}{a^2} = 1" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-indigo-600">•</span>
            <span>សមីការស្តង់ដាអេលីបអ័ក្សធំដេក៖</span>
            <InlineMath math="\frac{(x-h)^2}{a^2} + \frac{(y-k)^2}{b^2} = 1" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-indigo-600">•</span>
            <span>អ័ក្សទទឺងស្របនឺងអ័ក្សឈរ៖</span>
            <InlineMath math="\frac{(y-k)^2}{a^2} - \frac{(x-h)^2}{b^2} = 1" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-indigo-600">•</span>
            <span>អ័ក្សទទឺងស្របនឺងអ័ក្សដេក៖</span>
            <InlineMath math="\frac{(x-h)^2}{a^2} - \frac{(y-k)^2}{b^2} = 1" />
          </div>
        </div>
      )
    },
    {
      key: "methods",
      title: "វិធីដោះស្រាយ",
      icon: WrenchIcon,
      content: (
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">1.</span>
            <div>
              <span className="font-medium">រកចម្លើយទូទៅ y_c នៃសមីការអូម៉ូសែន</span>
              <div className="mt-1">
                <InlineMath math="ay'' + by' + cy = 0" />
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">2.</span>
            <div>
              <span className="font-medium">រកចម្លើយពិសេស y_p នៃសមីការមិនអូម៉ូសែន</span>
              <div className="mt-1">
                <InlineMath math="ay'' + by' + cy = f(x)" />
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">3.</span>
            <div>
              <span className="font-medium">ចម្លើយទូទៅ៖</span>
              <InlineMath math="y = y_c + y_p" />
            </div>
          </div>
        </div>
      )
    },
    {
      key: "characteristic",
      title: "ចម្លើយសមីការសម្គាល់",
      icon: ChartBarIcon,
      content: (
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span>ឫសខុសគ្នា r₁, r₂៖</span>
              <InlineMath math="y = c_1e^{r_1x} + c_2e^{r_2x}" />
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span>ឫសស្មើគ្នា r₁ = r₂៖</span>
              <InlineMath math="y = (c_1 + c_2x)e^{r_1x}" />
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span>ឫសស្មុគស្មាញ α ± βi៖</span>
              <InlineMath math="y = e^{αx}(c_1\cos(βx) + c_2\sin(βx))" />
            </div>
          </div>
        </div>
      )
    },
    {
      key: "tips",
      title: "គន្លឹះអនុវត្ត",
      icon: LightbulbIcon,
      content: (
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ព្យាយាមដោះស្រាយលំហាត់ដោយខ្លួនឯងមុនពេលមើលចម្លើយ</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ចងចាំរូបមន្តសមីការសម្គាល់ និងទម្រង់ចម្លើយទូទៅ</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ពិនិត្យមើលលក្ខខណ្ឌដំបូង (បើមាន) ដើម្បីរកចំនួនថេរ</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ប្រើប្រាស់វិធីបម្រែបម្រួលចំនួនថេរ ឬវិធីមេគុណដែលមិនកំណត់</span>
          </div>
        </div>
      )
    },
    {
      key: "common-errors",
      title: "កំហុសធម្មតា",
      icon: AlertTriangleIcon,
      content: (
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ភ្លេចបញ្ចូលចំនួនថេរ c₁, c₂ ក្នុងចម្លើយទូទៅ</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ច្រឡំរវាងឫសខុសគ្នា និងឫសស្មីគ្នា</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>មិនពិនិត្យមើលថាចម្លើយពិសេស y_p ត្រូវគ្នានឹង f(x) ឬទេ</span>
          </div>
        </div>
      )
    }
  ];

  const practiceExercises: PracticeExercise[] = [
    {
      id: "ex1",
      title: "លំហាត់អនុវត្តទី ១",
      description: "ប៉ារ៉ាប៉ូល៖",
      problemType: "Parabola",
      problems: [
        <div key="ex1-1">
          រកកូអរដោនេកំពូល កំណុំ​ និងសមីការប្រាប់ទិសនៃប៉ារ៉ាប៉ូល​ <br />
          <InlineMath math="x^2 = 8y" /> <br />
        </div>,
        <div key="ex1-2">
          <p>រកកូអរដោនេកំពូល កំណុំ​ និងសមីការប្រាប់ទិសនៃប៉ារ៉ាប៉ូល​ <br /></p>
          <InlineMath math="(y+2)^2=4(x-1)" />
        </div>,
        <div key="ex1-3">
          <p>សរសេរសមីការស្តង់ដាប៉ារ៉ាប៉ូលដែលមានកំពូល <InlineMath math="V(h,k)និងកំណុំF(h,k+p)" /> <br /></p>
          <InlineMath math=" V(-2,1)និងF(4,1)" />
        </div>,
        <div key="ex1-4">
          <p>សរសេរសមីការស្តង់ដាប៉ារ៉ាប៉ូលដែលមានកំពូល <InlineMath math="V(h,k)និងកំណុំF(h+p,k)" /> <br /></p>
          <InlineMath math=" V(-3,-2)និងF(5,-2)" />
        </div>,
        <div key="ex1-5">
          <p>កំណត់កូអរដោនេកំពូល កំណុំ និងសមីការប៉ារ៉ាប៉ូល<br /></p>
          <InlineMath math="(P):y^2+4x-6y+1=0" />
        </div>
      ],
      answers: [
        <div key="a1" className="space-y-2">
          <p>តាមសមីការប៉ារ៉ាប៉ូលដែលមានអ័ក្សឆ្លុះដេក៖​ <InlineMath math="x^2 = 4py" /></p> <br />
          <p>តែ:<InlineMath math="4p = 8 ⇒ p = 2 (បើកឡើងលើ)" /></p><br />
          <p>ដោយ: <InlineMath math="V(0, 0), F(0, p) = F(0, 2)" /></p><br />
          <p>បន្ទាត់ប្រាប់ទិសគឺ៖ <InlineMath math="y = -p ⇒ y = -2" /></p><br />
          <p>ដូចនេះគេបាន៖ កំពូល<InlineMath math="V(0, 0), កំណុំF(0, 2) និង បន្ទាត់ប្រាប់ទិស y = -2" /></p>
        </div>,
        <div key="a2" className="space-y-2">
          <p>តាមសមីការប៉ារ៉ាប៉ូលដែលមានអ័ក្សឆ្លុះដេក៖​ <InlineMath math="(y-k)^2=4(x-h)" /></p><br />
          <p>តែ: <InlineMath math="4p = 4 ⇒ p = 1 (បើកទៅស្ដាំ)" /></p><br />
          <p>ដោយ: <InlineMath math="V(h, k) = V(1, -2), F(h+p, k) = F(2, -2)" /></p><br />
          <p>បន្ទាត់ប្រាប់ទិសគឺ៖ <InlineMath math="y = -p ⇒ y = -1" /></p><br />
          <p>ដូចនេះគេបាន៖ កំពូល<InlineMath math="V(1, -2), កំណុំF(2, -2) និង បន្ទាត់ប្រាប់ទិស y = -1" /></p>
        </div>,
        <div key="a3" className="space-y-2">
          <p>គេឲ្យ៖​ <InlineMath math="V(h,k)និងកំណុំF(h,k+p)" /> និង <InlineMath math=" V(-2,1)និងF(4,1)" /></p><br />
          <p>ដោយ: <InlineMath math="V(h,k) = V(-2,1), F(h,k+p) = F(4,1)" /></p><br />
          <p>នោះ៖ <InlineMath math="h = -2, k = 1, p = 6" /></p><br />
          <p>តាមសមីការប៉ារ៉ាប៉ូលដែលមានអ័ក្សឆ្លុះឈរ៖​ <InlineMath math="(x-h)^2=4p(y-k)" /></p><br />
          <p>ដូចនេះសរសេរសមីការស្តង់ដាប៉ារ៉ាប៉ូល៖ <InlineMath math=" (x+2)^2=24(y-1)" /></p>
        </div>,
        <div key="a4" className="space-y-2">
          <p>គេឲ្យ៖ <InlineMath math="V(h,k)និងកំណុំF(h+p,k)" /> និង <InlineMath math=" V(-3,-2)និងF(5,-2)" /></p>
          <p>ដោយ: <InlineMath math="V(h,k) = V(-3,-2), F(h+p,k) = F(5,-2)" /></p>
          <p>នោះ៖ <InlineMath math="h = -3, k = -2, p = 8" /></p>
          <p>តាមសមីការប៉ារ៉ាប៉ូលដែលមានអ័ក្សឆ្លុះដេក៖​ <InlineMath math="(y-k)^2=4p(x-h)" /></p><br />
          <p>ដូចនេះសរសេរសមីការស្តង់ដាប៉ារ៉ាប៉ូល៖ <InlineMath math=" (x+3)^2=32(y+2)" /></p>
        </div>,
        <div key="a5" className="space-y-2">
          <p>គេឲ្យ៖​ <InlineMath math="(P):y^2+4x-6y+1=0" /></p><br />
          <p>ដំបូងគេត្រូវបម្លែងសមីការប៉ារ៉ាប៉ូលទៅទម្រង់ស្តង់ដា៖</p>
          <InlineMath math="y^2 - 6y + 4x + 1 = 0" />
          <p>បម្លែងទៅទម្រង់ស្តង់ដា៖</p>
          <InlineMath math="(y-3)^2 = -4(x+1)" />
          <p>តែ៖ <InlineMath math="4p = -4 ⇒ p = -1 (បើកទៅឆ្វេង)" /></p><br />
          <p>ដោយ: <InlineMath math="V(h,k) = V(-3,-2), F(h+p,k) = F(5,-2)" /></p><br />
          <p>នោះ៖ <InlineMath math="h = -3, k = -2, p = 8" /></p><br />
          <p>ដូចនេះគេបាន៖​ <InlineMath math="កំពូលV(-3, -2), កំណុំF(5, -2) និង បន្ទាត់ប្រាប់ទិស y = -1" /></p>
        </div>
      ]
    },
    {
      id: "ex2",
      title: "លំហាត់អនុវត្តទី ២",
      description: "អេលីប",
      problemType: "Ellipse",
      problems: [
        <div key="ex2-1"> រកកូអរដោនេ​ កំពូល កំណុំ ចំណុចឆ្លុះ និង អុីចសង់ទ្រីសុីតេនៃអេលីប
          <InlineMath math="x^2+4y^2-4=0" />
        </div>,
        <div key="ex2-2"> រកកូអរដោនេ​ កំពូល កំណុំ ចំណុចឆ្លុះ និង អុីចសង់ទ្រីសុីតេនៃអេលីប
          <InlineMath math="y^2+4x^2-4=0" />
        </div>,
        <div key="ex2-3">រកកូអរដោនេ​ កំពូល កំណុំ ចំណុចឆ្លុះ និង អុីចសង់ទ្រីសុីតេនៃអេលីប
          <InlineMath math=" 9x^2+25y^2-36x-189=0" />
        </div>,
        <div key="ex2-4">រកកូអរដោនេ​ កំពូល កំណុំ ចំណុចឆ្លុះ និង អុីចសង់ទ្រីសុីតេនៃអេលីប
          <InlineMath math=" 9y^2+25x^2-36y-189=0" />
        </div>,
        <div key="ex2-5">រកកូអរដោនេ​ កំពូល កំណុំ ចំណុចឆ្លុះ និង អុីចសង់ទ្រីសុីតេនៃអេលីប
          <InlineMath math=" 9x^2+16y^2-90x-96y+225=0" />
        </div>,
      ],
      answers: [
        <div key="a1" className="space-y-2">
          <p>គេឲ្យ៖​<InlineMath math="x^2+4y^2-4=0" /></p>
          <p>បម្លែងទៅទម្រង់ស្តង់ដា៖</p>
          <InlineMath math="x^2 + 4y^2 = 4 \implies \frac{x^2}{4} + \frac{y^2}{1} = 1 ដោយចែកគ្រប់តួទាំងអស់នឹង 4" />
          <p>ដោយ: <InlineMath math="a^2 = 4, b^2 = 1" /></p>
          <p>នោះ៖ <InlineMath math="a = 2, b = 1" /></p>
          <p>ដោយសារ <InlineMath math="a > b" /> អ័ក្សធំស្ថិតនៅលើអ័ក្ស x ។ ចំណុចកណ្ដាលនៃអេលីបនេះគឺនៅ (0,0)។</p>
          <p>កូអរដោនេចំណុចឆ្លុះ</p>
          <p>ដើម្បីរកកូអរដោនេចំណុចឆ្លុះ យើងត្រូវរកតម្លៃ c ជាមុនសិន ដោយប្រើរូបមន្ត <InlineMath math="c^2 = a^2 - b^2" /></p>
          <p>គេមាន៖ <InlineMath math="c^2 = 4 - 1 = 3" /></p>
          <p>នាំឲ៖ <InlineMath math="c = \sqrt{3}" /></p>
          <p>អុីចសង់ទ្រីសុីតេ</p>
          <p>អុីចសង់ទ្រីសុីតេ e ជារង្វាស់នៃភាពសំប៉ែតរបស់អេលីប ដែលគណនាដោយរូបមន្ត <InlineMath math="e= \frac{c}{a} = \frac{\sqrt{3}}{2}" /></p>
          <p>ដូចនេះគេបាន៖កូអរដោនេកំពូល: (±2,0) , កំណុំ: (±2,0) និង (0,±1) , ចំណុចឆ្លុះ: (±2,0) និង (0,±1) , អុីចសង់ទ្រីសុីតេ: <InlineMath math="e= \frac{c}{a} = \frac{\sqrt{3}}{2}" /></p>
        </div>,
        <div key="a2" className="space-y-2">
          <p>គេឲ្យ៖​<InlineMath math="y^2+4x^2-4=0" /></p>
          <p>បម្លែងទៅទម្រង់ស្តង់ដា៖</p>
          <InlineMath math="y^2 + 4x^2 = 4 \implies \frac{y^2}{4} + \frac{x^2}{1} = 1 ដោយចែកគ្រប់តួទាំងអស់នឹង 4" />
          <p>ដោយ: <InlineMath math="a^2 = 1, b^2 = 4" /></p>
          <p>នោះ៖ <InlineMath math="a = 1, b = 2" /></p>
          <p>ដោយសារ <InlineMath math="b > a" /> អ័ក្សធំស្ថិតនៅលើអ័ក្ស y ។ ចំណុចកណ្ដាលនៃអេលីបនេះគឺនៅ (0,0)។</p>
          <p>កូអរដោនេចំណុចឆ្លុះ</p>
          <p>ដើម្បីរកកូអរដោនេចំណុចឆ្លុះ យើងត្រូវរកតម្លៃ c ជាមុនសិន ដោយប្រើរូបមន្ត <InlineMath math="c^2 = b^2 - a^2" /></p>
          <p>គេមាន៖ <InlineMath math="c^2 = 4 - 1 = 3" /></p>
          <p>នាំឲ៖ <InlineMath math="c = \sqrt{3}" /></p>
          <p>អុីចសង់ទ្រីសុីតេ</p>
          <p>អុីចសង់ទ្រីសុីតេ e ជារង្វាស់នៃភាពសំប៉ែតរបស់អេលីប ដែលគណនាដោយរូបមន្ត <InlineMath math="e= \frac{c}{b} = \frac{\sqrt{3}}{2}" /></p>
          <p>ដូចនេះគេបាន៖កូអរដោនេកំពូល: (0,±2) , កំណុំ: (0,±2) និង (±1,0) , ចំណុចឆ្លុះ: (0,±2) និង (±1,0) , អុីចសង់ទ្រីសុីតេ: <InlineMath math="e= \frac{c}{b} = \frac{\sqrt{3}}{2}" /></p>

        </div>,
        <div key="a3" className="space-y-2">
          <p>គេឲ្យ៖​<InlineMath math=" 9x^2+25y^2-36x-189=0" /></p>
          <p>បម្លែងទៅទម្រង់ស្តង់ដា៖</p>
          <InlineMath math="9x^2 + 25y^2 = 36x + 189 \implies \frac{(x-2)^2}{4} + \frac{(y-3)^2}{9} = 1" />
          <p>ដោយ: <InlineMath math="a^2 = 4, b^2 = 9" /></p>
          <p>នោះ៖ <InlineMath math="a = 2, b = 3" /></p>
          <p>ដោយសារ <InlineMath math="b > a" /> អ័ក្សធំស្ថិតនៅលើអ័ក្ស y ។ ចំណុចកណ្ដាលនៃអេលីបនេះគឺនៅ (2,3)។</p>
          <p>កូអរដោនេចំណុចឆ្លុះ</p>
          <p>ដើម្បីរកកូអរដោនេចំណុចឆ្លុះ យើងត្រូវរកតម្លៃ c ជាមុនសិន ដោយប្រើរូបមន្ត <InlineMath math="c^2 = b^2 - a^2" /></p>
          <p>គេមាន៖ <InlineMath math="c^2 = 9 - 4 = 5" /></p>
          <p>នាំឲ៖ <InlineMath math="c = \sqrt{5}" /></p>
          <p>អុីចសង់ទ្រីសុីតេ</p>
          <p>អុីចសង់ទ្រីសុីតេ e ជារង្វាស់នៃភាពសំប៉ែតរបស់អេលីប ដែលគណនាដោយរូបមន្ត <InlineMath math="e= \frac{c}{b} = \frac{\sqrt{5}}{3}" /></p>
          <p>ដូចនេះគេបាន៖កូអរដោនេកំពូល: (±2,3) , កំណុំ: (±2,3) និង (2,±3) , ចំណុចឆ្លុះ: (±2,3) និង (2,±3) , អុីចសង់ទ្រីសុីតេ: <InlineMath math="e= \frac{c}{b} = \frac{\sqrt{5}}{3}" /></p>
        </div>,
        <div key="a4" className="space-y-2">
          <p>គេឲ្យ៖​<InlineMath math=" 9y^2+25x^2-36y-189=0" /></p>
          <p>បម្លែងទៅទម្រង់ស្តង់ដា៖</p>
          <InlineMath math="9y^2 + 25x^2 = 36y + 189 \implies \frac{(y-2)^2}{4} + \frac{(x-3)^2}{9} = 1" />
          <p>ដោយ: <InlineMath math="a^2 = 4, b^2 = 9" /></p>
          <p>នោះ៖ <InlineMath math="a = 2, b = 3" /></p>
          <p>ដោយសារ <InlineMath math="b > a" /> អ័ក្សធំស្ថិតនៅលើអ័ក្ស x ។ ចំណុចកណ្ដាលនៃអេលីបនេះគឺនៅ (3,2)។</p>
          <p>កូអរដោនេចំណុចឆ្លុះ</p>
          <p>ដើម្បីរកកូអរដោនេចំណុចឆ្លុះ យើងត្រូវរកតម្លៃ c ជាមុនសិន ដោយប្រើរូបមន្ត <InlineMath math="c^2 = b^2 - a^2" /></p>
          <p>គេមាន៖ <InlineMath math="c^2 = 9 - 4 = 5" /></p>
          <p>នាំឲ៖ <InlineMath math="c = \sqrt{5}" /></p>
          <p>អុីចសង់ទ្រីសុីតេ</p>
          <p>អុីចសង់ទ្រីសុីតេ e ជារង្វាស់នៃភាពសំប៉ែតរបស់អេលីប ដែលគណនាដោយរូបមន្ត <InlineMath math="e= \frac{c}{b} = \frac{\sqrt{5}}{3}" /></p>
          <p>ដូចនេះគេបាន៖កូអរដោនេកំពូល: (±3,2) , កំណុំ: (±3,2) និង (3,±2) , ចំណុចឆ្លុះ: (±3,2) និង (3,±2) , អុីចសង់ទ្រីសុីតេ: <InlineMath math="e= \frac{c}{b} = \frac{\sqrt{5}}{3}" /></p>
        </div>,
        <div key="a5" className="space-y-2">
          <p>គេឲ្យ៖​<InlineMath math=" 9x^2+16y^2-90x-96y+225=0" /></p>
          <p>បម្លែងទៅទម្រង់ស្តង់ដា៖</p>
          <BlockMath math="9x^2 + 16y^2 = 90x + 96y - 225 \implies \frac{(x-5)^2}{25} + \frac{(y-3)^2}{9} = 1" />
          <p>ដោយ: <InlineMath math="a^2 = 25, b^2 = 9" /></p>
          <p>នោះ៖ <InlineMath math="a = 5, b = 3" /></p>
          <p>ដោយសារ <InlineMath math="b < a" /> អ័ក្សធំស្ថិតនៅលើអ័ក្ស x ។ ចំណុចកណ្ដាលនៃអេលីបនេះគឺនៅ (5,3)។</p>
          <p>កូអរដោនេចំណុចឆ្លុះ</p>
          <p>ដើម្បីរកកូអរដោនេចំណុចឆ្លុះ យើងត្រូវរកតម្លៃ c ជាមុនសិន ដោយប្រើរូបមន្ត <InlineMath math="c^2 = a^2 - b^2" /></p>
          <p>គេមាន៖ <InlineMath math="c^2 = 25 - 9 = 16" /></p>
          <p>នាំឲ៖ <InlineMath math="c = \sqrt{16} = 4" /></p>
          <p>អុីចសង់ទ្រីសុីតេ</p>
          <p>អុីចសង់ទ្រីសុីតេ e ជារង្វាស់នៃភាពសំប៉ែតរបស់អេលីប ដែលគណនាដោយរូបមន្ត <InlineMath math="e= \frac{c}{a} = \frac{4}{5}" /></p>
          <p>ដូចនេះគេបាន៖កូអរដោនេកំពូល: (±5,3) , កំណុំ: (±5,3) និង (5,±3) , ចំណុចឆ្លុះ: (±5,3) និង (5,±3) , អុីចសង់ទ្រីសុីតេ: <InlineMath math="e= \frac{c}{a} = \frac{4}{5}" /></p>
        </div>
      ]
    },
    {
      id: "ex3",
      title: "លំហាត់អនុវត្តទី ៣",
      description: "អុីពែបូល",
      problemType: "Hyperbola",
      problems: [
        <div key="ex3-1">
          កំណត់កូអរដោនេ​ផ្ចិត​ កំពូល កំណុំ ​និង​អាសុីមតូតនៃ​អុីពែបូល​<br />
          <InlineMath math="x^2 - 5y^2 = 25" />
        </div>,
        <div key="ex3-2">
          កំណត់កូអរដោនេ​ផ្ចិត​ កំពូល កំណុំ ​និង​អាសុីមតូតនៃ​អុីពែបូល​<br />
          <InlineMath math="y^2 - x^2 = 16" />
        </div>,
        <div key="ex3-3">
          កំណត់កូអរដោនេ​ផ្ចិត​ កំពូល កំណុំ ​និង​អាសុីមតូតនៃ​អុីពែបូល​<br />
          <InlineMath math="4x^2 - 4y^2 + 8x + 2y - 1=0" />
        </div>,
        <div key="ex3-4">
          កំណត់កូអរដោនេ​ផ្ចិត​ កំពូល កំណុំ ​និង​អាសុីមតូតនៃ​អុីពែបូល​<br />
          <InlineMath math="4(x - 2)^2 - 9(y + 3)^2 = 36" />
        </div>,
        <div key="ex3-5">
          រកសមីការស្តង់ដានៃ​អុីពែបូលដែលផ្ទៀងផ្ទាត់លក្ខនីមួយៗ<br />
          <InlineMath math="ផ្ចិត​ (0,0) កំពូលV(0,3)និង កំណុំ F(0,5)" />
        </div>,
      ],
      answers: [
        <div key="a1" className="space-y-2">
          <div>
            គេឲ្យ៖​ <InlineMath math="x^2 - 5y^2 = 25" />
            <p>បម្លែងទៅទម្រង់ស្តង់ដា៖</p>
            <p>យើងបែងចែកសមីការទាំងមូលនឹង 25 ដើម្បីអោយផ្នែកខាងស្តាំស្មើនឹង 1:</p>
            <InlineMath math=" \frac{x^2}{25} - \frac{y^2}{5} = 1" />
            <p>សមីការនេះមានទម្រង់ស្តង់ដារ <InlineMath math=" \frac{x^2}{25} - \frac{y^2}{5} = 1" /> ដែលអុីពែបូលស្ថិតនៅលើអ័ក្ស x។</p>
            <p>កំណត់តម្លៃ a, b, និង c:</p>
            <p>យើងមាន <InlineMath math="a^2 = 25" /> និង <InlineMath math="b^2 = 5" /></p>
            <p>ដូចនេះ <InlineMath math="a = 5" /> និង <InlineMath math="b = \sqrt{5}" /></p>
            <p>ដើម្បីរក c យើងប្រើរូបមន្ត <InlineMath math="c^2 = a^2 + b^2" /></p>
            <p>គេមាន <InlineMath math="c^2 = 25 + 5 = 30" /></p>
            <p>នាំឲ <InlineMath math="c = \sqrt{30}" /></p>
            <p>អាសុីមតូត: <InlineMath math="y = ±\frac{b}{a}x = ±\frac{\sqrt{5}}{5}x" /></p>
            <p>ដូចនេះគេបាន៖​ <InlineMath math="កូអរដោនេផ្ចិត: (0,0) , កំពូល: (±\sqrt{5},0) , កំណុំ: (±\sqrt{30},0) , អាសុីមតូត: y = ±\frac{\sqrt{5}}{5}x" /></p>
          </div>
        </div>,
        <div key="a2" className="space-y-2">
          គេឲ្យ៖​ <InlineMath math="y^2 - x^2 = 16" />
          <p>បម្លែងទៅទម្រង់ស្តង់ដា៖</p>
          <p>យើងបែងចែកសមីការទាំងមូលនឹង 16 ដើម្បីអោយផ្នែកខាងស្តាំស្មើនឹង 1:</p>
          <InlineMath math=" \frac{y^2}{16} - \frac{x^2}{16} = 1" />
          <p>សមីការនេះមានទម្រង់ស្តង់ដា <InlineMath math=" \frac{y^2}{16} - \frac{x^2}{16} = 1" /> ដែលអុីពែបូលស្ថិតនៅលើអ័ក្ស y។</p>
          <p>កំណត់តម្លៃ a, b, និង c:</p>
          <p>យើងមាន <InlineMath math="a^2 = 16" /> និង <InlineMath math="b^2 = 16" />។</p>
          <p>ដូចនេះ <InlineMath math="a = 4" /> និង <InlineMath math="b = 4" />។</p>
          <p>ដើម្បីរក c យើងប្រើរូបមន្ត <InlineMath math="c^2 = a^2 + b^2" />។</p>
          <p>គេមាន <InlineMath math="c^2 = 16 + 16 = 32" />។</p>
          <p>នាំឲ <InlineMath math="c = \sqrt{32} = 4\sqrt{2}" />។</p>
          <p>អាសុីមតូត : <InlineMath math="y = ±\frac{a}{b}x = ±x" /></p>
          <p>ដូចនេះគេបាន៖​ <InlineMath math="កូអរដោនេផ្ចិត: (0,0) , កំពូល: (0,±4) , កំណុំ: (0,±4\sqrt{2}) , អាសុីមតូត: y = ±x" /></p>
        </div>,
        <div key="a3">
          <p>គេឲ្យ៖​ <InlineMath math="4x^2 - 4y^2 + 8x + 2y - 1=0" /></p>
          <p>បម្លែងទៅទម្រង់ស្តង់ដា៖</p>
          <p>យើងត្រូវបំបែកសមីការទាំងមូលដោយ 1 ដើម្បីអោយផ្នែកខាងស្តាំស្មើនឹង 1:</p>
          <InlineMath math=" \frac{4x^2 - 4y^2 + 8x + 2y - 1}{1} = 1" />
          <p>បន្ទាប់មកយើងអាចសរសេរសមីការនេះឡើងវិញដូចខាងក្រោម:</p>
          <InlineMath math=" \frac{4(x^2 + 2x)}{1} - \frac{4(y^2 - \frac{1}{2}y)}{1} = 1" />
          <p>សមីការនេះមានទម្រង់ស្តង់ដា <InlineMath math=" \frac{4(x^2 + 2x)}{1} - \frac{4(y^2 - \frac{1}{2}y)}{1} = 1" /> ដែលអុីពែបូលស្ថិតនៅលើអ័ក្ស x។</p>
          <p>កំណត់តម្លៃ a, b, និង c:</p>
          <p>យើងមាន <InlineMath math="a^2 = 1" /> និង <InlineMath math="b^2 = 1" /></p>
          <p>ដូចនេះ <InlineMath math="a = 1" /> និង <InlineMath math="b = 1" /></p>
          <p>ដើម្បីរក c យើងប្រើរូបមន្ត <InlineMath math="c^2 = a^2 + b^2" /></p>
          <p>គេមាន <InlineMath math="c^2 = 1 + 1 = 2" /></p>
          <p>នាំឲ <InlineMath math="c = \sqrt{2}" /></p>
          <p>អាសុីមតូត: <InlineMath math="y = ±\frac{b}{a}x = ±x" /></p>
          <p>ដូចនេះគេបាន៖​ <InlineMath math="កូអរដោនេផ្ចិត: (0,0) , កំពូល: (0,±1) , កំណុំ: (0,±\sqrt{2}) , អាសុីមតូត: y = ±x" /></p>
        </div>
      ]
    },
  ]

  return (
    <>
      <SummaryBox
        title="រូបមន្តគន្លឹះ និងវិធីដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល"
        sections={summary}
      />
      <TopicPracticeBox exercises={practiceExercises} />
    </>
  )
}

export default ConicPractice
