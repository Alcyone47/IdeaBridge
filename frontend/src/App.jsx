import { useState } from 'react'
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import CreateIdea from './pages/ideas/CreateIdea';
import Home from './pages/Home';
import InvestorDashboard from './pages/dashboards/InvestorDashboard';
import EntrepreneurDashboard from './pages/dashboards/EntrepreneurDashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from './routes/ProtectedRoutes';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path="/dashboard/entrepreneur" element={
          <ProtectedRoute allowedRoles={["entrepreneur"]}>
            <EntrepreneurDashboard />
          </ProtectedRoute>
        }/>
        <Route path="/dashboard/investor" element={
          <ProtectedRoute allowedRoles={["investor"]}>
            <InvestorDashboard />
          </ProtectedRoute>
        }/>
        <Route
          path="/dashboard/entrepreneur/create" element={
            <ProtectedRoute allowedRoles={["entrepreneur"]}>
              <CreateIdea />
            </ProtectedRoute>
          }
        />
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App