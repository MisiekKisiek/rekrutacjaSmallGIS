import React from 'react';

//Redux
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cart/cart.action'

const ProductItem = ({ data }) => {

  const dispatch = useDispatch();

  const { id, description, img, name, price } = data;

  const shortDescription = description.slice(0,100).concat("...");


  return (<li className="product__item">
    <div className="product__item-wrap">
      <div className="product__item-image">
        <img src={`./${img}`} alt={`Produkt ${name}`} />
      </div>
      <div className="product__item-name-price-wrap">
        <h2 className="product__item-name">
          {name}
        </h2>
        <span className="product__item-price">
          {price} zł
        </span>
      </div>
      <div className="product__item-desc">
        {shortDescription}
        <span>{description}</span>
      </div>
      <button 
        className="product__item-add-cart"
        onClick={()=>{ dispatch(addToCart(id)) }}
      >
        <span></span>
        dodaj do koszyka
      </button>
    </div>
  </li>);
}

export default ProductItem;