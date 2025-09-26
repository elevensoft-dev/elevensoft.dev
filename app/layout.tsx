import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import MetaTags from "@/components/SEO/MetaTags";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://elevensoft.dev"),
  title: {
    default: "Elevensoft - Soberania Digital",
    template: "%s | Elevensoft"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Elevensoft",
    "msapplication-TileColor": "#ff8a29",
    "geo.region": "BR-SC",
    "geo.placename": "Palhoça",
    "geo.position": "-27.6444;-48.6678",
    "ICBM": "-27.6444, -48.6678",
    "content-language": "pt-BR",
    "language": "Portuguese",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff8a29" />
        <MetaTags />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}