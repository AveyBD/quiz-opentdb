import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Quiz = () => {
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        navigate("/exam");
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
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
