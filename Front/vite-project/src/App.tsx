import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (

    

<Router>
<Routes>
  <Route path="/login" element={<Login/>} />
  <Route path="/register" element={<Register/>} />
  <Route path="/dashboard" element={<Dashboard/>} />
  <Route path="/" element={<Login/>} />
</Routes>
</Router>
  )
}

export default App
