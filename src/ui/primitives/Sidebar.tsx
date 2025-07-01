import { PortableText } from "next-sanity"
import Image from "next/image"
import "@/theme/Views/AboutUs.scss"

interface ISidebar extends Pick<NonNullable<Sanity.PageQueryResult>, "banner" | "sidebar"> {
  more?: React.ReactNode
}

export const Sidebar = ({ banner, sidebar, more }: ISidebar) => {
  return (
    <div className="inner-wrap">
      {!!banner?.image?.asset?.url && <Image src={banner.image.asset.url} alt={banner.alt || ""} width={banner.image.asset.metadata?.dimensions?.width} height={banner.image.asset.metadata?.dimensions?.height} />}
      {!!banner?.caption && <PortableText value={banner.caption} />}
      {!!sidebar && (
        <div className="list-wrap">
          <PortableText value={sidebar} />
          {!!more && (
            <>
              <hr />
              {more}
            </>
          )}
        </div>
      )}
    </div>
  )
}
