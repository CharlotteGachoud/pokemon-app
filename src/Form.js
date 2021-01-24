import React from "react";
import Name from "./Name";
import Email from "./Email";
import Age from "./Age";
import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import Comment from "./Comment";
import SubmitButton from "./SubmitButton";
import "./Form.css";

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
      <SubmitButton />
    </div>
  );
}

export default Form;