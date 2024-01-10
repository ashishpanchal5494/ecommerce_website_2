import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import './CartDropDown.scss'
import { connect } from 'react-redux'
import CartItem from '../CartItem/CartItem'
import { selectCartItems } from '../../Redux/Cart/CartSelector'
import { useNavigate } from 'react-router'
import { toggleCartHidden } from '../../Redux/Cart/CartAction'

function CartDropDown({cartItems, dispatch}) {
  const navigate = useNavigate()
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {cartItems.length ?(
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
          ))) : ( 
            <span className='empty-message'>Your Cart is empty</span>
          )
        }
      </div>
      <CustomButton onClick={() => {navigate("/checkout")
    dispatch(toggleCartHidden())
    }} >GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps) (CartDropDown)
