import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import MemberLayout from './MemberLayout';

class App extends Component {
  constructor(){
    super()
    this.state = {
      firstName:'',
      lastName:'',
      username:'',
      password:'',
      age:''
    }
    this.changeFirstName = this.changeFirstName.bind(this)
    this.changeLastName = this.changeLastName.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.changeAge = this.changeAge.bind(this)
    this.onRegister = this.onRegister.bind(this)
  }

  changeFirstName(event){
    this.setState({
      firstName:event.target.value
    })
  }

  changeLastName(event){
    this.setState({
      lastName:event.target.value
    })
  }

  changeUsername(event){
    this.setState({
      username:event.target.value
    })
  }

  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }

  changeAge(event){
    this.setState({
      age:event.target.value
    })
  }

  onRegister(event){
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

        <form onSubmit = {this.onRegister}>

          <input type = 'text' placeholder = 'First Name' onChange={this.changeFirstName}
          value = {this.state.firstName}></input>

          <input type = 'text' placeholder = 'Last Name' onChange={this.changeLastName}
          value = {this.state.lastName}></input>

          <input type = 'text' placeholder = 'Username' onChange={this.changeUsername}
          value = {this.state.username}></input>

          <input type = 'text' placeholder = 'Password' onChange={this.changePassword}
          value = {this.state.password}></input>

          <input type = 'text' placeholder = 'Age' onChange={this.changeAge}
          value = {this.state.age}></input>
          <input type ='submit' value = 'Submit'></input>
        
        </form>
        <div>
          <MemberLayout/>
        </div>

      </div>
    );

  }
}


export default App;
