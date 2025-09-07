import { Content } from "@/types/curriculum";
import {
  Leaf,
  Flower2,
  Brain,
  Eye,
  Activity,
  Atom,
  Beaker,
  FlaskConical,
  Dna,
  Lightbulb,
  Microscope,
  Search,
  Hammer,
} from "lucide-react";
import GymnospermTypes from "@/components/pages/docs/grade-12/biology/gymnosperms/GymnospermTypes";
import GymnospermVegetativeOrgans from "@/components/pages/docs/grade-12/biology/gymnosperms/GymnospermVegetativeOrgans";
import GymnospermReproductiveOrgans from "@/components/pages/docs/grade-12/biology/gymnosperms/GymnospermReproductiveOrgans";
import GymnospermLifeCycle from "@/components/pages/docs/grade-12/biology/gymnosperms/GymnospermLifeCycle";
import ComingSoon from "@/components/pages/docs/common/ComingSoon";
import AngiospermVegetativeOrgan from "@/components/pages/docs/grade-12/biology/angiosperm/AngiospermVegetativeOrgan";
import AngiospermReproductiveOrgan from "@/components/pages/docs/grade-12/biology/angiosperm/AngiospermReproductiveOrgan";
import PollinationProcess from "@/components/pages/docs/grade-12/biology/angiosperm/PollinationProcess";
import Reproduction from "@/components/pages/docs/grade-12/biology/angiosperm/Reproduction";
import LifeCycle from "@/components/pages/docs/grade-12/biology/angiosperm/LifeCycle";
import Comparision from "@/components/pages/docs/grade-12/biology/angiosperm/Comparision";
import Advantage from "@/components/pages/docs/grade-12/biology/angiosperm/Advantage";

