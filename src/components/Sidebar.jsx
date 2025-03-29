import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"; // Ensure this file exists

const Sidebar = () => {
  return (
    <div className="sidebar">
       <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <span
              className="d-inline-flex justify-content-center align-items-center rounded-circle bg-dark text-white "
              style={{
                width: "40px",
                height: "40px",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              R
            </span>
            <span className="ms-2 text-primary">esollect</span>
          </a>
        </div>
      <ul>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/notifications">Notifications</NavLink></li>
        <li><NavLink to="/notices">Notices</NavLink></li>
        <li><NavLink to="/auction">Auction</NavLink></li>
        <li><NavLink to="/data-upload">Data Upload</NavLink></li>
        <li><NavLink to="/control-panel">Control Panel</NavLink></li>
        <li><NavLink to="/user-management">User Management</NavLink></li>
        <li><NavLink to="/permissions">Permissions</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
