"use client";

import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { ScrollProgress } from "@/app/components/ui/scroll-progress";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org markup para organização
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

  // Schema para website
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
    }
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Meta Tags Básicas */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Elevensoft" />
        <meta name="language" content="pt-BR" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Elevensoft" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="https://elevensoft.dev/images/logo/logo-light.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Elevensoft - Soberania Digital" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@elevensoft" />
        <meta name="twitter:creator" content="@elevensoft" />
        <meta name="twitter:image" content="https://elevensoft.dev/images/logo/logo-light.svg" />
        
        {/* Favicon */}
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://elevensoft.dev" />
        
        {/* Schema.org Markup */}
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
      </head>
      <body className={`bg-neutral-950 text-white ${inter.className}`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <ScrollProgress />
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
