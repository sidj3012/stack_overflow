import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
function App() {
  const [slidein, setSlidein] = useState(true);
  useEffect(()=>{
    if(window.innerWidth<=768){
      setSlidein(false)
    }
  }, [])
  const handleSlidein=()=>{
    if(window.innerWidth<=768){
      setSlidein((state)=>!state);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar handleSlidein={handleSlidein}/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;