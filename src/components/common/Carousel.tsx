'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
    images: string[];
}

export default function Carousel({
    images,
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setCurrentIndex(0);
    }, [images.length]);

    const goToNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex((prev) => (prev + 1));
        } else {
            setCurrentIndex(0);
        }
    };

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => (prev - 1));
        } else {
            setCurrentIndex(images.length - 1);
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                goToPrevious();
            } else if (e.key === 'ArrowRight') {
                goToNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goToNext, goToPrevious]);

    if (!images || images.length === 0) {
        return (
            <div className={`w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center `}>
                <p className="text-gray-500">No images available</p>
            </div>
        );
    }

    return (
        <div className={`relative w-full overflow-hidden rounded-lg`}>
            {/* Carousel Container */}
            <div className="relative w-full h-full">
                {/* Images Container */}
                <div
                    className="flex transition-transform duration-300 ease-out"
                    style={{
                        width: `${images.length * 100}%`
                    }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="w-full h-full flex-shrink-0"
                            style={{ width: `${100 / images.length}%`, transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                </>
            )}

            {/* Top Indicator */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm z-10">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}
