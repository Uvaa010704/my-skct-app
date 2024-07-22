import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Signup from '../Sign/Sign'
import Login from '../Login/Login'
import Home from '../Home/Home'
const App1 = () => {
  return (
    <div>
        <center>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Signup/>}/>
            <Route path='Login' element={<Login/>}/>
            <Route path='Home' element={<Home/>}/>
        </Route>
        </Routes>
        </BrowserRouter>
        </center>
    </div>
  )
}
export default App1;



