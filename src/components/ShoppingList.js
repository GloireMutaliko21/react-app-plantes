import React from "react";
import { plantList } from '../data/plantList'

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
            <ul>
                {plantList.map((plant)=>(
                    <li key={plant.id}>{plant.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList