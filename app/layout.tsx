import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ratnesh Kurmi Mern Stack developer | AI Intregrator",
  description:
    "Portfolio of Ratnesh kurmi, a Mern Stack developer and Software Engineer specializing in Web3 technologies.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

