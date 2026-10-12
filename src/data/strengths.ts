import { Brain, FileText, Lightbulb, type LucideIcon } from "lucide-react";

export interface Strength {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const strengths: Strength[] = [
  {
    number: "01",
    title: "Problem Solving",
    description:
      "Develop efficient and practical solutions for complex technical challenges.",
    icon: Brain,
  },
  {
    number: "02",
    title: "Fast Learner",
    description:
      "Quickly adapt to new technologies, frameworks, and development tools.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Technical Documentation",
    description:
      "Create clear technical documentation, API references, and project guides to improve collaboration and maintainability.",
    icon: FileText,
  },
];
