import React from "react";
import Name from "./Name";
import Age from "./Age";
import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import Comment from "./Comment";
import SubmitButton from "./SubmitButton";
import "./Form.css";

function Form(){

  return(
    <div className="Form">
      <Name />
      <Age />
      <QuestionOne />
      <QuestionFour />
      <QuestionTwo />
      <QuestionThree />
      <Comment />
      <SubmitButton />
    </div>
  );
}

export default Form;