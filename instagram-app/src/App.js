import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
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
      <div className="app-wrapper">
       
       <SearchBar/>

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
