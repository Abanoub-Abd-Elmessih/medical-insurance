import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <div className="container-fluid px-md-5 px-2">
      <Outlet />
      </div>
    </>
  );
}
