import { Outlet } from "react-router-dom";
import TopNavComponent from "../components/TopNavComponent";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
        <TopNavComponent />
        <div className="main px-2 h-screen">
          <Outlet />
          <Footer />
        </div>
        
    </>
  )
}

export default Layout