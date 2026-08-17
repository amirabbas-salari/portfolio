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
      "https://jmovie.amirabbassalari.ir",

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
    {
    slug: "ai-hand-mouse-control",

    title: "AI Hand Mouse Control",

    subtitle: "Real-Time AI Virtual Mouse",

    description:
      "A real-time AI virtual mouse that allows users to control their computer using hand gestures through a webcam.",

    longDescription:
      "AI Hand Mouse Control is a real-time computer vision project that transforms a standard webcam into a virtual mouse. The system uses MediaPipe Hand Landmarker to detect 21 hand landmarks and interprets hand gestures to control the operating system mouse. Users can move the cursor with their index finger, perform left and right clicks using pinch gestures, and scroll using two-finger movements. The project is built with Python, OpenCV, MediaPipe, PyAutoGUI, and NumPy using a modular architecture designed for future improvements.",

    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "PyAutoGUI",
      "NumPy",
      "Computer Vision",
      "Git",
    ],

    features: [
      "Real-Time Hand Tracking",
      "21 Hand Landmark Detection",
      "Index Finger Mouse Control",
      "Left Click Gesture",
      "Right Click Gesture",
      "Gesture-Based Scrolling",
      "Webcam Integration",
      "Real-Time Gesture Recognition",
      "Modular Architecture",
    ],

    liveUrl: "",

    githubUrl: "https://github.com/amirabbas-salari/hand_mouse_control",

    image: "/images/projects/hand-mouse-control.jpg",

    featured: true,

    status: "Completed",
  },
  {
  slug: "advertisement-gaze-analytics",

  title: "Advertisement Gaze Analytics",

  subtitle: "Deep Learning-Based Advertisement Gaze Tracking & Analytics",

  description:
    "A computer vision and deep learning system for detecting, tracking, and analyzing viewers' gaze and attention toward digital advertisements.",

  longDescription:
    "Advertisement Gaze Analytics is an AI-powered computer vision system designed to analyze how viewers interact with digital advertisements. The system combines MediaPipe Face Landmarker for facial landmarks and head geometry with L2CS-Net for deep learning-based gaze estimation. It uses face tracking, identity recognition, gaze fusion, screen calibration, attention analysis, session management, and spatial gaze visualization to determine when and where viewers look at an advertisement. The collected data can be stored and analyzed to generate attention statistics, gaze points, and advertisement heatmaps.",

  technologies: [
    "Python",
    "PyTorch",
    "OpenCV",
    "MediaPipe",
    "L2CS-Net",
    "InsightFace",
    "ArcFace",
    "ONNX Runtime",
    "NumPy",
    "SQLite",
    "Computer Vision",
    "Deep Learning",
  ],

  features: [
    "Real-Time Face Detection",
    "478 3D Facial Landmarks",
    "Head Pose Estimation",
    "Deep Learning-Based Gaze Estimation",
    "Multi-Object Face Tracking",
    "Face Recognition",
    "Person Identification",
    "Gaze Fusion",
    "Screen Calibration",
    "Gaze Point Estimation",
    "Attention Detection",
    "Look Session Management",
    "Advertisement Analytics",
    "Gaze Heatmaps",
    "SQLite Data Storage",
    "JSON & Analytical Data Export",
    "Real-Time Visualization",
  ],

  liveUrl: "",

  githubUrl: "https://github.com/amirabbas-salari/gaze-analytics",

  image: "/images/projects/advertisement-gaze-analytics.jpg",

  featured: true,

  status: "In Development",
},
];
