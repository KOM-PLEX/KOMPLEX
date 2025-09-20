import { Content } from "@/types/docs/curriculum";
import { Leaf, Dna, FlaskConical, User, Sprout } from "lucide-react";
import ComingSoon from "@components/pages/docs/common/ComingSoon";

export const biology: Content = {
  subject: "biology",
  title: "ជីវវិទ្យា",
  englishTitle: "Biology",
  icon: Leaf,
  lessons: [
    {
      lesson: "diversity-living-organisms",
      title: "នានាភាពនៃភាវៈរស់",
      englishTitle: "Diversity-of-Living-Organisms",
      icon: Leaf,
      topics: [
        {
          title: "ចំណែកថ្នាក់និងដើមឈើ មែកធាងពូជអម្បូរ",
          englishTitle: "Classification-and-Phylogenetic-Trees",
          component: ComingSoon,
        },
        {
          title: "វីរុសនិងបាក់តេរី",
          englishTitle: "Viruses-and-Bacteria",
          component: ComingSoon,
        },
        {
          title: "ប្រូទីស",
          englishTitle: "Protists",
          component: ComingSoon,
        },
        {
          title: "ផ្សិត",
          englishTitle: "Fungi",
          component: ComingSoon,
        },
        {
          title: "រុក្ខជាតិ",
          englishTitle: "Plants",
          component: ComingSoon,
        },
        {
          title: "សត្វ",
          englishTitle: "Animals",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "uniformity-living-organisms",
      title: "ឯកសណ្ឋានភាពនៃភាវៈរស់",
      englishTitle: "Uniformity-of-Living-Organisms",
      icon: Dna,
      topics: [
        {
          title: "កោសិកា",
          englishTitle: "Cells",
          component: ComingSoon,
        },
        {
          title: "ប្រការីយ៉ូតនិងអឺការីយ៉ូត",
          englishTitle: "Prokaryotes-and-Eukaryotes",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "metabolism",
      title: "មេតាបូលីស",
      englishTitle: "Metabolism",
      icon: FlaskConical,
      topics: [
        {
          title: "រស្មីសំយោគ",
          englishTitle: "Photosynthesis",
          component: ComingSoon,
        },
        {
          title: "ដង្ហើមកោសិកា",
          englishTitle: "Cellular-Respiration",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "human-biology",
      title: "ជីវវិទ្យាមនុស្ស",
      englishTitle: "Human-Biology",
      icon: User,
      topics: [
        {
          title: "ប្រព័ន្ធគ្រោងឆ្អឹង",
          englishTitle: "Skeletal-System",
          component: ComingSoon,
        },
        {
          title: "ប្រព័ន្ធសាច់ដុំ",
          englishTitle: "Muscular-System",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "biology-agriculture",
      title: "ជីវវិទ្យាក្នុងវិស័យកសិកម្ម",
      englishTitle: "Biology-in-Agriculture",
      icon: Sprout,
      topics: [
        {
          title: "ជី",
          englishTitle: "Fertilizers",
          component: ComingSoon,
        },
        {
          title: "ការបង្កាត់",
          englishTitle: "Breeding",
          component: ComingSoon,
        },
      ],
    },
  ],
};
