// import { processMetadata } from "@/lib"
import { sanityFetch } from "../../sanity/lib/live"
// import { Page } from "@ui"
// import { BASE_URL, DEFAULT_SITE_TITLE } from "@/const"
import { pageQuery } from "@/sanity/queries"
import { notFound } from "next/navigation"
import { Home } from "@/ui"
import { PageQueryResult } from "../../types/sanity"

export default async function HomePage() {
  const { data } = await sanityFetch({
    query: pageQuery,
    params: { slug: "home" },
  })
  if (!data) return notFound()
  return <Home pageData={data as PageQueryResult} />
}

// export async function generateMetadata() {
//   const metadataResult = await getMetadata({ slug: "home" })
//   const siteSettings = await getSiteSettings()
//   const metadata = processMetadata(metadataResult, siteSettings, "page")
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
