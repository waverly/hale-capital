import { default as PageTemplate, generateMetadata } from "../[slug]/page"

export default async () => await PageTemplate({ params: Promise.resolve({ slug: "portfolio" }) })

const generateMetadataWithSlug = async () => await generateMetadata({ params: Promise.resolve({ slug: "portfolio" }) })
export { generateMetadataWithSlug as generateMetadata }
