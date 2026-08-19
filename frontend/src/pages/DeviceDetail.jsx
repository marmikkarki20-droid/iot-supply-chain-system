import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Paper, Typography } from '@mui/material'
export default function DeviceDetail(){
  const { id } = useParams()
  return (
    <Container>
      <Paper style={{padding:20, marginTop:20}}>
        <Typography variant="h5">Device: {id}</Typography>
        <Typography>Realtime telemetry and event list will appear here.</Typography>
      </Paper>
    </Container>
  )
}
