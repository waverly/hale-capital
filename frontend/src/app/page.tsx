import { processMetadata } from "@lib"
// import { Page } from "@ui"
import { BASE_URL, DEFAULT_SITE_TITLE } from "@const"
import { getPage, getMetadata, getSiteSettings } from "@query"
import { notFound } from "next/navigation"
import { Home } from "@ui"

export default async function HomePage() {
  const pageData = await getPage({ slug: "home" })
  if (!pageData) return notFound()
  return <Home pageData={pageData} />
}

export async function generateMetadata() {
  const metadataResult = await getMetadata({ slug: "home" })
  const siteSettings = await getSiteSettings()
  const metadata = processMetadata(metadataResult, siteSettings, "page")
  return {
    ...metadata,
    title: DEFAULT_SITE_TITLE,
    openGraph: {
      ...metadata.openGraph,
      title: DEFAULT_SITE_TITLE,
    },
    alternates: {
      canonical: BASE_URL,
    },
  }
}
