import React from "react";
import "./Name.css";

function Name(){
  return(
    <div className="Name">
      <div className="form-group">
        <div className="spacing">
          <label for="name" id="name-label" className="labels">
            Name
          </label>
        </div>
        <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
      </div>
    </div>
  );
}

export default Name;