import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ooi Chin Ping | Junior Software Engineer",
    template: "%s | Ooi Chin Ping"
  },
  description: "Junior Software Engineer specializing in Frontend & ERP development. Explore 20+ delivered projects and enterprise web solutions.",
  keywords: ["Software Engineer", "Frontend Developer", "ERP Developer", "Angular", "Node.js", "Malaysia Developer", "React", "Next.js"],
  authors: [{ name: "Ooi Chin Ping" }],
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://your-portfolio-url.com",
    title: "Ooi Chin Ping | Junior Software Engineer",
    description: "Building visually polished and reliable web applications with a focus on Frontend excellence and ERP logic.",
    siteName: "Ooi Chin Ping Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ooi Chin Ping | Junior Software Engineer",
    description: "Junior Software Engineer specializing in Frontend & ERP development.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
