import { useState } from "react";
import SideBar from "./SideBar";
import { LuMenu } from "react-icons/lu";

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  return ( 
    <div className="flex">
      <SideBar collapsed={collapsed}/>
      <div>
        <LuMenu onClick={() => setCollapsed(!collapsed)} className="m-6 text-2xl"/>
      </div>
    </div> 
  );
}
 
export default Admin;