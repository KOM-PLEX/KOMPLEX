import { Content } from "@/types/curriculum";
import { Atom } from "lucide-react";
import LimitZeroOverZero from "@/components/pages/docs/grade-12/math/limit/Limit-Zero-Over-Zero";
import ComingSoon from "@/components/pages/docs/common/ComingSoon";

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
          component: ComingSoon,
        },
        {
          title: "ឌីណាមិច",
          englishTitle: "dynamics",
          component: ComingSoon,
        },
        {
          title: "ថាមពល",
          englishTitle: "energy",
          component: ComingSoon,
        },
        {
          title: "អំណាច",
          englishTitle: "momentum",
          component: ComingSoon,
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
          component: ComingSoon,
        },
        {
          title: "សំឡេង",
          englishTitle: "sound",
          component: ComingSoon,
        },
        {
          title: "ពន្លឺ",
          englishTitle: "light",
          component: ComingSoon,
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
          component: ComingSoon,
        },
        {
          title: "សៀគ្វី",
          englishTitle: "circuits",
          component: ComingSoon,
        },
        {
          title: "អេឡិចត្រូម៉ាញេទិច",
          englishTitle: "magnetism",
          component: ComingSoon,
        },
      ],
    },
  ],
};
