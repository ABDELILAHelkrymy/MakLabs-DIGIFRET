import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar/Navbar';
import Trajets from './pages/Trajets';
import Garage from './pages/Garage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import FrogotPassword from './pages/FrogotPassword';
import Header from './components/header/Header';

function App() {
  return (
    <> 
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Trajets />} />
          <Route path='/garage' element={<Garage />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<FrogotPassword />} />
        </Routes>
        <Navbar />
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
