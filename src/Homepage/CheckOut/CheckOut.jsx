import React from 'react'
import './CheckOut.scss'
import { selectCartItems, selectCartTotal } from '../../Redux/Cart/CartSelector'
import { connect } from 'react-redux'
import CheckOutItem from '../../Component/CheckOutItem/CheckOutItem'
import StripeButton from "../../Component/StripeButton/StripeButton"

function CheckOut({cartItems, total}) {
  return (
    <div className='checkout-page'>
      <div className="checkout-header">
        <div className="header-block">
          <span className='product'>Product</span>
        </div>
        <div className="header-block">
          <span className='discription'>Discription</span>
        </div>
        <div className="header-block">
          <span className='quantity'>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem =>(

          <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
        )
        
          )
      }

      <div className="total">
        <span>TOTAL: $ {total}</span>
      </div>
      <StripeButton price={total}/>
    </div>
  )
}

 const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state)
})

export default connect(mapStateToProps) (CheckOut)
