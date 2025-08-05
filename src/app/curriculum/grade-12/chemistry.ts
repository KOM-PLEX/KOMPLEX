import { Content } from "@/types/docs";
import { FlaskConical } from "lucide-react";
import LimitZeroOverZero from "@/components/docs/Limit-Zero-Over-Zero";

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
          component: LimitZeroOverZero,
        },
        {
          title: "ការរៀបចំអេឡិចត្រុង",
          englishTitle: "electron-configuration",
          component: LimitZeroOverZero,
        },
        {
          title: "តារាងខួប",
          englishTitle: "periodic-table",
          component: LimitZeroOverZero,
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
          component: LimitZeroOverZero,
        },
        {
          title: "ការចងគូវែលអ៊ីន",
          englishTitle: "covalent-bonding",
          component: LimitZeroOverZero,
        },
        {
          title: "ការចងលោហៈ",
          englishTitle: "metallic-bonding",
          component: LimitZeroOverZero,
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
          component: LimitZeroOverZero,
        },
        {
          title: "ប្រភេទប្រតិកម្ម",
          englishTitle: "reaction-types",
          component: LimitZeroOverZero,
        },
        {
          title: "លំនឹង",
          englishTitle: "equilibrium",
          component: LimitZeroOverZero,
        },
      ],
    },
  ],
};
