import React from 'react';
import './Properties.css'
const Properties = ({ data }) => {
    const { img, name, category, seller, price, ratings, shipping } = data
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>  {name}</p>
                <p>This is Category: {category}</p>
                <p>This is product: ${price}</p>
                <p>This is Seller: {seller}</p>
                <p><small>Ratings : {ratings} starts</small></p>
            </div>

            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Properties;