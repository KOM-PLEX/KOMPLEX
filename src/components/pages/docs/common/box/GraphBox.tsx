import { FunctionSquare } from "lucide-react";
import Graph, { DesmosGraphProps } from "./Graph";

export default function GraphBox({ expressions }: DesmosGraphProps) {
    return (
        <div className="border-2 border-gray-200 my-6 rounded-lg p-4 shadow-lg bg-indigo-50">
            <div className="flex items-center gap-2">
                <FunctionSquare size={20} className="text-indigo-600" />
                <div className="text-lg font-bold">ក្រាប</div>
            </div>
            <Graph expressions={expressions} />
        </div>
    );
}