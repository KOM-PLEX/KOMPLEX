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
import differentialdefinition from "@/components/pages/docs/grade-12/differential equation/Differential-Definition";
import DifferentialPractice from "@/components/pages/docs/grade-12/differential equation/Differential-Practice";
import VectorPractice from "@/components/pages/docs/grade-12/vector/Vector-Practice";
import TwoDVectorCoordinates from "@/components/pages/docs/grade-12/vector/2D-Vector-Coordinates";
import ShapeArea from "@/components/pages/docs/grade-12/vector/Shape-Area";
import Volume from "@/components/pages/docs/grade-12/vector/Volume";
import Equations from "@/components/pages/docs/grade-12/vector/Equations";
import LDE1 from "@/components/pages/docs/grade-12/differential equation/LDE1";
import LDE2 from "@/components/pages/docs/grade-12/differential equation/LDE2";
import LDEGeneral from "@/components/pages/docs/grade-12/differential equation/LDE-General";
import VariousForms from "@/components/pages/docs/grade-12/differential equation/Various-Forms";
import Parabola from "@/components/pages/docs/grade-12/conic/Parabola";
import Ellipse from "@/components/pages/docs/grade-12/conic/Ellipse";
import Hyperbola from "@/components/pages/docs/grade-12/conic/Hyperbola";
import ConicPractice from "@/components/pages/docs/grade-12/conic/Conic-Practice";
import FunctionDefinition from "@/components/pages/docs/grade-12/Function/Function-Definition";
import PolynomialFunction from "@/components/pages/docs/grade-12/Function/Polynomial-Function";
import ExponentialFunction from "@/components/pages/docs/grade-12/Function/Exponential-Function";
import LogarithmicFunction from "@/components/pages/docs/grade-12/Function/Logarithmic-Function";
import EquationFunction from "@/components/pages/docs/grade-12/Function/Equation-Function";
import FunctionAnalysisPlan from "@/components/pages/docs/grade-12/Function/Function-Analysis-Plan";
import FunctionPractice from "@/components/pages/docs/grade-12/Function/Function-Practice";
import ProbabilityDefinition from "@/components/pages/docs/grade-12/Probability/Probability-Definition";
import ProbabilityCombination from "@/components/pages/docs/grade-12/Probability/Probab-Combination";
import ProbabilityPermutation from "@/components/pages/docs/grade-12/Probability/Probab-Permutation";
import ProbabilityPractice from "@/components/pages/docs/grade-12/Probability/Probab-Practice";
import ComplexDefinition from "@/components/pages/docs/grade-12/Complex/Complex-Definition";
import ComplexFormulars from "@/components/pages/docs/grade-12/Complex/Complex-Formulars";
import ComplexOperations from "@/components/pages/docs/grade-12/Complex/Complex-Operations";
import ComplexModulus from "@/components/pages/docs/grade-12/Complex/Complex-Modulus";
import QuadraticEquation from "@/components/pages/docs/grade-12/Complex/Quadratic-Equation";
import TrigonometricForm from "@/components/pages/docs/grade-12/Complex/Trigonometric-Form";
import ComplexPractice from "@/components/pages/docs/grade-12/Complex/Complex-Practice";

