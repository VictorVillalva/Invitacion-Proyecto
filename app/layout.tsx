import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/ui/font";
import bgImage from "@/ui/assets/images/bd-fondo.png"

export const metadata: Metadata = {
  title: "Invitacion Virtual",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-cover bg-center bg-no-repeat `} style={{ backgroundImage: `url(${bgImage.src})` }}>
        {children}
      </body>
    </html>
  );
}
