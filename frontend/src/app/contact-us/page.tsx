import { processMetadata } from "@lib"
// import { Page } from "@ui"
import { BASE_URL, DEFAULT_SITE_TITLE } from "@const"
import { getPage, getMetadata, getSiteSettings } from "@query"
import { SLUG } from "./"
import { notFound } from "next/navigation"
import { Page, ContactForm } from "@ui"

export default async function ContactUsPage() {
  const pageData = await getPage({ slug: SLUG })
  if (!pageData) return notFound()
  // todo: legacy site actually has its own template —_—
  return (
    <Page pageData={pageData} sidebar={<ContactForm />}>
      <p>Todo: map</p>
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
