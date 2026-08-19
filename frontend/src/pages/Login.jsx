import React, { useState } from 'react'
import { Container, TextField, Button, Paper, Typography } from '@mui/material'
import { useAuth } from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const { login, signup } = useAuth()
  const nav = useNavigate()

  return (
    <Container maxWidth="sm">
      <Paper style={{padding:20, marginTop:20}}>
        <Typography variant="h5">Sign in / Sign up</Typography>
        <TextField fullWidth label="Email" value={email} onChange={e=>setEmail(e.target.value)} margin="normal" />
        <TextField fullWidth label="Password" type="password" value={pass} onChange={e=>setPass(e.target.value)} margin="normal" />
        <div style={{display:'flex', gap:10, marginTop:10}}>
          <Button variant="contained" onClick={async ()=>{ await login(email,pass); nav('/dashboard') }}>Sign in</Button>
          <Button variant="outlined" onClick={async ()=>{ await signup(email,pass); nav('/dashboard') }}>Sign up</Button>
        </div>
      </Paper>
    </Container>
  )
}
