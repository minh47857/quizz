import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './components/Admin/Admin.jsx'
import User from './components/User/User.jsx'
import HomePage from './components/Home/HomePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/users" element={<User/>}/>
        <Route index element={<HomePage/>}/>
      </Route>
        <Route path="/admin" element={<Admin/>}/>
    </Routes>
  </BrowserRouter>
)
