import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pashto DevZone | Web Developer Portfolio",
  description:
    "Pashto DevZone is a modern portfolio showcasing web development projects, MERN stack apps, UI designs, and creative coding by Yaseen Arman.",

  keywords: [
    "Pashto DevZone",
    "Web Developer Pakistan",
    "MERN Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "MERN Stack Developer",
    "Full Stack Web Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "JavaScript Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Full Stack Web Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "JavaScript Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Full Stack Web Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "JavaScript Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Pashto DevZone",
    "Pashto Developer",
    "Pashto Web Developer",
    "Pashto Coding Tutorials",
    "Pashto Programming",
    "MERN stack developer portfolio",
    "Hire React and Node.js developer",
    "Full stack web development services",
    "Professional MERN stack projects",
    "Modern responsive websites with React",
    "Custom admin dashboard development",
    "MongoDB Express React Node expert",
    "Website developer for startups",
    "SEO optimized React websites",
  ],

  authors: [{ name: "Yaseen Arman" }],
  creator: "Yaseen Arman",

  openGraph: {
    title: "Pashto DevZone | MERN Stack Developer Portfolio",
    description:
      "Professional MERN Stack Developer building modern, responsive, and scalable web applications using React, Next.js, Node.js, Express, and MongoDB.",
    url: "https://pashto-devzone.vercel.app",
    siteName: "Pashto DevZone",
    images: [
      {
        url: "/og_img.png",
        width: 1200,
        height: 630,
        alt: "Pashto DevZone Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pashto DevZone",
    description:
      "Modern web development portfolio showcasing projects and skills.",
    images: ["/og_img.png"],
  },

  icons: {
    icon: "/pd_logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <Footer className="mb-8" />
      </body>
    </html>
  );
}
