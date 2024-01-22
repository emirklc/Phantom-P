import React from 'react'
import Navbar from '../components/navbar/Navbar'
import "./home.css"
const Home = () => {
  return (
    <div className="App">
    <Navbar/>
    <div>
    <div className='mainTitle'>
    <span className='mainTitleTextLeft'>Phantom</span>
    <span className='mainTitleTextRight'>Pentest</span>
    </div>
    <div className='main'>
    <div className='mainleft'>
     <div className='leftChildContainer'>
               <p className='leftTextTitle'>Phantom</p>

    <p className='leftText'>
  ua. mco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum iusto cum rerum tenetur culpa! Maxime suscipit quo eaque numquam laboriosam?
    </p>
      <button className='homeBtn'>Run</button>

    </div>
    </div>
    <div className='mainright'>
    <img src={'/homePhoto.png'} alt="Home"  className='img' />
    </div>
    </div>
    </div>
 </div>
  )
}

export default Home