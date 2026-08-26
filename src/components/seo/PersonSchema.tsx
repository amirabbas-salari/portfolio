import Script from "next/script";

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "امیرعباس سالاری",

    alternateName: [
      "Amir Abbas Salari",
      "Amir Abbas Salari Nasab",
      "Amirabbas Salari Nasab",
      "Amirabbas Salari",
      "امیرعباس سالاری",
      "امیر عباس سالاری نسب",
      "امیرعباس سالاری نسب",
      "امیر عباس سالاری",
      "امیرعباس سالاری",
    ],

    url: "https://amirabbassalari.ir",

    image:
      "https://amirabbassalari.ir/images/profile/profile.jpg",

    jobTitle: "AI & Computer Vision Developer",

    description:
      "AI and Computer Vision Developer focused on building real-time intelligent vision systems for face analysis, gaze estimation, hand tracking, gesture recognition, and human-computer interaction using Python, PyTorch, OpenCV, MediaPipe, and ONNX Runtime.",

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
      "Artificial Intelligence",
      "Computer Vision",
      "Deep Learning",
      "Real-Time Computer Vision",

      "PyTorch",
      "OpenCV",
      "MediaPipe",
      "ONNX Runtime",

      "Face Analysis",
      "Face Landmark Detection",
      "Face Recognition",
      "Gaze Estimation",
      "Head Pose Estimation",

      "Hand Tracking",
      "Hand Landmark Detection",
      "Gesture Recognition",
      "Human-Computer Interaction",

      "Python",

      "Backend Development",
      "Django",
      "Django REST Framework",
      "REST API",
      "React",
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
