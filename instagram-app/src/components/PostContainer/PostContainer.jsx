import React from 'react';
import Moment from 'moment';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';


class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      totalLikes: this.props.user.likes
    }
  }

  increaseLikes = () => {
    this.setState({totalLikes: this.state.totalLikes + 1})
  }



  render() {

    const newTime = Moment(Date.parse(this.props.user.timestamp)).fromNow();

    console.log(this.props.user.id)
   
    return (
      <div className="post-container">
      <div className="thumb-nail-img"><img src={this.props.user.thumbnailUrl} width="50px" alt=""/>
        <p><strong>{this.props.user.username}</strong></p>
      </div>     

          <div className="big-image"><img src={this.props.user.imageUrl} alt=""/></div>
          <div className="post-container-icons">
          <i className="fas fa-heart fa-2x" onClick={this.increaseLikes} />
          <i className="fas fa-comment fa-2x"></i>
          </div>
    
           <p>{this.state.totalLikes} likes</p> 
        <div>
          <p>{newTime}</p>
        </div>
            <CommentSection 
            comments={this.props.user.comments}
          //  timestamp={this.props.user.timestamp}
             addCommentFunction={this.props.addComment}
             index={this.props.index}
             deleteComment={this.props.deleteComment}
             id={this.props.user.id}
            
           />

      </div>
    );

    
  }

}

PostContainer.propTypes = {
  user: PropTypes.object.isRequired,

}




export default PostContainer;
