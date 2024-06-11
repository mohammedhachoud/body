import React from 'react';
import UserSideBar from '../components/sidebar/usersidbar';
import NavBar from '../components/navbar/navbar';

const UserLayout = ({ children }) => (
  <div className="user-layout">
    <UserSideBar />
    <div className="content">
      <NavBar />
      {children}
    </div>
  </div>
);

export default UserLayout;