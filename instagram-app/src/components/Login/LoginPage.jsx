import React, { Component } from 'react';
import './LoginPage.css'

class Login extends Component {
  constructor() {
    super();

    this.state ={
      password:'',
      username:''
      
    }
  }

  
  Login = () =>{
    localStorage.setItem('username', this.state.username)
    window.location.reload()
  }

  setUsername = (event) => {
    this.setState({username:event.target.value}) 
  }

  setPassword = (event) => {
    this.setState({password:event.target.value}) 
  }


  


  render() {
    return (
      <div className="outside-of-form">
        <form>
           
              <input type="text" placeholder="Username" onChange={this.setUsername} />
              <input type="text" placeholder="Password" onChange={this.setPassword} />
              
              <button onClick={this.Login}><strong>Log in</strong></button>
              <button onClick={this.LogOut}><strong>Log out</strong></button>

        </form>

      </div>
    );
  }
}

export default Login;
