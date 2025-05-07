"use client"

import { useState } from "react"
import { PortableText } from "next-sanity"
import { Expand } from "./Expand"
import "../../theme/Components/Transaction.scss"

export const Transaction = ({ transaction }: { transaction: Sanity.TransactionType | null }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="trans-item" onClick={() => setExpanded(!expanded)}>
      <div className="trans-title">
        <h3>{transaction?.title || ""}</h3>
        {!!transaction?.description && <Expand expanded={expanded} />}
      </div>
      {!!transaction?.description && (
        <div className={expanded ? "trans-desc panel expanded" : "trans-desc panel"}>
          <PortableText value={transaction.description} />
        </div>
      )}
    </div>
  )
}
