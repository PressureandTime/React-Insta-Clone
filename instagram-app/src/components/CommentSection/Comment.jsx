import React from 'react';
import './CommentStyle.css';
import PropTypes from 'prop-types';

class Comment extends React.Component {
  
    constructor(){
        super()
        
    }
    

    
    deleteComment = (id, postId) => {
      

    }




    render(){
        
        return(
            <div className="individual-comment">

           <p> <strong>{this.props.comment.username}</strong></p> 
            <p>{this.props.comment.text}</p>
            <button onClick={
                () => { this.deleteComment(this.props.comment.id, this.props.postId)} }>Delete comment</button>
            
          <p>{this.props.comment.timestamp}</p>
            
            </div>
        )
    }

}








Comment.propTypes = {
   
   comment: PropTypes.shape({
    id: PropTypes.number.isRequired,  
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
}


Comment.defaultProps = {
    comment: []
}



export default Comment


