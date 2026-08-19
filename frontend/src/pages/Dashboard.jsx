import React from 'react'
import { Container, Typography, Paper } from '@mui/material'
export default function Dashboard(){
  return (
    <Container>
      <Paper style={{padding:20, marginTop:20}}>
        <Typography variant="h4">Dashboard</Typography>
        <Typography>Overview metrics, recent device events, and alerts will show here.</Typography>
      </Paper>
    </Container>
  )
}
