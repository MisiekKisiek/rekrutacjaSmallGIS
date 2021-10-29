import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, changeCartItemAmount } from '../store/cart/cart.action';

const CartItem = ({ item }) => {

  const [amountInput, setamountInput] = useState(item.amount);

  const dispatch = useDispatch();

  const products = useSelector(state => state.products);

  const product = products.find(product => item.id === product.id);
  const { id, img, name, price, } = product;

  const correctName = name.length < 15 ? name : name.slice(0, 15).concat("...");

  const onChangeAmount = (value) => {
    if (value === "") {
      setamountInput(value);
    } else if (value <= 10) {
      setamountInput(value);
      dispatch(changeCartItemAmount(id, value));
    }
  }

  return (<li className="cart__bag-item">
    <div className="cart__bag-item-image">
      <img src={img} alt={`Mysz ${name}`} />
    </div>
    <div className="cart__bag-item-info">
      <h2 className="cart__bag-item-name">{correctName}</h2>
    </div>
    <div className="cart__bag-item-sum">
      <span className="cart__bag-item-price">{`${price.toFixed(2)} zł`}</span>
      <div className="cart__bag-item-det">
        <span>szt.</span>
        <input
          type="text"
          pattern="[0-9]+"
          value={amountInput}
          onChange={(e) => { onChangeAmount(e.target.value) }}
        />
        <button onClick={() => {
          dispatch(removeFromCart(id));
        }}><FontAwesomeIcon icon={faTrashAlt} /></button>
      </div>
    </div>
  </li>);
}

export default CartItem;