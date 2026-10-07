export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & Computer Vision",
    description:
      "Building real-time AI and computer vision systems for visual perception and human-computer interaction.",
    skills: [
      "Computer Vision",
      "Deep Learning",
      "PyTorch",
      "OpenCV",
      "MediaPipe",
      "Face Analysis",
      "Gaze Estimation",
      "Hand Tracking",
      "Gesture Recognition",
      "Face Recognition",
      "ONNX Runtime",
    ],
  },

  {
    title: "AI & LLM",
    description:
      "Building AI-powered applications using large language models, conversational AI, and intelligent agent systems.",
    skills: [
      "Large Language Models (LLMs)",
      "AI Agents",
      "Prompt Engineering",
      "LLM Tool Calling",
      "Conversational AI",
      "AI Memory",
      "OpenRouter",
      "NVIDIA Nemotron",
    ],
  },

  {
    title: "Voice & Speech AI",
    description:
      "Developing voice-driven AI systems with speech recognition, voice activity detection, and text-to-speech.",
    skills: [
      "Speech-to-Text",
      "Text-to-Speech",
      "Faster-Whisper",
      "Silero VAD",
      "Voice Activity Detection",
      "Voice Assistants",
      "Real-Time Audio Processing",
    ],
  },

  {
    title: "AI Automation & Agents",
    description:
      "Designing AI-powered automation workflows and intelligent agents that connect language models with tools and external services.",
    skills: [
      "n8n",
      "AI Workflow Automation",
      "AI Agent Workflows",
      "Webhook Integration",
      "REST API Integration",
      "LLM Tool Calling",
      "Computer Use",
      "Local AI Automation",
    ],
  },

  {
    title: "Backend Development",
    description:
      "Building reliable APIs, backend services, and scalable web applications.",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "Django ORM",
      "RESTful API Design",
      "JWT Authentication",
      "OpenAPI",
      "Swagger",
    ],
  },

  {
    title: "Frontend Development",
    description:
      "Creating responsive and modern user interfaces for web applications.",
    skills: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },

  {
    title: "Databases",
    description:
      "Designing and working with relational databases and data models.",
    skills: [
      "PostgreSQL",
      "SQLite",
      "MySQL",
      "ERD Design",
    ],
  },

  {
    title: "Tools & Workflow",
    description:
      "Tools I use for development, API testing, version control, containerization, and collaboration.",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Atlassian Jira",
      "Postman",
      "dbdiagram.io",
    ],
  },

  {
    title: "IoT & Embedded",
    description:
      "Working with microcontrollers, embedded platforms, and IoT technologies.",
    skills: [
      "Arduino",
      "STM32",
      "ESP32",
      "Raspberry Pi",
      "MicroPython",
      "Proteus",
    ],
  },

  {
    title: "Software Engineering",
    description:
      "Writing maintainable and readable code with a focus on software quality and system integration.",
    skills: [
      "Clean Code",
      "API Architecture",
      "System Integration",
      "Modular Design",
    ],
  },
];
