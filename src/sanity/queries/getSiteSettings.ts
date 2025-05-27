import { defineQuery } from "next-sanity"
import { imageFragment } from "./fragments"

export const siteSettingsQuery = defineQuery(`
  *[_type == 'siteSettings'][0]{
    title,
    description,
    shareImage ${imageFragment}
  }
`)
