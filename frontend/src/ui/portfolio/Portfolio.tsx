import { PortableText } from "next-sanity"
import "@theme/Views/Portfolio.scss"

export const Portfolio = ({ portfolio }: { portfolio: Sanity.PortfolioQueryResult }) => (
  <ul className="portfolio-list">
    {portfolio.map((item) => (
      <li key={item._id} className="portfolio-item">
        <h3>{item.metadata?.title}</h3>
        {item.blackLogo?.asset?.url && <img src={item.blackLogo.asset.url} />}
        {item.description && <PortableText value={item.description} />}
      </li>
    ))}
  </ul>
)
