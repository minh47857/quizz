import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { MdSpaceDashboard } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const SideBar = ({ collapsed }) => {
  return (
    <div className="h-screen sticky top-0">
      <Sidebar collapsed={collapsed} backgroundColor="#f2ece4" className="h-screen">
        <div className="text-2xl font-bold ml-6 mt-6" style={{opacity: collapsed ? 0 : 1}}> Quizz </div>
        <Menu>
          <MenuItem component={<NavLink to="/admin"/>} icon={<MdSpaceDashboard />}> DashBoard </MenuItem>
          <SubMenu label="Features" icon={<FaList/>}>
            <MenuItem component={<NavLink to="/admin/manage-users"/>} > Quản lý Users </MenuItem>
            <MenuItem  component={<NavLink to="/admin/manage-quizzes"/>} > Quản lý Bài Quizz </MenuItem>
            <MenuItem> Quản lý Câu Hỏi </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>  
    </div>
  );
}

export default SideBar;