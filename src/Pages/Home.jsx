import React, { useState } from "react";
import { useQuery } from "react-query";
import Slider from "../Components/Home/Slider";
import Loading from "../Components/Shared/Loading";


const Home = () => {
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
    <div className="w-full md:w-3/4 mx-auto">
      <Slider />
    </div>
  );
};

export default Home;
