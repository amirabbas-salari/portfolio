export interface Language {
  name: string;
  level: string;
  /** Proficiency from 1 to 5, used for the visual meter. */
  proficiency: number;
}

export const languages: Language[] = [
  {
    name: "Persian",
    level: "Native",
    proficiency: 5,
  },
  {
    name: "English",
    level: "Professional Working Proficiency",
    proficiency: 4,
  },
  {
    name: "Turkish",
    level: "Conversational",
    proficiency: 2,
  },
];
