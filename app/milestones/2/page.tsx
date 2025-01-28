"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ConceptCard } from "@/app/milestones/concept-card";
import { SpecsList } from "@/app/milestones/specs-list";
import { ClipboardList, Lightbulb, Cpu, FlaskConical, Wrench, TestTube } from "lucide-react";
import m1ProjPlan from "@/app/images/projplan.png";
import m2Design from "@/app/images/m2-4design.png";
import m2Gloves from "@/app/images/m2-2gloves.png";
import m2Pull from "@/app/images/m2-2pull.png";
import m2Push from "@/app/images/m2-2push.png";
export default function Milestone2Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Milestone 2: Design & Development</h1>
        
        <Tabs defaultValue="plan" className="space-y-8">
          <TabsList className="grid grid-cols-6 w-full">
            <TabsTrigger value="plan">Project Plan</TabsTrigger>
            <TabsTrigger value="concepts">Concepts</TabsTrigger>
            <TabsTrigger value="selection">Selection</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="testing">Testing</TabsTrigger>
          </TabsList>

          <TabsContent value="plan">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClipboardList className="h-5 w-5" />
                  Project Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-[400px] w-full">
                  <Image
                    src={m1ProjPlan}
                    alt="Project Plan"
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="concepts">
            <div className="grid md:grid-cols-3 gap-6">
              <ConceptCard
                title="Pressure"
                description="Air pressure is used to push the fingers into a fist."
                imageSrc={m2Gloves}
              />
              <ConceptCard
                title="Pull"
                description="Wires are lined on the inside of the hand creating a pulling motion on the fingures."
                imageSrc={m2Pull}
              />
              <ConceptCard
                title="Push"
                description="Wires are lined on the outside of the hand creating a pushing motion on the fingures."
                imageSrc={m2Push}
              />
            </div>
          </TabsContent>

          <TabsContent value="selection">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Concept Selection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  We considered three different approaches for the mechanical design of our project. The first concept involved using air pressure to close the hand. However, we determined that this approach would introduce unnecessary complexity to the design. As a result, we opted for a wire-based system instead.
                </p>
                <p className="text-muted-foreground">
                  Next, we evaluated whether to route the wires over the top of the hand or along the palm. During testing, the overhand configuration proved unfeasible, as it required excessive force to push the fingers into a closed position. Ultimately, we determined that running the wires along the palm was the most effective solution for achieving hand closure.
                </p>
                <p className="text-muted-foreground">
                  In our final design, a motor mounted on the forearm rotates to pull the wires, which causes the hand to form a closed fist (excluding the thumb).
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="design">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5" />
                  Final Design
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative h-[400px] w-full">
                  <Image
                    src={m2Design}
                    alt="Final Design"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-muted-foreground">
                  This image represents our initial design. The motor is secured to the forearm using Velcro straps, while wires extend from the motor through guiding slits and connect to clips on the fingers. These clips provide a robust connection to each finger, enabling the wires to effectively close the hand into a fist.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5" />
                  Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Hardware Specifications</h3>
                    <SpecsList
                      title="Hardware Specifications"
                      icon={<Cpu className="h-5 w-5" />}
                      items={[
                        "OpenBCI UltraCortex 'MARK IV' EEG Headset",
                        "8 EEG Channels",
                        "Smallest Version",
                        "Good for low-cost users",
                        "Analyzes all signals necessary"
                      ]}
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Software Specifications</h3>
                    <SpecsList
                      title="Software Specifications"
                      icon={<FlaskConical className="h-5 w-5" />}
                      items={[
                        "OpenBCI GUI - Software used to read EEG headset data",
                        "NeuroPype Pipeline - Collection of Python scripts to target the brain signals necessary",
                        "PyEGG - Python Library for EEG feature extraction",
                        "MNE Python - Python Library for EEG data processing",
                        "Additional machine learning applications available"
                      ]}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testing">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TestTube className="h-5 w-5" />
                  Testing Procedures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Headset Calibration</h3>
                    <p className="text-muted-foreground">
                      First, the team shall train the headset to calibrate what is necessary for the end goal. The team shall run through around 100 random left versus right actions, initially with just their arms. The Headset needs to be calibrated in order to ensure the correct data is targeted and used.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Pipeline Testing</h3>
                    <p className="text-muted-foreground">
                      Upon completion of calibration, the team shall select the correct NeuroPype pipeline and begin testing the real time data processing by the pipeline. The end goal is to single out the signals separating left from right, then use those to control our prototype.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Script Development & Integration</h3>
                    <p className="text-muted-foreground">
                      The team also shall create their own final Python scripts to use these brain signals and control our prototype. We will test these scripts thoroughly without the EEG data, then ultimately combine our scripts with the NeuroPype Pipeline to use the Headset to move the prototype.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Additional Testing</h3>
                    <p className="text-muted-foreground">
                      Additional software testing will occur based on Agile Software Development Principles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}