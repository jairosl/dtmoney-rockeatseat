import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Transactions } from '../models/Transactions';
import { api } from '../services/api';

interface TransactionsProviderProps {
  children: ReactNode
}

type TransactionsInput = Omit<Transactions, 'id' | 'createdAt' >

interface TransactionsContextsProps {
  transactions: Transactions[],
  createTransactions: (transactions: TransactionsInput) => Promise<void>,
}

const TransactionsContext = createContext<TransactionsContextsProps>(
  {} as TransactionsContextsProps
);

export function TransactionsProvider(
  { children }: TransactionsProviderProps
  ): JSX.Element {

  const [transactions, setTransactions] = useState<Transactions[]>([])

  useEffect(()=> {
    api('/transactions').then(({ data }) => setTransactions(data.transactions));

  }, []);

  async function  createTransactions(newTransactions: TransactionsInput) {
    const response = await api.post('/transactions', {
      ...newTransactions,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction])
    
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransactions}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}