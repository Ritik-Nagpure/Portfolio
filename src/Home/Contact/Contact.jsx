import React from "react";
import { openPdfInNewTab, sendData } from "./buttonfunctions";

function Contact() {
  let submithandler = () => {

    let a =1
  }
  return (
    <>
      <div className="md:px-48 xl:px-84">
        <p className="text-2xl text-red-700 font-bold ">
          Contact Details | Drop a message
        </p>
        <div className="grid sm:grid-cols-6 my-2">
          <p className="sm:col-span-1 text-md font-bold">NAME : </p>
          <input
            type="text"
            className="sm:col-span-5 border border-solid border-2 border-violet-400"
          />
        </div>

        <div className="grid sm:grid-cols-6 my-2">
          <p className="sm:col-span-1 text-md font-bold"> Mobile : </p>
          <input
            type="text"
            className="sm:col-span-5 border border-solid border-2 border-violet-400"
          />
        </div>
        <div className="grid sm:grid-cols-6 my-2">
          <p className="sm:col-span-1 text-md font-bold"> Message : </p>
          <input
            type="text"
            className="sm:col-span-5 border border-solid border-2 border-violet-400"
          />
        </div>
        <div className="flex flex-row sm:justify-center sm:gap-20 justify-around">
          <button className="bg-green-600 text-lg font-bold font-serif rounded-xl px-2 py-1 text-yellow-200 hover:bg-green-500 hover:text-yellow-600"> CLEAR </button>

          <button className="bg-green-600 text-lg font-bold font-serif rounded-xl px-2 py-1 text-yellow-200 hover:bg-green-500 hover:text-yellow-600" onClick={submithandler()}>  SUBMIT </button>

        <button onClick={openPdfInNewTab} className="bg-green-600 text-lg font-bold font-serif rounded-xl px-2 py-1 text-yellow-200 hover:bg-green-500 hover:text-yellow-600">  DOWNLOAD CV </button>
        </div>
      </div>
    </>
  );
}


export default Contact;
