import React from 'react';
import { placeholder } from '@babel/types';
import Comment from './Comment';
import './CommentStyle.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    }
  }

  render() {
    return (
      <div className="comment-section">

        {
          this.props.comments.map((comment, index) => (
            <Comment key={comment.id} comment={comment} index={index} />


          ))

             }

        <div>
          <p>{this.props.timestamp}</p>
        </div>

        <div>
          <hr />
        </div>

        <div className="input-comment">
          <input
            onKeyUp={

            (event) => { this.props.addCommentFunction(event, this.props.index); }


          }
            type="text"
            placeholder="Add a comment"
          />
        </div>

      </div>
    );

  }

}

export default CommentSection;
