export interface Certification {
  title: string;
  issuer: string;
  image: string;
}

export const certifications: Certification[] = [
  {
    title: "Django Backend Development",
    issuer: "Quera College",
    image: "/images/certificates/django-backend.jpg",
  },
  
  {
    title: "C#",
    issuer: "HackerRank",
    image: "/images/certificates/c-sharp.jpg",
  },

  {
    title: "C++ Programming",
    issuer: "Faradars",
    image: "/images/certificates/cpp.jpg",
  },

  {
    title: "Advanced Python Programming",
    issuer: "Quera College",
    image: "/images/certificates/advanced-python.jpg",
  },
  
  {
    title: "Python Programming",
    issuer: "Technical and Vocational Training Organization of Iran",
    image: "/images/certificates/python.jpg",
  },
];
