import { Content } from "@/types/curriculum";
import {
  Calculator,
  Target,
  FunctionSquare,
  Variable,
  Box,
} from "lucide-react";
import LimitZeroOverZero from "@/components/pages/docs/grade-12/limit/Limit-Zero-Over-Zero";
import Footer from "@/components/common/Footer";
import LimitDefinition  from "@/components/pages/docs/grade-12/limit/LimitDefinition";

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
          title: "លីមីតកំណត់",
          englishTitle: "simple",
          component: Footer,
        },
        {
          title: "លីមីត 0/0",
          englishTitle: "zero-over-zero",
          component: LimitZeroOverZero,
        },
        {
          title: "លីមីតនៅអនន្ត",
          englishTitle: "infinity",
          component: LimitZeroOverZero,
        },
        {
          title: "លីមីតម្ខាង",
          englishTitle: "one-sided",
          component: LimitZeroOverZero,
        },
        {
          title: "ច្បាប់លីមីត",
          englishTitle: "rules",
          component: LimitZeroOverZero,
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
          englishTitle: "definition",
          component: LimitZeroOverZero,
        },
        {
          title: "ច្បាប់ដេរីវេ",
          englishTitle: "rules",
          component: LimitZeroOverZero,
        },
        {
          title: "ដេរីវេអនុគមន៍",
          englishTitle: "functions",
          component: LimitZeroOverZero,
        },
        {
          title: "ដេរីវេអ៊ីមភ្លិច",
          englishTitle: "implicit",
          component: LimitZeroOverZero,
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
          englishTitle: "definition",
          component: LimitZeroOverZero,
        },
        {
          title: "អាំងតេក្រាលមិនកំណត់",
          englishTitle: "indefinite",
          component: LimitZeroOverZero,
        },
        {
          title: "អាំងតេក្រាលកំណត់",
          englishTitle: "definite",
          component: LimitZeroOverZero,
        },
        {
          title: "វិធីសាស្ត្រអាំងតេក្រាល",
          englishTitle: "methods",
          component: LimitZeroOverZero,
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
          englishTitle: "definition",
          component: LimitZeroOverZero,
        },
        {
          title: "ប្រតិកម្មវ៉ិចទ័រ",
          englishTitle: "operations",
          component: LimitZeroOverZero,
        },
        {
          title: "ផលគុណវ៉ិចទ័រ",
          englishTitle: "products",
          component: LimitZeroOverZero,
        },
        {
          title: "អ័ក្សកូអរដែន",
          englishTitle: "coordinates",
          component: LimitZeroOverZero,
        },
      ],
    },
  ],
};
