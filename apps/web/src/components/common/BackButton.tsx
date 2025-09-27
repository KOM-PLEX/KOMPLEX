import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

export const BackButton = ({ href }: { href: string }) => {
    // const [show, setShow] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         // Show when scrolled down at least 40px, hide when near top
    //         if (window.scrollY) {
    //             setShow(true);
    //         } 
    //     };

    //     window.addEventListener("scroll", handleScroll, { passive: true });
    //     // Check on mount in case already scrolled
    //     handleScroll();

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    // if (!show) return null;

    return (
        <div className=" sticky mb-3  top-18 z-[9999]">
            <Link href={href} className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
                <div className='p-1 bg-white rounded-full shadow-lg'><ChevronLeft className="w-6 h-6" /></div>
            </Link>
        </div>
    );
};