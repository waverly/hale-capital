import { Transaction } from "./Transaction"
import "../../theme/Views/PrivateEquity.scss"

export const Transactions = ({ transactionTypes }: { transactionTypes: Sanity.TransactionType[] | null }) => {
  return (
    <div className="transaction-wrap dl-trans-wrap">
      <h3 className="section-title">Transaction Types</h3>
      {transactionTypes?.map((t, index) => (
        <Transaction key={index} transaction={t} />
      ))}
    </div>
  )
}
