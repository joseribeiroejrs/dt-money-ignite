import { currencyFormat } from "../../helpers/currencyFormat";
import { useTransaction } from "../../hooks/useTransactions";
import { TransactionTableContainer } from "./styles"

export const TransactionTable = () => {
  const { transactions } = useTransaction()

  return (
    <TransactionTableContainer>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {
            transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {
                      transaction.type === "withdraw" ? "- " : "+ "
                    }
                    {
                      currencyFormat(transaction.amount)
                    }
                  </td>
                  <td>{transaction.category}</td>
                  <td>{
                    transaction.createdAt
                      ? new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))
                      : '-'
                  }</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </TransactionTableContainer>
  )
}