export const biology: Content = {
  subject: "biology",
  title: "ជីវវិទ្យា",
  englishTitle: "Biology",
  icon: Leaf,
  lessons: [
    {
      lesson: "gymnosperms",
      title: "ស៊ីមណូស្ពែម",
      englishTitle: "Gymnosperms",
      icon: Leaf,
      topics: [
        {
          title: "ប្រភេទនៃស៊ីមណូស្ពែម",
          englishTitle: "gymnosperms-types",
          component: GymnospermTypes,
        },
        {
          title: "សរីរាង្គលូតលាស់",
          englishTitle: "gymnosperms-vegetative-organs",
          component: GymnospermVegetativeOrgans,
        },
        {
          title: "សរីរាង្គបន្តពូជ",
          englishTitle: "gymnosperms-reproductive-organs",
          component: GymnospermReproductiveOrgans,
        },
        {
          title: "វដ្តជីវិតស៊ីមណូស្ពែម",
          englishTitle: "gymnosperms-life-cycle",
          component: GymnospermLifeCycle,
        },
      ],
    },
    {
      lesson: "angiosperms",
      title: "អង់ស្យូស្ពែម",
      englishTitle: "Angiosperms",
      icon: Flower2,
      topics: [
        {
          title: "សរីរាង្គលូតលាស់",
          englishTitle: "angiosperms-vegetative-organs",
          component: AngiospermVegetativeOrgan,
        },
        {
          title: "សរីរាង្គបន្តពូជ",
          englishTitle: "angiosperms-reproductive-organs",
          component: AngiospermReproductiveOrgan,
        },
        {
          title: "ដំណើរលំអង",
          englishTitle: "angiosperms-pollination-process",
          component: PollinationProcess,
        },
        {
          title: "ការបន្តពូជរបស់អង់ស្យូស្ពៃម",
          englishTitle: "angiosperms-reproduction",
          component: Reproduction,
        },
        {
          title: "វដ្តជីវិតរបស់រុក្ខជាតិមានផ្កា",
          englishTitle: "angiosperms-flowering-plants-life-cycle",
          component: LifeCycle,
        },
        {
          title: "ប្រៀបធៀបម៉ូណូកូទីលេដូននិងឌីកូទីលេដូន",
          englishTitle: "angiosperms-monocot-dicot-comparison",
          component: Comparision,
        },
        {
          title: "ផលប្រយោជន៍របស់រុក្ខជាតិមានគ្រាប់",
          englishTitle: "angiosperms-seed-plants-benefits",
          component: Advantage,
        },
      ],
    },
    {
      lesson: "nervous-system",
      title: "តម្រូវប្រសាទ",
      englishTitle: "Medicine and Nervous System",
      icon: Brain,
      topics: [
        {
          title: "តម្រូវប្រសាទសត្វឥតឆ្អឹងកង",
          englishTitle: "nervous-system-invertebrates",
          component: ComingSoon,
        },
        {
          title: "តម្រូវប្រសាទសត្វឆ្អឹងកង",
          englishTitle: "nervous-system-vertebrates",
          component: ComingSoon,
        },
        {
          title: "នាទីប្រព័ន្ធប្រសាទ",
          englishTitle: "nervous-system-function",
          component: ComingSoon,
        },
        {
          title: "ណឺរ៉ូន (ឬកោសិកាប្រសាទ)",
          englishTitle: "neuron-nerve-cell",
          component: ComingSoon,
        },
        {
          title: "មជ្ឈមណ្ឌលប្រសាទ",
          englishTitle: "central-nervous-system",
          component: ComingSoon,
        },
        {
          title: "ខួរក្បាល",
          englishTitle: "brain",
          component: ComingSoon,
        },
        {
          title: "ខួរឆ្អឹងខ្នង",
          englishTitle: "spinal-cord",
          component: ComingSoon,
        },
        {
          title: "បរិមណ្ឌលប្រសាទ",
          englishTitle: "peripheral-nervous-system",
          component: ComingSoon,
        },
        {
          title: "ថ្នាំនិងប្រព័ន្ធប្រសាទ",
          englishTitle: "nervous-system-and-drugs",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "sensory-organs",
      title: "សរីរាង្គវិញ្ញាណ",
      englishTitle: "Sensory Organs",
      icon: Eye,
      topics: [
        {
          title: "ចក្ខុវិញ្ញាណ",
          englishTitle: "visual-sense-sight",
          component: ComingSoon,
        },
        {
          title: "សោតវិញ្ញាណ",
          englishTitle: "auditory-sense-hearing",
          component: ComingSoon,
        },
        {
          title: "ឃានវិញ្ញាណ",
          englishTitle: "olfactory-sense-smell",
          component: ComingSoon,
        },
        {
          title: "ជិវ្ហាវិញ្ញាណ",
          englishTitle: "gustatory-sense-taste",
          component: ComingSoon,
        },
        {
          title: "កាយវិញ្ញាណ",
          englishTitle: "tactile-sense-touch",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "endocrine-system",
      title: "ប្រពន្ធ័អង់ដូគ្រីន",
      englishTitle: "Endocrine System",
      icon: Activity,
      topics: [
        {
          title: "ក្រពេញ",
          englishTitle: "gland",
          component: ComingSoon,
        },
        {
          title: "អរម៉ូន",
          englishTitle: "hormone",
          component: ComingSoon,
        },
        {
          title: "ការត្រួតពិនិត្យនៃប្រព័ន្ធអង់ដូគ្រីន",
          englishTitle: "control-of-endocrine-system",
          component: ComingSoon,
        },
        {
          title: "អីប៉ូតាឡាមុស",
          englishTitle: "hypothalamus",
          component: ComingSoon,
        },
        {
          title: "ក្រពេញអីប៉ូភីស",
          englishTitle: "hypophysis-pituitary-gland",
          component: ComingSoon,
        },
        {
          title: "ក្រពេញទីរ៉ូអ៊ុត ",
          englishTitle: "thyroid-gland",
          component: ComingSoon,
        },
        {
          title: "ក្រពេញប៉ារ៉ាទីវ៉ូអ៊ុត ",
          englishTitle: "parathyroid-gland",
          component: ComingSoon,
        },
        {
          title: "ក្រពេញលើតម្រងនោម ",
          englishTitle: "adrenal-glands",
          component: ComingSoon,
        },
        {
          title: "លំពែង ",
          englishTitle: "pancreas",
          component: ComingSoon,
        },
        {
          title: "ក្រពេញភេទ",
          englishTitle: "gonads-sex-glands",
          component: ComingSoon,
        },
        {
          title: "ក្រពេញទីមុស",
          englishTitle: "thymus-gland",
          component: ComingSoon,
        },
        {
          title: "ក្រពះនិងពោះវៀនតូច",
          englishTitle: "stomach-and-small-intestine",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "amino-acid",
      title: "អាសុីតអាមីណេ",
      englishTitle: "Amino Acid",
      icon: Atom,
      topics: [
        {
          title: "ទម្រង់អាស៊ីតអាមីណេ",
          englishTitle: "forms-of-amino-acids",
          component: ComingSoon,
        },
        {
          title: "ប្រភេទផ្សេងៗនៃអាស៊ីតអាមីណេ",
          englishTitle: "different-types-of-amino-acids",
          component: ComingSoon,
        },
        {
          title: "ប៉ិបទីត",
          englishTitle: "peptide",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "protein",
      title: "ប្រូតេអុីន",
      englishTitle: "Protein",
      icon: Beaker,
      topics: [
        {
          title: "រូបផ្គុំរបស់ប្រូតេអ៊ីន",
          englishTitle: "structure-of-protein",
          component: ComingSoon,
        },
        {
          title: "នាទីរបស់ប្រូតេអ៊ីន",
          englishTitle: "function-of-protein",
          component: ComingSoon,
        },
        {
          title: "ការបាត់បង់គុណភាពរបស់ប្រូតេអ៊ីន",
          englishTitle: "protein-denaturation",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "enzymes",
      title: "អង់សុីម",
      englishTitle: "Enzymes",
      icon: Microscope,
      topics: [
        {
          title: "អ្វីជាអង់ស៊ីម?",
          englishTitle: "what-is-enzyme",
          component: ComingSoon,
        },
        {
          title: "ចំណែកថាក់របស់អង់ស៊ីម",
          englishTitle: "enzyme-function",
          component: ComingSoon,
        },
        {
          title: "លក្ខណៈរបស់អង់ស៊ីម",
          englishTitle: "characteristics-of-enzymes",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "dna",
      title: "ADN ជាទម្រព័ត៏មានសេនេទិច",
      englishTitle: "DNA",
      icon: Dna,
      topics: [
        {
          title: "សមាសធាតុគីមីនៃព័ត៏មានសេនេទិច",
          englishTitle: "chemical-composition-of-genetic-information",
          component: ComingSoon,
        },
        {
          title: "ទម្រង់ម៉ូលេគុល ADN",
          englishTitle: "molecular-form-of-dna",
          component: ComingSoon,
        },
        {
          title: "បរិមាណ ADN ក្នុងកោសិកា",
          englishTitle: "quantity-of-dna-in-cell",
          component: ComingSoon,
        },
        {
          title: "ស្វ័យដំឡើងទ្វេ ADN",
          englishTitle: "dna-self-replication",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "dna",
      title: "ADN ជាទម្រព័ត៏មានសេនេទិច",
      englishTitle: "DNA",
      icon: Dna,
      topics: [
        {
          title: "សមាសធាតុគីមីនៃព័ត៏មានសេនេទិច",
          englishTitle: "chemical-composition-of-genetic-information",
          component: ComingSoon,
        },
        {
          title: "ទម្រង់ម៉ូលេគុល ADN",
          englishTitle: "molecular-form-of-dna",
          component: ComingSoon,
        },
        {
          title: "បរិមាណ ADN ក្នុងកោសិកា",
          englishTitle: "quantity-of-dna-in-cell",
          component: ComingSoon,
        },
        {
          title: "ស្វ័យដំឡើងទ្វេ ADN",
          englishTitle: "dna-self-replication",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "gene",
      title: "ការសម្ដែងចេញនៃសែន",
      englishTitle: "Gene Expression",
      icon: Activity,
      topics: [
        {
          title: "ភាពត្រូវគ្នានិងខុសគ្នានៃ ADN និងប្រូតេអ៊ីន",
          englishTitle: "dna-protein-comparison",
          component: ComingSoon,
        },
        {
          title: "រូបផ្តុំ ARN នាំសារ (ARNm)",
          englishTitle: "messenger-rna-mrna",
          component: ComingSoon,
        },
        {
          title: "ចលនការចម្លងក្រម",
          englishTitle: "transcription-process",
          component: ComingSoon,
        },
        {
          title: "ក្រមសេនេទិច",
          englishTitle: "genetic-code",
          component: ComingSoon,
        },
        {
          title: "រីបូសូម",
          englishTitle: "ribosome",
          component: ComingSoon,
        },
        {
          title: "ARN ដឹកនាំ (ARNt)",
          englishTitle: "transfer-rna-trna",
          component: ComingSoon,
        },
        {
          title: "ចលនការបកប្រែក្រម",
          englishTitle: "translation-process",
          component: ComingSoon,
        },
        {
          title: "តម្រូវនៃការសំដែងផេណូទីប",
          englishTitle: "requirements-for-phenotypic-expression",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "bio-technology",
      title: "បច្ចេកវិទ្យាជីវ",
      englishTitle: "Bio Technology",
      icon: Lightbulb,
      topics: [
        {
          title: "ការបង្កាត់ជ្រើសចំពោះរុក្ខជាតិ",
          englishTitle: "selective-breeding-plants",
          component: ComingSoon,
        },
        {
          title: "ការបង្កាត់ជ្រើសចំពោះសត្វ",
          englishTitle: "selective-breeding-animals",
          component: ComingSoon,
        },
        {
          title: "កូនរុក្ខជាតិ",
          englishTitle: "plant-offspring",
          component: ComingSoon,
        },
        {
          title: "កូនសត្វ",
          englishTitle: "animal-offspring",
          component: ComingSoon,
        },
        {
          title: "ប៉ូលីប្តូស៊ីឌី",
          englishTitle: "polyploidy",
          component: ComingSoon,
        },
        {
          title: "ដំណាក់កាលផ្សេងៗនៃបន្ទេរសែន",
          englishTitle: "stages-of-gene-transfer",
          component: ComingSoon,
        },
        {
          title: "ឧទាហរណ៍ផ្សេងៗក្នុងបន្ទេរសែន",
          englishTitle: "examples-in-gene-transfer",
          component: ComingSoon,
        },
        {
          title: "វិស្វកម្មសេនេទិចក្នុងវិស័យ",
          englishTitle: "genetic-engineering-in-field",
          component: ComingSoon,
        },
        {
          title: "គ្រោះថ្នាក់",
          englishTitle: "dangers",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "darwin-theory",
      title: "ទ្រិស្ដីលោកដាវីន",
      englishTitle: "Darwin Theory",
      icon: Search,
      topics: [
        {
          title: "ការសង្កេតរបស់ដាវិន",
          englishTitle: "darwins-observations",
          component: ComingSoon,
        },
        {
          title: "ភាវៈរស់នៅប្រជុំកោះកាឡាប៉ាកូស",
          englishTitle: "organisms-galapagos-islands",
          component: ComingSoon,
        },
        {
          title: "ការវិវត្ត",
          englishTitle: "evolution",
          component: ComingSoon,
        },
        {
          title: "ជម្រើសដោយធម្មជាតិ",
          englishTitle: "natural-selection",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "evolution-evidence",
      title: "ភស្ដុតាងនៃការវិវត្ត",
      englishTitle: "Evolution Evidence",
      icon: Hammer,
      topics: [
        {
          title: "បំណកស្រាយភស្ដុតាងនៃការវិវត្ត",
          englishTitle: "evolution-evidence-description",
          component: ComingSoon,
        },
        {
          title: "ទំនាក់ទំនងសែស្រឡាយរវាងប្រភេទផ្សេង",
          englishTitle: "comparative-study-between-species",
          component: ComingSoon,
        },
        {
          title: "ដើមកំណើតប្រភេទ",
          englishTitle: "birth-of-species",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "evolution-evidence",
      title: "ភស្ដុតាងនៃការវិវត្ត",
      englishTitle: "Evolution Evidence",
      icon: Hammer,
      topics: [
        {
          title: "បំណកស្រាយភស្ដុតាងនៃការវិវត្ត",
          englishTitle: "evolution-evidence-description",
          component: ComingSoon,
        },
        {
          title: "ទំនាក់ទំនងសែស្រឡាយរវាងប្រភេទផ្សេង",
          englishTitle: "comparative-study-between-species",
          component: ComingSoon,
        },
        {
          title: "ដើមកំណើតប្រភេទ",
          englishTitle: "birth-of-species",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "fossil",
      title: "កំណត់ត្រាផូសុីល",
      englishTitle: "Fossil",
      icon: FlaskConical,
      topics: [
        {
          title: "កំណផូសុីល",
          englishTitle: "fossil-formation",
          component: ComingSoon,
        },
        {
          title: "ការកំណត់អាយុផូសុីល",
          englishTitle: "fossil-dating",
          component: ComingSoon,
        },
        {
          title: "សារសំខាន់នៃផូសុីល",
          englishTitle: "important-properties-of-fossil",
          component: ComingSoon,
        },
      ],
    },
  ],
};
