import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      query : '',
    }
  }

  onChangeHandler = (event) => {
    this.setState({query:event.target.value})
  }

    filterUser = (event) => {
    event.preventDefault();
     this.props.filterUsers(this.state.query)

    }

    LogOut = ()=> {
      localStorage.removeItem('username')
      window.location.reload()
    }


  render() {
    return (
      
      <div className="search-bar">
        <div className="bar1">
          <i className="fab fa-instagram fa-3x" />
          <h3>Instagram</h3>
        </div>

        <div className="bar2">
        
          <div>
           <form onSubmit={this.filterUser}>
           <input onChange={this.onChangeHandler} type="text" placeholder="Search" />
           </form>
          </div>
        </div>

        <div className="bar3">
          <div className="bar3-icons">
            <i className="fas fa-compass fa-2x" />
            <i className="fas fa-heart fa-2x" />
            <i className="fas fa-user fa-2x" />
          </div>
        </div>
        <button className="log-out-button" onClick={this.LogOut}><strong>Log out</strong></button>
      </div>
    );
  }

}

export default SearchBar;
 