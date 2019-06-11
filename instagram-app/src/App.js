import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data : [],
      count:0
    };

  }


componentDidMount(){
  console.log('Component has mounted')
  this.setState({data: dummyData})
}


  filterUsers = (query) => {
    this.setState({
      data:dummyData
    })
    this.setState(
      prevState => {
    return {data: prevState.data.filter(post => post.username.includes(query))} 
      } 
    )
  }



 AddComment = (event, index) => {
    
  if(event.key === 'Enter'){

    const newComment = {
      id: new Date().getTime(),
      username: 'Johny',
      text: event.target.value
    }
   
    
    let {data} = this.state;
    data[index].comments = data[index].comments.concat(newComment)
    console.log(data)
    this.setState({data:data})
  }
 
}


deleteComment = () => {

}

//  KEEPING IT FOR FUTURE REFERENCE likingPost = () => {
 
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1,
//       }

//     })
//  }


  render() {
    
    console.log(this.state.data);
  
    return (
      <div className="app-wrapper">
       
       <SearchBar filterUsers={this.filterUsers}/>

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
