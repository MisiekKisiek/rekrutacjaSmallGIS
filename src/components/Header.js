import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

//Redux
import { useDispatch } from 'react-redux';
import { changeCartVisibility } from '../store/cartVisibility/cartVisiblity.action';

const Header = () => {

  const dispatch = useDispatch();

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
      </button>
    </div>
  </header>);
}

export default Header;