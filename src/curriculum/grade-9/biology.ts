import { Content } from "@/types/docs/curriculum";
import { Leaf, Brain, Shield, Bug, Globe } from "lucide-react";
import ComingSoon from "@/components/pages/docs/common/ComingSoon";

export const biology: Content = {
  subject: "biology",
  title: "ជីវវិទ្យា",
  englishTitle: "Biology",
  icon: Leaf,
  lessons: [
    {
      lesson: "photosynthesis",
      title: "រស្មីសំយោគ",
      englishTitle: "Photosynthesis",
      icon: Leaf,
      topics: [
        {
          title: "រូបផ្តុំនៃស្លឹករុក្ខជាតិ",
          englishTitle: "Structure-of-Plant-Leaves",
          component: ComingSoon,
        },
        {
          title: "ដំណើររស្មីសំយោគ",
          englishTitle: "Process-of-Photosynthesis",
          component: ComingSoon,
        },
        {
          title: "ដង្ហើមរុក្ខជាតិ",
          englishTitle: "Plant-Respiration",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "nervous-system",
      title: "ប្រព័ន្ធប្រសាទ",
      englishTitle: "Nervous-System",
      icon: Brain,
      topics: [
        {
          title: "ណឺរ៉ូន",
          englishTitle: "Neuron",
          component: ComingSoon,
        },
        {
          title: "មជ្ឈមណ្ឌលប្រសាទ",
          englishTitle: "Central-Nervous-System",
          component: ComingSoon,
        },
        {
          title: "បរិមណ្ឌលប្រសាទ",
          englishTitle: "Peripheral-Nervous-System",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "immune-system",
      title: "ប្រព័ន្ធស៊ាំ",
      englishTitle: "Immune-System",
      icon: Shield,
      topics: [
        {
          title: "កិច្ចការពារសារពាង្គកាយ",
          englishTitle: "Body-Defense-Mechanisms",
          component: ComingSoon,
        },
        {
          title: "ប្រព័ន្ធស៊ាំ",
          englishTitle: "Immune-System",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "pathogens-diseases",
      title: "ភ្នាក់ងារបង្ករោគនិងជំងឺ",
      englishTitle: "Pathogens-and-Diseases",
      icon: Bug,
      topics: [
        {
          title: "ភ្នាក់ងារបង្ករោគ",
          englishTitle: "Pathogens",
          component: ComingSoon,
        },
        {
          title: "ជំងឺឆ្លង",
          englishTitle: "Infectious-Diseases",
          component: ComingSoon,
        },
        {
          title: "ជំងឺមិនឆ្លង",
          englishTitle: "Non-communicable-Diseases",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "human-impact-ecosystems",
      title: "ផលប៉ះពាល់បណ្តាលមកពីមនុស្សលើឋានប្រព័ន្ធធម្មជាតិ",
      englishTitle: "Human-Impact-on-Natural-Ecosystems",
      icon: Globe,
      topics: [
        {
          title: "អំពើរបស់មនុស្សលើបរិស្ថាន",
          englishTitle: "Human-Actions-on-Environment",
          component: ComingSoon,
        },
        {
          title: "ការបំពុលបរិស្ថាន",
          englishTitle: "Environmental-Pollution",
          component: ComingSoon,
        },
      ],
    },
  ],
};
