import { defineQuery } from "groq"
import { fetchFromSanity } from "@lib"
import { type SlugParams } from "@types"
import { imageFragment, fileFragment } from "./fragments"

export const pageQuery = defineQuery(`
  *[_type == 'page' && metadata.slug.current == $slug][0]{
    metadata {
      ...,
      poster ${imageFragment}
    },
    content,
    sidebar,
    banner {
      alt,
      caption,
      image ${imageFragment}
    },
    carousel[] {
      ...,
      image ${imageFragment},
      video ${fileFragment}
    },
    teamTagline,
    team[] -> {
      _id,
      name,
      jobTitle,
      headShot ${imageFragment},
      bio,
      role
    },
    testimonials[],
    address,
    phoneNumber,
    email,
    transactionTypes
  }
`)
// team,
// strategyFeatures
// transactionType

export const getPage = async (params: SlugParams, draftMode?: boolean) =>
  await fetchFromSanity<Sanity.PageQueryResult>(pageQuery, {
    params,
    draftMode,
  })
