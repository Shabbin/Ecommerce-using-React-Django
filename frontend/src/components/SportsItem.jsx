// SportsItem.jsx

import React, { useEffect, useState } from "react";
import "../styles/SportsItem.css";
import Properties from "./Props/Properties";









function SportsItem({ item, addToCart }) {
    const [items, setItems] = useState([])

    useEffect(() => {

        fetch('../../public/FakeDb/products.json')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(error => console.log("Error!", error))
    }, [])
    return (
        <div className='shop-container'>
            <div className='products-container'>  {
                items.map(data => <Properties key={data.id} data={data}></Properties>)
            }</div>
        </div >

    )

}




export default SportsItem;
