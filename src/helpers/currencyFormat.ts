export const currencyFormat = (amount: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: "BRL"
  }).format(amount || 0)
}
