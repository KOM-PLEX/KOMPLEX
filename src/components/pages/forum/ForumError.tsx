import { MessageSquare, RefreshCw } from 'lucide-react';

interface ForumErrorProps {
    message: string;
    onRetry?: () => void;
}



export default function ForumError({ message, onRetry }: ForumErrorProps) {
    return (
        <div className="text-center py-12">
            <MessageSquare className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">មានបញ្ហាក្នុងការទាញយកទិន្នន័យ</h3>
            <p className="text-gray-500 mb-4">{message}</p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    <RefreshCw className="w-4 h-4" />
                    ព្យាយាមម្តងទៀត
                </button>
            )}
        </div>
    );
}
