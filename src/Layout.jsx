import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {	Route, Routes } from 'react-router-dom'
import Admin from './components/Admin/Admin.jsx'
// import User from './components/User/User.jsx'
import HomePage from './components/Home/HomePage.jsx'
import ManageUser from './components/Admin/Content/ManageUser.jsx'
import DashBoard from './components/Admin/Content/DashBoard.jsx'
import Login from './components/Auth/Login.jsx'
import Register from './components/Auth/Register.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListQuizz from './components/User/ListQuizz.jsx'
import DetailQuizz from './components/User/DetailQuizz.jsx'
import ManageQuizzes from './components/Admin/Content/Quizzes/ManageQuizzes.jsx'
import ManageQuestion from './components/Admin/Content/ManagerQuestion.jsx'

const NotFound = () => {
	return (
		<div className="w-full h-screen flex items-center justify-center text-red-400 font-bold text-7xl">
			404 Not Found
		</div>
	)
}

const Layout = () => {
	return (	
		<>
			<Routes>
				<Route path="/" element={<App/>}>
					<Route index element={<HomePage/>}/>
					<Route path="/users" element={<ListQuizz/>}/>
				</Route>
				<Route path="/quiz/:id" element={<DetailQuizz/>}/>
				<Route path="/admin" element={<Admin/>}>
					<Route index element={<DashBoard/>}/>
					<Route path="manage-users" element={<ManageUser/>}/>
					<Route path="manage-quizzes" element={<ManageQuizzes/>}/>
					<Route path="manage-questions" element={<ManageQuestion/>}/>
				</Route>
				<Route path="/login" element={<Login/>}/>
				<Route path="/register" element={<Register/>}/>
				<Route path="*" element={<NotFound/>}/>
			</Routes>
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
		</>
	);
}
 
export default Layout;