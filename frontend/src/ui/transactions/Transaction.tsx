import { PortableText } from "next-sanity"

export const Transaction = ({ transaction }: { transaction: Sanity.TransactionType | null }) => {
  return !transaction || !transaction.description ? null : (
    <div className="trans-item" onClick={this.handleExpand}>
      <div className="trans-title">
        <h3>{transaction.title}</h3>
        <Expand expanded={this.state.expanded} />
      </div>
      <div
        className={this.state.expanded ? "trans-desc panel expanded" : "trans-desc panel"}
        ref={(div) => {
          this.panel = div
        }}
      >
        <PortableText value={transaction.description} />
      </div>
    </div>
  )
}
