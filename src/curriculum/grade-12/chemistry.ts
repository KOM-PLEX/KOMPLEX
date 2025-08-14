import { Content } from "@/types/curriculum";
import { FlaskConical } from "lucide-react";
import RateChemicalReaction from "@/components/pages/docs/grade-12/chemistry/chemica- kinetics/Rate-chemical-reaction";
import Reaction_rate_factors from "@/components/pages/docs/grade-12/chemistry/chemica- kinetics/Reaction_rate_factors";
import Aqueous_solution from "@/components/pages/docs/grade-12/chemistry/aqueous_solution_forces/Aqueous_solution";
import Intermolecular_forces from "@/components/pages/docs/grade-12/chemistry/aqueous_solution_forces/Intermolecular_forces";
import Acid_base_theory from "@/components/pages/docs/grade-12/chemistry/acid_base/Acid_base_theory";
import AcidbaseReaction from "@/components/pages/docs/grade-12/chemistry/acid_base/Acid_base_reaction";
import Aqueous_solution_ph from "@/components/pages/docs/grade-12/chemistry/acid_base/Aqueous_solution_ph";
import Equilibrium_shift from "@/components/pages/docs/grade-12/chemistry/chemical_equilibrium/Equilibrium_shift";
import Nature_equilibrium from "@/components/pages/docs/grade-12/chemistry/chemical_equilibrium/Nature_equilibrium";
import Ester_fat_oil from "@/components/pages/docs/grade-12/chemistry/organic_chemistry/Ester_fat_oil";
import Aliphatic_acid_derivatives from "@/components/pages/docs/grade-12/chemistry/organic_chemistry/Aliphatic_acid_derivatives";
import Inorganic_compounds from "@/components/pages/docs/grade-12/chemistry/organic_chemistry/Inorganic_compounds";
import Chemica_Practice from "@/components/pages/docs/grade-12/chemistry/chemica- kinetics/Kinetics-Practice";
import AqueousPractice from "@/components/pages/docs/grade-12/chemistry/aqueous_solution_forces/Aqueous-Practice";
import Acid_base_practice from "@/components/pages/docs/grade-12/chemistry/acid_base/Acid_base_practice";
import EquilibriumPractice from "@/components/pages/docs/grade-12/chemistry/chemical_equilibrium/Equilibrium-Practice";
import OrganicPractice from "@/components/pages/docs/grade-12/chemistry/organic_chemistry/Organic-Practice";





export const chemistry: Content = {
  subject: "chemistry",
  title: "គីមីវិទ្យា",
  englishTitle: "Chemistry",
  icon: FlaskConical,
  lessons: [
    {
      lesson: "ChemicalKinetics",
      title: "សុីនេទិចគីមី",
      englishTitle: "ChemicalKinetics",
      icon: FlaskConical,
      topics: [
        {
          title: "ល្បឿនប្រតិកម្មគីមី",
          englishTitle: "RateChemicalReaction",
          component: RateChemicalReaction,
        },
        {
          title: "កត្តាជិះឥទ្ធិពលលេីល្បឿនប្រតិកម្ម",
          englishTitle: "FactorsAffectingtheRateofReaction",
          component: Reaction_rate_factors,
        },
        {
          title: "លំហាត់អនុវត្តន៍",
          englishTitle: "ChemicaPractice",
          component: Chemica_Practice,
        },
      ],
    },
    {
      lesson: "aqueous_solution_intermolecular",
      title: "សមាសធាតុសូលូស្យុងក្នុងទឹកនិង កម្លាំងអន្តរម៉ូលេគុល",
      englishTitle: "AqueousSolutionsandIntermolecularForces",
      icon: FlaskConical,
      topics: [
        {
          title: "សមាសធាតុសូលូស្យុងក្នុងទឹក",
          englishTitle: "AqueousSolutions",
          component: Aqueous_solution,
        },
        {
          title: "កម្លាំងអន្តរម៉ូលេគុល",
          englishTitle: "intermolecular-forces",
          component: Intermolecular_forces,
        },
        {
          title: "លំហាត់អនុវត្តន៍",
          englishTitle: "AqueousPractice",
          component: AqueousPractice,
        },
      ],
    },
    {
      lesson: "acid_base",
      title: "អាសុីត បាស",
      englishTitle: "Acid-Base",
      icon: FlaskConical,
      topics: [
        {
          title: "ទ្រឹស្តីអាសុីតបាស",
          englishTitle: "acid-base-theory",
          component: Acid_base_theory,
        },
        {
          title: "ប្រតិកម្មអាសុីតបាស",
          englishTitle: "acid-base-reactions",
          component: AcidbaseReaction,
        },
        {
          title: "សូលុយស្យុងក្នុងទឹកនិង ph",
          englishTitle: "aqueous-solutions-and-ph",
          component: Aqueous_solution_ph,
        },
        {
          title: "លំហាត់អនុវត្តន៍",
          englishTitle: "Acid_base_practice",
          component: Acid_base_practice,
        },
      ],
    },
    {
      lesson: "chemical_equilibrium",
      title: "លំនឹងគីមី",
      englishTitle: "ChemicalEquilibrium",
      icon: FlaskConical,
      topics: [
        {
          title: "ធម្មជាតិនៃលំនឹងគីមី",
          englishTitle: "nature-of-chemical-equilibrium",
          component: Nature_equilibrium,
        },
        {
          title: "ការរំកិលលំនឹង",
          englishTitle: "shift-in-equilibrium",
          component: Equilibrium_shift,
        },
        {
          title: "លំហាត់អនុវត្តន៍",
          englishTitle: "EquilibriumPractice",
          component: EquilibriumPractice,
        },
      ],
    },
    {
      lesson: "organic_chemistry",
      title: "គីមីសរីរាង្គ",
      englishTitle: "OrganicChemistry",
      icon: FlaskConical,
      topics: [
        {
          title: "អេស្ទែ ខ្លាញ់និងប្រេង",
          englishTitle: "Ester_fats_and_oils",
          component: Ester_fat_oil,
        },
        {
          title: "ស្រលាយអាលីផាទិចអាសូត",
          englishTitle: "aliphatic_acid_derivatives",
          component: Aliphatic_acid_derivatives,
        },
        {
          title: "សមាសធាតុប្រហេីរ",
          englishTitle: "inorganic_compounds",
          component: Inorganic_compounds,
        },
        {
          title: "លំហាត់អនុវត្តន៍",
          englishTitle: "OrganicPractice",
          component: OrganicPractice,
        },
      ],
    },
  ],
};
