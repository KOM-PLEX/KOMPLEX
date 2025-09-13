import React from "react";
import DefinitionBox from "../../../common/box/DefinitionBox";
import ExampleBox from "../../../common/box/ExampleBox";
import TipBox from "../../../common/box/TipBox";
import ExerciseBox from "../../../common/box/ExerciseBox";
import HintBox from "../../../common/box/HintBox";
import WarningBox from "../../../common/box/WarningBox";
import { BlockMath, InlineMath } from "react-katex";
import { Check } from "lucide-react";

type Variant = "green" | "violet" | "neutral" | "amber";

const styles: Record<Variant, string> = {
  green:
    "bg-emerald-50 text-emerald-700 ring-emerald-200 " +
    "dark:bg-emerald-900/20 dark:text-emerald-300 dark:ring-emerald-900/50",
  violet:
    "bg-violet-50 text-violet-700 ring-violet-200 " +
    "dark:bg-violet-900/20 dark:text-violet-300 dark:ring-violet-900/50",
  neutral:
    "bg-white text-slate-700 ring-slate-200 " +
    "dark:bg-slate-900/30 dark:text-slate-200 dark:ring-slate-800",
  amber:
    "bg-amber-50 text-amber-800 ring-amber-200 " +
    "dark:bg-amber-900/20 dark:text-amber-300 dark:ring-amber-900/50",
};

export function ResultCallout({
  children,
  label = "សរុប៖",
  variant = "green",
}: {
  children: React.ReactNode;
  label?: string;
  variant?: Variant;
}) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-[13.5px]",
        "ring-1 shadow-sm transition-colors",
        styles[variant],
      ].join(" ")}
    >
      <span className="inline-flex items-center gap-1 font-semibold">
        <Check className="h-3.5 w-3.5" />
        {label}
      </span>
      <span className="mx-2 h-4 w-px bg-current/30" />
      <span className="[&_.katex]:text-[1.05rem] leading-none">{children}</span>
    </div>
  );
}



const LessonChip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white text-sm font-bold">
    {children}
  </span>
);

/* Mini-TOC chip (the same hover you liked) */
const chip =
  "block rounded-2xl px-3 py-2 leading-snug break-words " +
  "bg-white text-slate-800 ring-1 ring-violet-200 shadow-sm " +
  "transition-all duration-200 " +
  "hover:bg-violet-50 hover:text-violet-700 hover:ring-violet-400 hover:shadow " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500";

