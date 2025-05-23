import { defineQuery } from "groq"
import { fetchFromSanity } from "@lib"
import { imageFragment, fileFragment } from "./fragments"

export const portfolioQuery = defineQuery(`
  *[_type == 'portfolioCompany']{
    metadata {
      ...,
      poster ${imageFragment}
    },
    ...,
    image ${imageFragment}
  }
`)
// team,
// strategyFeatures
// transactionType

export const getPortfolio = async (draftMode?: boolean) =>
  await fetchFromSanity<Sanity.PortfolioQueryResult>(portfolioQuery, {
    draftMode,
  })
