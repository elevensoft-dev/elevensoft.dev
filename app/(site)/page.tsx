import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import Hero from "@/components/Hero";
import Integration from "@/components/Integration";
import { Metadata } from "next";
import ReactGA from "react-ga4";

export const metadata: Metadata = {
  title: "Eleven Soft",
  description: "Home of Eleven Soft",
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
      {/* <Brands /> */}
      <Feature />
      <About />
      <FeaturesTab />
      {/* <FunFact /> */}
      <Integration />
      <CTA />
      <FAQ />
      {/* <Testimonial /> */}
      {/* <Pricing /> */}
      <Contact />
      <Blog />
    </main>
  );
}
