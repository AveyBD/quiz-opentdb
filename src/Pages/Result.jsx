import React from "react";

const Result = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center">Result!</h2>
          <p>
            This is your {localStorage.getItem("attempt")}th Attempt! And You
            have got {localStorage.getItem("lastScore")} out of 10.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
