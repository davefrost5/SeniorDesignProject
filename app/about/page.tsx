import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import syncDave from "@/app/images/syncdave.png";
import { ExternalLink, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="space-y-4">
          <Badge className="bg-blue-600 hover:bg-blue-600/90">
            L3Harris Innovation Award
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">About SYNC Prosthetics</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            SYNC Designs (SYNC Prosthetics) is a Stevens Institute of Technology senior
            design team that built a brain-controlled orthotic hand exoskeleton -
            Signal-Yielding Neuro Cognitive Prosthetics. We shipped a full stack from EEG
            acquisition to real-time inference and motor actuation, demoed it at the
            Stevens Innovation Expo, and won the L3Harris Senior Design / Innovation Award.
          </p>
        </header>

        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-[200px_1fr] gap-0">
            <div className="relative h-48 md:h-auto bg-muted">
              <Image
                src={syncDave}
                alt="David Frost"
                fill
                className="object-cover object-top"
              />
            </div>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">David Frost</h2>
                <p className="text-muted-foreground">
                  Software Engineering, Stevens SE 2021-2025
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Co-founder and lead software / AI-ML on SYNC Prosthetics
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I led the machine learning pipeline (Common Spatial Patterns + logistic
                regression), real-time classification with confidence gating, GUI feedback,
                and integration with the exoskeleton control stack. At the Innovation Expo,
                roughly thirty people tried the glove with zero per-user calibration - the
                pipeline was the MVP, and an occupational therapist told us it could change
                how stroke rehab work is done. Motor imagery worked even when users thought
                the command in a non-English language.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The capstone is done and proven in public demos. I am continuing SYNC
                post-graduation and looking for advisors, partners, and collaborators who
                want to take this beyond the classroom - including teams like Y Combinator
                who back founders who already shipped hard tech.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="default">
                  <Link
                    href="https://www.linkedin.com/in/davefrost525"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link
                    href="https://david-frost.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Portfolio
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="mailto:dfrost3374@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    dfrost3374@gmail.com
                  </Link>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>The project</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3 text-sm leading-relaxed">
              <p>
                Orthotic exoskeleton glove driven by motor imagery EEG. Users think open
                or close; the system classifies intent and actuates the hand with live
                feedback visualization.
              </p>
              <p>
                Verified outcomes: 84% classification accuracy across 30+ expo users, zero
                calibration, full data acquisition to actuation pipeline on Raspberry Pi
                class hardware.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Team and advisors</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3 text-sm leading-relaxed">
              <p>
                Cooper Foote, Nicolas Accardo, Owen Deem, and David Frost. Faculty advisor
                Dr. Bernard Yett (Electrical and Computer Engineering).
              </p>
              <Button asChild variant="link" className="px-0 h-auto">
                <Link href="/about/team">Full team profiles</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
