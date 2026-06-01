import dpnbg from "/dpnbg.png";
import bg from "/bg.png";

const Newint = () => {
    return (
        <div className="flex flex-col items-center justify-center h-150 bg-gray-400">
            <div className="flex flex-col items-center justify-center h-full w-5/6 bg-gray-800">
                <div className="flex flex-row items-center justify-between h-full bg-red-300">

                    <div className="flex items-center justify-center bg-amber-300 w-180" style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <img src={dpnbg} alt="Profile" className="w-200 h-120" />
                    </div>

                    <div className="flex items-center justify-center h-1/3 w-2/5">
                        <h1 className="text-3xl font-bold text-white">Welcome to My Portfolio</h1>
                    </div>



                </div>
            </div>
        </div >
    )
}

export default Newint