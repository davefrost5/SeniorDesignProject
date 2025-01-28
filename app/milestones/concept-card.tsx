"use client";

import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ConceptCardProps {
  title: string;
  description: string;
  imageSrc: StaticImageData | string;
}

export function ConceptCard({ title, description, imageSrc }: ConceptCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-64 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}