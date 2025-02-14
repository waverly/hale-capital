'use client'

import { useLiveQuery } from '@sanity/preview-kit'
import { Footer } from '@ui'
import { footerQuery } from '@query'

interface IFooterPreview {
  footer: Sanity.FooterQueryResult
}

export const FooterPreview = ({
  footer: initialData,
  ...props
}: IFooterPreview) => {
  const [footer, loading] = useLiveQuery(initialData, footerQuery)
  return loading ? <>Loading…</> : <Footer {...footer!} {...props} />
}
