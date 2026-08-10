export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
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
      "Tools I use for development, API testing, version control, and collaboration.",
    skills: [
      "Git",
      "GitHub",
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
      "Writing maintainable and readable code with a focus on software quality.",
    skills: [
      "Clean Code",
    ],
  },
];