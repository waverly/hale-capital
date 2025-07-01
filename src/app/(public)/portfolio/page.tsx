import { sanityFetch } from "../../../sanity/lib/live"
import { pageQuery, portfolioQuery } from "@/sanity/queries"
import { notFound } from "next/navigation"
import { Page, Portfolio, Sidebar, Testimonials } from "@/ui"

export type ContextBundle = { params: Promise<{ slug: string }> }

export default async function BasicPage() {
  const { data: pageData } = await sanityFetch({
    query: pageQuery,
    params: { slug: "portfolio" },
  })
  if (!pageData) return notFound()
  const { data: portfolio } = await sanityFetch({
    query: portfolioQuery,
  })
  if (!pageData) return notFound()
  return <Page pageData={pageData} pageComponent={<Portfolio portfolio={portfolio} />} sidebar={<Sidebar banner={pageData.banner} sidebar={pageData.sidebar} more={<Testimonials testimonials={pageData.testimonials} />} />}></Page>
}

// export async function generateMetadata({ params }: ContextBundle) {
//   const metadataResult = await getMetadata({ slug: "portfolio" })
//   const siteSettings = await getSiteSettings()
//   const metadata = processMetadata(metadataResult, siteSettings, "portfolio")
//   return {
//     ...metadata,
//     title: DEFAULT_SITE_TITLE,
//     openGraph: {
//       ...metadata.openGraph,
//       title: DEFAULT_SITE_TITLE,
//     },
//     alternates: {
//       canonical: BASE_URL,
//     },
//   }
// }
