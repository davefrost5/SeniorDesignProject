"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ConceptCard } from "@/app/milestones/concept-card";
import { SpecsList } from "@/app/milestones/specs-list";
import { ClipboardList, Lightbulb, Cpu, FlaskConical, Wrench, TestTube } from "lucide-react";
import openGUIimg from "@/app/images/openGUIimg.png";
import npipeline from "@/app/images/npipeline.png";
import proto1 from "@/app/images/proto1.png";
import testSD1 from "@/app/images/testSD1.gif";
import headset from "@/app/images/headset.png";
import React from 'react';

// Define the type for table data
interface ExpenseItem {
  stuff: string;
  price: string;
  description: string;
  link?: string;
  date?: string;
}

export default function Milestone3Page() {

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Milestone 3: Implementation &
           Testing</h1>
        
        <Tabs defaultValue="implementation" className="space-y-8">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
            <TabsTrigger value="test">Test</TabsTrigger>
            <TabsTrigger value="teamwork">Teamwork</TabsTrigger>
          </TabsList>

          <TabsContent value="implementation">
            <div className="grid md:grid-cols-2 gap-6">
              <ConceptCard
                title="Prototype 1"
                description="This is our initial prototype. It is a simple 3D printed brace that moves a motor in response to the user's brain signals. We are using finger caps and fishing line to move the fingers, however these materials will change moving into prototype 2."
                imageSrc={proto1}
              />
              <ConceptCard
                title="EEG Headset"
                description="This is the EEG headset that we are using to collect the brain signals. The headset is from OpenBCI and connects to our NeuroPype pipeline via an LSL stream. The headset is also used to collect the data for the testing phase."
                imageSrc={headset}
              />
            </div>
          </TabsContent>

          <TabsContent value="test">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TestTube className="h-5 w-5" />
                  Test
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">EEG Data Collection</h3>
                    <p className="text-muted-foreground">
                      The team first trains the headset to detect the correct signals. From there this data is streamed via LSL to our recording script, which records these calibration values to be imported to NeuroPype.
                    </p>
                    <div className="mt-4">
                      <Image
                        src={openGUIimg} // Update with the correct path to your image
                        alt="openGUIimg"
                        width={1000} // Adjust width as needed
                        height={700} // Adjust height as needed
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">NeuroPype Pipeline</h3>
                    <p className="text-muted-foreground">
                      Upon completion of calibration, the pipeline is trained, providing data outputs on charts. Afterwards, the real time EEG data is streamed into the pipeline, which then displays the data in thew same graph. We use this data along with our python scripts to output whether the user wants the hand to open or close. Finally the team uses a python script to connect this data to our reaspberry pi to move the exoskeleton.
                    </p>
                    <div className="mt-4">
                      <Image
                        src={npipeline} // Update with the correct path to your image
                        alt="NPIPELINE"
                        width={1000} // Adjust width as needed
                        height={700} // Adjust height as needed
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Python Scripts</h3>
                    <p className="text-muted-foreground">
                      The team also shall create their own final Python scripts to use these brain signals and control our prototype. We will test these scripts thoroughly without the EEG data, then ultimately combine our scripts with the NeuroPype Pipeline to use the Headset to move the prototype. As of now the scripts connect to neuropype and both send calibration data to the pipeline, and receive real time data from the pipleine. Moving forward the team shall refine these scripts to ensure seamless connection to the raspberry pi in order to move tha exoskeleton.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Results</h3>
                    <p className="text-muted-foreground">
                      Videos below is our first succesful closing of the hand. As one can see, the prototype is still in its eary stages, and our team shall use this video to make adequate updates to the prototype in coming weeks. Currently we are able to see real time dta from the EEG headset through NeuroPype, but the video below is not showing the data move the motor. Our next step is to use the streamed data to control the motor after the same makes some more small prototype and development updates. picutred below the data are outputs from NeuroPype.  
                    </p>
                    <div className="mt-4">
                      <Image
                        src={testSD1}  // Path to your GIF in the public folder
                        alt="Test demonstration"
                        width={1000}
                        height={700}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teamwork">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5" />
                  Teamwork
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <SpecsList
                      title="Hardware"
                      icon={<Cpu className="h-5 w-5" />}
                      items={[
                        "3D Printing: Utilized advanced 3D printing techniques to create custom parts for the prototype.",
                        "Wire Attachment: Once the 3D printed parts were created, the team attached outside materials (finger caps, string, etc.) to the prototype to ensure the system is properly connected.",
                        "Raspberry Pi Integration: Integrated Raspberry Pi for processing and control functionalities.",
                        "Prototype Testing: Performed extensive testing to validate the design and functionality of the prototype."
                      ]}
                    />
                  </div>

                  <div className="space-y-4">
                    <SpecsList
                      title="Software"
                      icon={<FlaskConical className="h-5 w-5" />}
                      items={[
                        "Connected the OpenBCI GUI to the NeuroPype Pipeline via LSL stream",
                        "Corrected NeuroPype Nodes to properly display Open vs. Closed signals",
                        "Developed python scripts to connect to NeuroPype, organize data, and connect the raspberry pi to the real time open vs. closed data",
                        "Trained the model on multiple runs of the data to ensure the model is properly trained",
                        "Tested the system with the EEG headset and prototype to ensure the system works as expected"
                      ]}
                    />
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