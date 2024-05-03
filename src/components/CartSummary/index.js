// Write your code here
import React, {useState} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => {
  const [selectedPaymentMenthod, setselectedPaymentMenthod] =
    useState('cashOnDelivery')

  const [confirmOrder, setconfirmOrder] = useState(false)


  const onChangePaymentMethod = event => {
    setselectedPaymentMenthod(event.target.value)
  }

  const onClickConfirmOrder = () => {
    if (selectedPaymentMenthod === "cashOnDelivery") {
      setconfirmOrder(true)
    }
    else {
      setconfirmOrder(false)
    }
  }

  const checkPaymentMethod =
    selectedPaymentMenthod == 'cashOnDelivery' && 'enabled-btn'

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        let totalCost = 0
        const cartItemsCount = cartList.length
        cartList.forEach(eachCartItem => {
          totalCost += eachCartItem.price * eachCartItem.quantity
        })

        return (
          <div className="order-total-container">
            <h1 className="order-total">
              Order Total: <span className="total-cost">Rs {totalCost}/-</span>
            </h1>
            <p className="items-count-text">{cartItemsCount} items in cart</p>
            <Popup
              modal
              trigger={
                <button type="button" className="checkout-btn">
                  Checkout
                </button>
              }
            >
              <div className="popup-container">
                <h1 className="sub-heading">Select payment method</h1>
                <ul className="payment-methods-container">
                  <li className="payment-method">
                    <input
                      type="radio"
                      id="card"
                      checked={selectedPaymentMenthod === 'card'}
                      value="card"
                      onChange={onChangePaymentMethod}
                    />
                    <label htmlFor="card">Card</label>
                  </li>

                  <li className="payment-method">
                    <input
                      type="radio"
                      id="netBanking"
                      checked={selectedPaymentMenthod === 'netBanking'}
                      value="netBanking"
                      onChange={onChangePaymentMethod}
                    />
                    <label htmlFor="netBanking">Net Banking</label>
                  </li>

                  <li className="payment-method">
                    <input
                      type="radio"
                      id="upi"
                      checked={selectedPaymentMenthod === 'upi'}
                      value="upi"
                      onChange={onChangePaymentMethod}
                    />
                    <label htmlFor="upi">UPI</label>
                  </li>

                  <li className="payment-method">
                    <input
                      type="radio"
                      id="wallet"
                      checked={selectedPaymentMenthod === 'wallet'}
                      value="wallet"
                      onChange={onChangePaymentMethod}
                    />
                    <label htmlFor="wallet">Wallet</label>
                  </li>

                  <li className="payment-method">
                    <input
                      type="radio"
                      id="cashOnDelivery"
                      checked={selectedPaymentMenthod === 'cashOnDelivery'}
                      value="cashOnDelivery"
                      onChange={onChangePaymentMethod}
                    />
                    <label htmlFor="cashOnDelivery">Cash on delivery</label>
                  </li>
                </ul>
                <div className="cart-items-summary">
                  <p>Number of items</p>
                  <p>{cartItemsCount}</p>
                </div>
                <div className="cart-items-summary">
                  <p>Total price</p>
                  <p>Rs {totalCost}/-</p>
                </div>
                <button
                      type="button"
                      className={`confirm-order-btn ${checkPaymentMethod}`}
                      onClick={onClickConfirmOrder}
                    >
                      Confirm order
                </button>
                {confirmOrder === true && <p>Your order has been placed successfully</p>}
              </div>
            </Popup>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartSummary
