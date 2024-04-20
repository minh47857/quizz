import { useState } from "react";
import SideBar from "./SideBar";
import { LuMenu } from "react-icons/lu";
import { Outlet } from "react-router-dom";

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
    </div>
  );
}

export default Admin;