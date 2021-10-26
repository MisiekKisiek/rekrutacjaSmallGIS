import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

  return (<header className="header">
    <div className="header__logo">
      <FontAwesomeIcon icon={faCertificate} />
      Logo
    </div>
    <div className="header__cart">
      <button
        onClick={() => { }}
      >
        <FontAwesomeIcon icon={faShoppingBasket} />
      </button>
    </div>
  </header>);
}

export default Header;