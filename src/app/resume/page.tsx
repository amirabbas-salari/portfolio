import type { Metadata } from "next";

import ResumeScreen from "@/components/resume/ResumeScreen";

export const metadata: Metadata = {
 title: "One-Screen Résumé | Amir Abbas Salari Nasab",
 description:
 "The complete résumé of Amir Abbas Salari Nasab in a single screen — AI & Computer Vision Developer and Full-Stack Engineer working with Python, PyTorch, OpenCV, Django and React.",
 keywords: [
 "Amir Abbas Salari Nasab résumé",
 "Amir Abbas Salari resume",
 "One page résumé",
 "AI Computer Vision Developer",
 "Python Django React résumé",
 ],
 alternates: {
 canonical: "/resume",
 },
 openGraph: {
 title: "One-Screen Résumé | Amir Abbas Salari Nasab",
 description:
 "The complete résumé of Amir Abbas Salari Nasab in a single screen — AI & Computer Vision Developer and Full-Stack Engineer.",
 url: "/resume",
 type: "profile",
 },
 robots: {
 index: true,
 follow: true,
 },
};

export default function ResumePage() {
 return <ResumeScreen />;
}
