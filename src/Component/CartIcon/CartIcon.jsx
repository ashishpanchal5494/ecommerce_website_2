import React from 'react'
// import {ReactComponent as ShoppingIcon} from "../../assets/11.2 shopping-bag.svg"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import "./CartIcon.scss"
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../Redux/Cart/CartAction'
import { selectCartItemsCount } from '../../Redux/Cart/CartSelector'


function CartIcon({toggleCartHidden, itemCount}) {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
        < ShoppingBagOutlinedIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
      
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
  itemCount : selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps) (CartIcon)
