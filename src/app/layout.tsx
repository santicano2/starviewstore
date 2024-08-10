import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
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
      <body className={starviewFont.className}>{children}</body>
    </html>
  );
}
