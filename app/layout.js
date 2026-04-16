import { Geist, Geist_Mono } from "next/font/google";
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
  ],

  authors: [{ name: "Yaseen Arman" }],
  creator: "Yaseen Arman",

  openGraph: {
    title: "Pashto DevZone",
    description:
      "Explore modern web apps, UI designs, and development projects built with React, Next.js, and MERN stack.",
    url: "https://pashtodevzone.com",
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
        <Footer className="mb-8"/>
        </body>
    </html>
  );
}
