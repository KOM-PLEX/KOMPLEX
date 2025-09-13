import { Content } from "@/types/docs/curriculum";
import {
  Calculator,
  Target,
  FunctionSquare,
  Variable,
  Box,
} from "lucide-react";
import LimitZeroOverZero from "@/components/pages/docs/grade-12/math/limit/Limit-Zero-Over-Zero";
import LimitAsymptotes from "@/components/pages/docs/grade-12/math/limit/Limit-Asymptotes";
import LimitContinuity from "@/components/pages/docs/grade-12/math/limit/Limit-Continuity";
import LimitInfinityMinusInfinity from "@/components/pages/docs/grade-12/math/limit/Limit-Infinity-Minus-Infinity";
import LimitTrigonometric from "@/components/pages/docs/grade-12/math/limit/Limit-Trigonometric";
import LimitExponential from "@/components/pages/docs/grade-12/math/limit/Limit-Exponential";
import LHopitalRule from "@/components/pages/docs/grade-12/math/limit/L’Hôpital-Rule";
import LimitPorformation from "@/components/pages/docs/grade-12/math/limit/Limit-Portformation";
import LimitDefinition from "@/components/pages/docs/grade-12/math/limit/LimitDefinition";
import LimitInfinityOverInfinity from "@/components/pages/docs/grade-12/math/limit/Limit-Infinity-Over-Infinity";
import LimitPractice from "@/components/pages/docs/grade-12/math/limit/Limit-Practice";
import LimitLogarithmic from "@/components/pages/docs/grade-12/math/limit/Limit-Logarithmic";
import DerivativeDefinition from "@/components/pages/docs/grade-12/math/derivative/Definition";
import DerivativePerformation from "@/components/pages/docs/grade-12/math/derivative/Derivative-Performation";
import DerivativeLogarithmic from "@/components/pages/docs/grade-12/math/derivative/Derivative-Logarithmic";
import DerivativeExponential from "@/components/pages/docs/grade-12/math/derivative/Derivative-Exponential";
import DerivativeTrigonometric from "@/components/pages/docs/grade-12/math/derivative/Derivative-Trigonometric";
import DerivativeGeometric from "@/components/pages/docs/grade-12/math/derivative/derivative-Geometry";
import DerivativePractice from "@/components/pages/docs/grade-12/math/derivative/Derivative-Practice";
import DerivativeHighLevel from "@/components/pages/docs/grade-12/math/derivative/Derivative-high-level";
import IntergralDefinition from "@/components/pages/docs/grade-12/math/integral/integral-Definition";
import Integralformular from "@/components/pages/docs/grade-12/math/integral/Integral-formular";
import IndefiniteIntegral from "@/components/pages/docs/grade-12/math/integral/Indefinite-Integral";
import DefiniteIntegral from "@/components/pages/docs/grade-12/math/integral/Definite-Integral";
import IntegralPractice from "@/components/pages/docs/grade-12/math/integral/Integral-Practice";
import VectorDefinition from "@/components/pages/docs/grade-12/math/vector/Vector-Definition";
import differentialdefinition from "@/components/pages/docs/grade-12/math/differential-equation/Differential-Definition";
import DifferentialPractice from "@/components/pages/docs/grade-12/math/differential-equation/Differential-Practice";
import VectorPractice from "@/components/pages/docs/grade-12/math/vector/Vector-Practice";
import TwoDVectorCoordinates from "@/components/pages/docs/grade-12/math/vector/2D-Vector-Coordinates";
import ShapeArea from "@/components/pages/docs/grade-12/math/vector/Shape-Area";
import Volume from "@/components/pages/docs/grade-12/math/vector/Volume";
import Equations from "@/components/pages/docs/grade-12/math/vector/Equations";
import LDE1 from "@/components/pages/docs/grade-12/math/differential-equation/LDE1";
import LDE2 from "@/components/pages/docs/grade-12/math/differential-equation/LDE2";
import LDEGeneral from "@/components/pages/docs/grade-12/math/differential-equation/LDE-General";
import VariousForms from "@/components/pages/docs/grade-12/math/differential-equation/Various-Forms";
import Parabola from "@/components/pages/docs/grade-12/math/conic/Parabola";
import Ellipse from "@/components/pages/docs/grade-12/math/conic/Ellipse";
import Hyperbola from "@/components/pages/docs/grade-12/math/conic/Hyperbola";
import ConicPractice from "@/components/pages/docs/grade-12/math/conic/Conic-Practice";
import FunctionDefinition from "@/components/pages/docs/grade-12/math/function/Function-Definition";
import PolynomialFunction from "@/components/pages/docs/grade-12/math/function/Polynomial-Function";
import ExponentialFunction from "@/components/pages/docs/grade-12/math/function/Exponential-Function";
import LogarithmicFunction from "@/components/pages/docs/grade-12/math/function/Logarithmic-Function";
import EquationFunction from "@/components/pages/docs/grade-12/math/function/Equation-Function";
import FunctionAnalysisPlan from "@/components/pages/docs/grade-12/math/function/Function-Analysis-Plan";
import FunctionPractice from "@/components/pages/docs/grade-12/math/function/Function-Practice";
import ProbabilityDefinition from "@/components/pages/docs/grade-12/math/probability/Probability-Definition";
import ProbabilityCombination from "@/components/pages/docs/grade-12/math/probability/Probab-Combination";
import ProbabilityPermutation from "@/components/pages/docs/grade-12/math/probability/Probab-Permutation";
import ProbabilityPractice from "@/components/pages/docs/grade-12/math/probability/Probab-Practice";
import ComplexDefinition from "@/components/pages/docs/grade-12/math/complex/Complex-Definition";
import ComplexFormulars from "@/components/pages/docs/grade-12/math/complex/Complex-Formulars";
import ComplexOperations from "@/components/pages/docs/grade-12/math/complex/Complex-Operations";
import ComplexModulus from "@/components/pages/docs/grade-12/math/complex/Complex-Modulus";
import QuadraticEquation from "@/components/pages/docs/grade-12/math/complex/Quadratic-Equation";
import TrigonometricForm from "@/components/pages/docs/grade-12/math/complex/Trigonometric-Form";
import ComplexPractice from "@/components/pages/docs/grade-12/math/complex/Complex-Practice";
import ComplexMultiplicationDivision from "@/components/pages/docs/grade-12/math/complex/Complex-Multiplication-Devision";
import CountingPrinciple from "@/components/pages/docs/grade-12/math/probability/Counting-Principle";
import ProbabCompound from "@/components/pages/docs/grade-12/math/probability/Probab-Compound";
import ConicDefinition from "@/components/pages/docs/grade-12/math/conic/Conic-Definition";

