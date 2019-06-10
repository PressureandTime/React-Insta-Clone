import React from 'react';
import { placeholder } from '@babel/types';
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
             <div className="input-comment">
             <input type="text" placeholder="add a comment"/>
            </div>
        </div>
    );

  }


}

export default CommentSection;
