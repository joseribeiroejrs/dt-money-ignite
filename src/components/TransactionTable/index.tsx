import { useEffect, useState } from "react"
import { api } from "../../services/api";
import { TransactionTableContainer } from "./styles"

interface Transaction {
  id?: number;
  title: string;
  type: 'deposit' | 'withdraw';
  amount: number;
  category: string;
  createdAt: Date;
}

export const TransactionTable = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    api.get('transactions')
      .then(response => {
        console.log(response.data.transactions)
        setTransactions(response.data.transactions)
      })
  }, [])
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
                      new Intl.NumberFormat('pt-BR', {
                        style: "currency",
                        currency: "BRL"
                      }).format(transaction.amount)
                    }
                  </td>
                  <td>{transaction.category}</td>
                  <td>{
                    new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))
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
