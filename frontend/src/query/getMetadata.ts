import { defineQuery } from "groq"
import { fetchFromSanity } from "@lib"
import { type SlugParams } from "@types"
import { imageFragment } from "./fragments"

export const metadataQuery = defineQuery(`
  *[_type == 'page' && metadata.slug.current == $slug][0]{
    metadata {
      ...,
      poster ${imageFragment}
    }
  }
`)

export const getMetadata = async (params: SlugParams) =>
  await fetchFromSanity<Sanity.MetadataQueryResult>(metadataQuery, {
    params,
  })
