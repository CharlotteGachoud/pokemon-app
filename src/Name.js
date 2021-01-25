import React from "react";
import "./Name.css";

function Name(){
  return(
    <div className="Name">
      <div className="form-group">
        <div className="spacing">
          <label for="name" id="name-label" className="labels">
            Player name
          </label>
        </div>
        <input type="text" className="form-control" id="name" name="name" placeholder="Enter the name you usually used in the game" required />
      </div>
    </div>
  );
}

export default Name;