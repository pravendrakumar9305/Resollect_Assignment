import React, { useState } from "react";
import { Table, Container, Form, Button, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState("");
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

  const filteredLoans = loanData.filter(
    (loan) =>
      loan.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loan.borrower.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="d-flex flex-wrap mb-2">
        <Button variant="light" className="me-2 mb-2">All</Button>
        <Button variant="light" className="me-2 mb-2">Pre Sarfaesi</Button>
        <Button variant="light" className="me-2 mb-2">13(3) Responses</Button>
        <Button variant="light" className="me-2 mb-2">Symbolic Possession</Button>
        <Button variant="light" className="me-2 mb-2">DM Order</Button>
        <Button variant="light" className="me-2 mb-2">Physical Possessions</Button>
        <Button variant="light" className="mb-2">Auctions</Button>
      </div>
      <Container className="mt-4">
        <Row className="mb-3 align-items-center">
          <Col xs={12} md={4} className="mb-2 mb-md-0">
            <Form.Control
              type="text"
              placeholder="Search Loan Number or Borrower"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col xs={12} md={8} className="d-flex justify-content-md-end gap-2 flex-wrap">
            <Button variant="light">Select Columns</Button>
            <Button variant="light">More Filters</Button>
          </Col>
        </Row>
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
            {filteredLoans.map((loan, index) => (
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
    </>
  );
};

export default Portfolio;