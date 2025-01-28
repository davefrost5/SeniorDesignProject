import { Progress } from "@/components/ui/progress";

interface MilestoneProgressProps {
  progress: number;
}

export function MilestoneProgress({ progress }: MilestoneProgressProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}