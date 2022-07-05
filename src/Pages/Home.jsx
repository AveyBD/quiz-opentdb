import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Slider from "../Components/Home/Slider";

const Home = () => {
  const navigate = useNavigate();
  const setRandomUser = () => {
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let userName = "";
    for (var i = 0; i < 5; i++) {
      userName += char.charAt(Math.floor(Math.random() * char.length));
    }
    localStorage.setItem("user", userName);
    navigate("/quiz", { replace: true });
  };
  return (
    <div className="w-full md:w-3/4 mx-auto">
      <Slider />
      <h2 className="text-3xl text-center font-bold mt-3 uppercase">
        Login to play
      </h2>
      <div className="block md:flex gap-1 border border-gray-200 rounded justify-center items-center">
        <div className="w-full md:w-3/4">
          <div className="w-full bg-base-100 shadow">
            <div className="card-body">
              <p>
                You can play unlimited quiz daily with or without login but if
                you want to see yourself in our leader board you have to login.
                You can login with Facebook, Google or any other system to save
                your user data online. <br />
                We never share your information with anyone with or without your
                consent. Actually I will never look at your data. It will be
                store at monogdb atlas
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => setRandomUser()}
                  className="btn btn-outline"
                >
                  Continue With A Random Username
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card min-w-full bg-base-100 shadow">
            <div className="card-body">
              <h2 className="text-center font-bold">Login</h2>
              <button className="btn btn-outline">Login With Google</button>
              <button className="btn btn-outline">Login With Github</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
