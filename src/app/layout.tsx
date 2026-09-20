import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NexuHR | A Plataforma Tudo-em-Um de RH Inteligente e DP",
  description:
    "Automatize ponto eletrônico, férias, recrutamento, documentos e gestão de pessoas com IA. O SaaS All-in-One de RH escalável pronto para equipes modernas.",
  keywords: [
    "Software de RH",
    "Ponto Eletrônico Portaria 671",
    "Gestão de Férias",
    "Recrutamento ATS",
    "Assinatura Digital",
    "NexuHR",
    "Factorial HR alternativo",
  ],
  openGraph: {
    title: "NexuHR | A Plataforma Tudo-em-Um de RH Inteligente e DP",
    description:
      "Centralize DP, Ponto, Férias e Talentos em um único software moderno com IA.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen bg-nexu-bgLight text-nexu-dark selection:bg-nexu-coral selection:text-white">
        {children}
      </body>
    </html>
  );
}
