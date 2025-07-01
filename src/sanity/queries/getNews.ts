import { defineQuery } from "next-sanity"
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
