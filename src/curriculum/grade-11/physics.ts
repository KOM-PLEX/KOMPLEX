import { Content } from "@/types/curriculum";
import { Atom, Zap, Thermometer, Waves, Lightbulb } from "lucide-react";
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
      icon: Zap,
      topics: [
        {
          title: "ចលនាក្នុងប្លង់",
          englishTitle: "motion-in-a-plane",
          component: ComingSoon,
        },
        {
          title: "អនុវត្តច្បាប់ញូតុន",
          englishTitle: "applying-newtons-laws",
          component: ComingSoon,
        },
        {
          title: "ទំនាញ",
          englishTitle: "gravity",
          component: ComingSoon,
        },
        {
          title: "បរិមាណចលនានិងអាំពុលស្យុង",
          englishTitle: "momentum-and-impulse",
          component: ComingSoon,
        },
        {
          title: "ច្បាប់រក្សាថាមពល",
          englishTitle: "law-of-conservation-of-energy",
          component: ComingSoon,
        },
        {
          title: "លំនឹងនិងភាពយឺត",
          englishTitle: "equilibrium-and-elasticity",
          component: ComingSoon,
        },
        {
          title: "ឌីណាមិចនៃចលនារង្វិល",
          englishTitle: "dynamics-of-rotational-motion",
          component: ComingSoon,
        },
        {
          title: "សន្ទនីយឌីណាមិច",
          englishTitle: "fluid-dynamics",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "thermodynamics",
      title: "ទែម៉ូឌីណាមិច",
      englishTitle: "Thermodynamics",
      icon: Thermometer,
      topics: [
        {
          title: "សីតុណ្ហភាពនិងកម្ដៅ",
          englishTitle: "temperature-and-heat",
          component: ComingSoon,
        },
        {
          title: "លក្ខណៈកម្ដៅនៃរូបធាតុ",
          englishTitle: "thermal-properties-of-matter",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "waves",
      title: "រលក",
      englishTitle: "Waves",
      icon: Waves,
      topics: [
        {
          title: "ចលនាខួប",
          englishTitle: "periodic-motion",
          component: ComingSoon,
        },
        {
          title: "រលក",
          englishTitle: "waves",
          component: ComingSoon,
        },
        {
          title: "សួរ",
          englishTitle: "sound",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "electricity",
      title: "អគ្គិសនី",
      englishTitle: "Electricity",
      icon: Lightbulb,
      topics: [
        {
          title: "បន្ទុកអគ្គិសនីនិងដែនអគ្គិសនី",
          englishTitle: "electric-charge-and-electric-field",
          component: ComingSoon,
        },
        {
          title: "ប៉ូតង់ស្យែលនិងថាមពលប៉ូតង់ស្យែលអគ្គិសនី",
          englishTitle: "electric-potential-and-electric-potential-energy",
          component: ComingSoon,
        },
        {
          title: "កុងដង់សាទ័រ",
          englishTitle: "capacitors",
          component: ComingSoon,
        },
        {
          title: "ចរន្តអគ្គិសនី រេស៊ីស្តង់ និងកម្លាំងអគ្គិសនីចលករ",
          englishTitle: "electric-current-resistance-and-electromotive-force",
          component: ComingSoon,
        },
      ],
    },
  ],
};
