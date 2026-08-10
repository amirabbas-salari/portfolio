export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  featured: boolean;
  status: "Completed" | "In Development";
}