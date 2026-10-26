import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

const SITE_URL = "https://shabbirahmedshuvo01.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Shabbir Ahmed Shuvo (dev shuvo) | Full-Stack Developer | React • Next.js • TypeScript • Node.js",
  description:
    "Official portfolio of Shabbir Ahmed Shuvo (dev shuvo). Full-Stack Software Engineer specializing in React, Next.js (App Router), TypeScript, RTK Query, Node.js, and scalable web architectures.",
  keywords: [
    "Shabbir Ahmed Shuvo",
    "dev shuvo",
    "devshuvo",
    "Sabbir Shuvo",
    "Full-Stack Developer Dhaka",
    "Next.js Developer Bangladesh",
    "React TypeScript Developer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Shabbir Ahmed Shuvo", url: "https://github.com/shabbirahmedshuvo01" }],
  creator: "Shabbir Ahmed Shuvo",
  alternates: {
    canonical: "https://shabbirahmedshuvo01.github.io/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shabbirahmedshuvo01.github.io/",
    title: "Shabbir Ahmed Shuvo (dev shuvo) | Full-Stack Developer | React • Next.js • TypeScript • Node.js",
    description:
      "Official portfolio of Shabbir Ahmed Shuvo (dev shuvo). Full-Stack Software Engineer specializing in React, Next.js (App Router), TypeScript, RTK Query, Node.js, and scalable web architectures.",
    siteName: "Shabbir Ahmed Shuvo Portfolio",
    images: [
      {
        url: `${SITE_URL}/profile/profile.jpg`,
        width: 1200,
        height: 630,
        alt: "Shabbir Ahmed Shuvo - Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shabbir Ahmed Shuvo (dev shuvo) | Full-Stack Developer | React • Next.js • TypeScript • Node.js",
    description:
      "Official portfolio of Shabbir Ahmed Shuvo (dev shuvo). Full-Stack Software Engineer specializing in React, Next.js (App Router), TypeScript, RTK Query, Node.js, and scalable web architectures.",
    images: [`${SITE_URL}/profile/profile.jpg`],
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

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shabbir Ahmed Shuvo",
  alternateName: ["dev shuvo", "devshuvo", "Sabbir Shuvo"],
  url: "https://shabbirahmedshuvo01.github.io/",
  image: "https://shabbirahmedshuvo01.github.io/profile/profile.jpg",
  jobTitle: "Full-Stack Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "SM Technology",
  },
  sameAs: [
    "https://github.com/shabbirahmedshuvo01",
    "https://linkedin.com/in/shabbir-ahmed-shuvo",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Redux Toolkit",
    "RTK Query",
    "MongoDB",
    "WebSockets",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-200`}
      >
        {children}
      </body>
    </html>
  );
}
