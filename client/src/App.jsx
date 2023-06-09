import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shops from './pages/Shops';
import Card from './pages/Card';
import Details from './pages/Details';
import Login from './pages/Login';
import Register from './pages/Register';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/shops' element={<Shops />} />
      <Route path='/card' element={<Card />} />
      <Route path='/product/details/:slug' element={<Details />} />
    </Routes>
  )
}

export default App

