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
            {/* <h1 className=" navbar-brand text-uppercase p-0 m-0" 
            onClick={() => window.scrollTo({top: 0})} >
              Connect+
            </h1>  */}

            <div className=" navbar-brand text-uppercase p-0 m-0 logo" 
            onClick={() => window.scrollTo({top: 0})} >
              <img src="https://res.cloudinary.com/connect-plus/image/upload/v1688822979/connect-plus/Logo/connect_vlmzyw.svg" alt="logo" 
              style={{ width: '225px', height: '50px' }} />
            </div> 

            </Link>

            <Search />

            <Menu />

        </nav>
    </div>
    </div>
  )
}

export default Header