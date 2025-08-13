"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

const queryClient = new QueryClient();
const tagManagerArgs = {
  gtmId: "GTM-K8J33FKL",
  events: {
    sendUserInfo: "tag manager home page",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (document) {
      ReactGA.initialize("G-V3LL1X7H9R");
      TagManager.initialize(tagManagerArgs);
    }
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="pt-BR" suppressHydrationWarning>
        <body className={`bg-neutral-950 text-white ${inter.className}`}>
          <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="dark"
          >
            <Lines />
            <Header />
            <ToasterContext />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        </body>
      </html>
    </QueryClientProvider>
  );
}
