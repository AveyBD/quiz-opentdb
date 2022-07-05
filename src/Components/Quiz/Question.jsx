import React from "react";

const Question = ({ item, index }) => {
  const changeCorrectAnsLocation = (answers, main) => {
    for (let m = answers.length - 1; m > 0; m--) {
      const n = Math.floor(Math.random() * (m + 1));
      [answers[m], answers[n]] = [answers[n], answers[m]];
    }
    if (main === answers) {
      changeCorrectAnsLocation(answers);
    } else {
      return answers;
    }
  };

  const { question, correct_answer, incorrect_answers } = item;
  const options = [...incorrect_answers, correct_answer];
  const main = [...incorrect_answers, correct_answer];
  console.log(`Line 14: ${options}`);
  changeCorrectAnsLocation(options, main);
  console.log(`Line 16: ${options}`);
  return (
    <div>
      <h2>
        {index + 1}. {question}
        <div class="form-control">
          {options.map((option) => (
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
