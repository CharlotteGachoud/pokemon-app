import React from "react";
import "./QuestionFour.css";

function QuestionFour() {
  return(
    <div className="QuestionFour">
      <div className="form-group">
        <p className="questions">
          Do you give surnames to your pokemons?
        </p>
        <select id="dropdown" className="form-control" name="dropdown" required>
          <option value="Always">Always</option>
          <option value="Never">Never</option>
          <option value="Sometimes">Sometimes</option>
          <option value="Most of the time">Most of the time</option>
        </select>
      </div>
    </div>
  )  
}

export default QuestionFour;