"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  className?: string;
}

export function ImageGallery({ images, className }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {images.map((image, index) => (
        <Dialog key={image.src}>
          <DialogTrigger asChild>
            <Card className="overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
              <div className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                  priority={index < 6}
                />
              </div>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <div className="relative aspect-[16/9]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}