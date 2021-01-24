import React from "react";
import Name from "./Name";
import Email from "./Email";
import Age from "./Age";
import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import Comment from "./Comment";

function Form(){
  return(
    <div className="Form">
      <Name />
      <Email />
      <Age />
      <QuestionOne />
      <QuestionTwo />
      <QuestionThree />
      <Comment />
    </div>
  );
}

export default Form;