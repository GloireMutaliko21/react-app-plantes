import React from 'react';
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png'
import Footer from './Footer';

function App() {
  return (
    <div>
      <Banner>
        <img src={logo} alt='La maison jungle' className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <Cart />
      <ShoppingList />
      <Footer />
    </div>
  )
}

export default App
