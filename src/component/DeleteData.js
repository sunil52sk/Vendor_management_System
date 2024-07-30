import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Home from './Home';
import { Link } from 'react-router-dom';
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

function DeleteData() {
  const defaultTheme = createTheme();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newId = parseInt(e.target.Id.value, 10);

    try {
      // Send a DELETE request to the API to delete the record with the specified ID
      axios.delete(`http://localhost:8080/erase/${newId}`);
      alert(`Record with ID ${newId} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting record:', error);
    }

    // Clear the form input after deletion
    e.target.Id.value = '';
  };

  return (
    <div>
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
              <DeleteForeverOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" style={{ fontFamily: 'monospace' }}>
              Delete By Id
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Id"
                label="Id"
                name="Id"
                type="number"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Delete
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default DeleteData;
