import { Content } from "@/types/curriculum";
import { Atom } from "lucide-react";
import LimitZeroOverZero from "@/components/pages/docs/grade-12/limit/Limit-Zero-Over-Zero";

export const physics: Content = {
  subject: "physics",
  title: "រូបវិទ្យា",
  englishTitle: "Physics",
  icon: Atom,
  lessons: [
    {
      lesson: "mechanics",
      title: "មេកានិច",
      englishTitle: "Mechanics",
      icon: Atom,
      topics: [
        {
          title: "គីណេម៉ាទិច",
          englishTitle: "kinematics",
          component: LimitZeroOverZero,
        },
        {
          title: "ឌីណាមិច",
          englishTitle: "dynamics",
          component: LimitZeroOverZero,
        },
        {
          title: "ថាមពល",
          englishTitle: "energy",
          component: LimitZeroOverZero,
        },
        {
          title: "អំណាច",
          englishTitle: "momentum",
          component: LimitZeroOverZero,
        },
      ],
    },
    {
      lesson: "waves",
      title: "រលក",
      englishTitle: "Waves",
      icon: Atom,
      topics: [
        {
          title: "ចលនារលក",
          englishTitle: "wave-motion",
          component: LimitZeroOverZero,
        },
        {
          title: "សំឡេង",
          englishTitle: "sound",
          component: LimitZeroOverZero,
        },
        {
          title: "ពន្លឺ",
          englishTitle: "light",
          component: LimitZeroOverZero,
        },
      ],
    },
    {
      lesson: "electricity",
      title: "អគ្គិសនី",
      englishTitle: "Electricity",
      icon: Atom,
      topics: [
        {
          title: "វាលអគ្គិសនី",
          englishTitle: "electric-field",
          component: LimitZeroOverZero,
        },
        {
          title: "សៀគ្វី",
          englishTitle: "circuits",
          component: LimitZeroOverZero,
        },
        {
          title: "អេឡិចត្រូម៉ាញេទិច",
          englishTitle: "magnetism",
          component: LimitZeroOverZero,
        },
      ],
    },
  ],
};
