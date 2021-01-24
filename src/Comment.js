import React from "react";
import "./Comment.css";

function Comment(){
  return(
    <div className="Comment">
      <div className="form-group">
        <p className="comment">
          Any comment?
        </p>
        <textarea id="comments" className="textarea-input" name="comments" placeholder="Enter your comment here..." />
      </div>
    </div>
  );
}

export default Comment;