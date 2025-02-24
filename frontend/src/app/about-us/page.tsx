import { processMetadata } from "@lib"
import { BASE_URL, DEFAULT_SITE_TITLE } from "@const"
import { getPage, getMetadata, getSiteSettings } from "@query"
import { SLUG } from "./"
import { notFound } from "next/navigation"
import { Page, Team, Sidebar } from "@ui"

export default async function AboutPage() {
  const pageData = await getPage({ slug: SLUG })
  if (!pageData) return notFound()
  console.log(pageData.banner)
  return (
    <Page pageData={pageData} sidebar={<Sidebar banner={pageData.banner} sidebar={pageData.sidebar} />}>
      {!!pageData.teamTagline && !!pageData.team && <Team teamTagline={pageData.teamTagline} team={pageData.team} />}
    </Page>
  )
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
