import React from "react";
import { plantList } from '../data/plantList'
import '../styles/ShoppingList.css'

function ShoppingList() {
    const tabl = [];
    plantList.forEach((plant) => (
        tabl.push(plant.category)
    ))
    let categories = [...new Set(tabl)]
    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className="lmj-plant-list">
                {plantList.map((plant) => (
                    <li key={plant.id} className="lmj-plant-item">
                        {plant.name}
                        {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList