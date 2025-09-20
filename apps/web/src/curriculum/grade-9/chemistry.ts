import { Content } from "@/types/docs/curriculum";
import { FlaskConical, Table, Atom, Beaker } from "lucide-react";
import ComingSoon from "@components/pages/docs/common/ComingSoon";

export const chemistry: Content = {
  subject: "chemistry",
  title: "គីមីវិទ្យា",
  englishTitle: "Chemistry",
  icon: FlaskConical,
  lessons: [
    {
      lesson: "periodic-table-chemical-elements",
      title: "តារាងខួបនៃធាតុគីមី",
      englishTitle: "Periodic-Table-of-Chemical-Elements",
      icon: Table,
      topics: [
        {
          title: "តារាងខួបនៃធាតុគីមី",
          englishTitle: "Periodic-Table-of-Chemical-Elements",
          component: ComingSoon,
        },
        {
          title: "លក្ខណៈធាតុតាមក្រុម",
          englishTitle: "Characteristics-of-Elements-by-Group",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "carbon-oxygen-hydrogen",
      title: "កាបួន អុកស៊ីសែន និងអ៊ីដ្រូសែន",
      englishTitle: "Carbon-Oxygen-and-Hydrogen",
      icon: Atom,
      topics: [
        {
          title: "កាបួន",
          englishTitle: "Carbon",
          component: ComingSoon,
        },
        {
          title: "អុកស៊ីសែន",
          englishTitle: "Oxygen",
          component: ComingSoon,
        },
        {
          title: "អ៊ីដ្រូសែន",
          englishTitle: "Hydrogen",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "oxide-acid-base-salt",
      title: "អុកស៊ីត អាស៊ីត បាស និងអំបិល",
      englishTitle: "Oxide-Acid-Base-and-Salt",
      icon: Beaker,
      topics: [
        {
          title: "អុកស៊ីត",
          englishTitle: "Oxide",
          component: ComingSoon,
        },
        {
          title: "អាស៊ីត",
          englishTitle: "Acid",
          component: ComingSoon,
        },
        {
          title: "បាស",
          englishTitle: "Base",
          component: ComingSoon,
        },
        {
          title: "អំបិល",
          englishTitle: "Salt",
          component: ComingSoon,
        },
      ],
    },
  ],
};
