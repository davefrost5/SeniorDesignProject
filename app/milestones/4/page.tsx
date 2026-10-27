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
import Link from "next/link";
import { MilestonePageHeader } from "@/components/milestones/milestone-page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Milestone4Page() {

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <MilestonePageHeader
          title="Milestone 4: Optimization, Delivery, and Expo"
          period="Spring 2025 - May 2025 Expo"
          status="Awarded"
        />

        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <Badge className="bg-blue-600 hover:bg-blue-600/90">
            L3Harris Senior Design / Innovation Award
          </Badge>
          <Badge variant="secondary">Stevens Innovation Expo ~May 2025</Badge>
        </div>
        
        <Tabs defaultValue="delivery" className="space-y-8">
          <TabsList className="grid grid-cols-4 w-full bg-gray-100 rounded-lg shadow-md">
            <TabsTrigger value="optimization" className="hover:bg-blue-100">Optimization</TabsTrigger>
            <TabsTrigger value="delivery" className="hover:bg-blue-100">Delivery</TabsTrigger>
            <TabsTrigger value="expo" className="hover:bg-blue-100">Expo and Award</TabsTrigger>
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
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-lg font-semibold">Delivery demo</h3>
                <p className="text-muted-foreground">
                  At the 2 second mark a close thought triggers the hand to close. After about
                  10 seconds the GUI switches to an open command and the hand releases. AI
                  classifies intent with no per-user calibration and drives the orthotic in
                  real time.
                </p>
                <video controls className="w-full rounded-lg border">
                  <source src="/firstVid.mp4" type="video/mp4" />
                </video>
                <Button asChild variant="outline" size="sm">
                  <Link href="/#demo">Open on home page</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="expo">
            <Card>
              <CardContent className="pt-6 space-y-6">
                <h3 className="text-lg font-semibold">Stevens Innovation Expo and L3Harris award</h3>
                <p className="text-muted-foreground">
                  At the Innovation Expo (~May 2025), roughly thirty visitors tried the glove
                  with zero calibration. The AI/ML pipeline was the minimum viable product
                  on display. An occupational therapist shared that the system could change
                  stroke rehabilitation workflows. We observed motor imagery working when users
                  imagined commands in a non-English language.
                </p>
                <p className="text-muted-foreground">
                  The team won the L3Harris Senior Design / Innovation Award for the capstone.
                  Verified EEG metrics from expo testing: Common Spatial Patterns plus logistic
                  regression at 84% accuracy on motor imagery across 30+ users, with confidence
                  gating and live feedback in the full acquisition-to-actuation stack.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="https://www.linkedin.com/posts/davefrost525_along-with-cooper-foote-nicolas-accardo-activity-7328464454436728832-X_pG"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn: Expo demo with team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/posts/davefrost525_here-is-an-additional-video-from-the-senior-activity-7328514354331451392-SuZI"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn: Additional senior design video
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/posts/davefrost525_the-stevens-innovation-expo-is-coming-up-activity-7323075848230653953-M4t5"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn: Innovation Expo preview
                    </Link>
                  </li>
                </ul>
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
                    <h4 className="text-md font-semibold">Timely completion</h4>
                    <p className="text-muted-foreground">
                      Delivered on the senior design timeline: real-time hand movement
                      classification with OpenBCI, functional GUI, trained prediction scripts,
                      Raspberry Pi deployment, Innovation Expo demos, and the L3Harris
                      Innovation Award.
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