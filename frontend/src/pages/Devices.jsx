import React from 'react'
import { Container, List, ListItem, ListItemText, Paper } from '@mui/material'
import { Link } from 'react-router-dom'

const sample = [{id:'dev-001', name:'Tracker 001'}, {id:'dev-002', name:'Tracker 002'}]
export default function Devices(){
  return (
    <Container>
      <Paper style={{padding:20, marginTop:20}}>
        <List>
          {sample.map(d=> (
            <ListItem button component={Link} to={`/devices/${d.id}`} key={d.id}>
              <ListItemText primary={d.name} secondary={d.id} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  )
}
