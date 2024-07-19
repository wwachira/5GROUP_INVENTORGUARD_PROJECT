/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// TransactionList.jsx
import React from 'react';
import { Table, Button } from 'react-bootstrap';

function TransactionList({
  transactions,
  onAddTransactionClick,
  onEditTransactionClick,
  onDeleteTransactionClick,
}) {
  return (
    <div className="container-fluid py-4">
      <h2 className="mb-4">Transactions</h2>
      <Button variant="primary" className="mb-3" onClick={onAddTransactionClick}>
        Add Transaction
      </Button>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Product ID</th>
            <th>Date</th>
            <th>Quantity</th>
            <th>Total Amount</th>
            <th>Transaction Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.user_id}</td>
              <td>{transaction.product_id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.quantity}</td>
              <td>{transaction.total_price}</td>
              <td>{transaction.type}</td>
              <td>
                <Button
                  variant="success"
                  className="mr-2"
                  onClick={() => onEditTransactionClick(transaction)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => onDeleteTransactionClick(transaction.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TransactionList;