import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import DataSaverOffOutlinedIcon from '@mui/icons-material/DataSaverOffOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Home from './Home';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/sunil52sk">
        Sunilkumar Seenivasan
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function UpdateData() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const oldId=data.get('OldVendorId');
    const newId=data.get('NewVendorId');
    axios.put(`http://localhost:8080/updatebyjpqa/${oldId}/${newId}`)
    
    .then(response =>{alert(`changed sucessfully`);})
    .catch(error=>{console.log(error)})
  };

  return (
    <>
    <Home/>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <DataSaverOffOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{fontFamily:"monospace"}}>
            Update By Id
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="OldVendorId"
              label="OldVendorId"
              name="OldVendorId"
              type="number"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="NewVendorId"
              label="NewVendorId"
              name="NewVendorId"
              type="number"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Change
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </>
  );
}
