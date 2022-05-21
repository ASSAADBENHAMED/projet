
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profil from './pages/Profil';
import ProtectRouter from './components/ProtectRouter';
import AdminProdectRouter from './components/AdminProtectRoutre';
import AdminDashboard from './pages/AdminDashboard';

// import { Router } from 'express';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Signup' element={<Signup/>} />
    <Route path='/Login' element={<Login/>} />
   
    <Route path='/Contact' element={<Contact/>} />
    <Route element={<ProtectRouter/>}>
    <Route path='/Profil' element={<Profil />} />
    {/**/}
    </Route>
    <Route element={<AdminProdectRouter />}>
    <Route path='/Dashboard' element={<AdminDashboard />} />
    </Route>
    </Routes>



   
    </div>
  );
}

export default App;
