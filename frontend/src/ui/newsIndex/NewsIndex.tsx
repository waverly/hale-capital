import { PageHeader } from "../page"
import { PortableText } from "next-sanity"
import "@theme/Views/News.scss"
import "@theme/Components/NewsItem.scss"
import { useMemo } from "react"
import { uniq } from "lodash-es"

interface IPage {
  newsData: Sanity.NewsQueryResult
  children?: React.ReactNode
}

declare type Member<A> = A extends readonly (infer T)[] ? T : never

export const NewsIndex = ({ newsData, children }: IPage) => {
  if (!newsData) return null

  const grouped = useMemo(() => {
    return newsData.reduce((acc, newsItem) => {
      const year = newsItem.date!.split("-")[0]!
      if (!acc.hasOwnProperty(year)) {
        return {
          ...acc,
          [year]: [newsItem],
        }
      } else {
        return {
          ...acc,
          [year]: [...acc[year], newsItem],
        }
      }
    }, {} as Record<string, Sanity.NewsQueryResult>)
  }, [newsData])

  return (
    <div>
      <div className={`news-wrap section-wrap`}>
        <PageHeader index="01" title="News" />
        <div className="col-wrap">
          <div className="col-left">
            {Object.keys(grouped)
              .reverse()
              .map((year) => (
                <ul key={year} className="item-wrap">
                  <h3 id={`year-${year}`}>{year}</h3>
                  <ul className="news-items">
                    {grouped[year].map((newsItem) => (
                      <li key={newsItem._id} className="news-item">
                        <div className="date">{newsItem.date}</div>
                        <h3 className="title">{newsItem.metadata?.title}</h3>
                        {!!newsItem.excerpt && (
                          <div className="excerpt">
                            <PortableText value={newsItem.excerpt} />
                          </div>
                        )}
                        {!!newsItem.pressRelease?.asset?.url && (
                          <a className="read-more" href={newsItem.pressRelease.asset.url}>
                            Read more
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </ul>
              ))}
          </div>
          <div className="col-right">
            <div className="inner-wrap">
              <div className="list-wrap news-header">
                {Object.keys(grouped)
                  .reverse()
                  .map((year) => (
                    <div key={`year-${year}`} className="year-index-item">
                      <a href={`#year-${year}`} target="_blank">
                        {year}
                      </a>
                      <span>/</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
