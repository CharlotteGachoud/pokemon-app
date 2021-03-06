import React from "react";
import "./SubmitButton.css";

function SubmitButton(){
  return(
    <div className="SubmitButton">
      <div className="form-group">
        <button type="submit" id="submit" className="submit-btn" name="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default SubmitButton;