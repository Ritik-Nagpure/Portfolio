import Footer from "./Footer"
import Header from "./Header"
import Display from "./Display"
import Newint from "../Introduction/Newint"

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen text-white w-full">
            <div>
                <Header />
            </div>
            <div>
                {/* <Newint/> */}
            </div>
            <div>
                {/* <Display /> */}
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Layout