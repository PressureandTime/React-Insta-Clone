import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {

  constructor() {
    super();
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
            <input type="text" placeholder="Search" />
          </div>

        </div>

        <div className="bar3">

          <div className="bar3-icons">
            <i className="fas fa-compass fa-2x" />
            <i className="fas fa-heart fa-2x" />
            <i className="fas fa-user fa-2x" />
          </div>

        </div>


      </div>

    );
  }

}


export default SearchBar;
