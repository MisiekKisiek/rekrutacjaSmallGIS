import React, { useEffect } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './store/products/products.action';

//Components
import Header from './components/Header';
import ProductList from './components/ProductList';


function App() {

  const dispatch = useDispatch();

  const data = useSelector(state => state.cart);

  console.log("store",data)

  useEffect(() => {
    fetch('./products.json')
    .then( res => res.json())
    .then( products => 
      dispatch(setProducts(products))
    )
  }, [dispatch])
  
  return (
    <div className="App">
      <Header />
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
