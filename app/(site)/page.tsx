import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import Hero from "@/components/Hero";
import LoadingSpinner from "@/components/LoadingSpinner";
import Stats from "@/components/Stats";
import { Metadata } from "next";
import ReactGA from "react-ga4";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Elevensoft - Soberania Digital",
  description: "Recupere sua Soberania Digital. A era da segurança fragmentada acabou. Unifique seu controle, elimine riscos e blinde sua infraestrutura com a plataforma Elevensoft.",
  keywords: "soberania digital, segurança, infraestrutura, ESH, ESUT, KEYRING, EL GUARDIAN, cibersegurança, DevSecOps",
  authors: [{ name: "Elevensoft" }],
  creator: "Elevensoft",
  publisher: "Elevensoft",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://elevensoft.dev",
    title: "Elevensoft - Soberania Digital",
    description: "Recupere sua Soberania Digital. A era da segurança fragmentada acabou. Unifique seu controle, elimine riscos e blinde sua infraestrutura.",
    siteName: "Elevensoft",
    images: [
      {
        url: "https://elevensoft.dev/images/logo/logo-light.svg",
        width: 1200,
        height: 630,
        alt: "Elevensoft - Soberania Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@elevensoft",
    creator: "@elevensoft",
    title: "Elevensoft - Soberania Digital",
    description: "Recupere sua Soberania Digital. A era da segurança fragmentada acabou.",
    images: ["https://elevensoft.dev/images/logo/logo-light.svg"],
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
    canonical: "https://elevensoft.dev",
  },
};

export default function Home() {
  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Acessou a landing page",
  });

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <section id="features">
          <Feature />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="features-tab">
          <FeaturesTab />
        </section>
        <section id="cta">
          <CTA />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="blog">
          <Blog />
        </section>
      </main>
    </Suspense>
  );
}
