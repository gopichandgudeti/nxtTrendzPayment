import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        decrementCartItemQuantity,
        incrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {id, title, brand, quantity, price, imageUrl} = cartItemDetails
      const onRemoveCartItem = () => {
        removeCartItem(id)
      }
      // TODO: Update the functionality to increment and decrement quantity of the cart item

      const onClickDecrementItems = () => {
        decrementCartItemQuantity(id)
      }

      const onClickIncrementItems = () => {
        incrementCartItemQuantity(id)
      }

      return (
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">by {brand}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                type="button"
                data-testid="minus"
                onClick={onClickDecrementItems}
                className="quantity-controller-button"
              >
                <BsDashSquare
                  color="#52606D"
                  size={12}
                  aria-label="decrement"
                />
              </button>
              <p className="cart-quantity">{quantity}</p>
              <button
                type="button"
                data-testid="plus"
                onClick={onClickIncrementItems}
                className="quantity-controller-button"
              >
                <BsPlusSquare
                  color="#52606D"
                  size={12}
                  aria-label="increment"
                />
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs {price * quantity}/-</p>
              <button
                className="remove-button"
                type="button"
                data-testid="remove"
                onClick={onRemoveCartItem}
              >
                Remove
              </button>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
          >
            <AiFillCloseCircle color="#616E7C" size={20} aria-label="delete" />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
