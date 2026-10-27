"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  Brain,
  ChevronRight,
  Cpu,
  ExternalLink,
  Mail,
  Users,
  Zap,
} from "lucide-react";
import syncDave from "@/app/images/syncdave.png";
import syncCoop from "@/app/images/synccoop.png";
import syncNick from "@/app/images/syncnick.png";
import syncOwen from "@/app/images/syncowen.png";
import { milestones, PROJECT_TIMELINE } from "@/lib/milestones-data";

const demoVideos = [
  {
    id: "capstone",
    title: "Capstone delivery demo",
    description:
      "At ~2s a close thought triggers grasp; the GUI switches to open and the hand releases - zero-calibration ML driving the exoskeleton.",
    src: "/firstVid.mp4",
    linkedInPost: null as string | null,
    linkedInEmbed: null as string | null,
  },
  {
    id: "expo-1",
    title: "Stevens Innovation Expo - table demo",
    description:
      "Senior Innovation Expo booth: a line of users tried the glove with zero calibration (~30 attempts across the day).",
    src: "/sync_expo_1.mp4",
    linkedInPost:
      "https://www.linkedin.com/posts/davefrost525_along-with-cooper-foote-nicolas-accardo-activity-7328464454436728832-X_pG",
    linkedInEmbed:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7328464454436728832?compact=true",
  },
  {
    id: "expo-2",
    title: "Senior Design expo - additional footage",
    description: "Additional expo video from senior design demonstrations at Stevens.",
    src: "/sync_expo_2.mp4",
    linkedInPost:
      "https://www.linkedin.com/posts/davefrost525_here-is-an-additional-video-from-the-senior-activity-7328514354331451392-SuZI",
    linkedInEmbed:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7328514354331451392?compact=true",
  },
];

const team = [
  {
    name: "David Frost",
    role: "Software and AI/ML lead",
    image: syncDave,
  },
  {
    name: "Cooper Foote",
    role: "Hardware and manufacturing",
    image: syncCoop,
  },
  {
    name: "Nicolas Accardo",
    role: "Backend and NeuroPype pipeline",
    image: syncNick,
  },
  {
    name: "Owen Deem",
    role: "Prototype development",
    image: syncOwen,
  },
];

const proofStats = [
  {
    label: "L3Harris Senior Design / Innovation Award",
    detail: "Winner - Stevens senior design competition",
    icon: Award,
  },
  {
    label: "Stevens Innovation Expo",
    detail:
      "~30 users tried the glove with zero calibration; OT feedback that it could change stroke rehab workflows",
    icon: Users,
  },
  {
    label: "84% motor imagery accuracy",
    detail: "CSP + logistic regression across 30+ users, zero calibration",
    icon: Brain,
  },
  {
    label: "Full stack shipped",
    detail:
      "Data acquisition, real-time inference, confidence gating, motor actuation, live feedback viz",
    icon: Cpu,
  },
];

