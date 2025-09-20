import { Content } from "@core-types/docs/curriculum";
import { FlaskConical, Atom, Table, Link, Leaf } from "lucide-react";
import ComingSoon from "@components/pages/docs/common/ComingSoon";

export const chemistry: Content = {
  subject: "chemistry",
  title: "គីមីវិទ្យា",
  englishTitle: "Chemistry",
  icon: FlaskConical,
  lessons: [
    {
      lesson: "atom",
      title: "តាតូម",
      englishTitle: "Atom",
      icon: Atom,
      topics: [
        {
          title: "ទ្រឹស្តីអាតូម",
          englishTitle: "Atomic-Theory",
          component: ComingSoon,
        },
        {
          title: "ទម្រង់អាតូម",
          englishTitle: "Atomic-Structure",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "periodic-table-chemical-elements",
      title: "តារាងខួបនៃធាតុគីមី",
      englishTitle: "Periodic-Table-of-Chemical-Elements",
      icon: Table,
      topics: [
        {
          title: "លក្ខណៈនៃតារាងខួប",
          englishTitle: "Characteristics-of-the-Periodic-Table",
          component: ComingSoon,
        },
        {
          title: "សិក្សាធាតុតាមក្រុម",
          englishTitle: "Study-of-Elements-by-Group",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "chemical-bonds-solid-structures",
      title: "សម្ព័ន្ធគីមីនិងទម្រង់អង្គធាតុរឹង",
      englishTitle: "Chemical-Bonds-and-Solid-Structures",
      icon: Link,
      topics: [
        {
          title: "សម្ព័ន្ធគីមី",
          englishTitle: "Chemical-Bonds",
          component: ComingSoon,
        },
        {
          title: "ទម្រង់អង្គធាតុរឹង",
          englishTitle: "Solid-Structures",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "organic-chemistry",
      title: "គីមីសរីរាង្គ",
      englishTitle: "Organic-Chemistry",
      icon: Leaf,
      topics: [
        {
          title: "ប្រេងកាតនិងឥន្ធនៈ",
          englishTitle: "Petroleum-and-Fuels",
          component: ComingSoon,
        },
        {
          title: "អ៊ីដ្រូកាបួឆ្អែត : អាល់កាន",
          englishTitle: "Saturated-Hydrocarbons-Alkanes",
          component: ComingSoon,
        },
        {
          title: "អ៊ីដ្រូកាបួមិនទាន់ឆ្អែត",
          englishTitle: "Unsaturated-Hydrocarbons",
          component: ComingSoon,
        },
        {
          title: "អ៊ីដ្រូកាបួប្រហើរ : បង់សែន",
          englishTitle: "Aromatic-Hydrocarbons-Benzene",
          component: ComingSoon,
        },
        {
          title: "ជីគីមី",
          englishTitle: "Chemical-Fertilizers",
          component: ComingSoon,
        },
      ],
    },
  ],
};
