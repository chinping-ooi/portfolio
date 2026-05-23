import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import { RESUME_DRIVE_LINK } from "./constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.zyrels.com"),
  title: "Junior Software Developer | Frontend | Backend | Full Stack",
  description: "Junior Software Developer specializing in Frontend & ERP development. Explore 20+ delivered projects and enterprise web solutions.",
  keywords: [
    "Software Developer",
    "Frontend Developer",
    "ERP Developer",
    "Angular",
    "Node.js",
    "Malaysia Developer",
    "React",
    "Next.js",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/apple-touch-icon.png" }
    ]
  },
  openGraph: {
    title: "Junior Software Developer | Frontend | Backend | Full Stack",
    description: "Junior Software Developer specializing in Frontend & ERP development. Explore 20+ delivered projects and enterprise web solutions.",
    siteName: "Developer Portfolio",
    url: "https://portfolio.zyrels.com",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo-dark.png",
        width: 1200,
        height: 630,
        alt: "Zyrels Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Junior Software Developer",
    description: "Building visually polished and reliable web applications with a focus on Frontend excellence and ERP logic.",
    images: ["/logo-dark.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-black text-center py-2.5 px-4 text-[10px] sm:text-xs font-black tracking-widest uppercase fixed top-0 left-0 right-0 w-full z-50">
          Latest Resume Updated — 
          <a href={RESUME_DRIVE_LINK} target="_blank" rel="noopener noreferrer" className="ml-2 underline underline-offset-4 hover:text-white transition-colors">
            Preview / Download
          </a>
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
