import Footer from "./Footer"
import Header from "./Header"
import Display from "./Display"

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div>
                <Header />
            </div>
            <div>
                <Display />
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Layout