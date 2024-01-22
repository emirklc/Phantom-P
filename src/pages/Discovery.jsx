import React from 'react'
import Navbar from '../components/navbar/Navbar'
import "./discovery.css"
import { Link } from "react-router-dom";

export const Discovery = () => {
  return (
    <div className="App">
    <Navbar/>
    <div>
    <div className='mainTitle'>
     <span className='mainTitleText'>Subfinder</span>
    </div>
    <div className='main'>
    <div className='mainleft'>
     <div className='leftChildContainer'>
    <p className='leftTextTitle'>Lorem ipsum dolor</p>
    <p className='leftText'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <Link to="/stepone"  >
    <button className='homeBtn'>Run</button>
</Link>
    
    </div>
    </div>
    <div className='mainright'>
    <img src={'/discoveryPhoto.png'} alt="Discovery" className='img' />
    </div>
    </div>
    </div>
    </div>
  )
}
