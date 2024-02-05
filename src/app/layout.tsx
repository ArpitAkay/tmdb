import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Narbar from "@/components/Narbar/Narbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: " ",
    template: "TMDB | %s",
  },
  description: "The Movie Database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden select-none`}>
        <div className="w-svw h-svh">
          <div className="w-full h-16">
            <Narbar />
          </div>
          <div className="w-full h-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
