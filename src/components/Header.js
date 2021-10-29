import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { changeCartVisibility } from '../store/cartVisibility/cartVisiblity.action';

const Header = () => {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const amount = cart.reduce((prev, curr) => prev + curr.amount, 0)

  return (<header className="header">
    <div className="header__logo">
      <FontAwesomeIcon icon={faCertificate} />
      Logo
    </div>
    <div className="header__cart">
      <button
        onClick={() => { dispatch(changeCartVisibility()) }}
      >
        <FontAwesomeIcon icon={faShoppingBasket} />
        {amount > 0 ? <span className="header__cart-amount">{amount}</span> : null}
      </button>
    </div>
  </header>);
}

export default Header;