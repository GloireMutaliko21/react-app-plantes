import React from "react";
import { plantList } from '../data/plantList'
import '../styles/ShoppingList.css'
import PlantItem from "./PlantItem";

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
                {plantList.map(({ id, cover, name, water, light }) => (
                    <PlantItem
                        id={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList