import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {TextField, Button, Typography, AppBar, Avatar, Box, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'; 
import CreateIcon from '@material-ui/icons/Create';
import  HomeIcon  from '@material-ui/icons/Home';



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

const DeleteAnnouncement = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [title, setTitle] = useState('');

  
  
  

  const handleSubmit = e => {
    e.preventDefault();

    const announcement = {
      title,
    }

    axios.delete('http://localhost:5000/app/deleteannouncement', { data: announcement })
        .then(response => {
            console.log(response.data)
            console.log(title)
        })
        
  };

  return (
    <div>
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
 
       <Container component="main" maxWidth="xs">
         <CssBaseline />
         <div className={classes.paper}>
           <Avatar className={classes.avatar}>
             <CreateIcon />
           </Avatar>
           <Typography component="h1" variant="h5">
            
           </Typography>
           <form className={classes.form} onSubmit={handleSubmit}>
             <Grid container spacing={2}>
               <Grid item xs={12}>
                 <TextField
                   required
                   fullWidth
                   label="Title"
                   id="title"
                   name="title"
                   autoComplete="title"
                   required
                   value={title}
                   onChange={e => setTitle(e.target.value)}
                 />
               </Grid>
               <Grid item xs={12}>
                <Button size="large"
                fullWidth
               type="submit"
               variant="contained"
               color="secondary"
               className={classes.submit}>
               delete announcement
             </Button>
               </Grid>
               
             </Grid>
            
             
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
};

export default DeleteAnnouncement;