import { Content } from "@core-types/docs/curriculum";
import {
  Leaf,
  Microscope,
  Baby,
  Dna,
  Utensils,
  Wind,
  Globe,
  Sprout,
  HeartPulse,
} from "lucide-react";
import ComingSoon from "@components/pages/docs/common/ComingSoon";

export const biology: Content = {
  subject: "biology",
  title: "ជីវវិទ្យា",
  englishTitle: "Biology",
  icon: Leaf,
  lessons: [
    {
      lesson: "cells",
      title: "កោសិកា",
      englishTitle: "Cells",
      icon: Microscope,
      topics: [
        {
          title: "សមាសធាតុគីមីក្នុងកោសិកា",
          englishTitle: "Chemical-Composition-of-Cells",
          component: ComingSoon,
        },
        {
          title: "រូបផ្តុំនិងនាទីកោសិកា",
          englishTitle: "Cell-Structure-and-Function",
          component: ComingSoon,
        },
        {
          title: "ដំណុះដំណាលកោសិកានិងរូបផ្តុំសារពាង្គកាយរស់",
          englishTitle: "Cell-Development-and-Organization-of-Living-Organisms",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "reproduction-growth",
      title: "ការបន្តពូជនិងការលូតលាស់",
      englishTitle: "Reproduction-and-Growth",
      icon: Baby,
      topics: [
        {
          title: "កំណកោសិកាបន្តពូជ",
          englishTitle: "Reproductive-Cells",
          component: ComingSoon,
        },
        {
          title: "ការលូតលាស់របស់អំប្រ៊ីយ៉ុង",
          englishTitle: "Embryonic-Development",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "heredity",
      title: "តំណពូជ",
      englishTitle: "Heredity",
      icon: Dna,
      topics: [
        {
          title: "ច្បាប់តំណពូជ",
          englishTitle: "Principles-of-Heredity",
          component: ComingSoon,
        },
        {
          title: "ក្រូម៉ូសូម",
          englishTitle: "Chromosomes",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "human-nutrition-digestion",
      title: "អាហារនិងការរំលាយអាហាររបស់មនុស្ស",
      englishTitle: "Human-Nutrition-and-Digestion",
      icon: Utensils,
      topics: [
        {
          title: "អាហារ",
          englishTitle: "Nutrition",
          component: ComingSoon,
        },
        {
          title: "ការរំលាយអាហារ",
          englishTitle: "Digestion",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "gas-exchange-excretion-animals",
      title: "បណ្តូរឧស្ម័ននិងការបញ្ចេញចោលរបស់សត្វ",
      englishTitle: "Gas-Exchange-and-Excretion-in-Animals",
      icon: Wind,
      topics: [
        {
          title: "បណ្តូរឧស្ម័នរបស់សត្វ",
          englishTitle: "Gas-Exchange-in-Animals",
          component: ComingSoon,
        },
        {
          title: "ការបញ្ចេញចោល",
          englishTitle: "Excretion",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "interaction-organisms-environment",
      title: "ប្រតិកម្មរវាងសត្វនិងមជ្ឈដ្ឋា",
      englishTitle: "Interaction-between-Organisms-and-Environment",
      icon: Globe,
      topics: [
        {
          title: "របត់ឈាមនិងភាពស៊ាំ",
          englishTitle: "Blood-Circulation-and-Immunity",
          component: ComingSoon,
        },
        {
          title: "ថេរលំនឹង",
          englishTitle: "Homeostasis",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "structure-vascular-plants",
      title: "រូបផ្គុំរុក្ខជាតិមានសរសៃនាំ",
      englishTitle: "Structure-of-Vascular-Plants",
      icon: Sprout,
      topics: [
        {
          title: "ជាលិការុក្ខជាតិ",
          englishTitle: "Plant-Tissues",
          component: ComingSoon,
        },
        {
          title: "ប្ញស",
          englishTitle: "Roots",
          component: ComingSoon,
        },
        {
          title: "ដើមនិងស្លឹក",
          englishTitle: "Stems-and-Leaves",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "biology-health",
      title: "ជីវវិទ្យានិងសុខភាព",
      englishTitle: "Biology-and-Health",
      icon: HeartPulse,
      topics: [
        {
          title: "ការប្រយុទ្ធប្រឆាំងនឹងជំងឺ",
          englishTitle: "Disease-Prevention-and-Control",
          component: ComingSoon,
        },
        {
          title: "អាហារនិងសុខភាព",
          englishTitle: "Nutrition-and-Health",
          component: ComingSoon,
        },
      ],
    },
  ],
};
