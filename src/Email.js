import React from "react";

function Email(){
  return(
    <div className="Email">
      <div className="form-group">
        <div className="spacing">
          <label for="email" id="email-label" className="labels">
            Email
          </label>
        </div>
        <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
      </div>
    </div>
  );
}

export default Email;