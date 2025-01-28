"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Users, Brain, ClipboardCheck, GitCommit } from "lucide-react";

export default function Milestone1Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Milestone 1: Market Analysis & Requirements</h1>
        
        <Tabs defaultValue="customers" className="space-y-8">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="needs">Needs</TabsTrigger>
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
            <TabsTrigger value="mapping">Needs-Requirements Mapping</TabsTrigger>
          </TabsList>

          <TabsContent value="customers">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Target Customers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Rehabilitation centers",
                    "Hospitals",
                    "Neuro-research institutions",
                    "Government agencies",
                    "Insurance companies",
                    "Patients needing advanced rehabilitation solutions",
                    "Veterans and military personal with neurological damage"
                  ].map((customer) => (
                    <li key={customer} className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                      <span>{customer}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="needs">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Customer Needs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Patients who have lost functionally in a limb or body part and are trying to regain use of the body part in a more effective and timely manor than traditional physical therapy.
                </p>
                <ul className="space-y-3">
                  {[
                    "Seamless integration of brain-computer interfaces with prosthetic limbs",
                    "Improved mobility and independence for prosthetic users",
                    "Comfort and ease of use for long-term wear",
                    "Customization options to meet individual needs",
                    "Duration and reliability of the prosthetics",
                    "Affordability and accessibility of advanced prosthetic solutions",
                    "Support for rehabilitation and fast recovery"
                  ].map((need) => (
                    <li key={need} className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requirements">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClipboardCheck className="h-5 w-5" />
                  System Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "The design shall allow the OpenBCI to connect with Python scripts to automate limb movement from brain signals",
                    "The headset and attachments shall be comfortable for the patient",
                    "Movement of the limbs shall be assisted for rehabilitation",
                    "OpenBCI hardware shall be used",
                    "NeuroPype software shall be used",
                    "Hardware shall be tested for comfort and durability",
                    "User safety and comfortability shall be top priorities"
                  ].map((requirement) => (
                    <li key={requirement} className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mapping">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitCommit className="h-5 w-5" />
                    Needs-Requirements Mapping
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="font-semibold">1. Seamless integration of brain-computer interfaces with prosthetic limbs</h3>
                      <ul className="ml-6 space-y-2 text-muted-foreground">
                        <li>• OpenBCI hardware shall be used</li>
                        <li>• NeuroPype software shall be used</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold">2. Comfort and ease of use for long-term wear</h3>
                      <ul className="ml-6 space-y-2 text-muted-foreground">
                        <li>• The headset and attachments shall be comfortable for the patient</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold">3. Duration and reliability of the prosthetics</h3>
                      <ul className="ml-6 space-y-2 text-muted-foreground">
                        <li>• User safety and comfortability shall be top priorities</li>
                        <li>• Hardware shall be tested for comfort and durability</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold">4. Support for rehabilitation and fast recovery</h3>
                      <ul className="ml-6 space-y-2 text-muted-foreground">
                        <li>• Movement of the limbs shall be assisted for rehabilitation</li>
                        <li>• The design shall allow the OpenBCI to connect with Python scripts to automate limb movement from brain signals</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}