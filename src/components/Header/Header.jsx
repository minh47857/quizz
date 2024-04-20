import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  }

  const handleRegister = () => {
    navigate("/register");
  }

  return (
    <>
      <div className="flex sticky w-full h-[80px] py-4 px-20 bg-transparent items-center justify-between z-10">
        <NavLink className="text-2xl font-bold" to="/">Quizz</NavLink>
        <nav className="font-semibold text-slate-700">
          <ul className="flex space-x-8">
            <li><NavLink className={({isActive}) => isActive ? "text-sky-500" : ""} to="/">Home</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? "text-sky-500" : ""} to="/users">User</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? "text-sky-500" : ""} to="/admin">Admin</NavLink></li>
          </ul>
        </nav>
        <div className="relative">
          <button className="mr-4 rouded-md px px-4 py-2 font-medium hover:opacity-80" onClick={() => handleLogin()}>Log in</button>
          <button className="rounded-md bordernded-sm px-4 border-black py-2 text-white font-medium bg-slate-900 hover:opacity-80" onClick={() => handleRegister()}>Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Header;
