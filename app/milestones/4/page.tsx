import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ConceptCard } from "@/app/milestones/concept-card";
import { SpecsList } from "@/app/milestones/specs-list";
import { ClipboardList, Lightbulb, Cpu, FlaskConical, Wrench, TestTube } from "lucide-react";
import openGUIimg from "@/app/images/openGUIimg.png";
import npipeline from "@/app/images/NPIPELINE.png";
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

export default function Milestone4Page() {

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Milestone 4: Optimization, Delivery, and Management</h1>
        
        <Tabs defaultValue="optimization" className="space-y-8">
          <TabsList className="grid grid-cols-3 w-full bg-gray-100 rounded-lg shadow-md">
            <TabsTrigger value="optimization" className="hover:bg-blue-100">Optimization</TabsTrigger>
            <TabsTrigger value="delivery" className="hover:bg-blue-100">Delivery</TabsTrigger>
            <TabsTrigger value="management" className="hover:bg-blue-100">Management</TabsTrigger>
          </TabsList>

          <TabsContent value="optimization">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Optimization Details</h3>
                <p className="text-muted-foreground">
                  Optimize the design based on the test results on the Milestone 4 page of the project site.
                </p>
                <Card className="mt-4">
                  <CardContent>
                    <h4 className="text-md font-semibold">Design Trade-offs</h4>
                    <p className="text-muted-foreground">
                      Based on insights from our initial prototype, we completely redesigned the mechanical system responsible for opening and closing the user's hand. Rather than utilizing a motor-driven approach, we transitioned to an actuator-based design that pulls bungee cords instead of fishing lines.
                    </p>
                  </CardContent>
                </Card>
                <Card className="mt-4">
                  <CardContent>
                    <h4 className="text-md font-semibold">Design Features</h4>
                    <p className="text-muted-foreground">
                      The actuator drives a tightly woven cord through a pulley system, effectively increasing the available stroke length. This design change enhances the mechanical efficiency and reliability of the system.
                    </p>
                  </CardContent>
                </Card>
                <Card className="mt-4">
                  <CardContent>
                    <h4 className="text-md font-semibold">Practicality and Nontechnical Issues</h4>
                    <p className="text-muted-foreground">
                      Additionally, the system is now integrated with a wool glove, incorporating a sewn PVC tubing structure to guide the bungee cords along the user's fingers for improved functionality and alignment. This integration addresses both practical and ergonomic considerations.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="delivery">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Delivery Details</h3>
                <div className="mt-4">
                                <p className="text-muted-foreground mt-4">
                  The Video below is the first video of the prosthetic hand in action. As you can see at the 2 second mark the closed thought trigglers the hand to close. After 10 seconds, on the screen you can see the GUI switch to an open command, which will then reopen the hand.  We used Artificial Intelligence to classify the user's intent with no calibration, and then used that intent to control the prosthetic hand.
                </p>
                <video controls width="100%">
                  <source src="/firstVid.mp4" type="video/mp4" />
                </video>
                </div>

              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="management">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Management Details</h3>
                <Card className="mt-4">
                  <CardContent>
                    <h4 className="text-md font-semibold">🛠️ Project Planning</h4>
                    <p className="text-muted-foreground">
                      From the start, we established a detailed project plan outlining core stages: calibration design, signal processing pipeline development, machine learning model training, real-time classification, and final deployment on a Raspberry Pi. Milestones were scheduled across multiple sprints, with defined deliverables including data collection sessions, model accuracy benchmarks, and integration of a GUI dashboard. Task responsibilities were delegated using a shared Kanban board to track progress and dependencies across modules (e.g., data acquisition vs. model evaluation).
                    </p>
                  </CardContent>
                </Card>
                <Card className="mt-4">
                  <CardContent>
                    <h4 className="text-md font-semibold">🔄 Adaptability</h4>
                    <p className="text-muted-foreground">
                      Throughout the project, we adapted our plan in response to real-world technical constraints, including adjusting sampling rates and filter strategies to align with EEG signal quality and improving the prediction pipeline by incorporating confidence thresholds and CSP band filtering. The addition of a GUI dashboard mid-project reflects our responsiveness to usability feedback and demonstration needs, and our pipeline was restructured to improve modularity and support performance optimization on a Raspberry Pi.
                    </p>
                  </CardContent>
                </Card>
                <Card className="mt-4">
                  <CardContent>
                    <h4 className="text-md font-semibold">📊 Project Management Tools</h4>
                    <p className="text-muted-foreground">
                      We employed GitHub Projects for issue tracking and task breakdown, supported by milestone boards and daily commit history. Google Docs and Lucidchart were used for system diagrams, block planning, and documentation. Weekly check-ins and status updates ensured alignment with our evolving understanding of EEG signal processing, LSL communication, and machine learning classification techniques.
                    </p>
                  </CardContent>
                </Card>
                <Card className="mt-4">
                  <CardContent>
                    <h4 className="text-md font-semibold">⏱️ Timely Completion</h4>
                    <p className="text-muted-foreground">
                      As of the current milestone, the system successfully supports real-time hand movement classification using an OpenBCI headset, with a functional GUI interface and fully tested training and prediction scripts. We are on track for final testing, Raspberry Pi deployment, and demonstration within the senior design timeline.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}