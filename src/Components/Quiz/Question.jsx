import React from "react";

const Question = ({ item, index }) => {
  const changeCorrectAnsLocation = (answers) => {
    for (let m = answers.length - 1; m > 0; m--) {
      const n = Math.floor(Math.random() * (m + 1));
      [answers[m], answers[n]] = [answers[n], answers[m]];
      return answers;
    }
  };
  console.log(item);
  const { question, correct_answer, incorrect_answers } = item;
  const options = [...incorrect_answers, correct_answer];
  changeCorrectAnsLocation(options);
  console.log(options);
  return (
    <div>
      <h2>
        {index + 1}. {question}
        <div class="form-control">
        {options.map(option=>(
            <label class="label cursor-pointer">
            <span class="label-text">{option}</span> 
            <input type="radio" name="{option}" class="radio" />
          </label>
        ))}
        </div>
      </h2>
    </div>
  );
};

export default Question;
