"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface SpecsListProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

export function SpecsList({ title, items, icon }: SpecsListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-primary shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}