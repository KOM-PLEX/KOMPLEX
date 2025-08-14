'use client';

import { BlogPost } from "@/app/blog/page";
import Link from "next/link";



interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  // if (post.featured) {
  //   return (

  //     <Link href={`/blog/${post.id}`} key={post.id} className="col-span-full relative h-72 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg shadow-indigo-500/10 border border-indigo-500/10 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/15">
  //       {/* Background Image */}
  //       <div
  //         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  //         style={{ backgroundImage: `url(${post.image})` }}
  //       />

  //       {/* Gradient Overlay for better text readability */}
  //       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

  //       {/* Content */}
  //       <div className="relative z-10 h-full flex flex-col justify-end p-5  text-white">
  //         <div className="flex items-center gap-4 mb-3  text-xs opacity-90">
  //           <div className="flex items-center gap-1.5">
  //             <div className="w-4.5 h-4.5   rounded-full bg-indigo-600 backdrop-blur-sm flex items-center justify-center text-white font-semibold text-xs border border-white/30">
  //               {post.author.avatar}
  //             </div>
  //             {post.author.name}
  //           </div>
  //           |
  //           <span>{post.date}</span>
  //         </div>

  //         <div className="text-lg font-bold mb-2 leading-relaxed drop-shadow-sm">
  //           {post.title}
  //         </div>

  //         {post.excerpt && (
  //           <div className="text-white/90 text-xs leading-relaxed mb-4 drop-shadow-sm">
  //             {post.excerpt}
  //           </div>
  //         )}
  //       </div>
  //     </Link>
  //   );
  // }

  return (
    <Link href={`/blog/${post.id}`} key={post.id} className="relative h-72 rounded-2xl overflow-hidden shadow-lg shadow-indigo-500/10 border border-indigo-500/10 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-indigo-500/15 hover:-translate-y-1">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${post.media[0].url})` }}
      />

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
        <div className="flex items-center gap-4 mb-3 text-xs opacity-90">
          <div className="flex items-center gap-1.5">
            <div className="w-4.5 h-4.5 rounded-full bg-indigo-600 backdrop-blur-sm flex items-center justify-center text-white font-semibold text-xs border border-white/30">
              {post.username.charAt(0)}
            </div>
            {post.username}
          </div>
          |
          <span>{new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>

        <div className="text-lg font-bold mb-2 leading-relaxed drop-shadow-sm">
          {post.title}
        </div>
      </div>
    </Link>
  );
} 
