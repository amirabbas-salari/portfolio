import type { Metadata } from "next";
import "./globals.css";

import PersonSchema from "@/components/seo/PersonSchema";

import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title:
    "Amir Abbas Salari Nasab | امیر عباس سالاری نسب | Full-Stack Developer",

  description:
    "Amir Abbas Salari Nasab (امیر عباس سالاری نسب) is a Full-Stack Developer focused on Backend Development with Python, Django, Django REST Framework, and React.",

  keywords: [
    "Amir Abbas Salari Nasab",
    "Amir Abbas Salari",
    "Amirabbas Salari Nasab",
    "Amirabbas Salari",
    "امیر عباس سالاری نسب",
    "امیرعباس سالاری نسب",
    "امیر عباس سالاری",
    "امیرعباس سالاری",
    "Full-Stack Developer",
    "Backend Developer",
    "Python Developer",
    "Django Developer",
    "React Developer",
  ],

  authors: [
    {
      name: "Amir Abbas Salari Nasab",
    },
  ],

  creator: "Amir Abbas Salari Nasab",

  metadataBase: new URL(
    "https://amirabbassalari.ir"
  ),

  openGraph: {
    type: "website",
    url: "https://amirabbassalari.ir",
    locale: "en_US",
    title: "Amir Abbas Salari Nasab | Full-Stack Developer",
    description:
      "Full-Stack Developer focused on backend development, scalable web applications, and modern software engineering.",
    siteName: "Amir Abbas Salari Nasab",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amir Abbas Salari Nasab - Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Amir Abbas Salari Nasab | Full-Stack Developer",
    description:
      "Portfolio of Amir Abbas Salari Nasab, Full-Stack Developer.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <PersonSchema />

        {children}
      </body>
    </html>
  );
}