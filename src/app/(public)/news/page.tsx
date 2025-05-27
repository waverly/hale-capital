import { sanityFetch } from "@/sanity/lib/live"
import { notFound } from "next/navigation"
import { NewsIndex } from "@/ui"
import { newsQuery } from "@/sanity/queries"

export default async function NewsPage() {
  // todo: this should return news index
  const { data } = await sanityFetch({
    query: newsQuery,
  })
  if (!data) return notFound()
  return <NewsIndex newsData={data} />
}
