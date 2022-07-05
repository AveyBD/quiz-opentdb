import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Components/Shared/Loading";
const Quiz = () => {
  const [question, setQuestion] = useState([]);
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setQuestion(data.results))
  );
  if (isLoading) {
    return <Loading />;
  }
  console.log(question);
  return (
    <div className="md:w-3/4 mx-auto">
      <h2 className="text-center">Total Question = {question.length}</h2>
      <ol>
        {question.map((q, index) => (
          <li key={index}>
            {index+1}. {q.question}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Quiz;
