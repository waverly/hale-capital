import { PortableText } from "next-sanity"
import Image from "next/image"
import "@theme/Views/AboutUs.scss"

export const Sidebar = ({ banner, sidebar }: Pick<NonNullable<Sanity.PageQueryResult>, "banner" | "sidebar">) => {
  return (
    <div className="inner-wrap">
      {!!banner?.image?.asset?.url && <Image src={banner.image.asset.url} alt={banner.alt || ""} width={banner.image.asset.metadata?.dimensions?.width} height={banner.image.asset.metadata?.dimensions?.height} />}
      {!!banner?.caption && <PortableText value={banner.caption} />}
      {!!sidebar && (
        <div className="list-wrap">
          <PortableText value={sidebar} />
        </div>
      )}
    </div>
  )
}
