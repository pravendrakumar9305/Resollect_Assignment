import React from "react";
import { ListGroup, Container, Badge } from "react-bootstrap";

const Notification = () => {
  const notifications = [
    { message: "New loan application received.", type: "info" },
    { message: "Loan #L28JU3247 is approved.", type: "success" },
    { message: "User Hrishita Agrawal updated profile.", type: "warning" },
    { message: "Loan #L28JU3260 is pending verification.", type: "danger" },
    { message: "System maintenance scheduled at 2 AM.", type: "secondary" },
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-3">Notifications</h2>
      <ListGroup>
        {notifications.map((note, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            {note.message}
            <Badge bg={note.type}>{note.type.toUpperCase()}</Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Notification;
