import React, {Component, useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'; 
import  HomeIcon  from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/StarBorder';
import CardHeader from '@material-ui/core/CardHeader';



const useStyles = makeStyles((theme) => ({
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
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}));

const tiers = [
  {
    title: 'Lorem ipsum dolor',
    subheader: 'labore',
    price: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    description: [],
    buttonText: 'Update',
    buttonVariant: 'contained',
  },
  {
    title: ' laboris nisi ut',
    subheader: 'minim',
    price: 'Ullamco laboris nisi ut aliquip ex ea commodo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nisi ut aliquip ex ea commodo consequat quis nostrud exercitation ullamco laboris.',
    description: [

    ],
    buttonText: 'Update',
    buttonVariant: 'contained',
  },
  {
    title: ' laboris nisi ut',
    subheader: 'quis',
    price: 'Veniam nisi ut aliquip ex ea commodo consequat quis nostrud ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore exercitation ullamco laboris. Ncididunt ut labore et dolore magna aliqua.',
    description: [

    ],
    buttonText: 'Update',
    buttonVariant: 'contained',
  },
  
];

function App() {
  const classes = useStyles();

    return ( 
      <div>
        <>
        <div className={classes.root}>
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
              <div className={classes.title}>
                <Link to='/register' style={{ textDecoration: 'none', color: '#FFF' }}>  
                  <Typography className={classes.createAccountButton}>Create Account</Typography>
                </Link>
                <Link to='/login' style={{ textDecoration: 'none', color: '#FFF' }}>  
                  <Typography>Login</Typography>
                </Link>

              </div> 

          
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <Container maxWidth="sm">
            <Typography align="center" variant="h2" gutterBottom>
              COVID-19 Charity
            </Typography>
          </Container>
        </div>
        <div>
          <Container maxWidth="sm">
            <Typography align="center" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <div>
              <Grid container justify="center">
                <Grid item>
                  <Link to='/pricing' style={{ textDecoration: 'none'}}> 
                    <Button variant="contained" color="primary">Donate</Button>
                  </Link>
                </Grid>
              </Grid>
            </div>

          </Container>
        </div>
        <div>
        <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h7" color="textPrimary">
                      {tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
        </div>
        </>
        <Link to='/memberlayout'><button>See Members</button></Link>
        <Link to='/donate'><button>Create Account</button></Link>
      </div>
    );

  
}


export default App;
