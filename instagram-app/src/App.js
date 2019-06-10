import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data : dummyData,
    };

  }

  render() {
    return (
      <div>
     {

      this.state.data.map(user => {
       return <PostContainer user={user} key={user.id}   />

      })

     }
      </div>
    );
  }
}

export default App;
