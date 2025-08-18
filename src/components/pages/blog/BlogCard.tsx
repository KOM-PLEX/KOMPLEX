'use client';

import { BlogPost } from "@/app/blog/page";
import { Eye } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`} key={post.id} className="relative h-72 rounded-2xl overflow-hidden shadow-lg shadow-indigo-500/10 border border-indigo-500/10 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-indigo-500/15 hover:-translate-y-1">
      {/* Background Image */}
      <img
        src={post.media[0]?.url }
        alt={post.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = '/image-error.png';
        }}
      />

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

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
        <div className="flex items-center gap-4 text-sm text-white">
          <span className='flex items-center gap-2'><Eye className="w-4 h-4" /> {post.viewCount} ទស្សនា</span>
        </div>
      </div>
    </Link>
  );
} 
