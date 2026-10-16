import { Fraunces, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "animate.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: { default: "Tilehouse — Discover Your Perfect Aesthetic", template: "%s | Tilehouse" },
  description: "A gallery of ceramic, porcelain, marble and mosaic tiles. Browse, search and get inspired.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="tilehouse" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-base-100 text-base-content antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" toastOptions={{ style: { background: "#2b2118", color: "#fbf6ee" } }} />
      </body>
    </html>
  );
}
