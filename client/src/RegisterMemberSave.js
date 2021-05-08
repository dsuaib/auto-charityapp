import React, { Component, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';


class RegisterMember extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      age: ''
    }
    this.changeFirstName = this.changeFirstName.bind(this)
    this.changeLastName = this.changeLastName.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.changeAge = this.changeAge.bind(this)
    this.onRegister = this.onRegister.bind(this)
  }

  changeFirstName(event) {
    this.setState({
      firstName: event.target.value
    })
  }

  changeLastName(event) {
    this.setState({
      lastName: event.target.value
    })
  }

  changeUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  changePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  changeAge(event) {
    this.setState({
      age: event.target.value
    })
  }

  onRegister(event) {
    event.preventDefault()

    const registered = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password,
      age: this.state.age
    }

    axios.post('https://at715casestudy.herokuapp.com/app/registermember', registered)
      .then(response => console.log(response.data))
  }



  render() {

    return (
      <div>
        <CssBaseline />
        <AppBar position="relative">
          <Typography>
            <Link to='/' style={{ color: '#FFF' }}>
              Home
              </Link>
          </Typography>
          <Typography align="center">
            Create Member Account
            </Typography>
        </AppBar>
        <br></br>


        <form onSubmit={this.onRegister}>
          <Container maxWidth="sm">

            <TextField align="center" type='text' placeholder='First Name' onChange={this.changeFirstName}
              value={this.state.firstName}></TextField>

          </Container>
          <br></br>
          <Container maxWidth="sm">

            <TextField type='text' placeholder='Last Name' onChange={this.changeLastName}
              value={this.state.lastName}></TextField>

          </Container>
          <br></br>
          <Container maxWidth="sm">

            <TextField type='text' placeholder='Username' onChange={this.changeUsername}
              value={this.state.username}></TextField>
          </Container>
          <br></br>
          <Container maxWidth="sm">

            <TextField type='text' placeholder='Password' onChange={this.changePassword}
              value={this.state.password}></TextField>
          </Container>
          <br></br>
          <Container maxWidth="sm">
            <TextField type='text' placeholder='Age' onChange={this.changeAge}
              value={this.state.age}></TextField>
          </Container>
          <br></br>
          <Container maxWidth="sm">
            <br></br>
            <Button type='submit' value='Submit' variant="contained" color="primary">
              Create Account
        </Button>
          </Container>
        </form>
      </div>
    );

  }
}


export default RegisterMember;

<ul>
  {tier.description.map((line) => (
    <Typography component="li" variant="subtitle1" align="center" key={line}>
      {line}
    </Typography>
  ))}
</ul>