import React from 'react';

class Comment extends React.Component {
  
    constructor(){
        super()
    }
    

    render(){
        return(
            <div>
            {this.props.comment.username}
            {this.props.comment.text}
            
            
            </div>
        )
    }

}

export default Comment