export default function Home(): React.ReactElement {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative border-b overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-background to-purple-600/10" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-sm px-4 py-1">
              Stevens Senior Design 2024-2025 - Capstone complete
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                SYNC Prosthetics
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Signal-Yielding Neuro Cognitive Prosthetics
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A brain-controlled orthotic hand exoskeleton built at Stevens Institute of
              Technology. We won the L3Harris Senior Design / Innovation Award, demoed at
              the Innovation Expo with zero-calibration motor imagery, and shipped the full
              EEG-to-actuation stack - now building what comes after graduation.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button asChild size="lg">
                <Link href="#demo">Watch the demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/milestones">See milestones</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-b bg-muted/40">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-center mb-8">Proof we shipped</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {proofStats.map((item) => (
              <Card key={item.label} className="bg-card/80">
                <CardContent className="pt-6 space-y-2">
                  <item.icon className="h-8 w-8 text-blue-600" />
                  <p className="font-semibold text-sm leading-snug">{item.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
            Motor imagery classification worked even when users imagined commands in a
            non-English language - a signal that the pipeline generalizes beyond lab
            conditions.
          </p>
        </div>
      </section>

      {/* Video / Demo */}
      <section id="demo" className="scroll-mt-20 border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold">Demo and videos</h2>
              <p className="text-muted-foreground">
                All footage self-hosted. Zero-calibration AI classifies open vs. close intent
                and drives the exoskeleton in real time.
              </p>
            </div>

            <div className="space-y-10">
              {demoVideos.map((video) => (
                <Card key={video.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-xl overflow-hidden border shadow-lg bg-black">
                      <video controls playsInline preload="metadata" className="w-full aspect-video">
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    {video.linkedInPost && (
                      <div className="flex flex-wrap gap-2">
                        <Button asChild variant="secondary" size="sm">
                          <Link
                            href={video.linkedInPost}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Watch on LinkedIn
                          </Link>
                        </Button>
                        {video.linkedInEmbed && (
                          <Button asChild variant="outline" size="sm">
                            <Link
                              href={video.linkedInEmbed}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              LinkedIn embed
                            </Link>
                          </Button>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="border-b bg-muted/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">How it works</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <Zap className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  OpenBCI UltraCortex streams EEG over LSL into our processing pipeline.
                </li>
                <li className="flex gap-2">
                  <Brain className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  Common Spatial Patterns features feed logistic regression for motor
                  imagery (open vs. close).
                </li>
                <li className="flex gap-2">
                  <Cpu className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  Confidence gating, live GUI feedback, and Raspberry Pi actuation close
                  the loop on the orthotic glove.
                </li>
              </ul>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden border">
              <Image
                src={syncDave}
                alt="SYNC Prosthetics demo"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones teaser */}
      <section className="border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold">Senior design arc</h2>
              <p className="text-muted-foreground mt-2">
                {PROJECT_TIMELINE.start} - {PROJECT_TIMELINE.end} - Expo{" "}
                {PROJECT_TIMELINE.expo}. All school milestones complete.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/milestones">
                Full timeline
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {milestones.map((m) => (
              <Link key={m.id} href={m.href} className="group">
                <Card className="h-full transition-shadow group-hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between gap-2">
                      <Badge
                        className={
                          m.status === "Awarded"
                            ? "bg-blue-600 hover:bg-blue-600/90"
                            : "bg-emerald-600 hover:bg-emerald-600/90 border-transparent"
                        }
                      >
                        {m.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{m.period}</span>
                    </div>
                    <CardTitle className="text-base leading-snug">
                      M{m.id}: {m.subtitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {m.highlights[0]}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b bg-muted/20">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">Team</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center space-y-3">
                <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-blue-600/20">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Faculty advisor: Dr. Bernard Yett, Stevens ECE.{" "}
            <Link href="/about/team" className="text-blue-600 hover:underline">
              Team page
            </Link>
          </p>
        </div>
      </section>

      {/* What's next CTA */}
      <section className="border-b">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-blue-600/5 to-purple-600/5 border-blue-600/20">
            <CardContent className="pt-10 pb-10 text-center space-y-6">
              <h2 className="text-3xl font-bold">What is next</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                The capstone proved the technology in front of judges, clinicians, and
                dozens of expo visitors. David Frost is continuing SYNC Prosthetics after
                graduation - seeking advisors, strategic partners, and collaborators (including
                YC-style backers) who want to help take a working BCI orthotic from senior
                design to the next product milestone. Not a slide deck - a demo that already
                won an innovation award.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild size="lg">
                  <Link href="/contact">
                    <Mail className="h-4 w-4 mr-2" />
                    Get in touch
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/about">About David and SYNC</Link>
                </Button>
              </div>
              <p className="text-sm">
                <Link
                  href="mailto:dfrost3374@gmail.com"
                  className="text-blue-600 hover:underline font-medium"
                >
                  dfrost3374@gmail.com
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
