import { PageHeader } from "./"
import { PortableText } from "next-sanity"
import "@theme/Views/AboutUs.scss"

interface IPage {
  pageData: Sanity.PageQueryResult
  sidebar?: React.ReactNode
  children?: React.ReactNode
}

export const Page = ({ pageData, sidebar, children }: IPage) => {
  return !pageData ? null : (
    <div>
      <div className={`${pageData.metadata?.slug.current} section-wrap`}>
        <PageHeader index="01" title={pageData.metadata?.title} />
        <div className="col-wrap">
          <div className="col-left">
            {/* <h3 className="serif description" /> */}
            {pageData.tagline !== null && <PortableText value={pageData.tagline} />}
            {pageData.content !== null && <PortableText value={pageData.content} />}
          </div>

          <div className="col-right">{sidebar}</div>
        </div>
        {children}
      </div>
    </div>
  )
}
