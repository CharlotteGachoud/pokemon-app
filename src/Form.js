import React from "react";
import Name from "./Name";
import Email from "./Email";
import Age from "./Age";
import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";

function Form(){
  return(
    <div className="Form">
      <Name />
      <Email />
      <Age />
      <QuestionOne />
      <QuestionTwo />
    </div>
  );
}

export default Form;