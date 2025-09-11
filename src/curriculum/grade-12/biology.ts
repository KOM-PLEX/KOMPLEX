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
import ChemicalComposition from "@/components/pages/docs/grade-12/biology/adn/ChemicalComposition";
import MolecularForm from "@/components/pages/docs/grade-12/biology/adn/MolecularForm";
import DnaQuantity from "@/components/pages/docs/grade-12/biology/adn/DnaQuantity";
import DnaVsProtein from "@/components/pages/docs/grade-12/biology/geneExpression/DnaVsProtein";
import Mrna from "@/components/pages/docs/grade-12/biology/geneExpression/Mrna";
import Transcription from "@/components/pages/docs/grade-12/biology/geneExpression/Transcription";
import GeneticCode from "@/components/pages/docs/grade-12/biology/geneExpression/GeneticCode";
import Ribosome from "@/components/pages/docs/grade-12/biology/geneExpression/Ribosome";
import Trna from "@/components/pages/docs/grade-12/biology/geneExpression/Trna";
import Translation from "@/components/pages/docs/grade-12/biology/geneExpression/Translation";
import PhenotypeExpression from "@/components/pages/docs/grade-12/biology/geneExpression/PhenotypeExpression";
import PlantBreeding from "@/components/pages/docs/grade-12/biology/biotechnology/PlantBreeding";
import AnimalBreeding from "@/components/pages/docs/grade-12/biology/biotechnology/AnimalBreeding";
import PlantOffspring from "@/components/pages/docs/grade-12/biology/biotechnology/PlantOffspring";
import AnimalOffspring from "@/components/pages/docs/grade-12/biology/biotechnology/AnimalOffspring";
import Polyploidy from "@/components/pages/docs/grade-12/biology/biotechnology/Polyploidy";
import GeneTransferStages from "@/components/pages/docs/grade-12/biology/biotechnology/GeneTransferStages";
import GeneTransferExamples from "@/components/pages/docs/grade-12/biology/biotechnology/GeneTransferExamples";
import GeneticEngineering from "@/components/pages/docs/grade-12/biology/biotechnology/GeneticEngineering";
import Dangers from "@/components/pages/docs/grade-12/biology/biotechnology/Dangers";
import Observations from "@/components/pages/docs/grade-12/biology/darwinTheory/Observations";
import GalapagosOrganisms from "@/components/pages/docs/grade-12/biology/darwinTheory/GalapagosOrganisms";
import Evolution from "@/components/pages/docs/grade-12/biology/darwinTheory/Evolution";
import NaturalSelection from "@/components/pages/docs/grade-12/biology/darwinTheory/NaturalSelection";
import Description from "@/components/pages/create-video/Description";
import DescriptionDarwin from "@/components/pages/docs/grade-12/biology/evolutionEvidence/Description";
import ComparativeStudy from "@/components/pages/docs/grade-12/biology/evolutionEvidence/ComparativeStudy";
import OriginOfSpecies from "@/components/pages/docs/grade-12/biology/evolutionEvidence/OriginOfSpecies";
import FossilFormation from "@/components/pages/docs/grade-12/biology/flaskConical/FossilFormation";
import FossilDating from "@/components/pages/docs/grade-12/biology/flaskConical/FossilDating";
import FossilImportance from "@/components/pages/docs/grade-12/biology/flaskConical/FossilImportance";
import QuestionAnswer from "@/components/pages/docs/grade-12/biology/adn/QuestionAnswer";
import ADNFormulars from "@/components/pages/docs/grade-12/biology/adn/ADNFormulars";
import GeneticTransform from "@/components/pages/docs/grade-12/biology/geneExpression/GeneticTransform";
import CodeTranslation from "@/components/pages/docs/grade-12/biology/geneExpression/CodeTranslation";
import GeneticPractice from "@/components/pages/docs/grade-12/biology/geneExpression/GeneticPractice";
import GeneticFormular from "@/components/pages/docs/grade-12/biology/geneExpression/GeneticFormular";
import { off } from "process";
import Offspring from "@/components/pages/docs/grade-12/biology/biotechnology/Offspring";
import BioTechQA from "@/components/pages/docs/grade-12/biology/biotechnology/BioTechQA";
import DarwinQA from "@/components/pages/docs/grade-12/biology/darwinTheory/DarwinQA";
import EvolutionQA from "@/components/pages/docs/grade-12/biology/evolutionEvidence/EvolutionQA";
import FossilQA from "@/components/pages/docs/grade-12/biology/flaskConical/FossilQA";
import FormAminoAcid from "@/components/pages/docs/grade-12/biology/aminoAcid/FormAminoAcid";
import TypesAminoAcid from "@/components/pages/docs/grade-12/biology/aminoAcid/TypesAminoAcid";
import Peptide from "@/components/pages/docs/grade-12/biology/aminoAcid/Peptide";
import StructureProtein from "@/components/pages/docs/grade-12/biology/protein/StructureProtein";
import FunctionProtein from "@/components/pages/docs/grade-12/biology/protein/FunctionProtein";
import ProteinDenaturation from "@/components/pages/docs/grade-12/biology/protein/ProteinDenaturation";
import EnzymeDefinition from "@/components/pages/docs/grade-12/biology/enzymes/EnzymeDefinition";
import EnzymeFunction from "@/components/pages/docs/grade-12/biology/enzymes/EnzymeFunction";
import CharacteristicEnzyme from "@/components/pages/docs/grade-12/biology/enzymes/CharacteristicEnzyme";
import AminoAcidQA from "@/components/pages/docs/grade-12/biology/aminoAcid/AminoAcidQA";
import ProteinQA from "@/components/pages/docs/grade-12/biology/protein/ProteinQA";
import EnzymesQA from "@/components/pages/docs/grade-12/biology/enzymes/EnzymesQA";

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
          component: ComingSoon,
        },
        {
          title: "សរីរាង្គបន្តពូជ",
          englishTitle: "gymnosperms-reproductive-organs",
          component: ComingSoon,
        },
        {
          title: "វដ្តជីវិតស៊ីមណូស្ពែម",
          englishTitle: "gymnosperms-life-cycle",
          component: ComingSoon,
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
          component: ComingSoon,
        },
        {
          title: "សរីរាង្គបន្តពូជ",
          englishTitle: "angiosperms-reproductive-organs",
          component: ComingSoon,
        },
        {
          title: "ដំណើរលំអង",
          englishTitle: "angiosperms-pollination-process",
          component: ComingSoon,
        },
        {
          title: "ការបន្តពូជរបស់អង់ស្យូស្ពៃម",
          englishTitle: "angiosperms-reproduction",
          component: ComingSoon,
        },
        {
          title: "វដ្តជីវិតរបស់រុក្ខជាតិមានផ្កា",
          englishTitle: "angiosperms-flowering-plants-life-cycle",
          component: ComingSoon,
        },
        {
          title: "ប្រៀបធៀបម៉ូណូកូទីលេដូននិងឌីកូទីលេដូន",
          englishTitle: "angiosperms-monocot-dicot-comparison",
          component: ComingSoon,
        },
        {
          title: "ផលប្រយោជន៍របស់រុក្ខជាតិមានគ្រាប់",
          englishTitle: "angiosperms-seed-plants-benefits",
          component: ComingSoon,
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
          component: FormAminoAcid,
        },
        {
          title: "ប្រភេទផ្សេងៗនៃអាស៊ីតអាមីណេ",
          englishTitle: "different-types-of-amino-acids",
          component: TypesAminoAcid,
        },
        {
          title: "ប៉ិបទីត",
          englishTitle: "peptide",
          component: Peptide,
        },
        {
          title: "សំណួរ & ចម្លេីយ",
          englishTitle: "AminoAcidQA",
          component: AminoAcidQA,
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
          component: StructureProtein,
        },
        {
          title: "នាទីរបស់ប្រូតេអ៊ីន",
          englishTitle: "function-of-protein",
          component: FunctionProtein,
        },
        {
          title: "ការបាត់បង់គុណភាពរបស់ប្រូតេអ៊ីន",
          englishTitle: "protein-denaturation",
          component: ProteinDenaturation,
        },
        {
          title: "សំណួរ & ចម្លេីយ",
          englishTitle: "ProteinQA",
          component: ProteinQA,
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
          component: EnzymeDefinition,
        },
        {
          title: "ចំណែកថាក់របស់អង់ស៊ីម",
          englishTitle: "enzyme-function",
          component: EnzymeFunction,
        },
        {
          title: "លក្ខណៈរបស់អង់ស៊ីម",
          englishTitle: "characteristics-of-enzymes",
          component: CharacteristicEnzyme,
        },
        {
          title: "សំណួរ & ចម្លេីយ",
          englishTitle: "EnzymesQA",
          component: EnzymesQA,
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
          component: ChemicalComposition,
        },
        {
          title: "ទម្រង់ម៉ូលេគុល ADN",
          englishTitle: "molecular-form-of-dna",
          component: MolecularForm,
        },
        {
          title: "ស្វ័យដំឡើងទ្វេ ADN",
          englishTitle: "quantity-of-dna-in-cell",
          component: DnaQuantity,
        },
        {
          title: "រូបមន្តសង្ខេប",
          englishTitle: "summary-of-dna-replication",
          component: ADNFormulars,
        },
        {
          title: "សំណួរ & លំហាត់",
          englishTitle: "dna-self-replication",
          component: QuestionAnswer,
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
          title: "ភាពដូចគ្នានិងខុសគ្នានៃ ADN និងប្រូតេអ៊ីន",
          englishTitle: "dna-protein-comparison",
          component: DnaVsProtein,
        },
        {
          title: "ការចម្លងព័ត៍មានសេនេទិច",
          englishTitle: "genetic-information-replication",
          component: GeneticTransform,
        },
        {
          title: "ក្រមសេនេទិច",
          englishTitle: "genetic-code",
          component: GeneticCode,
        },
        {
          title: "ការបកប្រែក្រម",
          englishTitle: "code-translation",
          component: CodeTranslation,
        },
        {
          title: "ចលនការបកប្រែក្រម",
          englishTitle: "translation-process",
          component: Translation,
        },
        {
          title: "តម្រូវនៃការសំដែងផេណូទីប",
          englishTitle: "requirements-for-phenotypic-expression",
          component: PhenotypeExpression,
        },
        {
          title: "រូបមន្តការសម្តែងចេញនៃសេន",
          englishTitle: "GeneticFormular",
          component: GeneticFormular,
        },
        {
          title: "សំណួរ & លំហាត់",
          englishTitle: "GeneticPractice",
          component: GeneticPractice,
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
          component: PlantBreeding,
        },
        {
          title: "ការបង្កាត់ជ្រើសចំពោះសត្វ",
          englishTitle: "selective-breeding-animals",
          component: AnimalBreeding,
        },
        {
          title: "ក្លូន",
          englishTitle: "offspring",
          component: Offspring,
        },
        {
          title: "ប៉ូលីប្លូអុីឌី",
          englishTitle: "polyploidy",
          component: Polyploidy,
        },
        {
          title: "ដំណាក់កាលផ្សេងៗនៃបន្ទេរសែន",
          englishTitle: "stages-of-gene-transfer",
          component: GeneTransferStages,
        },
        {
          title: "ឧទាហរណ៍ផ្សេងៗក្នុងបន្ទេរសែន",
          englishTitle: "examples-in-gene-transfer",
          component: GeneTransferExamples,
        },
        {
          title: "បច្ចេកវិទ្យាក្នុងការផលិត",
          englishTitle: "genetic-engineering-in-field",
          component: GeneticEngineering,
        },
        {
          title: "ផលវិបាកនៃវិស្វកម្មសេនេទិច",
          englishTitle: "dangers",
          component: Dangers,
        },
        {
          title: "សំណួរ & ចម្លេីយ",
          englishTitle: "BioTechQA",
          component: BioTechQA,
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
          component: Observations,
        },
        {
          title: "ភាវៈរស់នៅប្រជុំកោះកាឡាប៉ាកូស",
          englishTitle: "organisms-galapagos-islands",
          component: GalapagosOrganisms,
        },
        {
          title: "ការវិវត្ត",
          englishTitle: "evolution",
          component: Evolution,
        },
        {
          title: "ជម្រើសដោយធម្មជាតិ",
          englishTitle: "natural-selection",
          component: NaturalSelection,
        },
        {
          title: "សំណួរ & ចម្លេីយ",
          englishTitle: "DarwinQA",
          component: DarwinQA,
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
          component: DescriptionDarwin,
        },
        {
          title: "ទំនាក់ទំនងសែស្រឡាយរវាងប្រភេទផ្សេង",
          englishTitle: "comparative-study-between-species",
          component: ComparativeStudy,
        },
        {
          title: "ដើមកំណើតប្រភេទ",
          englishTitle: "birth-of-species",
          component: OriginOfSpecies,
        },
        {
          title: "សំណួរ & ចម្លេីយ",
          englishTitle: "EvolutionQA",
          component: EvolutionQA,
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
          component: FossilFormation,
        },
        {
          title: "ការកំណត់អាយុផូសុីល",
          englishTitle: "fossil-dating",
          component: FossilDating,
        },
        {
          title: "សារសំខាន់នៃផូសុីល",
          englishTitle: "important-properties-of-fossil",
          component: FossilImportance,
        },
        {
          title: "សំណួរ & ចម្លេីយ",
          englishTitle: "FossilQA",
          component: FossilQA,
        },
      ],
    },
  ],
};
