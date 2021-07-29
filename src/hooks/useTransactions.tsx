import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export type TransactionType = 'deposit' | 'withdraw';

export const DEPOSIT: TransactionType = 'deposit';
export const WITHDRAW: TransactionType = 'withdraw';

interface Transaction {
  id?: number;
  title: string;
  type: TransactionType;
  amount: number;
  category: string;
  createdAt: Date;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export const TransactionsProvider = (props: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    getTransactions()
  }, [])

  const getTransactions = () => {
    api.get('transactions')
      .then(response => {
        console.log(response.data.transactions)
        setTransactions(response.data.transactions)
      })
  }

  const createTransaction = async (transaction: TransactionInput) => {
    await api.post('/transactions', transaction);
    getTransactions()
  }

  return <TransactionsContext.Provider value={{ transactions, createTransaction }}>{props.children}</TransactionsContext.Provider>
}

export const useTransaction = () => {
  const context = useContext(TransactionsContext)
  return context
}