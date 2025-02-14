import { processMetadata } from "@lib"
// import { Page } from "@ui"
import { BASE_URL, DEFAULT_SITE_TITLE } from "@const"
import { getPage, getMetadata, getSiteSettings } from "@query"
import { SLUG } from "./"
import { notFound } from "next/navigation"

export default async function Home() {
  const page = await getPage({ slug: SLUG })
  if (!page) return notFound()
  return <p>page</p>
  // return <Page page={page} />
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
