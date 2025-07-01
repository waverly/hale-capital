import {resolveReference} from './'
import type {Metadata} from 'next'

export const processMetadata = (metadata: Metadata, _type: string): Metadata => {
  // const url = processUrl(_type, metadata?.slug?.current)
  // const resolvedPoster = resolveReference(metadata?.poster?.asset) as Sanity.SanityImageAsset
  return {
    // metadataBase: new URL(BASE_URL),
    // title: [metadata?.title, DEFAULT_SITE_TITLE].join(' ✗ '),
    description: metadata?.description,
    openGraph: {
      type: 'website',
      // url,
      // title: [metadata?.title, DEFAULT_SITE_TITLE].join(' ✗ '),
      description: metadata?.description || '',
      // images: resolvedPoster?.url ? cdnUrl(resolvedPoster.url) : undefined,
    },
    alternates: {
      // canonical: url,
    },
  }
}
