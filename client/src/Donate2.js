import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


import React, {Component, useState} from 'react';
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

}));

const tiers = [
  {
    title: '',
    price: '10',
    description: [],
    buttonText: 'Donate Now',
    buttonVariant: 'outlined',
  },
  {
    title: '',
    subheader: '',
    price: '20',
    description: [

    ],
    buttonText: 'Donate Now',
    buttonVariant: 'contained',
  },
  {
    title: '',
    price: '50',
    description: [
      '',
      '',
      '',
      '',
    ],
    buttonText: 'Donate Now',
    buttonVariant: 'outlined',
  },
  {
    title: '',
    price: '100',
    description: [
      '',
      '',
      '',
      '',
    ],
    buttonText: 'Donate Now',
    buttonVariant: 'outlined',
  },
  {
    title: '',
    price: '200',
    description: [
      '',
      '',
      '',
      '',
    ],
    buttonText: 'Donate Now',
    buttonVariant: 'outlined',
  },
  {
    title: '',
    price: '500',
    description: [
      '',
      '',
      '',
      '',
    ],
    buttonText: 'Donate Now',
    buttonVariant: 'outlined',
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
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
         <Link className={classes.toolbarTitle} to = '/'>
             <Typography variant="h6" color="inherit" noWrap >
            Home
            </Typography>
        </Link>
          <nav>
            <Link variant="button" color="textPrimary"  className={classes.link}>
              About Us
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Contact Us
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Create Account
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Please select an amount
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </Container>
      {/* End hero unit */}
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
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
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
                <StripeCheckout stripeKey= {process.env.REACT_APP_KEY} token={makeDonation} name = "Donate Now" > 
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </StripeCheckout>  
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}