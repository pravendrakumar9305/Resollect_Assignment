import React from "react";
import { ListGroup, Container, Badge } from "react-bootstrap";

const Notices = () => {
  const notices = [
    { message: "Annual compliance report submission deadline: March 31, 2025.", type: "important", date: "March 1, 2025" },
    { message: "Interest rates revised for Home Loans effective April 1, 2025.", type: "update", date: "March 15, 2025" },
    { message: "System upgrade scheduled for April 10, 2025.", type: "maintenance", date: "March 20, 2025" },
    { message: "New credit score rules applicable from May 1, 2025.", type: "policy", date: "April 5, 2025" },
    { message: "All employees must update their KYC details by June 15, 2025.", type: "mandatory", date: "April 25, 2025" },
  ];

  const badgeColors = {
    important: "danger",
    update: "primary",
    maintenance: "warning",
    policy: "info",
    mandatory: "success",
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-3">Notices</h2>
      <ListGroup>
        {notices.map((notice, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{notice.message}</strong>
              <div className="text-muted" style={{ fontSize: "0.9rem" }}>{notice.date}</div>
            </div>
            <Badge bg={badgeColors[notice.type]}>{notice.type.toUpperCase()}</Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Notices;
