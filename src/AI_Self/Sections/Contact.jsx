import cv from '../../assets/Ritik_Nagpure.pdf'

const openPdfInNewTab = () => {
    window.open(cv, '_blank');
};

const sendData = (name, mob, message) => {
    let contactWithMessagePayload = {
        "name": name,
        "mob": mob,
        "message": message
    }
    console.log(contactWithMessagePayload);
}

const Footer = () => {

    return (
        <footer className=" text-white px-6" id="contact">
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Collaborate</h2>
                <p className="text-lg text-gray-300">
                    I’m always excited to work on impactful projects. Whether it's development, design, or ideation—
                    let’s talk and create something meaningful together.
                </p>
            </div>

            {/* Contact Form */}
            <form className="max-w-2xl mx-auto space-y-6 text-left">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 rounded-lg border border-gray-400 bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-4 rounded-lg border border-gray-400 bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full p-4 rounded-lg border border-gray-400 bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div className="flex flex-col md:flex-row gap-4">
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-all"
                    >
                        Send Message
                    </button>
                    <button
                        type="button"
                        onClick={openPdfInNewTab}
                        className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-all"
                    >
                        📄 Download CV
                    </button>
                </div>
            </form>

            <hr className="border-gray-600 my-10" />

            <div className="text-sm text-gray-400 text-center">
                <p>&copy; {new Date().getFullYear()} Ritik Napure. All rights reserved.</p>
            </div>
        </footer>

    )
};

export default Footer;
