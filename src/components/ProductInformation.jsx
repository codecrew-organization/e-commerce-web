import AddToCart from "./AddToCart";

const ProductInformation = ({
  product,
  setQuantity,
  setTotalPrice,
  setCartItem,
}) => {
  const { id, name, price, description } = product;

  return (
    <div>
      <h2>{name}</h2>
      <p>${price}</p>
      <p>{description}</p>
      <AddToCart
        setQuantity={setQuantity}
        setTotalPrice={setTotalPrice}
        idd={id}
        name={name}
        price={price}
        setCartItem={setCartItem}
      />
    </div>
  );
};

export default ProductInformation;
