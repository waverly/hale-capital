'use client'

import { LiveQueryProvider } from '@sanity/preview-kit'
import { sanityClient } from './'
import { SANITY_PREVIEW_REFRESH_INTERVAL } from '@const'
import type { PropsWithChildren } from 'react'

export const PreviewProvider = ({ children }: PropsWithChildren) => {
  const token = process.env.NEXT_PUBLIC_SANITY_SECRET_TOKEN
  if (!token) throw new TypeError('Missing token')
  return (
    <LiveQueryProvider
      client={sanityClient}
      token={token}
      logger={console}
      refreshInterval={SANITY_PREVIEW_REFRESH_INTERVAL}
    >
      {children}
    </LiveQueryProvider>
  )
}
