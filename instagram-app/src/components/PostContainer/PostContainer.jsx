import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {
  constructor() {
    super();
  }






  render() {

    return (
      <div className="Post-Container">
            {this.props.user.username}
            <img src={this.props.user.imageUrl} alt=""/>
            {this.props.user.likes}
            {this.props.user.timestamp}
            <CommentSection comments={this.props.user.comments} />
      </div>
    );




    
  }




}


export default PostContainer;
