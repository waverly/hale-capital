import { defineQuery } from "groq"
import { fetchFromSanity } from "@lib"
import { imageFragment, fileFragment } from "./fragments"

export const newsQuery = defineQuery(`
  *[_type == 'newsEntry'] | order(date desc){
    _id,
    metadata {
      ...,
      poster ${imageFragment}
    },
    date,
    excerpt[],
    link,
    pressRelease ${fileFragment}
  }
`)

export const getNews = async (draftMode?: boolean) =>
  await fetchFromSanity<Sanity.NewsQueryResult>(newsQuery, {
    draftMode,
  })
