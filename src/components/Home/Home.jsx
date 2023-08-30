// import React from 'react';
import { useEffect, useState } from "react";
import "./Home.css";
import Product from "../Product/Product";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (pro) => {
        let newCart = [...cart, pro];
        setCart(newCart);
    }

    return (
        <div className="shopArea">
            <div className="home_card_left">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="home_card_right">
                <h1>Order Summary</h1>
                <div className="right_card">
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: ${cart?.price}</p>
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

export default Home;