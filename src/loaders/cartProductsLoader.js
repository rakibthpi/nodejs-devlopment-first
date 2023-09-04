import { getItemCart } from "../utilitis/fackdb";

const cartProductsLoader = async () => {
    const loaderProducts = await fetch('products.json');
    const products = await loaderProducts.json();
    // console.log(products)

    const localData = getItemCart();
    const saveCart = [];
    for (const id in localData) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = localData[id]
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct)
        }

    }


    return saveCart;
}

export default cartProductsLoader;