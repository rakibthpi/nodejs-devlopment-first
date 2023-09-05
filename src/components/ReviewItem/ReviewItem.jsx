/* eslint-disable react/prop-types */
// import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


function ReviewItem({ products, handleProductDelete }) {
    const { id, price, quantity, name, img } = products;
    // console.log(products)
    return (
        <div className='review-item'>
            <img src={img} alt="photos" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={() => handleProductDelete(id)} className='btn-delete'>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
}

export default ReviewItem;