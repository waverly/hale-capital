import { defineQuery } from "next-sanity"
import { imageFragment } from "./fragments"

export const portfolioQuery = defineQuery(`
  *[_type == 'portfolioCompany']{
    metadata {
      ...,
      poster ${imageFragment}
    },
    ...,
    image ${imageFragment},
    logo ${imageFragment},
    blackLogo ${imageFragment}
  }
`)
// team,
// strategyFeatures
// transactionType
