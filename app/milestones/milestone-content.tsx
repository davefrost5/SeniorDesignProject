"use client";

import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MilestoneProgress } from "@/app/milestones/milestone-progress";

const milestonesData = {
  // ... existing milestonesData object ...
};

export default function MilestoneContent() {
  const params = useParams();
  const milestoneId = params.id as string;
  const milestone = milestonesData[milestoneId as keyof typeof milestonesData];

  if (!milestone) {
    return <div>Milestone not found</div>;
  }
  return (
    <div className="container mx-auto px-4 py-12">
      {/* ... existing JSX content ... */}
    </div>
  );
}