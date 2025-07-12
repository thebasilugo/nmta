import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nigerian Movie & Television Awards (NMTA) 2025",
  description:
    "The inaugural Nigerian Movie & Television Awards celebrating excellence in Nigerian cinema and television. Submit your film today!",
  keywords: "Nigerian movies, Nollywood, film awards, television awards, NMTA, Nigerian cinema",
  authors: [{ name: "NMTA Team" }],
  openGraph: {
    title: "Nigerian Movie & Television Awards (NMTA) 2025",
    description: "Celebrating excellence in Nigerian cinema and television. Join us for the inaugural NMTA ceremony.",
    url: "https://nmtaawards.com",
    siteName: "NMTA",
    images: [
      {
        url: "/images/nmta-statuette.jpeg",
        width: 1200,
        height: 630,
        alt: "NMTA Statuette",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nigerian Movie & Television Awards (NMTA) 2025",
    description: "Celebrating excellence in Nigerian cinema and television.",
    images: ["/images/nmta-statuette.jpeg"],
    creator: "@nmtaawards",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
