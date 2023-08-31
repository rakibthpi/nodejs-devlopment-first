/* eslint-disable react/prop-types */
import { removeSingleItem } from "../../utilitis/fackdb";
import "./Product.css";

const Product = (props) => {
    const { id, name, price, shipping, img, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;
    const handleRemoveToCart = (id) => {
        removeSingleItem(id);
    }
    return (
        <div className='single_product_item'>
            <img src={img} alt="photos" />
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
            <p>Shipping: {shipping}</p>
            <p>ratings: {ratings}</p>
            <p>Id: {id}</p>
            <button onClick={() => handleAddToCart(props.product)}>Add to Cart</button>
            <button onClick={() => handleRemoveToCart(id)}>Remove to Cart</button>
        </div>
    );
};

export default Product;