/* Reusable section shell */
const Section = ({
  no,
  title,
  id,
  children,
}: {
  no: number;
  title: string;
  id: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-35 space-y-3">
    <div className="flex items-center gap-3">
      <LessonChip>{no}</LessonChip>
      <h3 className="text-lg sm:text-xl font-bold text-slate-900">{title}</h3>
    </div>
    {children}
  </section>
);


// components/helper/Therefore.tsx

type ThereforeProps = {
  /** KaTeX string */
  math: string;
  /** Label before the math (e.g., "ដូច្នេះ" / "សរុបយើងបាន" / "So") */
  label?: string;
  /** Extra classNames if you want to tweak spacing where used */
  className?: string;
};

/** A compact callout pill for final conclusions:  ∴ Label  <math>  */
export const Therefore: React.FC<ThereforeProps> = ({
  math,
  label = "ដូច្នេះ",
  className = "",
}) => (
  <div
    className={
      "not-prose inline-flex items-center gap-2 rounded-xl " +
      "bg-emerald-50/90 text-emerald-800 px-3 py-1.5 " +
      "ring-1 ring-emerald-200 shadow-sm " +
      "backdrop-blur supports-[backdrop-filter]:bg-emerald-50/70 " +
      className
    }
  >
    <span className="inline-flex items-center gap-1 text-[11px] font-semibold">
      <span className="text-emerald-600"></span> {label}
    </span>
    <span className="mx-1 h-4 w-px bg-emerald-200" />
    <span className="text-[15px] font-semibold">
      <InlineMath math={math} />
    </span>
  </div>
);


const AlternatingCircuits = () => {
  return (
    <div>
      <nav className="not-prose -mx-1 mb-3">
        <ol className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[13px]">
          <li>
            <a href="#sec-magnetic-flux" className={chip}>
              <span className="font-semibold">1. សមីការចរន្តឆ្លាស់</span>
            </a>
          </li>
          <li>
            <a href="#sec-electric-motor-force" className={chip}>
              <span className="font-semibold">2. ចរន្តប្រសិទ្ធ</span>
            </a>
          </li>
          <li>
            <a href="#sec-electric-motor-force-bar" className={chip}>
              <span className="font-semibold">3. សមីការតង់ស្យុង</span>
            </a>
          </li>
          <li>
            <a href="#sec-electric-motor-force-period" className={chip}>
              <span className="font-semibold">4. តង់ស្យុងប្រសិទ្ធ</span>
            </a>
          </li>
          <li>
            <a href="#sec-electric-motor-force-period" className={chip}>
              <span className="font-semibold">5. អាប៉េដង់</span>
            </a>
          </li>
          <li>
            <a href="#sec-electric-motor-force-period" className={chip}>
              <span className="font-semibold">5. គំលាតផាស</span>
            </a>
          </li>
          <li>
            <a href="#sec-electric-motor-force-period" className={chip}>
              <span className="font-semibold">5. ត្រង់ស្វូ</span>
            </a>
          </li>
          <li>
            <a href="#sec-electric-motor-force-period" className={chip}>
              <span className="font-semibold">5. ទិន្នផលត្រង់ស្វូ</span>
            </a>
          </li>
          <li>
            <a href="#sec-exercises" className={chip}>
              <span className="font-semibold">6.</span> លំហាត់
            </a>
          </li>
        </ol>
      </nav>

      <Section no={3} title="សមីការចរន្តឆ្លាស់" id="sec-electric-motor-force">
        <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">
            រូបមន្ត
          </p>
          <div className="space-y-1">
            <BlockMath math={String.raw`i = I_msin(\omega t + \phi)`} />
          </div>
          {/* <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math={String.raw`\phi `} />​ ភ្លុចអាំងឌុចស្យុង (<InlineMath math=" Wb" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`L`} />​ អាំងឌុចតង់ (<InlineMath math="H" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`i`} />​ ចរន្ត (<InlineMath math="A" />)
                  </li>
                </ul> */}
        </div>
      </Section>

      <Section no={3} title="ចរន្តប្រសិទ្ធ" id="sec-electric-motor-force">
        <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">
            រូបមន្ត
          </p>
          <div className="space-y-1">
            <BlockMath math={String.raw`I = \frac{I_m}{\sqrt{2}}`} />
          </div>
          {/* <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math={String.raw`\phi `} />​ ភ្លុចអាំងឌុចស្យុង (<InlineMath math=" Wb" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`L`} />​ អាំងឌុចតង់ (<InlineMath math="H" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`i`} />​ ចរន្ត (<InlineMath math="A" />)
                  </li>
                </ul> */}
        </div>
      </Section>

      <Section no={3} title="សមីការតង់ស្យុង" id="sec-electric-motor-force">
        <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">
            រូបមន្ត
          </p>
          <div className="space-y-1">
            <BlockMath math={String.raw`v = V_msin(\omega t + \phi)`} />
          </div>
          {/* <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math={String.raw`\phi `} />​ ភ្លុចអាំងឌុចស្យុង (<InlineMath math=" Wb" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`L`} />​ អាំងឌុចតង់ (<InlineMath math="H" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`i`} />​ ចរន្ត (<InlineMath math="A" />)
                  </li>
                </ul> */}
        </div>
      </Section>

      <Section no={3} title="តង់ស្យុងប្រសិទ្ធ" id="sec-electric-motor-force">
        <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">
            រូបមន្ត
          </p>
          <div className="space-y-1">
            <BlockMath math={String.raw`V = \frac{V_m}{\sqrt{2}}`} />
          </div>
          {/* <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math={String.raw`\phi `} />​ ភ្លុចអាំងឌុចស្យុង (<InlineMath math=" Wb" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`L`} />​ អាំងឌុចតង់ (<InlineMath math="H" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`i`} />​ ចរន្ត (<InlineMath math="A" />)
                  </li>
                </ul> */}
        </div>
      </Section>

      <Section no={3} title="អាប៉េដង់" id="sec-electric-motor-force">
        <div className="grid gap-2 sm:grid-cols-2">
          {/* Isochoric */}
          <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
            <p className="font-semibold text-slate-800 mb-1">
              រូបមន្ត
            </p>
            <div className="space-y-1">
              <BlockMath math={String.raw`Z_R = R`} />
            </div>
            {/* <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math={String.raw`\phi `} />​ ភ្លុចអាំងឌុចស្យុង (<InlineMath math=" Wb" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`L`} />​ អាំងឌុចតង់ (<InlineMath math="H" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`i`} />​ ចរន្ត (<InlineMath math="A" />)
                  </li>
                </ul> */}
          </div>

          {/* Isobaric */}
          <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
            <p className="font-semibold text-slate-800 mb-1">
              រូបមន្ត
            </p>
            <div className="space-y-1">
              <BlockMath math={String.raw`Z_C = \frac{1}{C\omega}`} />
            </div>
            {/* <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math={String.raw`\phi `} />​ ភ្លុចអាំងឌុចស្យុង (<InlineMath math=" Wb" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`L`} />​ អាំងឌុចតង់ (<InlineMath math="H" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`i`} />​ ចរន្ត (<InlineMath math="A" />)
                  </li>
                </ul> */}
          </div>

          <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">
            រូបមន្ត
          </p>
          <div className="space-y-1">
            <BlockMath math={String.raw`Z_L = L \cdot \omega`} />
          </div>
          {/* <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math={String.raw`\phi `} />​ ភ្លុចអាំងឌុចស្យុង (<InlineMath math=" Wb" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`L`} />​ អាំងឌុចតង់ (<InlineMath math="H" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`i`} />​ ចរន្ត (<InlineMath math="A" />)
                  </li>
                </ul> */}
        </div>

        <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">
            រូបមន្ត
          </p>
          <div className="space-y-1">
            <BlockMath math={String.raw`Z_{RC} = \sqrt{R^2 + \left(\frac{1}{C\omega}\right)^2}`} />
          </div>
          {/* <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math={String.raw`\phi `} />​ ភ្លុចអាំងឌុចស្យុង (<InlineMath math=" Wb" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`L`} />​ អាំងឌុចតង់ (<InlineMath math="H" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`i`} />​ ចរន្ត (<InlineMath math="A" />)
                  </li>
                </ul> */}
        </div>

        <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">
            រូបមន្ត
          </p>
          <div className="space-y-1">
            <BlockMath math={String.raw`Z_{RL} = \sqrt{R^2 + \left(L \cdot \omega\right)^2}`} />
          </div>
          {/* <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math={String.raw`\phi `} />​ ភ្លុចអាំងឌុចស្យុង (<InlineMath math=" Wb" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`L`} />​ អាំងឌុចតង់ (<InlineMath math="H" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`i`} />​ ចរន្ត (<InlineMath math="A" />)
                  </li>
                </ul> */}
        </div>

        <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">
            រូបមន្ត
          </p>
          <div className="space-y-1">
            <BlockMath math={String.raw`Z_RLC = \sqrt{R^2 + \left(\frac{1}{C\omega}\right)^2 + \left(L \cdot \omega\right)^2}`} />
          </div>
          {/* <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math={String.raw`\phi `} />​ ភ្លុចអាំងឌុចស្យុង (<InlineMath math=" Wb" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`L`} />​ អាំងឌុចតង់ (<InlineMath math="H" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`i`} />​ ចរន្ត (<InlineMath math="A" />)
                  </li>
                </ul> */}
        </div>
        </div>

      </Section>
    </div>
  )
}

export default AlternatingCircuits

