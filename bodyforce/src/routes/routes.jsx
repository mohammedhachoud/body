import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import AdminDash from '../pages/admindash/admindash';
import Adminprofile from '../pages/adminprofile/adminprofile';
import RegisterParticipant from '../pages/registration/register';
import Plan from '../pages/plan/plan';
import SubscriptionsReport from '../pages/subscriptionsreport.jsx/subscriptionreport';
import Inventory from '../pages/inventory/inventory';
import Addinventory from '../pages/inventory/addinventory/addinventory';
import ActiveMembers from '../pages/membres/activemembres';
import Coaches from '../components/coaches/coaches';
import Coachess from '../pages/coaches/coaches';
import RegisterAdminForm from '../pages/registration_admin/register';
import SalesReport from '../pages/report/report';
import LoginPage from '../pages/loginscreen/home';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminDash />} />
      <Route path="/home" element={<AdminDash />} />
      <Route path="/adminprofile" element={<Adminprofile />} />
      <Route path="/registration" element={<RegisterParticipant />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/subscription" element={<SubscriptionsReport />} />
      <Route path="/report" element={<SalesReport />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/inventory/add" element={<Addinventory />} />
      <Route path="/viewmembres" element={<ActiveMembers />} />
      <Route path="/coaches" element={<Coachess />} />
      <Route path="/admin/register" element={<RegisterAdminForm />} />
    </Routes>
  );
}


export default AllRoutes;