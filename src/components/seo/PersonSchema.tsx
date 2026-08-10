import Script from "next/script";

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Amir Abbas Salari Nasab",

    alternateName: [
      "Amir Abbas Salari",
      "Amirabbas Salari Nasab",
      "Amirabbas Salari",
      "امیر عباس سالاری نسب",
      "امیرعباس سالاری نسب",
      "امیر عباس سالاری",
      "امیرعباس سالاری",
    ],

    url: "https://amirabbassalari.ir",

    image:
      "https://amirabbassalari.ir/images/profile/profile.jpg",

    jobTitle: "Full-Stack Developer",

    description:
      "Full-Stack Developer focused on Backend Development with Python, Django, Django REST Framework, and React.",

    email: "amirabbassalarinasab@gmail.com",

    telephone: "+98 916 243 4323",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Kerman",
      addressCountry: "IR",
    },

    sameAs: [
      "https://www.linkedin.com/in/amirabbas-salari",
      // "YOUR_GITHUB_URL",
    ],

    knowsAbout: [
      "Python",
      "Django",
      "Django REST Framework",
      "React",
      "PostgreSQL",
      "REST API",
      "Backend Development",
      "Full-Stack Development",
      "Internet of Things",
    ],
  };

  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}