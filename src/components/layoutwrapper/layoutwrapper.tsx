"use client";

import { usePathname } from "next/navigation";

import Footer from "../footer";
import Navbar from "../navbar";
import NewsletterPopup from "../newsLetterPopup";
import WhatsAppChatbot from "../whatsapp-button/whatsapp";



export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideRoutes = ["/login","/register",
    "/seodashboard","/seo",
    "/onboarding",
    "/seo-login",
   
"/admin-dashboard",
  
  "/blogs","/blogs/new","/blog/[slug]"];
  const hideLayout = hideRoutes.includes(pathname) ||
  pathname.startsWith("/admin-dashboard/");

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
       {!hideLayout && <WhatsAppChatbot/>}
    {!hideLayout &&   <NewsletterPopup delay={5000}/>}
     
      {!hideLayout && <Footer />}
    </>
  );
}