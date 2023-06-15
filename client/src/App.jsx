import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shops from './pages/Shops';
import Card from './pages/Card';
import Details from './pages/Details';
import Login from './pages/Login';
import Register from './pages/Register';
import Shipping from './pages/Shipping';
import { useDispatch } from 'react-redux';
import { get_category } from './store/Reducers/homeReducer';


const App = () => {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_category())
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/shops' element={<Shops />} />
      <Route path='/card' element={<Card />} />
      <Route path='/shipping' element={<Shipping />} />
      <Route path='/product/details/:slug' element={<Details />} />
    </Routes>
  )
}

export default App

