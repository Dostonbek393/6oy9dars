import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OnlineUsers from "../components/OnlineUsers";
import Sidebar from "../components/Sidebar";

function MainLayout() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <Sidebar />
      <main className="col-start-3 col-end-10 overflow-y-auto">
        <Navbar />
        <Outlet />
      </main>
      <div className="col-start-11">
        <OnlineUsers />
      </div>
    </div>
  );
}

export default MainLayout;
