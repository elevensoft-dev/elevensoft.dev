import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import TestimonialSection from "@/components/Testimonial/TestimonialSection";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Elevensoft - Plataforma Unificada de Segurança Empresarial | ESH + ESUT + KEYRING + EL GUARDIAN",
  description: "Transforme sua infraestrutura de segurança fragmentada em um ecossistema unificado e inteligente. A plataforma Elevensoft integra controle de acesso, auditoria em tempo real e gestão de identidades em uma solução elegante e robusta, desenvolvida especificamente para o mercado brasileiro.",
  keywords: "plataforma de segurança unificada, controle de acesso empresarial, auditoria de sistemas em tempo real, gestão de identidades, segurança de infraestrutura, ESH Eleven Shell Hub, ESUT Eleven Shell Utility Tool, KEYRING gestão de licenças, EL GUARDIAN proteção de código, acesso remoto seguro, monitoramento de sessões, políticas de segurança, compliance de sistemas, zero trust security, privileged access management, infrastructure access management, segurança empresarial Brasil",
  authors: [{ name: "Elevensoft" }],
  creator: "Elevensoft",
  publisher: "Elevensoft",
  applicationName: "Elevensoft",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://elevensoft.dev",
    title: "Elevensoft - Plataforma Unificada de Segurança Empresarial",
    description: "Transforme sua infraestrutura de segurança fragmentada em um ecossistema unificado e inteligente. Solução desenvolvida especificamente para o mercado brasileiro.",
    siteName: "Elevensoft",
    images: [
      {
        url: "https://elevensoft.dev/images/logo/logo-light.svg",
        width: 1200,
        height: 630,
        alt: "Elevensoft - Plataforma Unificada de Segurança Empresarial",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@elevensoft",
    creator: "@elevensoft",
    title: "Elevensoft - Plataforma Unificada de Segurança Empresarial",
    description: "Transforme sua infraestrutura de segurança fragmentada em um ecossistema unificado e inteligente. Solução desenvolvida para o mercado brasileiro.",
    images: ["https://elevensoft.dev/images/logo/logo-light.svg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://elevensoft.dev",
  },
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Elevensoft",
    "alternateName": "Eleven Soft",
    "url": "https://elevensoft.dev",
    "logo": "https://elevensoft.dev/images/logo/logo-light.svg",
    "description": "Especialistas em segurança empresarial. Plataforma unificada de controle de acesso, auditoria em tempo real e gestão de identidades.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Palhoça",
      "addressRegion": "Santa Catarina", 
      "addressCountry": "BR",
      "streetAddress": "Pedra Branca"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+55-48-98816-8221",
        "contactType": "customer service",
        "availableLanguage": "Portuguese",
        "areaServed": "BR"
      },
      {
        "@type": "ContactPoint",
        "email": "ola@elevensoft.dev",
        "contactType": "customer service",
        "availableLanguage": "Portuguese"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/elevensoft",
      "https://www.youtube.com/@elevensoft", 
      "https://www.instagram.com/elevensoft",
      "https://twitter.com/elevensoft"
    ],
    "knowsAbout": [
      "Segurança Empresarial",
      "Controle de Acesso Unificado",
      "Auditoria de Sistemas em Tempo Real",
      "Gestão de Identidades",
      "DevSecOps",
      "Cibersegurança",
      "Compliance de Sistemas"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Elevensoft - Plataforma Unificada de Segurança Empresarial",
    "url": "https://elevensoft.dev",
    "description": "Transforme sua infraestrutura de segurança fragmentada em um ecossistema unificado e inteligente. Solução desenvolvida especificamente para o mercado brasileiro.",
    "publisher": {
      "@type": "Organization",
      "name": "Elevensoft",
      "url": "https://elevensoft.dev"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://elevensoft.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Plataforma Elevensoft",
    "description": "Plataforma unificada de segurança empresarial com ESH, ESUT, KEYRING e EL GUARDIAN",
    "url": "https://elevensoft.dev/platform",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Linux, Windows, macOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@type": "Organization",
      "name": "Elevensoft"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema)
        }}
      />
      
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
        <section id="testimonials">
          <TestimonialSection />
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
    </>
  );
}
