// SportsItem.jsx

import React, { useEffect, useState } from "react";
import "../styles/SportsItem.css";
import Properties from "./Props/Properties";

import Cart from "./Cart"


function SportsItem() {
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState([])

    useEffect(() => {

        fetch('../../public/FakeDb/products.json')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(error => console.log("Error!", error))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

    }



    return (
        <div className='shop-container'>
            <div className='products-container'>  {
                items.map(data => <Properties key={data.id} data={data} handleAddToCart={handleAddToCart} ></Properties>)
            }</div>

            <div>
                <Cart cart={cart} product={items} ></Cart>
            </div>
        </div >

    )

}




export default SportsItem;
