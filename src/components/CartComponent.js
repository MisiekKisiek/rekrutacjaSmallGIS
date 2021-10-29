import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTruck } from '@fortawesome/free-solid-svg-icons';

//Redux
import { useDispatch, useSelector, batch } from 'react-redux';
import { changeCartVisibility } from '../store/cartVisibility/cartVisiblity.action';
import { changePromoPercent, changePromoCodeCorrect } from '../store/price/price.action';
import { clearCart } from '../store/cart/cart.action';

//Components
import CartItem from './CartItem';

const CartComponent = () => {

  const correctValues = {
    neutral: "",
    correct: "correct",
    uncorrect: "uncorrect"
  }

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(changePromoCodeCorrect(""));
      dispatch(changePromoPercent(0));
    };
  }, []);

  const [promoCodeInput, setpromoCodeInput] = useState("");
  const [sendingOrder, setsendingOrder] = useState(false);
  const [orderSucced, setorderSucced] = useState(false);

  const cart = useSelector(state => state.cart);
  const products = useSelector(state => state.products);
  const price = useSelector(state => state.price);
  const { promoPercent, promoCodeCorrect } = price;

  const sumPrice = (cart.reduce((prev, curr) => {
    const product = products.find(e => curr.id === e.id);
    return (prev + product.price * curr.amount)
  }, 0) * (1 - promoPercent / 100)).toFixed(2);

  const dispatchPromo = (correct, numbers) => {
    batch(() => {
      dispatch(changePromoCodeCorrect(correct));
      dispatch(changePromoPercent(numbers));
    })
  }

  const handlePromoInput = (e) => {
    const rule = /\D+/;
    setpromoCodeInput(e.target.value);
    let inputNumbers = e.target.value;
    while (inputNumbers.match(rule) !== null) {
      const trueVal = inputNumbers.match(rule);
      inputNumbers = inputNumbers.replace(trueVal[0], "")
    }
    if (e.target.value === "") {
      dispatchPromo(correctValues.neutral, 0)
    } else if (inputNumbers.length < 2 || inputNumbers.length > 8) {
      dispatchPromo(correctValues.uncorrect, 0)
    } else {
      dispatchPromo(correctValues.correct, inputNumbers.length)
    }
  };

  const promoCodeTitle = () => {
    if (promoCodeCorrect === correctValues.uncorrect) {
      return (<span className={correctValues.uncorrect}>Błędny kod promocyjny</span>)
    } else if (promoCodeCorrect === correctValues.correct) {
      return (<span className={correctValues.correct}>Rabat {promoPercent}% został naliczony</span>)
    } else {
      return (<span>Wprowadź kod promocyjny</span>)
    }
  };

  const renderCartItems = (cartItems) => {
    if (orderSucced) {
      return <li>
        <span className="cart__bag-ordered">
          Twoje zamówienie zostało złożone
          <FontAwesomeIcon icon={faTruck} />
        </span>
      </li>
    } else if (cartItems.length === 0) {
      return <li>
        <span className="cart__bag-empty">Twój koszyk jest pusty</span>
      </li>
    }
    else {
      return cart.map(item => <CartItem key={item.id} item={item} />)
    }
  }

  const handleSendOrder = () => {
    if (cart.length > 0) {
      setsendingOrder(true);
      setTimeout(() => {
        setsendingOrder(false);
        setpromoCodeInput("");
        setorderSucced(true);
        dispatch(clearCart());
        dispatchPromo(correctValues.neutral, 0);
      }, 3000);
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
        {renderCartItems(cart)}
      </ul>
      <div className="cart__bag-resume">
        <div className="cart__bag-resume-money">
          <div className="cart__bag-resume-promo">
            {promoCodeTitle()}
            <input
              type="text"
              maxLength="15"
              className={`${promoCodeCorrect}`}
              onChange={handlePromoInput}
              value={promoCodeInput}
            />
          </div>
          <div className="cart__bag-resume-sum">
            <span className="cart__bag-resume-sum-title">SUMA:</span>
            <span className="cart__bag-resume-sum-cash">{`${sumPrice} zł`}
            </span>
          </div>
        </div>
        <div className="cart__bag-resume-buy">
          <button onClick={() => { dispatch(changeCartVisibility()) }}>wróć</button>
          <button onClick={handleSendOrder}>
            {sendingOrder ? <span className="loading"></span> : "opłać"}
          </button>
        </div>
      </div>
    </div>
  </div>);
}

export default CartComponent;