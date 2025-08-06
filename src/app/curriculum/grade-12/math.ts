import { Content } from "@/types/curriculum";
import {
  Calculator,
  Target,
  FunctionSquare,
  Variable,
  Box,
} from "lucide-react";
import LimitZeroOverZero from "@/components/pages/docs/grade-12/limit/Limit-Zero-Over-Zero";
import LimitAsymptotes from "@/components/pages/docs/grade-12/limit/Limit-Asymptotes";
import LimitContinuity from "@/components/pages/docs/grade-12/limit/Limit-Continuity";
import LimitInfinityMinusInfinity from "@/components/pages/docs/grade-12/limit/Limit-Infinity-Minus-Infinity";
import LimitTrigonometric from "@/components/pages/docs/grade-12/limit/Limit-Trigonometric";
import LimitExponential from "@/components/pages/docs/grade-12/limit/Limit-Exponential";
import LHopitalRule from "@/components/pages/docs/grade-12/limit/L’Hôpital-Rule";
import LimitPorformation from "@/components/pages/docs/grade-12/limit/Limit-Portformation";
import Footer from "@/components/common/Footer";
import LimitDefinition  from "@/components/pages/docs/grade-12/limit/LimitDefinition";
import LimitInfinityOverInfinity from "@/components/pages/docs/grade-12/limit/Limit-Infinity-Over-Infinity";
import LimitPractice from "@/components/pages/docs/grade-12/limit/Limit-Practice";
import LimitLogarithmic from "@/components/pages/docs/grade-12/limit/Limit-Logarithmic";
import DerivativeDefinition from "@/components/pages/docs/grade-12/derivative/Definition";
import DerivativePerformation from "@/components/pages/docs/grade-12/derivative/Derivative-Performation";
import DerivativeLogarithmic from "@/components/pages/docs/grade-12/derivative/Derivative-Logarithmic";
import DerivativeExponential from "@/components/pages/docs/grade-12/derivative/Derivative-Exponential";
import DerivativeTrigonometric from "@/components/pages/docs/grade-12/derivative/Derivative-Trigonometric";
import DerivativeGeometric from "@/components/pages/docs/grade-12/derivative/derivative-Geometry";
import DerivativePractice from "@/components/pages/docs/grade-12/derivative/Derivative-Practice";
import DerivativeHighLevel from "@/components/pages/docs/grade-12/derivative/Derivative-high-level";
import IntergralDefinition from "@/components/pages/docs/grade-12/integral/integral-Definition";
import Integralformular from "@/components/pages/docs/grade-12/integral/Integral-formular";
import IndefiniteIntegral from "@/components/pages/docs/grade-12/integral/Indefinite-Integral";
import DefiniteIntegral from "@/components/pages/docs/grade-12/integral/Definite-Integral";
import IntegralPractice from "@/components/pages/docs/grade-12/integral/Integral-Practice";
import VectorDefinition from "@/components/pages/docs/grade-12/vector/Vector-Definition";
import DotProduct from "@/components/pages/docs/grade-12/vector/2D Vector Coordinates/Dot-Product";
import TriangleArea from "@/components/pages/docs/grade-12/vector/Shape Area/Triangle-Area";
import PrismVolume from "@/components/pages/docs/grade-12/vector/Volume/Prism-Volume";
import ParametricEquation from "@/components/pages/docs/grade-12/vector/Equations/Parametric-Equation";
import differentialdefinition from "@/components/pages/docs/grade-12/differential equation/Differential-Definition";
import DifferentialPractice from "@/components/pages/docs/grade-12/differential equation/Differential-Practice";
import LDE1Homogeneous from "@/components/pages/docs/grade-12/differential equation/LDE1/LDE1-Homogeneous";
import LDE2Homogeneous from "@/components/pages/docs/grade-12/differential equation/LDE2/LDE2-Homogeneous";
import LDEnHomogeneous from "@/components/pages/docs/grade-12/differential equation/LDE-n/LDE-n-Homogeneous";
import LDEnNonHomogeneous from "@/components/pages/docs/grade-12/differential equation/LDE-n/LDE-n-Non-Homogeneous";
import Separable from "@/components/pages/docs/grade-12/differential equation/Various DE Forms/Separable ";
import VectorPractice from "@/components/pages/docs/grade-12/vector/Vector-Practice";

