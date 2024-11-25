import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import Hero from "@/components/Hero";
import Integration from "@/components/Integration";
import { QueryClient } from "@tanstack/react-query";
import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Eleven Soft",
  description: "Home of Eleven Soft",
  // other metadata
};

export default function Home() {

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
