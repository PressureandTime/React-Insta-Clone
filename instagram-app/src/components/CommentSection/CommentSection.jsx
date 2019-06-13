import React from "react";
import { placeholder } from "@babel/types";
import Comment from "./Comment";
import { CommentSectionWrapper } from './CommentSectionStyle';


class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    };
  }

  render() {
    return (
      <CommentSectionWrapper>
        {this.props.comments.map((comment, index) => (
          <Comment
            key={comment.id}
            comment={comment}
            index={index}
            deleteComment={this.props.deleteComment}
            id={this.props.id}
          />
        ))}

        <div>
          <hr />
        </div>

        <div className="input-comment">
          <input
            onKeyUp={event => {
             this.props.addCommentFunction(event, this.props.index);
            }}
            type="text"
            placeholder="Add a comment"
          />
        </div>
      </CommentSectionWrapper>
    );
  }
}

export default CommentSection;
