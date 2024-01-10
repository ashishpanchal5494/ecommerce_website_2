import React from 'react';
import './MenuItem.scss';
import { NavLink} from 'react-router-dom';


function MenuItem({ title, imageUrl, size, linkUrl }) {


  return (

    
    <NavLink to="shop" className={`${size} menu-item`} >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </NavLink>
  );
}

export default MenuItem;
