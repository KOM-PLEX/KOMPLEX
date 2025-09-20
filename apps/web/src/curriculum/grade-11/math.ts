import { Content } from "@core-types/docs/curriculum";
import {
  Calculator,
  TrendingUp,
  FunctionSquare,
  Square,
  BarChart3,
  Infinity,
  Percent,
  PieChart,
} from "lucide-react";
import ComingSoon from "@components/pages/docs/common/ComingSoon";

export const math: Content = {
  subject: "math",
  title: "គណិតវិទ្យា",
  englishTitle: "Mathematics",
  icon: Calculator,
  lessons: [
    {
      lesson: "sequences",
      title: "ស្មូត",
      englishTitle: "Sequences",
      icon: TrendingUp,
      topics: [
        {
          title: "ស្វីតចំនួនពិត",
          englishTitle: "real-number-sequences",
          component: ComingSoon,
        },
        {
          title: "ស្វីតនព្វន្ត",
          englishTitle: "arithmetic-sequences",
          component: ComingSoon,
        },
        {
          title: "ស្វ៊ីតធរណីមាត្រ",
          englishTitle: "geometric-sequences",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "exponential-logarithmic-functions",
      title: "អនុគមន៍អិចស្ប៉ូណង់ស្យែលនិងអនុគមន៍លោការីត",
      englishTitle: "Exponential Functions and Logarithmic Functions",
      icon: FunctionSquare,
      topics: [
        {
          title: "អនុគមន៍អិចស្ប៉ូណង់ស្យែល",
          englishTitle: "exponential-functions",
          component: ComingSoon,
        },
        {
          title: "អនុគមន៍លោការីត",
          englishTitle: "logarithmic-functions",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "trigonometric-functions",
      title: "អនុគមន៍ត្រីកោណមាត្រ",
      englishTitle: "Trigonometric Functions",
      icon: Square,
      topics: [
        {
          title: "អនុគមន៍ត្រីកោណមាត្រ",
          englishTitle: "trigonometric-functions",
          component: ComingSoon,
        },
        {
          title: "រូបមន្តត្រីកោណមាត្រ",
          englishTitle: "trigonometric-formulas",
          component: ComingSoon,
        },
        {
          title: "សមីការនិងវិសមីការត្រីកោណមាត្រ",
          englishTitle: "trigonometric-equations-and-inequalities",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "matrices-determinants",
      title: "ម៉ាទ្រីសនិងដេទែរមីណង់",
      englishTitle: "Matrices and Determinants",
      icon: BarChart3,
      topics: [
        {
          title: "ម៉ាទ្រីស",
          englishTitle: "matrices",
          component: ComingSoon,
        },
        {
          title: "ដេទែរមីណង់",
          englishTitle: "determinants",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "limits-derivatives",
      title: "លីមីតនិងដេរីវេ",
      englishTitle: "Limits and Derivatives",
      icon: Infinity,
      topics: [
        {
          title: "លីមីតនិងដេរីវេ",
          englishTitle: "limits-and-derivatives",
          component: ComingSoon,
        },
        {
          title: "អនុវត្តន៍នៃដេរីវេ",
          englishTitle: "applications-of-derivatives",
          component: ComingSoon,
        },
        {
          title: "អថិរភាពនិងក្រាបនៃអនុគមន៍",
          englishTitle: "variations-and-graphs-of-functions",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "probability",
      title: "ប្រូបាប",
      englishTitle: "Probability",
      icon: Percent,
      topics: [
        {
          title: "ប្រូបាប",
          englishTitle: "probability",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "statistics",
      title: "ស្ថិតិ",
      englishTitle: "Statistics",
      icon: PieChart,
      topics: [
        {
          title: "ការបែងចែកទិន្នន័យជាភាគរយ",
          englishTitle: "data-distribution-in-percentages",
          component: ComingSoon,
        },
        {
          title: "រង្វាស់នៃគម្លាត",
          englishTitle: "measures-of-dispersion",
          component: ComingSoon,
        },
        {
          title: "គំនូសតាងបំណែងចែក",
          englishTitle: "distribution-charts",
          component: ComingSoon,
        },
      ],
    },
  ],
};
