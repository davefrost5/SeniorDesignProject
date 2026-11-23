"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BrandVideoFrame,
  type VideoOrientation,
} from "@/components/home/brand-video-frame";
import {
  Award,
  ArrowDown,
  Brain,
  ChevronRight,
  Cpu,
  ExternalLink,
  Mail,
  Radio,
  Users,
  Zap,
} from "lucide-react";
import syncDave from "@/app/images/syncdave.png";
import syncCoop from "@/app/images/synccoop.png";
import syncNick from "@/app/images/syncnick.png";
import syncOwen from "@/app/images/syncowen.png";
import { milestones, PROJECT_TIMELINE } from "@/lib/milestones-data";

const demoVideos: {
  id: string;
  title: string;
  description: string;
  src: string;
  orientation: VideoOrientation;
  linkedInPost: string | null;
  linkedInEmbed: string | null;
}[] = [
  {
    id: "delivery",
    title: "Live control demo",
    description:
      "At ~2s a close thought triggers grasp; the GUI switches to open and the hand releases - zero-calibration ML driving the exoskeleton.",
    src: "/firstVid.mp4",
    orientation: "landscape",
    linkedInPost: null,
    linkedInEmbed: null,
  },
  {
    id: "expo-1",
    title: "Stevens Innovation Expo - table demo",
    description:
      "Expo booth: a line of users tried the glove with zero calibration (~30 attempts across the day).",
    src: "/sync_expo_1.mp4",
    orientation: "portrait",
    linkedInPost:
      "https://www.linkedin.com/posts/davefrost525_along-with-cooper-foote-nicolas-accardo-activity-7328464454436728832-X_pG",
    linkedInEmbed:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7328464454436728832?compact=true",
  },
  {
    id: "expo-2",
    title: "Innovation Expo - additional footage",
    description: "More demonstration footage from the Stevens expo floor.",
    src: "/sync_expo_2.mp4",
    orientation: "portrait",
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

const pipelineSteps = [
  {
    icon: Radio,
    title: "Acquire",
    body: "OpenBCI UltraCortex streams EEG over LSL into our pipeline.",
  },
  {
    icon: Brain,
    title: "Classify",
    body: "CSP features and logistic regression on motor imagery (open vs. close).",
  },
  {
    icon: Cpu,
    title: "Actuate",
    body: "Confidence gating, live GUI feedback, and Raspberry Pi motor control on the glove.",
  },
];

function VideoDemoCard({
  video,
}: {
  video: (typeof demoVideos)[number];
}) {
  return (
    <article className="sync-panel overflow-hidden">
      <div className="border-b border-indigo-400/10 bg-gradient-to-r from-indigo-500/10 to-violet-600/10 px-6 py-5">
        <h3 className="text-lg font-semibold">{video.title}</h3>
        <p className="mt-1 text-sm sync-subheading">{video.description}</p>
      </div>
      <div className="px-4 py-6 sm:px-6">
        <BrandVideoFrame src={video.src} orientation={video.orientation} />
        {video.linkedInPost && (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Button asChild variant="outline" size="sm" className="sync-outline-btn">
              <Link href={video.linkedInPost} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Watch on LinkedIn
              </Link>
            </Button>
            {video.linkedInEmbed && (
              <Button asChild variant="ghost" size="sm" className="text-violet-300">
                <Link href={video.linkedInEmbed} target="_blank" rel="noopener noreferrer">
                  LinkedIn embed
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Home(): React.ReactElement {
  const [featured, ...expoClips] = demoVideos;

  return (
    <div className="sync-landing flex flex-col">
      {/* Hero */}
      <section className="sync-section relative overflow-hidden pt-4 md:pt-8">
        <div className="sync-section-glow" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                SYNC Prosthetics
              </span>
            </h1>
            <p className="text-lg font-medium text-violet-200/80 md:text-xl">
              Signal-Yielding Neuro Cognitive Prosthetics
            </p>
            <p className="mx-auto max-w-3xl text-base leading-relaxed sync-subheading md:text-lg">
              A brain-controlled orthotic hand exoskeleton built at Stevens Institute of
              Technology. We won the L3Harris Senior Design / Innovation Award, demoed at
              the Innovation Expo with zero-calibration motor imagery, and shipped the full
              EEG-to-actuation stack - now building what comes after graduation.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button asChild size="lg" variant="brand">
                <Link href="#demo">Watch the demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="sync-outline-btn">
                <Link href="/milestones">See milestones</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="sync-section relative">
        <div className="container mx-auto px-4">
          <h2 className="sync-heading mb-3 text-center">Proof we shipped</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm sync-subheading">
            Verified outcomes from Stevens demos and competition - not slide-deck claims.
          </p>
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {proofStats.map((item) => (
              <Card
                key={item.label}
                className="sync-panel border-indigo-400/10 transition-colors hover:border-violet-400/25"
              >
                <CardContent className="space-y-3 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 ring-1 ring-violet-400/20">
                    <item.icon className="h-5 w-5 text-violet-300" />
                  </div>
                  <p className="text-sm font-semibold leading-snug">{item.label}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm sync-subheading">
            Motor imagery classification worked even when users imagined commands in a
            non-English language - a signal that the pipeline generalizes beyond lab
            conditions.
          </p>
        </div>
      </section>

      {/* Video / Demo */}
      <section id="demo" className="sync-section scroll-mt-20 relative">
        <div className="sync-section-glow opacity-40" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-2 text-center">
              <h2 className="sync-heading">Demo and videos</h2>
              <p className="sync-subheading">
                All footage self-hosted. Zero-calibration AI classifies open vs. close intent
                and drives the exoskeleton in real time.
              </p>
            </div>

            <VideoDemoCard video={featured} />

            <div className="grid gap-8 md:grid-cols-2">
              {expoClips.map((video) => (
                <VideoDemoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works - no personal photos */}
      <section className="sync-section relative">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-10">
            <div className="text-center md:text-left">
              <h2 className="sync-heading">How it works</h2>
              <p className="mt-2 max-w-2xl sync-subheading">
                End-to-end path from brain signal to orthotic motion - the stack we demoed
                at the Innovation Expo.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {pipelineSteps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="sync-panel flex h-full flex-col gap-3 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/30 to-violet-600/30 ring-1 ring-violet-400/25">
                      <step.icon className="h-5 w-5 text-violet-200" />
                    </div>
                    <p className="font-semibold text-violet-100">{step.title}</p>
                    <p className="text-sm sync-subheading">{step.body}</p>
                  </div>
                  {index < pipelineSteps.length - 1 && (
                    <ArrowDown className="mx-auto my-2 hidden h-5 w-5 text-violet-500/50 md:absolute md:-right-3 md:top-1/2 md:my-0 md:block md:-translate-y-1/2 md:rotate-[-90deg]" />
                  )}
                </div>
              ))}
            </div>
            <ul className="space-y-3 sync-subheading">
              <li className="flex gap-3 rounded-xl border border-indigo-400/15 bg-secondary/40 p-4">
                <Zap className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                Real-time LSL streaming keeps inference aligned with live EEG.
              </li>
              <li className="flex gap-3 rounded-xl border border-indigo-400/15 bg-secondary/40 p-4">
                <Brain className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" />
                Zero per-user calibration at expo - the trained pipeline generalized across
                visitors.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Milestones teaser */}
      <section className="sync-section relative">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="sync-heading">From concept to award</h2>
              <p className="mt-2 sync-subheading">
                {PROJECT_TIMELINE.start} - {PROJECT_TIMELINE.end} - Innovation Expo{" "}
                {PROJECT_TIMELINE.expo}. Full build history on the milestones page.
              </p>
            </div>
            <Button asChild variant="outline" className="sync-outline-btn shrink-0">
              <Link href="/milestones">
                Full timeline
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m) => (
              <Link key={m.id} href={m.href} className="group">
                <Card className="sync-panel h-full transition-all group-hover:border-violet-400/30 group-hover:shadow-violet-900/20">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between gap-2">
                      <Badge
                        className={
                          m.status === "Awarded"
                            ? "border-0 bg-gradient-to-r from-blue-600 to-violet-600 hover:opacity-90"
                            : "border-0 bg-emerald-700/90 hover:bg-emerald-700"
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
                    <p className="line-clamp-3 text-sm text-muted-foreground">
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
      <section className="sync-section relative">
        <div className="container mx-auto px-4">
          <h2 className="sync-heading mb-10 text-center">Team</h2>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="sync-panel flex flex-col items-center px-4 py-6 text-center"
              >
                <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full ring-2 ring-violet-500/35 ring-offset-2 ring-offset-background sm:h-28 sm:w-28">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <p className="font-semibold">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm sync-subheading">
            Faculty advisor: Dr. Bernard Yett, Stevens ECE.{" "}
            <Link href="/about/team" className="font-medium text-violet-300 hover:underline">
              Team page
            </Link>
          </p>
        </div>
      </section>

      {/* What's next CTA */}
      <section className="sync-section pb-20 relative">
        <div className="container mx-auto px-4">
          <Card className="sync-panel mx-auto max-w-3xl overflow-hidden border-violet-500/20">
            <div className="h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500" />
            <CardContent className="space-y-6 px-6 py-10 text-center sm:px-10">
              <h2 className="sync-heading text-2xl md:text-3xl">What is next</h2>
              <p className="mx-auto max-w-2xl leading-relaxed sync-subheading">
                Public demos at the Innovation Expo and the L3Harris award proved the
                technology in front of clinicians and dozens of visitors. David Frost is
                continuing SYNC Prosthetics after graduation - seeking advisors, strategic
                partners, and collaborators who want to help take a working BCI orthotic to
                the next product milestone. Not a slide deck - hardware and ML that already
                won an innovation award.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" variant="brand">
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in touch
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="sync-outline-btn">
                  <Link href="/about">About David and SYNC</Link>
                </Button>
              </div>
              <p className="text-sm">
                <Link
                  href="mailto:dfrost3374@gmail.com"
                  className="font-medium text-violet-300 hover:underline"
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
