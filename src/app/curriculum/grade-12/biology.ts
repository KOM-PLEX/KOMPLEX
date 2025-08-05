import { Content } from "@/types/docs";
import LimitZeroOverZero from "@/components/docs/Limit-Zero-Over-Zero";
import { Leaf } from "lucide-react";

export const biology: Content = {
  subject: "biology",
  title: "ជីវវិទ្យា",
  englishTitle: "Biology",
  icon: Leaf,
  lessons: [
    {
      lesson: "cell",
      title: "កោសិកា",
      englishTitle: "Cell",
      icon: Leaf,
      topics: [
        {
          title: "រចនាសម្ព័ន្ធកោសិកា",
          englishTitle: "cell-structure",
          component: LimitZeroOverZero,
        },
        {
          title: "ការចែកកោសិកា",
          englishTitle: "cell-division",
          component: LimitZeroOverZero,
        },
        {
          title: "ការដឹកជញ្ជូនកោសិកា",
          englishTitle: "cell-transport",
          component: LimitZeroOverZero,
        },
      ],
    },
    {
      lesson: "genetics",
      title: "ហ្សែន",
      englishTitle: "Genetics",
      icon: Leaf,
      topics: [
        {
          title: "ការទទួលមរតក",
          englishTitle: "inheritance",
          component: LimitZeroOverZero,
        },
        {
          title: "ឌីអិនអេ",
          englishTitle: "dna",
          component: LimitZeroOverZero,
        },
        {
          title: "ជំងឺហ្សែន",
          englishTitle: "genetic-disorders",
          component: LimitZeroOverZero,
        },
      ],
    },
    {
      lesson: "ecology",
      title: "អេកូឡូស៊ី",
      englishTitle: "Ecology",
      icon: Leaf,
      topics: [
        {
          title: "ប្រព័ន្ធអេកូឡូស៊ី",
          englishTitle: "ecosystems",
          component: LimitZeroOverZero,
        },
        {
          title: "ឌីណាមិចចំនួនប្រជាជន",
          englishTitle: "population-dynamics",
          component: LimitZeroOverZero,
        },
        {
          title: "ការអភិរក្ស",
          englishTitle: "conservation",
          component: LimitZeroOverZero,
        },
      ],
    },
  ],
};
