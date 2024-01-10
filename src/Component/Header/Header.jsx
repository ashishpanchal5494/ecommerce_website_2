import React from 'react'
 import "./Header.scss"
// import {ReactComponent as Logo} from "../../assets/crown.svg"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { connect } from 'react-redux'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import MenuIcon from '@mui/icons-material/Menu';
import { auth } from '../../Firebase/Firebase'


import CartIcon from '../CartIcon/CartIcon'
import CartDropDown from '../CartDropDown/CartDropDown'
import { selectCurrentUser } from '../../Redux/user/userSelector'
import { selectCartHidden } from '../../Redux/Cart/CartSelector'

import { NavLink, Link } from 'react-router-dom'
// import Search from '../../Search/Search';
// import Directory from '../Directory/Directory';
// import { useState } from 'react';



function Header({currentUser, hidden}) {
  // const [showDirectory, setShowDirectory] = useState(false); // State to control rendering of Directory

  // const handleFilterItems = (filteredItems) => {
  //   // If filteredItems has some items, hide the Directory component
  //   setShowDirectory(filteredItems.length === 0);
  // };
  return (
   
    < div className='header'>
  


      <Link className='logo-container '  to='/'>
        < DashboardCustomizeOutlinedIcon className='home-logo' />
        <span className='home'>HOME</span> 
      </Link>
     {/* <Search onFilterItems={handleFilterItems}/>
     {showDirectory && <Directory  />}  */}
      <div className='options' >
        <NavLink className='option'  to='/shop'>
          < ShoppingCartOutlinedIcon className='shop-log' />
           <span className='shop'>SHOP</span> 
        </NavLink>
        <NavLink className='option'  to='/contact'>
        <CallOutlinedIcon className='contact-logo'/>
        <span className='contact'>CONTACT</span> 
        </NavLink>
        <div className="user" >
        <PersonOutlineOutlinedIcon className='user-icon'/>
        {
          currentUser?
          <div className='option' onClick={() => auth.signOut()} >
            <span className='contact'>SIGN OUT</span> 
           </div>
          :
        <NavLink className='option'  to="/signin">
         <span className='contact'>SIGN IN</span>
          
          </NavLink>
        }

        </div>
        <div className='option'>
        <CartIcon/>
        <span className='bag'>BAG</span>
        </div>
      </div>
     { 
     hidden ? null :
     <CartDropDown/>
     }

    

    </div>
  )
}

const mapStateToProps = state=> ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state)
})

export default connect(mapStateToProps)(Header);


