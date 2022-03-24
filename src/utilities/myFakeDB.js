const addToDB = id => {
    let shoppingCart = getStoredCart();

    // const storedShoppingCart = localStorage.getItem('shopping-cart');
    // if(storedShoppingCart){
    //     shoppingCart = JSON.parse(storedShoppingCart);
    // }
    


    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getStoredCart = () => {
    let shoppingCart = {};

    const storedShoppingCart = localStorage.getItem('shopping-cart');
    if(storedShoppingCart){
        shoppingCart = JSON.parse(storedShoppingCart);
    }
    return shoppingCart;
}

const removeFromDB = id => {
    const storedShoppingCart = localStorage.getItem('shopping-cart');
    if(storedShoppingCart){
        const shoppingCart = JSON.parse(storedShoppingCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCartDB = () =>{
    localStorage.removeItem('shopping-cart');
}

export {
    addToDB,
    getStoredCart,
    removeFromDB,
    deleteShoppingCartDB
}