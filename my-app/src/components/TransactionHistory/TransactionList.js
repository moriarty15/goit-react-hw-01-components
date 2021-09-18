import TransactionHistory from "./TransactionHistory";
import t from "./transaction.module.css"

export default function TransactionList({items}) {
    return <table className={t.transaction_history}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            {items.map(transaction => (
                <TransactionHistory
                    key={transaction.id}
                    type={transaction.type}
                    amount={transaction.amount}
                    currency={transaction.currency}
                />
            ))}
            </table>
}