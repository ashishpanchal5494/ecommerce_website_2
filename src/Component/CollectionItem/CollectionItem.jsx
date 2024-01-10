import React from 'react'

import "./CollectionItem.scss"
import CustomButton from '../CustomButton/CustomButton'

import { connect } from 'react-redux'
import { addItem } from '../../Redux/Cart/CartAction'
import { NavLink } from 'react-router-dom'




function CollectionItem( {item, addItem}) {
  const { id,  name, price, imageUrl} = item;

  return (
    <NavLink to={`item/${id}`}>

    <div className='collection-item'  >
      <div className="image"
      style={{backgroundImage : `url(${imageUrl})`}}  />
        <div className="collection-footer">
            <span className='name'>{name}</span>
            <span className='price'>$    {price}</span>
        </div>
        <CustomButton onClick={()=> addItem(item)} inverted>ADD TO CART</CustomButton>
    </div>

  
    </NavLink>
    
  )
}

const mapDispatchToProps = dispatch => ({
  addItem : item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps) (CollectionItem)
