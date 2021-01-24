import React from "react";
import Name from "./Name";
import Email from "./Email";
import Age from "./Age";

function Form(){
  return(
    <div className="Form">
      <Name />
      <Email />
      <Age />
    </div>
  );
}

export default Form;