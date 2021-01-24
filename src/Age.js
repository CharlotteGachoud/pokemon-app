import React from "react";
import "./Age.css";

function Age() {
  return(
    <div className="Age">
      <div className="spacing">
        <label for="number" id="number-label" className="labels">
          How old were you when you first started playing Pokemon?
        </label>
      </div>
      <input type="number" className="form-control" id="number" name="number" placeholder="Age" min="5" max="99" /> 
    </div>
  );
}

export default Age;