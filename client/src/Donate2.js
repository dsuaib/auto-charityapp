import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import  Container  from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import  HomeIcon  from '@material-ui/icons/Home';


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const dotenv = require('dotenv')
dotenv.config()





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
  submit: {
    margin: theme.spacing(1),
    marginLeft: '20px',
    
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
  heroContent: {
    padding: theme.spacing(8, 0, 6),
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
  cardtop: {
    margin: theme.spacing(3),
  },
  cardbot: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
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

export default function Pricing() {
  const classes = useStyles();

  const [product, setProduct] = useState({
    name: "$10 Donation",
    price: 10
});

const makeDonation = token => {
    const body = {
        token,
        product
    }
    axios.post('https://at715casestudy.herokuapp.com/app/donation', body)
    .then(response => console.log(response.data))
}

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
          <nav>
            <Link variant="button" style={{ textDecoration: 'none', color: '#FFF' }}  className={classes.link}>
              About Us
            </Link>
            <Link to='/contactus' variant="button" style={{ textDecoration: 'none', color: '#FFF' }} className={classes.link}>
              Contact Us
            </Link>
            <Link variant="button" style={{ textDecoration: 'none', color: '#FFF' }} href="#" className={classes.link}>
              Resources
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Please select a donation amount
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
        Your donation helps families who have been severly impacted by the COVID-19 pandemic. $1 donate goes to consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
            <Grid alignItems="flex-end"  xs={12}  md={4}>
            <Card className ={classes.cardtop} onMouseOver={() => setProduct({name: "$10", price: 10})}>
                <CardHeader
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      $10 
                    </Typography>
                  </div>
                </CardContent>
                <CardActions> 
                <StripeCheckout stripeKey= {process.env.REACT_APP_KEY} token={makeDonation} name = "Donate $10" amount = {product.price * 100} > 
                  <Button className={classes.submit}  variant="contained" color="primary">
                    Click Here To Donate
                  </Button>
                </StripeCheckout> 
                </CardActions>
              </Card>
            </Grid>
            <Grid alignItems="flex-end"  xs={12}  md={4}>
            <Card className ={classes.cardtop} onMouseOver={() => setProduct({name: "$20", price: 20})}>
                <CardHeader
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      $20 
                    </Typography>
                  </div>
                </CardContent>
                <CardActions> 
                <StripeCheckout stripeKey= {process.env.REACT_APP_KEY} token={makeDonation} name = "Donate $20" amount = {product.price * 100} > 
                  <Button className={classes.submit} variant="contained" color="primary">
                    Click Here To Donate
                  </Button>
                </StripeCheckout> 
                </CardActions>
              </Card>
            </Grid>
            <Grid  xs={12}  md={4}>
            <Card className ={classes.cardtop} onMouseOver={() => setProduct({name: "$50", price: 50})}>
                <CardHeader
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      $50 
                    </Typography>
                  </div>
                </CardContent>
                <CardActions> 
                <StripeCheckout stripeKey= {process.env.REACT_APP_KEY} token={makeDonation} name = "Donate $50" amount = {product.price * 100} > 
                  <Button className={classes.submit} variant="contained" color="primary">
                    Click Here To Donate
                  </Button>
                </StripeCheckout> 
                </CardActions>
              </Card>
            </Grid>
            <Grid  xs={12}  md={4}>
            <Card className ={classes.cardbot} onMouseOver={() => setProduct({name: "$100", price: 100})}>
                <CardHeader
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      $100 
                    </Typography>
                  </div>
                </CardContent>
                <CardActions> 
                <StripeCheckout stripeKey= {process.env.REACT_APP_KEY} token={makeDonation} name = "Donate $100" amount = {product.price * 100} > 
                  <Button className={classes.submit} variant="contained" color="primary">
                    Click Here To Donate
                  </Button>
                </StripeCheckout> 
                </CardActions>
              </Card>
            </Grid>
            <Grid  xs={12}  md={4}>
            <Card className ={classes.cardbot}  onMouseOver={() => setProduct({name: "$200", price: 200})}>
                <CardHeader
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      $200 
                    </Typography>
                  </div>
                </CardContent>
                <CardActions> 
                <StripeCheckout stripeKey= {process.env.REACT_APP_KEY} token={makeDonation} name = "Donate $200" amount = {product.price * 100} > 
                  <Button className={classes.submit}  variant="contained" color="primary">
                    Click Here To Donate
                  </Button>
                </StripeCheckout> 
                </CardActions>
              </Card>
            </Grid>
            <Grid   xs={12}  md={4}>
              <Card className ={classes.cardbot}  onMouseOver={() => setProduct({name: "$500", price: 500})}>
                <CardHeader
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      $500 
                    </Typography>
                  </div>
                </CardContent>
                <CardActions> 
                <StripeCheckout stripeKey= {process.env.REACT_APP_KEY} token={makeDonation} name = "Donate $500" amount = {product.price * 100} > 
                  <Button className={classes.submit} variant="contained" color="primary">
                    Click Here To Donate
                  </Button>
                </StripeCheckout> 
                </CardActions>
              </Card>
            </Grid>
           
        </Grid>
        
      </Container>
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