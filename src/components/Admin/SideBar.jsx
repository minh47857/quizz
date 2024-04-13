import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { MdSpaceDashboard } from "react-icons/md";
import { FaList } from "react-icons/fa";

const SideBar = ({ collapsed }) => {
  return (
    <div className="h-screen">
      <Sidebar collapsed={collapsed} backgroundColor="#f2ece4" className="h-screen">
        {!collapsed && <div className="text-2xl font-bold ml-6 mt-6"> Quizz </div>}
        <Menu>
          <MenuItem icon={<MdSpaceDashboard />}> DashBoard </MenuItem>
          <SubMenu label="Features" icon={<FaList/>}>
            <MenuItem> Quản lý Users </MenuItem>
            <MenuItem> Quản lý Bài Quizz </MenuItem>
            <MenuItem> Quản lý Câu Hỏi </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideBar;