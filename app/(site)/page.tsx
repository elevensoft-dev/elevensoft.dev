import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Elevensoft - Soberania Digital | Plataforma Unificada de Segurança de Infraestrutura",
  description: "Recupere sua Soberania Digital com a plataforma Elevensoft. ESH, ESUT, KEYRING e EL GUARDIAN unificam controle de acesso, auditoria em tempo real e segurança de infraestrutura crítica. Elimine fragmentação e blinde sua infraestrutura.",
  keywords: "soberania digital, infraestrutura crítica, controle de acesso unificado, auditoria de sistemas em tempo real, segurança de infraestrutura, plataforma de segurança unificada, ESH Eleven Shell Hub, ESUT Eleven Shell Utility Tool, KEYRING gestão de identidades, EL GUARDIAN proteção de código, acesso remoto seguro, monitoramento de sessões, políticas de segurança, compliance de sistemas, zero trust security, privileged access management, infrastructure access management",
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
    title: "Elevensoft - Soberania Digital | Plataforma Unificada de Segurança",
    description: "Recupere sua Soberania Digital. A era da segurança fragmentada acabou. Unifique seu controle, elimine riscos e blinde sua infraestrutura com ESH, ESUT, KEYRING e EL GUARDIAN.",
    siteName: "Elevensoft",
    images: [
      {
        url: "https://elevensoft.dev/images/logo/logo-light.svg",
        width: 1200,
        height: 630,
        alt: "Elevensoft - Soberania Digital - Plataforma Unificada de Segurança",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@elevensoft",
    creator: "@elevensoft",
    title: "Elevensoft - Soberania Digital | Plataforma Unificada de Segurança",
    description: "Recupere sua Soberania Digital. A era da segurança fragmentada acabou. Unifique seu controle, elimine riscos e blinde sua infraestrutura.",
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
    "description": "Especialistas em Soberania Digital. Plataforma unificada de segurança e controle de infraestrutura crítica.",
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
      "Soberania Digital",
      "Segurança de Infraestrutura",
      "Controle de Acesso",
      "Auditoria de Sistemas",
      "DevSecOps",
      "Cibersegurança"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Elevensoft - Soberania Digital",
    "url": "https://elevensoft.dev",
    "description": "Recupere sua Soberania Digital. A era da segurança fragmentada acabou. Unifique seu controle, elimine riscos e blinde sua infraestrutura.",
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
    "description": "Plataforma unificada de segurança de infraestrutura com ESH, ESUT, KEYRING e EL GUARDIAN",
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
