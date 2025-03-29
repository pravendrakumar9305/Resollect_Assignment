import React from "react";
import { Table, Container } from "react-bootstrap";

const Dashboard = () => {
  const loanData = [
    { id: "L28JU3247", type: "Home Loan", borrower: "Vedika Sachar", amount: 1934068, region: "West", status: "Active" },
    { id: "L28JU3243", type: "Car Loan", borrower: "Hrishita Agrawal", amount: 1842143, region: "North", status: "Pending" },
    { id: "L28JU2529", type: "Car Loan", borrower: "Priyansh Soman", amount: 4537889, region: "East", status: "Approved" },
    { id: "L28JU3248", type: "Home Loan", borrower: "Priyansh Chanda", amount: 288712, region: "West", status: "Active" },
    { id: "L28JU3260", type: "Home Loan", borrower: "Hrishita Sen", amount: 4456808, region: "North", status: "Pending" },
    { id: "L28JU3265", type: "Personal Loan", borrower: "Vivan Virk", amount: 3863514, region: "West", status: "Approved" },
    { id: "L28JU3264", type: "Car Loan", borrower: "Nirvaan Khatri", amount: 1256883, region: "South", status: "Active" },
    { id: "L28JU3266", type: "Personal Loan", borrower: "Nirvi Sahi", amount: 2687368, region: "East", status: "Pending" },
    { id: "L28JU3267", type: "Personal Loan", borrower: "Samaira Jain", amount: 3617146, region: "South", status: "Approved" },
    { id: "L28JU3269", type: "Personal Loan", borrower: "Aradhya Jayraman", amount: 1383439, region: "North", status: "Active" },
  ];

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Dashboard</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Loan ID</th>
            <th>Type</th>
            <th>Borrower</th>
            <th>Amount</th>
            <th>Region</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loanData.map((loan, index) => (
            <tr key={index}>
              <td>{loan.id}</td>
              <td>{loan.type}</td>
              <td>{loan.borrower}</td>
              <td>₹ {loan.amount.toLocaleString()}</td>
              <td>{loan.region}</td>
              <td>{loan.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
