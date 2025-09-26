import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato - Elevensoft",
  description: "Entre em contato com a Elevensoft para recuperar sua Soberania Digital",
};

export default function ContactPage() {
  return (
    <div className="dark:bg-neutral-950 light:bg-neutral-50">
      <Contact />
    </div>
  );
}
