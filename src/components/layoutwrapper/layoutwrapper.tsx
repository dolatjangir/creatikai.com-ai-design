"use client";

import { usePathname } from "next/navigation";

import Footer from "../footer";
import Navbar from "../navbar";



export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideRoutes = ["/login","/register",
    "/seodashboard","/seo",
    "/onboarding",
    "/seo-login",
    "/explore-broker",
    "/dashboard",
    "/dashboard/brokers"
    ,"/dashboard/properties",
    "/dashboard/requirements","/dashboard/broker-request",

     "/admin-dashboard/brokers"
    ,"/admin-dashboard/properties",
    "/admin-dashboard/requirements","/admin-dashboard/broker-request",
    "/admin-dashboard"];
  const hideLayout = hideRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
    
      {!hideLayout && <Footer />}
    </>
  );
}