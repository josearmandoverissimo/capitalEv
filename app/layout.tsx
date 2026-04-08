import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CapitalEv | Holding de Saúde e Investimentos",
  description: "A CapitalEv é uma holding estratégica focada em impulsionar o setor de saúde através de parcerias sólidas e investimentos inteligentes.",
  keywords: "holding de saúde, investimentos saúde, parcerias médicas, CapitalEv",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-montserrat">
        {children}
      </body>
    </html>
  );
}
