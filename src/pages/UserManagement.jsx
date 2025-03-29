import React, { useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", active: true },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", active: true },
    { id: 3, name: "Michael Johnson", email: "michael@example.com", role: "Editor", active: false },
    { id: 4, name: "Emily Davis", email: "emily@example.com", role: "User", active: true },
    { id: 5, name: "David Brown", email: "david@example.com", role: "Moderator", active: false },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const toggleUserStatus = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, active: !user.active } : user
    ));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm) ||
    user.email.toLowerCase().includes(searchTerm) ||
    user.role.toLowerCase().includes(searchTerm)
  );

  return (
    <Container className="mt-4">
      <h2>User Management</h2>
      <p>Manage users and roles here.</p>

      <Form.Group className="mb-3">
        <Form.Control 
          type="text" 
          placeholder="Search by name, email, or role..." 
          value={searchTerm}
          onChange={handleSearch} 
        />
      </Form.Group>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                {user.active ? (
                  <span className="text-success">Active</span>
                ) : (
                  <span className="text-danger">Inactive</span>
                )}
              </td>
              <td>
                <Button 
                  variant={user.active ? "danger" : "success"} 
                  size="sm" 
                  onClick={() => toggleUserStatus(user.id)}
                >
                  {user.active ? "Deactivate" : "Activate"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserManagement;
