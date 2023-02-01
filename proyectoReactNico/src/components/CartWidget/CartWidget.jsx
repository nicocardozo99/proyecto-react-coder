import React from 'react'
import './CartWidget.css'


function CartWidget() {
  return (
    <div className='cart-widget'>
    <i className='bi bi-cart'></i>
    <div className='qty-display'>0</div>
    </div>
  )
}

export default CartWidget;