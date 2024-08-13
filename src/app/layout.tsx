import type { Metadata } from "next";
import localfont from "next/font/local";

import { WixClientContextProvider } from "@/context/wixContext";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

const starviewFont = localfont({ src: "../../public/font/starview.woff2" });

export const metadata: Metadata = {
  title: "Starview Store",
  description: "Starview es la mejor tienda de remeras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={starviewFont.className}>
        <WixClientContextProvider>
          <Navbar />
          {children}
          <Footer />
        </WixClientContextProvider>
      </body>
    </html>
  );
}
