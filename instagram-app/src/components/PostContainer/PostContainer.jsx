import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

class PostContainer extends React.Component {
  constructor() {
    super();
  }






  render() {

    return (
      <div className="post-container">
            {this.props.user.username}
          <div className="big-image"><img src={this.props.user.imageUrl} alt=""/></div>  
            {this.props.user.likes}
            {this.props.user.timestamp}
            <CommentSection comments={this.props.user.comments} />
      </div>
    );




    
  }




}


export default PostContainer;
