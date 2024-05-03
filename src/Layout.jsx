import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  Route, Routes } from 'react-router-dom'
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

const Layout = () => {
  return (  
    <>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/users" element={<ListQuizz/>}/>
        </Route>
        <Route path="/admin" element={<Admin/>}>
          <Route index element={<DashBoard/>}/>
          <Route path="manage-users" element={<ManageUser/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
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