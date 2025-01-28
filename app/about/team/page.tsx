"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TeamMember } from "@/components/about/team-member";
import syncCoop from "@/app/images/synccoop.png";
import syncOwen from "@/app/images/syncowen.png";
import syncDave from "@/app/images/syncdave.png";
import syncNick from "@/app/images/syncnick.png";

const teamMembers = [
  {
    name: "Cooper Foote",
    role: "Lead Technician",
    email: "cfoote@stevens.edu",
    department: "Electrical Engineering",
    image: syncCoop,
    description: "Manufacturing Co-Lead and Neural Network Research Co-Lead",
  },
  {
    name: "Owen Deem",
    role: "Lead of Prototype Development",
    email: "odeem@stevens.edu",
    department: "Electrical Engineering",
    image: syncOwen,
    description: "Manufacturing Co-Lead and Neural Network Research Co-Lead",
  },
  {
    name: "David Frost",
    role: "Full-Stack Programming Lead",
    email: "dfrost1@stevens.edu",
    department: "Software Engineering",
    image: syncDave,
    description: "NeuroPype Co-Lead and Neural Network Implementation Co-Lead",
  },
  {
    name: "Nick Accardo",
    role: "Backend Programming Lead",
    email: "naccardo@stevens.edu",
    department: "Software Engineering",
    image: syncNick,
    description: "NeuroPype Co-Lead, Lead Recorder, and Neural Network Implementation Co-Lead",
  },
];

export default function TeamPage() {
  return (
    <div className="w-full px-8 py-12">
      <div className="w-3/4 mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
        <p className="text-xl text-muted-foreground mb-12 text-center">
          Meet the brilliant minds behind SYNC Prosthetics&apos; groundbreaking technology.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>

        {/* Faculty Advisor Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Faculty Advisor</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Bernard Yett - <a href="mailto:byett1@stevens.edu">byett1@stevens.edu</a><br />
            Department of Electrical and Computer Engineering
          </p>
        </div>

        {/* Team Assessments Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Team Assessments</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Our team contributions have been very even across the board. We have been consistently meeting to finalize our project plans since early September. On September 25th we finalized Dr. Bernard Yett as our advisor and our entire group met with him that week. We have continuously met with Dr. Yett throughout this semester. In the weeks of our early development, we met with Dr. Raviraj Nataraj, who is currently leading a team of Stevens students in research on this topic. Our group has consistently met two to three times a week and put a great amount of effort into preparing our project for completion next semester.
          </p>
        </div>
      </div>
    </div>
  );
}