"use client";

import { useProjects } from "@/utils/project-context";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState, useEffect, useCallback } from "react";

interface DialogProps {
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
}

const ImageSlideshow = ({ images, title }: { images: string[]; title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when images change
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  const goToPrevious = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    },
    [images.length]
  );

  const goToNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    },
    [images.length]
  );

  // Auto-advance every 4 seconds
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative group">
      {/* Current Image */}
      <div className="relative w-full aspect-video md:aspect-[12/6] overflow-hidden">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            width={800}
            height={450}
            alt={`${title} - Screenshot ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-white/20"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 h-2 bg-white"
                    : "w-2 h-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/20">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};

export const Dialog = ({ showDialog, setShowDialog }: DialogProps) => {
  const { singleProject } = useProjects();

  return (
    <>
      {showDialog && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 grid place-items-center"
          onClick={(e) => e.target === e.currentTarget && setShowDialog(false)}
        >
          <div className="bg-black/80 w-11/12 md:w-1/2 h-4/5 md:h-[90%] overflow-y-auto overflow-x-hidden rounded-xl">
            {singleProject && (
              <div className="relative ">
                <button
                  className="absolute top-4 right-4 bg-black size-8 rounded-full border border-white/40 grid place-items-center text-white z-10"
                  onClick={() => setShowDialog(false)}
                >
                  X
                </button>

                {/* Slideshow or Single Image */}
                {singleProject.gallery && singleProject.gallery.length > 0 ? (
                  <ImageSlideshow
                    images={singleProject.gallery}
                    title={singleProject.title}
                  />
                ) : (
                  <Image
                    src={singleProject.image.url}
                    width={300}
                    height={300}
                    alt={singleProject.title}
                    className="w-full h-full aspect-video md:aspect-[12/6] object-cover object-center"
                  />
                )}

                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <h5 className="text-4xl font-bold">
                      {singleProject.title}
                    </h5>
                    <div className="flex items-center gap-4">
                      <Link href={singleProject.githuburl}>
                        <Github />
                      </Link>
                      <Link href={singleProject.liveurl}>
                        <ExternalLink />
                      </Link>
                    </div>
                  </div>
                  <div className="py-3 flex items-center gap-4 flex-wrap">
                    {singleProject.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 border border-white/40 rounded-2xl text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-white/50 text-justify">
                    {singleProject.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
