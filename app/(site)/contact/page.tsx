import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato - Elevensoft",
  description: "Entre em contato com a Elevensoft para recuperar sua Soberania Digital",
};

export default function ContactPage() {
  return (
    <div className="bg-neutral-950">
      <Contact />
    </div>
  );
}
