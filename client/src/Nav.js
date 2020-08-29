import React from 'react'
import {Link} from 'react-router-dom'

const Nav=()=>(
    <nav style={{marginTop:'20px'}}>
    <div className="nav-wrapper">
     
      <ul  className="nav nav-tabs">
        <li className='nav-item pr-3 pt-3 pd-3' >
            <Link to='/'>Home</Link></li>
        <li className='nav-item pr-3 pt-3 pd-3'>
            <Link to='/create'>Create</Link></li>
       
      </ul>
    </div>
  </nav>

);



export default Nav;