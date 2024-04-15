import { useState } from "react";
import SideBar from "./SideBar";
import { LuMenu } from "react-icons/lu";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex">
      <SideBar collapsed={collapsed} />
      <div className="admin-content w-full">
        <div className="h-[40px] border border-sky-500">
          <LuMenu onClick={() => setCollapsed(!collapsed)} className="text-2xl" />

        </div>
        <div className="admin-main">
          <Outlet />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Admin;