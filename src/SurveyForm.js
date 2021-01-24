import React from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

function SurveyForm(){
  return(
    <div className="SurveyForm">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default SurveyForm;