import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GiraPrêmio | Gestão de campanhas e prêmios",
  description: "Organize campanhas promocionais, prêmios e documentação em um painel simples e intuitivo.",
  applicationName: "GiraPrêmio",
  robots: { index: true, follow: true },
  openGraph: {
    title: "GiraPrêmio | Gestão de campanhas e prêmios",
    description: "Uma base simples para organizar campanhas, prêmios e documentos.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
