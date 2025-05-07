import { processMetadata } from "@lib"
import { BASE_URL, DEFAULT_SITE_TITLE } from "@const"
import { getPage, getMetadata, getSiteSettings } from "@query"
import { notFound } from "next/navigation"
import { Page, Team, Sidebar, Transactions } from "@ui"

export type ContextBundle = { params: Promise<{ slug: string }> }

export default async function BasicPage({ params }: ContextBundle) {
  const { slug } = await params
  const pageData = await getPage({ slug })
  if (!pageData) return notFound()
  return (
    <Page pageData={pageData} sidebar={<Sidebar banner={pageData.banner} sidebar={pageData.sidebar} />}>
      {!!pageData.teamTagline && !!pageData.team && <Team teamTagline={pageData.teamTagline} team={pageData.team} />}
      {!!pageData.transactionTypes && <Transactions transactionTypes={pageData.transactionTypes} />}
    </Page>
  )
}

export async function generateMetadata({ params }: ContextBundle) {
  const { slug } = await params
  const metadataResult = await getMetadata({ slug })
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
