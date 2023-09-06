// import React from 'react';
import { useEffect, useState } from "react";
import "./Home.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getItemCart, removeCart, removeSingleItem } from "../../utilitis/fackdb";
import { Link } from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const dataLocastorage = getItemCart();
        const saveProduct = [];
        for (const id in dataLocastorage) {
            const addedProduct = products.find(product => product.id == id);
            if (addedProduct) {
                let quantity = dataLocastorage[id];
                addedProduct.quantity = quantity;
                saveProduct.push(addedProduct);
            }
        }
        setCart(saveProduct);
    }, [products]);

    const handleAddToCart = (product) => {
        let newCart = [];
        // let newCart = [...cart, pro];
        let axists = cart.find(pd => pd.id === product.id);
        if (!axists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            axists.quantity = axists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id)
            newCart = [...remaining, axists];
        }
        setCart(newCart);
        addToDb(product.id);
    }
    let newCart = [];
    const removeOneData = (id) => {
        const removeSingeData = cart.filter(pd => pd.id !== id)
        newCart = removeSingeData;
        setCart(newCart);
        removeSingleItem(id);
    }
    const removeCartData = () => {
        const locastorageResetData = []
        setCart(locastorageResetData);
        removeCart()
    }



    return (
        <div className="shopArea">
            <div className="home_card_left">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        removeOneData={removeOneData}
                    ></Product>)
                }
            </div>
            <div className="home_card_right">
                <Cart cart={cart} removeCartData={removeCartData}>
                    <Link to="/order">
                        Order Now
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Home;