import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import ReactGA from "react-ga4";

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
    <main>
      <Hero />
      <Feature />
      <About />
      <FeaturesTab />
      <CTA />
      <FAQ />
      <Contact />
      <Blog />
    </main>
  );
}
