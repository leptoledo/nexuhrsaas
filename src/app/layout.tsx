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
  title: "NexusLT | A Plataforma All-in-One de Gestão LT e Pessoas em Portugal",
  description:
    "Automatize o registo de assiduidade, mapa de férias, recrutamento, documentos e gestão de colaboradores com IA. 100% em conformidade com o Código do Trabalho e a ACT. Sediado no Porto.",
  keywords: [
    "Software LT",
    "Gestão LT Portugal",
    "Registo de Assiduidade ACT",
    "Código do Trabalho",
    "Mapa de Férias",
    "Recrutamento ATS",
    "Recibos de Vencimento",
    "NexusLT Porto",
  ],
  openGraph: {
    title: "NexusLT | A Plataforma All-in-One de Gestão LT e Pessoas em Portugal",
    description:
      "Centralize a gestão da sua equipa, controlo horário conforme a ACT e processos laborais num único software moderno com IA.",
    type: "website",
    locale: "pt_PT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen bg-nexu-bgLight text-nexu-dark selection:bg-nexu-coral selection:text-white">
        {children}
      </body>
    </html>
  );
}
