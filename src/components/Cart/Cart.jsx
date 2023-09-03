/* eslint-disable react/prop-types */
// import React from 'react';
import "./Cart.css"

const Cart = ({ cart, removeCartData }) => {
    const remainder = removeCartData;
    let totalPrice = 0;
    let totalQuantity = 0;
    let totalShiping = 0;
    for (const single of cart) {
        // if (!single.quantity) {
        //     single.quantity = 1;
        // }
        totalPrice = totalPrice + single.price * single.quantity;
        totalQuantity = totalQuantity + single.quantity;
        totalShiping = totalShiping + single.shipping;
    }
    const totalTxt = totalPrice * 0.05;
    const grandTotal = totalPrice + totalShiping;
    return (
        <div className="positionstyky">
            <div className="positionstyky_sub">
                <h1>Order Summary</h1>
                <div className="right_card">
                    <p>Selected Items: {totalQuantity}</p>
                    <p>Total Price: ${totalPrice}</p>
                    <p>Total Shipping Charge: ${totalShiping}</p>
                    <p>Tax: ${totalTxt}</p>
                    <p>Grand Total: ${grandTotal}</p>
                    <button onClick={() => remainder()}>Clear Cart</button>
                    <button >Review Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;