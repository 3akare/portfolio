import type React from "react"
import { jetbrainsMono } from "@/app/fonts"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "3akare | Software Engineer",
  description: "Software Engineer Portfolio & Blog",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
