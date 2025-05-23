import { processMetadata } from "@lib"
import { BASE_URL, DEFAULT_SITE_TITLE } from "@const"
import { getPage, getMetadata, getSiteSettings, getPortfolio } from "@query"
import { notFound } from "next/navigation"
import { Page, Portfolio, Sidebar, Testimonials } from "@ui"

export type ContextBundle = { params: Promise<{ slug: string }> }

export default async function BasicPage() {
  const pageData = await getPage({ slug: "portfolio" })
  if (!pageData) return notFound()
  const portfolio = await getPortfolio()
  return <Page pageData={pageData} pageComponent={<Portfolio portfolio={portfolio} />} sidebar={<Sidebar banner={pageData.banner} sidebar={pageData.sidebar} more={<Testimonials testimonials={pageData.testimonials} />} />}></Page>
}

export async function generateMetadata({ params }: ContextBundle) {
  const metadataResult = await getMetadata({ slug: "portfolio" })
  const siteSettings = await getSiteSettings()
  const metadata = processMetadata(metadataResult, siteSettings, "portfolio")
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
