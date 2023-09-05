// import React from 'react';

import { useState } from 'react';
import Cart from '../Cart/Cart';
import './Order.css';
import { useLoaderData } from "react-router-dom";
import { removeCart, removeSingleItem } from '../../utilitis/fackdb';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState(products);

    const removeCartData = () => {
        const locastorageResetData = []
        setCart(locastorageResetData);
        removeCart()
    }
    const handleProductDelete = (id) => {
        const addedProduct = cart.filter(pd => pd.id !== id)
        setCart(addedProduct);
        removeSingleItem(id)
    }

    return (
        <div className="orders_main">
            <div className='leftOrder'>
                {
                    cart.map(pd => <ReviewItem
                        key={pd.id}
                        products={pd}
                        handleProductDelete={handleProductDelete}
                    ></ReviewItem>)
                }
            </div>
            <div className='rightOder'>
                <Cart cart={cart} removeCartData={removeCartData}>Order</Cart>
            </div>
        </div>
    );
};

export default Order;