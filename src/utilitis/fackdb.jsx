

const addToDb = (id) => {
    let shopingCart = getItemCart();
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
    let shopingCart = getItemCart();
    if (id in shopingCart) {
        delete shopingCart[id];
    }
    localStorage.setItem("shoping-cart", JSON.stringify(shopingCart));
}

const removeCart = () => {
    localStorage.removeItem("shoping-cart");
}
const getItemCart = () => {
    let shopingCart = {};
    const storedCart = localStorage.getItem("shoping-cart");
    if (storedCart) {
        shopingCart = JSON.parse(storedCart);
    }

    return shopingCart;
}

export { addToDb, removeCart, removeSingleItem, getItemCart }