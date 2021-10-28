import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { changeCartVisibility } from '../store/cartVisibility/cartVisiblity.action';

//Components
import CartItem from './CartItem';

const CartComponent = () => {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const products = useSelector(state => state.products);

  const [promoCodeCorrect, setpromoCodeCorrect] = useState(true);

  const renderCartItems = cart.map(item => <CartItem key={item.id} item={item} />);

  const sumPrice = cart.reduce((prev, curr) => {
    const product = products.find(e => curr.id === e.id);
    return (prev + product.price * curr.amount)
  }, 0).toFixed(2);

  const handlePromoInput = (e) => {
    const rule = /(\\d+)/
    const numbersAmount = e.target.value.match(rule);
    console.log(numbersAmount)
    if (e.target.value === "") {
      setpromoCodeCorrect(undefined)
    } else if (e.target.value.length < 2) {
      setpromoCodeCorrect(false)
    } else {
      setpromoCodeCorrect(true)
    }
  }

  return (<div className="cart">
    <button
      className="cart__curtine"
      onClick={() => {
        dispatch(changeCartVisibility())
      }}
    />
    <div className="cart__bag" >
      <div className="cart__bag-close">
        <button onClick={() => { dispatch(changeCartVisibility()) }}><FontAwesomeIcon icon={faTimes} /></button>
      </div>
      <ul className="cart__bag-list">
        {renderCartItems}
      </ul>
      <div className="cart__bag-resume">
        <div className="cart__bag-resume-money">
          <div className="cart__bag-resume-promo">
            <span>Kod promocyjny</span>
            <input type="text" maxLength="15" className={`${promoCodeCorrect ? "correct" : "uncorrect"}`} onChange={handlePromoInput} />
          </div>
          <div className="cart__bag-resume-sum">
            <span className="cart__bag-resume-sum-title">SUMA:</span>
            <span className="cart__bag-resume-sum-cash">{`${sumPrice} zł`}
            </span>
          </div>
        </div>
        <div className="cart__bag-resume-buy">
          <button onClick={() => { dispatch(changeCartVisibility()) }}>wróć</button>
          <button>opłać</button>
        </div>
      </div>
    </div>
  </div>);
}

export default CartComponent;