import React, { Component } from 'react';

import { Button } from '../SearchBar/SearchBarStyle';
import { LoginPageWrapper } from './LoginPageStyle';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      password: '',
      username: ''
    };
  }

  Login = () => {
    localStorage.setItem('username', this.state.username);
    window.location.reload();
  };

  setUsername = event => {
    this.setState({ username: event.target.value });
  };

  setPassword = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <LoginPageWrapper>
        <form>
          <input
            type="text"
            placeholder="Username"
            onChange={this.setUsername}
          />
          <input
            type="text"
            placeholder="Password"
            onChange={this.setPassword}
          />

          <Button onClick={this.Login}>
            <strong>Log in</strong>
          </Button>

          <Button onClick={this.LogOut}>
            <strong>Log out</strong>
          </Button>
        </form>
      </LoginPageWrapper>
    );
  }
}

export default Login;
