import { internalGroqTypeReferenceTo } from '../../types/sanity-groq'

export function resolveReference<T>(obj?: {
  _type: 'reference'
  [internalGroqTypeReferenceTo]?: T
}) {
  if (obj?._type === 'reference')
    throw new Error('Asset reference has not been expanded!')
  if (!obj) return undefined
  return obj as unknown as Extract<Sanity.AllSanitySchemaTypes, { _type: T }>
}
