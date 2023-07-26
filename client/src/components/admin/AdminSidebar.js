import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h3>Admin Menu</h3>
      <ul>
        <li>
          <Link to="/AdminHome">Dashboard</Link>
        </li>
        <li>
          <Link to="/usermanagement">User Management</Link>
        </li>
        <li>
          <Link to="/postmanagement">Post Management</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
