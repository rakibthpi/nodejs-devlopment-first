/* eslint-disable react/prop-types */
// import React from 'react';
import "./Cart.css"

const Cart = ({ cart }) => {
    let total = 0;
    // console.log(cart);
    for (const single of cart) {
        total = total + single.price;
    }
    // console.log(total);

    // console.log(cart);
    return (
        <div className="positionstyky">
            <div className="positionstyky_sub">
                <h1>Order Summary</h1>
                <div className="right_card">
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: ${total}</p>
                    <p>Total Shipping Charge: $5</p>
                    <p>Tax: $114</p>
                    <p>Grand Total: $1559</p>
                    <button>Clear Cart</button>
                    <button>Review Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;