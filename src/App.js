import React, { useEffect } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './store/products/products.action';

//Components
import Header from './components/Header';
import CartComponent from './components/CartComponent';
import ProductList from './components/ProductList';


function App() {

  const dispatch = useDispatch();

  const cartVisibility = useSelector(state => state.cartVisibility.visible);

  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(products => dispatch(setProducts(products))
      )
  }, [dispatch]);

  return (
    <div className={`App ${cartVisibility ? "App__unvisible" : ""}`} aria-hidden={cartVisibility}>
      <Header />
      {cartVisibility && <CartComponent />}
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
