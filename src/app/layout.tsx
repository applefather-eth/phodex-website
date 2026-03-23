import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://remodex.phodex.app"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Remodex — Remote Control for Codex",
    template: "%s | Remodex",
  },
  description: "Control Codex from your iPhone. Open-source bridge + iOS app with end-to-end encryption. Local-first, self-host friendly.",
  keywords: ["remodex", "codex", "ios", "iphone", "coding", "github", "terminal", "openai", "codex cli", "mobile development", "ai coding", "remote control"],
  authors: [{ name: "Emanuele Di Pietro" }],
  creator: "Remodex",
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Remodex — Remote Control for Codex",
    description: "Control Codex from your iPhone. Open-source bridge + iOS app with end-to-end encryption.",
    url: SITE_URL,
    siteName: "Remodex",
    images: [{ url: "/remodex-og1.png", width: 1200, height: 630, alt: "Remodex — Remote Control for Codex" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remodex — Remote Control for Codex",
    description: "Control Codex from your iPhone. Open-source bridge + iOS app with end-to-end encryption.",
    images: [{ url: "/remodex-og1.png", alt: "Remodex — Remote Control for Codex" }],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
