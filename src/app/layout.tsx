import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Docker Resources - Resource Library",
  description: "A resource library to inspire developers and businesses. Explore materials to accelerate how you build, share, run, and test applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
