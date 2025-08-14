import { Content } from "@/types/curriculum";
import { FlaskConical } from "lucide-react";
import LimitZeroOverZero from "@/components/pages/docs/grade-12/math/limit/Limit-Zero-Over-Zero";
import ComingSoon from "@/components/pages/docs/common/ComingSoon";

export const chemistry: Content = {
  subject: "chemistry",
  title: "គីមីវិទ្យា",
  englishTitle: "Chemistry",
  icon: FlaskConical,
  lessons: [
    {
      lesson: "atomic",
      title: "អាតូម",
      englishTitle: "Atomic",
      icon: FlaskConical,
      topics: [
        {
          title: "រចនាសម្ព័ន្ធអាតូម",
          englishTitle: "atomic-structure",
          component: ComingSoon,
        },
        {
          title: "ការរៀបចំអេឡិចត្រុង",
          englishTitle: "electron-configuration",
          component: ComingSoon,
        },
        {
          title: "តារាងខួប",
          englishTitle: "periodic-table",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "bonding",
      title: "ការចង",
      englishTitle: "Bonding",
      icon: FlaskConical,
      topics: [
        {
          title: "ការចងអ៊ីអូនិច",
          englishTitle: "ionic-bonding",
          component: ComingSoon,
        },
        {
          title: "ការចងគូវែលអ៊ីន",
          englishTitle: "covalent-bonding",
          component: ComingSoon,
        },
        {
          title: "ការចងលោហៈ",
          englishTitle: "metallic-bonding",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "reactions",
      title: "ប្រតិកម្ម",
      englishTitle: "Reactions",
      icon: FlaskConical,
      topics: [
        {
          title: "សមីការគីមី",
          englishTitle: "chemical-equations",
          component: ComingSoon,
        },
        {
          title: "ប្រភេទប្រតិកម្ម",
          englishTitle: "reaction-types",
          component: ComingSoon,
        },
        {
          title: "លំនឹង",
          englishTitle: "equilibrium",
          component: ComingSoon,
        },
      ],
    },
  ],
};
