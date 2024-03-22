import React from "react";
import "./Introduction.css";
import dp from "/dp.jpg";

function introduction() {
  return (
    <>
      <div className="mx-auto lg:w-3/5 my-auto sm:m-6">
        <div className="grid sm:grid-cols-2">
          <img className="rounded-full sm:m-auto sm:h-50 sm:w-60 lg:w-80 lg:h-80 p-3  max-w-screen max-h-screen" src={dp} />
          <div className="flex flex-col m-3 justify-center align-middle text-clip">
            <p className="text-3xl">Ritik Nagpure</p>
            <p className="max-w-lg text-lg text-ellipsis text-slate-600 text-justify">
              Full Stack MERN Developer with expertise in Frontend and Backend.
              Certified RPA Developer with experiance in Python and UiPath Automations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default introduction;
