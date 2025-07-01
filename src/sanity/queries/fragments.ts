export const imageFragment = `
{
  ...,
  asset-> {
    metadata {
      lqip,
      blurHash,
      dimensions
    },
    url
  }
}
`

export const fileFragment = `
{
  ...,
  asset-> {
    url
  }
}
`
