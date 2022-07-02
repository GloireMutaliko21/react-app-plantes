import React from "react";
import { plantList } from '../data/plantList'
import '../styles/ShoppingList.css'
import PlantItem from "./PlantItem";

function ShoppingList({ cart, updateCart }) {
    const tabl = [];
    plantList.forEach((plant) => (
        tabl.push(plant.category)
    ))
    let categories = [...new Set(tabl)]
    return (
        <div className="lmj-shopping-list">
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className="lmj-plant-list">
                {plantList.map(({ id, cover, name, water, light }) => (
                    <div key={id}>
                        <PlantItem cover={cover} name={name} water={water} light={light} />
                        <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
                    </div>

                ))}
            </ul>
        </div>
    )
}

export default ShoppingList