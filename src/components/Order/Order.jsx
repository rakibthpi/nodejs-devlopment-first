// import React from 'react';

import { useLoaderData } from "react-router-dom";

const Order = () => {
    const products = useLoaderData();
    console.log('rakib', products);
    return (
        <div>
            <h3>This is order page area start </h3>
        </div>
    );
};

export default Order;