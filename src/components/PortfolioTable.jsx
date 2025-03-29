import React from 'react';
import { Table } from 'react-bootstrap';

const PortfolioTable = () => {
  const loans = [
    { id: 'L28UJ3247', type: 'Home Loan', borrower: 'Vedika Sachar', amount: '₹1,934,068', region: 'West' },
    { id: 'L28UJ3243', type: 'Car Loan', borrower: 'Hrishita Agarwal', amount: '₹4,537,689', region: 'East' },
    { id: 'L28UJ3259', type: 'Car Loan', borrower: 'Priyansh Chanda', amount: '₹2,687,172', region: 'West' },
  ];

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Loan No.</th>
          <th>Loan Type</th>
          <th>Borrower</th>
          <th>Sanction Amount</th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody>
        {loans.map((loan) => (
          <tr key={loan.id}>
            <td>{loan.id}</td>
            <td>{loan.type}</td>
            <td>{loan.borrower}</td>
            <td>{loan.amount}</td>
            <td>{loan.region}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PortfolioTable;
