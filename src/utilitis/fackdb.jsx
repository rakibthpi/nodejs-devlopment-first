

const addToDb = (id) => {
    let shopingCart = {};
    const storedCart = localStorage.getItem("shoping-cart");
    if (storedCart) {
        shopingCart = JSON.parse(storedCart);
    }
    const quantity = shopingCart[id];
    if (quantity) {
        const newQuentity = quantity + 1;
        shopingCart[id] = newQuentity;
    }
    else {
        shopingCart[id] = 1;
    }
    localStorage.setItem("shoping-cart", JSON.stringify(shopingCart));
}

const removeSingleItem = (id) => {
    let shopingCart = {};
    const storeCart = localStorage.getItem("shoping-cart");
    if (storeCart) {
        shopingCart = JSON.parse(storeCart);
    }
    if (id in shopingCart) {
        // console.log(id)
        delete shopingCart[id];
    }
    localStorage.setItem("shoping-cart", JSON.stringify(shopingCart));
}

const removeCart = () => {
    localStorage.removeItem("shoping-cart");
}

export { addToDb, removeCart, removeSingleItem }