import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import LayoutWrapper from "@/components/layoutwrapper/layoutwrapper";
import { AuthProvider } from "@/context/AuthContext";
import NewsletterPopup from "@/components/newsLetterPopup";




export const metadata: Metadata = {
  metadataBase: new URL("https://creatikai.com"),

  title: {
     default:
    "CreatikAI - Artificial Intelligence Course in Jaipur | AI Training Institute",
    template: "%s | CreatikAI",
  },

  description:
  "CreatikAI offers practical Artificial Intelligence, Machine Learning, Generative AI and Automation courses in Jaipur with live projects, expert mentors and placement assistance.",

 keywords: [
  "Artificial Intelligence Course Jaipur",
  "AI Course Jaipur",
  "Machine Learning Course Jaipur",
  "Generative AI Course",
  "AI Institute Jaipur",
  "Prompt Engineering",
  "Automation",
  "AI Training",
  "CreatikAI",
],

  
  creator: "CreatikAI",
  publisher: "CreatikAI",


  category: "Education",


  verification: {
    google: "S1cotO7PvCMr9UOObqWONokYhuOJf1dJK_OZSc34rtA",
  },

  alternates: {
    canonical: "/",
  },

 openGraph: {
  title:
    "Artificial Intelligence Course in Jaipur | CreatikAI",

  description:
    "Learn Artificial Intelligence, Machine Learning and Generative AI with industry experts in Jaipur.",

  url: "https://creatikai.com",

  siteName: "CreatikAI",

  locale: "en_IN",

  type: "website",

  images: [
    {
      url: "/creatikai-logo.png",
      width: 1200,
      height: 630,
      alt: "CreatikAI",
    },
  ],
},

  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Course in Jaipur | CreatikAI",
    description:
      "Learn Artificial Intelligence with industry experts in Jaipur.",
    images: ["/creatikai-logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1e88e5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
    <LayoutWrapper>
        {children}
      
</LayoutWrapper>
</AuthProvider>
        </body>
    </html>
  );
}
