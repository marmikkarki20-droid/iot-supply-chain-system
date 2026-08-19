import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Devices from './pages/Devices'
import DeviceDetail from './pages/DeviceDetail'
import NavBar from './components/NavBar'
import { AuthProvider, useAuth } from './firebase'

function PrivateRoute({children}){
  const { user, initializing } = useAuth()
  if(initializing) return <div>Loading...</div>
  return user ? children : <Navigate to="/login" />
}

export default function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
          <Route path="/devices" element={<PrivateRoute><Devices/></PrivateRoute>} />
          <Route path="/devices/:id" element={<PrivateRoute><DeviceDetail/></PrivateRoute>} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
