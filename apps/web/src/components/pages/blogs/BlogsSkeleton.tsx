export default function BlogsSkeleton() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className=" max-w-7xl mx-auto">
                {/* Featured Post Skeleton */}
                <div className="mb-8">
                    <div className="relative aspect-[16/8] w-full rounded-3xl overflow-hidden border border-indigo-500/10 animate-pulse">
                        {/* Background Image Skeleton */}
                        <div className="absolute inset-0 w-full h-full bg-gray-200"></div>

                        {/* Gradient Overlay Skeleton */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />

                        {/* Content Overlay Skeleton */}
                        <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8">
                            {/* User Info Skeleton */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-6 h-6 rounded-full bg-gray-300 border border-white/30"></div>
                                    <div className="w-20 h-3 bg-gray-300 rounded"></div>
                                </div>
                                <div className="w-1 h-3 bg-gray-300 rounded"></div>
                                <div className="w-28 h-3 bg-gray-300 rounded"></div>
                            </div>

                            {/* Title Skeleton */}
                            <div className="w-3/4 h-8 bg-gray-300 rounded mb-2"></div>
                            <div className="w-1/2 h-6 bg-gray-300 rounded mb-4"></div>

                            {/* View Count Skeleton */}
                            <div className="w-24 h-4 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                </div>

                {/* Blog Posts Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-indigo-500/10 animate-pulse">
                            {/* Background Image Skeleton */}
                            <div className="absolute inset-0 w-full h-full bg-gray-200"></div>

                            {/* Gradient Overlay Skeleton */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/15  to-transparent" />

                            {/* Content Overlay Skeleton */}
                            <div className="relative z-10 h-full flex flex-col justify-end p-5">
                                {/* User Info Skeleton */}
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-6 h-6 rounded-full bg-gray-300 border border-white/30"></div>
                                        <div className="w-16 h-3 bg-gray-300 rounded"></div>
                                    </div>
                                    <div className="w-1 h-3 bg-gray-300 rounded"></div>
                                    <div className="w-24 h-3 bg-gray-300 rounded"></div>
                                </div>

                                {/* Title Skeleton */}
                                <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>

                                {/* View Count Skeleton */}
                                <div className="w-20 h-4 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}