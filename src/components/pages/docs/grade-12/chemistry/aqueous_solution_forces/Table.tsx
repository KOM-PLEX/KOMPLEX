import React from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

const ChemisTables = () => {
  return (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border border-gray-300 rounded-xl overflow-hidden shadow-md text-xs sm:text-sm md:text-base">
        <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <tr>
            <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">ប្រភេទសារធាតុ</th>
            <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">និយមន័យប្រេី</th>
            <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">ភាពរូប</th>
            <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">ចំណុចរលាយ °C</th>
            <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">ចំណុចរំពុះ °C</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          <tr className="hover:bg-gray-50 transition">
            <td className="px-2 py-2 sm:px-4 sm:py-3 text-[10px] sm:text-sm"><InlineMath math="KCl" /></td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">អំបិលជំនួស</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">រឹង</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">770</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">1420</td>
          </tr>
          <tr className="hover:bg-gray-50 transition">
            <td className="px-2 py-2 sm:px-4 sm:py-3 text-[10px] sm:text-sm"><InlineMath math="NaCl" /></td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">អំបិលសម្ល</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">រឹង</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">801</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">1413</td>
          </tr>
          <tr className="hover:bg-gray-50 transition">
            <td className="px-2 py-2 sm:px-4 sm:py-3 text-[10px] sm:text-sm"><InlineMath math="CaF_{2}" /></td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">ភ្លុយអរកម្មក្នុងទឹក</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">រឹង</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">1423</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">2500</td>
          </tr>
          <tr className="hover:bg-gray-50 transition">
            <td className="px-2 py-2 sm:px-4 sm:py-3 text-[10px] sm:text-sm"><InlineMath math="CH_{4}" /></td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">ឧស្ម័នធម្មជាតិ</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">ឧស្ម័ន</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">-182</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">-164</td>
          </tr>
          <tr className="hover:bg-gray-50 transition">
            <td className="px-2 py-2 sm:px-4 sm:py-3 text-[10px] sm:text-sm"><InlineMath math="CH_{3}COOCH_{2}CH_{3}" /></td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">ទឹកលាងក្រចក</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">រាវ</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">-84</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">77</td>
          </tr>
          <tr className="hover:bg-gray-50 transition">
            <td className="px-2 py-2 sm:px-4 sm:py-3 text-[10px] sm:text-sm"><InlineMath math="H_{2}O" /></td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">ប្រេីច្រេីនមុខ</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">រាវ</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">0</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">100</td>
          </tr>
          <tr className="hover:bg-gray-50 transition">
            <td className="px-2 py-2 sm:px-4 sm:py-3 text-[10px] sm:text-sm"><InlineMath math="C_{17}H_{36}" /></td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">ក្រមួនទៀន</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">រឹង</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">22</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3">302</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChemisTables;
