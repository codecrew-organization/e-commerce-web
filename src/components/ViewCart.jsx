const ViewCart = ({ useCart, isHidden }) => {
  const { cartItem, setCartItem } = useCart;

  const checkout = () => {
    setCartItem(() => []);
  };

  const removeFromCart = (index) => {
    console.log("hello World");
    const newCartItems = [...cartItem];
    newCartItems.splice(index, 1);
    setCartItem(() => newCartItems);
  };

  return (
    <div hidden={isHidden}>
      {cartItem.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button onClick={() => removeFromCart(index)}>remove</button>
        </div>
      ))}
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default ViewCart;
