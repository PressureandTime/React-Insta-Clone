import React from 'react';

import {
  SearchBarContainer,
  Bar1,
  Bar2,
  Bar3,
  Bar3Icons,
  Button
} from './SearchBarStyle';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  onChangeHandler = event => {
    this.setState({ query: event.target.value });
  };

  filterUser = event => {
    event.preventDefault();
    this.props.filterUsers(this.state.query);
  };

  LogOut = () => {
    localStorage.removeItem('username');
    window.location.reload();
  };

  render() {
    return (
      <SearchBarContainer>
        <Bar1>
          <i className="fab fa-instagram fa-3x" />
          <h3>Instagram</h3>
        </Bar1>

        <Bar2>
          <div>
            <form onSubmit={this.filterUser}>
              <input
                onChange={this.onChangeHandler}
                type="text"
                placeholder="Search"
              />
            </form>
          </div>
        </Bar2>

        <Bar3>
          <Bar3Icons>
            <i className="fas fa-compass fa-2x" />
            <i className="fas fa-heart fa-2x" />
            <i className="fas fa-user fa-2x" />
          </Bar3Icons>
        </Bar3>
        <Button onClick={this.LogOut}>
          <strong>Log out</strong>
        </Button>
      </SearchBarContainer>
    );
  }
}

export default SearchBar;
