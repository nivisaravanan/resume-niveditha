import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Website/Home';
import About from'./Website/About';
import Service from './Website/Service';
import Skill from './Website/Skill';
import Project from './Website/Project';
import Contact from './Website/Contact';
import './App.css';


 

const Main = () => {



  return (<>
    <div className='menubar'>
    <Router>
      <div className="main">
        <h3>PORTFOLIO</h3>
        <ul>
          <li className='nav' > <Link to="/" style={{textDecoration: 'none',color:'white', paddingTop:'20px'}} >Home</Link></li>
          <li className='nav'> <Link to="/About" style={{textDecoration: 'none',color:'white'}} >About</Link></li>
          <li className='nav'> <Link to="/Service" style={{textDecoration: 'none',color:'white'}} >Service</Link></li>
          <li className='nav'> <Link to="/Skill" style={{textDecoration: 'none',color:'white'}} >Skill</Link></li>
          <li className='nav'> <Link to="/Project" style={{textDecoration: 'none',color:'white'}} >Project</Link></li>
          <li className='nav'> <Link to="/Contact" style={{textDecoration: 'none',color:'white'}} >contact</Link></li>
          
          

        </ul> 
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/About" element={<About/>}></Route>
          <Route exact path="/Service" element={<Service/>}></Route>
          <Route exact path="/Skill" element={<Skill/>}></Route>
          <Route exact path="/Project" element={<Project/>}></Route>
          <Route exact path="/Contact" element={<Contact/>}></Route>
          
        </Routes>
        
      </div>
    </Router>
  </div>
   
   
  
  
 

</>

  )
}

export default Main