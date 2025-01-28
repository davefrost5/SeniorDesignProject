"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EquipmentItem } from "@/components/about/equipment-item";
import { Brain, Cpu, Activity, Database } from "lucide-react";
import syncHeadset from "@/app/images/syncheadset.png";
import Image from 'next/image';

// const equipmentList = [
//   {
//     name: "Neural Signal Processors",
//     icon: Brain,
//     description: "State-of-the-art processors capable of real-time neural signal analysis and interpretation.",
//     specs: ["1ms response time", "99.9% accuracy", "Multi-channel processing"]
//   },
//   {
//     name: "Quantum Computing Units",
//     icon: Cpu,
//     description: "Advanced quantum computers for complex neural pattern recognition and machine learning.",
//     specs: ["100 qubit capacity", "Neural network optimization", "Parallel processing"]
//   },
//   {
//     name: "Biosignal Amplifiers",
//     icon: Activity,
//     description: "High-precision amplifiers for detecting and enhancing microscopic neural signals.",
//     specs: ["0.1μV sensitivity", "Adaptive filtering", "Low noise ratio"]
//   },
//   {
//     name: "Neural Data Center",
//     icon: Database,
//     description: "Secure facility for processing and storing neural mapping data with redundant safeguards.",
//     specs: ["Petabyte storage", "Real-time backup", "Military-grade encryption"]
//   }
// ];

export default function EquipmentPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Our Equipment</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Cutting-edge technology powering our neural interface solutions.
        </p>

        {/* OpenBCI Headset Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">OpenBCI Headset</h2>
          <p className="text-lg mb-4">
            The UltraCortex Mark IV EEG Headset is an open-source, 3D printable device that captures 8 channels of EEG, EMG, and ECG signals. Compatible with OpenBCI boards, it also has adjustable electrode holders for precision.
          </p>
          <Image src={syncHeadset} alt="OpenBCI Headset" width={600} height={400} className="mx-auto" />
        </div>

        {/* Commented out equipment list */}
        {/* <div className="grid md:grid-cols-2 gap-8">
          {equipmentList.map((item) => (
            <EquipmentItem key={item.name} {...item} />
          ))}
        </div> */}
      </div>
    </div>
  );
}