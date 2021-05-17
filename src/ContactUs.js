import React, { useState }  from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  typography: {
    margin: theme.spacing(1, 1.5),
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

export default function ContactUs() {
    let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const classes = useStyles();

    const handleSubmit = e => {
        e.preventDefault();
        const emailInfo = {
          firstName,  
          email,
          message,
        }
        axios.post('https://at715casestudy.herokuapp.com/app/email', emailInfo)
        .then(response => console.log(response.data)).then(() => {
                console.log(emailInfo)
                alert('Email sent!')
            })
            .catch(err => {
                console.log(err)
            });
      };
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
          description: ['Privacy policy', 'Terms of use', <Link to ='/dashboard' style={{ textDecoration: 'none', color: 'inherit' }}>Employee dashboard</Link>],
        },
      ];

  return (
 <div>     
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <EmailRoundedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Please Send Any Feedback Or Questions You May Have. Thank You!
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="First Name"
                name="First Name"
                variant="filled"
                required
                fullWidth
                id="First Name"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                variant="filled"
                id="email"
                name="email"
                autoComplete="email"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                variant="filled"
                fullWidth
                multiline
                required
                value={message}
                onChange={e => setMessage(e.target.value)}
                variant="filled"
                required    
                id="message"
                label="Message"
                name="Message"
                autoComplete="Message"
              />
            </Grid>
          </Grid>
          
          <Link to='/' style={{ textDecoration: 'none' }}>
          <Button style ={{marginLeft:'40px', marginRight: '40px'}} size="large"
            variant="contained"
            color="default"
            className={classes.submit}
          >
            Go Home
          </Button>
          </Link>
          <Button size="large"
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SendRoundedIcon/>}
            className={classes.submit}>
            
            Send Email
          </Button>
          
        </form>
          
      </div>
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
</div>
  );
}