import { defineQuery } from "next-sanity"
import { imageFragment } from "./fragments"

export const metadataQuery = defineQuery(`
  *[_type == 'page' && metadata.slug.current == $slug][0]{
    metadata {
      ...,
      image ${imageFragment}
    }
  }
`)
