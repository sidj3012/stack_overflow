import React from 'react'
import LeftSidebar from '../../components/leftsidebar/LeftSidebar';
import RightSidebar from '../../components/rightsidebar/RightSidebar';
import HomeMainbar from '../../components/homemainbar/HomeMainbar';
import '../../App.css';

const Home = ({slidein}) => {
  return (
      <div className="home-container-1">
        <LeftSidebar slidein={slidein}/>
        <div className="home-container-2">
            <HomeMainbar/>
            <RightSidebar/>
        </div>
      </div>
  )
}

export default Home
