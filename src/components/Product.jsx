import { useState } from "react";
import { productData } from "../data";

import ProductInformation from "./ProductInformation";
import ViewCart from "./ViewCart";

const Products = () => {
  const [products, setProducts] = useState(productData);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  const removeFromCart = (index) => {
    const newCartItems = [...cartItem];
    const price = newCartItems[index]?.price || 0;

    newCartItems.splice(index, 1);
    setCartItem(() => newCartItems);
    setQuantity((prev) => prev - 1);
    setTotalPrice((prev) => prev - price);
  };

  const addToCart = ({ id, name, price }) => {
    setQuantity((prev) => prev + 1);
    setTotalPrice((prev) => prev + price);
    setCartItem((prev) => [...prev, { id, name, price }]);
  };

  const checkout = () => {
    setCartItem(() => []);
    setQuantity(0);
    setTotalPrice(0);
  };

  return (
    <div className="w-75 mx-auto">
      <ViewCart
        cartItem={cartItem}
        removeFromCart={removeFromCart}
        quantity={quantity}
        totalPrice={totalPrice}
        checkout={checkout}
      />
      <button className="btn btn-secondary">My Cart</button>
      <ul className="list-group">
        {products.map((product) => (
          <ProductInformation
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
