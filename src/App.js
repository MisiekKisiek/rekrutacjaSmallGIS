import React from 'react';

//Components
import Header from './components/Header';
import ProductList from './components/ProductList';


function App() {
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
