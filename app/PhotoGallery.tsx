"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

export const GALLERY_ITEMS = [
  { src: "/PHOTO-2024-12-07-02-44-51.jpg", caption: "A promise sealed with intention" },
  { src: "/PHOTO-2025-09-12-09-59-59.jpg", caption: "Our journey of love" },
  { src: "/W3B%20Sports%20195.jpg", caption: "Together in every moment" },
  { src: "/W3B%20Sports%2069.jpg", caption: "Celebrating us" },
  { src: "/WhatsApp%20Image%202026-01-27%20at%208.54.10%20PM.jpeg", caption: "Cherished memories" },
];

function GalleryImage({
  src,
  caption,
}: {
  src: string;
  caption: string;
  fallbackId: number;
}) {
  const [error, setError] = useState(false);

  const handleError = useCallback(() => setError(true), []);

  return (
    <div className="relative shrink-0 w-[280px] sm:w-[320px] h-[360px] sm:h-[420px] overflow-hidden rounded-lg border-2 border-foreground/10 group">
      {error ? (
        <div
          className="absolute inset-0 bg-pink-light/30 flex items-center justify-center p-4"
          aria-hidden
        >
          <p className="text-foreground/60 text-sm text-center font-serif">
            Add your photo to <code className="text-xs bg-white/50 px-1 rounded">public/gallery</code>
          </p>
        </div>
      ) : (
        <Image
          src={src}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 280px, 320px"
          onError={handleError}
        />
      )}
      <div
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pt-16 pb-4 px-4 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden
      >
        <p className="text-white text-sm sm:text-base font-serif text-center">
          {caption}
        </p>
      </div>
    </div>
  );
}

const CARD_WIDTH_PX = 312; // card width + gap (approx)

export default function PhotoGallery() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const items = GALLERY_ITEMS;

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 4000);
    return () => clearInterval(t);
  }, [items.length, isPaused]);

  const offset = index * CARD_WIDTH_PX;

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex gap-4 transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {items.map((item, i) => (
          <div key={i} className="shrink-0 flex justify-center">
            <GalleryImage src={item.src} caption={item.caption} fallbackId={i + 1} />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === index ? "bg-pink" : "bg-pink-light"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