export const math: Content = {
  subject: "math",
  title: "គណិតវិទ្យា",
  englishTitle: "Mathematics",
  icon: Calculator,
  lessons: [
    {
      lesson: "Complex",
      title: "កំុផ្លិច",
      englishTitle: "Complex",
      icon: Target,
      topics: [
        {
          title: "និយមន័យកំុផ្លិច",
          englishTitle: "Complex-Definition",
          component: ComplexDefinition
        },
        {
          title: "រូបមន្តកំុផ្លិច",
          englishTitle: "Complex-Formulas",
          component: ComplexFormulars
        },
        {
          title: "ប្រមាណវិធីលើចំនួនកំុផ្លិច",
          englishTitle: "Complex-Operations",
          component: ComplexOperations
        },
        {
          title: "ម៉ូឌុលនៃកុំផ្លិច",
          englishTitle: "Complex-Modulus",
          component: ComplexModulus
        },
        {
          title: "សមីការដឺក្រេទី ២",
          englishTitle: "Quadratic-Equation",
          component: QuadraticEquation
        },
        {
          title: "ទម្រង់ត្រីកោណមាត្រ",
          englishTitle: "Trigonometric-Form",
          component: TrigonometricForm
        },
        {
          title: "លំហាត់អនុវត្ត",
          englishTitle: "Complex-Practice",
          component: ComplexPractice
        },  
      ]
    },
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
        },
        {
          title: "អាំងតេក្រាលកំណត់",
          englishTitle: "definite",
          component: DefiniteIntegral,
        },
        {
          title: "លំហាត់អនុវត្ត",
          englishTitle: "Integral-practice",
          component: IntegralPractice,
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
          component: LDE1,
        },
        {
          title: "សមីការឌីផែរ៉ង់ស្សែលលីនែអ៌ែរលំដាប់២មានមេគុណថេរ",
          englishTitle: "Linear-differential-equation-homogeneous-order-2",
          component: LDE2,
        },
        {
          title: "សមីការឌីផែរ៉ង់ស្សែលលីនែអ៌ែរលំដាប់ទូទៅមានមេគុណថេរ",
          englishTitle: "General-linear-differential-equation-homogeneous",
          component: LDEGeneral,
        },
        {
          title: "សមីការឌីផែរ៉ង់ស្សែលទម្រង់ផ្សេងៗ",
          englishTitle: "differential-equation",
          component: VariousForms,
        },
        {
          title: "លំហាត់អនុវត្ត",
          englishTitle: "Differential-practice",
          component: DifferentialPractice,
        },
      ]
    },
    {
      lesson: "Probability",
      title: "ប្រូបាប",
      englishTitle: "Probability",
      icon: Box,
      topics: [
        {
          title: "និយមន័យប្រូបាប",
          englishTitle: "Probability-Definition",
          component: ProbabilityDefinition,
        },
        {
          title: "ប្រូបាបចម្លាស់",
          englishTitle: "Probability-Permutation",
          component: ProbabilityPermutation,
        },
        {
          title: "ប្រូបាបបន្សំ",
          englishTitle: "Probability-Combination",
          component: ProbabilityCombination,
        },
        {
          title: "លំហាត់អនុវត្ត",
          englishTitle: "Probability-Practice",
          component: ProbabilityPractice,
        }, 
      ]
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
          englishTitle: "2D-Vector-coordinates",
          component: TwoDVectorCoordinates,
          
        },
        {
          title: "ផ្ទៃក្រឡា",
          englishTitle: "Shape-area",
          component: ShapeArea,
        },
        {
          title: "មាឌ",
          englishTitle: "Volume",
          component: Volume,
        },
        {
          title: "សមីការ",
          englishTitle: "Vector-Equations",
          component: Equations,
        },
        {
          title: "លំហាត់អនុវត្ត",
          englishTitle: "Vector-practice",
          component: VectorPractice,
        },
      ],
    },
    {
      lesson: "Conics",
      title: "កោនិក",
      englishTitle: "Conics",
      icon: Box,
      topics: [
        {
          title: "ប៉ារ៉ាបូល",
          englishTitle: "Parabola",
          component: Parabola,
        },
        {
          title: "អេលីប",
          englishTitle: "Ellipse",
          component: Ellipse,
        },
        {
          title: "អុីពែបូល",
          englishTitle: "Hyperbola",
          component: Hyperbola,
        },
        {
          title: "លំហាត់អនុវត្ត",
          englishTitle: "Conic-Practice",
          component: ConicPractice,
        },
      ]
    },
    {
      lesson: "Functions",
      title: "អនុគមន៍",
      englishTitle: "Functions",
      icon: Box,
      topics: [
        {
          title: "និយមន័យអនុគមន៍",
          englishTitle: "Function-Definition",
          component: FunctionDefinition,
        },
        {
          title: "អនុគមន៍សនិទាន",
          englishTitle: "Polynomial-Function",
          component: PolynomialFunction,
        },
        {
          title: "អនុគមន៍អិចស្បូណង់ស្យែល ",
          englishTitle: "Exponential-Function",
          component: ExponentialFunction,
        },
        {
          title: "អនុគមន៍ឡូការីត",
          englishTitle: "Logarithmic-Function",
          component: LogarithmicFunction,
        },
        {
          title: "សមីការ",
          englishTitle: "Equation-Function",
          component: EquationFunction,
        },
        {
          title: "ប្លង់សិក្សាអនុគមន៍",
          englishTitle: "Function-Analysis-Plan",
          component: FunctionAnalysisPlan,
        },
        {
          title: "លំហាត់អនុវត្ត",
          englishTitle: "Function-Practice",
          component: FunctionPractice,
        },
      ]
    },
  ],
};
