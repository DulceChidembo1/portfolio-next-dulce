import type { Metadata } from "next";
import "./globals.css";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { decodeAction } from "next/dist/server/app-render/entry-base";

export const metadata: Metadata = {
  title: "Dulce Portfolio",
  description: "Welcome to Dulce   portfolio website, showcasing her skills and projects.",
}; 

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#18181b] transition-colors duration-300">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}