import React from "react";
import "./QuestionThree.css";
import Versions from "./Versions";

const versions = [
  "Red",
  "Blue",
  "Yellow",
  "Gold",
  "Silver",
  "Crystal",
  "Ruby",
  "Sapphire",
  "Diamond",
  "Pearl",
  "Black",
  "White",
  "Black2",
  "White2",
  "X",
  "Y",
  "Sun",
  "Moon",
  "Ultra sun",
  "Ultra moon",
  "Sword",
  "Shield"
]

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
       {versions.map((version) =>(
          <Versions versions={version} />))}
      </div>
    </div>
  );
}

export default QuestionThree;