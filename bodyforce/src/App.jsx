import { Routes } from 'react-router-dom';
import SideBar from './components/sidebar/sidebar';
import AllRoutes from './routes/routes';
import './App.css'
import NavBar from './components/navbar/navbar';

/*
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <SideBar />
      </div>
      
      <div className="content">
        <div className="navbar">
        <NavBar/>
        </div>
        <div className='routes'>
          <AllRoutes />
        </div>
          
      </div>
    </div>
  );
}

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import LoginPage from './pages/loginscreen/home';

function AppContent() {
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';

  return (
    <div className="App">
      {!isLoginPage && (
        <div className="sidebar">
          <SideBar />
        </div>
      )}

      <div className="content">
        {!isLoginPage && (
          <div className="navbar">
            <NavBar />
          </div>
        )}
        <div className='routes'>
          <AllRoutes />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;
