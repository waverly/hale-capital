import { processMetadata } from "@lib"
import { BASE_URL, DEFAULT_SITE_TITLE } from "@const"
import { getPage, getMetadata, getSiteSettings } from "@query"
import { SLUG } from "./"
import { notFound } from "next/navigation"
import { Page } from "@ui"

export default async function PrivateEquityPage() {
  const pageData = await getPage({ slug: SLUG })
  if (!pageData) return notFound()
  return <Page pageData={pageData} />
}

export async function generateMetadata() {
  const metadataResult = await getMetadata({ slug: SLUG })
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
