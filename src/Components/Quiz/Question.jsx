import React from "react";

const Question = ({ item, index: serialNo }) => {
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
  // console.log(`Line 14: ${options}`);
  changeCorrectAnsLocation(options, main);
  console.log(`Line 16: ${options[1]}`);
  return (
    <div>
      <h2>
        {serialNo + 1}. {question}
        <fieldset id={serialNo}>
          {options.map((option) => (
            <>
              <label htmlFor={option}>
                <input
                  type="radio"
                  name={serialNo}
                  value={option}
                  id={option}
                />
                <span className="label-text">{option}</span>
              </label>
              <br />
            </>
          ))}
        </fieldset>
      </h2>
    </div>
  );
};

export default Question;
