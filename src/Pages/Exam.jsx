import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Components/Shared/Loading";

const Exam = () => {
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
  const [qn, setQn] = useState(1);
  const [score, setScore] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
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
    if (data.answer === correct_answer) {
      toast.success("Correct Answer!");
      setScore(score + 1);
    } else {
      toast.error(`Wrong Answer! The correct answer is ${correct_answer}`);
    }
    setQn(qn + 1);
    if (qn < 10) {
      reset();
      refetch();
      
    } else {
      saveSessionScore();
      navigate("/result");
    }
  };
  const handleSkip = () => {
    setQn(qn + 1);
    if (qn < 10) {
      refetch();
    } else {
      saveSessionScore();
      navigate("/result");
    }
  };
  const { question, correct_answer, incorrect_answers } = questions[0];
  const options = [...incorrect_answers, correct_answer];
  const main = [...incorrect_answers, correct_answer];
  changeCorrectAnsLocation(options, main);
  const saveSessionScore = () => {
    const today = new Date();
    const now = today.toLocaleString();
    if (localStorage.getItem("total") === null) {
      console.log("No Database");
      localStorage.setItem("total", score);
      localStorage.setItem("lastScore", score);
      localStorage.setItem("attempt", 1);
      localStorage.setItem("played", now);
    } else {
      const oldTotal = parseInt(localStorage.getItem("total"));
      const oldAttempt = parseInt(localStorage.getItem("attempt"));
      localStorage.setItem("total", oldTotal + score);
      localStorage.setItem("attempt", oldAttempt + 1);
      localStorage.setItem("lastScore", score);
      localStorage.setItem("played", now);
    }
    Swal.fire({
      icon: "success",
      title: "Your last score has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    setScore(0);
  };
  return (
    <>
      <div className="flex justify-between items-center w-full md:w-3/4 mx-auto mt-1">
        <h2 className="hidden md:block">
          UserName: {localStorage.getItem("user")}
        </h2>
        <div className="flex w-full justify-between md:justify-end md:w-auto items-center gap-1">
          <h2>This Session Score: {score}</h2>
          <button
            onClick={() => saveSessionScore()}
            className="btn btn-outline"
          >
            Save Score
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="card w-full md:w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="card-title">
                {qn}/10. {question}
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
              <div className="card-actions justify-between">
                <button onClick={handleSkip} className="btn btn-outline">
                  Skip
                </button>
                <input
                  type="submit"
                  value={"Submit"}
                  className="btn btn-outline"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exam;
