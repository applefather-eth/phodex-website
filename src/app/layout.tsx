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

const SITE_URL = "https://www.phodex.app"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Phodex — The Codex App for iOS",
    template: "%s | Phodex",
  },
  description: "Control a Codex agent from your iPhone. Connect your GitHub repo, stream changes in real time, and push commits. No Mac required.",
  keywords: ["codex", "ios", "iphone", "coding", "github", "terminal", "openai", "codex cli", "mobile development", "ai coding"],
  authors: [{ name: "Phodex" }],
  creator: "Phodex",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Phodex — The Codex App for iOS",
    description: "Control a Codex agent from your iPhone. Connect your GitHub repo, stream changes in real time, and push commits. No Mac required.",
    url: SITE_URL,
    siteName: "Phodex",
    images: [{ url: "/phodex-og.png", width: 1200, height: 630, alt: "Phodex — The Codex App for iOS" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phodex — The Codex App for iOS",
    description: "Control a Codex agent from your iPhone. Connect your GitHub repo, stream changes in real time, and push commits. No Mac required.",
    images: [{ url: "/phodex-og.png", alt: "Phodex — The Codex App for iOS" }],
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
