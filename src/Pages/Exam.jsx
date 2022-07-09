import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../Components/Shared/Loading";

const Exam = () => {
  const [i, setI] = useState(0);
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
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { isLoading, refetch, isFetching, error, data } = useQuery(
    "openTDbData",
    () =>
      fetch(
        "https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=multiple"
      )
        .then((res) => res.json())
        .then((data) => setQuestions(data.results)),
        {
          refetchOnWindowFocus: false,
        }
  );
  if (isLoading || isFetching) {
    return <Loading />;
  }
  if (error) {
    toast.error("Something Went Wrong! Please refresh the page!");
  }

  const onSubmit = (data) => {
    console.log(data.answer);
    if (data.answer === correct_answer) {
      toast.success("Correct Answer!");
      setScore(score + 1);
    } else {
      toast.error(`Wrong Answer! The correct answer is ${correct_answer}`);
    }
    reset();
    refetch();
  };
  const handleSkip = () => {
    setI(i + 1);
    console.log(i);
    refetch();
  };
  const { question, correct_answer, incorrect_answers } = questions[0];
  console.log(question);
  const options = [...incorrect_answers, correct_answer];
  const main = [...incorrect_answers, correct_answer];
  changeCorrectAnsLocation(options, main);
  return (
    <div className="flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 class="card-title">
              {i + 1}. {question}
            </h2>
            <div>
              {options.map((option, index) => (
                <div>
                  <label htmlFor={option}>
                    <input
                      {...register("answer", { required: true })}
                      type="radio"
                      name="answer"
                      key={index}
                      value={option}
                      id={option}
                    />
                    <span className="label-text"> {option}</span>
                  </label>
                  <br />
                </div>
              ))}
              <div className="hidden">
                {errors.answer?.type === "required" &&
                  toast.error("You have to select an answer or skip!")}
              </div>
            </div>
            <div class="card-actions justify-between">
              <button onClick={handleSkip} class="btn btn-outline">
                Skip
              </button>
              <input type="submit" class="btn btn-outline"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Exam;
