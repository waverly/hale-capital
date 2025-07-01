import { defineDocuments, defineLocations, PresentationPluginOptions } from "sanity/presentation"

export const resolve: PresentationPluginOptions["resolve"] = {
  mainDocuments: defineDocuments([
    {
      route: "/",
      filter: `_type == "page" && metadata.slug.current == "home"`,
    },
  ]),
  locations: {
    siteSettings: defineLocations({
      message: "This document is used on all pages",
      tone: "caution",
    }),
  },
}
