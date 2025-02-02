import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import AskQuestion from './pages/askquestion/AskQuestion';

const AllRoutes = ({slidein, handleSlidein}) => {
  return (
    <Routes>
      <Route path='/' element={<Home slidein={slidein} handleSlidein={handleSlidein}/>}></Route>
      <Route path='/AskQuestion' element={<AskQuestion/>}></Route>
    </Routes> 
  )
}

export default AllRoutes
