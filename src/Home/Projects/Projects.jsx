import React from "react";
import { projectDetails } from "./ProjectDetails";

function Projects() {
  const projectDisplay = projectDetails.map((val, index) => {
    if (index % 2 == 0) {
      return (
        <div key={index} className=" md:px-12 xl:px-40">
          <div className="grid sm:grid-cols-2 max-w-screen rounded-xl mt-4 bg-gray-100 ">
            <img
              src={val.img}
              className="mx-auto my-auto rounded-3xl md:h-60  md:w-80 p-3  max-w-screen max-h-screen"
            />

            <div className="m-2 text-justify px-2">
              <p className="text-2xl font-bold text-gray-900">{val.title}</p>
              <p className="text-md text-gray-500"> {val.Desc}</p>
            </div>
          </div>
        </div>
      )
    } else {
      return <div key={index} className=" md:px-12 xl:px-40">
        <div className="grid sm:grid-cols-2 max-w-screen rounded-xl mt-4 bg-gray-100">
          <img
            src={val.img}
            className="mx-auto my-auto rounded-3xl md:h-60  md:w-80 p-3 sm:order-2 max-w-screen max-h-screen"
          /> 
          <div className="m-2 text-justify px-2 sm:order-1">
            <p className="text-2xl font-bold text-gray-900">{val.title}</p>
            <p className="text-md text-gray-500"> {val.Desc}</p>
          </div>
        </div>
      </div>
    }
  });

  return (
  <div className="flex flex-wrap">
    {projectDisplay}
  </div>
  )
}

export default Projects;

// Final Version:
// <div className="">
//   {projectDetails.map((index, val) => (
// <div key={index} className=" md:px-12 xl:px-40">
//   <div className="grid sm:grid-cols-2 max-w-screen rounded-xl mt-4 bg-gray-100 ">
//     <img
//       src={val.img}
//       className="mx-auto my-auto rounded-3xl h-60  w-80 p-3"
//     />

//     <div className="m-2 text-justify px-2">
//       <p className="text-2xl font-bold text-gray-900">{val.title}</p>
//       <p className="text-md text-gray-500"> {val.Desc}</p>
//     </div>
//   </div>
// </div>
//   ))}
// </div>
// _______________________
