import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
export default function App(){
  return (
    <Container>
      <Paper style={{padding:20, marginTop:20}}>
        <Typography variant="h4">SmartTrack IoT Supply Chain</Typography>
        <Typography variant="body1">Dashboard scaffold (React + MUI)</Typography>
      </Paper>
    </Container>
  )
}
