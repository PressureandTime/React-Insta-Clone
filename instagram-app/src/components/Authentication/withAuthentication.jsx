import React from 'react'



 export const Authentication = PostsPage => LoginPage =>{
   return class extends React.Component {
    constructor() {
        super()

        this.state ={
            isLoggedIn:false
        }
        
    }

    componentDidMount(){
        let username = localStorage.getItem('username');
        return this.setState({ isLoggedIn: username !== null });

    }

      render() {

        if (this.state.isLoggedIn === true) {
            return <PostsPage {...this.props} />;
          } else {
            return <LoginPage />;
          }
    
      }
    }

}