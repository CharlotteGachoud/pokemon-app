import React from "react";
import "./QuestionThree.css";

function QuestionThree(){
  return(
    <div className="QuestionThree">
      <div className="spacing">
        <p className="questions">
          Which version(s) did you own?{" "}
        </p>
        <span className="clue">
          (Check all that apply)
        </span>
      </div>
      <div className="container">
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="Red" />
            Red
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="Blue" />
            Blue
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="Yellow" />
            Yellow
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="Gold" />
            Gold
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="Silver" />
            Silver
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="Crystal" />
            Crystal
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="Ruby" />
            Ruby
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="Sapphire" />
            Sapphire
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="Diamond" />
            Diamond
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="Pearl" />
            Pearl
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="Black" />
            Black
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="White" />
            White
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="Black 2" />
            Black 2
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="White 2" />
            White 2
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="X" />
            X
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="Y" />
            Y
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="Sun" />
            Sun
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="Moon" />
            Moon
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="Ultra sun" />
            Ultra sun
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="Ultra moon" />
            Ultra moon
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="Sword" />
            Sword
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" name="checkbox" value="Shield" />
            Shield
        </label>
      </div>
    </div>
  );
}

export default QuestionThree;