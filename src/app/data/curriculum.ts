import LimitZeroOverZero from "@/components/docs/Limit-Zero-Over-Zero";
import Footer from "@/components/Footer";
import {
  Calculator,
  Atom,
  FlaskConical,
  Leaf,
  Target,
  FunctionSquare,
  Variable,
  Box,
  Infinity,
} from "lucide-react";

export const curriculum = [
  {
    grade: "grade-12",
    gradeKhmer: "ថ្នាក់ទី១២",
    content: [
      {
        subject: "math",
        title: "គណិតវិទ្យា",
        englishTitle: "Mathematics",
        icon: Calculator,
        lessons: [
          {
            lesson: "limits",
            title: "លីមីត",
            englishTitle: "Limits",
            icon: Target,
            topics: [
              {
                title: "និយមន័យលីមីត",
                englishTitle: "definition",
                component: LimitZeroOverZero,
              },
              {
                title: "លីមីតសាមញ្ញ",
                englishTitle: "simple",
                component: Footer,
              },
              {
                title: "លីមីត 0/0",
                englishTitle: "zero-over-zero",
                component: LimitZeroOverZero,
              },
              {
                title: "លីមីតនៅអនន្ត",
                englishTitle: "infinity",
                component: LimitZeroOverZero,
              },
              {
                title: "លីមីតម្ខាង",
                englishTitle: "one-sided",
                component: LimitZeroOverZero,
              },
              {
                title: "ច្បាប់លីមីត",
                englishTitle: "rules",
                component: LimitZeroOverZero,
              },
            ],
          },
          {
            lesson: "derivatives",
            title: "ដេរីវេ",
            englishTitle: "Derivatives",
            icon: FunctionSquare,
            topics: [
              {
                title: "និយមន័យដេរីវេ",
                englishTitle: "definition",
                component: LimitZeroOverZero,
              },
              {
                title: "ច្បាប់ដេរីវេ",
                englishTitle: "rules",
                component: LimitZeroOverZero,
              },
              {
                title: "ដេរីវេអនុគមន៍",
                englishTitle: "functions",
                component: LimitZeroOverZero,
              },
              {
                title: "ដេរីវេអ៊ីមភ្លិច",
                englishTitle: "implicit",
                component: LimitZeroOverZero,
              },
            ],
          },
          {
            lesson: "integration",
            title: "អាំងតេក្រាល",
            englishTitle: "Integration",
            icon: Variable,
            topics: [
              {
                title: "និយមន័យអាំងតេក្រាល",
                englishTitle: "definition",
                component: LimitZeroOverZero,
              },
              {
                title: "អាំងតេក្រាលមិនកំណត់",
                englishTitle: "indefinite",
                component: LimitZeroOverZero,
              },
              {
                title: "អាំងតេក្រាលកំណត់",
                englishTitle: "definite",
                component: LimitZeroOverZero,
              },
              {
                title: "វិធីសាស្ត្រអាំងតេក្រាល",
                englishTitle: "methods",
                component: LimitZeroOverZero,
              },
            ],
          },
          {
            lesson: "vectors",
            title: "វ៉ិចទ័រ",
            englishTitle: "Vectors",
            icon: Box,
            topics: [
              {
                title: "និយមន័យវ៉ិចទ័រ",
                englishTitle: "definition",
                component: LimitZeroOverZero,
              },
              {
                title: "ប្រតិកម្មវ៉ិចទ័រ",
                englishTitle: "operations",
                component: LimitZeroOverZero,
              },
              {
                title: "ផលគុណវ៉ិចទ័រ",
                englishTitle: "products",
                component: LimitZeroOverZero,
              },
              {
                title: "អ័ក្សកូអរដែន",
                englishTitle: "coordinates",
                component: LimitZeroOverZero,
              },
            ],
          },
        ],
      },
      {
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
            icon: Infinity,
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
      },
      {
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
      },
      {
        subject: "biology",
        title: "ជីវវិទ្យា",
        englishTitle: "Biology",
        icon: Leaf,
        lessons: [
          {
            lesson: "cell",
            title: "កោសិកា",
            englishTitle: "Cell",
            icon: Leaf,
            topics: [
              {
                title: "រចនាសម្ព័ន្ធកោសិកា",
                englishTitle: "cell-structure",
                component: LimitZeroOverZero,
              },
              {
                title: "ការចែកកោសិកា",
                englishTitle: "cell-division",
                component: LimitZeroOverZero,
              },
              {
                title: "ការដឹកជញ្ជូនកោសិកា",
                englishTitle: "cell-transport",
                component: LimitZeroOverZero,
              },
            ],
          },
          {
            lesson: "genetics",
            title: "ហ្សែន",
            englishTitle: "Genetics",
            icon: Leaf,
            topics: [
              {
                title: "ការទទួលមរតក",
                englishTitle: "inheritance",
                component: LimitZeroOverZero,
              },
              {
                title: "ឌីអិនអេ",
                englishTitle: "dna",
                component: LimitZeroOverZero,
              },
              {
                title: "ជំងឺហ្សែន",
                englishTitle: "genetic-disorders",
                component: LimitZeroOverZero,
              },
            ],
          },
          {
            lesson: "ecology",
            title: "អេកូឡូស៊ី",
            englishTitle: "Ecology",
            icon: Leaf,
            topics: [
              {
                title: "ប្រព័ន្ធអេកូឡូស៊ី",
                englishTitle: "ecosystems",
                component: LimitZeroOverZero,
              },
              {
                title: "ឌីណាមិចចំនួនប្រជាជន",
                englishTitle: "population-dynamics",
                component: LimitZeroOverZero,
              },
              {
                title: "ការអភិរក្ស",
                englishTitle: "conservation",
                component: LimitZeroOverZero,
              },
            ],
          },
        ],
      },
    ],
  },
];
