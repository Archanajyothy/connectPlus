import React from 'react';
import AdminSidebar from '../components/admin/AdminSidebar';

const AdminHome = () => {
  return (
    <div className="admin-dashboard">
      <h2>Welcome Admin</h2>
      <div className='side'>
      <AdminSidebar />
      </div>
      <div className="admin-dashboard-content">
        
        <div className="admin-main-content">
          {/* Content of the main section */}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
