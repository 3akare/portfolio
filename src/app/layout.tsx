import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";

const inter = Inter({subsets: ['latin']})
export const metadata: Metadata = {
  title: "3akare",
  description: "David Bakare — Software Engineer dedicated to crafting innovative and efficient solutions. Specializing in Java, Javascript, Python, C. I bring ideas to life with clean code and user-centered design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
