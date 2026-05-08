import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmednobi.me"),
  title: {
    default: "Ahmed Nobi — Senior Android Engineer & KMP Specialist",
    template: "%s | Ahmed Nobi",
  },
  description:
    "Ahmed Nobi is a Senior Android Engineer with 7+ years of expertise in Kotlin Multiplatform (KMP), Jetpack Compose, and scalable mobile architectures. Building fintech apps with 5M+ downloads and 99.9% uptime.",
  keywords: [
    "Ahmed Nobi",
    "Senior Android Engineer",
    "Kotlin Multiplatform",
    "KMP",
    "Jetpack Compose",
    "Android Developer",
    "Kotlin",
    "Mobile Engineer",
    "Fintech",
    "SDUI",
    "Server-Driven UI",
    "Cairo",
    "Egypt",
  ],
  authors: [{ name: "Ahmed Nobi", url: "https://ahmednobi.me" }],
  creator: "Ahmed Nobi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmednobi.me",
    siteName: "Ahmed Nobi — Portfolio",
    title: "Ahmed Nobi — Senior Android Engineer & KMP Specialist",
    description:
      "Senior Android Engineer with 7+ years of expertise. Kotlin Multiplatform, Jetpack Compose, fintech apps with 5M+ downloads.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Nobi — Senior Android Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Nobi — Senior Android Engineer & KMP Specialist",
    description:
      "Senior Android Engineer with 7+ years of expertise. Kotlin Multiplatform, Jetpack Compose, fintech apps with 5M+ downloads.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ahmednobi.me",
  },
};

// JSON-LD Structured Data
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahmed Nobi",
  jobTitle: "Senior Android Engineer",
  url: "https://ahmednobi.me",
  sameAs: [
    "https://linkedin.com/in/ahmednobii",
    "https://github.com/ahmednobii",
  ],
  knowsAbout: [
    "Android Development",
    "Kotlin Multiplatform",
    "Jetpack Compose",
    "SDUI",
    "Mobile Architecture",
    "Fintech",
    "CI/CD",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Cashi",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Aswan University",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ahmed Nobi — Portfolio",
  url: "https://ahmednobi.me",
  author: {
    "@type": "Person",
    name: "Ahmed Nobi",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Ahmed Nobi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ahmed Nobi is a Senior Android Engineer with over 7 years of experience specializing in Kotlin Multiplatform (KMP), Jetpack Compose, and scalable mobile architectures. He currently leads the Consumer Squad at Cashi, building fintech applications with 5M+ downloads and 99.9% uptime.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Ahmed Nobi specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ahmed Nobi specializes in Kotlin, Kotlin Multiplatform (KMP), Jetpack Compose, Android SDK, SDUI (Server-Driven UI), MVVM/MVI architecture, Ktor, Koin, Room, Dagger/Hilt, and CI/CD pipelines with CircleCI and GitHub Actions.",
      },
    },
    {
      "@type": "Question",
      name: "What industries has Ahmed Nobi worked in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ahmed Nobi has extensive experience in fintech (Cashi — electronic payments, 5M+ downloads), media and streaming (MyZesty, ViuLive), education (SureSkills, programming instruction for 300+ students), and e-commerce (YouBox).",
      },
    },
    {
      "@type": "Question",
      name: "Is Ahmed Nobi available for hire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ahmed Nobi is open to new opportunities. You can reach him via LinkedIn at linkedin.com/in/ahmednobii or view his work on GitHub at github.com/ahmednobii.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
