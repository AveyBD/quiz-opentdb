import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Quiz = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Log On Click");
    navigate("/exam");
  };
  return (
    <div className="w-full md:w-3/4 mx-auto px-2 h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="submit"
          className="btn btn-outline"
          value={"Start The Quiz"}
        ></input>
      </form>
    </div>
  );
};

export default Quiz;
