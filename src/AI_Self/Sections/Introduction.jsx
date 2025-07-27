
const Introduction = () => {
    return (
        <section className="w-full  py-20 px-6 relative">
            {/* Optional glowing SVG accent */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 blur-3xl"></div>
            </div>

            <div className="relative max-w-4xl mx-auto text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    A Developer with Purpose
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    I build digital experiences that prioritize clarity, empathy, and functionality. Each project is an opportunity to shape intuitive interfaces that connect people and ideas. I value curiosity and thoughtful design, blending logic with imagination to create tools that serve real needs.
                </p>
                <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 hover:text-xl bg-white text-gray-900 font-semibold rounded-full shadow hover:bg-gray-300 transition-all"
                    >
                        Explore Projects
                    </a>
                    <p
                        href="#contact"
                        className="px-6 py-3 hover:text-xl bg-white text-gray-900 font-semibold rounded-full shadow hover:bg-gray-300 transition-all"

                   >
                        Let’s Talk
                    </p>
                </div>
            </div>
        </section>
    )
};

export default Introduction;
