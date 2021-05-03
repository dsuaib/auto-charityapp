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

const CreateAnnouncement = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [fullName, setFullName] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  // retrieve password for authority to create annoucement
  const [password, setPassword] = useState('');
  
  
  

  const handleSubmit = e => {
    e.preventDefault();

    const announcement = {
      fullName,
      title,
      message,
      password
    }

    axios.post('https://at715casestudy.herokuapp.com/app/createannouncement', announcement)
        .then(response => {
            console.log(response.data)
            alert('Announcement Created!')
        })
        
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
        label="Full Name"
        variant="outlined"
        required
        value={fullName}
        onChange={e => setFullName(e.target.value)}
      />
      <TextField
        label="Title"
        variant="outlined"
        required
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

       <TextField
        label="Announcement"
        variant="outlined"
        multiline
        required
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div>
        <Button type="submit" variant="contained" color="primary">
          Confirm Announcement
        </Button>
      </div>
    </form>
  </div>
  );
};

export default CreateAnnouncement;