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
