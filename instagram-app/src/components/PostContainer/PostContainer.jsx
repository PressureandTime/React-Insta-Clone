import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';


class PostContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
   
    return (
      <div className="post-container">
      <div className="thumb-nail-img"><img src={this.props.user.thumbnailUrl} width="50px" alt=""/>
        <p><strong>{this.props.user.username}</strong></p>
      </div>     

          <div className="big-image"><img src={this.props.user.imageUrl} alt=""/></div>
          <div className="post-container-icons">
          <i className="fas fa-heart fa-2x" />
          <i className="fas fa-comment fa-2x"></i>
          </div>
          
           <p>{this.props.user.likes} likes</p> 
            <CommentSection 
            comments={this.props.user.comments}
           timestamp={this.props.user.timestamp}
             addComment={this.props.addComment}
             index={this.props.index}
           />

      </div>
    );

    
  }

}

PostContainer.propTypes = {
  user: PropTypes.object.isRequired,

}




export default PostContainer;
