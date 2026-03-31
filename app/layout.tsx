import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Protéger nos enfants — Un outil pour les parents",
  description:
    "Un outil pratique à destination des parents pour prévenir les violences sexuelles faites aux enfants.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white min-h-screen">{children}</body>
    </html>
  );
}
