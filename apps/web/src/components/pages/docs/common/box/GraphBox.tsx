import { FunctionSquare } from "lucide-react";
import Graph, { Expression } from "../../../../helper/Graph";
import { CalculatorOptions } from "desmos";

export interface GraphBoxProps {
    expressions: Expression[];
    options?: Partial<CalculatorOptions>;
}

export default function GraphBox({ expressions, options }: GraphBoxProps) {
    return (
        <div className="border border-indigo-600 my-6 rounded-xl p-4 shadow-lg bg-indigo-50">
            <div className="flex items-center gap-2 mb-6">
                <FunctionSquare size={20} className="text-indigo-600" />
                <div className="text-lg font-bold">ក្រាប</div>
            </div>
            <Graph expressions={expressions} options={options} />
        </div>
    );
}