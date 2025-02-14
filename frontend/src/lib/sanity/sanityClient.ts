import { createClient } from 'next-sanity'

const dev =
  process.env.NODE_ENV === 'development' ||
  process.env.ENABLE_PREVIEW === 'true'

export default createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-05-01',
  useCdn: !dev,
  stega: {
    enabled: false,
    studioUrl: dev
      ? 'http://localhost:3333'
      : process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
})
