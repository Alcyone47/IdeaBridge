import { useState } from 'react'
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import Home from './pages/Home';
import InvestorDashboard from './pages/dashboards/InvestorDashboard';
import FounderDashboard from './pages/dashboards/FounderDashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/dashboard/investor' element={<InvestorDashboard />} />
        <Route path='/dashboard/founder' element={<FounderDashboard />} />
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App