import React, { useCallback } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, AppBar, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'; 

import  HomeIcon  from '@material-ui/icons/Home';



import { withRouter } from "react-router";
import app from "./base";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      COVID-19 Charity App {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const RegisterEmployee = ({ history }) => {
    const handleRegister = useCallback(async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/EmployeeConfirmation");
      } catch (error) {
        alert(error);
      }
    }, [history]);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.info.light,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
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
  createAccountButton: {
    marginRight: '50px',
  },
  body: {
    marginTop: theme.spacing(3)
  },
}));

  const classes = useStyles();

  return (
     <div> 
    <CssBaseline/>
    <AppBar mb={2} position ="relative">
      <Toolbar>
        <Link to='/' style={{  color: '#FFF'  }}> 
          <HomeIcon className={classes.menuButton}/> 
        </Link>
        <Link to='/' style={{ textDecoration: 'none', color: '#FFF' }}>  
          <Typography variant="h6"  noWrap>
            Home
          </Typography> 
        </Link>
        <div className={classes.title}>
    
          <Link to='/contactus' style={{ textDecoration: 'none', color: '#FFF' }}>  
            <Typography>Send Feeback</Typography>
          </Link>

        </div> 

    
      </Toolbar>
    </AppBar>
    <Container component="main" maxWidth="xs">
      
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <VpnKeyRoundedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register New Employee
        </Typography>
        <form className={classes.form} onSubmit ={handleRegister}>
          <TextField
            
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color = 'primary'
            className={classes.submit}
          >
            Register Employee
          </Button>
          <Grid container>
            <Grid item xs>
              <Link style={{ textDecoration: 'none'}} to='/dashboard' variant="body2">
            
                Go Back to Dashboard
                
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}
export default withRouter(RegisterEmployee)