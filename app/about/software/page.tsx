"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Code, Database, Brain } from "lucide-react";

const softwareList = [
  {
    name: "OpenBCI GUI",
    icon: Monitor,
    description: "Software used to read EEG headset data.",
  },
  {
    name: "NeuroPype Pipeline",
    icon: Code,
    description: "Collection of Python scripts to target the brain signals necessary.",
  },
  {
    name: "PyEGG",
    icon: Database,
    description: "Python Library for EEG feature extraction.",
  },
  {
    name: "MNE Python",
    icon: Brain,
    description: "Python Library for EEG data processing.",
  },
  // {
  //   name: "Machine Learning Applications",
  //   icon: Brain,
  //   description: "Additional machine learning applications are being reserched.",
  // },
];

export default function SoftwarePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Our Software</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Cutting-edge technology powering our neural interface solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {softwareList.map((item) => (
            <Card key={item.name} className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <item.icon className="mr-2 w-8 h-8" />
                  {item.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
