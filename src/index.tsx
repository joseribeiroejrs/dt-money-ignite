import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Desenvolvimento de website",
          amount: 12000,
          type: "deposit",
          category: "Trabalho",
          createdAt: new Date()
        },
        {
          id: 2,
          title: "Aluguel",
          amount: 1200,
          type: "withdraw",
          category: "Casa",
          createdAt: new Date()
        }
      ]
    })
  },

  routes() {
    this.namespace = "api";
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody)
      data.createdAt = new Date();
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
