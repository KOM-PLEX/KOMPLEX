import { Content } from "@/types/docs/curriculum";
import { Atom } from "lucide-react";
import KineticTheory from "@/components/pages/docs/grade-12/physic/thermodynamic/Kinetic-Theory";
import FirstLawThermodynamics from "@/components/pages/docs/grade-12/physic/thermodynamic/First-Law-Thermodynamics";
import Engines from "@/components/pages/docs/grade-12/physic/thermodynamic/Engines";
import PrincipleWaves from "@/components/pages/docs/grade-12/physic/waves/Principle-Waves";
import ThermoPractice from "@/components/pages/docs/grade-12/physic/thermodynamic/Thermo-Practice";
import WavesPractice from "@/components/pages/docs/grade-12/physic/waves/Waves-Practice";
import MagneticField from "@/components/pages/docs/grade-12/physic/electricity&magnetism/Magnetic-Field";
import ElectromagneticInduction from "@/components/pages/docs/grade-12/physic/electricity&magnetism/Electromagnetic-Induction";
import SelfInduction from "@/components/pages/docs/grade-12/physic/electricity&magnetism/Self-Induction";
import AlternatingCircuits from "@/components/pages/docs/grade-12/physic/electricity&magnetism/Alternating-Circuits";
import ElectricityPractice from "@/components/pages/docs/grade-12/physic/electricity&magnetism/Electricity-Practice";

export const physics: Content = {
  subject: "physics",
  title: "រូបវិទ្យា",
  englishTitle: "Physics",
  icon: Atom,
  lessons: [
    {
      lesson: "thermodynamics",
      title: "ទែម៉ូឌីណាមិច",
      englishTitle: "Thermodynamics",
      icon: Atom,
      topics: [
        {
          title: "ទ្រឹស្តីសុីនេទិច",
          englishTitle: "KineticTheory",
          component: KineticTheory,
        },
        {
          title: "ច្បាប់ទីមួយទែម៉ូឌីណាមិច",
          englishTitle: "FirstLawofThermodynamics",
          component: FirstLawThermodynamics,
        },
        {
          title: "ម៉ាសុីន",
          englishTitle: "Heat-Engines",
          component: Engines,
        },
        {
          title: "លំហាត់អនុវត្តន៍",
          englishTitle: "thermodynamics-practice",
          component: ThermoPractice,
        },
      ],
    },
    {
      lesson: "waves",
      title: "រលក",
      englishTitle: "Waves",
      icon: Atom,
      topics: [
        {
          title: "គោលការណ៍រលកតម្រួតនៃរលក និងរលកជញ្រ្ចុំ",
          englishTitle: "wave-principle",
          component: PrincipleWaves,
        },
        {
          title: "លំហាត់អនុវត្តន៍",
          englishTitle: "wave-practice",
          component: WavesPractice,
        },
      ],
    },
    {
      lesson: "electricityMagnetism",
      title: "អគ្គិសនី និងម៉ាញេទិច",
      englishTitle: "ElectricityMagnetism",
      icon: Atom,
      topics: [
        {
          title: "ដែននិងកម្លាំងម៉ាញេទិច",
          englishTitle: "magneticField",
          component: MagneticField,
        },
        {
          title: "អាំងឌុចស្យុងអេឡិចត្រូម៉ាញេទិច",
          englishTitle: "Electromagnetic-Induction",
          component: ElectromagneticInduction,
        },
        {
          title: "អូតូអាំងឌុចស្យុង",
          englishTitle: "AutoElectromagneticInduction",
          component: SelfInduction,
        },
        {
          title: "សៀគ្វីចរន្តឆ្លាស់",
          englishTitle: "AlternatingCurrentCircuits",
          component: AlternatingCircuits,
        },
        {
          title: "លំហាត់អនុវត្តន៍",
          englishTitle: "electromagneticmagnetismpractice",
          component: ElectricityPractice,
        },
      ],
    },
  ],
};