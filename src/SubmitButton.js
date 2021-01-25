import React from "react";
import "./SubmitButton.css";

function SubmitButton(){

function submitted(){

}

  return(
    <div className="SubmitButton">
      <div className="form-group">
        <button type="submit" id="submit" className="submit-btn" name="submit" onClick={submitted}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default SubmitButton;