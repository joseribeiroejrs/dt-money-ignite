import React from 'react'
import { Summary } from '../Summary'
import { TransactionTable } from '../TransactionTable'
import { DashboardContainer } from './styles'

export const Dashboard = () => {
  return (
    <DashboardContainer>
      <Summary />
      <TransactionTable />
    </DashboardContainer>
  )
}
