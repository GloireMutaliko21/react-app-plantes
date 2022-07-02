import React from "react";
import '../styles/Cart.css'
import { useState } from "react";

function Cart() {
    const [cart, updateCart] = useState(0)
    const monsteraPrice = 8

    return (
        <div className="lmj-cart">
            <h2>Panier</h2>
            <div>
                Monstera : {monsteraPrice}€
                <button onClick={() => updateCart(cart + 1)}>
                    Ajouter
                </button>
            </div>
            <h3>Total : {monsteraPrice * cart}€</h3>
        </div>
    )
}

export default Cart;