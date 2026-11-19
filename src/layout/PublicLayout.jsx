import { Outlet } from "react-router"
import Footer from "../component/common/Footer"
import Navbar from "../component/Navbar"


const PublicLayout = () => {
    return (


        <div>
            <Navbar/>

          <Outlet/>
            <Footer />


        </div>
    )
}
export default PublicLayout