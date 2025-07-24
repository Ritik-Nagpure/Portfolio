
const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>
        This porfolio is Built and Managed by Ritik nagpure.
      </p>
      <div>

      </div>

      <div className="flex flex-row justify-center align-middle1 items-center w-full h-full bg-purple-300">
        {/* Connections for Collaboration */}

        <div className="flex flex-col w-2/6 h-fit bg-pink-300">
          <div className="flex flex-col justify-center align-middle p-4 m-2  bg-amber-300">
            <span className="">Have an Idea in mind ?</span>
            <span className=""><a href='ritiknagpure@gmail.com'>ritiknagpure@gmail.com</a></span>
          </div>
          <div className="flex flex-col justify-center align-middle p-4 m-2 bg-red-300">
            <span className="">Have an Idea in mind ?</span>
            <span className=""><a href='ritiknagpure@gmail.com'>ritiknagpure@gmail.com</a></span>

          </div>
          <div className="flex flex-col justify-center align-middle p-4 m-2 bg-blue-300">
            <span className="">Have an Idea in mind ?</span>
            <span className=""><a href='ritiknagpure@gmail.com'>ritiknagpure@gmail.com</a></span>

          </div>
        </div>
        <div className="flex flex-col p-4 m-4 w-2/6 min-h-full bg-green-300">
          <span>Github</span>
          <span>Instagram</span>
          <span>Twitter</span>
          <span>LinkedIn</span>
          <span>Youtube</span>
        </div>
      </div>
    </div>
  )
}

export default Footer