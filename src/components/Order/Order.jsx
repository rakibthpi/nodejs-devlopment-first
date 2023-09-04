// import React from 'react';

import { useState } from 'react';
import Cart from '../Cart/Cart';
import './Order.css';
import { Link, useLoaderData } from "react-router-dom";
import { removeCart } from '../../utilitis/fackdb';

const Order = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState(products);

    const removeCartData = () => {
        const locastorageResetData = []
        setCart(locastorageResetData);
        removeCart()
    }

    return (
        <div className="orders_main">
            <div className='leftOrder'>
                <h2>review product</h2>
            </div>
            <div className='rightOder'>
                <Cart cart={cart} removeCartData={removeCartData}>Order</Cart>
            </div>
        </div>
    );
};

export default Order;