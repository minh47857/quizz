import './App.css'
import Header from './components/Header/Header'
import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>    
      <div className="main-container">
        <div className="sidenav-container">

        </div>
        <div className="app-content">
           <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default App
