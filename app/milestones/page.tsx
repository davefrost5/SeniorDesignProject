import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { milestones, PROJECT_TIMELINE } from "@/lib/milestones-data";
import { Award, CheckCircle2, ChevronRight } from "lucide-react";

export default function MilestonesOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="space-y-4 text-center">
          <Badge className="border-0 bg-gradient-to-r from-blue-600 to-violet-600 hover:opacity-90">
            Stevens build complete - L3Harris awarded
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">Project milestones</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SYNC Prosthetics senior design at Stevens ({PROJECT_TIMELINE.start} -{" "}
            {PROJECT_TIMELINE.end}). Innovation Expo {PROJECT_TIMELINE.expo}. Winner:{" "}
            {PROJECT_TIMELINE.award}.
          </p>
        </header>

        <Card className="border-blue-600/30 bg-blue-600/5">
          <CardContent className="pt-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div className="flex items-center gap-3">
              <Award className="h-10 w-10 text-blue-600" />
              <div>
                <p className="font-semibold">L3Harris Senior Design / Innovation Award</p>
                <p className="text-sm text-muted-foreground">
                  Awarded at project completion - see Milestone 4 for delivery and demo
                  details.
                </p>
              </div>
            </div>
            <Button asChild variant="secondary">
              <Link href="/#demo">Watch demo video</Link>
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {milestones.map((m) => (
            <Card key={m.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex flex-wrap items-center gap-3 justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge
                        variant="outline"
                        className="font-mono text-xs"
                      >
                        Milestone {m.id}
                      </Badge>
                      <Badge
                        className={
                          m.status === "Awarded"
                            ? "bg-blue-600 hover:bg-blue-600/90"
                            : "bg-emerald-600 hover:bg-emerald-600/90 border-transparent"
                        }
                      >
                        {m.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{m.period}</span>
                    </div>
                    <CardTitle className="text-xl">{m.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{m.subtitle}</p>
                  </div>
                  <Button asChild>
                    <Link href={m.href}>
                      View details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {m.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Progress</span>
                    <span>{m.progress}%</span>
                  </div>
                  <Progress value={m.progress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm">
          Post-graduation work continues outside these academic milestones.{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contact us
          </Link>{" "}
          to collaborate.
        </p>
      </div>
    </div>
  );
}
