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

 AddComment = (event, index) => {
    
  if(event.key === 'Enter'){

    const newComment = {
      id: new Date().getTime(),
      username: 'John',
      text: event.target.value
    }
    
    let {data} = this.state;
    data[index].comments = data[index].comments.concat(newComment)
    console.log(data)
    this.setState({data:data})
  }

  

}




  render() {
  
    return (
      <div className="app-wrapper">
       
       <SearchBar/>

     {

      this.state.data.map((user, index) => {
       return <PostContainer
        user={user} 
        key={user.id} 
        addComment={this.AddComment}
        index={index}
         />

      })

     }

      </div>
    );
  }
}

export default App;
