import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';

const AllRoutes = ({slidein, handleSlidein}) => {
  return (
    <Routes>
      <Route path='/' element={<Home slidein={slidein} handleSlidein={handleSlidein}/>}></Route>
    </Routes>
  )
}

export default AllRoutes
