import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { MilestoneStatus } from "@/lib/milestones-data";

interface MilestonePageHeaderProps {
  title: string;
  period: string;
  status: MilestoneStatus;
}

export function MilestonePageHeader({
  title,
  period,
  status,
}: MilestonePageHeaderProps) {
  return (
    <div className="mb-8 space-y-4">
      <Button variant="ghost" size="sm" asChild className="-ml-2">
        <Link href="/milestones">
          <ArrowLeft className="h-4 w-4 mr-2" />
          All milestones
        </Link>
      </Button>
      <div className="flex flex-wrap items-center gap-3">
        <Badge
          variant={status === "Awarded" ? "default" : "secondary"}
          className={
            status === "Awarded"
              ? "bg-blue-600 hover:bg-blue-600/90"
              : "bg-emerald-600 text-white hover:bg-emerald-600/90 border-transparent"
          }
        >
          {status}
        </Badge>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      <p className="text-muted-foreground max-w-3xl">
        Stevens Institute of Technology senior design (Sep 2024 - May/June 2025).
        School milestones are complete; SYNC Prosthetics continues beyond the capstone.
      </p>
    </div>
  );
}
