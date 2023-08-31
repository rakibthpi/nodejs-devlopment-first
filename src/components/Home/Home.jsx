// import React from 'react';
import { useEffect, useState } from "react";
import "./Home.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb } from "../../utilitis/fackdb";

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
        addToDb(pro.id);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;