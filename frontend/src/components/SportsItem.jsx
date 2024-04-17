// SportsItem.jsx

import React from "react";
import "../styles/SportsItem.css";

function SportsItem({ item, addToCart }) {
    return (
        <div className="sports-item">
            <img src={`${item.image}`} alt={item.name} />
            <h3>{item.name}</h3>
            <button onClick={() => addToCart(item.id)}>Add to Cart</button>
        </div>
    );
}

export default SportsItem;
