// Skeleton Loading Component
export function BlogPostSkeleton() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto p-5 pt-20">
                {/* Back Button Skeleton */}
                <div className="mb-6">
                    <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
                </div>

                {/* Blog Post Skeleton */}
                <article className="bg-white rounded-2xl shadow-lg shadow-indigo-500/10 border border-indigo-500/10 overflow-hidden">
                    <div className="p-6 md:p-8">
                        {/* Title Skeleton */}
                        <div className="mb-2">
                            <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse"></div>
                        </div>

                        {/* User Info Skeleton */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
                            <div className="flex items-center gap-2">
                                <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                                <div className="w-2 h-4 bg-gray-200 rounded animate-pulse"></div>
                                <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                        </div>

                        {/* Image/Carousel Skeleton */}
                        <div className="w-full h-64 bg-gray-200 rounded-lg animate-pulse mb-6"></div>

                        {/* Content Skeleton */}
                        <div className="space-y-3">
                            <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-4/5 h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}