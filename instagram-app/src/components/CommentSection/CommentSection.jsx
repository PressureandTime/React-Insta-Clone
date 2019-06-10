import React from 'react';
import Comment from './Comment';
import './CommentStyle.css';

class CommentSection extends React.Component {
  constructor() {
    super();
  }


  render()  {
    return(
        <div className="comment-section">

             {
              
              this.props.comments.map(comment => {
                 return <Comment key={comment.id} comment={comment}/>

              })

             }

             <input type="text"/>

        </div>
    );

  }


}

export default CommentSection;
