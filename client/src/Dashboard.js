import React, {Component, useState, useCallback} from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab'
import  HomeIcon  from '@material-ui/icons/Home';
import app from "./base";





const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        },
      },
      appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    
      },
      toolbar: {
        flexWrap: 'wrap',
      },
      toolbarTitle: {
        flexGrow: 1,
      },
      link: {
        margin: theme.spacing(1, 1.5),
      },
  typography: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },

  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', <Link to ='/contactus' style={{ textDecoration: 'none', color: 'inherit' }}>Contact us</Link>, 'Locations'],
    },
    {
      title: 'Resources',
      description: ['Vaccination Sites', 'Travel Restrictions', 'Mask Providers', 'COVID-19 Relief'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];

export default function Dashboard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
        <Link to='/' style={{  color: '#FFF'  }}> 
                <HomeIcon style= {{marginRight:'10px'}}/> 
              </Link>
         <Link style={{ textDecoration: 'none', color: '#FFF' }} className={classes.toolbarTitle} to = '/'>
             <Typography variant="h6"  noWrap >
            Home
            </Typography>
        </Link>
        <Link to='/contactus' style={{ textDecoration: 'none', color: '#FFF' }}>  
            <Typography>Send Feeback</Typography>
          </Link>
        </Toolbar>
      </AppBar>

      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Welcome! What Would You Like To Do?
        </Typography>
 
      </Container>
      <div>
        <Container maxWidth="50%">
          <div>
            <Grid container justify="center">
              <Grid item>
              <Link to='/registeremployee' style={{  textDecoration: 'none', color: '#000'}}>
                <Button variant="contained" size="large" color="primary">
                Register An Employee
                </Button>
                </Link>
              <Link to='/createannouncement' style={{ textDecoration: 'none', color: '#000'}}>
                <Button style={{ marginRight: '20px', marginLeft:'20px'}} 
                variant="contained" size="large" color="primary">
                Create An Announcement
                </Button>
              </Link>
              <Link to='/' style={{ textDecoration: 'none', color: '#000'}}>
                <Button variant="contained" size="large" color="primary">
                Update An Announcement
                </Button>
                </Link>
              <Link to='/deleteannouncement' style={{ marginLeft:'20px', textDecoration: 'none', color: '#000'}}>
                <Button variant="contained" size="large" color="secondary">
                  Delete An Announcement
                </Button>
              </Link>
                <Button 
                 onClick={() => app.auth().signOut()} 
                 style={{ marginLeft:'20px'}}
                 variant="contained" size="large" color="inherit">
                Logout
                </Button>
                
              </Grid>
            </Grid>
            </div>

          </Container>
        </div>
      {/* End hero unit */}
            {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Typography href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
        <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        COVID-19 Charity App
        {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}