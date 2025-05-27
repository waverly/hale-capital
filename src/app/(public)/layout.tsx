import type { Metadata } from "next"
import { Header, Footer, DisableDraftMode } from "@/ui"
import { SanityLive } from "@/sanity/lib/live"
import { draftMode } from "next/headers"
import { VisualEditing } from "next-sanity"

import "@/theme/_reset.scss"
import "@/theme/_variables.scss"
import "@/theme/_mixins.scss"
import "@/theme/_general.scss"
// import { Fira_Sans, Newsreader } from "next/font/google"

export const metadata: Metadata = {
  title: "Hale Capital",
  description: "Reinventing Technology Investing since 2007",
}

// // sectra
// const serif = Newsreader({
//   weight: "400",
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   variable: "--font-serif",
// })
//
// // lafabrique
// const sans = Fira_Sans({
//   weight: "700",
//   style: ["normal"],
//   subsets: ["latin"],
//   variable: "--font-sans",
// })

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const drafts = await draftMode()
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <SanityLive />
        {drafts.isEnabled && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  )
}
