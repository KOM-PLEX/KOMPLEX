import TopicPracticeBox from "../../../common/box/TopicPracticeBox";
import { BlockMath, InlineMath } from "react-katex";
import 'katex/dist/katex.min.css';
import HintBox from "../../../common/box/HintBox";
import SummaryBox from "../../../common/box/SummaryBox";
import { AlertTriangleIcon, BookAIcon, ChartBarIcon, LightbulbIcon, WrenchIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/topic";

const DifferentialPractice = () => {

  const summary: SummarySection[] = [
    {
      key: "formulas",
      title: "រូបមន្តសំខាន់ៗ",
      icon: BookAIcon,
      content: (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-indigo-600">•</span>
            <span>សមីការលីនេអែអូម៉ូសែនលំដាប់ទី២៖</span>
            <InlineMath math="ay'' + by' + cy = 0" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-indigo-600">•</span>
            <span>សមីការសម្គាល់៖</span>
            <InlineMath math="ar^2 + br + c = 0" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-indigo-600">•</span>
            <span>សមីការមិនអូម៉ូសែន៖</span>
            <InlineMath math="ay'' + by' + cy = f(x)" />
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
      description: "ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលលីនេអែអូម៉ូសែនលំដាប់ទី២៖",
      problemType: "Linear Homogeneous 2nd Order",
      problems: [
        <BlockMath key="p1" math={"y'' + 4y' - 5y = 0"} />,
        <BlockMath key="p2" math={"y'' - 2y' + y = 0"} />,
        <BlockMath key="p3" math={"y'' + 9y = 0"} />,
        <BlockMath key="p4" math={"y'' + 4y' + 4y = 0"} />,
      ],
      answers: [
        <div key="a1" className="space-y-2">
          <p>យើងមានសមីការឌីផេរ៉ង់ស្យែលលីនេអែអូម៉ូសែនលំដាប់ទី២៖</p>
          <BlockMath math="y'' + 4y' - 5y = 0" />
          <p>សមីការសម្គាល់គឺ៖</p>
          <BlockMath math="r^2 + 4r - 5 = 0" />
          <p>ដោះស្រាយសមីការសម្គាល់៖</p>
          <BlockMath math="(r + 5)(r - 1) = 0 \implies r_1 = -5, r_2 = 1" />
          <p>ដូចនេះចម្លើយទូទៅគឺ៖</p>
          <BlockMath math="y = c_1 e^x + c_2 e^{-5x}" />
        </div>,
        <div key="a2" className="space-y-2">
          <p>យើងមានសមីការឌីផេរ៉ង់ស្យែលលីនេអែអូម៉ូសែនលំដាប់ទី២៖</p>
          <BlockMath math="y'' - 2y' + y = 0" />
          <p>សមីការសម្គាល់គឺ៖</p>
          <BlockMath math="r^2 - 2r + 1 = 0" />
          <p>ដោះស្រាយសមីការសម្គាល់៖</p>
          <BlockMath math="(r - 1)^2 = 0 \implies r = 1 \text{ (ឫសស្មើគ្នា)}" />
          <p>ដូចនេះចម្លើយទូទៅគឺ៖</p>
          <BlockMath math="y = (c_1 + c_2 x) e^x" />
        </div>,
        <div key="a3" className="space-y-2">
          <p>យើងមានសមីការឌីផេរ៉ង់ស្យែលលីនេអែអូម៉ូសែនលំដាប់ទី២៖</p>
          <BlockMath math="y'' + 9y = 0" />
          <p>សមីការសម្គាល់គឺ៖</p>
          <BlockMath math="r^2 + 9 = 0" />
          <p>ដោះស្រាយសមីការសម្គាល់៖</p>
          <BlockMath math="r = \pm 3i" />
          <p>ដូចនេះចម្លើយទូទៅគឺ៖</p>
          <BlockMath math="y = c_1 \cos(3x) + c_2 \sin(3x)" />
        </div>,
        <div key="a4" className="space-y-2">
          <p>យើងមានសមីការឌីផេរ៉ង់ស្យែលលីនេអែអូម៉ូសែនលំដាប់ទី២៖</p>
          <BlockMath math="y'' + 4y' + 4y = 0" />
          <p>សមីការសម្គាល់គឺ៖</p>
          <BlockMath math="r^2 + 4r + 4 = 0" />
          <p>ដោះស្រាយសមីការសម្គាល់៖</p>
          <BlockMath math="(r + 2)^2 = 0 \implies r = -2 \text{ (ឫសស្មើគ្នា)}" />
          <p>ដូចនេះចម្លើយទូទៅគឺ៖</p>
          <BlockMath math="y = (c_1 + c_2 x) e^{-2x}" />
        </div>
      ]
    },
    {
      id: "ex2",
      title: "លំហាត់អនុវត្តទី ២",
      description: "ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលលីនេអែមិនអូម៉ូសែនលំដាប់ទី១៖",
      problemType: "Linear Non-Homogeneous 1st Order",
      problems: [
        <BlockMath key="p1" math={"y' + y = 1"} />,
        <BlockMath key="p2" math={"y' - 2y = 3\\cos(2x)"} />,
        <BlockMath key="p3" math={"y' + y = x + 2e^x"} />,
        <BlockMath key="p4" math={"y' + y = \\sin(x) - 2\\cos(x)"} />,
        <BlockMath key="p5" math={"y' + y = \\frac{1}{1 + e^{2x}}"} />,
      ],
      answers: [
        <div key="a1" className="space-y-2">
          <p>យើងមានសមីការឌីផេរ៉ង់ស្យែលលីនេអែមិនអូម៉ូសែនលំដាប់ទី១៖</p>
          <BlockMath math="y' + y = 1" />
          <p>ដោះស្រាយសមីការអូម៉ូសែនសិន៖</p>
          <BlockMath math="y' + y = 0 \implies y_c = c e^{-x}" />
          <p>រកចម្លើយពិសេស៖</p>
          <BlockMath math="y_p = 1" />
          <p>ដូចនេះចម្លើយទូទៅគឺ៖</p>
          <BlockMath math="y = y_c + y_p = 1 + c e^{-x}" />
        </div>,
        <div key="a2" className="space-y-2">
          <p>យើងមានសមីការឌីផេរ៉ង់ស្យែលលីនេអែមិនអូម៉ូសែនលំដាប់ទី១៖</p>
          <BlockMath math="y' - 2y = 3\\cos(2x)" />
          <p>ដោះស្រាយសមីការអូម៉ូសែនសិន៖</p>
          <BlockMath math="y' - 2y = 0 \implies y_c = c e^{2x}" />
          <p>រកចម្លើយពិសេស៖</p>
          <BlockMath math="y_p = A\\cos(2x) + B\\sin(2x)" />
          <p>ដូចនេះចម្លើយទូទៅគឺ៖</p>
          <BlockMath math="y = c e^{2x} - \\frac{3}{5}\\cos(2x) - \\frac{6}{5}\\sin(2x)" />
        </div>,
        <div key="a3" className="space-y-2">
          <p>យើងមានសមីការឌីផេរ៉ង់ស្យែលលីនេអែមិនអូម៉ូសែនលំដាប់ទី១៖</p>
          <BlockMath math="y' + y = x + 2e^x" />
          <p>ដោះស្រាយសមីការអូម៉ូសែនសិន៖</p>
          <BlockMath math="y' + y = 0 \implies y_c = c e^{-x}" />
          <p>រកចម្លើយពិសេស៖</p>
          <BlockMath math="y_p = x - 1 + e^x" />
          <p>ដូចនេះចម្លើយទូទៅគឺ៖</p>
          <BlockMath math="y = x - 1 + c e^{-x} + e^x" />
        </div>,
        <div key="a4" className="space-y-2">
          <p>យើងមានសមីការឌីផេរ៉ង់ស្យែលលីនេអែមិនអូម៉ូសែនលំដាប់ទី១៖</p>
          <BlockMath math="y' + y = \\sin(x) - 2\\cos(x)" />
          <p>ដោះស្រាយសមីការអូម៉ូសែនសិន៖</p>
          <BlockMath math="y' + y = 0 \implies y_c = c e^{-x}" />
          <p>រកចម្លើយពិសេស៖</p>
          <BlockMath math="y_p = \\frac{1}{2}\\sin(x) - \\frac{3}{2}\\cos(x)" />
          <p>ដូចនេះចម្លើយទូទៅគឺ៖</p>
          <BlockMath math="y = c e^{-x} + \\frac{1}{2}\\sin(x) - \\frac{3}{2}\\cos(x)" />
        </div>,
        <div key="a5" className="space-y-2">
          <p>យើងមានសមីការឌីផេរ៉ង់ស្យែលលីនេអែមិនអូម៉ូសែនលំដាប់ទី១៖</p>
          <BlockMath math="y' + y = \\frac{1}{1 + e^{2x}}" />
          <p>ដោះស្រាយសមីការអូម៉ូសែនសិន៖</p>
          <BlockMath math="y' + y = 0 \implies y_c = c e^{-x}" />
          <p>រកចម្លើយពិសេស៖</p>
          <BlockMath math="y_p = \\frac{1}{2}\\ln(1 + e^{2x})" />
          <p>ដូចនេះចម្លើយទូទៅគឺ៖</p>
          <BlockMath math="y = c e^{-x} + \\frac{1}{2}\\ln(1 + e^{2x})" />
        </div>
      ]
    },
    {
      id: "ex3",
      title: "លំហាត់អនុវត្តទី ៣",
      description: "ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលលីនេអែមិនអូម៉ូសែនលំដាប់ទី២៖",
      problemType: "Linear Non-Homogeneous 2nd Order",
      problems: [
        <BlockMath key="p1" math={"y'' + 9y' - 10y = 8 + 72x - 40x^2"} />,
        <BlockMath key="p2" math={"y'' - 2y = x + 2e^x"} />,
        <BlockMath key="p3" math={"y'' + 2y' + y = x e^{-x}"} />,
        <BlockMath key="p4" math={"y'' - 2y' - 3y = 2\\sin(x)"} />,
        <BlockMath key="p5" math={"y'' + y' - 2y = 3\\cos(2x)"} />,
      ],
      answers: [
        <BlockMath key="a1" math="y = c_1 e^x + c_2 e^{-10x} + 4x^2 - 8x + 1" />,
        <BlockMath key="a2" math="y = c_1 e^{\\sqrt{2}x} + c_2 e^{-\\sqrt{2}x} - \\frac{x}{2} - e^x" />,
        <BlockMath key="a3" math="y = (c_1 + c_2 x + \\frac{x^3}{6}) e^{-x}" />,
        <BlockMath key="a4" math="y = c_1 e^{3x} + c_2 e^{-x} - \\frac{1}{5}\\sin(x) - \\frac{1}{5}\\cos(x)" />,
        <BlockMath key="a5" math="y = c_1 e^x + c_2 e^{-2x} - \\frac{3}{5}\\cos(2x) - \\frac{6}{5}\\sin(2x)" />
      ]
    },
    {
      id: "ex4",
      title: "លំហាត់អនុវត្តទី ៤",
      description: "ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលជាមួយលក្ខខណ្ឌដំបូង៖",
      problemType: "Initial Value Problems",
      problems: [
        (
          <div key="p1" className="flex items-center gap-3 justify-center flex-wrap">
            <BlockMath math={"y'' + 2y' - 3y = 0"} />
            <InlineMath math={"y(0)=0"} />
            <InlineMath math={"y'(0)=1"} />
          </div>
        ),
        (
          <div key="p2" className="flex items-center gap-3 justify-center flex-wrap">
            <BlockMath math={"y'' + 4y = 0"} />
            <InlineMath math={"y(0)=1"} />
            <InlineMath math={"y'(0)=2"} />
          </div>
        ),
        (
          <div key="p3" className="flex items-center gap-3 justify-center flex-wrap">
            <BlockMath math={"y'' - 2y' + 5y = 0"} />
            <InlineMath math={"y(0)=1"} />
            <InlineMath math={"y'(0)=-1"} />
          </div>
        ),
        (
          <div key="p4" className="flex items-center gap-3 justify-center flex-wrap">
            <BlockMath math={"y'' + 2y' + 5y = 0"} />
            <InlineMath math={"y(0)=0"} />
            <InlineMath math={"y'(0)=1"} />
          </div>
        ),
      ],
      answers: [
        <BlockMath key="a1" math="y = \\frac{1}{4}(e^{3x} - e^{-x})" />,
        <BlockMath key="a2" math="y = \\cos(2x) + \\sin(2x)" />,
        <BlockMath key="a3" math="y = e^x(\\cos(2x) - \\sin(2x))" />,
        <BlockMath key="a4" math="y = \\frac{1}{2} e^{-x} \\sin(2x)" />
      ]
    }
  ];

  return (
    <>
      <SummaryBox
        title="រូបមន្តគន្លឹះ និងវិធីដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល"
        sections={summary}
      />
      <TopicPracticeBox exercises={practiceExercises} />
    </>
  );
}

export default DifferentialPractice
