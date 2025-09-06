export default function BlogSkeleton() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="pt-32 p-5 max-w-7xl mx-auto">
                {/* Featured Post Skeleton */}
                <div className="mb-8">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            {/* Featured Image Skeleton */}
                            <div className="relative h-64 lg:h-full bg-gray-200 animate-pulse"></div>

                            {/* Featured Content Skeleton */}
                            <div className="p-6 lg:p-8 flex flex-col justify-center">
                                <div className="space-y-4">
                                    {/* Title Skeleton */}
                                    <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="w-1/2 h-6 bg-gray-200 rounded animate-pulse"></div>

                                    {/* Author Info Skeleton */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
                                        <div className="space-y-2">
                                            <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                                            <div className="w-32 h-3 bg-gray-200 rounded animate-pulse"></div>
                                        </div>
                                    </div>

                                    {/* Stats Skeleton */}
                                    <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Posts Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                            {/* Image Skeleton */}
                            <div className="w-full h-48 bg-gray-200 animate-pulse"></div>

                            {/* Content Skeleton */}
                            <div className="p-4 space-y-3">
                                {/* Title Skeleton */}
                                <div className="w-full h-5 bg-gray-200 rounded animate-pulse"></div>
                                <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>

                                {/* Author and Date Skeleton */}
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
                                    <div className="space-y-1">
                                        <div className="w-20 h-3 bg-gray-200 rounded animate-pulse"></div>
                                        <div className="w-16 h-3 bg-gray-200 rounded animate-pulse"></div>
                                    </div>
                                </div>

                                {/* Stats Skeleton */}
                                <div className="flex gap-4">
                                    <div className="w-16 h-3 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="w-16 h-3 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}