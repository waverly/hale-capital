import { sanityFetch } from "@/sanity/lib/live"
import { pageQuery } from "@/sanity/queries"
import { notFound } from "next/navigation"
import { Page, Team, Sidebar, Transactions } from "@/ui"

export type ContextBundle = { params: Promise<{ slug: string }> }

export default async function BasicPage({ params }: ContextBundle) {
  const { slug } = await params
  const { data } = await sanityFetch({
    query: pageQuery,
    params: { slug },
  })
  if (!data) return notFound()
  return (
    <Page pageData={data} sidebar={<Sidebar banner={data.banner} sidebar={data.sidebar} />}>
      {!!data.teamTagline && !!data.team && <Team teamTagline={data.teamTagline} team={data.team} />}
      {!!data.transactionTypes && <Transactions transactionTypes={data.transactionTypes} />}
    </Page>
  )
}

// export async function generateMetadata({ params }: ContextBundle) {
//   const { slug } = await params
//   const { data } = await sanityFetch({
//     query: pageQuery,
//     params: { slug },
//   })
//   if (!data?.metadata) throw new Error("page metadata not found")
//   const metadata = processMetadata(data.metadata, "page")
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