export const math: Content = {
  subject: "math",
  title: "គណិតវិទ្យា",
  englishTitle: "Mathematics",
  icon: Calculator,
  lessons: [
    {
      lesson: "Complex",
      title: "កុំផ្លិច",
      englishTitle: "Complex",
      icon: Target,
      topics: [
        {
          title: "និយមន័យកុំផ្លិច",
          englishTitle: "Complex-Definition",
          component: ComplexDefinition,
        },

        {
          title: "ប្រមាណវិធីបូក ដកចំនួនកុំផ្លិច",
          englishTitle: "Complex-Operations",
          component: ComplexOperations,
        },
        {
          title: "ប្រមាណវិធីគុណ និងចែកចំនួនកុំផ្លិច",
          englishTitle: "Complex-Multiplication-Division",
          component: ComplexMultiplicationDivision,
        },
        {
          title: "ម៉ូឌុលនៃកុំផ្លិច",
          englishTitle: "Complex-Modulus",
          component: ComplexModulus,
        },
        {
          title: "សមីការដឺក្រេទី ២",
          englishTitle: "Quadratic-Equation",
          component: QuadraticEquation,
        },
        {
          title: "ទម្រង់ត្រីកោណមាត្រ",
          englishTitle: "Trigonometric-Form",
          component: TrigonometricForm,
        },
        {
          title: "លំហាត់អនុវត្ត",
          englishTitle: "Complex-Practice",
          component: ComplexPractice,
        },
      ],
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
      ],
    },
    {
      lesson: "Probability",
      title: "ប្រូបាប",
      englishTitle: "Probability",
      icon: Box,
      topics: [
        {
          title: "គោលការណ៍របាប់",
          englishTitle: "CountingPrinciple",
          component: CountingPrinciple,
        },
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
          title: "ប្រូបាបនៃព្រឹត្តការណ៍សមាស",
          englishTitle: "ProbabCompound",
          component: ProbabCompound,
        },
        {
          title: "លំហាត់អនុវត្ត",
          englishTitle: "Probability-Practice",
          component: ProbabilityPractice,
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
          title: "និយមន័យកោនិក",
          englishTitle: "Conic-definition",
          component: ConicDefinition,
        },
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
      ],
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
      ],
    },
    // {
    //   lesson: "exam-questions",
    //   title: "វិញ្ញាសាប្រឡង",
    //   englishTitle: "Exam-Questions",
    //   icon: BookOpen,
    //   topics: [
    //     // BacII Years
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០២៤",
    //       englishTitle: "BacII-2024",
    //       component: BacII2024,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០២៣",
    //       englishTitle: "BacII-2023",
    //       component: BacII2023,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០២២",
    //       englishTitle: "BacII-2022",
    //       component: BacII2022,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០២១",
    //       englishTitle: "BacII-2021",
    //       component: BacII2021,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០២០",
    //       englishTitle: "BacII-2020",
    //       component: BacII2020,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១៩",
    //       englishTitle: "BacII-2019",
    //       component: BacII2019,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១៨",
    //       englishTitle: "BacII-2018",
    //       component: BacII2018,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១៧",
    //       englishTitle: "BacII-2017",
    //       component: BacII2017,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១៦",
    //       englishTitle: "BacII-2016",
    //       component: BacII2016,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១៥",
    //       englishTitle: "BacII-2015",
    //       component: BacII2015,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១៤",
    //       englishTitle: "BacII-2014",
    //       component: BacII2014,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១៣",
    //       englishTitle: "BacII-2013",
    //       component: BacII2013,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១២",
    //       englishTitle: "BacII-2012",
    //       component: BacII2012,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១១",
    //       englishTitle: "BacII-2011",
    //       component: BacII2011,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១០",
    //       englishTitle: "BacII-2010",
    //       component: BacII2010,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០០៩",
    //       englishTitle: "BacII-2009",
    //       component: BacII2009,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០០៨",
    //       englishTitle: "BacII-2008",
    //       component: BacII2008,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០០៧",
    //       englishTitle: "BacII-2007",
    //       component: BacII2007,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០០៦",
    //       englishTitle: "BacII-2006",
    //       component: BacII2006,
    //     },

    //     // Preparation Sets
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១",
    //       englishTitle: "Preparation-Set-1",
    //       component: Prep1,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ២",
    //       englishTitle: "Preparation-Set-2",
    //       component: Prep2,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ៣",
    //       englishTitle: "Preparation-Set-3",
    //       component: Prep3,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ៤",
    //       englishTitle: "Preparation-Set-4",
    //       component: Prep4,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ៥",
    //       englishTitle: "Preparation-Set-5",
    //       component: Prep5,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ៦",
    //       englishTitle: "Preparation-Set-6",
    //       component: Prep6,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ៧",
    //       englishTitle: "Preparation-Set-7",
    //       component: Prep7,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ៨",
    //       englishTitle: "Preparation-Set-8",
    //       component: Prep8,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ៩",
    //       englishTitle: "Preparation-Set-9",
    //       component: Prep9,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១០",
    //       englishTitle: "Preparation-Set-10",
    //       component: Prep10,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១១",
    //       englishTitle: "Preparation-Set-11",
    //       component: Prep11,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១២",
    //       englishTitle: "Preparation-Set-12",
    //       component: Prep12,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១៣",
    //       englishTitle: "Preparation-Set-13",
    //       component: Prep13,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១៤",
    //       englishTitle: "Preparation-Set-14",
    //       component: Prep14,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១៥",
    //       englishTitle: "Preparation-Set-15",
    //       component: Prep15,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១៦",
    //       englishTitle: "Preparation-Set-16",
    //       component: Prep16,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១៧",
    //       englishTitle: "Preparation-Set-17",
    //       component: Prep17,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១៨",
    //       englishTitle: "Preparation-Set-18",
    //       component: Prep18,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១៩",
    //       englishTitle: "Preparation-Set-19",
    //       component: Prep19,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ២០",
    //       englishTitle: "Preparation-Set-20",
    //       component: Prep20,
    //     },
    //   ],
    // },
  ],
};