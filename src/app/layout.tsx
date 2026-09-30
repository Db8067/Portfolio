import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Devansh Bhardwaj | Full Stack Developer",
  description: "Building digital products at the intersection of code, AI & creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <div className="ambient-bg">
          <div className="ambient-blob top-[-10%] left-[-10%]"></div>
          <div className="ambient-blob bottom-[-10%] right-[-10%] bg-[#101B72]"></div>
        </div>
        
        <CustomCursor />
        
        <SmoothScroll>
          {/* The Floating Canvas */}
          <div className="relative mx-auto my-0 md:my-8 w-full md:w-[94%] bg-[#F5F4F1] min-h-screen md:rounded-3xl shadow-2xl overflow-hidden border border-white/10">
            <Navbar />
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
