import { Routes } from 'react-router-dom';
import SideBar from './components/sidebar/sidebar';
import AllRoutes from './routes/routes';
import './App.css'
import NavBar from './components/navbar/navbar';


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

export default App;