import { getNews } from "@query"
import { notFound } from "next/navigation"
import { NewsIndex } from "@ui"

export default async function NewsPage() {
  // todo: this should return news index
  const newsData = await getNews()
  if (!newsData) return notFound()
  return <NewsIndex newsData={newsData} />
}
