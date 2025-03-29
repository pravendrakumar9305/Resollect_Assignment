import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import Notifications from "./pages/Notifications";
import Notices from "./pages/Notices";
import Auction from "./pages/Auction";
import DataUpload from "./pages/DataUpload";
import ControlPanel from "./pages/ControlPanel";
import UserManagement from "./pages/UserManagement";
import Permissions from "./pages/Permissions";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "260px", padding: "20px", width: "100%" }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/auction" element={<Auction />} />
            <Route path="/data-upload" element={<DataUpload />} />
            <Route path="/control-panel" element={<ControlPanel />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/permissions" element={<Permissions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
