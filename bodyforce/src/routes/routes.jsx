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
    <Suspense fallback={<>Loading...</>}>
      
        <Routes>
        <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/home" element={<AdminDash />} />
          <Route exact path="/adminprofile" element={<Adminprofile />} />
          <Route exact path="/registration" element={<RegisterParticipant />} />
          <Route exact path="/plan" element={<Plan />} />
          <Route exact path="/subscription" element={<SubscriptionsReport />} />
          <Route exact path="/report" element={<SalesReport />} />
          <Route exact path="/inventory" element={<Inventory />} />
          <Route exact path="/inventory/add" element={<Addinventory />} />
          <Route exact path="/viewmembres" element={<ActiveMembers />} />
          <Route exact path="/coaches" element={<Coachess />} />
          <Route exact path="/admin/register" element={<RegisterAdminForm />} />
        </Routes>
    
    </Suspense>
  );
}

export default AllRoutes;