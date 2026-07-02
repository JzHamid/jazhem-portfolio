import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jazhem Hamid | Software Developer",
  description:
    "Portfolio for Jazhem Hamid, a software developer focused on AI automation, agentic workflows, RAG systems, and practical SaaS tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
