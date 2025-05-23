"use client"
import { PortableText } from "next-sanity"
import "@theme/Views/Portfolio.scss"
import { uniq } from "lodash-es"
import { useState, useMemo } from "react"
import { camelCaseToWords } from "@lib"

export const Portfolio = ({ portfolio }: { portfolio: Sanity.PortfolioQueryResult }) => {
  const types = uniq(portfolio.map((item) => item.type))

  const [type, setType] = useState("growthEquity")
  const [current, setCurrent] = useState("current")

  const filteredPortfolio = useMemo(
    () =>
      portfolio.filter((item) => {
        return item.type === type && item.current === current
      }),
    [current, type]
  )

  return (
    <>
      <div className="portfolio-header">
        <hr />
        <ul className="portfolio-filter">
          {types
            .filter((a) => a !== undefined)
            .map((typeOption) => (
              <li key={typeOption} className={typeOption === type ? "active" : ""}>
                <button onClick={() => setType(typeOption)}>{camelCaseToWords(typeOption)}</button>
              </li>
            ))}
        </ul>
        <ul className="portfolio-filter">
          <li className={current === "current" ? "active" : ""}>
            <button onClick={() => setCurrent("current")}>Current</button>
          </li>
          <li className={current === "current" ? "" : "active"}>
            <button onClick={() => setCurrent("past")}>Past</button>
          </li>
        </ul>
      </div>
      <ul className="portfolio-list">
        {filteredPortfolio.map((item) => (
          <li key={item._id} className="portfolio-item">
            <h3>{item.metadata?.title}</h3>
            {item.blackLogo?.asset?.url && <img src={item.blackLogo.asset.url} />}
            {item.description && <PortableText value={item.description} />}
          </li>
        ))}
      </ul>
    </>
  )
}
