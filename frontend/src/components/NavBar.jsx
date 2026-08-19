import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../firebase'

export default function NavBar(){
  const { user, logout } = useAuth()
  const nav = useNavigate()
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" style={{flex:1}}>SmartTrack</Typography>
        {user ? (
          <>
            <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
            <Button color="inherit" component={Link} to="/devices">Devices</Button>
            <Button color="inherit" onClick={async ()=>{await logout(); nav('/login')}}>Logout</Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/login">Login</Button>
        )}
      </Toolbar>
    </AppBar>
  )
}
