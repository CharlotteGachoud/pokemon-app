import React from "react";
import "./QuestionTwo.css";

function QuestionTwo(){
  return(
    <div className="QuestionTwo">
      <div className="form-group">
        <p className="questions">
          What type do you recommend to choose as the starter pokemon?
        </p>
        <div className="radio-btn">
          <label className="radio-label">
            <input type="radio" className="radio-input" name="recommendation" value="Water" checked />
            Water
          </label>
          <label className="radio-label fire">
            <input type="radio" className="radio-input" name="recommendation" value="Fire" />
            Fire
          </label>
          <label className="radio-label">
            <input type="radio" className="radio-input" name="recommendation" value="Grass" />
            Grass
          </label>
        </div>
      </div>
    </div>
  );
}

export default QuestionTwo;