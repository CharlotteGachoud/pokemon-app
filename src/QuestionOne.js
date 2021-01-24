import React from "react";

function QuestionOne() {
  return(
    <div className="QuestionOne">
      <div className="form-group">
        <p className="questions">
          Which generation did you start with?
        </p>
        <select id="dropdown" className="form-control" name="dropdown" required>
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
          <option value="4th">4th</option>
          <option value="5th">5th</option>
          <option value="6th">6th</option>
          <option value="7th">7th</option>
          <option value="8th">8th</option>
        </select>
      </div>
    </div>
  );
}

export default QuestionOne