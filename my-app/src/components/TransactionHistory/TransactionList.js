import TransactionHistory from "./TransactionHistory";

export default function TransactionList({items}) {
    return <table className="transaction_history">
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