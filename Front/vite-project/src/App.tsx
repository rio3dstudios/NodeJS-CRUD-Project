import { useState,useEffect } from 'react'
import './App.css'
import { Home } from './components/Home';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const [currentUser, setCurrentUser] = useState(undefined);

  

  useEffect(() => {
    
    const user =  JSON.parse(localStorage.getItem('user') || '{}');

    if (JSON.stringify(user)!='{}') {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem("user");
  };

  return (


    <div>
      
       <Router>
         <Routes>
         <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          {currentUser ? ( <Route path="/dashboard" element={<Dashboard />} />):(<></>)}
          <Route path="/" element={<Home/>} />
         </Routes>
       </Router>
    </div>

    


  )
}

export default App
