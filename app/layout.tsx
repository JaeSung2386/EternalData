import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/header/header";
import Navbar from "@/components/nav/nav";
import Home from "@/components/home/home";
import About from "@/components/about/about";
import Members from "@/components/members/members";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

import "@/scss/index.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EternalData",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        <div className="bg-circle1"></div>
        <div className="bg-circle2"></div>
        <Header />
        <Navbar />
        <Home />
        <About />
        <Members />
        <Contact />
        <Footer />
        {children}
      </body>
    </html>
  );
}
