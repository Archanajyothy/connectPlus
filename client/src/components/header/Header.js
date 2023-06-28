import React from 'react'
import {Link} from 'react-router-dom'
import Menu from './menu'
import Search from './Search'


const Header = () => {
    

  return (
    <div className='main_div'>
      <div className="header ">
     {/* <div className="header bg-light"> */}
        <nav className="navbar navbar-expand-lg navbar-light 
         justify-content-between align-middle"> {/* I removed bg-light class from here 
         also to make the bg color visible.*/}
            <Link  to="/" className='logo'>
            <h1 className=" navbar-brand text-uppercase p-0 m-0" 
            onClick={() => window.scrollTo({top: 0})} >
              Connect+
            </h1> 
            </Link>

            <Search />

            <Menu />

        </nav>
    </div>
    </div>
  )
}

export default Header