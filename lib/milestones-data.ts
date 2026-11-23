export type MilestoneStatus = "Completed" | "Awarded";

export interface MilestoneSummary {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  status: MilestoneStatus;
  progress: number;
  href: string;
  highlights: string[];
}

export const PROJECT_TIMELINE = {
  start: "September 2024",
  end: "May 2025",
  expo: "May 2025",
  award: "L3Harris Senior Design / Innovation Award",
};

export const milestones: MilestoneSummary[] = [
  {
    id: "1",
    title: "Market Analysis and Requirements",
    subtitle: "Concept and stakeholder needs",
    period: "Fall 2024",
    status: "Completed",
    progress: 100,
    href: "/milestones/1",
    highlights: [
      "Mapped rehabilitation use cases and BCI integration requirements",
      "Defined OpenBCI + signal processing stack for senior design scope",
      "Aligned needs to measurable system requirements for the capstone",
    ],
  },
  {
    id: "2",
    title: "Design and Development",
    subtitle: "Mechanical and software architecture",
    period: "Fall 2024 - Spring 2025",
    status: "Completed",
    progress: 100,
    href: "/milestones/2",
    highlights: [
      "Selected palm-routed wire actuation over pressure and over-hand designs",
      "Specified UltraCortex EEG, NeuroPype pipeline, and Python ML stack",
      "Produced project plan, CAD, and integration test procedures",
    ],
  },
  {
    id: "3",
    title: "Implementation and Testing",
    subtitle: "Pipeline, prototype, and Raspberry Pi control",
    period: "Spring 2025",
    status: "Completed",
    progress: 100,
    href: "/milestones/3",
    highlights: [
      "Built 3D-printed exoskeleton with LSL streaming from OpenBCI GUI",
      "Trained NeuroPype nodes and Python scripts for open vs. closed classification",
      "Closed the loop from EEG to motor actuation on prototype hardware",
    ],
  },
  {
    id: "4",
    title: "Optimization, Delivery, and Expo",
    subtitle: "Zero-calibration ML, demo, and award",
    period: "Spring 2025",
    status: "Awarded",
    progress: 100,
    href: "/milestones/4",
    highlights: [
      "Actuator + bungee glove design for reliable stroke and ergonomics",
      "CSP + logistic regression at 84% motor imagery accuracy across 30+ users",
      "Stevens Innovation Expo demos and L3Harris Senior Design Innovation Award",
    ],
  },
];
