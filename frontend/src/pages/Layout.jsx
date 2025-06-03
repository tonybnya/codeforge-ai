import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#0a0e17]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
