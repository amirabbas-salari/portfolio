import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "movieverse",

    title: "MovieVerse",

    subtitle: "Full-Stack Movie & TV Platform",

    description:
      "A full-stack movie and TV platform built with Django REST Framework and React.",

    longDescription:
      "MovieVerse is a full-stack movie and TV platform designed for discovering and exploring movies and television series. The project combines a Django REST Framework backend with a modern React frontend and provides structured APIs for movies, series, actors, genres, and collections.",

    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "React",
      "PostgreSQL",
      "SQLite",
      "Git",
    ],

    features: [
      "RESTful API architecture",
      "Authentication",
      "Advanced search",
      "Filtering",
      "Movie management",
      "TV series management",
      "Actors and genres",
      "Collections",
      "Responsive UI",
    ],

    liveUrl:
      "https://amirabbassalari.ir",

    githubUrl: "",

    image: "/images/projects/movieverse.jpg",

    featured: true,

    status: "In Development",
  },
  {
    slug: "salon-appointment-platform",

    title: "Salon Appointment Platform",

    subtitle: "Appointment Booking & Management Platform",

    description:
        "A full-stack platform that allows customers to book salon appointments and barbers to manage their schedules, services, and bookings.",

    longDescription:
        "Salon Appointment Platform is a full-stack web application designed to simplify appointment booking and management for salons. Customers can explore available services and book appointments, while barbers can manage their services, schedules, and bookings through a dedicated management interface. The backend is built with Django and Django REST Framework, while the frontend is being developed with React and Vite.",

    technologies: [
        "Python",
        "Django",
        "Django REST Framework",
        "React",
        "Vite",
        "Tailwind CSS",
        "PostgreSQL",
        "Git",
    ],

    features: [
        "Customer Authentication",
        "Barber Authentication",
        "Role-Based Access",
        "Appointment Booking",
        "Appointment Management",
        "Service Management",
        "Salon Management",
        "Barber Management",
        "Ratings & Reviews",
        "REST APIs",
        "Responsive UI",
    ],

    liveUrl: "",

    githubUrl: "",

    image: "/images/projects/barber.jpg",

    featured: true,

    status: "In Development",
    },
];