import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { doLogout } from "../../redux/action/userAction";
import { CiLogout } from "react-icons/ci";

const Header = () => {
	const [isOpenSetting, setIsOpenSetting] = useState(false);
	console.log(isOpenSetting);
	const account = useSelector(state => state.user.account);
	const isAuthenticated = useSelector(state => state.user.isAuthenticated);
	const previewImage = isAuthenticated ? `data:image/png;base64,${account.image}` : "";
	console.log(account, previewImage, isAuthenticated);
	const navigate = useNavigate();
	const dispatch = useDispatch();	 
	
	const handleLogin = () => {
		navigate("/login");
	}

	const handleRegister = () => {
		navigate("/register");
	}

	const handleLogout = () => {
		dispatch(doLogout());
		navigate("/");
	}

	const handleOnClickSetting = () => {
		setIsOpenSetting(!isOpenSetting);
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
				<div className="">
					{ isAuthenticated 
						?
							<div className="">
								<img src={previewImage} alt="" className="block h-10 w-10 rounded-full border border-sky-500 cursor-pointer" onClick={handleOnClickSetting} />
							 {isOpenSetting && 
								<div className="absolute top-16 right-32 flex flex-col border border-gray-200 bg-white rounded-lg">
									<div className="flex border-b border-gray-200	p-4">
										<img src={previewImage} alt="" className="block h-10 w-10 rounded-full border border-sky-500" />
										<div className="ml-2 flex flex-col text-lg">
											<p> {account.username} </p>
											<p>	{account.email} </p>
										</div>
									</div>
									<div className="p-4 hover:bg-gray-50 cursor-pointer" onClick={handleLogout}>
										<CiLogout className="inline mr-2" /> Log out
									</div>
								</div>
								}
							</div>
						: 
							<>
								<button className="mr-4 rouded-md px px-4 py-2 font-medium hover:opacity-80" onClick={() => handleLogin()}>Log in</button>
								<button className="rounded-md border px-4 border-black py-2 text-white font-medium bg-slate-900 hover:opacity-80" onClick={() => handleRegister()}>Sign up</button>
							</>
					}
					
				</div>
			</div>
		</>
	);
};

export default Header;
