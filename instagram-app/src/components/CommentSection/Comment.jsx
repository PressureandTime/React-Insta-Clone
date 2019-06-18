import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../SearchBar/SearchBarStyle';

class Comment extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.id);
    return (
      <div className="individual-comment">
        <p>
          <strong> {this.props.comment.username} </strong>
        </p>
        <p> {this.props.comment.text} </p>
        <Button
          onClick={() =>
            this.props.deleteComment(this.props.comment.id, this.props.id)
          }
        >
          Delete comment
        </Button>
        <p> {this.props.comment.timestamp} </p>
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

Comment.defaultProps = {
  comment: []
};

export default Comment;
