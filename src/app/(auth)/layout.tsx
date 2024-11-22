import { Inter } from "next/font/google";
import "../globals.css";
import React from "react";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Autenticação Integração",
  icons: {
    icon: "/imgs/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <Image unoptimized className="fixed z-0 w-screen h-screen object-cover" width={300} height={300} src="/imgs/login-bg.png" alt="Background login" />
      </body>
    </html>
  );
}
