import dpnbg from "/dpnbg.png";

// import dp from "/dp.jpg";

const Banner = () => (
    <section className="w-full h-screen flex items-center justify-center px-6">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-8">

            {/* Left: Image with Elegant Background */}
            <div className="relative w-64 h-64 md:w-120 md:h-120 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 blur-xl opacity-30" />
                <img
                    src={dpnbg}
                    alt="Ritik Napure"
                    className="relative z-10 w-full h-full object-cover rounded-full shadow-xl"
                />
            </div>

            {/* Right: Name & Summary */}
            <div className="flex flex-col items-center text-white text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Ritik Nagpure
                </h1>
                <p className="text-lg md:text-xl mt-4 text-gray-300 max-w-md">
                    A visionary MERN stack developer who believes tech should inspire, not just function. I build digital experiences that elevate ideas and empower people—fueled by curiosity, innovation, and bold creativity.
                </p>
                <a
                    href=""
                    className="inline-block m-2 px-4 py-2 text-black text-lg font-semibold rounded-full bg-white hover:bg-gray-300 hover:text-xl transition-all"
                >
                    Let’s Connect
                </a>


            </div>
        </div>
    </section>
);

export default Banner;