export const math: Content = {
  subject: "math",
  title: "គណិតវិទ្យា",
  englishTitle: "Mathematics",
  icon: Calculator,
  lessons: [
    {
      lesson: "limits",
      title: "លីមីត",
      englishTitle: "Limits",
      icon: Target,
      topics: [
        {
          title: "និយមន័យលីមីត",
          englishTitle: "definition",
          component: LimitDefinition,
        },
        {
          title: "ប្រមាណវិធីលេីលីមីត",
          englishTitle: "methods",
          component: LimitPorformation,
        },
        {
          title: "លីមីតរាង​ ០/០",
          englishTitle: "zero-over-zero",
          component: LimitZeroOverZero,
        },
        {
          title: "លីមីតរាង ∞/∞",
          englishTitle: "infinity-over-infinity",
          component: LimitInfinityOverInfinity,
        },
        {
          title: "លីមីតរាង +∞ - ∞",
          englishTitle: "infinity-minus-infinity",
          component: LimitInfinityMinusInfinity,
        },
        {
          title: "លីមីតអនុគមន៍ត្រីកោណមាត្រ",
          englishTitle: "trigonometric",
          component: LimitTrigonometric,
        },
        {
          title: "លីមីតអនុគមន៍អុិចស្បូណង់ស្យែល",
          englishTitle: "exponential",
          component: LimitExponential,
        },
        {
          title: "លីមីតឡូការីតនេពែ",
          englishTitle: "logarithmic",
          component: LimitLogarithmic,
        },
        {
          title: "ភាពជាប់នៃលីមីត",
          englishTitle: "continuity",
          component: LimitContinuity,
        },
        {
          title: "អាសុីមកូត",
          englishTitle: "asymptotes",
          component: LimitAsymptotes,
        },
        {
          title: "ទ្រឹស្តីបទឡូពីតាល់",
          englishTitle: "LHopitalRule",
          component: LHopitalRule,
        },
        {
          title: "លំហាត់អនុវត្ត",
          englishTitle: "practice",
          component: LimitPractice,
        },
      ],
    },
    {
      lesson: "derivatives",
      title: "ដេរីវេ",
      englishTitle: "Derivatives",
      icon: FunctionSquare,
      topics: [
        {
          title: "និយមន័យដេរីវេ",
          englishTitle: "derivative-definition",
          component: DerivativeDefinition,
        },
        {
          title: "រូបមន្តដេរីវេ",
          englishTitle: "derivative-rules",
          component: DerivativePerformation,
        },
        {
          title: "ដេរីវេពីជគណិត",
          englishTitle: "derivative-geometric",
          component: DerivativeGeometric,
        },
        {
          title: "ដេរីវេអនុគមន៍ត្រីកោណមាត្រ",
          englishTitle: "derivative-trigonometric",
          component: DerivativeTrigonometric,
        },
        {
          title: "ដេរីវេអនុគមន៍អុិចស្បូណង់ស្យែល",
          englishTitle: "derivative-exponential",
          component: DerivativeExponential,
        },
        {
          title: "ដេរីវេឡូការីតនេពែ",
          englishTitle: "derivative-logarithmic",
          component: DerivativeLogarithmic,
        },
        {
          title: "ដេរីវេឡូលំដាប់ខ្ពស់",
          englishTitle: "derivative-high-level",
          component: DerivativeHighLevel,
        },
        {
          title: "លំហាត់អនុវត្ត",
          englishTitle: "derivative-practice",
          component: DerivativePractice,
        },
      ],
    },
    {
      lesson: "integration",
      title: "អាំងតេក្រាល",
      englishTitle: "Integration",
      icon: Variable,
      topics: [
        {
          title: "និយមន័យអាំងតេក្រាល",
          englishTitle: "Integral-definition",
          component: IntergralDefinition,
        },
        {
          title: "រូបមន្តអាំងតេក្រាល",
          englishTitle: "Integral-formular",
          component: Integralformular,
        },
        {
          title: "អាំងតេក្រាលមិនកំណត់",
          englishTitle: "indefinite",
          component: IndefiniteIntegral,
          // still fix 
          subtopics: [

          ]
        },
        {
          title: "អាំងតេក្រាលកំណត់",
          englishTitle: "definite",
          component: DefiniteIntegral,
          // still fix 
          subtopics: [

          ]
        },
        {
          title: "លំហាត់អនុវត្ត",
          englishTitle: "Integral-practice",
          component: IntegralPractice,
        },
      ],
    },
    {
      lesson: "vectors",
      title: "វ៉ិចទ័រ",
      englishTitle: "Vectors",
      icon: Box,
      topics: [
        {
          title: "និយមន័យវ៉ិចទ័រ",
          englishTitle: "Vector-definition",
          component: VectorDefinition,
        },
        {
          title: "កូអរដោនេនៃវ៉ិចទ័រក្នុងលំហ",
          englishTitle: "Dimensional-coordinates",
          component: DotProduct,
          // still fix 
          subtopics: [

          ]
        },
        {
          title: "ផ្ទៃក្រាឡា",
          englishTitle: "Triangle-area",
          component: TriangleArea,
          // still fix 
          subtopics: [

          ]
        },
        {
          title: "មាឌ",
          englishTitle: "Prism-volume",
          component: PrismVolume,
          // still fix 
          subtopics: [

          ]
        },
        {
          title: "សមីការ",
          englishTitle: "Parametric-equation",
          component: ParametricEquation,
          // still fix 
          subtopics: [

          ]
        },
        {
          title: "លំហាត់អនុវត្ត",
          englishTitle: "Vector-practice",
          component: VectorPractice,
        },
      ],
    },
    {
      lesson: "diffential-equations",
      title: "សមីការឌីផេរ៉ង់សែ្យល",
      englishTitle: "Differential-Equations",
      icon: Box,
      topics: [
        {
          title: "និយមន័យសមីការឌីផេរ៉ង់សែ្យល",
          englishTitle: "Differential-equation-definition",
          component: differentialdefinition,
        },
        {
          title: "សមីការឌីផែរ៉ង់ស្សែលលីនែអ៌ែរលំដាប់១មានមេគុណថេរ",
          englishTitle: "Linear-differential-equation-homogeneous-order-1",
          component: LDE1Homogeneous,
          // still fix 
        },
        {
          title: "សមីការឌីផែរ៉ង់ស្សែលលីនែអ៌ែរលំដាប់២មានមេគុណថេរ",
          englishTitle: "Linear-differential-equation-homogeneous-order-2",
          component: LDE2Homogeneous,
          // still fix 
        },
        {
          title: "សមីការឌីផែរ៉ង់ស្សែលលីនែអ៌ែរលំដាប់ទូទៅមានមេគុណថេរ",
          englishTitle: "General-linear-differential-equation-homogeneous",
          component: LDEnHomogeneous,
          // still fix 
        },
        {
          title: "សមីការឌីផែរ៉ង់ស្សែលទម្រង់ផ្សេងៗ",
          englishTitle: "Separable-differential-equation",
          component: Separable,
          // still fix 
        },
        {
          title: "លំហាត់អនុវត្ត",
          englishTitle: "Differential-practice",
          component: DifferentialPractice,
        },
      ]
    }
  ],
};
