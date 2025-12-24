import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import LoginGuard from "@/components/LoginGuard";

export const metadata: Metadata = {
  title: "Autohaus Anemolter",
  description: "Ihr Partner für Neu- und Gebrauchtwagen in Stolzenau",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-text-primary)]">
        <LoginGuard>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LoginGuard>
      </body>
    </html>
  );
}
