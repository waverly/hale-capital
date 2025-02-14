import { cdnUrl } from '@lib'
import { processUrl } from './processUrl'
import type { Metadata } from 'next'
import { BASE_URL } from '@const'

export const processMetadata = (
  data: Sanity.MetadataQueryResult,
  siteSettings: Sanity.SiteSettingsQueryResult,
  _type: string,
): Metadata => {
  const metadata = data?.metadata
  const url = processUrl(_type, metadata?.slug?.current)

  const imageUrl =
    metadata?.poster?.asset?.url || siteSettings?.shareImage?.asset?.url

  const title = [
    metadata?.title,
    siteSettings?.title || `Michael Freimuth`,
  ].join(' ✗ ')

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description: metadata?.description || siteSettings?.description,
    openGraph: {
      type: 'website',
      url,
      title,
      description:
        metadata?.description || siteSettings?.description || undefined,
      images: imageUrl
        ? cdnUrl(imageUrl)?.replace('{{transforms}}/', '')
        : undefined,
    },
    robots: {
      index: !metadata?.noIndex,
    },
    alternates: {
      canonical: url,
    },
  }
}
