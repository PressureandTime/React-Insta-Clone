import React from 'react';
import './CommentStyle.css'

class Comment extends React.Component {
  
    constructor(){
        super()
    }
    

    render(){
        return(
            <div className="individual-comment">

           <p>{this.props.comment.username}</p> 
            <p>{this.props.comment.text}</p>
            
            
            </div>
        )
    }

}

export default Comment