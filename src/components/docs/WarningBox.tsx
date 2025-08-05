import { AlertTriangle } from 'lucide-react';

interface WarningBoxProps {
    title?: string;
    icon?: React.ComponentType<{ size?: number; className?: string }>;
    content: string;
}

export default function WarningBox({
    title,
    content,
    icon: Icon = AlertTriangle
}: WarningBoxProps) {
    return (
        <div className="bg-red-50/80 border rounded-2xl border-red-600 p-6 my-6 shadow-lg shadow-red-500/10 backdrop-blur-sm">
            {title && (
                <div className="flex items-center gap-3 mb-3">
                    <Icon size={20} className="text-red-600" />
                    <h4 className="text-red-600 font-semibold text-lg">
                        {title}
                    </h4>
                </div>
            )}
            <div className="text-gray-700 leading-relaxed text-base">
                {content}
            </div>
        </div>
    );
}
