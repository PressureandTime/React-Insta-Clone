import React, { Component } from 'react'
import PostsPage from './components/PostContainer/PostsPage'
import LoginPage from './components/Login/LoginPage'
import './App.css';
import {Authentication} from './components/Authentication/withAuthentication'


const ComponentFromWithAuthenticate = Authentication(PostsPage)(LoginPage);



export class App extends Component {
  constructor(){
    super()

  }




  render() {
    return (
      <div>
      
      <ComponentFromWithAuthenticate/>
      </div>
    )
  }
}

export default App
