import React from "react";
import { plantList } from '../data/plantList'
import '../styles/ShoppingList.css'
import CareScale from "./CareScale";

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
                        {plant.isBestSale && <span>🔥</span>}
                        {plant.name}
                        <CareScale careType="water" scaleValue={plant.water} />
                        <CareScale careType="light" scaleValue={plant.light} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList