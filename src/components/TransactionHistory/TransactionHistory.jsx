import css from './TransactionHistory.module.css'

export default function TransactionHistory({transactions}) {
  return (<table className={css.table}>
      <thead className={css.tableTitle}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
      </tr>
      </thead>
    <tbody>
      {transactions.map(({id, type, amount, currency}) => {
        return <tr key={id} className={css.trTitle}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      })}
    </tbody>
  </table>
  )
}