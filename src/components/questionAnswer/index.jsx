import React, { useState } from "react";
import "./style.scss";


export const QuestionAnswer = () => {
  const [inputValue, setInputValue] = useState({
    questionValue: "",
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });
  const [radioValue, setRadioValue] = useState("");
  const [questionArray, setQuestionArray] = useState([]);

  function addQuestion() {
    setQuestionArray([...questionArray, inputValue]);
    localStorage.setItem("Question_List", JSON.stringify(questionArray));
  }

  function handleChange(e) {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  }

  function radioInputChecked() {
    if (radioValue.checked) {
      console.log("radioValue.input1");
    }
  }

  return (
    <div className="questionContainer">
      <div className="questionInput">
        <label>
          Please enter your question
          <input
            value={inputValue.questionValue}
            name="questionValue"
            type="text"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="option">
        <label>
          Option 1
          <input
            value={inputValue.input1}
            name={"input1"}
            type="text"
            onChange={handleChange}
          />
          <input
            type="radio"
            className="radio"
            name="radioCheck"
            onChange={radioInputChecked}
          />
        </label>
      </div>
      <div className="option">
        <label>
          Option 2
          <input
            value={inputValue.input2}
            name={"input2"}
            type="text"
            onChange={handleChange}
          />
          <input
            type="radio"
            className="radio"
            name="radioCheck"
            onChange={radioInputChecked}
          />
        </label>
      </div>
      <div className="option">
        <label>
          Option 3
          <input
            value={inputValue.input3}
            name={"input3"}
            type="text"
            onChange={handleChange}
          />
          <input
            type="radio"
            className="radio"
            name="radioCheck"
            onChange={radioInputChecked}
          />
        </label>
      </div>
      <div className="option">
        <label>
          Option 4
          <input
            value={inputValue.input4}
            name={"input4"}
            type="text"
            onChange={handleChange}
          />
          <input
            type="radio"
            className="radio"
            name="radioCheck"
            onChange={radioInputChecked}
          />
        </label>
      </div>
      <button className="addQuestion" onClick={addQuestion}>
        Add Question
      </button>
      
    </div>
  );
};
