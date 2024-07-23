import type { Metadata } from "next";
import { Poppins } from "@next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BOB CTO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
