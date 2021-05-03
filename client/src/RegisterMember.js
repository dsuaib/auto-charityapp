import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {TextField, Button, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'; 
import  HomeIcon  from '@material-ui/icons/Home';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
    roor: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: "flex",
      marginRight: '10px',
      justifyContent: "flex-end"
    },
  },
}));

const RegisterMember = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  
  

  const handleSubmit = e => {
    e.preventDefault();

    const registered = {
      firstName,
      lastName,
      username,
      password,
      age
  
    }

    axios.post('https://at715casestudy.herokuapp.com/app/registermember', registered)
        .then(response => console.log(response.data))

    console.log(firstName, lastName, email, username, password, age);
  };

  return (
   <div> 
    <div className={classes.roor}>
          <CssBaseline/>
          <AppBar position ="relative">
            <Toolbar>
              <Link to='/' style={{  color: '#FFF'  }}> 
                <HomeIcon className={classes.menuButton}/> 
              </Link>
              <Link to='/' style={{ textDecoration: 'none', color: '#FFF' }}>  
                <Typography>
                  Home
                </Typography> 
              </Link>          
            </Toolbar>
          </AppBar>
        </div>
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
       <TextField
        label="Username"
        variant="filled"
        required
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <TextField
        label="Age"
        variant="filled"
        required
        value={age}
        onChange={e => setAge(e.target.value)}
      />
      <div>
      <Link to='/announcement' style={{ textDecoration: 'none' }}>
        <Button variant="contained" >
          Go to Login
        </Button>
      </Link>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  </div>
  );
};

export default RegisterMember;