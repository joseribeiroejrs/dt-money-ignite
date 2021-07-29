import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { currencyFormat } from '../../helpers/currencyFormat'
import { DEPOSIT, useTransaction } from '../../hooks/useTransactions'
import { SummaryContainer } from "./styles"

export const Summary = () => {
  const { transactions } = useTransaction()

  const initialSummary = {
    deposit: 0,
    withdraw: 0,
    total: 0
  }

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === DEPOSIT) {
      acc.deposit += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraw += transaction.amount
      acc.total -= transaction.amount
    }
    return acc
  }, initialSummary)

  return (
    <SummaryContainer>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>{currencyFormat(summary.deposit)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Outcome" />
        </header>
        <strong>{currencyFormat(summary.withdraw)}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{currencyFormat(summary.total)}</strong>
      </div>
    </SummaryContainer>
  )
}