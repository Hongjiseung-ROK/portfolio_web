import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jiseung Hong",
  description:
    "Undergraduate researcher at Dongguk University working at the intersection of computational chemistry and machine learning.",
  openGraph: {
    title: "Jiseung Hong",
    description: "Computational Chemistry × Molecular ML",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
