import { profile } from "@/data/profile";

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: profile.name,

    jobTitle: profile.role,

    email: `mailto:${profile.email}`,

    telephone: profile.phone,

    address: {
      "@type": "PostalAddress",
      addressLocality: "Kerman",
      addressCountry: "IR",
    },

    sameAs: [
      profile.linkedin,
      ...(profile.github ? [profile.github] : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}