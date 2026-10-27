"use client";

import { cn } from "@/lib/utils";

export type VideoOrientation = "landscape" | "portrait";

interface BrandVideoFrameProps {
  src: string;
  orientation?: VideoOrientation;
  className?: string;
}

export function BrandVideoFrame({
  src,
  orientation = "landscape",
  className,
}: BrandVideoFrameProps) {
  const isPortrait = orientation === "portrait";

  return (
    <div
      className={cn(
        "sync-video-stage mx-auto w-full",
        isPortrait ? "max-w-[min(100%,320px)]" : "max-w-4xl",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.15rem] bg-gradient-to-br from-indigo-950/90 via-slate-900 to-violet-950/90",
          isPortrait ? "aspect-[9/16]" : "aspect-video"
        )}
      >
        <video
          controls
          playsInline
          preload="metadata"
          className={cn(
            "absolute inset-0 h-full w-full",
            isPortrait ? "object-contain" : "object-contain sm:object-cover"
          )}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
