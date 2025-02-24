import type { Metadata } from "next"
import { Header, Footer } from "@ui"

import "@theme/_reset.scss"
import "@theme/_variables.scss"
import "@theme/_mixins.scss"
import "@theme/_general.scss"
// import { sectra, lafabrique } from "@theme/fonts"
import { Cormorant_Infant, Share, Source_Serif_4, EB_Garamond, Amiri, Fira_Sans, Kaisei_Opti, Newsreader } from "next/font/google"

export const metadata: Metadata = {
  title: "Hale Capital",
  description: "Reinventing Technology Investing since 2007",
}

// sectra
const serif = Newsreader({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
})

// lafabrique
const sans = Fira_Sans({
  weight: "700",
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
