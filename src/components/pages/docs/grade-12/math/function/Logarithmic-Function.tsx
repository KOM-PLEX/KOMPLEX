import DefinitionBox from "../../../common/box/DefinitionBox";
import ExampleBox from "../../../common/box/ExampleBox";
import TipBox from "../../../common/box/TipBox";
import ExerciseBox from "../../../common/box/ExerciseBox";
import HintBox from "../../../common/box/HintBox";
import WarningBox from "../../../common/box/WarningBox";
import { TopicContent } from "@/types/topic";
import { BlockMath, InlineMath } from "react-katex";
import { GraphExplanationBox } from "../../../common/box/explanation-box/GraphExplanationBox";

// ===== TOPIC CONTENT DATA =====

const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "អនុគមន៍ឡូហ្ការីត",
    content: (
      <div className="space-y-3">
        <div>
          <strong>ក. គំនិត:</strong>
          <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 rounded mt-2">
            <strong>អនុគមន៍ឡូហ្ការីត:</strong> លេខគូកាត់ក្រាបអថេរ និងកំណត់ដោយ <InlineMath math="a > 0, b > 0" /> ហាន:
            <div className="mt-2">
              ក. <InlineMath math="\log_a + \log_b = \log(ab)" />
            </div>
            <div>
              ខ. <InlineMath math="\log_a - \log_b = \log\left(\frac{a}{b}\right)" />
            </div>
            <div>
              គ. <InlineMath math="\log(a^n) = n\log a" /> ដើម្បី <InlineMath math="n \in \mathbb{R}" />
            </div>
            <div>
              ប. <InlineMath math="a^{\log_a x} = x" />
            </div>
          </div>
        </div>
        
        <div>
          <strong>ខ. សម្រាប់វិទូ:</strong>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>ក. <InlineMath math="\ln 3 + \ln 4 = \ln(3 \times 4) = \ln 12" /></div>
            <div>ខ. <InlineMath math="\ln 12 - \ln 4 = \ln\left(\frac{12}{4}\right) = \ln 3" /></div>
            <div>គ. <InlineMath math="\ln 36 = \ln 6^2 = 2\ln 6" /></div>
            <div>ប. <InlineMath math="\ln e^x = 8\ln e = 8 \times 1 = 8" /></div>
          </div>
        </div>

        <div className="mt-4">
          <strong>ចំណុំ:</strong> កូអរដោនេមួយចំនួន
          <div className="grid grid-cols-4 gap-2 text-sm mt-2">
            <div>• <InlineMath math="\ln 1 = 0" /></div>
            <div>• <InlineMath math="\ln 2 = 0.69" /></div>
            <div>• <InlineMath math="\ln 3 = 1.09" /></div>
            <div>• <InlineMath math="\ln 4 = 1.38" /></div>
            <div>• <InlineMath math="\ln 5 = 1.60" /></div>
            <div>• <InlineMath math="\ln 6 = 1.79" /></div>
            <div>• <InlineMath math="\ln 7 = 1.94" /></div>
            <div>• <InlineMath math="\ln 8 = 2.07" /></div>
            <div>• <InlineMath math="\ln 9 = 2.19" /></div>
            <div>• <InlineMath math="\ln 10 = 2.30" /></div>
            <div>• <InlineMath math="\ln e = 1" /></div>
          </div>
        </div>
      </div>
    ),
  },

  tip: {
    title: "២. អនុគមន៍ឡូហ្ការីតធម្មជាតិ",
    content: (
      <div className="space-y-3">
        <div>
          <strong>ក. គំនិត:</strong>
          <div className="border-l-4 border-green-500 pl-4 bg-green-50 rounded mt-2">
            <strong>អនុគមន៍ឡូហ្ការីត:</strong> បើ <InlineMath math="x > 0" /> អនុគមន៍ឡូហ្ការីតធម្មជាតិ <InlineMath math="x" /> ដើម្បីជកំណត់ដោយ <InlineMath math="y = \ln x" /> កំណាំគំនិតសញ្ញាសុកទី 
            អនុគមន៍ឡូហ្ការីតនៃសុកទាំងមូល។ អនុគមន៍ឡូហ្ការីតធម្មជាតិកណ្តាលនេះសេរិកា <InlineMath math="y = e^x" />។
          </div>
        </div>

        <div>
          <strong>ខ. ស្រប្រាញបាប់ជែងថ្នីងស្រាប់ស្រាលធម្មជាតិ</strong>
          <div className="space-y-2 mt-2">
            <div><strong>រូបមន្ត:</strong></div>
            <div className="ml-4 space-y-1">
              <div>ក. <InlineMath math="\lim_{x \to +\infty} \ln x = +\infty" /></div>
              <div>ខ. <InlineMath math="\lim_{x \to 0^+} \ln x = -\infty" /></div>
              <div>គ. <InlineMath math="\lim_{x \to +\infty} x^n \ln x = 0, n > 0" /></div>
              <div>ប. <InlineMath math="\lim_{x \to +\infty} \frac{\ln x}{\ln x} = +\infty, n > 0" /></div>
              <div>ង. <InlineMath math="\lim_{x \to +\infty} \frac{\ln x}{x^n} = 0, n > 0" /></div>
              <div>ច. <InlineMath math="\lim_{x \to +\infty} \frac{\ln x}{\ln x} = +\infty, n > 0" /></div>
            </div>
          </div>

          <div className="mt-4">
            <strong>ចំណាំ:</strong> កំណាំគំនិតធម្មជាតិកណ្តាលាស់ធម្មរំពាក
            <div className="grid grid-cols-2 gap-4 text-sm mt-2">
              <div>ក. <InlineMath math="\lim_{x \to +\infty} \frac{\ln x}{x^2 - x} = \lim_{x \to +\infty} \frac{\ln x}{x} \cdot \frac{1}{x-1} = 0 \times 0 = 0" /></div>
              <div>ខ. <InlineMath math="\lim_{x \to 0^+} \frac{\ln x}{\cos x} = \frac{-\infty}{1} = -\infty" /></div>
              <div>គ. <InlineMath math="\lim_{x \to +\infty} \ln(e^x + 1) = \ln(0 + 1) = \ln 1 = 0" /></div>
              <div>ប. <InlineMath math="\lim_{x \to +\infty} \ln(\ln x) = +\infty" /></div>
              <div>ង. <InlineMath math="\lim_{x \to 0^+} \ln\left(\frac{x}{x+1}\right) = \ln 0^+ = -\infty" /></div>
              <div>ច. <InlineMath math="\lim_{x \to +\infty} \ln\left(\frac{x}{x+1}\right) = \lim_{x \to +\infty} \ln\left(\frac{1}{1+\frac{1}{x}}\right) = \ln 1 = 0" /></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
};

const LIMITS_CONTENT: TopicContent = {
  example: {
    question: (
      <div className="space-y-3">
        <div className="font-bold">ចំណាំ: កំណាំគំនិតធម្មជាតិស្រាប់សម្រាប់ធម្មរំពាក</div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>ក. <InlineMath math="\lim_{x \to +\infty} \frac{x^2 + \ln x}{3x^2 - 1}" /></div>
          <div>រ. <InlineMath math="\lim_{x \to +\infty} \left(x \ln x - x^2 + 5\right)" /></div>
          <div>គ. <InlineMath math="\lim_{x \to +\infty} \frac{\ln x + 1}{\ln x - 1}" /></div>
          <div>ប. <InlineMath math="\lim_{x \to 0^+} \frac{\ln(1 + 7x)}{x}" /></div>
          <div>ង. <InlineMath math="\lim_{x \to 0^+} \ln\left(\frac{1 + 2x}{1 - 3x}\right)" /></div>
          <div>ម. <InlineMath math="\lim_{x \to 0^+} \ln(x^2 - x + 1)" /></div>
          <div>យ. <InlineMath math="\lim_{x \to 0^+} \frac{\ln(1 + x) + \ln(1 + 2x) + \ln(1 + 3x)}{x}" /></div>
        </div>
      </div>
    ),
    steps: [
      {
        title: "ដំណោះស្រាយលំហាត់នីមួយៗ",
        content: (
          <div className="space-y-4">
            <div>
              <strong>ក.</strong> <InlineMath math="\lim_{x \to +\infty} \frac{\ln x}{x^2 - x} = \lim_{x \to +\infty} \frac{\ln x}{x} \cdot \frac{1}{x-1} = \lim_{x \to +\infty} \frac{\ln x}{x} \cdot \frac{1}{x-1} = 0 \times 0 = 0" />
            </div>

            <div>
              <strong>ខ.</strong> <InlineMath math="\lim_{x \to 0^+} \frac{\ln x}{\cos x} = \frac{-\infty}{1} = -\infty" />
            </div>

            <div>
              <strong>គ.</strong> <InlineMath math="\lim_{x \to +\infty} \ln(e^x + 1) = \ln(0 + 1) = \ln 1 = 0" />
            </div>

            <div>
              <strong>ប.</strong> <InlineMath math="\lim_{x \to +\infty} \ln(\ln x) = +\infty" />
            </div>

            <div>
              <strong>ង.</strong> <InlineMath math="\lim_{x \to 0^+} \ln\left(\frac{x}{x+1}\right) = \ln 0^+ = -\infty" />
            </div>

            <div>
              <strong>ច.</strong> <InlineMath math="\lim_{x \to +\infty} \ln\left(\frac{x}{x+1}\right) = \lim_{x \to +\infty} \ln\left(\frac{1}{1+\frac{1}{x}}\right) = \ln 1 = 0" />
            </div>

            <div>
              <strong>រ.</strong> <InlineMath math="\lim_{x \to +\infty} \frac{x^2 + \ln x}{3x^2 - 1} = \lim_{x \to +\infty} \frac{x^2\left(1 + \frac{\ln x}{x^2}\right)}{x^2\left(3 - \frac{1}{x^2}\right)} = \lim_{x \to +\infty} \frac{1 + \frac{\ln x}{x^2}}{3 - \frac{1}{x^2}} = \frac{1 + 0}{3 - 0} = \frac{1}{3}" />
            </div>

            <div>
              <strong>ហ.</strong> <InlineMath math="\lim_{x \to +\infty} \left(x \ln x - x^2 + 5\right) = \lim_{x \to +\infty} x^2 \left(\frac{\ln x}{x} - 1 + \frac{5}{x^2}\right) = (-\infty)(0 - 1 + 0) = -\infty" />
            </div>

            <div>
              <strong>ម.</strong> <InlineMath math="\lim_{x \to +\infty} \frac{\ln x + 1}{\ln x - 1} = \lim_{x \to +\infty} \frac{\ln x\left(1 + \frac{1}{\ln x}\right)}{\ln x\left(1 - \frac{1}{\ln x}\right)} = \lim_{x \to +\infty} \frac{1 + \frac{1}{\ln x}}{1 - \frac{1}{\ln x}} = \frac{1 + 0}{1 - 0} = 1" />
            </div>

            <div>
              <strong>យ.</strong> <InlineMath math="\lim_{x \to 0^+} \frac{\ln(1 + 7x)}{x} = \lim_{x \to 0^+} \frac{7x}{x} = 7 = 7" />
            </div>

            <div>
              <strong>រ.</strong> <InlineMath math="\lim_{x \to 0^+} \ln\left(\frac{1 + 2x}{1 - 3x}\right) = \ln\left(\frac{1 + 0}{1 - 0}\right) = \ln 1 = 0" />
            </div>

            <div>
              <strong>ល.</strong> <InlineMath math="\lim_{x \to 0^+} \ln(x^2 - x + 1) = \ln(0 - 0 + 1) = \ln 1 = 0" />
            </div>

            <div>
              <strong>វ.</strong> <InlineMath math="\lim_{x \to 0^+} \frac{\ln(1 + x) + \ln(1 + 2x) + \ln(1 + 3x)}{x} = \lim_{x \to 0^+} \left(\frac{\ln(1 + x)}{x} + \frac{\ln(1 + 2x)}{x} + \frac{\ln(1 + 3x)}{x}\right)" />
              <div className="ml-4">
                <InlineMath math="= 1 + 2 + 3 = 6" />
              </div>
            </div>
          </div>
        ),
      }
    ],
    answer: ""
  },
};

const DERIVATIVES_CONTENT: TopicContent = {
  definition: {
    title: "៣. ដេរីវេនៃអនុគមន៍ឡូហ្ការីតធម្មជាតិ",
    content: (
      <div className="space-y-3">
        <div>
          <strong>រូបមន្ត:</strong>
          <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 rounded mt-2">
            <div>ក. <InlineMath math="y = \ln x \text{ ដា } y' = \frac{1}{x}" /></div>
            <div>ខ. <InlineMath math="y = \ln^a x \text{ ដា } y' = \frac{a}{x}(\ln x)^{a-1}" /></div>
            <div>គ. <InlineMath math="y = \ln(ax + b) \text{ ដា } y' = \frac{a}{ax + b}" /></div>
            <div>ប. <InlineMath math="y = \ln u \text{ ដា } y' = \frac{u'}{u}" /></div>
          </div>
        </div>

        <div className="mt-4">
          <strong>ចំណាំ:</strong> ធុមរកដាស្រាបារធម្មជាតិកម្មរដូមធម
          <div className="grid grid-cols-2 gap-4 text-sm mt-2">
            <div>ក. <InlineMath math="y = x^2 + x + \ln x" /></div>
            <div>ខ. <InlineMath math="y = x^4 \ln x" /></div>
            <div>គ. <InlineMath math="y = \frac{\ln x}{x^2}" /></div>
            <div>ប. <InlineMath math="y = x\ln x - x + 2" /></div>
            <div>ង. <InlineMath math="y = \ln\left(\frac{x}{x-2}\right)" /></div>
            <div>ច. <InlineMath math="y = x + 1 - \frac{\ln x}{x}" /></div>
            <div>រ. <InlineMath math="y = x\ln\left(x^2 + 2\right)" /></div>
            <div>ហ. <InlineMath math="y = x + \ln\left(\frac{x-1}{x+1}\right)" /></div>
            <div>ម. <InlineMath math="y = x + 2 - \frac{\ln x}{x + 3}" /></div>
            <div>យ. <InlineMath math="y = x + \frac{\ln x + 2}{\ln x - 3}" /></div>
          </div>
        </div>
      </div>
    ),
  },
};

const EQUATIONS_INEQUALITIES: TopicContent = {
  definition: {
    title: "៣. សមីការនិងវិសមីការឡូហ្ការីតធម្មជាតិ",
    content: (
      <div className="space-y-3">
        <div>
          <strong>ក. សមីការ</strong>
          <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 rounded mt-2">
            <div><strong>រូបមន្ត:</strong></div>
            <div>ក. <InlineMath math="\ln x = k" /> សមមូល <InlineMath math="x = e^k, k \in \mathbb{R}" /></div>
            <div>ខ. <InlineMath math="\ln x = \ln y" /> សមមូល <InlineMath math="x = y" /> ដើម្បី <InlineMath math="x > 0, y > 0" /></div>
          </div>
        </div>

        <div className="mt-4">
          <strong>ចំណាំ:</strong> ថេកស្រាបារធម្មជាតិកម្មរធម្មជាតិកម្មការុមរធម
          <div className="grid grid-cols-3 gap-2 text-sm mt-2">
            <div>ក. <InlineMath math="\ln x = 4" /></div>
            <div>ខ. <InlineMath math="\ln(2x) = \ln 2" /></div>
            <div>គ. <InlineMath math="\ln(2x + 4) = \ln 4" /></div>
            <div>ប. <InlineMath math="\ln(x + 2) = \ln 4x" /></div>
            <div>ង. <InlineMath math="\ln(x^2 - 4x) = \ln 5" /></div>
            <div>ច. <InlineMath math="\ln(x^2 + x) - \ln 2 = 0" /></div>
            <div>រ. <InlineMath math="\ln(x - 2) + \ln(x + 2) = \ln 45" /></div>
            <div>ហ. <InlineMath math="\ln(1 - x) + \ln(2x + 3) - \ln(x + 1) = \ln 3" /></div>
          </div>
        </div>

        <div className="mt-4">
          <strong>ខ. វិសមីការ</strong>
          <div className="border-l-4 border-red-500 pl-4 bg-red-50 rounded mt-2">
            <div><strong>រូបមន្ត:</strong></div>
            <div>ក. <InlineMath math="\ln x > \ln y" /> សមមូល <InlineMath math="x > y" /> ដើម្បី <InlineMath math="x > 0, y > 0" /></div>
            <div>ខ. <InlineMath math="\ln x < \ln y" /> សមមូល <InlineMath math="x < y" /> ដើម្បី <InlineMath math="x > 0, y > 0" /></div>
          </div>
        </div>

        <div className="mt-4">
          <strong>ចំណាំ:</strong> ថេកស្រាបារធម្មជាតិកម្មរធម្មជាតិកម្មការុមរធម
          <div className="grid grid-cols-3 gap-2 text-sm mt-2">
            <div>ក. <InlineMath math="\ln x > \ln 4" /></div>
            <div>ខ. <InlineMath math="\ln(4x + 2) \leq \ln 3" /></div>
            <div>គ. <InlineMath math="\ln(x + 2) > \ln(2x)" /></div>
            <div>ប. <InlineMath math="\ln(4x + 3) > \ln(2x + 1)" /></div>
            <div>ង. <InlineMath math="\ln(x - 1) < \ln(4x + 6)" /></div>
            <div>ច. <InlineMath math="\ln(x^2 - 3x) \leq \ln(2)" /></div>
            <div>រ. <InlineMath math="\ln(x + 3) + \ln(x + 5) \leq \ln 15" /></div>
            <div>ហ. <InlineMath math="\ln(x^2 - 4x^2) < 1 + \ln 3x" /></div>
          </div>
        </div>
      </div>
    ),
  },
};

const ADVANCED_EXAMPLE: TopicContent = {
  example: {
    question: (
      <div>
        <div className="font-bold mb-3">៤. សិក្សាអនុគមន៍រចនាស័ម្រេចនិងអនុគមន៍ទម្រាំ</div>
        <div className="space-y-3">
          <div>
            <strong>ចំណាំកុំ៖</strong> អនុគមន៍ <InlineMath math="f" /> កំណត់បានកម្រាប <InlineMath math="(0, +\infty)" /> ដោយ <InlineMath math="f(x) = \frac{x^2 - 2}{x} - \ln x" /> ជចៀង <InlineMath math="C" /> ក្រាបរបស់អនុគមន៍
            ក្នុងប្រព័ន្ធនិរតនាការ <InlineMath math="(O, \overrightarrow{i}, \overrightarrow{j})" />។
          </div>
          
          <div>
            <div><strong>១. ក. បង្ហាញថា:</strong> <InlineMath math="f(x) = x - \frac{2}{x} - \ln x" /> ដើម្បីគ្រីតកុំ <InlineMath math="(0, +\infty)" /> កណ្តាំគំនិត: <InlineMath math="f(x) = x\left(1 - \frac{\ln x}{x} - \frac{2}{x^2}\right)" /></div>
            <div className="ml-4">
              ដុងបៅ <InlineMath math="f(x) = \frac{1}{x}(x^2 - x\ln x - 2)" />។
            </div>
          </div>
          
          <div>
            <div><strong>ខ. បង្ហាញថាអនុគមន៍</strong> <InlineMath math="f" /> ក្រុង <InlineMath math="0" /> ដុងក្រុង <InlineMath math="+\infty" />។</div>
          </div>
          
          <div>
            <div><strong>២. ក. កំណត់ដេរីវេ</strong> <InlineMath math="f'(x)" /> ជអនុគមន៍ <InlineMath math="f(x)" /> ដុងបង្ហាញក្រាបចន្លោះ <InlineMath math="x" /> ដុង <InlineMath math="(0, +\infty)" /></div>
            <div className="ml-4">
              <InlineMath math="f'(x) = x^2 - x + 2" />។
            </div>
            <div><strong>ខ. សិក្សាតាម្លប្រីមាំអានុគមន៍</strong> <InlineMath math="f" /> បើដាសំអាក្រីមាំអគំនិត <InlineMath math="f" />។</div>
          </div>
          
          <div>
            <div><strong>៣. ក. កស្រាយថាការបុគ្រាប់:</strong> រ <InlineMath math="(C)" /> ក្រុងចំណុច <InlineMath math="A" /> ដើម្បីបនស
            កំណាំគម្រាងៀន។</div>
            <div className="ml-4">
              <div><strong>ខ. កស្រាយថាដេរីវេបុគ្រាប់</strong> <InlineMath math="B" /> ជ <InlineMath math="(C)" /> ដើម្បីបនស</div>
              <div>ការកស្រាយថាការកម្រាលាស់ថេរថេរទ។</div>
            </div>
          </div>
          
          <div>
            <div><strong>៤. សរក្រាប</strong> <InlineMath math="(C)" /> ដុងបង្ហាញចំណុច <InlineMath math="A" /> ដុងចំណុច <InlineMath math="B" /> ។ ( កក្រាញថេកេ <InlineMath math="\ln 2 = 0.7" /> )។</div>
          </div>
        </div>
      </div>
    ),
    steps: [
      {
        title: "១. បង្ហាញថា f(x) = x - 2/x - ln x",
        content: (
          <div className="space-y-3">
            <div>
              <div>ជាមួយ <InlineMath math="f(x) = \frac{x^2-2}{x} - \ln x" /></div>
              <div>ដោយ: <InlineMath math="f(x) = \frac{x^2-2}{x} - \ln x = \frac{x^2}{x} - \frac{2}{x} - \ln x = x - \frac{2}{x} - \ln x" /> កិត</div>
            </div>
            <div>ដូច្នេះ: <InlineMath math="f(x) = x - \frac{2}{x} - \ln x" />។</div>
            
            <div className="mt-4">
              <div><strong>• បង្ហាញថា</strong> <InlineMath math="f(x) = \frac{1}{x}(x^2 - x\ln x - 2)" /></div>
              <div className="ml-4">
                <div>ដោយ: <InlineMath math="f(x) = x - \frac{2}{x} - \ln x = \frac{x^2 - 2 - x\ln x}{x} = \frac{1}{x}(x^2 - x\ln x - 2)" /> កិត</div>
              </div>
            </div>
            
            <div className="mt-4">
              <div><strong>• កំណត់លិមីត</strong> <InlineMath math="f" /> ក្រុម <InlineMath math="0" /> និង <InlineMath math="+\infty" /></div>
              <div className="ml-4">
                <div>• <InlineMath math="\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \left(x - \frac{2}{x} - \ln x\right) = 0 - (-\infty) - (-\infty) = +\infty" /> (ដើម្បី <InlineMath math="\lim_{x \to 0^+} x\ln x = 0" />)</div>
                <div>• <InlineMath math="\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} x\left(1 - \frac{\ln x}{x} - \frac{2}{x^2}\right) = +\infty" /> (ដើម្បី <InlineMath math="\lim_{x \to +\infty} \frac{\ln x}{x} = 0" />)</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "២. កំណត់ដេរីវេ f'(x) និងសិក្សាតម្លៃអន្រាក្តន៍",
        content: (
          <div className="space-y-3">
            <div>
              <div>ជាមួយ: <InlineMath math="f(x) = x - \frac{2}{x} - \ln x" /></div>
              <div>ដោយ: <InlineMath math="f'(x) = 1 + \frac{2}{x^2} - \frac{1}{x} = \frac{x^2 - x + 2}{x^2}" /></div>
            </div>
            <div>ដូច្នេះ: <InlineMath math="f'(x) = \frac{x^2 - x + 2}{x^2}" />។</div>
            
            <div className="mt-4">
              <div><strong>• បង្ហាញថា</strong> <InlineMath math="f'(x) = \frac{x^2 - x + 2}{x^2}" /></div>
              <div className="ml-4">
                <div>ដោយ <InlineMath math="x^2 > 0" /> កំណត់ការគ្រាប <InlineMath math="x \in (0, +\infty)" /> ដា <InlineMath math="f'(x)" /> មានបិលសញ្ញាដូច <InlineMath math="x^2 - x + 2" /></div>
                <div>បើ <InlineMath math="x^2 - x + 2 = 0" /> ដុក <InlineMath math="\Delta = (-1)^2 - 4 \times 2 = 1 - 8 = -7 < 0" /></div>
                <div>ដោយ <InlineMath math="a = 1 > 0" /> ដុក <InlineMath math="\Delta = -7 < 0" /> ដា: <InlineMath math="x^2 - x + 2 > 0" /> ដុង <InlineMath math="f'(x) > 0" />។</div>
                <div>ដោយ <InlineMath math="f" /> កាកប្រដណ្ឋុំកម្មការ គ្រាប <InlineMath math="(0, +\infty)" /> ដុងកាកប្រាគអន្រាក្តន៍វាយក្រុម។</div>
              </div>
            </div>

            <div className="mt-4">
              <div><strong>• សិក្សាតាម្លប្រីមាំអានុគមន៍ f</strong></div>
              <div className="ml-4">
                <div className="w-full max-w-full overflow-hidden bg-white justify-start mt-2">
                  <div className="w-[100%] md:w-[60%] max-w-full overflow-hidden bg-white justify-start mt-2">
                    <div className="bg-white">
                      <table className="w-full border-collapse min-w-0" style={{
                        fontSize: 'clamp(14px, 4vw, 16px)',
                        fontFamily: 'serif'
                      }}>
                        <tbody>
                          {/* First row: x values - 2 columns */}
                          <tr>
                            <td className="border-2 border-black text-center font-normal bg-white" style={{
                              width: '15%',
                              minWidth: '40px',
                              height: '45px',
                              verticalAlign: 'middle',
                              fontStyle: 'italic'
                            }}>
                              x
                            </td>
                            <td className="border-2 border-black bg-white relative" style={{
                              width: '85%',
                              height: '45px',
                              verticalAlign: 'middle'
                            }}>
                              {/* 0⁺ at left */}
                              <div className="absolute" style={{
                                left: '5%',
                                top: '50%',
                                transform: 'translateY(-50%)'
                              }}>
                                0⁺
                              </div>
                              
                              {/* +∞ at right */}
                              <div className="absolute" style={{
                                right: '5%',
                                top: '50%',
                                transform: 'translateY(-50%)'
                              }}>
                                +∞
                              </div>
                            </td>
                          </tr>
                          
                          {/* Second row: f'(x) - 3 columns with vertical line */}
                          <tr>
                            <td className="border-2 border-black text-center font-normal bg-white" style={{
                              height: '45px',
                              verticalAlign: 'middle',
                              fontStyle: 'italic'
                            }}>
                              f'(x)
                            </td>
                            <td className="border-2 border-black bg-white relative" style={{
                              height: '45px'
                            }}>
                              {/* Vertical line at center with 0 */}
                              <div className="absolute" style={{
                                left: '50%',
                                top: '0',
                                height: '100%',
                                width: '2px',
                                backgroundColor: 'black',
                                transform: 'translateX(-50%)'
                              }}></div>
                              
                              {/* 0 centered on the line */}
                              <div className="absolute" style={{
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: 'clamp(16px, 5vw, 18px)',
                                fontWeight: 'bold',
                                backgroundColor: 'white',
                                padding: '0 4px'
                              }}>
                                0
                              </div>
                              
                              {/* + sign in left interval */}
                              <div className="absolute" style={{
                                left: '25%',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                fontSize: 'clamp(16px, 5vw, 18px)',
                                fontWeight: 'bold'
                              }}>
                                +
                              </div>
                              
                              {/* + sign in right interval */}
                              <div className="absolute" style={{
                                left: '75%',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                fontSize: 'clamp(16px, 5vw, 18px)',
                                fontWeight: 'bold'
                              }}>
                                +
                              </div>
                            </td>
                          </tr>
                          
                          {/* Third row: f(x) - 2 columns with arrows */}
                          <tr>
                            <td className="border-2 border-black text-center font-normal bg-white" style={{
                              height: '85px',
                              verticalAlign: 'middle',
                              fontStyle: 'italic'
                            }}>
                              f(x)
                            </td>
                            
                            <td className="border-2 border-black bg-white relative" style={{
                              height: '80px'
                            }}>
                              {/* Left arrow from bottom-left to top-right */}
                              <div className="absolute" style={{
                                left: '10%',
                                top: '50%',
                                transform: 'translateY(-50%)'
                              }}>
                                <svg width="35%" height="60" viewBox="0 0 80 60" className="w-20 h-12">
                                  <defs>
                                    <marker id="arrow-left" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                                      <polygon points="0 0, 8 3, 0 6" fill="black"/>
                                    </marker>
                                  </defs>
                                  <path d="M5,50 L60,10" stroke="black" strokeWidth="2" markerEnd="url(#arrow-left)"/>
                                </svg>
                              </div>
                              
                              {/* Right arrow from bottom-left to top-right */}
                              <div className="absolute" style={{
                                left: '55%',
                                top: '50%',
                                transform: 'translateY(-50%)'
                              }}>
                                <svg width="35%" height="60" viewBox="0 0 80 60" className="w-20 h-12">
                                  <defs>
                                    <marker id="arrow-right" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                                      <polygon points="0 0, 8 3, 0 6" fill="black"/>
                                    </marker>
                                  </defs>
                                  <path d="M5,50 L60,10" stroke="black" strokeWidth="2" markerEnd="url(#arrow-right)"/>
                                </svg>
                              </div>
                              
                              {/* -1 at center bottom */}
                              <div className="absolute" style={{
                                left: '50%',
                                bottom: '8px',
                                transform: 'translateX(-50%)',
                                fontSize: 'clamp(12px, 2.5vw, 15px)',
                                fontWeight: 'bold'
                              }}>
                                -1
                              </div>
                              
                              {/* -∞ at left bottom */}
                              <div className="absolute" style={{
                                bottom: '8px',
                                left: '5%',
                                fontSize: 'clamp(12px, 2.5vw, 15px)'
                              }}>
                                +∞
                              </div>
                              
                              {/* +∞ at right top */}
                              <div className="absolute" style={{
                                top: '8px',
                                right: '5%',
                                fontSize: 'clamp(12px, 2.5vw, 15px)'
                              }}>
                                +∞
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "៣. រកស្រាយថាការបុគ្រាប់ A និង B",
        content: (
          <div className="space-y-3">
            <div>
              <div><strong>ក. កស្រាយថាការបុគ្រាប់ការក្រាប(C) ក្រុងចំណុច A ដើម្បីបនសអាស៊ីមតូត ដ្ឋី y = f'(x_n)(x - x_n) + f(x_n)</strong></div>
              <div className="ml-4">
                <div>ដើម្បី <InlineMath math="y = f'(x_n)(x - x_n) + f(x_n)" /> ហ្អី <InlineMath math="y = 2(x - 1) + f(1)" /></div>
                <div>ដោយ: ដេរីវេក្រាបក្រុងចំណុច B កក្រាក្រុងចំណុចអិន ដុក <InlineMath math="f'(x_n) = \frac{x_n^2 - x_n + 2}{x_n^2}" /> ហ្អី កាកស្រាបក្រាប្រាបសត្រ័ង <InlineMath math="f'(x_n) = 1" /></div>
                <div>សមមូល: <InlineMath math="\frac{x_n^2 - x_n + 2}{x_n^2} = 1" /></div>
                <div>សមមូល: <InlineMath math="x_n^2 - x_n + 2 = x_n^2" /></div>
                <div>សមមូល: <InlineMath math="-x_n + 2 = 0 \Rightarrow x_n = 2" /></div>
                <div>ដុង <InlineMath math="y_n = f(x_n) = f(2) = \frac{2^2 - 2}{2} - \ln 2 = 1 - 0.7 = 0.3" /></div>
                <div>ដូច្នេះ: <InlineMath math="B(2, 0.3)" />។</div>
              </div>
            </div>
          </div>
        ),
      }
    ],
    answer: (
      <div className="space-y-2">
        <div>សំណេ:</div>
        <div>អនុគមន៍ <InlineMath math="f(x) = x - \frac{2}{x} - \ln x" /> មានតម្លៃអន្រាក្តន៍កាកស្រាប <InlineMath math="(0, +\infty)" /></div>
        <div>ចំណុច B(2, 0.3) ជាចំណុចដែលការបុគ្រាប់នៃក្រាប (C) មានដេរីវេស្មើ 1</div>
        <div>ក្រាប (C) កាកស្រាបពី -∞ ទៅ +∞ គ្មានតម្លៃអស្រប្បារីមាសូលនោះ</div>
      </div>
    ),
  },
};

// ===== MAIN COMPONENT =====

export default function LogarithmicFunction() {
  return (
    <>
      {TOPIC_CONTENT.definition && (
        <DefinitionBox title={TOPIC_CONTENT.definition.title} content={TOPIC_CONTENT.definition.content} />
      )}

      {TOPIC_CONTENT.tip && <TipBox title={TOPIC_CONTENT.tip.title} content={TOPIC_CONTENT.tip.content} />}

      {LIMITS_CONTENT.example && (
        <ExampleBox
          question={LIMITS_CONTENT.example.question}
          steps={LIMITS_CONTENT.example.steps}
          answer={LIMITS_CONTENT.example.answer}
        />
      )}

      {DERIVATIVES_CONTENT.definition && (
        <TipBox title={DERIVATIVES_CONTENT.definition.title} content={DERIVATIVES_CONTENT.definition.content} />
      )}

      {EQUATIONS_INEQUALITIES.definition && (
        <DefinitionBox title={EQUATIONS_INEQUALITIES.definition.title} content={EQUATIONS_INEQUALITIES.definition.content} />
      )}

      {ADVANCED_EXAMPLE.example && (
        <ExampleBox
          question={ADVANCED_EXAMPLE.example.question}
          steps={ADVANCED_EXAMPLE.example.steps}
          answer={ADVANCED_EXAMPLE.example.answer}
        />
      )}

      <ExerciseBox questions={[
        {
          id: "q1",
          question: (
            <>
              រកតម្លៃអនុវត្តន៍: <InlineMath math="\ln e^4" />
            </>
          ),
          options: ["2", "3", "4", "1"],
          correctAnswer: 2,
        },
        {
          id: "q2", 
          question: (
            <>
              ដោះស្រាយសមីការ: <InlineMath math="\ln x = 2" />
            </>
          ),
          options: ["x = 2", "x = e²", "x = ln 2", "x = e"],
          correctAnswer: 1,
        },
        {
          id: "q3",
          question: (
            <>
              រកតម្លៃ: <InlineMath math="\ln 1" />
            </>
          ),
          options: ["x = 1", "x = 0", "x = e", "x = -1"],
          correctAnswer: 1,
        },
      ]} />

      <HintBox content={
        <>
          ចំណាំថា អនុគមន៍ឡូហ្ការីតធម្មជាតិ <InlineMath math="\ln x" /> មានដែនកំណត់ <InlineMath math="(0, +\infty)" /> និង 
          ដេរីវេរបស់វាគឺ <InlineMath math="(\ln x)' = \frac{1}{x}" />។
        </>
      } />

      <WarningBox content={
        <>
          មិនកូវបង្កការចាំបងអនុគមន៍ឡូហ្ការីតជាមួយនឺង <InlineMath math="\log_{10} x" /> ព្រោះអនុគមន៍ឡូហ្ការីតធម្មជាតិ <InlineMath math="\ln x" /> មានមូលដ្ឋាន <InlineMath math="e" />។
        </>
      } />

      <GraphExplanationBox
        expressions={[
          { id: "1", latex: "f(x) = \\ln x", color: "#FF4136" },
          { id: "2", latex: "g(x) = x - \\frac{2}{x} - \\ln x", color: "#0074D9" },
        ]}
        explanation={
          <>
            ក្រាបបង្ហាញអនុគមន៍ឡូហ្ការីតធម្មជាតិ <InlineMath math="\ln x" /> (ក្រហម) និងអនុគមន៍ស្មុគ្រស្មាញ <InlineMath math="f(x) = x - \frac{2}{x} - \ln x" /> (ខៀវ)។ 
            សម្គាល់ថាអនុគមន៍ <InlineMath math="\ln x" /> មានដែនកំណត់ <InlineMath math="(0, +\infty)" /> និងឆ្លងកាត់ចំណុច <InlineMath math="(1, 0)" />។
          </>
        }
        options={{
          showGrid: true,
          expressions: true,
          xAxisLabel: "x",
          yAxisLabel: "y",
        }}
      />
    </>
  );
}
