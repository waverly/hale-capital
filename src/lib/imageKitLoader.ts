interface IImageKitLoader {
  src: string
  width: number
  quality?: number
  seoFilename?: string
}

interface ImageKitLoaderOptions {
  ratio: string // ex: 4-3 (4:3 classic TV resolution)
}

export const cdnUrl = (src?: string) => {
  if (!src) return undefined
  const isImage = src.includes('images')
  const sourceURL = isImage
    ? `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}`
    : `https://cdn.sanity.io/videos/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}`
  const newUrl = isImage
    ? `https://ik.imagekit.io/${process.env.NEXT_PUBLIC_IMAGEKIT_ID}/{{transforms}}`
    : `https://ik.imagekit.io/${process.env.NEXT_PUBLIC_IMAGEKIT_ID}/files`
  return src.replace(sourceURL, newUrl)
}

export const imageKitLoader = (
  { src, width, quality, seoFilename, ...rest }: IImageKitLoader,
  options?: ImageKitLoaderOptions,
) => {
  const fixedFilename = cdnUrl(src) || src
  const path = injectFriendlyFilename(fixedFilename, seoFilename)

  // https://ik.imagekit.io/mkzvechhl/8346bff14527332a9c5a56c6f2e77d930e00008e.png
  const transforms = [`w-${width}`, 'f-webp']
  if (quality) {
    transforms.push(`q-${quality}`)
  }
  if (options?.ratio) {
    transforms.push(`ar-${options.ratio}`)
  }
  return path.replace('{{transforms}}', `tr:${transforms.join(',')}`)
}

const injectFriendlyFilename = (path: string, friendlyFilename?: string) => {
  if (!friendlyFilename) return path
  const [protocol, _, domain, projectId, sourceFilename] = path.split('/')
  const [filename, extension] = sourceFilename.split('.')
  return [
    protocol,
    _,
    domain,
    projectId,
    'ik-seo',
    filename,
    `${friendlyFilename}.${extension}`,
  ].join('/')
}
