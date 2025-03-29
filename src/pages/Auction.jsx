import React from "react";
import { Table, Container } from "react-bootstrap";

const Auction = () => {
  const auctionItems = [
    { id: "AUC1001", item: "Foreclosed Property", location: "Mumbai", basePrice: 5000000, status: "Open" },
    { id: "AUC1002", item: "Seized Vehicle", location: "Delhi", basePrice: 800000, status: "Closed" },
    { id: "AUC1003", item: "Commercial Property", location: "Bangalore", basePrice: 12000000, status: "Open" },
    { id: "AUC1004", item: "Luxury Car", location: "Chennai", basePrice: 1500000, status: "Upcoming" },
    { id: "AUC1005", item: "Residential Plot", location: "Hyderabad", basePrice: 4000000, status: "Open" },
  ];

  return (
    <Container className="mt-4">
      <h2>Auctions</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Auction ID</th>
            <th>Item</th>
            <th>Location</th>
            <th>Base Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {auctionItems.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.item}</td>
              <td>{item.location}</td>
              <td>₹ {item.basePrice.toLocaleString()}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Auction;
