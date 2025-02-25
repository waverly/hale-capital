import { Transaction } from "./Transaction"

export const Transactions = ({ transactionTypes }: { transactionTypes: Sanity.TransactionType[] | null }) => {
  return !transactionTypes ? null : (
    <div className="transaction-wrap dl-trans-wrap">
      <h3 className="section-title">Transaction Types</h3>
      {transactionTypes.map((t, index) => (
        <Transaction noexpand key={index} data={t} />
      ))}
    </div>
  )
}
