import React from "react";


const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let shipping = 0;
    for (const product in cart) {
        total = total + cart[product].price;
        shipping = shipping + cart[product].shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);

    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Selected Items: {cart.length}</h5>
            <h5>Total Price: $ {total}</h5>
            <h5>Shipping Charge:${shipping}</h5>
            <h5>Tax : $ {tax}</h5>
            <h3>Grand Total : ${grandTotal}</h3>
            <button>Clear Cart</button>
            <button>Review Order</button>
        </div>
    );
};

export default Cart;