import React from 'react';
import AdminSideBar from '../components/sidebar/sidebar';
import NavBar from '../components/navbar/navbar';

const AdminLayout = ({ children }) => (
  <div className="admin-layout">
    <AdminSideBar />
    <div className="content">
      <NavBar />
      {children}
    </div>
  </div>
);

export default AdminLayout;