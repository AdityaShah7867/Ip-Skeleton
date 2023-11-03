import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register';
import Private from './components/Privateroutes.jsx/Private';
import Addp from '../src/Pages/Addp';
import Land from '../src/Pages/Land';



const App = () => {

  return (
    <>
     
      <Router>
  
        <ToastContainer/>
        <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Land />} />



        <Route path="/" element={<Private/>} >

          <Route path="/home" element={<Home />} />
          <Route path="/addp" element={<Addp />} />

        </Route>


       

        </Routes>
        
      </Router>
    
    </>


)}

export default App