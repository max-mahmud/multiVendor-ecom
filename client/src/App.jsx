import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shops from './pages/Shops';
import Card from './pages/Card';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shops' element={<Shops />} />
      <Route path='/card' element={<Card />} />
    </Routes>
  )
}

export default App

