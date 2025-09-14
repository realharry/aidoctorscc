import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Doctors CC - Medical AI Agents Showcase",
  description: "Discover specialized AI agents for medical knowledge and healthcare assistance. Clean, responsive showcase of advanced medical AI technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
