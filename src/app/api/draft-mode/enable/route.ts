import { client } from "@/sanity/lib/client"
import { defineEnableDraftMode } from "next-sanity/draft-mode"

const token = process.env.SANITY_SECRET_TOKEN

if (!token) {
  throw new Error("Missing SANITY_SECRET_TOKEN")
}

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token }),
})
